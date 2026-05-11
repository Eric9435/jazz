export function renderBreadcrumbs({

  container,
  items

}){

  container.innerHTML =
    items.map((item,index) => {

      const isLast =
        index === items.length - 1;

      return isLast

        ? `<span>${item.label}</span>`

        : `
          <a href="${item.href}">
            ${item.label}
          </a>
          <span>→</span>
        `;

    }).join("");

}
