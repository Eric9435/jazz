import { topicIndex }
from "../../data/topic-index.js";

export function renderRelatedTopics({

  currentTopic,
  container

}){

  const related =

    topicIndex

      .filter(topic =>

        topic.domain === currentTopic.domain
        &&
        topic.id !== currentTopic.id

      )

      .slice(0,6);

  container.innerHTML =

    related.map(topic => `

      <article class="card">

        <span class="tag">
          ${topic.domain}
        </span>

        <h3>
          ${topic.title}
        </h3>

        <a
          class="button small"
          href="${topic.url}">

          Open

        </a>

      </article>

    `).join("");

}
