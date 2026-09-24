# How to update antonliutin.com

This folder is the only copy of the site source. It is a git repo linked to
`github.com/Aliutin/personal_website`. `npm run deploy` builds `dist/` and publishes it to the
Cloudflare Worker `antonliutin`.

## Common changes

| Change | What to edit |
|---|---|
| Homepage photo | Replace `src/assets/portrait-2026.webp` (imported as `portrait` in `src/content.ts`). The panel crops to fill; a vertical 4:5 image works best. |
| Link-preview photo (social cards) | Replace `public/anton-liutin.webp`. |
| CV | Copy `Dropbox/Projects/Personal/Portfolio/CV_Anton_Liutin_2026.pdf` over `public/cv.pdf`. The site links to `/cv.pdf`. |
| Research articles | Edit the `slug: "..."` entries in `src/content.ts`; images go in `src/assets/`. `article-source-paths.md` (not in git) lists the draft each page comes from. |
| Text, bio, links | `src/content.ts` |

To convert a JPG/PNG photo to WebP:

```sh
node -e "require('sharp')(process.argv[1]).webp({quality:88}).toFile('src/assets/portrait-2026.webp')" path/to/photo.png
```

## Check and publish

```sh
npm run dev       # local preview at the URL Vite prints
npm run build     # check that it compiles
git add -A && git commit -m "..." && git push
npm run deploy    # publish to Cloudflare
```

Source photos: `Dropbox/Projects/Personal/Portfolio/Photos/` (originals) and
`Photos/output/imagegen/` (background-extended homepage version).
