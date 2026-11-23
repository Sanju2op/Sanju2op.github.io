# Tasks

Status key: [x] done, [ ] to do, [owner] waiting on Sanjay (see `Docs/NEEDS.md`).

## Where we are (updated 23 Nov 2026)
The resume is live as a one-page, ATS-friendly page with a print stylesheet and a generated PDF. DI Solutions is listed as the current role. Bullet points are dummy content until the owner supplies real ones.

## Done
- [x] Astro 7 project; content in `src/data/site.ts`; SEO, favicon, social image, 404
- [x] GitHub Actions deploy with legacy folders copied in; verified publishing
- [x] Resume pivot: Summary, Experience, Projects, Skills, Education, Achievements; ivory paper look; print stylesheet
- [x] Deploy-time PDF with a "Download PDF" link; check script warns if the PDF is not one page or has no selectable text (23 Nov 2026)
- [x] Experience with DI Solutions (Jun 2026 to now), DI Solutions internship (Dec 2025 to Jun 2026), Wappzo Infotech (Jun to Jul 2024)
- [x] Dummy bullet points per role; no placeholder outlines on the page
- [x] Responsive at phone, tablet and desktop widths; one A4 page with about 5% spare
- [x] Obsolete root files removed; docs updated
- [x] Research: single column, standard headings, short verb-led bullets (2 to 3 per role), projects with stack and link, selectable text, consistent dates

## Backlog, in order
1. [ ] Add `.agents/skills/frontend-design` to this repo
2. [ ] Project lines: add the tech stack to each (needs the owner's confirmation for two projects)
3. [ ] Keyword pass: mirror the terms recruiters search for (React, Next.js, Node.js, REST APIs, MySQL, Git) in the summary and bullets, only where true
4. [ ] Optional "tailored" variants (for example a front-end-weighted one) generated from the same data, each with its own PDF
5. [ ] A Certifications section, only if the owner supplies items
6. [ ] Compress the large legacy assets (`MusicApp` audio, `Gym Web` images) to shrink each deploy
7. [ ] Remove `images/` thumbnails that only the old homepage used, once nothing references them
8. [ ] Self-host the fonts so the PDF render does not depend on a network call
9. [ ] Add the site to Google Search Console and submit `sitemap-index.xml`

## Waiting on Sanjay
See `Docs/NEEDS.md`. The main items are real bullet points, a job title, and MCA and BCA dates.

## Cleanup only the owner can do
- [owner] Delete the old `terminal-style` branch on GitHub (it still contains the removed phone number)
- [owner] Tap Download PDF on the live site once to confirm it opens

## Definition of done for version 1
- The site is live and `resume.pdf` downloads as one A4 page
- No dummy content left and every link works
- The portfolio and resume link to each other

## Anti-patterns
- Letting the resume grow past one page
- Duplicating case-study detail that belongs on the portfolio
- Inventing employers, awards or metrics
