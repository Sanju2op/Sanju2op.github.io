# CLAUDE.md

Guide for AI agents (and humans) working in this repo. Read this first, then the docs it points to.

## What this repo is
Sanjay Lagariya's personal portfolio, published at https://sanju2op.github.io/. It is an Astro static site, built and deployed by GitHub Actions. Several older sub-projects live in this repo as plain static folders and must keep working.

## Read before changing anything
- `Docs/ARCHITECTURE.md` — repo layout, build and deploy pipeline, how theming and SEO work
- `Docs/CONVENTIONS.md` — rules for content, git hygiene, accessibility and agent skills
- `Docs/Tasks.md` — what is done, what is next, what is waiting on the owner
- `Docs/Design.md` — the visual system. Follow it; do not restyle on a whim

## Commands
```
npm install      # first time only
npm run dev      # local dev server
npm run build    # production build into dist/
```
Node 22.23.4 or newer is required (Astro 7). Dependency versions are pinned in `package.json` on purpose.

## Deploying
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site, copies the legacy sub-project folders into `dist/`, and publishes to GitHub Pages. **Settings → Pages → Source must be set to "GitHub Actions".** Nothing is deployed by hand.

## Hard rules
1. All page content lives in `src/data/site.ts`. Edit data there, not copy inside `index.astro`.
2. Entries marked `todo: true` are placeholders waiting on the owner. Leave them until real content is supplied, then remove the flag.
3. The default theme is **book cloth**: ivory text on clay (`#FAF9F5` on `#A94E32`). Keep text at 4.5:1 contrast or better.
4. No terminal, command-line or monospace-label styling. The owner dislikes it.
5. Never put the owner's phone number or other private details on the site or in commits.
6. Do not edit or delete `MusicApp/`, `project_1/` to `project_4/`, `keyboardShopApp/`, `Gym Web/`, `Clothng web/` or `images/`. The workflow copies them as they are.
7. Do not commit large binaries. Compress images first (see `Docs/CONVENTIONS.md`).

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for any UI work.
