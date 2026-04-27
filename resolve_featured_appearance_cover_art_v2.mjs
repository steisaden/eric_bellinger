#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const DEFAULT_USER_AGENT = 'HermesCoverArtResolver/2.0 (contact: local-debug)';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function parseArgs(argv) {
  const args = {
    inputPath: null,
    outputPath: null,
    limit: null,
    verbose: false,
    appleOnly: false,
    mbOnly: false,
  };

  const positional = [];
  for (const raw of argv) {
    if (raw === '--verbose') {
      args.verbose = true;
    } else if (raw === '--apple-only') {
      args.appleOnly = true;
    } else if (raw === '--mb-only') {
      args.mbOnly = true;
    } else if (raw.startsWith('--limit=')) {
      const n = Number(raw.slice('--limit='.length));
      if (!Number.isInteger(n) || n < 1) throw new Error(`Invalid --limit value: ${raw}`);
      args.limit = n;
    } else if (raw.startsWith('--')) {
      throw new Error(`Unknown flag: ${raw}`);
    } else {
      positional.push(raw);
    }
  }

  if (positional.length < 2) {
    throw new Error('Usage: node resolve_featured_appearance_cover_art_v2.mjs <input> <output> [--limit=N] [--verbose] [--apple-only] [--mb-only]');
  }

  args.inputPath = positional[0];
  args.outputPath = positional[1];
  return args;
}

function normalize(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/feat\.?/g, 'feat')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function canonicalTitle(str) {
  return normalize(str)
    .replace(/\bfeat\b.*$/, '')
    .replace(/\bdeluxe\b/g, '')
    .replace(/\bremaster(ed)?\b/g, '')
    .replace(/\bexplicit\b/g, '')
    .replace(/\bclean\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function uniq(arr) {
  return [...new Set(arr.filter(Boolean))];
}

async function readJson(filePath) {
  const text = await fs.readFile(filePath, 'utf8');
  return JSON.parse(text);
}

async function writeJson(filePath, value) {
  const text = JSON.stringify(value, null, 2) + '\n';
  await fs.writeFile(filePath, text, 'utf8');
}

async function fetchJson(url, {method = 'GET', headers = {}} = {}, retries = 3) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        headers: {
          'user-agent': DEFAULT_USER_AGENT,
          ...headers,
        },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        const err = new Error(`HTTP ${res.status} for ${url}${body ? ` :: ${body.slice(0, 200)}` : ''}`);
        err.status = res.status;
        throw err;
      }
      const text = await res.text();
      return JSON.parse(text);
    } catch (err) {
      clearTimeout(timeout);
      lastErr = err;
      const retryable = err?.name === 'AbortError' || String(err?.status ?? '').startsWith('5') || err?.status === 429;
      if (attempt < retries && retryable) {
        await sleep(500 * attempt * attempt);
        continue;
      }
      throw err;
    }
  }
  throw lastErr;
}

async function fetchOk(url, {method = 'GET', headers = {}} = {}, retries = 2) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        headers: {
          'user-agent': DEFAULT_USER_AGENT,
          ...headers,
        },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      return res.ok;
    } catch (err) {
      clearTimeout(timeout);
      lastErr = err;
      if (attempt < retries) {
        await sleep(350 * attempt);
        continue;
      }
      return false;
    }
  }
  return false;
}

async function verifyAppleArtwork(candidateUrl) {
  const sizes = [3000, 1200, 600, 100];
  for (const size of sizes) {
    const url = candidateUrl.replace(/\/\d+x\d+bb\./, `/${size}x${size}bb.`);
    if (await fetchOk(url)) {
      return url;
    }
  }
  return null;
}

function scoreApple(entry, result) {
  const title = canonicalTitle(entry.title);
  const artistCredit = normalize(entry.artist_credit);
  const primaryArtist = normalize(entry.primary_artist);
  const resultTrack = canonicalTitle(result.trackName || '');
  const resultCollection = canonicalTitle(result.collectionName || '');
  const resultArtist = normalize(result.artistName || '');

  const artistMatch =
    resultArtist.includes(primaryArtist) ||
    primaryArtist.includes(resultArtist) ||
    resultCollection.includes(primaryArtist) ||
    resultTrack.includes(primaryArtist) ||
    resultCollection.includes(artistCredit) ||
    resultTrack.includes(artistCredit);

  if (!artistMatch) return 0;

  let score = 0;
  if (resultTrack === title) score += 100;
  if (resultCollection === title) score += 90;
  if (resultTrack.includes(title) || title.includes(resultTrack)) score += 55;
  if (resultCollection.includes(title) || title.includes(resultCollection)) score += 40;
  if (resultArtist.includes(primaryArtist) || primaryArtist.includes(resultArtist)) score += 30;
  if (resultCollection.includes(primaryArtist)) score += 20;
  if (resultTrack.includes(primaryArtist)) score += 15;
  if (resultCollection.includes(artistCredit)) score += 10;
  if (resultTrack.includes(artistCredit)) score += 8;
  if (resultCollection.includes('feat') || resultTrack.includes('feat')) score += 4;
  return score;
}

function scoreRecording(entry, recording) {
  const title = canonicalTitle(entry.title);
  const artistCredit = normalize(entry.artist_credit);
  const primaryArtist = normalize(entry.primary_artist);
  const recTitle = canonicalTitle(recording.title || '');
  const recArtist = normalize((recording['artist-credit'] || []).map((x) => x.name || '').join(' '));

  let score = 0;
  if (recTitle === title) score += 100;
  if (recTitle.includes(title) || title.includes(recTitle)) score += 55;
  if (recArtist.includes(primaryArtist) || primaryArtist.includes(recArtist)) score += 35;
  if (recArtist.includes(normalize(entry.artist_credit))) score += 20;
  if ((recording.releases || []).length) score += 10;
  if ((recording['first-release-date'] || '').slice(0, 4)) score += 2;
  return score;
}

function buildAppleQueries(entry, manifestEntry) {
  const queries = [];
  if (manifestEntry?.resolver_inputs?.itunes_search_term) queries.push(manifestEntry.resolver_inputs.itunes_search_term);
  queries.push(`${entry.title} ${entry.artist_credit}`.trim());
  queries.push(`${entry.title} ${entry.primary_artist}`.trim());
  if (entry.release_groups?.length) queries.push(`${entry.title} ${entry.release_groups[0]}`.trim());
  queries.push(entry.title);
  return uniq(queries);
}

function buildRecordingQueries(entry, manifestEntry) {
  const queries = [];
  if (manifestEntry?.resolver_inputs?.musicbrainz_recording_query) queries.push(manifestEntry.resolver_inputs.musicbrainz_recording_query);
  queries.push(`recording:"${entry.title}" AND artist:"${entry.primary_artist}"`);
  queries.push(`recording:"${entry.title}" AND artist:"${entry.artist_credit}"`);
  return uniq(queries);
}

async function appleSearch(term) {
  const url = 'https://itunes.apple.com/search?' + new URLSearchParams({
    term,
    entity: 'song',
    media: 'music',
    limit: '10',
  }).toString();
  return fetchJson(url);
}

async function musicbrainzRecordingSearch(query) {
  const url = 'https://musicbrainz.org/ws/2/recording/?' + new URLSearchParams({
    query,
    fmt: 'json',
    limit: '5',
  }).toString();
  return fetchJson(url, {headers: {'user-agent': DEFAULT_USER_AGENT}});
}

async function musicbrainzReleaseLookup(releaseMbid) {
  const url = `https://musicbrainz.org/ws/2/release/${releaseMbid}?` + new URLSearchParams({
    inc: 'artist-credits+labels+release-groups',
    fmt: 'json',
  }).toString();
  return fetchJson(url, {headers: {'user-agent': DEFAULT_USER_AGENT}});
}

async function coverArtArchiveLookup(releaseMbid) {
  const url = `https://coverartarchive.org/release/${releaseMbid}/`;
  return fetchJson(url, {headers: {'user-agent': DEFAULT_USER_AGENT}});
}

async function resolveApple(entry, manifestEntry, verbose) {
  const queries = buildAppleQueries(entry, manifestEntry);
  const tried = [];
  for (const query of queries) {
    tried.push(query);
    try {
      const data = await appleSearch(query);
      const results = data.results || [];
      const ranked = results
        .map((result) => ({result, score: scoreApple(entry, result)}))
        .sort((a, b) => b.score - a.score);
      const best = ranked[0];
      if (!best || best.score < 80) continue;

      const artwork100 = best.result.artworkUrl100 || best.result.artworkUrl60 || best.result.artworkUrl30;
      if (!artwork100) continue;
      const verifiedArtworkUrl = await verifyAppleArtwork(artwork100);
      if (!verifiedArtworkUrl) continue;

      if (verbose) {
        console.log(`[apple] ${entry.title} :: matched "${best.result.trackName || best.result.collectionName}" score=${best.score}`);
      }
      return {
        source: 'apple_music',
        page_url: best.result.collectionViewUrl || best.result.trackViewUrl || null,
        artwork_url: verifiedArtworkUrl,
        match_score: best.score,
        query: query,
        matched: {
          artistName: best.result.artistName || null,
          collectionName: best.result.collectionName || null,
          trackName: best.result.trackName || null,
          collectionId: best.result.collectionId || null,
          trackId: best.result.trackId || null,
        },
      };
    } catch (err) {
      if (verbose) {
        console.log(`[apple] ${entry.title} :: query failed ${JSON.stringify(query)} :: ${err.message}`);
      }
    }
  }
  return {source: null, tried_queries: tried};
}

async function resolveMusicBrainz(entry, manifestEntry, verbose) {
  const queries = buildRecordingQueries(entry, manifestEntry);
  const tried = [];
  for (const query of queries) {
    tried.push(query);
    try {
      const data = await musicbrainzRecordingSearch(query);
      const recordings = data.recordings || [];
      const ranked = recordings
        .map((recording) => ({recording, score: scoreRecording(entry, recording)}))
        .sort((a, b) => b.score - a.score);
      const best = ranked[0];
      if (!best || best.score < 85) continue;

      const releases = best.recording.releases || [];
      for (const release of releases) {
        try {
          const releaseLookup = await musicbrainzReleaseLookup(release.id);
          const ccaCount = releaseLookup?.['cover-art-archive']?.count ?? 0;
          const ccaArtwork = releaseLookup?.['cover-art-archive']?.artwork ?? false;
          if (!ccaCount && !ccaArtwork) continue;
          const cca = await coverArtArchiveLookup(release.id);
          const front = (cca.images || []).find((img) => img.front && img.image);
          const fallback = (cca.images || [])[0];
          const chosen = front || fallback;
          if (!chosen?.image) continue;
          if (!(await fetchOk(chosen.image))) continue;

          if (verbose) {
            console.log(`[mb] ${entry.title} :: matched release ${release.id} "${release.title || best.recording.title}" score=${best.score}`);
          }
          return {
            source: 'musicbrainz_caa',
            page_url: `https://musicbrainz.org/release/${release.id}`,
            artwork_url: chosen.image,
            release_mbid: release.id,
            release_title: release.title || null,
            release_score: best.score,
            query: query,
            matched: {
              recordingTitle: best.recording.title || null,
              recordingId: best.recording.id || null,
              releaseId: release.id,
              coverCount: ccaCount,
            },
          };
        } catch (err) {
          if (verbose) {
            console.log(`[mb] ${entry.title} :: release ${release.id} failed :: ${err.message}`);
          }
        }
      }
    } catch (err) {
      if (verbose) {
        console.log(`[mb] ${entry.title} :: query failed ${JSON.stringify(query)} :: ${err.message}`);
      }
    }
  }
  return {source: null, tried_queries: tried};
}

function buildResolvedEntry(entry, apple, mb) {
  const verifiedApple = apple?.source === 'apple_music' ? {
    source: 'apple_music',
    page_url: apple.page_url,
    artwork_url: apple.artwork_url,
    match_score: apple.match_score,
    query: apple.query,
    matched: apple.matched,
  } : null;

  const verifiedMb = mb?.source === 'musicbrainz_caa' ? {
    source: 'musicbrainz_caa',
    page_url: mb.page_url,
    artwork_url: mb.artwork_url,
    release_mbid: mb.release_mbid,
    release_title: mb.release_title,
    release_score: mb.release_score,
    query: mb.query,
    matched: mb.matched,
  } : null;

  const selected = verifiedMb || verifiedApple || null;
  const status = selected ? 'verified' : 'manual_review';

  return {
    ...entry,
    cover_art_resolution: {
      status,
      selected_source: selected?.source || null,
      selected_artwork_url: selected?.artwork_url || null,
      selected_page_url: selected?.page_url || null,
      verified_apple_artwork: verifiedApple,
      verified_musicbrainz_caa_artwork: verifiedMb,
      manual_review: !selected,
      notes: selected
        ? []
        : ['No verified Apple Music or MusicBrainz/Cover Art Archive artwork was found automatically.'],
    },
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.appleOnly && args.mbOnly) {
    throw new Error('Use only one of --apple-only or --mb-only, not both.');
  }

  const inputPath = path.resolve(args.inputPath);
  const outputPath = path.resolve(args.outputPath);
  const baseDir = path.dirname(inputPath);
  const manifestPath = path.join(baseDir, 'eric_bellinger_featured_appearances_cover_art_manifest.json');

  const input = await readJson(inputPath);
  const manifest = await fs.access(manifestPath).then(() => readJson(manifestPath)).catch(() => null);

  const entries = Array.isArray(input.entries) ? input.entries : [];
  const totalToProcess = args.limit ? Math.min(args.limit, entries.length) : entries.length;

  const resolvedEntries = [];
  const summary = {
    total_records: totalToProcess,
    verified_apple_artwork: 0,
    verified_musicbrainz_caa_artwork: 0,
    manual_review: 0,
  };

  for (let i = 0; i < totalToProcess; i++) {
    const entry = entries[i];
    const manifestEntry = manifest?.entries?.find((m) => m.source_index === i) || null;
    if (args.verbose) {
      console.log(`\n[${i + 1}/${totalToProcess}] ${entry.title} :: ${entry.artist_credit}`);
    }

    let apple = null;
    let mb = null;
    if (!args.mbOnly) {
      apple = await resolveApple(entry, manifestEntry, args.verbose);
    }
    if (!args.appleOnly) {
      mb = await resolveMusicBrainz(entry, manifestEntry, args.verbose);
    }

    if (apple?.source === 'apple_music') summary.verified_apple_artwork += 1;
    if (mb?.source === 'musicbrainz_caa') summary.verified_musicbrainz_caa_artwork += 1;
    if ((apple?.source !== 'apple_music') && (mb?.source !== 'musicbrainz_caa')) summary.manual_review += 1;

    resolvedEntries.push(buildResolvedEntry(entry, apple, mb));
  }

  const output = {
    meta: {
      dataset_name: input.dataset_name || null,
      artist: input.artist || null,
      input_file: path.relative(baseDir, inputPath),
      generated_at: new Date().toISOString(),
      resolver: path.basename(process.argv[1] || 'resolve_featured_appearance_cover_art_v2.mjs'),
      node_version: process.version,
      total_input_records: entries.length,
      processed_records: totalToProcess,
      options: {
        limit: args.limit,
        verbose: args.verbose,
        apple_only: args.appleOnly,
        mb_only: args.mbOnly,
      },
      summary,
    },
    entries: resolvedEntries,
  };

  await writeJson(outputPath, output);

  if (args.verbose) {
    console.log(`\nWrote ${outputPath}`);
    console.log(JSON.stringify(summary, null, 2));
  }
}

main().catch((err) => {
  console.error(err?.stack || err?.message || String(err));
  process.exit(1);
});
