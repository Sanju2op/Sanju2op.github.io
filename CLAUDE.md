# CLAUDE.md

Guide for AI agents (and humans) working in this repo. Read this first, then the docs it points to.

## What this repo is
Sanjay Lagariya's **resume site**, published at https://sanju2op.github.io/. It is one half of a two-site setup:

| Site | Repo | Role |
|---|---|---|
| **Resume** (this repo) | `Sanju2op/Sanju2op.github.io` | A one-page, printable resume with a PDF download |
| **Portfolio** | `Sanju2op/my-portfolio` (Vercel) | The showpiece: selected work, case studies, about, contact, at https://sanjaylagariya.vercel.app |

The resume answers "who is he and what has he done" in one page. Project detail lives on the portfolio, and the resume links to it.

The site is an Astro static build deployed by GitHub Actions. Several older sub-projects live in this repo as plain static folders and must keep working.

## Status
The resume pivot is done (19 Nov 2026): one page with Summary, Experience, Projects, Skills, Education and Achievements, a print stylesheet, and a PDF generated on every deploy. The current-role entry is still a placeholder waiting on the owner.

## Read before changing anything
- `Docs/RESUME.md` — the plan this site follows (sections, print and PDF)
- `Docs/Tasks.md` — what is done, what is next, what is waiting on the owner
- `Docs/ARCHITECTURE.md` — repo layout, build and deploy pipeline, PDF generation
- `Docs/CONVENTIONS.md` — rules for content, git hygiene, accessibility, skills
- `Docs/Design.md` — the visual system (shared tokens with the portfolio)

## Commands
```
npm install      # first time only
npm run dev      # local dev server
npm run build    # production build into dist/
```
The PDF is made by `scripts/make_pdf.py` (Python and Playwright) in the deploy workflow, not by `npm run build`. Node 22.23.4 or newer is required (Astro 7). Dependency versions are pinned.

## Deploying
Pushing to `main` runs `.github/workflows/deploy.yml`: build the site, render `dist/resume.pdf`, copy the legacy sub-project folders into `dist/`, publish to GitHub Pages. **Settings → Pages → Source must be "GitHub Actions"** (it is).

## Hard rules
1. All page content lives in `src/data/site.ts`. Edit data there, not copy inside `index.astro`.
2. Entries marked `todo: true` are placeholders waiting on the owner. Do not invent roles, dates, quotes or achievements.
3. Never put the owner's phone number or other private details on the site or in commits.
4. The resume must print on **one A4 page**. After any content change, check the PDF page count.
5. No terminal or command-line styling, no colour picker, no animation on this site. The owner dislikes the terminal look.
6. Text must keep 4.5:1 contrast or better. The look is ivory paper (`#FAF9F5`), dark ink (`#3A1A10`) and book cloth clay (`#A94E32`) as the accent.
7. Do not edit or delete `MusicApp/`, `project_1/` to `project_4/`, `keyboardShopApp/`, `Gym Web/`, `Clothng web/` or `images/`.
8. Do not commit large binaries. Compress images first.

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for any UI work.
