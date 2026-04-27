# Eric Bellinger motion cover handoff

Generated outputs:

- **Cuffing Season**
  - Source: `assets/source-covers/cuffing-season.jpg`
  - Preview: `renders/preview/cuffing-season.mp4`
  - Final: `renders/final/cuffing-season.mp4`
  - Poster: `renders/posters/cuffing-season.png`
  - Notes: `renders/notes/cuffing-season.md`

- **Cuffing Season Pt. 2**
  - Source: `assets/source-covers/cuffing-season-pt2.jpg`
  - Preview: `renders/preview/cuffing-season-pt2.mp4`
  - Final: `renders/final/cuffing-season-pt2.mp4`
  - Poster: `renders/posters/cuffing-season-pt2.png`
  - Notes: `renders/notes/cuffing-season-pt2.md`

- **Cuffing Season 3**
  - Source: `assets/source-covers/cuffing-season-3.jpg`
  - Preview: `renders/preview/cuffing-season-3.mp4`
  - Final: `renders/final/cuffing-season-3.mp4`
  - Poster: `renders/posters/cuffing-season-3.png`
  - Notes: `renders/notes/cuffing-season-3.md`

- **It'll All Make Sense Later**
  - Source: `assets/source-covers/itll-all-make-sense-later.jpg`
  - Preview: `renders/preview/itll-all-make-sense-later.mp4`
  - Final: `renders/final/itll-all-make-sense-later.mp4`
  - Poster: `renders/posters/itll-all-make-sense-later.png`
  - Notes: `renders/notes/itll-all-make-sense-later.md`

- **It'll All Make Sense Later (Deluxe)**
  - Source: `assets/source-covers/itll-all-make-sense-later-deluxe.jpg`
  - Preview: `renders/preview/itll-all-make-sense-later-deluxe.mp4`
  - Final: `renders/final/itll-all-make-sense-later-deluxe.mp4`
  - Poster: `renders/posters/itll-all-make-sense-later-deluxe.png`
  - Notes: `renders/notes/itll-all-make-sense-later-deluxe.md`

- **It All Makes Sense**
  - Source: `assets/source-covers/it-all-makes-sense.jpg`
  - Preview: `renders/preview/it-all-makes-sense.mp4`
  - Final: `renders/final/it-all-makes-sense.mp4`
  - Poster: `renders/posters/it-all-makes-sense.png`
  - Notes: `renders/notes/it-all-makes-sense.md`

- **It All Makes Sense (Deluxe)**
  - Source: `assets/source-covers/it-all-makes-sense-deluxe.jpg`
  - Preview: `renders/preview/it-all-makes-sense-deluxe.mp4`
  - Final: `renders/final/it-all-makes-sense-deluxe.mp4`
  - Poster: `renders/posters/it-all-makes-sense-deluxe.png`
  - Notes: `renders/notes/it-all-makes-sense-deluxe.md`

Implementation notes:
- Source covers were sourced from the current Apple Music artwork pages already available in the workspace.
- Derived masks were created as SVG assets under `assets/derived-masks/`.
- `public/` symlinks point to `assets/source-covers/` and `assets/derived-masks/` so Remotion static asset loading works.
- The render outputs were verified by successful Remotion renders for all seven compositions.
