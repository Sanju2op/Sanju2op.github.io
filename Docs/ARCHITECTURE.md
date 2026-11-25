# Architecture

## Overview
A one-page resume built with Astro 7 into plain HTML and CSS. GitHub Pages serves it. A PDF of the same page is generated at deploy time. There is no client JavaScript.

## Two-site setup
| Site | Where | Purpose |
|---|---|---|
| Resume | This repo, GitHub Pages | A one-page, printable resume with a PDF download |
| Portfolio | `Sanju2op/my-portfolio`, Vercel | Selected work with case studies, about, contact |

Both share token names (colours, fonts) so they read as one brand. Tokens are copied by hand, not shared at build time.

## Stack
| Piece | Choice |
|---|---|
| Framework | Astro 7, static output |
| Styling | One stylesheet with CSS variables and an A4 print stylesheet |
| Fonts | Bricolage Grotesque and Newsreader, self-hosted from npm (`@fontsource-variable/*`), bundled at build time |
| PDF | Python + Playwright (Chromium) renders the built page in print mode; `scripts/check_pdf.py` checks it |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## Repo layout
```
.github/workflows/deploy.yml   build, make PDF, check PDF, copy legacy folders, deploy
scripts/make_pdf.py            renders dist/index.html to dist/resume.pdf
scripts/check_pdf.py           warns if the PDF is not one page or has no selectable text
src/
  data/site.ts                 ALL resume content (experience, projects, skills, education, achievements)
  layouts/Base.astro           head, SEO tags, font imports
  pages/index.astro            the resume page
  pages/404.astro              not-found page
  pages/og.png.ts              social image drawn at build time (sharp)
  styles/global.css            screen and print styles
public/                        robots.txt, favicon.svg
MusicApp/ project_1..4/ keyboardShopApp/ "Gym Web"/ "Clothng web"/ images/   legacy static projects
index.backup.html              the original showcase page, kept for reference
Docs/                          these documents
.agents/skills/                agent skill files (frontend-design)
```
The old hand-written root `index.html`, `404.html`, `robots.txt` and `sitemap.xml` were removed on 20 Nov 2026; the Astro build and `public/` replace them.

## Build and deploy pipeline
1. Push to `main` (or run the workflow by hand).
2. **Build:** checkout → Node 22 → `npm install` → `npm run build` into `dist/`.
3. **PDF:** a Python virtual environment installs Playwright and Chromium, a local server serves `dist/`, and `scripts/make_pdf.py` prints the page to `dist/resume.pdf` (A4, print stylesheet). This step is `continue-on-error`: if it fails, the site still deploys but the Download PDF link 404s.
4. **PDF check:** `scripts/check_pdf.py` warns (does not fail) if the file is missing, longer than one page, or has no selectable text.
5. **Legacy copy:** the old sub-project folders and `index.backup.html` are copied into `dist/` so URLs like `/MusicApp/` keep working. A missing folder is logged as "skipped".
6. `dist/` is uploaded as the Pages artifact and the deploy job publishes it.

Requirement: Settings → Pages → Source = GitHub Actions.

## Data flow
`src/data/site.ts` exports plain objects and arrays; `index.astro` loops over them. Changing content never means editing markup.

## Print and PDF
The `@media print` block in `global.css` sets A4 with 12 mm top and bottom margins, white background, 10 pt text, hides elements with `.noprint`, and shows links as plain text. Link text on the page is the visible URL, so printed copies are still usable. The PDF is the same page, so there is only one source of truth. It embeds the two self-hosted fonts and has selectable text.

## SEO
Title, description, canonical, Open Graph and Twitter tags in `Base.astro`; JSON-LD `Person` in `index.astro`; generated `sitemap-index.xml`; `robots.txt`; a build-time social image. The 404 page is `noindex`.

## Constraints and gotchas
- GitHub Pages is static only: no server code, no secrets.
- Astro 7 needs Node >= 22.23.4. Versions are pinned and there is no committed lockfile, so the workflow uses `npm install`.
- Ubuntu runners block system-wide `pip install`, so the PDF steps use a virtual environment.
- Fonts are bundled at build time, so the PDF render needs no network call. Re-check the page count whenever fonts or print spacing change; the page fit was re-verified with the real fonts on 23 Nov 2026 (one page, about 5% spare).
- The published site is large (~196 MB) because of legacy folders. The Pages limit is 1 GB.
- `npm audit` reports a `picomatch` advisory with no real fix; it is build-time only.
- The last-updated date in the footer is the build date.
