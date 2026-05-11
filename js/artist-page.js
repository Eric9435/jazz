import { artistStudies } from "../data/artists/artist-studies.js";

const grid = document.getElementById("artistGrid");

grid.innerHTML = artistStudies.map(artist => `
  <article class="card">
    <span class="tag">${artist.category}</span>
    <h2>${artist.name}</h2>
    <p>${artist.focus}</p>
    <ul>
      ${artist.studyPoints.map(point => `<li>${point}</li>`).join("")}
    </ul>
  </article>
`).join("");
