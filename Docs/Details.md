# Details

Strategy notes behind the portfolio. For the visual system see `Docs/Design.md`; for how it is built see `Docs/ARCHITECTURE.md`.

## Main idea
Make Sanjay easy to understand, easy to trust and easy to contact. The online presence works as a system:

- GitHub profile = home base
- GitHub repos = project archive
- Portfolio site = curated front door
- LinkedIn = professional proof
- Future notes or case studies = discovery engine

## Positioning
Sanjay is a full-stack developer who builds practical web apps from the React screens to the Node and Express code and the database behind them.

Tone to keep:
- practical
- plain-spoken
- consistent
- improving in public

He is presenting as a builder, not a designer. The page should look considered without looking like a template.

## What should appear first
When someone searches the name, the ideal order is:
1. Portfolio or GitHub profile
2. LinkedIn
3. Best project
4. Resume or contact page

## GitHub profile strategy
The GitHub profile should include:
- a clear bio
- a profile README
- pinned repositories
- short links to the portfolio and LinkedIn
- current focus and stack

### Profile README structure
- headline
- short intro
- current work
- main skills
- top projects
- contact

## Portfolio content strategy
The portfolio should read like a well-set page, not a startup landing page:
- a clear role in the first screen
- a short first-person intro
- projects listed in one consistent format
- a short, honest background
- one obvious way to get in touch

## Project selection rule
Show a project only if it satisfies at least one of these:
- solves a real problem
- demonstrates a technical skill
- is deployed or easy to run
- has a clean README
- is something Sanjay can explain confidently

Four strong projects beat twelve weak ones.

## Project entry formula
Each entry should answer:
- What is it?
- What did he build it with?
- Where can I see it or read the code?

## SEO principles
Use natural language and do not stuff keywords. Use the name, the role, the stack and project names that make sense to humans.

Technical checklist (all handled by the Astro build unless noted):
- one `h1` per page, logical heading order
- unique title and meta description
- canonical URL
- Open Graph and Twitter tags with a social image
- sitemap and `robots.txt`
- structured data (`Person`)
- fast loading and compressed images
- good alt text for meaningful images (manual)
- submit the sitemap in Google Search Console (manual)

## Performance principles
- avoid heavy dependencies and client JavaScript
- let Astro resize and compress images
- keep fonts to two families
- avoid decorative animation

## Content update model
Treat the portfolio as a living product. When something ships:
1. add it to GitHub with a clear README
2. add it to `src/data/site.ts`
3. push to `main`; the deploy and the "last updated" date are automatic

## Personal branding rules
Use the same name format, profile photo, short bio and tone on the portfolio, GitHub and LinkedIn.

## Writing tone
Honest, simple, technical, calm. Avoid trying to sound inspiring.

## Visual references
The feel to aim for is editorial: a personal site with a warm, single-column page, plain headings and real content. Oluwatobi Salawu’s portfolio was the reference for structure and voice, not for the look.

Avoid terminal or command-line styling, fake windows, neon on black and monospace labels.

## Optional extras
- short case studies for the strongest projects
- a learning log or notes page
- a "now" section
- a one-page resume

## What to avoid
- fake achievements, invented quotes
- too much text
- too many colours (the footer picker is the one exception)
- images without purpose
- effects that hurt readability
- unfinished sections left visible for long

## Suggested build order
1. Clean GitHub profile and profile README
2. Make three repositories look great
3. Portfolio homepage and project list
4. SEO metadata
5. Deploy
6. Iterate only when needed
