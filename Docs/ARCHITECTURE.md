# Architecture

## Overview
A one-page portfolio built with Astro 7 into plain HTML, CSS and a little JavaScript. GitHub Pages serves the output. There is no server and no database.

## Stack
| Piece | Choice | Why |
|---|---|---|
| Framework | Astro 7 (static output) | Real HTML for SEO, almost no client JavaScript, built-in image optimisation |
| Images | `astro:assets` + `sharp` | Turns multi-megabyte screenshots into small WebP files at build time |
| Sitemap | `@astrojs/sitemap` | Generated on every build; legacy pages are added by hand in `astro.config.mjs` |
| Styling | One global stylesheet, CSS variables | No framework needed; themes are variable sets |
| Fonts | Bricolage Grotesque + Newsreader (Google Fonts) | Display and body pairing |
| Hosting | GitHub Pages, deployed by GitHub Actions | Free, and the deploy runs on every push to `main` |

## Repo layout
```
.github/workflows/deploy.yml   build + deploy pipeline
src/
  data/site.ts                 ALL page content (projects, skills, timeline, quotes, themes)
  layouts/Base.astro           <head>: SEO tags, favicon, theme bootstrap, fonts
  pages/index.astro            the homepage, plus its small client script
  pages/404.astro              not-found page
  pages/og.png.ts              social preview image, drawn at build time with sharp
  styles/global.css            all styling and colour themes
public/                        robots.txt, favicon.svg (copied as-is)
images/                        project thumbnails (imported by site.ts, optimised at build)
MusicApp/ project_1..4/ keyboardShopApp/ "Gym Web"/ "Clothng web"/   legacy static projects
index.backup.html              the original showcase page, kept for reference
Docs/                          these documents
.agents/skills/                agent skill files (frontend-design)
```
Root-level `index.html`, `404.html`, `robots.txt` and `sitemap.xml` are the old hand-written site. They are superseded by the Astro output and can be deleted once the Actions deploy is confirmed live.

## Build and deploy pipeline
1. Push to `main` (or run the workflow by hand).
2. **build job:** checkout → Node 22 → `npm install` → `npm run build` (output in `dist/`).
3. The workflow then copies the legacy folders and `index.backup.html` into `dist/`, so URLs like `/MusicApp/` keep working. A missing folder is logged as "skipped", not an error.
4. The `dist/` folder is uploaded as the Pages artifact and the **deploy job** publishes it.

Requirement: **Settings → Pages → Source = GitHub Actions.** With "Deploy from a branch" the deploy job fails.

## Data flow
`src/data/site.ts` exports plain arrays and objects. `index.astro` loops over them to render the sections. Thumbnails are imported there as images, so Astro can resize them. Changing content never means editing markup.

## Theming
Colours are CSS variables on `:root`: `--bg`, `--fg`, `--soft`, `--card`, `--card-fg`. The default (book cloth) is the base `:root` block. Other themes are `:root[data-theme="..."]` overrides. A tiny inline script in `Base.astro` applies the visitor's saved theme before first paint, and the footer swatches set and save it in `localStorage`. The theme list lives in `site.ts` (`themes`); the first entry is the default and carries no `data-theme` attribute.

## SEO
Title, description, canonical URL, Open Graph and Twitter tags are set in `Base.astro`. JSON-LD (`Person`) is in `index.astro`. `og.png` is generated at build time, so no binary upload is needed. `robots.txt` points at the generated `sitemap-index.xml`. The 404 page is `noindex`.

## Constraints and gotchas
- GitHub Pages is static only: no server code, no secrets.
- Astro 7 needs Node >= 22.23.4. Versions are pinned, and there is no lockfile committed, so the workflow uses `npm install`.
- `npm audit` reports a `picomatch` advisory that has no real fix; it is build-time only and ships nothing to visitors.
- The social image uses whatever sans-serif fonts the CI machine has, so lettering can differ slightly from the site fonts.
- The published site is large (~196 MB) because of legacy folders (`MusicApp` ~89 MB, `Gym Web` ~61 MB). The Pages limit is 1 GB.
- The last-updated date in the footer is the build date.
