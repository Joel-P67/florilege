document.addEventListener("DOMContentLoaded", () => {
  // Vérifie que la formule a été choisie
  const formule = JSON.parse(localStorage.getItem("formuleChoisie"));

  if (!formule) {
    afficherPopupEtRediriger(
      "Aucune formule d'abonnement sélectionnée. Vous allez être redirigé vers la page d’abonnement."
    );
    setTimeout(() => {
      window.location.href = "/florilege/partials/abonnement.html";
    }, 4000);
    return;
  }

  // Injecter les infos dans les bons éléments
  document.getElementById("formule-nom").textContent = formule.nom || "Non précisée";
  document.getElementById("formule-frequence").textContent = formule.frequence || "Non précisée";
  document.getElementById("formule-engagement").textContent = formule.engagement || "Sans engagement";
  document.getElementById("formule-tarif").textContent = `${formule.prix} €` || "0 €";

  // Gérer la soumission du formulaire
  const form = document.getElementById("formulaire-paiement");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupérer les valeurs saisies
    const inputs = form.querySelectorAll("input");
    const values = Array.from(inputs).map((input) => input.value.trim());

    const tousRemplis = values.every((val) => val !== "");

    if (!tousRemplis) {
      afficherPopup("Merci de remplir tous les champs du formulaire.");
      return;
    }

    // Simuler le paiement
    afficherPopup("✅ Paiement validé ! Merci pour votre abonnement 🌸");

    // 🔐 Enregistrer l’abonnement simulé
    const utilisateur = localStorage.getItem("nomUtilisateur") || "invité";
    enregistrerAbonnement(utilisateur, formule);

    // Nettoyer
    localStorage.removeItem("formuleChoisie");

    // Redirection après validation
    setTimeout(() => {
      window.location.href = "/florilege/index.html";
    }, 4000);
  });
});

// Fonction d’alerte avec redirection (utilise popup.js)
function afficherPopupEtRediriger(message) {
  afficherPopup(message);
}
