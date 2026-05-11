export function renderPiano(container){

  const keys = [

    "C","D","E","F","G","A","B"

  ];

  container.innerHTML =

    `<div class="piano">

      ${keys.map(key => `

        <div class="piano-key">

          ${key}

        </div>

      `).join("")}

    </div>`;

}
