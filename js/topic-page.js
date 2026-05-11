import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { topicIndex }
from "../data/topic-index.js";

import { domains }
from "../data/domains.js";

import { renderSidebar }
from "./ui/render-sidebar.js";

import { renderRelatedTopics }
from "./ui/render-related-topics.js";

import { renderAudioButton }
from "./ui/render-audio-button.js";

import { renderPianoUI }
from "./ui/render-piano.js";

import { renderGraph }
from "./ui/render-graph.js";

renderSidebar();

const params =
  new URLSearchParams(window.location.search);

const domainId =
  params.get("domain");

const topicId =
  params.get("topic");

const topicMeta =
  topicIndex.find(

    t =>

      t.domain === domainId
      &&
      t.id === topicId

  );

function setList(id, items=[]){

  const el =
    document.getElementById(id);

  el.innerHTML =
    items
      .map(i => `<li>${i}</li>`)
      .join("");
}

if(topicMeta){

  const mod =
    await import(`../${topicMeta.path}`);

  const exportName =
    Object.keys(mod)[0];

  const topic =
    mod[exportName];

  const domain =
    domains.find(
      d => d.id === topic.domain
    );

  document.title =
    `${topic.title} | Jazz Language Atlas`;

  document
    .getElementById("topicDomain")
    .textContent =
      `${domain.title}`;

  document
    .getElementById("topicTitle")
    .textContent =
      topic.title;

  document
    .getElementById("shortDefinition")
    .textContent =
      topic.shortDefinition;

  document.getElementById("longExplanation").innerHTML = marked.parse(topic.longExplanation);

  document
    .getElementById("formula")
    .textContent =
      topic.formula;

  document
    .getElementById("sound")
    .textContent =
      topic.sound;

  document
    .getElementById("functionText")
    .textContent =
      topic.function;

  document
    .getElementById("voiceLeading")
    .textContent =
      topic.voiceLeading;

  setList(
    "examples",
    topic.examples
  );

  setList(
    "scaleOptions",
    topic.scaleOptions
  );

  setList(
    "targetTones",
    topic.targetTones
  );

  setList(
    "practiceIdeas",
    topic.practiceIdeas
  );

  renderRelatedTopics({

    currentTopic: topic,
    container:
      document.getElementById(
        "relatedTopics"
      )

  });

  renderAudioButton(

    document.getElementById(
      "audioButtonContainer"
    )

  );

  renderPianoUI(

    document.getElementById(
      "pianoContainer"
    )

  );

  renderGraph(

    document.getElementById(
      "graphContainer"
    )

  );

}
