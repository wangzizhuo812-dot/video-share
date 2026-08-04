/**
 * Export australia-guide/index.html to a print-faithful PDF.
 * Usage: node export-pdf.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "/tmp/pdf-export/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "exports");
const outPdf = path.join(outDir, "australia-12day-guide.pdf");
const artifactPdf = "/opt/cursor/artifacts/australia-12day-guide.pdf";
const url = process.env.GUIDE_URL || "http://127.0.0.1:8080/";

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync("/opt/cursor/artifacts", { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

  // Wait for web fonts + images
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    const imgs = [...document.images];
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            })
      )
    );
  });

  // Force scroll-reveal content visible (main PDF bug)
  await page.evaluate(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    document.documentElement.classList.add("pdf-export");
  });

  // Brief settle for layout
  await new Promise((r) => setTimeout(r, 800));

  await page.pdf({
    path: outPdf,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "10mm", right: "8mm", bottom: "10mm", left: "8mm" },
    displayHeaderFooter: false,
  });

  fs.copyFileSync(outPdf, artifactPdf);
  const size = fs.statSync(outPdf).size;
  console.log(`PDF written: ${outPdf}`);
  console.log(`Artifact: ${artifactPdf}`);
  console.log(`Bytes: ${size}`);
} finally {
  await browser.close();
}
