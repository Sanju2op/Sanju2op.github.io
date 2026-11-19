# Resume site plan

## Purpose
Turn https://sanju2op.github.io/ into a resume that works three ways: read on screen, printed on A4, and downloaded as a PDF. The portfolio (`Sanju2op/my-portfolio`, on Vercel) carries the projects and case studies, so this site stays short.

## Why a separate resume site
Recruiters want a one-page summary they can skim, print or forward. A portfolio wants space for screenshots and case studies. Mixing them makes both worse. Splitting them lets each do one job.

## What stays, moves and goes
| Today on this site | Plan |
|---|---|
| Hero with name and role | Stays, as the resume header |
| Projects with thumbnails | Shrinks to three one-line entries that link to the portfolio |
| Skills grid | Stays |
| Timeline ("Where I've been") | Becomes the Experience and Education sections |
| Kind words (quotes) | Moves to the portfolio About page |
| Scrapbook | Moves to the portfolio About page |
| Colour picker | Removed; the resume has one look |
| Live time line | Removed |
| Legacy folders (`MusicApp/`, `project_1..4/` and others) | Stay exactly as they are |

## Sections, in order
1. **Header:** name, role, location (Gujarat, India), email, links to the portfolio, GitHub and LinkedIn
2. **Summary:** two lines, plain and specific
3. **Experience:** current role (todo), Wappzo Infotech internship (Jun to Jul 2024)
4. **Projects:** three one-liners with code links and a "more on the portfolio" link
5. **Skills:** grouped as on the site today
6. **Education:** MCA at UTU, Bardoli (2024 to 2026); BCA at V.S. Patel College, Bilimora (89.10%)
7. **Achievements:** Top 10, Project Spark Codefest 2024

No phone number. No photo on the resume page unless the owner asks for one.

## Look
Ivory paper (`#FAF9F5`) with dark ink (`#3A1A10`) and the book cloth clay (`#A94E32`) as the accent for name, rules and links. It shares tokens and fonts with the portfolio so the two read as one brand. See `Docs/Design.md` for the token names.

## Print and PDF
- Add a print stylesheet: white background, black text, hide the nav, buttons and footer, A4 with sensible margins, avoid page breaks inside entries, target one page (two at most).
- Generate `resume.pdf` at deploy time so the download always matches the page: a GitHub Actions step renders `/` with Playwright and saves `dist/resume.pdf`.
- Add a "Download PDF" link in the header pointing to `/resume.pdf`.
- Keep the PDF's text selectable (no image-only export) so applicant tracking systems can read it.

## Links between the sites
- Resume header → portfolio (`portfolio` in `src/data/site.ts`; update once the Vercel domain is chosen)
- Portfolio nav → this site (labelled "Resume")
- The current "Resume (link coming soon)" placeholder is replaced by the PDF link

## Open items
- [owner] Current role, company and dates
- [owner] The Vercel domain name for the portfolio
- [owner] Whether to show the Gujarat location line and the live time line (plan: location yes, live time no)

## Done when
- It prints to one A4 page and the PDF matches the page
- Every link works and the PDF download is in the header
- No placeholders are visible
- Contrast is 4.5:1 or better
- The portfolio and resume link to each other
