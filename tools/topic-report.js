import fs from "fs";
import path from "path";

const root = "data/topics";
const report = [];

for (const folder of fs.readdirSync(root)) {
  const full = path.join(root, folder);

  if (!fs.statSync(full).isDirectory()) continue;

  const count = fs
    .readdirSync(full)
    .filter(file => file.endsWith(".js"))
    .length;

  report.push({
    domainFolder: folder,
    topicCount: count
  });
}

fs.writeFileSync(
  "reports/topic-count.json",
  JSON.stringify(report, null, 2)
);

console.table(report);
