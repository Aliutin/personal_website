# Progress

## 2026-10-01: JMP retitle

Pushed commit d25ae29 (Cloudflare publishes from `main`): the JMP page h1, the draft-request email subject (`upstreamDraftSubject`), and the `publications` entry in `src/content.ts` now read "Who Runs Short in a Drought? Water Rights and Canal Delivery in Arizona" (paper `main.tex` built Sept 28; Anton approved the title everywhere). `public/cv.pdf` = Oct 1 Portfolio CV with the same title change. The slug stays `/research/upstream-advantage` so existing links keep working. Page text and numbers are still from the Sept 23 draft. `npm run build` passed, but it is slow from Dropbox (tsc about 4.5 min, vite about 8 min).

## 2026-09-24: photo, CV, research pages refresh

Done and live on antonliutin.com (commit 6bfc819, published by Cloudflare's GitHub build):
- Homepage portrait: `src/assets/portrait-2026.webp` (from `Portfolio/Photos/output/imagegen/anton-liutin-homepage-background-v1.png`); social-card image `public/anton-liutin.webp` replaced too.
- `public/cv.pdf` = Sep 14 CV (also copied to `Portfolio/CV_Anton_Liutin_2026.pdf/.html` as the master).
- All three research pages (`content.ts` entries and the hard-coded `*Detail()` components in `src/app/pages/ResearchDetail.tsx`) rewritten from the current drafts; sources in `article-source-paths.md`. Old figures removed, new ones in `src/assets/`.
- Research intro no longer says "drought inequality".
- `HOW-TO-UPDATE.md` added; Portfolio index row "Website (antonliutin.com)" links to it.

Open:
- Water page uses the v19 manuscript title "Closing the Irrigation Guidance Gap…" (user decision 2026-09-24); the Sep 14 CV still has the old title.
- JMP page count shows 41 (main text + references; user decision).
- JMP year-by-year figure fixed at its producer (`colorado_river_clean/paper_pres/figures/create_uxyear_eventstudy_fig.py`: two-line y-label, legend above axes); the JMP main.pdf has not been recompiled with it.
- Double Vision page (`/research/double-vision`) live 2026-09-24; hero is a CC BY-SA 3.0 Wikimedia photo credited on the page. No page yet for the Alaska project.

Publishing = push to `main`; `npm run deploy` fails (Wrangler login lacks access to the Worker).
