# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Direction change
This site becomes the **resume** (see `Docs/RESUME.md`). The portfolio lives in `Sanju2op/my-portfolio` on Vercel. Items about photos, quotes and the scrapbook move to that repo.

## Phase 1: Foundation (done)
- [x] Editorial single-column design, no terminal styling
- [x] SEO basics, robots.txt, sitemap, 404, favicon, build-time social image
- [x] Astro 7 project with content in `src/data/site.ts`; image optimisation
- [x] GitHub Actions deploy workflow that also copies the legacy sub-project folders
- [x] Book cloth theme (ivory on clay) and five other colours
- [x] Project docs bootstrapped
- [ ] Confirm the Actions deploy is green and the site is live (Settings → Pages → Source = GitHub Actions)

## Phase 2: Resume pivot
- [ ] Restructure `src/data/site.ts` and `index.astro` into the resume sections in `Docs/RESUME.md`
- [ ] Trim projects to three one-liners that link to the portfolio
- [ ] Remove the scrapbook, quotes, colour picker and live time line from this site
- [ ] Move the ivory-paper look in as the default theme; keep clay as the accent
- [ ] Print stylesheet (A4, one page)
- [ ] Deploy-time PDF: Playwright step in the workflow writes `dist/resume.pdf`
- [ ] "Download PDF" link in the header; remove the "Resume (link coming soon)" placeholder
- [ ] Update `Docs/Design.md`, `Docs/ARCHITECTURE.md` and `Docs/CONVENTIONS.md` to match once the pivot lands

## Phase 3: Content (waiting on Sanjay)
- [owner] Current role: dates, title, company and one line about it
- [owner] The portfolio's Vercel domain name
- [owner] Confirm the three projects to list and their one-line descriptions
- [owner] Keep the Gujarat location line? (plan: yes)

## Phase 4: Cleanup
- [ ] After the site is confirmed live, delete the obsolete root `index.html`, `404.html`, `robots.txt` and `sitemap.xml`
- [ ] Delete the old `terminal-style` branch (it still contains the removed phone number)
- [ ] Compress the large legacy assets (`MusicApp` audio, `Gym Web` images) to shrink each deploy

## Phase 5: Discovery
- [ ] Add the site to Google Search Console and submit `sitemap-index.xml`
- [ ] Use the same name, link and photo on GitHub and LinkedIn; link to both sites from each

## Priority order
1. Confirm the live deploy
2. Current role and portfolio domain
3. Resume pivot (Phase 2)
4. PDF download
5. Cleanup

## Definition of done for version 1
- The site is live from the Actions deploy
- It prints to one A4 page and `resume.pdf` matches the page
- No placeholders are visible and every link works
- The portfolio and resume link to each other

## Anti-patterns
- Letting the resume grow past two pages
- Duplicating case-study detail that belongs on the portfolio
- Inventing achievements or dates
