import fs from "fs";
import path from "path";

const root = "data/topics";
const ids = new Map();
const duplicates = [];

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
    } else if (item.endsWith(".js")) {
      const id = item.replace(".js", "");

      if (ids.has(id)) {
        duplicates.push({
          id,
          first: ids.get(id),
          duplicate: full
        });
      } else {
        ids.set(id, full);
      }
    }
  }
}

walk(root);

fs.writeFileSync(
  "reports/duplicates.json",
  JSON.stringify(duplicates, null, 2)
);

console.log(`Duplicate topic IDs found: ${duplicates.length}`);
duplicates.forEach(d => {
  console.log(`${d.id}:`);
  console.log(`  first: ${d.first}`);
  console.log(`  dup:   ${d.duplicate}`);
});
