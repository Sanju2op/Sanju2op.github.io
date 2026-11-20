# Design

## Goal
A resume that reads in a minute, prints on one A4 page and looks considered without trying hard. It shares a brand with the portfolio but is deliberately quieter.

## Relationship to the portfolio
| | Portfolio (`my-portfolio`) | Resume (this repo) |
|---|---|---|
| Feel | Expressive, editorial, room for imagery | Quiet, dense, document-like |
| Background | Book cloth clay (`#A94E32`) with ivory text | Ivory paper (`#FAF9F5`) with dark ink and clay accents |
| Layout | Reading column plus project sections | One column, fits one A4 page |
| Motion | Hover and focus only | Hover only, none in print |

Not this: terminal windows, command-prompt labels, monospace section tags, neon on black, colour pickers, scrapbooks.

## Tokens
| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF9F5` | Page background (ivory paper) |
| `--fg` | `#3A1A10` | Body text and rules (dark brown ink) |
| `--soft` | `#6B4A3C` | Secondary text (7:1 on ivory) |
| `--accent` | `#A94E32` | Name, header rule, links (5.2:1 on ivory) |
| `--card`, `--card-fg` | `#FFFFFF`, `#3A1A10` | Reserved (shared names with the portfolio) |

## Typography
- Name: Bricolage Grotesque, heavy and condensed, in the clay accent.
- Headings and labels: Bricolage Grotesque 600 to 700.
- Body: Newsreader at about 18px on screen and 10 pt in print.

## Layout
Header (name, role, contact line, Download PDF button), then Summary, Experience, Projects, Skills, Education, Achievements. Dated sections use a two-column grid (date, then content); on phones the date stacks above. Section headings have a thin ink rule; the header has a thick clay rule.

## Print
A4, 14 mm margins, white background, 10 pt text, no outlines or buttons, sections avoid breaking across pages. Link text is the visible URL.

## Accessibility
Skip link, visible focus ring, real heading order, 4.5:1 contrast everywhere, no information carried by colour alone.

## Outcome
A recruiter should find what they need in the first screen and be able to print or download it in one step.
