# CLAUDE.md

Guide for AI agents (and humans) working in this repo. Read this first, then the docs it points to.

## What this repo is
Sanjay Lagariya's **resume site**, published at https://sanju2op.github.io/. It is one half of a two-site setup:

| Site | Repo | Role |
|---|---|---|
| **Resume** (this repo) | `Sanju2op/Sanju2op.github.io` | A short, printable resume with a PDF download |
| **Portfolio** | `Sanju2op/my-portfolio` (on Vercel) | The showpiece: selected work, case studies, about, contact |

The resume answers "who is he and what has he done" in one page. Project detail lives on the portfolio, and the resume links to it.

The site is an Astro static build deployed by GitHub Actions. Several older sub-projects live in this repo as plain static folders and must keep working.

## Status: pivot to resume in progress
The homepage is still the earlier "mini portfolio" (projects with thumbnails, scrapbook, quotes). `Docs/RESUME.md` is the plan to turn it into a proper resume. Follow it; do not add new portfolio-style sections here.

## Read before changing anything
- `Docs/RESUME.md` — what the resume site is, its sections, print and PDF plan
- `Docs/Tasks.md` — what is done, what is next, what is waiting on the owner
- `Docs/ARCHITECTURE.md` — repo layout, build and deploy pipeline (describes the current build)
- `Docs/CONVENTIONS.md` — rules for content, git hygiene, accessibility, skills
- `Docs/Design.md` — the visual system (shared tokens with the portfolio)

## Commands
```
npm install      # first time only
npm run dev      # local dev server
npm run build    # production build into dist/
```
Node 22.23.4 or newer is required (Astro 7). Dependency versions are pinned in `package.json` on purpose.

## Deploying
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site, copies the legacy sub-project folders into `dist/`, and publishes to GitHub Pages. **Settings → Pages → Source must be "GitHub Actions".**

## Hard rules
1. All page content lives in `src/data/site.ts`. Edit data there, not copy inside `index.astro`.
2. Entries marked `todo: true` are placeholders waiting on the owner. Do not invent roles, dates, quotes or achievements.
3. Never put the owner's phone number or other private details on the site or in commits.
4. No terminal, command-line or monospace-label styling. The owner dislikes it.
5. Text must keep 4.5:1 contrast or better. Today's default is book cloth (ivory `#FAF9F5` on `#A94E32`); the resume pivot changes the default to ivory paper with dark ink, per `Docs/RESUME.md`.
6. Do not edit or delete `MusicApp/`, `project_1/` to `project_4/`, `keyboardShopApp/`, `Gym Web/`, `Clothng web/` or `images/`.
7. Do not commit large binaries. Compress images first.

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for any UI work.
