import fs from "fs";
import path from "path";

const root = "data/topics";

const placeholderSignals = [
  "will be added here",
  "Professional jazz language topic",
  "essential concept inside the larger jazz language system",
  "Core idea / formula will be added here",
  "Scale option will be added here",
  "Target tones will be added here",
  "Guide tones will be added here"
];

const results = [];

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
    } else if (item.endsWith(".js")) {
      const text = fs.readFileSync(full, "utf8");

      const hits = placeholderSignals.filter(signal =>
        text.includes(signal)
      );

      if (hits.length > 0) {
        results.push({
          file: full,
          hits
        });
      }
    }
  }
}

walk(root);

fs.writeFileSync(
  "reports/placeholders.json",
  JSON.stringify(results, null, 2)
);

console.log(`Placeholder files found: ${results.length}`);
for (const result of results) {
  console.log(`- ${result.file}`);
}
