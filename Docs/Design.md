# Design

## Goal
A portfolio that feels warm, editorial and trustworthy. A visitor should understand within ten seconds who Sanjay is, what he builds, and where to see it.

## Direction
Book cloth: the warm clay-red of old cloth bindings, with ivory type on top. One narrow single column with a plain, first-person voice, in the spirit of a well-set page rather than an app dashboard.

Not this: terminal windows, command-prompt labels, monospace section tags, neon on black, glassy cards. The owner dislikes the terminal look.

## Colour
Default theme, book cloth:
| Token | Value | Use |
|---|---|---|
| `--bg` | `#A94E32` | Page background (clay) |
| `--fg` | `#FAF9F5` | Text, rules, buttons (ivory) |
| `--soft` | `#FBEEE6` | Secondary text, placeholder outlines |
| `--card` | `#FAF9F5` | Contact card, photo and image frames |
| `--card-fg` | `#3A1A10` | Text on ivory surfaces |

Ivory on clay is 5.2:1. The brand clay `#CC785C` is only 3.1:1 with ivory, so a deeper clay is used.

Other themes, chosen from the footer: Sky, Blue, Marigold, Mint, Coral. Each defines the same five tokens and must keep body text at 4.5:1 or better.

## Typography
- **Display:** Bricolage Grotesque, heavy and condensed for the name; 600 to 700 for headings.
- **Body:** Newsreader, a readable text serif at about 19px with generous line height.
- Section headings are sentence case and written as phrases ("Things I’ve built"). No uppercase eyebrow labels, no numbered markers.

## Layout
- One centred column, about 44rem wide.
- Order: sticky top bar, hero (name, role, intro, two buttons), projects, skills, background, kind words, scrapbook, contact, footer.
- Lists are separated by thick rules, not boxes. The contact card is the only large filled surface.
- On phones the photo moves above the name and thumbnails stack above their text.

## Components
- **Top bar:** SL monogram left, three anchor links right. Sticks to the top with a light blur.
- **Buttons:** one solid (ivory fill), one outlined. Hover swaps them.
- **Project rows:** optional 9rem thumbnail, title, one-line description, plain links.
- **Links:** underlined; on hover they invert to a filled block.
- **Placeholders:** dashed outline. Removed when real content is supplied.

## Motion
Hover and focus only: link inversion, a small zoom on project thumbnails, a smooth colour change when the theme switches. All of it is disabled for `prefers-reduced-motion`. No entrance animations.

## Signature
The live local-time line above the name, for example "It’s 3:42 pm in Gujarat right now." It is the one personal, slightly playful detail.

## Accessibility
Skip link, visible focus rings, real heading structure, 4.5:1 body contrast in every theme, and no information carried by colour alone.

## Outcome
After a minute on the page a visitor should feel: this person is careful, plain-spoken and builds real things.
