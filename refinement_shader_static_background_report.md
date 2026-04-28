# Eric Bellinger Static Shader Background Implementation Report

## Files changed
- `src/components/background/GalaxySwirlBackground.tsx`
- `src/App.tsx`
- `src/index.css`

## Old backgrounds removed or neutralized
- Removed the global page gradient treatment from `body` in `src/index.css`.
- Removed the `background-attachment: fixed` global page treatment so the old background system no longer competes with the shader.
- Neutralized the root shell background in `src/App.tsx` by making the outer app wrapper transparent instead of using the page background token.
- Kept section-level decorative glows and translucent card backgrounds because they support readability and are not the global background layer.

## Where the shader is mounted
- `GalaxySwirlBackground` is mounted at the app root in `src/App.tsx`, before the visible content wrapper.
- The structure is:
  - shader layer at the root
  - content wrapper in `relative z-10`
  - site sections, cards, nav, and footer above it

## StaticMode behavior
- `staticMode` defaults to `true`.
- In static mode, the shader renders a single ambient frame on mount and again on resize.
- Continuous `requestAnimationFrame` animation only happens when `staticMode` is explicitly disabled.
- Reduced motion also forces the shader into static rendering.
- The default time uniform in static mode is fixed at `12.0`.

## Z-index and viewport structure
- Shader wrapper: `fixed inset-0 z-0 pointer-events-none overflow-hidden`.
- Canvas: fixed-viewport size with `width: 100vw` and `height: 100vh`.
- Content wrapper: `relative z-10`.
- No negative z-index is used, so the shader does not disappear behind the document background.
- The shader stays fixed in the viewport while scrolling.

## Brand colors used
- Added CSS variables to `src/index.css`:
  - `--brand-purple: #ad46ff`
  - `--brand-yellow: #ff9d00`
  - `--brand-amber: #ff6a1a`
  - plus RGB helper vars for fallback styling
- WebGL shader color arrays are the normalized equivalents of those brand colors:
  - purple → `[0.6784, 0.2745, 1.0]`
  - yellow → `[1.0, 0.6157, 0.0]`
  - amber → `[1.0, 0.32, 0.08]`
- The shader reads the CSS brand variables and uses them as the source of truth for the fallback palette.

## Performance safeguards
- DPR cap:
  - desktop capped at `1.5`
  - mobile capped at `1.0`
- Canvas sizing uses the actual viewport-backed canvas size multiplied by the capped DPR.
- `prefers-reduced-motion` forces static rendering.
- Visibility handling pauses animation when the document is hidden.
- Cleanup removes the animation frame, resize listener, visibility listener, resize observer, buffer, and program.
- A CSS fallback gradient is provided through `.eb-shader-fallback` if WebGL fails.
- The shader stays low-opacity and ambient so readability remains the priority.

## Visual tuning
- Defaults were tuned for a premium but subtle atmosphere:
  - `rotationSpeed = 0.17`
  - `starDensity = 0.28`
  - `armCurvature = 8.0`
  - `starSize = 0.42`
  - `colorIntensity = 0.14`
  - `enableBloom = true`
  - `twinkleSpeed = 0`
  - `starTrails = 0`
  - `swirlType = 0`
- The effect reads as dark purple/gold haze rather than a loud galaxy demo.

## Test results
- `npm run build` ✅
- `npm run lint` ✅
- Browser QA ✅
- Scroll verification confirmed the shader stays fixed in the viewport while the page scrolls.
- Browser inspection confirmed the body background image is removed and `#root` remains transparent.

## Remaining risks / tuning notes
- The shader is intentionally subtle; if a stronger atmospheric effect is desired, raise `colorIntensity` slightly or increase the canvas opacity.
- Section-local glows remain in the design system, but they are intentionally part of the page styling and do not replace the global shader background.
