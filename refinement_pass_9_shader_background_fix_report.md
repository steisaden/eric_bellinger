# Eric Bellinger Shader Background Fix Report

## Files changed
- `src/components/background/GalaxySwirlBackground.tsx`
- `src/App.tsx`
- `src/index.css`

## Old background layers found
- `src/index.css` still had a global `body` background image made from soft radial gradients plus `background-attachment: fixed`.
- `src/App.tsx` was still giving the root wrapper a solid `bg-[var(--page-bg)]`, which was another page-level background layer above the shader stack.
- No additional global background components like `SiteBackground` or `AmbientBackground` were present in the repo; the remaining glows are section-local decorative layers inside sections such as Tour, Credits, and Footer.

## Which backgrounds were removed or neutralized
- Removed the global body gradient image and fixed-attachment treatment from `src/index.css`.
- Neutralized the app shell background by changing the root wrapper to `bg-transparent` in `src/App.tsx`.
- Kept the section-level atmospheric glows because they are part of the page design and do not replace the global background.

## Shader positioning fix
- Kept `GalaxySwirlBackground` mounted at the app root so it sits behind the full site.
- Ensured the shader wrapper is fixed to the viewport with `fixed inset-0` and explicit `width: 100vw` / `height: 100vh`.
- Ensured the canvas itself fills the viewport with `absolute inset-0` plus full-size inline dimensions.
- Wrapped the actual site content in a `relative z-10` container so the shader stays behind all content but above the page base color.

## Static-mode behavior fix
- `staticMode` remains the default and is used in the app.
- The shader renders a single ambient frame by default instead of looping animation.
- The draw routine still re-runs on resize and visibility changes, but continuous `requestAnimationFrame` animation only happens when `staticMode` is disabled.
- `rotationSpeed` and `twinkleSpeed` are effectively zero in the site usage, so the background reads as static ambient texture.

## Z-index / layering explanation
- `GalaxySwirlBackground` is the lowest visual layer in the app stack.
- Site content is wrapped in `relative z-10` so all sections, nav, footer, and modals render above the shader.
- The page root is transparent, so there is no competing opaque root shell covering the shader.
- The browser confirmed the shader element remains viewport-fixed while scrolling.

## Viewport scroll test results
- Browser check after scrolling down showed the shader bounding box still covering the full viewport.
- `window.scrollY` changed during the test, but the shader stayed fixed at `top: 0` and `height: 577` for the current viewport.
- `getComputedStyle(document.body).backgroundImage` returned `none`, confirming the old global gradient layer is no longer active.

## Build / lint results
- `npm run build` ✅
- `npm run lint` ✅
- Browser QA ✅

## Remaining issues
- None blocking. The shader now functions as the primary fixed global background.
- If you want even more visibility, the next tuning step would be to slightly raise the shader canvas opacity or `colorIntensity`, but the current balance is intentionally subtle and readable.
