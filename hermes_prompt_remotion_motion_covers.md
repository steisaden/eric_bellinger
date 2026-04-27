# Hermes Prompt — Eric Bellinger Motion Covers (Plain-English Version)

You are Hermes, and I want you to build a **pitch-ready motion-cover package** for Eric Bellinger using **Remotion**.

## First: Read and use both instruction files
Before you do anything else, ingest and follow these two files:

1. `/mnt/data/eric_bellinger_motion_cover_hermes_instructions.json`
2. `/mnt/data/eric_bellinger_motion_cover_remotion_pack.json`

### How to use them
- Treat the first file as the **creative brief + master execution rules**.
- Treat the second file as the **Remotion-specific implementation pack**.
- The first file tells you **what** to make.
- The second file tells you **how** to build it in Remotion.

Do **not** ignore either file.

## Objective
Create subtle, elegant, seamless **motion covers** for these Eric Bellinger projects using the original supplied album artwork:

- Cuffing Season
- Cuffing Season Pt. 2
- Cuffing Season 3
- It'll All Make Sense Later
- It'll All Make Sense Later (Deluxe)
- It All Makes Sense
- It All Makes Sense (Deluxe)

These are for **creative pitch purposes** only. The goal is to show Eric Bellinger’s team what tasteful motion-cover treatments could look like.

## Core rules
- Preserve the original cover art.
- Do **not** redesign the covers.
- Do **not** move typography unless absolutely necessary, and ideally keep typography static.
- Keep all motion subtle, premium, tasteful, and believable.
- Every final deliverable must be a **seamless loop**.
- This should feel like the art is **breathing**, not like a flashy visualizer.

## Required technical format
Use the Remotion pack as the source of truth for implementation, but the final output should be:
- 1080x1080
- 24 fps
- 8 seconds
- H.264 MP4
- no audio

Also export:
- a preview MP4 for each cover
- a poster frame PNG for each cover
- a short handoff note per cover

## Required workflow
Follow this order:

### Phase 1 — Ingest and preflight
1. Read both JSON files.
2. Confirm the source album-cover images exist.
3. If any source artwork is missing, stop and report what is missing.
4. Create a short preflight report for each album covering:
   - the motion targets
   - the masking plan
   - the effect layers you will use
   - any likely technical issues
   - expected export filenames

### Phase 2 — Build the Remotion project
Use the Remotion pack to set up the project structure.

At minimum, create:
- `src/Root.tsx`
- `src/config/albums.ts`
- `src/compositions/MotionCover.tsx`
- reusable effect layers/components for water, smoke, foliage, particles, stars, snow, and glow
- source-cover and derived-mask asset folders

Register one composition per album in `Root.tsx`.

### Phase 3 — Create masks and effect layers
For each album, isolate the required motion targets using masks or cutouts.
Use the Remotion instruction pack for the layer types, effect logic, and animation recipes.

Important:
- keep mask edges clean
- avoid visible cutout artifacts
- keep movement restrained
- phase and speed should feel organic

### Phase 4 — Animate per album
Implement the requested effects exactly as directed in the JSON files.

#### Album-specific summary
**Cuffing Season**
- cloud/smoke movement
- flowers and trees inside the head outlines sway in the wind
- sun subtly twinkles
- water ebbs and flows

**Cuffing Season Pt. 2**
- smoke and particles in the top-right square
- stars twinkling in the bottom-right square
- gentle blowing snow in the top-left square
- clouds moving in the bottom-left square

**Cuffing Season 3**
- flowers, palm tree limbs, and leaves subtly move/rustle like there is wind
- water in the background of the middle image ebbs and flows

**It’ll All Make Sense Later**
- water moving
- flora moving
- smoke moving

**It’ll All Make Sense Later (Deluxe)**
- soft green glow behind Eric Bellinger

**It All Makes Sense**
- water flowing effect only

**It All Makes Sense (Deluxe)**
- subtle glow added to the spotlight only

### Phase 5 — QA and refinement
For each composition:
- preview it inside Remotion
- reduce intensity if it feels too strong
- check loop continuity
- check typography readability
- check for mask-edge problems
- make sure the motion feels official and pitch-ready

### Phase 6 — Export
Render:
- preview MP4
- final MP4
- poster frame PNG

Use clean file names based on the album slug.

### Phase 7 — Handoff
Deliver:
- the Remotion source project
- all masks created
- preview renders
- final renders
- poster frames
- a short summary report

For each album, the summary report should include:
- album title
- source cover path
- animated elements
- mask files created
- effect layers used
- output paths
- technical notes
- creative notes

## Creative quality bar
I want this to feel:
- premium
- subtle
- cinematic
- elegant
- believable
- official-adjacent

I do **not** want:
- flashy motion graphics
- obvious fake warping
- overly bright glows
- heavy snow or dense particles
- effects that distract from the original art

## If you need to make judgment calls
When something is ambiguous:
- preserve the original art first
- animate conservatively
- choose subtle motion over dramatic motion
- document your assumption in the handoff notes

## Final instruction
Use the Remotion-specific JSON/instruction pack as your implementation blueprint, and use the base Hermes JSON as your master creative brief. Build the motion covers end-to-end and return a structured handoff.
