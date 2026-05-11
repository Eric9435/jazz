import { listeningGuides } from "../data/listening/listening-guides.js";

const grid = document.getElementById("listeningGrid");

grid.innerHTML = listeningGuides.map(guide => `
  <article class="card">
    <span class="tag">${guide.focus}</span>
    <h2>${guide.title}</h2>
    <p>Listen for:</p>
    <ul>
      ${guide.listenFor.map(item => `<li>${item}</li>`).join("")}
    </ul>
  </article>
`).join("");
