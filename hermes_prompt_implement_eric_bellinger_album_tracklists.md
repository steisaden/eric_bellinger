# Hermes Prompt — Implement Eric Bellinger Album Tracklists/Credits JSON

Hermes, implement the Eric Bellinger album/project data file into this project.

## Project directory

`/eric-bellinger`

## Source data file

The user will save or copy this JSON file into the project:

`/eric-bellinger/eric_bellinger_albums_tracklists_credits_best_effort.json`

If the file is not there yet, ask for it or look in the project root/downloads folder before changing app code.

## Goal

Wire the Eric Bellinger albums/projects dataset into the correct frontend data layer so the website can display:

- every Eric Bellinger album/project card
- album title
- release year/date
- project type
- cover art if available or later resolved
- streaming links
- full ordered tracklist
- featured artists per track
- credit placeholders for writers/producers/personnel
- data-quality status for anything that still needs verification

The JSON already contains 44 album/project records and 32 populated tracklists. Some projects are intentionally marked `needs_tracklist_resolution`. Do **not** invent missing tracks or credits.

## Implementation rules

1. Work inside `/eric-bellinger`.
2. Inspect the repo before editing:
   - identify the framework: React/Vite, Next.js, Astro, etc.
   - identify existing folders such as:
     - `src/data`
     - `src/lib`
     - `src/content`
     - `src/app`
     - `src/pages`
     - `src/components`
3. Place the JSON in the most appropriate existing data folder.
   - Preferred target if it exists: `src/data/ericBellingerAlbums.json`
   - If the project uses `src/lib/data`, use: `src/lib/data/ericBellingerAlbums.json`
   - If the project uses Next.js app router and has no data folder, create: `src/data/ericBellingerAlbums.json`
4. Do not overwrite unrelated existing files without making a backup.
5. Preserve the JSON structure. Do not flatten it unless the UI layer requires a typed adapter.
6. If TypeScript is used, create a type file:
   - preferred: `src/types/ericBellingerAlbums.ts`
   - include interfaces for:
     - `AlbumDataset`
     - `AlbumRecord`
     - `TrackRecord`
     - `TrackCredits`
     - `StreamingUrls`
7. Create a small data accessor/helper:
   - preferred: `src/lib/getEricBellingerAlbums.ts`
   - functions:
     - `getAllEricBellingerAlbums()`
     - `getEricBellingerAlbumById(id)`
     - `getEricBellingerAlbumsByYear(year)`
     - `getEricBellingerAlbumsByProjectType(type)`
     - `getEricBellingerAlbumsWithVerifiedTracklists()`
     - `getEricBellingerAlbumsNeedingResolution()`
8. If the site already has a discography/albums section, wire the data there.
9. If there is no discography section yet, create a clean reusable component:
   - `src/components/discography/AlbumGrid.tsx`
   - `src/components/discography/AlbumCard.tsx`
   - `src/components/discography/AlbumDetailDrawer.tsx` or `AlbumDetailModal.tsx`
10. The UI must show unresolved metadata honestly:
    - if `tracklist_status === "needs_tracklist_resolution"`, show “Tracklist verification pending”
    - do not show empty tracklist as if it is complete
11. Do not use AI calls for runtime generation. This should be static data-driven rendering.
12. Do not fetch streaming data on every page load.
13. Keep data loading local/static unless the project already uses an API route.

## Recommended UI behavior

### Album card
Show:
- cover image if a `cover_art` field exists later
- title
- year
- project type
- track count
- primary streaming route:
  - `album.urls.primary_router`
  - fallback to `album.urls.official_smart_link`
  - fallback to `album.urls.universal_smart_link_generated_from_apple_id`
  - fallback to `album.urls.direct.spotify`
  - fallback to `album.urls.direct.apple_music`

### Album detail view
Show:
- title
- release date
- artist credit
- project type
- streaming platform buttons
- ordered tracklist
- features on each track
- writer/producer/personnel credit placeholders if populated
- source/data-quality note

### Track row
For each track, show:
- track number
- disc number only when album has multiple discs
- title
- featured artists
- duration
- optional producer/writer credits if present

## Data quality handling

The JSON has this structure:

- `record_count`
- `albums_with_tracklists`
- `albums_needing_resolution`
- `albums[]`
  - `id`
  - `title`
  - `artists`
  - `project_type`
  - `release_date`
  - `year`
  - `catalog_ids`
  - `urls`
  - `tracklist_status`
  - `track_count_expected`
  - `tracks[]`
  - `credits_scope`
  - `implementation`
  - `source_notes`

Do not delete these fields.

If a tracklist is missing, leave the album visible but mark it unresolved.

## Optional enrichment task

If time allows, create a separate resolver/enrichment script without changing the base JSON:

`tools/enrichEricBellingerAlbumCredits.mjs`

The script should:
- read `src/data/ericBellingerAlbums.json`
- use Apple/iTunes lookup when `apple_music_album_id` exists
- use MusicBrainz release/release-group search when needed
- never guess data
- write enriched output to:
  - `src/data/ericBellingerAlbums.enriched.json`
- preserve the original base JSON
- log unresolved projects

Projects currently needing resolution include:
- Meditation Music
- Nine
- Scenarios
- Hors D'oeuvres
- Feelin' Like Christmas
- Genius
- Eric B For President: Term 3
- Eric B For President: Term 3 (Acoustic Version)
- New Light: Acoustics
- New Light: The Remixes
- Rock the Bellinger
- 1(800)HIT-EAZY: Line 2 (Sped Up)

## Acceptance criteria

When finished:

1. The app builds without errors.
2. The album data is importable from the correct local data path.
3. Album cards render from the JSON, not hardcoded arrays.
4. Tracklists render correctly for populated albums.
5. Featured artists show clearly.
6. Missing tracklists are labeled as pending verification.
7. Streaming buttons route to the correct URLs already present in the JSON.
8. No runtime API calls are required.
9. A short implementation report is created at:

`/eric-bellinger/docs/eric-bellinger-album-data-implementation-report.md`

The report should include:
- files changed
- data file location
- components created/updated
- helper functions added
- unresolved metadata/projects
- build/test command results
- next recommended enrichment steps

## Suggested commands

Run these from `/eric-bellinger`:

```bash
pwd
ls
find . -maxdepth 3 -type d | sort | sed -n '1,120p'
node -e "const d=require('./eric_bellinger_albums_tracklists_credits_best_effort.json'); console.log(d.record_count, d.albums_with_tracklists, d.albums_needing_resolution)"
```

Then proceed with implementation based on the actual repo structure.
