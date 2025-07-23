// ===============================
// Injection du header + menu latéral
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const headerTarget = document.getElementById("injection-header");

  if (headerTarget) {
    fetch("/florilege/partials/header.html")
      .then(res => res.text())
      .then(html => {
        headerTarget.innerHTML = html;

        // Une fois le header injecté, on peut interagir avec ses éléments
        const burger = document.getElementById("burger");
        const sideMenu = document.getElementById("side-menu");

        if (burger && sideMenu) {
          burger.addEventListener("click", () => {
            sideMenu.classList.toggle("hidden");
          });
        }

        // Appel du thème saisonnier après que le header est chargé
        initialiserThemeSaisonnier();
      })
      .catch(err => console.error("Erreur lors de l'injection du header :", err));
  }
});

// ===============================
// Gestion du thème saisonnier
// ===============================

// Fonction pour déterminer la saison selon le mois actuel
function getSeason(date = new Date()) {
  const month = date.getMonth();
  switch (month) {
    case 2:
    case 3:
    case 4:
      return "printemps";
    case 5:
    case 6:
    case 7:
      return "ete";
    case 8:
    case 9:
    case 10:
      return "automne";
    default:
      return "hiver";
  }
}

// Fonction principale pour appliquer le thème
function chargerTheme(theme) {
  const anciensThemes = ["printemps", "ete", "automne", "hiver"];

  // Supprimer anciennes feuilles CSS et scripts JS
  anciensThemes.forEach(t => {
    const lien = document.getElementById(`theme-${t}`);
    if (lien) lien.remove();

    const scriptOld = document.getElementById(`script-${t}`);
    if (scriptOld) scriptOld.remove();
  });

  // Ajouter la feuille CSS du thème sélectionné
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `/florilege/style/${theme}.css`;
  link.id = `theme-${theme}`;
  document.head.appendChild(link);

  // Ajouter dynamiquement le script JS du thème
  const script = document.createElement("script");
  script.src = `/florilege/script/${theme}.js`;
  script.id = `script-${theme}`;
  document.body.appendChild(script);
}

// Fonction pour initialiser le thème au chargement du site
function initialiserThemeSaisonnier() {
  const themeStocke = localStorage.getItem("theme-saison");
  const themeInitial = themeStocke || getSeason();
  chargerTheme(themeInitial);

  // Gérer le selecteur de thème dans le header
  const selectTheme = document.getElementById("select-theme");
  if (selectTheme) {
    selectTheme.value = themeInitial;
    selectTheme.addEventListener("change", (e) => {
      const nouveauTheme = e.target.value;
      localStorage.setItem("theme-saison", nouveauTheme);
      chargerTheme(nouveauTheme);
    });
  }
}
