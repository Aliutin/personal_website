# Designer quickstart

Welcome! Here's how to run a live preview of `antonliutin.com` on your own machine so you can tweak styles and see the result instantly.

## One-time setup (about 5 minutes)

1. **Install Node.js (LTS).** Download from https://nodejs.org and run the installer. Accept all defaults.
2. **Get the project folder.** Anton will share it — either as a ZIP or by giving you access to the GitHub repo.

## Every time you want to work on the site

### Windows

Double-click **`start-preview.bat`** in the project folder.

### macOS

Double-click **`start-preview.command`** in the project folder.
(If macOS blocks it with "cannot be opened", right-click → Open → Open once.)

A black terminal window opens and after a few seconds your browser pops up showing the local preview at `http://localhost:5173/`. That's the same site as `antonliutin.com`, but reflecting your local edits.

**Leave the terminal window open while you work.** Close it (or press `Ctrl+C`) to stop the server.

## Editing files

All layout, sizes, colors, and spacing are written directly in the component files as Tailwind utility classes — there is no separate stylesheet to edit.

| What | Where |
|---|---|
| Home page layout & sizes | `src/app/pages/Home.tsx` |
| Research page | `src/app/pages/Research.tsx` |
| Experience page | `src/app/pages/Experience.tsx` |
| Blog page | `src/app/pages/Blog.tsx` |
| Header & footer | `src/app/Layout.tsx` |
| Text, links, publications, blog entries | `src/content.ts` |
| Theme colors, global fonts | `src/styles/index.css` |

Open any of those files in a text editor (VS Code is free and the most pleasant: https://code.visualstudio.com). Change a class like `py-12` to `py-16`, save the file, and the browser refreshes within a second — no reload needed.

### Tailwind size reference (quick hits)

- **Padding**: `p-4` = 1rem all sides, `px-6` = horizontal 1.5rem, `py-12` = vertical 3rem
- **Margin**: same idea with `m-` prefix
- **Font size**: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-[40px]` (custom value)
- **Max width**: `max-w-xl`, `max-w-2xl`, `max-w-4xl`
- **Responsive prefixes**: `lg:px-12` only applies on screens ≥1024px, `md:...` from ≥768px

Full reference: https://tailwindcss.com/docs/

## If something breaks

Send Anton the text from the terminal window. Most problems are fixable in a minute.
