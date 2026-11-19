# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Phase 1: Foundation
- [x] Choose a single design direction and keep it (editorial, single column, no terminal styling)
- [x] Homepage with role, projects, skills, background and contact
- [x] SEO basics: title, description, canonical, Open Graph, JSON-LD
- [x] robots.txt and sitemap
- [x] 404 page

## Phase 2: Astro migration
- [x] Astro 7 project with content in `src/data/site.ts`
- [x] Image optimisation (thumbnails from ~2 MB to ~5 KB)
- [x] GitHub Actions deploy workflow that also copies the legacy sub-project folders
- [x] Favicon and build-time social preview image
- [x] Automatic "last updated" date
- [x] Book cloth default theme (ivory on clay) plus five other colours
- [x] Project docs bootstrapped (`CLAUDE.md`, architecture, conventions, tasks, design)
- [ ] Confirm the first Actions deploy is green and the site is live (needs Settings → Pages → Source = GitHub Actions)

## Phase 3: Content (waiting on Sanjay)
- [owner] Photo for the hero, then replace the placeholder block
- [owner] Three scrapbook photos with captions
- [owner] Correct resume link. The old resume link pointed at the Upwork screen layouts file
- [owner] Current role: dates, title, company and one line about it
- [owner] Two real quotes with name, role and where you worked together (ask permission first)
- [owner] Confirm the project descriptions are accurate (especially "with an admin panel" for Keyboard Shop)
- [owner] Decide whether to keep "in Gujarat right now" on the page

## Phase 4: Cleanup
- [ ] After the site is confirmed live, delete the obsolete root `index.html`, `404.html`, `robots.txt` and `sitemap.xml`
- [ ] Delete the old `terminal-style` branch (it still contains the removed phone number)
- [ ] Compress the large legacy assets (`MusicApp` audio, `Gym Web` images) to shrink each deploy
- [x] Rewrite `Docs/Details.md` to match `Docs/Design.md`

## Phase 5: Discovery
- [ ] Add the site to Google Search Console and submit `sitemap-index.xml`
- [ ] Put the same link, name and photo on GitHub, LinkedIn and the Vercel portfolio
- [ ] Pin the best repositories and give each a clear README

## Phase 6: Optional
- [ ] Self-host the fonts to remove the Google Fonts request
- [ ] Short case studies for the two strongest projects
- [ ] A projects archive page if the list grows beyond about six

## Priority order
1. Confirm the live deploy
2. Resume link and current role
3. Photo
4. Cleanup of obsolete files and the old branch
5. Quotes and scrapbook
6. Discovery tasks

## Definition of done for version 1
- The site is live from the Actions deploy
- No placeholders remain visible
- Every link works and the resume downloads
- It reads well on a phone and passes keyboard navigation
- The footer date, sitemap and social preview all work

## Anti-patterns
- Redesigning every few weeks
- Adding sections just to fill space
- Showing unfinished projects
- Inventing achievements or quotes
- Letting animation get in the way of reading
