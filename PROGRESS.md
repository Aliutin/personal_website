# Progress

## 2026-09-24: photo, CV, research pages refresh

Done (local, build passes, not yet committed or deployed):
- Homepage portrait: `src/assets/portrait-2026.webp` (from `Portfolio/Photos/output/imagegen/anton-liutin-homepage-background-v1.png`); social-card image `public/anton-liutin.webp` replaced too.
- `public/cv.pdf` = Sep 14 CV (also copied to `Portfolio/CV_Anton_Liutin_2026.pdf/.html` as the master).
- All three research pages (`content.ts` entries and the hard-coded `*Detail()` components in `src/app/pages/ResearchDetail.tsx`) rewritten from the current drafts; sources in `article-source-paths.md`. Old figures removed, new ones in `src/assets/`.
- Research intro no longer says "drought inequality".
- `HOW-TO-UPDATE.md` added; Portfolio index row "Website (antonliutin.com)" links to it.

Open:
- Water page uses the v19 manuscript title "Closing the Irrigation Guidance Gap…" (user decision 2026-09-24); the Sep 14 CV still has the old title.
- JMP page count shows 41 (main text + references; user decision).
- JMP year-by-year figure fixed at its producer (`colorado_river_clean/paper_pres/figures/create_uxyear_eventstudy_fig.py`: two-line y-label, legend above axes); the JMP main.pdf has not been recompiled with it.
- No pages yet for Double Vision or the Alaska project (both on the CV).

Next: review `npm run dev`, then `git commit`, `git push`, `npm run deploy`.
