import { topicIndex }
from "../../data/topic-index.js";

export function getRelatedTopics(

  currentTopic,
  limit = 5

){

  return topicIndex

    .filter(topic =>

      topic.domain === currentTopic.domain
      &&
      topic.id !== currentTopic.id

    )

    .slice(0,limit);

}
