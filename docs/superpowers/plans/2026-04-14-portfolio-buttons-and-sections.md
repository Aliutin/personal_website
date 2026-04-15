# Portfolio — Buttons & Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fill the gaps in the Figma Make-generated portfolio: add three missing sections (About Me, Teaching, Data), wire up every inert button and nav link, add a mobile hamburger menu, and replace obviously-placeholder content with real info from the user's CV.

**Architecture:** Single-file React component (`src/app/App.tsx`). All editable content hoisted to `const` arrays at the top of the file so the user can edit text without touching JSX. New sections reuse existing visual patterns (bordered cards, orange accent dot, `Ovo` serif headings). Smooth-scroll via CSS. Mobile menu via local `useState`.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v4, `lucide-react` icons (already installed), Vite 6.

**Verification:** This is a visual UI task with no automated tests (per spec). Verification after each task: reload the dev server (or `npm run build` at the end) and visually check. A final walkthrough task exercises every button and section.

**No git repo:** The project is not a git repo. Skip commit steps. (User can `git init` later if they want version control.)

---

## File Structure

Files touched in this plan:

- **Modify** `src/app/App.tsx` — the main work. Grows from ~487 to ~750 lines. All editing happens here.
- **Modify** `src/styles/index.css` — add smooth-scroll and section scroll-margin CSS rules.
- **Create** `public/cv.pdf` — user's CV PDF copied from Downloads, served by Vite at `/cv.pdf`.
- **Create** `public/` directory if it doesn't exist.

---

## Task 1: Copy CV PDF to public directory

**Files:**
- Create: `public/cv.pdf` (copy from `C:\Users\lutir\Downloads\CV Anton Liutin.pdf`)

- [ ] **Step 1: Create the public directory and copy the CV**

Run:
```bash
mkdir -p "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web/public" && cp "C:/Users/lutir/Downloads/CV Anton Liutin.pdf" "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web/public/cv.pdf"
```

- [ ] **Step 2: Verify the file is in place**

Run:
```bash
ls -la "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web/public/cv.pdf"
```

Expected: the file exists with size ~81 KB.

---

## Task 2: Add smooth-scroll CSS

**Files:**
- Modify: `src/styles/index.css`

- [ ] **Step 1: Append smooth-scroll and section offset rules**

Full final contents of `src/styles/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Ovo&display=swap");

@import "tailwindcss";

@import "./theme.css";

html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 120px;
}
```

- [ ] **Step 2: Verify the dev server still builds**

If the dev server is running, it should hot-reload. No visual change expected yet.

---

## Task 3: Add data arrays at the top of App.tsx

This is the "editable content" hoisting step. We add all profile/education/teaching/data arrays before the existing `navLinks` constant, then replace the existing `navLinks` with the richer version.

**Files:**
- Modify: `src/app/App.tsx` (lines 26–27 region — right after the image imports, before the chart data)

- [ ] **Step 1: Replace the existing `navLinks` line and add the new data arrays**

Find this block in `src/app/App.tsx` (currently around lines 26–27):

```tsx
const navLinks = ["About Me", "CV", "Research", "Teaching", "Columns", "Data"];
```

Replace it with the following block (exactly):

```tsx
// ============================================================================
// EDITABLE CONTENT — change values here, the page below will update automatically
// ============================================================================

const profile = {
  name: "Anton Liutin",
  title: "PhD Candidate · Ag & Applied Economics",
  email: "liutin@wisc.edu",
  phone: "+1 608 640 15 06",
  affiliation:
    "University of Wisconsin–Madison · Department of Agricultural & Applied Economics",
  location: "Madison, WI",
  cvUrl: "/cv.pdf",
};

type NavLink = { label: string; href: string; external?: boolean };

const navLinks: NavLink[] = [
  { label: "About Me", href: "#about" },
  { label: "CV", href: "/cv.pdf", external: true },
  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Columns", href: "#columns" },
  { label: "Data", href: "#data" },
];

const aboutBio =
  "I'm a PhD candidate in Agricultural & Applied Economics at UW–Madison. I came to economics from physics via development economics at the New Economic School in Moscow. My research interests are development economics, environmental and natural resource economics, and economic history.";

type Education = {
  degree: string;
  school: string;
  period: string;
  thesis?: string;
  advisor?: string;
};

const education: Education[] = [
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
    thesis:
      "Source spectrum influence on image quality and dose in Angiography",
    advisor: "Dyachkov Nikolay (Lebedev Physical Institute)",
  },
];

const researchInterests = [
  "Development Economics",
  "Environmental & Natural Resource Economics",
  "Economic History",
];

type TeachingItem = {
  title: string;
  org: string;
  period: string;
  detail: string;
  tag: string;
};

const teaching: TeachingItem[] = [
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

type RARole = { role: string; pi: string; org: string; period: string };

const researchAssistantRoles: RARole[] = [
  {
    role: "Research Assistant",
    pi: "Paul Dower",
    org: "UW–Madison",
    period: "Summer 2023 – present",
  },
  {
    role: "Research Assistant",
    pi: "Corbett Ginger",
    org: "UW–Madison",
    period: "Summer 2022 – Spring 2023",
  },
  {
    role: "Research Assistant",
    pi: "Andrei Markevich",
    org: "New Economic School",
    period: "Winter 2020 – Summer 2021",
  },
  {
    role: "Junior Researcher",
    pi: "Hosny Zoabi",
    org: "New Economic School",
    period: "Winter 2020 – Summer 2021",
  },
];

type Tool = { name: string; detail: string };

const tools: Tool[] = [
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

// ============================================================================
// END EDITABLE CONTENT
// ============================================================================
```

- [ ] **Step 2: Verify the file still compiles**

TypeScript will catch any syntax errors. In a different terminal run:
```bash
cd "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web" && npx tsc -b --noEmit
```
Expected: no output (success). If the dev server is running it should also still be green.

---

## Task 4: Swap imports and add mobile menu state

**Files:**
- Modify: `src/app/App.tsx` (lines 1–2 and inside the `App()` function near the top)

- [ ] **Step 1: Replace the first two import lines in one shot**

Find the first two lines of `src/app/App.tsx`:

```tsx
import React from "react";
import { ArrowDownRight, Droplets, Leaf } from "lucide-react";
```

Replace with:

```tsx
import { useState } from "react";
import { ArrowDownRight, Droplets, Leaf, Menu, X } from "lucide-react";
```

(The default `React` import is no longer needed — Vite + React 18 uses the automatic JSX runtime. `useState`, `Menu`, `X` are the new additions.)

- [ ] **Step 2: Add menu state inside App()**

Find:
```tsx
export default function App() {
  return (
```

Replace with:
```tsx
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
```

- [ ] **Step 3: Verify no compile errors**

Run:
```bash
cd "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web" && npx tsc -b --noEmit
```
Expected: no output.

---

## Task 5: Rewrite the Header

Replace the entire existing `<header>` block with a new one that uses `profile` + `navLinks` data, handles external links, adds the mobile hamburger, and wires Contact Me to `mailto:`.

**Files:**
- Modify: `src/app/App.tsx` — the header block

- [ ] **Step 1: Replace the header JSX**

Find the existing header (everything from `{/* Header */}` through its closing `</header>` tag — the block currently around lines 56–79):

```tsx
      {/* Header */}
      <header className="bg-[#f9f9f7] border-b border-[#d2d2d3] sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl font-['Ovo',serif] leading-tight">Anton Liutin</h1>
            <div className="flex items-center gap-2 text-[#565659] text-base font-medium">
              <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block" />
              <span>Professor of Economics</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8 font-medium text-[#565659]">
              {navLinks.map((link) => (
                <a key={link} href="#" className="hover:text-[#1a1a1b] transition-colors">
                  {link}
                </a>
              ))}
            </nav>
            <button className="bg-[#ff7b1b] text-white px-6 py-3 font-medium uppercase hover:bg-orange-600 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </header>
```

Replace with:

```tsx
      {/* Header */}
      <header className="bg-[#f9f9f7] border-b border-[#d2d2d3] sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl font-['Ovo',serif] leading-tight">{profile.name}</h1>
            <div className="flex items-center gap-2 text-[#565659] text-base font-medium">
              <span className="w-4 h-4 bg-[#ff7b1b] rounded-full inline-block" />
              <span>{profile.title}</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8 font-medium text-[#565659]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={`mailto:${profile.email}`}
              className="bg-[#ff7b1b] text-white px-6 py-3 font-medium uppercase hover:bg-orange-600 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden p-2 text-[#1a1a1b]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#d2d2d3] bg-[#f9f9f7]">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4 font-medium text-[#565659]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 hover:text-[#1a1a1b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMenuOpen(false)}
                className="bg-[#ff7b1b] text-white px-6 py-3 font-medium uppercase hover:bg-orange-600 transition-colors text-center mt-2"
              >
                Contact Me
              </a>
            </nav>
          </div>
        )}
      </header>
```

- [ ] **Step 2: Verify TypeScript compiles**

Run:
```bash
cd "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web" && npx tsc -b --noEmit
```
Expected: no output.

- [ ] **Step 3: Reload the dev server and visually verify**

Refresh `http://localhost:5173/` (or whatever port Vite picked). Expected:
- Header text: "Anton Liutin" + "PhD Candidate · Ag & Applied Economics"
- Desktop: 6 nav links + orange Contact Me button
- Clicking Contact Me opens the mail client to liutin@wisc.edu
- At browser widths < 1024px (use DevTools device toolbar), desktop nav hides and a hamburger appears
- Clicking hamburger drops a vertical menu; clicking X or a link closes it

---

## Task 6: Update the Hero section

Replace the hardcoded email/phone with `profile.*` and wire Contact Me / CV buttons. Remove the social link block.

**Files:**
- Modify: `src/app/App.tsx` — the Hero section (currently around lines 81–127)

- [ ] **Step 1: Replace the Hero section JSX**

Find the entire Hero section (from `{/* Hero Section */}` to its closing `</section>`):

```tsx
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse lg:flex-row items-stretch pt-8 lg:pt-0 border-b border-[#d2d2d3]">
        <div className="lg:w-1/2 flex flex-col justify-between min-h-[600px]">
          <div className="px-6 lg:pl-12 pt-12 lg:pt-24 max-w-2xl">
            <h2 className="text-4xl lg:text-[42px] font-['Ovo',serif] leading-tight mb-6 text-balance">
              Anton, Agricultural Economist.
              <br />
              I study water management
              <br />
              for sustainable crop production.
            </h2>
            <p className="text-[#565659] text-lg font-medium mb-12 max-w-md">
              Dedicated to advancing the U.S. agricultural sector.
              <br />
              Open to new collaborations and research opportunities
            </p>
            <div className="flex gap-2">
              <button className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors">
                Contact Me
              </button>
              <button className="bg-[#e5e5e5] px-8 py-5 text-xl font-medium hover:bg-gray-300 transition-colors">
                CV
              </button>
            </div>
          </div>
          <div className="px-6 lg:px-12 py-8 mt-12 lg:mt-0 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#d2d2d3]">
            <div className="text-[#565659] mb-4 sm:mb-0">
              <p>liutin@liutin.com</p>
              <p>+1 608 640 1506</p>
            </div>
            <div className="flex gap-6 font-medium">
              {["Linkedin", "Facebook", "Telegram", "Instagram"].map((social) => (
                <a key={social} href="#" className="hover:text-[#ff7b1b] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-auto h-96 relative overflow-hidden bg-gray-200">
          <img
            src={portrait}
            alt="Anton Liutin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
```

Replace with:

```tsx
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse lg:flex-row items-stretch pt-8 lg:pt-0 border-b border-[#d2d2d3]">
        <div className="lg:w-1/2 flex flex-col justify-between min-h-[600px]">
          <div className="px-6 lg:pl-12 pt-12 lg:pt-24 max-w-2xl">
            <h2 className="text-4xl lg:text-[42px] font-['Ovo',serif] leading-tight mb-6 text-balance">
              Anton, Agricultural Economist.
              <br />
              I study water management
              <br />
              for sustainable crop production.
            </h2>
            <p className="text-[#565659] text-lg font-medium mb-12 max-w-md">
              Dedicated to advancing the U.S. agricultural sector.
              <br />
              Open to new collaborations and research opportunities
            </p>
            <div className="flex gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors"
              >
                Contact Me
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5e5e5] px-8 py-5 text-xl font-medium hover:bg-gray-300 transition-colors"
              >
                CV
              </a>
            </div>
          </div>
          <div className="px-6 lg:px-12 py-8 mt-12 lg:mt-0 border-t border-[#d2d2d3]">
            <div className="text-[#565659]">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-auto h-96 relative overflow-hidden bg-gray-200">
          <img
            src={portrait}
            alt="Anton Liutin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
```

Note: the social link block (Linkedin/Facebook/Telegram/Instagram) is removed. The contact strip now contains only the email + phone block and no longer needs `flex flex-col sm:flex-row sm:items-center justify-between`.

- [ ] **Step 2: Visual verify**

Reload the page. Expected:
- Hero buttons: Contact Me opens mailto, CV opens `/cv.pdf` in a new tab
- Contact strip shows `liutin@wisc.edu` + `+1 608 640 15 06`, no social links

---

## Task 7: Insert new About Me section

Inserted between the Hero and the Research section.

**Files:**
- Modify: `src/app/App.tsx` — insert a new `<section>` block after the Hero's closing `</section>` and before `{/* Research Section */}`

- [ ] **Step 1: Insert the About Me section**

Find the closing of the Hero section:
```tsx
        <div className="lg:w-1/2 lg:h-auto h-96 relative overflow-hidden bg-gray-200">
          <img
            src={portrait}
            alt="Anton Liutin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Research Section */}
```

Replace with (inserts new About Me section between the two):

```tsx
        <div className="lg:w-1/2 lg:h-auto h-96 relative overflow-hidden bg-gray-200">
          <img
            src={portrait}
            alt="Anton Liutin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-24 pb-12">
          <h2 className="text-[40px] font-['Ovo',serif]">About Me</h2>
        </div>

        <div className="px-6 lg:px-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#565659] text-lg font-medium leading-relaxed max-w-xl">
              {aboutBio}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 content-start">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="border border-[#ff7b1b] text-[#ff7b1b] px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase mb-6">
                <span>{edu.period}</span>
              </div>
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-2">
                {edu.degree}
              </h3>
              <p className="text-[#565659] text-base font-medium mb-4">
                {edu.school}
              </p>
              {edu.thesis && (
                <p className="text-[#757578] text-sm italic mt-auto">
                  Thesis: “{edu.thesis}”
                  {edu.advisor && <span className="block not-italic">Advisor: {edu.advisor}</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
```

- [ ] **Step 2: Visual verify**

Reload. Expected: a new "About Me" section appears between the Hero and Research, with the bio paragraph on the left, three orange-outlined interest pills on the right, and three bordered education cards below.

---

## Task 8: Add id="research" to the Research section

**Files:**
- Modify: `src/app/App.tsx` — the Research section opening tag

- [ ] **Step 1: Add the id attribute**

Find:
```tsx
      {/* Research Section */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
```

Replace with:
```tsx
      {/* Research Section */}
      <section id="research" className="container mx-auto border-b border-[#d2d2d3]">
```

- [ ] **Step 2: Wire the Research "Read more" and "READ ALL" buttons to placeholder hrefs**

Find each of these three `<button>` blocks in the Research section (one per research case, at roughly lines 195, 253, 321 in the original file) and the final READ ALL button:

```tsx
                  <button className="flex items-center gap-4 text-2xl font-medium uppercase hover:opacity-80 transition-opacity">
                    Read more
```

Each button tag must be converted to an anchor:
```tsx
                  <a href="#" className="flex items-center gap-4 text-2xl font-medium uppercase hover:opacity-80 transition-opacity">
                    Read more
```

And its closing `</button>` becomes `</a>`. There are THREE such "Read more" buttons in the Research section. Change all three.

Also find the big orange READ ALL button:
```tsx
          <button className="w-full bg-[#ff7b1b] hover:bg-orange-600 text-white text-2xl font-medium uppercase py-6 transition-colors">
            READ ALL
          </button>
```

Replace with:
```tsx
          <a href="#" className="block w-full bg-[#ff7b1b] hover:bg-orange-600 text-white text-2xl font-medium uppercase py-6 text-center transition-colors">
            READ ALL
          </a>
```

(Note the `block` class and `text-center` added because `<a>` is inline by default.)

- [ ] **Step 3: Add a TODO comment above the Research section**

Find:
```tsx
      {/* Research Section */}
      <section id="research" className="container mx-auto border-b border-[#d2d2d3]">
```

Replace with:
```tsx
      {/* Research Section */}
      {/* TODO: Replace the three placeholder cases (Uzbekistan / Arizona / water policy) with real projects when available. Read-more links currently point to "#". */}
      <section id="research" className="container mx-auto border-b border-[#d2d2d3]">
```

- [ ] **Step 4: Visual verify**

Reload. Research section unchanged visually; "Read more" links are now real links (cursor shows them as clickable).

---

## Task 9: Insert new Teaching section

Inserted between the Research section and the Columns section.

**Files:**
- Modify: `src/app/App.tsx` — insert a new `<section>` block after the Research section's closing `</section>` and before `{/* Columns Section */}`

- [ ] **Step 1: Insert the Teaching section**

Find:
```tsx
        {/* Read All Button */}
        <div className="p-6 lg:p-8">
          <a href="#" className="block w-full bg-[#ff7b1b] hover:bg-orange-600 text-white text-2xl font-medium uppercase py-6 text-center transition-colors">
            READ ALL
          </a>
        </div>
      </section>

      {/* Columns Section */}
```

Replace with:

```tsx
        {/* Read All Button */}
        <div className="p-6 lg:p-8">
          <a href="#" className="block w-full bg-[#ff7b1b] hover:bg-orange-600 text-white text-2xl font-medium uppercase py-6 text-center transition-colors">
            READ ALL
          </a>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-24 pb-12">
          <h2 className="text-[40px] font-['Ovo',serif]">Teaching</h2>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Early teaching & tutoring experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {teaching.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 text-[#757578] text-sm font-medium uppercase mb-6">
                <span>{item.tag}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span>{item.period}</span>
              </div>
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-4">
                {item.title}
              </h3>
              <p className="text-[#565659] text-base font-medium mb-2">
                {item.org}
              </p>
              <p className="text-[#757578] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="px-6 lg:px-12 py-16 border-t border-[#d2d2d3]">
          <h3 className="text-2xl font-['Ovo',serif] mb-8">Research Assistant Experience</h3>
          <div className="flex flex-col">
            {researchAssistantRoles.map((role, idx) => (
              <div
                key={idx}
                className="border-t border-[#d2d2d3] py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-medium text-[#1a1a1b]">{role.role}</span>
                  <span className="text-[#565659]"> · {role.pi}</span>
                </div>
                <div className="text-[#757578] text-sm font-medium uppercase tracking-wider">
                  {role.org} · {role.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Columns Section */}
```

- [ ] **Step 2: Visual verify**

Reload. Expected: a new "Teaching" section appears after Research, with a 2-card grid on top (TA role + Tutoring) and a "Research Assistant Experience" list below it.

---

## Task 10: Insert new Data & Methods section

Inserted between Teaching and Columns.

**Files:**
- Modify: `src/app/App.tsx` — insert a new `<section>` block right before `{/* Columns Section */}` (which at this point is just after the Teaching section)

- [ ] **Step 1: Insert the Data section**

Find:
```tsx
        <div className="px-6 lg:px-12 py-16 border-t border-[#d2d2d3]">
          <h3 className="text-2xl font-['Ovo',serif] mb-8">Research Assistant Experience</h3>
          <div className="flex flex-col">
            {researchAssistantRoles.map((role, idx) => (
              <div
                key={idx}
                className="border-t border-[#d2d2d3] py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-medium text-[#1a1a1b]">{role.role}</span>
                  <span className="text-[#565659]"> · {role.pi}</span>
                </div>
                <div className="text-[#757578] text-sm font-medium uppercase tracking-wider">
                  {role.org} · {role.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Columns Section */}
```

Replace with:

```tsx
        <div className="px-6 lg:px-12 py-16 border-t border-[#d2d2d3]">
          <h3 className="text-2xl font-['Ovo',serif] mb-8">Research Assistant Experience</h3>
          <div className="flex flex-col">
            {researchAssistantRoles.map((role, idx) => (
              <div
                key={idx}
                className="border-t border-[#d2d2d3] py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-medium text-[#1a1a1b]">{role.role}</span>
                  <span className="text-[#565659]"> · {role.pi}</span>
                </div>
                <div className="text-[#757578] text-sm font-medium uppercase tracking-wider">
                  {role.org} · {role.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Methods Section */}
      <section id="data" className="container mx-auto border-b border-[#d2d2d3]">
        <div className="px-6 lg:px-12 py-24 pb-12">
          <h2 className="text-[40px] font-['Ovo',serif]">Data &amp; Methods</h2>
          <p className="text-[#565659] text-lg font-medium mt-4 max-w-2xl">
            Tools and languages I use for research.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="border-t border-[#d2d2d3] md:border-r last:md:border-r-0 p-8 flex flex-col min-h-[180px]"
            >
              <h3 className="text-2xl font-['Ovo',serif] leading-tight mb-4">{tool.name}</h3>
              <p className="text-[#565659] text-sm">{tool.detail}</p>
            </div>
          ))}
        </div>

        <div className="px-6 lg:px-12 py-12 border-t border-[#d2d2d3] flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-wider text-[#757578]">
            Languages
          </span>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="border border-[#d2d2d3] px-4 py-2 rounded-full text-sm font-medium"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Columns Section */}
```

- [ ] **Step 2: Visual verify**

Reload. Expected: a new "Data & Methods" section after Teaching, with a 5-card grid of tools and a Languages row below.

---

## Task 11: Wire the Columns section

Add `id="columns"` and convert the 5 card `<div>`s and the big orange READ ALL block into anchor tags.

**Files:**
- Modify: `src/app/App.tsx` — the Columns section

- [ ] **Step 1: Add id to the Columns section**

Find:
```tsx
      {/* Columns Section */}
      <section className="container mx-auto border-b border-[#d2d2d3]">
```

Replace with:
```tsx
      {/* Columns Section */}
      {/* TODO: Replace the 5 placeholder column cards with real articles when available. */}
      <section id="columns" className="container mx-auto border-b border-[#d2d2d3]">
```

- [ ] **Step 2: Convert each column card div to an anchor**

Find:
```tsx
            <div key={idx} className="border-t border-[#d2d2d3] border-r sm:last:border-r-0 xl:last:border-r p-8 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group">
```

Replace with:
```tsx
            <a key={idx} href="#" className="border-t border-[#d2d2d3] border-r sm:last:border-r-0 xl:last:border-r p-8 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group">
```

Then find the corresponding closing `</div>` for this card and change it to `</a>`. The structure is:

```tsx
            <a key={idx} href="#" className="...">
              <div className="h-[300px] ...">
                <img ... />
              </div>
              <h4 className="...">{col.title}</h4>
              <div className="flex items-center justify-between">
                ...
              </div>
            </a>
          ))}
```

- [ ] **Step 3: Convert the big orange Read All block**

Find:
```tsx
          {/* Solid Read All Block */}
          <div className="border-t border-[#d2d2d3] p-8 flex">
            <div className="bg-[#ff7b1b] w-full h-full p-8 flex flex-col justify-between hover:bg-orange-600 transition-colors cursor-pointer">
              <h4 className="text-5xl lg:text-[48px] font-medium text-white uppercase leading-none">Read All</h4>
              <div className="w-12 h-12 bg-[#1a1a1b] rounded-full flex items-center justify-center text-white self-end">
                <ArrowDownRight className="w-6 h-6" />
              </div>
            </div>
          </div>
```

Replace with:
```tsx
          {/* Solid Read All Block */}
          <a href="#" className="border-t border-[#d2d2d3] p-8 flex">
            <div className="bg-[#ff7b1b] w-full h-full p-8 flex flex-col justify-between hover:bg-orange-600 transition-colors cursor-pointer">
              <h4 className="text-5xl lg:text-[48px] font-medium text-white uppercase leading-none">Read All</h4>
              <div className="w-12 h-12 bg-[#1a1a1b] rounded-full flex items-center justify-center text-white self-end">
                <ArrowDownRight className="w-6 h-6" />
              </div>
            </div>
          </a>
```

- [ ] **Step 4: Visual verify**

Reload. Columns section looks the same; cards are now proper links.

---

## Task 12: Update the Footer

Replace hardcoded contact info, wire Contact Me / CV buttons, remove social block, fix affiliation.

**Files:**
- Modify: `src/app/App.tsx` — the Footer block

- [ ] **Step 1: Replace the footer JSX**

Find the existing footer (from `{/* Footer */}` to `</footer>`):

```tsx
      {/* Footer */}
      <footer className="bg-[#f3f3f4] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col justify-between h-full min-h-[300px]">
              <h2 className="text-[40px] font-['Ovo',serif]">Contacts</h2>
              <div className="flex gap-2">
                <button className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors">
                  Contact Me
                </button>
                <button className="bg-[#d2d2d3] px-8 py-5 text-xl font-medium hover:bg-gray-300 transition-colors">
                  CV
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 gap-12 text-[#1a1a1b] font-medium text-xl lg:text-[22px] leading-relaxed">
              <div className="text-[#565659]">
                <p>liutin@liutin.com</p>
                <p>+1 608 640 1506</p>
              </div>
              <div className="max-w-md">
                <p className="text-[#565659]">
                  <span className="text-[#1a1a1b]">The New Economic School</span>, 45 Skolkovskoe shosse, Skolkovo Village, Moscow, 121353, Russian Federation;
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {["Linkedin", "Facebook", "Telegram", "Instagram"].map((social) => (
                  <a key={social} href="#" className="hover:text-[#ff7b1b] transition-colors w-fit">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
```

Replace with:

```tsx
      {/* Footer */}
      <footer className="bg-[#f3f3f4] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="flex flex-col justify-between h-full min-h-[300px]">
              <h2 className="text-[40px] font-['Ovo',serif]">Contacts</h2>
              <div className="flex gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-[#ff7b1b] text-white px-8 py-5 text-xl font-medium uppercase hover:bg-orange-600 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d2d2d3] px-8 py-5 text-xl font-medium hover:bg-gray-300 transition-colors"
                >
                  CV
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 gap-12 text-[#1a1a1b] font-medium text-xl lg:text-[22px] leading-relaxed">
              <div className="text-[#565659]">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
              <div className="max-w-xl">
                <p className="text-[#565659]">
                  {profile.affiliation} · {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
```

- [ ] **Step 2: Visual verify**

Reload. Expected: footer shows real email, real phone, UW–Madison affiliation, no social links, and the Contact Me/CV buttons are functional.

---

## Task 13: Production build verification

**Files:** none

- [ ] **Step 1: Run the production build**

Run:
```bash
cd "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web" && npm run build
```

Expected: "✓ built in Xs" with no TypeScript errors. If TS complains about unused variables (e.g. if `React` import was removed but something still references it), fix before proceeding.

- [ ] **Step 2: Run TypeScript check separately**

Run:
```bash
cd "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web" && npx tsc -b --noEmit
```

Expected: no output (success).

---

## Task 14: Final manual walkthrough

**Files:** none — this is a checklist the user performs in the browser.

- [ ] **Step 1: Start the dev server**

Run:
```bash
cd "C:/Users/lutir/Dropbox/Projects/UW Madison/5.1/Personal Web" && npm run dev
```

Open the URL it prints.

- [ ] **Step 2: Desktop viewport checklist**

At desktop width, verify each item:

- Header shows "Anton Liutin" + "PhD Candidate · Ag & Applied Economics"
- Nav has 6 links: About Me, CV, Research, Teaching, Columns, Data
- Click each nav link:
  - **About Me** → smooth-scrolls to the new About Me section
  - **CV** → opens `/cv.pdf` in a new tab
  - **Research** → smooth-scrolls to Research example
  - **Teaching** → smooth-scrolls to new Teaching section
  - **Columns** → smooth-scrolls to Columns
  - **Data** → smooth-scrolls to new Data & Methods
- Sticky header doesn't cover section titles after scrolling (verifies `scroll-margin-top`)
- Header **Contact Me** opens mail client with `liutin@wisc.edu`
- Hero **Contact Me** / **CV** buttons work
- Footer **Contact Me** / **CV** buttons work
- Hero bottom strip shows `liutin@wisc.edu` + `+1 608 640 15 06` (no social links)
- Footer shows UW–Madison affiliation (no NES Moscow address, no social links)
- About Me section: bio paragraph, 3 interest pills, 3 education cards (PhD / MA / BS)
- Teaching section: 2 teaching cards + 4-row Research Assistant Experience list
- Data section: 5 tool cards + Languages row

- [ ] **Step 3: Mobile viewport checklist**

Open Chrome DevTools, toggle device toolbar (Ctrl+Shift+M), set viewport to ~400 px wide.

- Hamburger icon appears in top-right of header
- Click hamburger → dropdown panel shows 6 nav links + orange Contact Me button
- Click X → menu closes
- Click any nav link → menu closes AND page scrolls to the section
- All sections render in a stacked (single-column) layout
- No horizontal scrollbar

- [ ] **Step 4: Report completion**

If all items pass, the implementation is complete. If any item fails, note which and iterate.
