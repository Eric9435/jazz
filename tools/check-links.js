import fs from "fs";

const htmlFiles = fs.readdirSync(".").filter(file => file.endsWith(".html"));
const broken = [];

for (const file of htmlFiles) {
  const text = fs.readFileSync(file, "utf8");
  const hrefs = [...text.matchAll(/href="([^"]+)"/g)].map(m => m[1]);

  for (const href of hrefs) {
    if (
      href.startsWith("http") ||
      href.startsWith("#") ||
      href.startsWith("mailto:")
    ) continue;

    const clean = href.split("?")[0];

    if (clean && !fs.existsSync(clean)) {
      broken.push({ from: file, href });
    }
  }
}

fs.writeFileSync("reports/broken-links.json", JSON.stringify(broken, null, 2));

console.log(`Broken links: ${broken.length}`);

broken.forEach(item => {
  console.log(`${item.from} -> ${item.href}`);
});
