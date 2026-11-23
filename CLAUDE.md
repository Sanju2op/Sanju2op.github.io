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
Live. One page with Summary, Experience (with bullet points), Projects, Skills, Education and Achievements; a print stylesheet; and a PDF generated and checked on every deploy. The bullet points are **dummy content** for now. `Docs/NEEDS.md` lists what the owner still needs to supply.

## Working agreement
The owner has asked for continuous progress without approval for each step. Work through `Docs/Tasks.md`, keep `Docs/NEEDS.md` current, and record what was done and what is next so a later session can continue. The owner gives feedback occasionally; act on it first.

## Read before changing anything
- `Docs/Tasks.md` — what is done, the backlog, what is waiting on the owner
- `Docs/NEEDS.md` — what the owner still needs to supply, and the dummy content register
- `Docs/RESUME.md` — the plan this site follows (sections, print and PDF)
- `Docs/ARCHITECTURE.md` — repo layout, build and deploy pipeline, PDF generation
- `Docs/CONVENTIONS.md` — rules for content, git hygiene, accessibility, skills
- `Docs/Design.md` — the visual system (shared tokens with the portfolio)

## Commands
```
npm install      # first time only
npm run dev      # local dev server
npm run build    # production build into dist/
```
The PDF is made by `scripts/make_pdf.py` (Python and Playwright) and checked by `scripts/check_pdf.py` in the deploy workflow, not by `npm run build`. Node 22.23.4 or newer is required (Astro 7). Dependency versions are pinned.

## Deploying
Pushing to `main` runs `.github/workflows/deploy.yml`: build the site, render `dist/resume.pdf`, check it, copy the legacy sub-project folders into `dist/`, publish to GitHub Pages. **Settings → Pages → Source must be "GitHub Actions"** (it is).

## Hard rules
1. All page content lives in `src/data/site.ts`. Edit data there, not copy inside `index.astro`.
2. **Dummy content is allowed, but must be tracked.** Write it to read naturally, avoid invented hard numbers, mark it with a `// DUMMY` comment, list it in `Docs/NEEDS.md`, and never show placeholder outlines or notes on the page.
3. Real facts the owner has stated (jobs, dates, education, links) must stay accurate. Do not invent employers, awards, metrics or quotes.
4. Never put the owner's phone number or other private details on the site or in commits.
5. The resume must print on **one A4 page**, with some spare room. After any content change, render the PDF and check the page count.
6. No terminal or command-line styling, no colour picker, no animation on this site. The owner dislikes the terminal look.
7. Text must keep 4.5:1 contrast or better. The look is ivory paper (`#FAF9F5`), dark ink (`#3A1A10`) and book cloth clay (`#A94E32`) as the accent.
8. Check every layout change at phone (390 px), tablet (820 px) and desktop (1366 px) widths, with no horizontal scrolling.
9. Do not edit or delete `MusicApp/`, `project_1/` to `project_4/`, `keyboardShopApp/`, `Gym Web/`, `Clothng web/` or `images/`.
10. Do not commit large binaries. Compress images first.

## Skills
Project skills live in `.agents/skills/`. Use `frontend-design` for any UI work.
