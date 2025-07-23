// common.js

document.addEventListener("DOMContentLoaded", () => {
  const headerTarget = document.getElementById("injection-header");

  if (headerTarget) {
    fetch("header.html")
      .then(res => res.text())
      .then(html => {
        headerTarget.innerHTML = html;

        // Maintenant que le header est injecté, on peut accéder aux éléments qu'il contient :
        const burger = document.getElementById("burger");
        const sideMenu = document.getElementById("side-menu");

        if (burger && sideMenu) {
          burger.addEventListener("click", () => {
            sideMenu.classList.toggle("hidden");
          });
        }
      })
      .catch(err => console.error("Erreur lors de l'injection du header :", err));
  }
});
