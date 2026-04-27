# Eric Bellinger Motion Covers — Remotion Starter Scaffold

This is a starter scaffold for Hermes to implement the Eric Bellinger motion-cover package.

Before implementation, Hermes should ingest:
- `/mnt/data/eric_bellinger_motion_cover_hermes_instructions.json`
- `/mnt/data/eric_bellinger_motion_cover_remotion_pack.json`
- `/mnt/data/hermes_super_prompt_remotion_motion_covers.txt`

## Quick start

```bash
npm install
npm run dev
```

## Expected workflow
1. Put the album covers into `assets/source-covers/`
2. Create derived masks in `assets/derived-masks/{album-slug}/`
3. Update `src/config/albums.ts` paths/intensities as needed
4. Implement/refine effect layers in `src/components/`
5. Preview in Remotion Studio
6. Render outputs

## Example render command

```bash
npx remotion render src/index.ts cuffing-season renders/final/cuffing-season_motion_cover_v1.mp4
```
