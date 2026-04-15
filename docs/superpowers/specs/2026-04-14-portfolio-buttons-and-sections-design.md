# Portfolio — Missing Buttons & Sections

**Date:** 2026-04-14
**Project:** Personal Web (Anton Liutin portfolio)
**Scope:** Fill gaps in the Figma Make-generated portfolio: wire up non-functional buttons, add the three sections referenced by nav links but absent from the page, add a mobile menu, and replace obviously-fake placeholder content with real info from the user's CV.

## Goal

The page currently renders but many interactive elements are inert, and three nav links (`About Me`, `Teaching`, `Data`) point to sections that don't exist. The visible content also misrepresents the user as a "Professor of Economics" when he is in fact a PhD candidate. After this spec, every button does something, every nav link goes somewhere, and the visible personal info reflects reality.

## Non-goals

- **No visual redesign.** Colors, fonts, spacing, and existing section layouts are preserved exactly. New sections reuse existing visual patterns.
- **No component splitting.** `App.tsx` stays a single file; new content slots in.
- **No rewrite of existing Research / Columns / Personal content.** The three fake research projects (Uzbekistan cotton, Arizona water stats) remain as placeholders for the user to replace later.
- **No CMS, no backend, no contact form.** `mailto:` is sufficient for the `Contact Me` buttons.
- **No tests.** Manual browser verification is the success criterion.

## Final page structure

Order top to bottom:

1. `Header` — logo, nav, Contact Me button, hamburger on mobile
2. `Hero` — existing, slightly edited text (no `id` — it's the visual intro, not a nav target)
3. `About Me` (`id="about"`) — **NEW**
4. `Research example` (`id="research"`) — existing, content unchanged
5. `Teaching` (`id="teaching"`) — **NEW**
6. `Data & Methods` (`id="data"`) — **NEW**
7. `Columns` (`id="columns"`) — existing
8. `Something personal` — existing
9. `Footer` (Contacts) — existing, edited text

The `About Me` nav link (`#about`) scrolls to the new About Me section — not the Hero. The Hero stays at the top of the page as a visual intro but is not itself a nav target; users reach it by scrolling up or clicking the logo.

## Data-at-top pattern

All editable content moves to plain const arrays at the top of `src/app/App.tsx`, above the `App()` component. The user edits values in these arrays to change page content; they never touch JSX.

```ts
const profile = {
  name: "Anton Liutin",
  title: "PhD Candidate · Ag & Applied Economics",
  email: "liutin@wisc.edu",
  phone: "+1 608 640 15 06",
  affiliation: "University of Wisconsin–Madison · Department of Agricultural & Applied Economics",
};

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "CV", href: "/cv.pdf", external: true },
  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Columns", href: "#columns" },
  { label: "Data", href: "#data" },
];

const aboutBio = `I'm a PhD candidate in Agricultural & Applied Economics at UW–Madison. I came to economics from physics via development economics at the New Economic School in Moscow. My research interests are development economics, environmental and natural resource economics, and economic history.`;

const education = [
  {
    degree: "PhD in Agricultural & Applied Economics",
    school: "University of Wisconsin–Madison",
    period: "2021 – present",
  },
  {
    degree: "MA in Economics",
    school: "New Economic School, Moscow",
    period: "2020",
    thesis: "Polygamy and inequality in a male dominant society",
    advisor: "Hosny Zoabi",
  },
  {
    degree: "BS in Theoretical Physics",
    school: "NRNU MEPhI, Moscow",
    period: "2018",
    thesis: "Source spectrum influence on image quality and dose in Angiography",
    advisor: "Dyachkov Nikolay (Lebedev Physical Institute)",
  },
];

const researchInterests = [
  "Development Economics",
  "Environmental & Natural Resource Economics",
  "Economic History",
];

const teaching = [
  {
    title: "TA — Development Economics (M.A.)",
    org: "New Economic School",
    period: "Fall 2020",
    detail: "Course by Michele Valsecchi, Assistant Professor, NES",
    tag: "TEACHING",
  },
  {
    title: "Individual Tutoring — Mathematics for Economics",
    org: "Students from NES, HSE Math Dept, ICES HSE",
    period: "2017 – 2022",
    detail: "Bachelor & Master degree students in math-intensive programs",
    tag: "TUTORING",
  },
];

const researchAssistantRoles = [
  { role: "Research Assistant", pi: "Paul Dower", org: "UW–Madison", period: "Summer 2023 – present" },
  { role: "Research Assistant", pi: "Corbett Ginger", org: "UW–Madison", period: "Summer 2022 – Spring 2023" },
  { role: "Research Assistant", pi: "Andrei Markevich", org: "New Economic School", period: "Winter 2020 – Summer 2021" },
  { role: "Junior Researcher", pi: "Hosny Zoabi", org: "New Economic School", period: "Winter 2020 – Summer 2021" },
];

const tools = [
  { name: "Python", detail: "Pandas, GeoPandas, NumPy, SciPy" },
  { name: "ArcGIS", detail: "Geospatial analysis" },
  { name: "QGIS", detail: "Open-source GIS" },
  { name: "Stata", detail: "Econometrics" },
  { name: "LaTeX", detail: "Typesetting" },
];

const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "Fluent" },
];
```

Existing `chartData1` and `chartData2` arrays stay where they are. Existing `Research` / `Columns` / `Personal` content stays hardcoded in JSX (outside the scope of this change).

## Section designs (new sections reuse existing patterns)

### About Me section

- Section header row: `container mx-auto border-b border-[#d2d2d3]` wrapping `<h2 className="text-[40px] font-['Ovo',serif]">About Me</h2>` inside `px-6 lg:px-12 py-24 pb-12` — identical to the existing "Research example", "Columns", "Something personal" headers.
- Body: two-column layout on `lg`, stacked on mobile.
  - Left column (`lg:w-1/2`): bio paragraph styled like the existing hero `p` (`text-[#565659] text-lg font-medium`).
  - Right column (`lg:w-1/2`): research-interest tags rendered as orange-outlined pills (`border border-[#ff7b1b] text-[#ff7b1b] px-4 py-2 rounded-full`).
- Below the two-column block, a row of 3 **education cards** using the same card pattern as `Columns`: bordered boxes with `border-t border-[#d2d2d3]`, an uppercase tag row (period), an `Ovo` serif title (degree), a body line (school), and an optional italic thesis line. No images — text-only cards.

### Teaching section

- Same section-header row ("Teaching" in Ovo serif).
- Body: a 2-card grid (`grid grid-cols-1 md:grid-cols-2`) reusing the `Columns` card pattern. Each card has an uppercase tag row (tag + period), a medium-weight title, and a `text-[#565659]` sub-line (org + detail).
- Below the grid: a "Research Assistant Experience" sub-heading (smaller, `text-xl font-medium`) followed by a simple 4-row list. Each row mirrors the hero contact strip pattern: `flex justify-between border-t border-[#d2d2d3] py-4`, role + PI on the left, org + period on the right.

### Data & Methods section

- Same section-header row ("Data & Methods").
- Body: a 5-card grid (`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5`) of tool cards. Each card: bordered box with tool name (Ovo serif, large) and detail line (`text-[#565659]`).
- Below the grid: a small "Languages" row — two minimal chips side by side showing "Russian · Native" and "English · Fluent".

## Button wiring

| Where | Label | Current | New |
|---|---|---|---|
| Header | Contact Me | `<button>` inert | `<a href="mailto:liutin@wisc.edu">` styled as button |
| Hero | Contact Me | inert | same mailto: anchor |
| Hero | CV | inert | `<a href="/cv.pdf" target="_blank" rel="noopener">` styled as button |
| Footer | Contact Me | inert | mailto: anchor |
| Footer | CV | inert | CV link anchor |
| Nav: 5 anchors | About Me / Research / Teaching / Columns / Data | `href="#"` | `href="#<section-id>"` |
| Nav: CV | CV | `href="#"` | `href="/cv.pdf" target="_blank"` |
| Research cases ×3 | Read more | inert | `href="#"` with `{/* TODO: real paper link */}` comment |
| Research section end | READ ALL | inert | `href="#"` + TODO comment |
| Columns cards ×5 | (card click) | inert div | `href="#"` + TODO comment |
| Columns block | Read All | inert | `href="#"` + TODO comment |
| Hero footer block | Linkedin / Facebook / Telegram / Instagram | `href="#"` | **DELETED** (social block removed entirely) |
| Page footer | same social block | `href="#"` | **DELETED** |

## Smooth scrolling

- Add `html { scroll-behavior: smooth; }` to `src/styles/index.css`.
- Add `scroll-margin-top: 120px;` to all `section[id]` elements in `src/styles/index.css` so the sticky header doesn't cover section tops after scrolling.
- Sections get `id` attrs matching `navLinks[].href` values.

## Mobile menu

- Add `useState(false)` for `menuOpen` at the top of `App()`.
- Hamburger button (`lucide-react` `<Menu>` icon) rendered in the header inside a `lg:hidden` container. On click, sets `menuOpen(true)`.
- When `menuOpen`, render a dropdown panel below the header (`absolute top-full left-0 right-0 bg-[#f9f9f7] border-b border-[#d2d2d3] lg:hidden`) containing the stacked nav links + a Contact Me button. Each link click sets `menuOpen(false)`.
- Close button in the panel: `<X>` icon from lucide-react.
- No portals, no animations, no focus-trap. The menu is a simple show/hide block.

## Content fixes (placeholder → real)

- Header subtitle: `Professor of Economics` → `PhD Candidate · Ag & Applied Economics`
- Hero h2 left unchanged (the "I study water management for sustainable crop production" line is not obviously wrong and is stylistically consistent)
- Hero bottom-strip email: `liutin@liutin.com` → `liutin@wisc.edu`
- Footer email line: same change
- Footer affiliation block: `The New Economic School, 45 Skolkovskoe shosse…` → `University of Wisconsin–Madison · Department of Agricultural & Applied Economics · Madison, WI`
- Research case content (Uzbekistan cotton, Arizona water stats): **untouched**; flagged in a comment block above the research section as "TODO: replace with real projects"

## CV PDF

Copy `C:\Users\lutir\Downloads\CV Anton Liutin.pdf` to `public/cv.pdf` in the project root. Vite serves the `public/` directory at `/`, so the CV is available at `/cv.pdf` for all links and opens in a new tab.

## Files touched

- `src/app/App.tsx` — add data arrays at top, add 3 new section JSX blocks, wire button hrefs, add mobile menu state + component, remove social blocks, update placeholder text. Grows from ~487 to ~750 lines.
- `src/styles/index.css` — add `html { scroll-behavior: smooth; }` and `section[id] { scroll-margin-top: 120px; }`.
- `public/cv.pdf` — new file, user's CV copied in.

## Success criteria

- Every `<button>` and nav `<a>` in the page has a working action (mailto, target, or explicit TODO).
- The three nav links `About Me` / `Teaching` / `Data` smooth-scroll to visible sections on the same page.
- Clicking `CV` (nav or hero or footer button) opens the PDF in a new tab.
- Header nav collapses into a hamburger menu on screens narrower than `lg` (1024px).
- No visual regressions on existing sections; only the header subtitle, email fields, and footer affiliation text visibly change.
- `npm run build` still succeeds with no errors.
- Manual browser pass: every button clicked, every anchor tested, mobile viewport checked with Chrome DevTools device toolbar.
