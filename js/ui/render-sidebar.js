import { domains }
from "../../data/domains.js";

export function renderSidebar(){

  const sidebar =
    document.getElementById("sidebarNav");

  if(!sidebar) return;

  sidebar.innerHTML =

    domains.map(domain => `

      <a
        class="sidebar-link"
        href="domain.html?id=${domain.id}">

        ${domain.title}

      </a>

    `).join("");

}
