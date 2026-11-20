# Conventions

## Agent skills
- **Skills directory:** project skills live in `.agents/skills/`.
- **UI and design work:** use the `frontend-design` skill.
- **Where content goes:** all resume content lives in `src/data/site.ts`. Layout is `index.astro`; styling and print rules are in `global.css`.

## Development workflow
- **Check the build:** run `npm run build` before pushing. A failed build means nothing deploys.
- **Check the page count:** the resume must stay on one A4 page. After content changes, render the PDF (`scripts/make_pdf.py` with the built site served locally) and confirm one page.
- **Look at it:** check at phone width (about 390px), desktop width and print preview.
- **Deploying:** pushing to `main` deploys through GitHub Actions. Do not edit files in `dist/`.

## Target platforms
- **Primary:** screen (phone and desktop) and A4 print / PDF.

## Content rules
- **Placeholders:** content waiting on the owner has `todo: true` in `site.ts`. Remove the flag when the real content is added. Do not invent roles, dates, quotes or achievements.
- **Privacy:** no phone number or other private details on the site or in commits.
- **Brevity:** one page. Project detail belongs on the portfolio.
- **Links:** show the visible URL as the link text so printed copies work. Check every link before pushing.

## Design rules
- **Look:** ivory paper, dark ink, clay accent. See `Docs/Design.md`.
- **Contrast:** body text at 4.5:1 or better.
- **Not allowed:** terminal styling, colour pickers, animation, scrapbooks, quotes sections.
- **Accessibility:** skip link, visible focus, real headings, alt text on meaningful images.

## Images
The resume page uses no photos. Legacy assets live in `images/` and the sub-project folders. Compress anything new before committing.

## Git hygiene
- **Check `.gitignore`:** `node_modules/`, `dist/` and `.astro/` stay ignored.
- **Check `git status`:** before committing, make sure no private files or large binaries are staged.
- **Commit messages:** short, imperative, saying what changed and why.
- **Legacy folders:** do not edit `MusicApp/`, `project_1/` to `project_4/`, `keyboardShopApp/`, `Gym Web/`, `Clothng web/` or `images/` as part of resume work.

## Versioning
No app version. The footer's "Last updated" date is set automatically at build time.
