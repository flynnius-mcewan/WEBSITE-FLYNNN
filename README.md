# Flynn McEwan portfolio

A dependency-free, responsive three-page portfolio site.

## Run locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Content edits

- Add Flynn's approved address after `mailto:` in `index.html`, `images.html`, and `bio.html`.
- Replace each `href="#"` marked with `data-link-placeholder` in `index.html` with its approved URL. Remove `data-link-placeholder` after doing so.
- The Bio copy is the single line in `.bio__line` in `bio.html`.
- The home page uses the supplied headshot, the Images page contains the remaining portrait mosaic, and Bio uses the white-shirt portrait.
- Images are original, full-resolution files in `assets/`.

## Technical notes

- No analytics, cookies, web fonts, or third-party network requests are present.
- The pages use semantic navigation, visible keyboard focus, touch-sized controls, and reduced-motion behavior.
- External navigation items are deliberately inactive until approved URLs are added.
- The layout supports current desktop and mobile browsers without a build step.

## Deployment

Deploy the folder unchanged to any static host. `index.html` is the root page, `images.html` is the image mosaic, and `bio.html` is the Bio route.
