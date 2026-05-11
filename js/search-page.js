import { topicIndex } from "../data/topic-index.js";
import { domains } from "../data/domains.js";

const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const resultCount = document.getElementById("resultCount");

function domainTitle(id) {
  return domains.find(d => d.id === id)?.title || id;
}

function render(list) {

  resultCount.textContent = `${list.length} results`;

  results.innerHTML = list.map(topic => `
    <article class="card topic-card">

      <span class="tag">
        ${domainTitle(topic.domain)}
      </span>

      <h2>${topic.title}</h2>

      <p>
        ${topic.id.replace(/-/g," ")}
      </p>

      <a
        class="button small"
        href="${topic.url}">
        Open Topic
      </a>

    </article>
  `).join("");
}

render(topicIndex);

input.addEventListener("input", () => {

  const q =
    input.value.toLowerCase().trim();

  if(!q){
    render(topicIndex);
    return;
  }

  const filtered =
    topicIndex.filter(topic => {

      return (

        topic.title
          .toLowerCase()
          .includes(q)

        ||

        topic.id
          .toLowerCase()
          .includes(q)

        ||

        topic.domain
          .toLowerCase()
          .includes(q)

      );

    });

  render(filtered);

});
