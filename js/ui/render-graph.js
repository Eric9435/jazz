import { graphConnections }
from "../graph/knowledge-graph.js";

export function renderGraph(container){

  container.innerHTML = `

    <div class="graph-box">

      <h3>
        Related Knowledge Graph
      </h3>

      <ul>

        ${graphConnections.map(c => `

          <li>

            ${c.source}
            →
            ${c.target}

          </li>

        `).join("")}

      </ul>

    </div>

  `;

}
