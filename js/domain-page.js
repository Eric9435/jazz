import { domains } from "../data/domains.js";
import { topicIndex } from "../data/topic-index.js";

const params =
  new URLSearchParams(window.location.search);

const domainId =
  params.get("id");

const domain =
  domains.find(d => d.id === domainId);

const title =
  document.getElementById("domainTitle");

const description =
  document.getElementById("domainDescription");

const topicGrid =
  document.getElementById("topicGrid");

const topicFilter =
  document.getElementById("topicFilter");

const topicCount =
  document.getElementById("topicCount");

if(!domain){

  title.textContent =
    "Domain not found.";

}else{

  title.textContent =
    domain.title;

  description.textContent =
    domain.description;

  const topics =
    topicIndex.filter(
      t => t.domain === domain.id
    );

  function render(list){

    topicCount.textContent =
      `${list.length} topics`;

    topicGrid.innerHTML =
      list.map(topic => `

      <article class="card">

        <span class="tag">
          ${domain.title}
        </span>

        <h2>
          ${topic.title}
        </h2>

        <p>
          Professional jazz language topic.
        </p>

        <a
          class="button small"
          href="${topic.url}">
          Open Topic
        </a>

      </article>

    `).join("");

  }

  render(topics);

  topicFilter.addEventListener("input", () => {

    const q =
      topicFilter.value
        .toLowerCase();

    render(

      topics.filter(topic =>

        topic.title
          .toLowerCase()
          .includes(q)

        ||

        topic.id
          .includes(q)

      )

    );

  });

}
