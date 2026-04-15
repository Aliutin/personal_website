import puppeteer from "puppeteer-core";
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsDir = resolve(__dirname, "..", "src", "assets");

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PAGE_URL =
  "https://www.ifpri.org/blog/policy-change-and-farmer-feedback-does-anonymity-matter-evidence-from-uzbekistan/";
const IMAGE_URL =
  "https://www.ifpri.org/wp-content/uploads/2025/01/shutterstock_1654179499-1-scaled.jpg";
const OUTPUT = resolve(assetsDir, "ifpri-anonymity-uzbekistan.webp");

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});

const page = await browser.newPage();
await page.setUserAgent(
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
);

console.log("Navigating to blog page to establish Incapsula session…");
await page.goto(PAGE_URL, { waitUntil: "networkidle2", timeout: 60000 });

console.log("Downloading image via browser fetch…");
const buffer = await page.evaluate(async (url) => {
  const r = await fetch(url, { credentials: "include" });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const ab = await r.arrayBuffer();
  return Array.from(new Uint8Array(ab));
}, IMAGE_URL);

await browser.close();

const input = Buffer.from(buffer);
console.log(`Downloaded ${(input.length / 1024).toFixed(0)} KB JPEG`);

const webp = await sharp(input)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 82, effort: 5 })
  .toBuffer();

await writeFile(OUTPUT, webp);
const size = (webp.length / 1024).toFixed(0);
console.log(`Saved ${OUTPUT}  (${size} KB webp)`);
