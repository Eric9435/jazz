import { topicIndex }
from "../../data/topic-index.js";

export function searchTopics(query){

  const q =
    query.toLowerCase();

  return topicIndex.filter(topic =>

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

}
