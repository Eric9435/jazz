async function loadJson(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

const topicReport = await loadJson("reports/topic-count.json");
const placeholders = await loadJson("reports/placeholders.json");
const duplicates = await loadJson("reports/duplicates.json");

if (topicReport) {
  const total = topicReport.reduce((sum, item) => sum + item.topicCount, 0);
  document.getElementById("totalTopics").textContent = total;

  document.getElementById("topicReport").innerHTML =
    topicReport.map(item => `
      <article class="card">
        <span class="tag">${item.domainFolder}</span>
        <h2>${item.topicCount}</h2>
        <p>topic files</p>
      </article>
    `).join("");
}

if (placeholders) {
  document.getElementById("placeholderCount").textContent =
    placeholders.length;

  document.getElementById("placeholderList").innerHTML =
    placeholders.map(item => `
      <li>
        <strong>${item.file}</strong>
        <br />
        ${item.hits.join(", ")}
      </li>
    `).join("");
}

if (duplicates) {
  document.getElementById("duplicateCount").textContent =
    duplicates.length;
}
