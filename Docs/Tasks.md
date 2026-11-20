# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay.

## Direction
This site is the **resume** (see `Docs/RESUME.md`). The portfolio lives in `Sanju2op/my-portfolio` on Vercel at https://sanjaylagariya.vercel.app.

## Phase 1: Foundation (done)
- [x] Astro 7 project with content in `src/data/site.ts`
- [x] SEO basics, robots.txt, sitemap, 404, favicon, build-time social image
- [x] GitHub Actions deploy that also copies the legacy sub-project folders; verified publishing
- [x] Project docs bootstrapped

## Phase 2: Resume pivot (done 19 Nov 2026)
- [x] Restructured into the resume sections: Summary, Experience, Projects, Skills, Education, Achievements
- [x] Projects trimmed to three one-liners that link to the portfolio
- [x] Scrapbook, quotes, colour picker and live time line removed
- [x] Ivory paper look with clay accent
- [x] Print stylesheet; one A4 page
- [x] Deploy-time PDF (`scripts/make_pdf.py` in the workflow); "Download PDF" link in the header
- [x] Links point to the portfolio at `sanjaylagariya.vercel.app`
- [ ] Confirm the live `/resume.pdf` downloads and is one page (the workflow step succeeded; the owner should tap Download PDF once)

## Phase 3: Content (waiting on Sanjay)
- [owner] Current role: dates, title, company and one line about it. This also tells me whether the MCA and Wappzo lines are still current
- [owner] Confirm the three listed projects and their one-line descriptions
- [owner] Keep the Gujarat location line? (default: yes)

## Phase 4: Cleanup
- [ ] Delete the obsolete root `index.html`, `404.html`, `robots.txt` and `sitemap.xml` (the Actions deploy is live)
- [ ] Delete the old `terminal-style` branch (it still contains the removed phone number)
- [ ] Compress the large legacy assets (`MusicApp` audio, `Gym Web` images) to shrink each deploy
- [ ] Remove `images/` thumbnails that only the old homepage used, once nothing references them

## Phase 5: Discovery
- [ ] Add the site to Google Search Console and submit `sitemap-index.xml`
- [ ] Use the same name and links on GitHub and LinkedIn; link to both sites from each

## Definition of done for version 1
- The site is live and `resume.pdf` downloads as one A4 page
- No placeholders are visible and every link works
- The portfolio and resume link to each other

## Anti-patterns
- Letting the resume grow past one page
- Duplicating case-study detail that belongs on the portfolio
- Inventing achievements or dates
