import { domains } from "../data/domains.js";

const grid = document.getElementById("domainGrid");

if (grid) {
  grid.innerHTML = domains
    .map(
      (domain, index) => `
        <article class="card">
          <span class="number">${String(index + 1).padStart(2, "0")}</span>
          <h2>${domain.title}</h2>
          <a href="domain.html?id=${domain.id}">Open</a>
        </article>
      `
    )
    .join("");
}
