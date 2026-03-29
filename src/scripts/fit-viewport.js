export function initResizeCover() {
  function resizeCover() {
    const homeCover = document.getElementById("home");
    const navbar = document.getElementById("navbar-1");

    if (!homeCover || !navbar) return;

    const newHeight =
      document.documentElement.clientHeight - navbar.clientHeight;

    homeCover.style.height = `${newHeight}px`;
    homeCover.style.minHeight = `${newHeight}px`;
  }

  resizeCover();
  window.addEventListener("resize", resizeCover);
}
