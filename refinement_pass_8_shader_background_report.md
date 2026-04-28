# Eric Bellinger Refinement Pass 8 Report

## Files changed
- `src/components/background/GalaxySwirlBackground.tsx`
- `src/App.tsx`
- `src/index.css`

## How the shader was implemented
- Added a new fixed, full-screen WebGL background component at `src/components/background/GalaxySwirlBackground.tsx`.
- The shader uses a procedural spiral / nebula field with subtle stars, grain, and a soft vignette.
- It is mounted once at the app root so it sits behind the entire site instead of scrolling with any section.
- The component is wrapped with `pointer-events-none` and `aria-hidden="true"` so it never blocks interaction.

## Static vs animated behavior
- Default behavior is `staticMode = true`.
- In static mode, the shader renders a single ambient frame and re-renders on resize.
- If `staticMode` is disabled, the component can animate very slowly, but the site uses the static mode by default.
- `prefers-reduced-motion` forces static behavior.

## Brand color values used
- Purple: `#ad46ff` → `[0.6784, 0.2745, 1.0]`
- Gold: `#ff9d00` → `[1.0, 0.6157, 0.0]`
- Warm amber core: `#ff6a1a`-style accent → `[1.0, 0.32, 0.08]`
- Deep background base: `#05030a` / `#090611` / `#12091f`

## Fallback behavior
- Added an `.eb-shader-fallback` CSS class in `src/index.css`.
- If WebGL is unavailable, the site still shows a premium purple/gold ambient gradient.
- No runtime error is thrown if the WebGL context or shader program cannot be created.

## Performance protections
- DPR is capped to 1.5 on desktop and 1.0 on mobile.
- The canvas is only repainted continuously when animation is actually enabled.
- The shader pauses when the document is hidden and resumes only if animated mode is active.
- WebGL resources are cleaned up on unmount: animation frame, buffers, program, and shaders.
- Resize handling is lightweight and uses a `ResizeObserver` when available.

## Reduced-motion behavior
- `prefers-reduced-motion` disables animation and keeps the background static.
- The canvas is still rendered as an ambient texture so the page remains visually consistent.

## Build / test results
- `npm run build` ✅
- `npm run lint` ✅
- Browser QA ✅
- Visual inspection confirmed the background reads as subtle and cinematic, not like a loud visualizer.

## Recommended tuning values if you want the effect stronger/weaker
**Stronger / more visible:**
- `colorIntensity={0.14}`
- canvas opacity closer to `0.5`
- slightly reduce the top dark overlay opacity

**Weaker / more understated:**
- `colorIntensity={0.06}`
- canvas opacity closer to `0.28`
- increase the dark overlay opacity a bit

## Remaining notes
- The current balance is intentionally subtle so the shader supports the content instead of competing with it.
- If desired, the next refinement could lightly tune section opacity/transparency to let the shader breathe a bit more in the negative space.
