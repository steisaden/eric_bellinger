import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { Calendar, ExternalLink, Music2, Youtube, X } from "lucide-react";

import type { Credit, DiscographyItem, DiscographyTrack } from "@/data/discography";
import { CoverMedia } from "./CoverMedia";
import type { DiscographyLink } from "./useDiscography";
import { DISCOGRAPHY_COPY } from "@/data";

type DiscographyDetailsSheetProps = {
  album: DiscographyItem;
  links: DiscographyLink[];
  onClose: () => void;
  reduceMotion: boolean;
};

type TrackLike = DiscographyTrack & {
  disc_number?: number;
  discNumber?: number;
  track_number?: number;
  trackNumber?: number;
  display_title?: string;
  features?: string[];
  primary_artists?: string[];
  featured_artists?: string[];
  credits_status?: string;
  music_video?: DiscographyTrack["music_video"];
};

const normalize = (value: string) => value.trim().toLowerCase();

const canonicalize = (value: string) =>
  normalize(value)
    .replace(/[“”"'’`.,;:!?()[\]{}<>|/\\_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const uniqueBy = <T,>(items: T[], keyFn: (item: T) => string) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

const getDiscNumber = (track: TrackLike) => track.disc_number ?? track.discNumber ?? 1;
const getTrackNumber = (track: TrackLike) => track.track_number ?? track.trackNumber ?? track.num;
const getTrackTitle = (track: TrackLike) => track.display_title ?? track.title;

const dedupeTrackCredits = (credits: Credit[]) => uniqueBy(credits, (credit) => `${canonicalize(credit.role)}|${canonicalize(credit.name)}`);

const dedupeTracklist = (tracks: TrackLike[]) => {
  const merged = new Map<string, TrackLike>();

  for (const track of tracks) {
    const key = `${getDiscNumber(track)}|${getTrackNumber(track)}|${normalize(getTrackTitle(track))}`;
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, {
        ...track,
        credits: dedupeTrackCredits(track.credits ?? []),
      });
      continue;
    }

    merged.set(key, {
      ...existing,
      duration: existing.duration || track.duration,
      musicVideoUrl: existing.musicVideoUrl ?? track.musicVideoUrl ?? null,
      videoEmbed: existing.videoEmbed ?? track.videoEmbed ?? null,
      hasVideo: Boolean(existing.hasVideo || track.hasVideo),
      credits: dedupeTrackCredits([...(existing.credits ?? []), ...(track.credits ?? [])]),
    });
  }

  return [...merged.values()].sort((left, right) => {
    const discDiff = getDiscNumber(left) - getDiscNumber(right);
    if (discDiff !== 0) {
      return discDiff;
    }
    return getTrackNumber(left) - getTrackNumber(right);
  });
};

const formatNames = (credits: Credit[]) => uniqueBy(credits, (credit) => canonicalize(credit.name)).map((credit) => credit.name);

const groupCredits = (credits: Credit[], keyword: string) =>
  formatNames(
    credits.filter((credit) => {
      const role = normalize(credit.role);
      if (keyword === "writer") {
        return role.includes("writer") || role.includes("composer");
      }
      return role.includes(keyword);
    }),
  );

const compactNames = (names: string[], limit = 2) => {
  const uniqueNames = uniqueBy(names, (name) => normalize(name));
  if (uniqueNames.length <= limit) {
    return uniqueNames;
  }

  return [...uniqueNames.slice(0, limit), `+${uniqueNames.length - limit} more`];
};

export function DiscographyDetailsSheet({ album, links, onClose, reduceMotion }: DiscographyDetailsSheetProps) {
  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string; embedUrl: string | null } | null>(null);
  const tracklist = useMemo(() => dedupeTracklist(album.tracklist as TrackLike[]), [album.tracklist]);
  const featuredArtists = useMemo<string[]>(() => {
    const artists: string[] = tracklist.flatMap((track) =>
      dedupeTrackCredits(track.credits ?? [])
        .filter((credit) => normalize(credit.role).includes("featured"))
        .map((credit) => credit.name),
    );

    return uniqueBy(artists, (name) => canonicalize(name));
  }, [tracklist]);
  const tracksWithVideo = tracklist.filter((track) => track.hasVideo);
  const hasMultipleDiscs = tracklist.some((track) => getDiscNumber(track) > 1);
  const trackGroups = useMemo(() => {
    const groups = new Map<number, TrackLike[]>();

    for (const track of tracklist) {
      const discNumber = getDiscNumber(track);
      const current = groups.get(discNumber) ?? [];
      current.push(track);
      groups.set(discNumber, current);
    }

    return Array.from(groups.entries())
      .sort(([leftDisc], [rightDisc]) => leftDisc - rightDisc)
      .map(([discNumber, tracks]) => ({ discNumber, tracks }));
  }, [tracklist]);
  const albumFacts = [
    { label: "Type", value: album.type },
    { label: "Year", value: String(album.year) },
    { label: "Tracks", value: String(tracklist.length) },
    { label: "Video tracks", value: String(tracksWithVideo.length) },
    { label: "Featured artists", value: String(featuredArtists.length) },
  ];

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeVideo]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`discography-title-${album.id}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-white/70 p-3 backdrop-blur-md md:items-start md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={reduceMotion ? false : { y: 48, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={reduceMotion ? undefined : { y: 48, scale: 0.98 }}
        transition={{ type: "spring", damping: 28, stiffness: 240 }}
        className="flex w-full max-w-4xl max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-[#fffdf8] shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:mt-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="shrink-0 flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 md:px-6">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-eb-accent">{DISCOGRAPHY_COPY.detailsSheetTitle}</p>
            <h3 id={`discography-title-${album.id}`} className="mt-2 text-2xl font-display font-light md:text-3xl">
              {album.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {album.type} • {album.year}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white/80 p-3 text-slate-700 transition-colors hover:bg-slate-100/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
            aria-label={`Close details for ${album.title}`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">
          <div className="grid items-start gap-6 md:grid-cols-[minmax(220px,280px)_minmax(0,1fr)]">
            <div className="self-start rounded-[24px] border border-slate-200 bg-white/95 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl md:sticky md:top-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-white/85">
                <CoverMedia
                  asset={album.coverAsset ?? { kind: "image", src: album.coverUrl, poster: album.coverUrl }}
                  alt={album.title}
                  loading="lazy"
                  reduceMotion={reduceMotion}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{DISCOGRAPHY_COPY.contextLabel}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700 md:text-base">
                  Release facts, credits, and track rows are shown here from the verified catalog manifest.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {albumFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-slate-200 bg-white/95 p-4">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{fact.label}</p>
                    <p className="mt-1 text-sm text-slate-900">{fact.value}</p>
                  </div>
                ))}
                {album.releaseDate && (
                  <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 sm:col-span-2 xl:col-span-1">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Release date</p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-900/80">
                      <Calendar className="h-4 w-4 text-eb-accent" />
                      {album.releaseDate}
                    </p>
                  </div>
                )}
              </div>

              {album.sourcePage && (
                <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Source</p>
                  <a
                    href={album.sourcePage}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-sm text-slate-900/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-slate-900"
                  >
                    {album.sourcePage}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {album.sourceRefs?.length ? <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-500">Refs: {album.sourceRefs.join(" • ")}</p> : null}
                </div>
              )}

              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Streaming links</p>
                {links.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-900/80 transition-colors hover:bg-white hover:text-black"
                      >
                        <Music2 className="h-4 w-4" />
                        {link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-slate-600">Streaming links pending verification.</p>
                )}
              </div>

              {album.streamingStats && (
                <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Streaming Links &amp; Certifications</p>
                  <p className="mt-1 text-sm text-slate-900/80">
                    {album.streamingStats.source} • {album.streamingStats.status} • {album.streamingStats.date}
                  </p>
                </div>
              )}

              {album.credits.length > 0 && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Album credits</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {album.credits.map((credit) => (
                      <span key={`${credit.role}-${credit.name}`} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-800/70">
                        {credit.role}: {credit.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {featuredArtists.length > 0 && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Featured Artists</p>
                  <p
                    className="mt-3 truncate rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-[10px] uppercase tracking-widest text-slate-700"
                    title={featuredArtists.join(", ")}
                  >
                    {compactNames(featuredArtists, 3).join(", ")}
                  </p>
                </div>
              )}

              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Tracklist</p>
                {tracklist.length > 0 ? (
                  <div className="mt-3 grid gap-4">
                    {trackGroups.map(({ discNumber, tracks }) => (
                      <div key={discNumber} className="grid gap-2">
                        {hasMultipleDiscs && (
                          <p className="px-1 text-[10px] font-mono uppercase tracking-widest text-slate-500">Disc {discNumber}</p>
                        )}
                        {tracks.map((track) => {
                          const credits = dedupeTrackCredits(track.credits ?? []);
                          const featured = compactNames(formatNames(credits.filter((credit) => normalize(credit.role).includes("featured"))), 2);
                          const writers = compactNames(groupCredits(credits, "writer"), 2);
                          const producers = compactNames(groupCredits(credits, "producer"), 2);
                          const personnel = compactNames(
                            formatNames(
                              credits.filter(
                                (credit) =>
                                  !normalize(credit.role).includes("featured") &&
                                  !normalize(credit.role).includes("writer") &&
                                  !normalize(credit.role).includes("composer") &&
                                  !normalize(credit.role).includes("producer"),
                              ),
                            ),
                            2,
                          );

                          return (
                            <div
                              key={`${getDiscNumber(track)}-${getTrackNumber(track)}-${normalize(getTrackTitle(track))}`}
                              className="group rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800/75 transition-colors hover:border-slate-200/80 hover:bg-white/95"
                            >
                              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                                <div className="min-w-0 space-y-2">
                                  <div className="flex min-w-0 items-center gap-2">
                                    <span className="shrink-0 text-[10px] uppercase tracking-widest text-slate-500">
                                      {hasMultipleDiscs ? `Disc ${getDiscNumber(track)} • ${getTrackNumber(track)}` : getTrackNumber(track)}
                                    </span>
                                    <span className="min-w-0 truncate font-medium text-slate-900/80" title={getTrackTitle(track)}>
                                      {getTrackTitle(track)}
                                    </span>
                                    {track.musicVideoUrl && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setActiveVideo({
                                            title: getTrackTitle(track),
                                            url: track.musicVideoUrl ?? "",
                                            embedUrl: track.videoEmbed ?? track.musicVideoUrl ?? null,
                                          })
                                        }
                                        aria-label={`Play music video for ${getTrackTitle(track)}`}
                                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-red-700 transition-colors hover:bg-red-500/20 hover:text-red-900"
                                      >
                                        <Youtube className="h-4 w-4" />
                                        Video
                                      </button>
                                    )}
                                  </div>

                                  {featured.length > 0 && (
                                    <p className="truncate text-[10px] uppercase tracking-widest text-slate-600" title={featured.join(", ")}>
                                      Feat. {featured.join(", ")}
                                    </p>
                                  )}

                                  {(writers.length > 0 || producers.length > 0 || personnel.length > 0) && (
                                    <p className="truncate text-[10px] uppercase tracking-widest text-slate-600" title={[...writers, ...producers, ...personnel].join(" • ")}>
                                      {[writers.length > 0 ? `Writers: ${writers.join(", ")}` : null, producers.length > 0 ? `Producers: ${producers.join(", ")}` : null, personnel.length > 0 ? `Credits: ${personnel.join(", ")}` : null]
                                        .filter(Boolean)
                                        .join(" | ")}
                                    </p>
                                  )}

                                  {track.credits_status && !["complete", "verified", "full"].includes(normalize(track.credits_status)) && (
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500">Credits status: {track.credits_status}</p>
                                  )}
                                </div>
                                <span className="shrink-0 text-[10px] uppercase tracking-widest text-slate-500">{track.duration}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 rounded-2xl border border-dashed border-slate-200 bg-white/80 px-4 py-4 text-sm text-slate-600">
                    Tracklist pending source verification.
                  </div>
                )}
              </div>

              <AnimatePresence>
                {activeVideo && (
                  <motion.div
                    key={activeVideo.title}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-white/85 p-4 backdrop-blur-xl md:p-6"
                    onClick={() => setActiveVideo(null)}
                  >
                    <motion.div
                      initial={reduceMotion ? false : { y: 24, scale: 0.98 }}
                      animate={{ y: 0, scale: 1 }}
                      exit={reduceMotion ? undefined : { y: 24, scale: 0.98 }}
                      transition={{ type: "spring", damping: 26, stiffness: 240 }}
                      className="mt-6 w-full max-w-4xl overflow-hidden rounded-[28px] border border-slate-200 bg-[#0b0b12] shadow-[0_35px_120px_rgba(0,0,0,0.6)]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 md:px-6">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-eb-accent">Music Video</p>
                          <h4 className="mt-1 text-lg font-display font-light text-slate-900 md:text-xl">{activeVideo.title}</h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveVideo(null)}
                          className="rounded-full border border-slate-200 bg-white/80 p-3 text-slate-700 transition-colors hover:bg-slate-100/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-eb-accent/70"
                          aria-label={`Close music video for ${activeVideo.title}`}
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="p-3 md:p-4">
                        <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white">
                          <div className="aspect-video">
                            {activeVideo.embedUrl ? (
                              <iframe
                                src={activeVideo.embedUrl.includes("embed") ? activeVideo.embedUrl : activeVideo.embedUrl.replace("watch?v=", "embed/")}
                                title={activeVideo.title}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-slate-600">
                                No playable embed was found for this video.
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <a
                            href={activeVideo.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-700 transition-colors hover:bg-red-500/20 hover:text-red-900"
                          >
                            <Youtube className="h-4 w-4" />
                            Watch on YouTube
                          </a>
                           <p className="text-[10px] uppercase tracking-widest text-slate-500">Watch the official video here or open it on YouTube.</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
