# Eric Bellinger Refinement Pass 10 Report

## Files changed
- `src/components/background/GalaxySwirlBackground.tsx`
- `src/App.tsx`

## StaticMode logic removed
- Removed the `staticMode` prop and all one-frame / resize-only rendering logic.
- Removed the frozen-time / static uniform path.
- The shader now runs continuously with `requestAnimationFrame` while the page is visible.

## Fixed viewport wrapper implementation
- Kept the shader mounted near the app root.
- The outer wrapper remains `fixed inset-0 z-0 pointer-events-none overflow-hidden`.
- The wrapper also has explicit viewport sizing (`width: 100vw; height: 100vh`).
- The canvas is rendered as a full-viewport layer and does not live inside a scrolling section.
- Site content stays above it in a `relative z-10` wrapper.

## Old background layers removed or neutralized
- No competing page-wide background gradients remain on `body`, `#root`, or the app shell.
- The site keeps a dark fallback base color, but the global background is now transparent enough for the shader to remain visible.
- Search confirmed no remaining global `radial-gradient`, `background-attachment: fixed`, or full-page `body::before` / `body::after` overlays that cover the shader.

## Exact shader settings used
- `rotationSpeed = 0.17`
- `starDensity = 0.39`
- `armCurvature = 8.0`
- `starSize = 0.73`
- `color1 = [0.102, 0.502, 0.902]`
- `color2 = [0.702, 0.102, 0.8]`
- `color3 = [0.902, 0.4, 0.2]`
- `colorIntensity = 0.2`
- `enableBloom = true`
- `twinkleSpeed = 0`
- `starTrails = 0`
- `swirlType = 0`

## Visibility / pause behavior
- Animation pauses when `document.hidden` is true.
- Animation resumes when the tab becomes visible again.
- A `visibilitychange` listener controls the pause/resume cycle.

## DPR / performance handling
- Canvas size is computed from `clientWidth` / `clientHeight` and a capped DPR.
- DPR cap is `1.0` on mobile and `1.5` on desktop.
- WebGL viewport is updated to the actual drawing buffer size.
- Resources are cleaned up on unmount:
  - `cancelAnimationFrame`
  - resize observer disconnect
  - visibility listener removal
  - buffer deletion
  - program deletion
- The implementation also keeps `pointer-events: none` so it never blocks interaction.

## Build / lint results
- `npm run build` ✅
- `npm run lint` ✅

## Remaining issues / tuning notes
- The shader is intentionally animated and visually present; if it feels too strong on some pages, the quickest tuning levers are `colorIntensity`, `starDensity`, and canvas opacity.
- If mobile ever feels heavy, the DPR cap can be lowered further from `1.0` mobile / `1.5` desktop.
