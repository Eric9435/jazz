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

function makeExportName(slug) {
  return slug
    .replace(/\.js$/, "")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "");
}

function template(filePath, domainFolder, fileName) {
  const id = fileName.replace(/\.js$/, "");
  const title = titleFromSlug(fileName);
  const domain = domainIdFromFolder(domainFolder);
  const exportName = makeExportName(fileName);

  return `export const ${exportName} = {
  id: "${id}",
  domain: "${domain}",
  subcategory: "${title}",
  title: "${title}",

  shortDefinition:
    "${title} is an essential concept inside the larger jazz language system.",

  longExplanation:
    \`${title} is part of the complete jazz vocabulary. In a teaching context, this topic should not be treated as an isolated definition, but as a musical behavior that connects sound, theory, ear, technique, and performance. The purpose of studying ${title} is to understand how musicians hear, choose, shape, and apply this idea in real musical situations. A complete explanation should connect the concept to harmony, melody, rhythm, voice leading, improvisation, arrangement, and listening whenever relevant.

This lesson should eventually contain a detailed passage explaining the musical purpose of the concept, how it works in common jazz situations, how it sounds emotionally, how it appears in standards or improvisation, and how a student can practice it until it becomes fluent musical language rather than abstract theory.\`,

  formula:
    "Core idea / formula will be added here.",

  sound:
    "Describe the emotional color, tension level, brightness, darkness, stability, or movement of this topic.",

  function:
    "Explain what this concept does musically.",

  examples: [
    "Example 1 will be added here.",
    "Example 2 will be added here."
  ],

  scaleOptions: [
    "Scale option will be added here."
  ],

  targetTones: [
    "Target tones will be added here."
  ],

  guideTones: [
    "Guide tones will be added here."
  ],

  voiceLeading:
    "Voice-leading behavior will be explained here.",

  commonMovements: [
    "Common movement will be added here."
  ],

  reharmPossibilities: [
    "Reharmonization possibility will be added here."
  ],

  improvisationVocabulary: [
    "Improvisation vocabulary will be added here."
  ],

  practiceIdeas: [
    "Practice in 12 keys.",
    "Sing the sound before playing.",
    "Apply the concept to one jazz standard.",
    "Record yourself and analyze the result."
  ],

  relatedTopics: []
};
`;
}

for (const domainFolder of fs.readdirSync(root)) {
  const domainPath = path.join(root, domainFolder);
  if (!fs.statSync(domainPath).isDirectory()) continue;

  for (const fileName of fs.readdirSync(domainPath)) {
    if (!fileName.endsWith(".js")) continue;

    const filePath = path.join(domainPath, fileName);
    const content = fs.readFileSync(filePath, "utf8").trim();

    if (content.length === 0) {
      fs.writeFileSync(filePath, template(filePath, domainFolder, fileName));
      console.log("Filled:", filePath);
    }
  }
}

console.log("Empty topic files filled with professional templates.");
