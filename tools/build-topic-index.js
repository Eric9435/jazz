import fs from "fs";
import path from "path";

const root = "data/topics";

function titleFromSlug(slug) {
  return slug
    .replace(/\.js$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function domainIdFromFolder(folder) {
  return folder.replace(/^\d+-/, "");
}

const topics = [];

for (const domainFolder of fs.readdirSync(root)) {
  const domainPath = path.join(root, domainFolder);
  if (!fs.statSync(domainPath).isDirectory()) continue;

  const domain = domainIdFromFolder(domainFolder);

  for (const fileName of fs.readdirSync(domainPath)) {
    if (!fileName.endsWith(".js")) continue;

    const id = fileName.replace(/\.js$/, "");
    topics.push({
      id,
      title: titleFromSlug(fileName),
      domain,
      folder: domainFolder,
      file: fileName,
      path: `data/topics/${domainFolder}/${fileName}`,
      url: `topic.html?domain=${domain}&topic=${id}`
    });
  }
}

const output = `export const topicIndex = ${JSON.stringify(topics, null, 2)};\n`;

fs.writeFileSync("data/topic-index.js", output);
fs.writeFileSync("data/search-index.js", output.replace("topicIndex", "searchIndex"));

console.log(`Built topic index: ${topics.length} topics`);
