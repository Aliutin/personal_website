// Detect real layout overflow on the live dev server at the user's actual viewport.
// Scans every element for scrollWidth > clientWidth (horizontal overflow) or
// scrollHeight > clientHeight (vertical overflow when content is clipped).
//
// Usage:
//   node scripts/find-overflows.mjs [url] [width] [height]

import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const url = process.argv[2] || "http://localhost:5175/";
const W = process.argv[3] ? parseInt(process.argv[3], 10) : 1366;
const H = process.argv[4] ? parseInt(process.argv[4], 10) : 768;

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
if (!existsSync(chromePath)) {
  console.error(`Chrome not found at ${chromePath}`);
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: "new",
  defaultViewport: { width: W, height: H },
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.emulateMediaType("screen");

  console.log(`[${W}x${H}] Navigating to ${url}…`);
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

  // Wait for recharts
  try {
    await page.waitForFunction(
      () =>
        document.querySelectorAll(
          ".recharts-wrapper svg path.recharts-curve, .recharts-wrapper svg path.recharts-line-curve, .recharts-wrapper svg path.recharts-area-curve"
        ).length > 0,
      { timeout: 10000 }
    );
  } catch {}
  await new Promise((r) => setTimeout(r, 800));

  const issues = await page.evaluate(() => {
    const problems = [];
    const bodyW = document.documentElement.clientWidth;

    function describe(el) {
      const tag = el.tagName.toLowerCase();
      const cls = (el.className || "").toString().slice(0, 80);
      const id = el.id ? `#${el.id}` : "";
      const text = (el.innerText || "").trim().slice(0, 60).replace(/\s+/g, " ");
      return `<${tag}${id}${cls ? " class=\"" + cls + "\"" : ""}> "${text}"`;
    }

    // 1. Horizontal overflow — element is wider than its parent
    document.querySelectorAll("*").forEach((el) => {
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);

      // Element that extends past the right edge of the body
      if (rect.right > bodyW + 1) {
        problems.push({
          kind: "body-overflow-right",
          right: Math.round(rect.right),
          bodyW,
          description: describe(el),
        });
      }

      // Text content wider than container
      if (
        el.children.length === 0 &&
        el.scrollWidth > el.clientWidth + 1 &&
        el.clientWidth > 0 &&
        style.overflow !== "hidden" &&
        style.overflowX !== "hidden"
      ) {
        problems.push({
          kind: "text-wider-than-box",
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          description: describe(el),
        });
      }
    });

    // Dedupe
    const seen = new Set();
    return problems.filter((p) => {
      const k = `${p.kind}|${p.description}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  });

  console.log(`\nFound ${issues.length} potential overflow issue(s):\n`);
  for (const p of issues) {
    console.log(`  [${p.kind}] ${p.description}`);
    if (p.right !== undefined) {
      console.log(`      right=${p.right} bodyW=${p.bodyW}`);
    } else {
      console.log(`      scrollWidth=${p.scrollWidth} clientWidth=${p.clientWidth}`);
    }
  }
} finally {
  await browser.close();
}
