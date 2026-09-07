# Handoff: landing personal — Yael cmp

## Overview

One-page personal landing for a half-time freelance web developer based in Mexico, aimed at local business owners with no technical background. Five blocks, one CTA (email), bilingual ES/EN. Target stack, decided by the project owner: **Angular, deployed to Vercel.**

## About the design files

The files in `mockup/` are a **design reference authored in HTML** — a prototype showing intended look, copy and behavior. They are not production code to port line by line. Recreate the design in Angular using that project's own conventions (components, templates, styling approach, i18n mechanism).

The mockup is a single file, `mockup/Landing Freelance.dc.html`, that opens directly in a browser. It renders **two frames side by side**: the desktop layout at 1280px and the mobile layout at 380px. Those are the two layouts to implement; everything between them is fluid. `mockup/support.js` and `mockup/_ds/` are what make that file render — they are not part of the deliverable.

## Fidelity

**High fidelity.** Colors, type, spacing, radii, copy and animation timings below are final values taken from the mockup. Content placeholders are explicitly marked as such in the "Assets" section.

## Design tokens

Sourced from the Organic design system (`design-system/readme.md`; full token sheet at `mockup/_ds/organic-6336a77e-8406-41eb-9bb6-de06c13c5347/styles.css`). Define these once in Angular as CSS custom properties.

### Color

| Token | Hex | Used for |
| --- | --- | --- |
| `--color-bg` | `#f5ead8` | page ground (both frames) |
| `--color-surface` | `#ebddc5` | "Cómo trabajo" panel, ES/EN toggle track, canvas behind frames |
| `--color-text` | `#201e1d` | body ink, contact panel background |
| `--color-accent` | `#c67139` | primary button fill, step circles, active toggle |
| `--color-accent-2` | `#7a8a5e` | second voice (sage) |
| `--color-neutral-100` | `#f9f4ed` | service card fill, ink on dark panel |
| `--color-neutral-300` | `#dcd3c4` | body copy on dark panel |
| `--color-neutral-400` | `#c0b6a5` | footer line on dark panel (mobile) |
| `--color-neutral-700` | `#645c50` | small uppercase kickers, placeholder captions |
| `--color-neutral-800` | `#474238` | body paragraphs on cream |
| `--color-accent-300` | `#ffc6a5` | kicker on dark panel, CTA hover on dark |
| `--color-accent-400` | `#f6a06b` | CTA fill on dark panel |
| `--color-accent-600` | `#b2622d` | primary button hover |
| `--color-accent-700` | `#8c491a` | service numbers, link color, card category label |
| `--color-accent-900` | `#402310` | ink on the light CTA inside the dark panel |
| `--color-accent-2-200` | `#e1eecc` | availability tag fill |
| `--color-accent-2-800` | `#3d472b` | availability tag ink |

Contrast was checked; small text (11–14px) must stay at `--color-neutral-700` or darker on cream. Do not use `--color-accent` itself for paragraph-size text on the cream ground (below 4.5:1) — use `--color-accent-700`.

### Type

Google Fonts. Headings **Caprasimo** 400 (the only display face). Body **Figtree** 400/600/700.

| Element | Desktop | Mobile |
| --- | --- | --- |
| Hero h1 (Caprasimo) | 63px / line-height 1.06 / letter-spacing -0.01em | 33px / 1.14 |
| Section h2 (Caprasimo) | 40px / 1.1 | 25px / 1.2 |
| Contact h2 (Caprasimo) | 44px / 1.1 | 26px / 1.2 |
| Card title (Caprasimo) | 23px / 1.25 | 19px / 1.3 |
| Service number (Caprasimo) | 26px | not shown |
| Brand wordmark (Caprasimo) | 24px | 19px |
| Hero paragraph (Figtree 400) | 18.5px / 1.55 | 16.5px / 1.55 |
| Body copy (Figtree 400) | 16px / 1.55 | 15.5px / 1.55 |
| About paragraph (Figtree 400) | 18.5px / 1.6 | 16px / 1.6 |
| Step title (Figtree 700) | 21px | 17px |
| Button label (Figtree 700) | 18px (hero/steps), 19px (contact), 15px (nav) | 16.5px, 15.5px (contact) |
| Kicker (Figtree 700, uppercase, letter-spacing 0.08em) | 13px | 12px |
| Tag / toggle (Figtree 700) | 13.5px / 12.5px | 12.5px |
| Footer (Figtree 400) | 14px | 13px |

`text-wrap: pretty` on every headline and paragraph.

### Spacing

The system's scale, 1.10× density: `4.4 · 8.8 · 13.2 · 17.6 · 26.4 · 35.2`px, extended by the same multiplier for section rhythm: `44 · 61.6 · 70.4 · 79.2 · 88`px.

### Radius and elevation

`--radius-sm: 8px` · `--radius-md: 16px` · `--radius-lg: 28px` · buttons, tags and the round image slots `999px`.

`--shadow-sm: 0 1px 2px rgba(46,43,37,0.14)` · `--shadow-md: 0 3px 10px rgba(46,43,37,0.16)` · `--shadow-lg: 0 12px 32px rgba(46,43,37,0.22)`.

## Screens / views

One route, one scroll. Section order is fixed.

### Desktop (1280px reference width)

Page container: `--color-bg`, ink `--color-text`. Horizontal gutter **70.4px** for every section except the contact panel (26.4px, so the dark panel sits wider than the text above it).

**1. Nav.** Padding 26.4px 70.4px, flex, space-between. Left: wordmark "Yael cmp", Caprasimo 24px. Right, gap 17.6px: the ES/EN toggle (a 999px `--color-surface` track, 4px padding, two 999px pills — active `--color-accent` with white ink, inactive transparent with `--color-neutral-700` ink, 12.5px/700, 5px 12px padding, min-height 30px) then the CTA pill (`--color-accent` fill, white, 15px/700, padding 11px 22px, radius 999px, hover `--color-accent-600`). Not sticky.

**2. Hero.** Padding 70.4px 70.4px 88px. Grid `minmax(0,1.15fr) minmax(0,0.85fr)`, gap 70.4px, items centered.
Left column, flex-start, gap 26.4px: availability tag → h1 → paragraph (max-width 470px) → CTA pill (padding 17.6px 35.2px, 18px/700).
Right column: a **circle**, `aspect-ratio: 1`, `border-radius: 999px`, holding the image placeholder; caption chip bottom-center (`--color-neutral-100` fill, radius 16px, 13.5px/600, padding 13.2px 17.6px).

**3. Services.** Padding 0 70.4px 88px, gap 35.2px. Header row: h2 "En qué te ayudo" with the kicker "SERVICIOS" on the same baseline, gap 17.6px. Then a 3-column grid, gap 26.4px, equal-height cards: `--color-neutral-100`, radius 28px, padding 35.2px, `--shadow-sm`, flex column gap 13.2px. Card order: number (Caprasimo 26px, `--color-accent-700`) → symptom title → body → category label pushed to the bottom (`margin-top: auto; padding-top: 17.6px`, 13px/700 uppercase, `--color-accent-700`).

**4. How I work.** Panel inset 70.4px from the page edges, `--color-surface`, radius 28px, padding 61.6px, gap 44px. h2, then a 3-column grid, gap 44px. Each step: a 44px `--color-accent` circle with the numeral (white, 18px/700) → title 21px/700 → body.

**5. About.** Padding 0 70.4px 88px. Grid `260px minmax(0,1fr)`, gap 61.6px, centered. Left: a 260px circle placeholder with a centered caption. Right: h2 + paragraph (max-width 620px).

**6. Contact.** Panel inset 26.4px, `--color-text` fill, radius 28px, padding 79.2px 61.6px. Flex row, space-between, gap 44px, centered. Left, gap 17.6px: kicker "HABLEMOS" (`--color-accent-300`) → h2 44px (`--color-neutral-100`, max-width 560px) → paragraph (`--color-neutral-300`, max-width 480px). Right: the email pill, `flex-shrink: 0`, `--color-accent-400` fill, `--color-accent-900` ink, padding 22px 35.2px, 19px/700, hover `--color-accent-300`.

**7. Footer.** Padding 0 70.4px 44px, flex space-between, 14px, `--color-neutral-700`. Left: the stack line. Right: the copyright line.

### Mobile (380px reference width)

Same order, single column, horizontal gutter **26.4px**. Differences that matter:

- Nav keeps only the wordmark and the ES/EN toggle. No nav CTA.
- Hero is flex column, gap 22px; h1 33px; CTA is **full width**, min-height 48px.
- The image slot moves **below** the hero: a 220px-tall `999px`-radius shape, inset 26.4px, caption chip centered.
- Service cards stack, radius 28px, padding 22px, and lead with the **category label** (12px/700 uppercase, `--color-accent-700`) instead of the number — the numbers are dropped on mobile.
- "Cómo trabajo" panel inset 17.6px, padding 35.2px 26.4px. Steps are horizontal rows: a 30px numeral circle, gap 13.2px, text column gap 4.4px. A **full-width CTA repeats at the end of this panel**.
- About: a 96px circle placeholder above the h2.
- Contact is a full-bleed dark block (no radius, no inset), padding 35.2px 26.4px 44px, flex column gap 17.6px, with the email CTA full width and the stack line beneath it. No separate footer row.

Every tap target is at least 48px tall.

## Interactions & behavior

- **Language toggle.** Two states, `es` (default) and `en`. Every string on the page comes from the active dictionary; the two dictionaries are in `content.md` and in the mockup's logic class. In the mockup this is component state; in Angular use whatever i18n approach the project prefers.
- **CTA.** Single action, `mailto:enrikeyaeldev@gmail.com`, repeated three times on desktop (nav, hero, contact panel) and three times on mobile (hero, steps panel, contact). No competing secondary action anywhere.
- **Entrance animation.** On load only, no scroll triggers.
  - `riseIn`: `opacity 0 → 1`, `translateY(18px) → 0`, **0.75s**, `cubic-bezier(0.16, 0.84, 0.3, 1)`, `both`. Applied to the hero tag, h1, paragraph and CTA with delays **0 / 0.08 / 0.16 / 0.24s**.
  - `driftIn`: `opacity 0 → 1`, `scale(0.94) rotate(-3deg) → none`, **1.1s**, same easing, delay **0.2s**. Applied to the round image slot in both frames.
- **Hover.** Buttons shift one accent step (`--color-accent` → `--color-accent-600`; `--color-accent-400` → `--color-accent-300`). Desktop service cards lift: `transform: translateY(-6px)` and `--shadow-sm → --shadow-md`, transition `0.3s cubic-bezier(0.16,0.84,0.3,1)`.
- **Focus.** `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }` on every interactive element. Never the browser default.
- **No** dark-mode toggle, no scroll animations, no form, no blog, no testimonials, no technology-logo row.

## State management

One piece of state: the active language. No data fetching, no forms, no persistence required by the design. (Whether the language choice persists across visits is an implementation decision, not a design one.)

## Assets

Nothing final. Two image slots are **marked placeholders** in the mockup, drawn as diagonally striped shapes with a caption naming what goes there:

1. **Hero visual** — desktop: a circle roughly 400×400 in the right column; mobile: a 220px-tall rounded shape below the hero. Intended content: an abstract 3D render (Blender), no face, in the site's palette.
2. **About mark** — desktop 260px circle, mobile 96px circle. Intended content: a wordmark or a smaller render.

Both must be replaced before launch; the hero slot carries most of the page's visual weight. Icons: none used. If any are added, the design system specifies Lucide at stroke-width 2.75.

## Content

Final copy for both languages, block by block, is in `content.md`. Two open items, flagged there: the contact email is currently a personal Gmail (no custom domain yet), and there is no WhatsApp number in the design because the available number is personal.

## Files

- `mockup/Landing Freelance.dc.html` — the design reference. Open in a browser; shows the desktop and mobile layouts side by side. Its logic block at the bottom of the file holds both language dictionaries.
- `mockup/support.js`, `mockup/_ds/` — runtime and stylesheet the mockup needs in order to render. Reference only.
- `content.md` — all final copy, ES and EN.
- `design-system/readme.md` — the Organic design system guide the mockup was built against.
