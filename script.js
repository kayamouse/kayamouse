const drawers = document.querySelectorAll(".drawer");
const enterScreen = document.getElementById("enter-screen");
const body = document.body;

function enterSite() {
  enterScreen.classList.add("is-entered");
  body.classList.remove("is-locked");

  window.setTimeout(() => {
    enterScreen.setAttribute("aria-hidden", "true");
  }, 700);
}

enterScreen.addEventListener("click", enterSite);
enterScreen.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    enterSite();
  }
});

drawers.forEach((drawer) => {
  const button = drawer.querySelector(".drawer-toggle");
  const panel = drawer.querySelector(".drawer-panel");

  button.addEventListener("click", () => {
    const shouldOpen = !panel.classList.contains("is-open");

    drawers.forEach((otherDrawer) => {
      const otherButton = otherDrawer.querySelector(".drawer-toggle");
      const otherPanel = otherDrawer.querySelector(".drawer-panel");

      otherPanel.classList.remove("is-open");
      otherButton.setAttribute("aria-expanded", "false");
      otherPanel.setAttribute("aria-hidden", "true");
    });

    if (shouldOpen) {
      panel.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
    }
  });
});
