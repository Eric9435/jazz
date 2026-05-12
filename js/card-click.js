document.querySelectorAll(".card[data-href]").forEach(card => {

  card.addEventListener("click", () => {

    const href = card.dataset.href;

    if (href) {
      window.location.href = href;
    }

  });

});
