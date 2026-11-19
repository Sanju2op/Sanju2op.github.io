# Conventions

## Agent skills
- **Skills directory:** project skills live in `.agents/skills/`.
- **UI and design work:** use the `frontend-design` skill.
- **Where content goes:** page content lives in `src/data/site.ts`. Layout lives in `index.astro`, styling in `global.css`.

## Development workflow
- **Check the build:** run `npm run build` before pushing. A failed build means nothing deploys.
- **Look at it:** check the page at phone width (about 390px) and desktop width. There must be no sideways scrolling.
- **Deploying:** pushing to `main` deploys through GitHub Actions. Do not edit files in `dist/`.

## Target platforms
- **Primary:** phones. Most people open a portfolio link on mobile.
- **Secondary:** desktop browsers. The layout is one centred column, so desktop is mostly the same layout with more space.

## Content rules
- **Placeholders:** content still waiting on the owner has `todo: true` in `site.ts` and shows with a dashed outline. Remove the flag when the real content is added. Do not invent quotes, roles, dates or achievements.
- **Privacy:** do not publish the owner's phone number or other private details on the site or in commits.
- **Tone:** first person, plain and specific. Describe what a project is, not how impressive it is.
- **Links:** every link must work. Check new links before pushing.

## Design rules
- **Default theme:** book cloth — ivory (`#FAF9F5`) text on clay (`#A94E32`). Contrast is 5.2:1.
- **Contrast:** body text must be at least 4.5:1 against its background, in every theme.
- **No terminal styling:** no command-prompt motifs, monospace labels or fake terminal windows.
- **Motion:** only on hover and focus, and always off under `prefers-reduced-motion`.
- **Accessibility:** keep visible keyboard focus, the skip link, real headings and alt text on meaningful images.

## Images
- Compress before committing. Thumbnails should be about 400px wide.
- Import thumbnails through `site.ts` so Astro optimises them. Do not point at raw multi-megabyte files.
- Do not add files over about 1 MB without a reason.

## Git hygiene
- **Check `.gitignore`:** before adding large files or tools, make sure `node_modules/`, `dist/` and `.astro/` stay ignored.
- **Check `git status`:** always check it before committing, so no private or oversized files are staged.
- **Commit messages:** short, in the imperative, saying what changed and why (for example "Add resume link to contact card").
- **Legacy folders:** do not edit `MusicApp/`, `project_1/` to `project_4/`, `keyboardShopApp/`, `Gym Web/`, `Clothng web/` or `images/` as part of portfolio work.

## Versioning
There is no app version to bump. The footer's "Last updated" date is set automatically at build time.
