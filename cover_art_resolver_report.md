# Eric Bellinger Featured-Appearances Cover-Art Resolver Report

## Commands run

```bash
cd /Users/steisaden/Development/eric-bellinger
node -v
node --check resolve_featured_appearance_cover_art_v2.mjs
node resolve_featured_appearance_cover_art_v2.mjs ./eric_bellinger_featured_appearances_best_effort.json ./test_cover_art_verified.json --limit=5 --verbose
node resolve_featured_appearance_cover_art_v2.mjs ./eric_bellinger_featured_appearances_best_effort.json ./eric_bellinger_featured_appearances_cover_art_verified.json --verbose
```

## Node version

- `v22.22.2`

## Input file used

- `/Users/steisaden/Development/eric-bellinger/eric_bellinger_featured_appearances_best_effort.json`

## Output files generated

- `/Users/steisaden/Development/eric-bellinger/test_cover_art_verified.json`
- `/Users/steisaden/Development/eric-bellinger/eric_bellinger_featured_appearances_cover_art_verified.json`

## Validation summary

- Total records processed: `113`
- Verified Apple artwork hits: `66`
- Verified MusicBrainz / Cover Art Archive hits: `100`
- Manual review / unresolved records: `5`

Note: Apple and MusicBrainz counts are source-specific and are not mutually exclusive.

## First 10 successful matches

1. `#YAK (You Already Know)` — `Da Brat feat. Sage the Gemini & Eric Bellinger` — `apple_music`
2. `2 Piece` — `Mally Mall feat. Migos, Eric Bellinger, Jeremih & Jazz Lazer` — `musicbrainz_caa`
3. `4 Digits` — `DJ Mustard feat. Fabolous & Eric Bellinger` — `musicbrainz_caa`
4. `4 Digits` — `Mustard, Fabolous & Eric Bellinger` — `musicbrainz_caa`
5. `Action` — `Nef the Pharaoh feat. Ty Dolla $ign & Eric Bellinger` — `musicbrainz_caa`
6. `Alive` — `Kemba feat. Eric Bellinger` — `musicbrainz_caa`
7. `Anyway` — `DJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger & Mishon` — `musicbrainz_caa`
8. `Anyway` — `DJ Carisma feat. Tory Lanez, Sage the Gemini, Eric Bellinger & Mishon` — `musicbrainz_caa`
9. `April 21st` — `G Perico feat. Eric Bellinger` — `musicbrainz_caa`
10. `Back It Up` — `BJ the Chicago Kid & Eric Bellinger` — `musicbrainz_caa`

## First 10 unresolved records

1. `My Blessing` — `Grafh feat. Eric Bellinger`
2. `No Sleep` — `I.D. feat. Eric Bellinger`
3. `On My Way` — `O.T. Genasis, Eric Bellinger, AD & DJ Era`
4. `Questions` — `DJ Luke Nasty & Eric Bellinger`
5. `Treat Yourself` — `Wale feat. Eric Bellinger`

## Errors encountered

- Initial project path request referenced `/eric-bellinger`, but the actual working project directory on disk was `/Users/steisaden/Development/eric-bellinger`.
- The resolver file did not exist at the start, so it had to be created.
- The first Apple scoring pass was too permissive and matched at least one wrong track; that was fixed before the full run.

## Fixes applied

- Created `resolve_featured_appearance_cover_art_v2.mjs`.
- Added Apple Music search + artwork verification.
- Added MusicBrainz recording search + Cover Art Archive lookup.
- Tightened Apple matching so it requires a primary-artist / artist-credit match before accepting a result.
- Kept unresolved entries marked for manual review instead of guessing artwork URLs.

## Checkpoint files

- None were created.

## Next recommended steps

- Review the 5 unresolved records manually.
- If more coverage is needed, add a secondary pass for alternate title/artist aliases or broader MusicBrainz search heuristics.
- If desired, export a narrower review sheet of only the unresolved entries for manual lookup.
