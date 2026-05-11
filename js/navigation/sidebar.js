import { domains } from "../../data/domains.js";

const sidebar =
  document.getElementById("sidebarNav");

if(sidebar){

  sidebar.innerHTML =
    domains.map(domain => `

      <a
        class="sidebar-link"
        href="domain.html?id=${domain.id}">

        ${domain.title}

      </a>

    `).join("");

}
