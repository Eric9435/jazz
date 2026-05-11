
import {
  playChord
}
from "../audio/piano-engine.js";

import {
  jazzChords
}
from "../audio/jazz-chords.js";

export function renderAudioButton(container){

  container.innerHTML = `

    <div class="audio-grid">

      <button
        class="audio-button"
        data-chord="major7">

        ▶ Maj7

      </button>

      <button
        class="audio-button"
        data-chord="minor7">

        ▶ m7

      </button>

      <button
        class="audio-button"
        data-chord="dominant7">

        ▶ 7

      </button>

      <button
        class="audio-button"
        data-chord="altered">

        ▶ alt

      </button>

      <button
        class="audio-button"
        data-chord="lydian">

        ▶ lydian

      </button>

      <button
        class="audio-button"
        data-chord="quartal">

        ▶ quartal

      </button>

    </div>

  `;

  container

    .querySelectorAll(".audio-button")

    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const type =
            button.dataset.chord;

          const notes =
            jazzChords[type];

          await playChord(notes);

        }
      );

    });

}

