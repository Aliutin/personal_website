// Resize + convert all PNG assets under src/assets/ to WebP.
// Max width 1600px (preserves aspect ratio, never upscales), quality 82.
// Deletes the original PNG files after a successful write.
//
// Usage: node scripts/optimize-images.mjs

import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsDir = resolve(__dirname, "..", "src", "assets");

const MAX_WIDTH = 1600;
const QUALITY = 82;

const files = await readdir(assetsDir);
const pngs = files.filter((f) => f.toLowerCase().endsWith(".png"));

if (pngs.length === 0) {
  console.log("No PNG files found in src/assets/. Nothing to do.");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of pngs) {
  const inputPath = join(assetsDir, file);
  const outputPath = join(assetsDir, parse(file).name + ".webp");

  const before = (await stat(inputPath)).size;
  totalBefore += before;

  const meta = await sharp(inputPath).metadata();
  const targetWidth = Math.min(MAX_WIDTH, meta.width ?? MAX_WIDTH);

  await sharp(inputPath)
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  totalAfter += after;

  const pct = ((1 - after / before) * 100).toFixed(0);
  const mb = (n) => (n / 1024 / 1024).toFixed(2);
  console.log(
    `${file}  ${meta.width}x${meta.height} → ${targetWidth}px  |  ${mb(before)} MB → ${mb(after)} MB  (-${pct}%)`
  );

  await unlink(inputPath);
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(
  `\nTotal: ${mb(totalBefore)} MB → ${mb(totalAfter)} MB  (-${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`
);
console.log(`Converted ${pngs.length} file(s) and removed the originals.`);
