document.addEventListener("DOMContentLoaded", () => {
  const boutonAbonnement = document.getElementById("btn-abonnement");

  boutonAbonnement.addEventListener("click", () => {
    const utilisateurConnecte = localStorage.getItem("utilisateurConnecte") === "true";

    if (!utilisateurConnecte) {
      // Supprimer un ancien message s’il existe
      const ancien = document.getElementById("custom-alert");
      if (ancien) ancien.remove();

      // Créer l'alerte
      const alertDiv = document.createElement("div");
      alertDiv.id = "custom-alert";
      alertDiv.className = "custom-alert";

      const message = document.createElement("span");
      message.textContent = "Veuillez vous connecter ou vous inscrire pour poursuivre votre abonnement.";

      const boutonConnexion = document.createElement("button");
      boutonConnexion.id = "btn-connexion";
      boutonConnexion.className = "btn";
      boutonConnexion.textContent = "Se connecter";

      const boutonAnnuler = document.createElement("button");
      boutonAnnuler.id = "btn-annuler";
      boutonAnnuler.className = "btn";
      boutonAnnuler.textContent = "Annuler";

      // Ajout des comportements
      boutonConnexion.addEventListener("click", () => {
        window.location.href = "/florilege/menu/connexion-inscription.html";
      });

      boutonAnnuler.addEventListener("click", () => {
        alertDiv.classList.remove("visible");
        setTimeout(() => alertDiv.remove(), 300);
      });

      // Construction du message
      alertDiv.appendChild(message);

      // Création du conteneur pour les boutons
      const conteneurBoutons = document.createElement("div");
      conteneurBoutons.className = "alert-buttons";
      conteneurBoutons.appendChild(boutonConnexion);
      conteneurBoutons.appendChild(boutonAnnuler);

      // Ajout du conteneur de boutons à l'alerte
      alertDiv.appendChild(conteneurBoutons);
      document.body.appendChild(alertDiv);

      // Forcer l'affichage (transition CSS)
      setTimeout(() => alertDiv.classList.add("visible"), 10);
    } else {
      window.location.href = "/florilege/partials/abonnement-paiement.html";
    }
  });
});
