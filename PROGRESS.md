# Progress

## 2026-10-23: latest JMP draft published at /jmp.pdf

Pushed commit c822ee0: `public/jmp.pdf` = the October 20 JMP build (`Colorado River/colorado_river_clean/paper_pres/draft_tex/main.pdf`, 132 pages, with the new section 7.3). It is live at https://antonliutin.com/jmp.pdf (checked: HTTP 200, application/pdf, 2,981,983 bytes). Anton chose this so that every JMP he sends can say "Latest version: antonliutin.com/jmp.pdf". **When the JMP is rebuilt, copy the new `main.pdf` over `public/jmp.pdf` and push.** Same day, commit ce09732 (Anton: "yes, we can add link to pdf now"): the JMP page's orange button is now "Download PDF" (opens `/jmp.pdf` in a new tab), and on `/research` the JMP entry has `url: "/jmp.pdf"` in `src/content.ts` instead of `draftOnRequest`, so its list button reads "Download PDF" (`Research.tsx` shows "Download PDF" for any `url` ending in .pdf, "Extended preview" otherwise). Other papers keep "Request Draft". `npm run build` passed (vite 10 s this time); checked live in Chrome. **Open:** the JMP page abstract, stats band and key findings are still from the Sept 23 draft (e.g., the Wellton-Mohawk canal-flow sentence, which does not survive Holm), so they no longer match the linked paper; refresh from the current abstract when Anton asks. `public/cv.pdf` is still the Oct 1 CV (the approved build is Oct 13).

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

- 2026-10-30: Posted current drafts with 'Latest version' links: /jmp.pdf (October 26 build), /behavioral-games.pdf (October 29 build, retitled 'Behavioral Games and Water-Saving Technology Adoption in Uzbekistan', abstract from abstract_v2.tex), /double-vision.pdf (September 18 draft); both coauthored papers no longer 'draft on request'. Updated /cv.pdf (October 30 CV). Follow-up: the behavioral-games key findings and figure captions and the JMP page text still describe older results.
