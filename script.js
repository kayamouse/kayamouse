const drawers = document.querySelectorAll(".drawer");

drawers.forEach((drawer) => {
  const button = drawer.querySelector(".drawer-toggle");
  const panel = drawer.querySelector(".drawer-panel");
  const symbol = drawer.querySelector(".drawer-symbol");

  button.addEventListener("click", () => {
    const shouldOpen = !panel.classList.contains("is-open");

    // Close every drawer first
    drawers.forEach((otherDrawer) => {
      const otherButton = otherDrawer.querySelector(".drawer-toggle");
      const otherPanel = otherDrawer.querySelector(".drawer-panel");
      const otherSymbol = otherDrawer.querySelector(".drawer-symbol");

      otherPanel.classList.remove("is-open");
      otherButton.setAttribute("aria-expanded", "false");
      otherPanel.setAttribute("aria-hidden", "true");
      otherSymbol.textContent = "+";
    });

    // Open the clicked drawer
    if (shouldOpen) {
      panel.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
      symbol.textContent = "−";
    }
  });
});
