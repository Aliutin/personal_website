// Render the running dev server at desktop resolution (1920x1080 — 16:9 Full HD)
// forcing screen media CSS so Tailwind's lg: breakpoint (min-width: 1024px) activates.
//
// Usage:
//   node scripts/render-desktop.mjs [url]
//
// Defaults to http://localhost:5175/ — pass a different URL as the first argument.
//
// Outputs to docs/superpowers/render/:
//   - portfolio-desktop.png    — full-page screenshot at 1920px wide
//   - portfolio-desktop.pdf    — same content paginated into 1920x1080 pages

import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");

const url = process.argv[2] || "http://localhost:5175/";
const widthArg = process.argv[3] ? parseInt(process.argv[3], 10) : 1920;
const heightArg = process.argv[4] ? parseInt(process.argv[4], 10) : 1080;
const outDir = resolve(projectRoot, "docs/superpowers/render");

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
if (!existsSync(chromePath)) {
  console.error(`ERROR: Chrome not found at ${chromePath}`);
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

const VIEWPORT_WIDTH = widthArg;
const VIEWPORT_HEIGHT = heightArg;
const sizeTag = `${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}`;

console.log(`Launching Chrome (${chromePath})…`);
const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: "new",
  defaultViewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
  args: ["--disable-gpu", `--window-size=${VIEWPORT_WIDTH},${VIEWPORT_HEIGHT}`],
});

try {
  const page = await browser.newPage();
  await page.setViewport({
    width: VIEWPORT_WIDTH,
    height: VIEWPORT_HEIGHT,
    deviceScaleFactor: 1,
  });

  // CRITICAL: use screen media (not print) so the site renders as it does
  // in the browser — otherwise Tailwind lg: breakpoints never trigger and
  // we get a mobile-ish layout.
  await page.emulateMediaType("screen");

  console.log(`Navigating to ${url}…`);
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

  // Recharts uses ResponsiveContainer which measures on requestAnimationFrame.
  // Wait for the chart data paths (recharts-line or recharts-area) to appear,
  // then give a final settle frame.
  try {
    await page.waitForFunction(
      () => {
        const charts = document.querySelectorAll(".recharts-wrapper svg");
        if (charts.length === 0) return false;
        // Every chart must have at least one rendered data element
        return Array.from(charts).every((svg) => {
          const paths = svg.querySelectorAll(
            "path.recharts-curve, path.recharts-line-curve, path.recharts-area-curve"
          );
          return paths.length > 0;
        });
      },
      { timeout: 15000 }
    );
    console.log("Recharts paths detected — charts are drawn.");
  } catch {
    console.warn("WARN: recharts paths did not appear within 15s — proceeding anyway.");
  }

  // Small settle delay after fonts + chart rendering
  await new Promise((r) => setTimeout(r, 800));

  const pngPath = resolve(outDir, `portfolio-${sizeTag}.png`);
  console.log(`Capturing full-page screenshot → ${pngPath}`);
  await page.screenshot({
    path: pngPath,
    fullPage: true,
    type: "png",
  });

  const metrics = await page.evaluate(() => ({
    docHeight: document.documentElement.scrollHeight,
    docWidth: document.documentElement.scrollWidth,
  }));
  console.log(
    `Done. Page size: ${metrics.docWidth}x${metrics.docHeight} @ viewport ${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}`
  );
} finally {
  await browser.close();
}
