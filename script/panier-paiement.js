document.addEventListener("DOMContentLoaded", () => {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const modeRetrait = localStorage.getItem("modeRetrait");

  if (panier.length === 0) {
    afficherPopupEtRediriger(
      "Votre panier est vide. Vous allez être redirigé vers la boutique."
    );
    setTimeout(() => {
      window.location.href = "/florilege/index.html";
    }, 4000);
    return;
  }

  if (!modeRetrait) {
    afficherPopupEtRediriger(
      "Aucun mode de retrait sélectionné. Vous allez être redirigé vers la boutique."
    );
    setTimeout(() => {
      window.location.href = "/florilege/index.html";
    }, 4000);
    return;
  }

  const tableauPanier = document.getElementById("tableau-panier");
  let sousTotal = 0;

  // Calcul des frais selon le mode de retrait
  const fraisLivraison = modeRetrait === "livrer" ? 15.70 : 0;

  // Texte du mode de retrait affiché
  const retraitTexte = modeRetrait === "livrer"
    ? "Livraison à domicile (+15,70 €)"
    : "Retrait en boutique (gratuit)";

  // Construction du tableau
  let html = `
    <table class="table-tarifs">
      <thead>
        <tr>
          <th>Produit</th>
          <th>Nom</th>
          <th>Taille</th>
          <th>Quantité</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
  `;

  panier.forEach((item) => {
    const tailleOriginale = item.taille.replace(/_/g, " ");
    const tailleAffichee = capitaliserTaille(tailleOriginale);
    const prixUnitaire = item.tarifs?.[tailleOriginale] ?? 0;
    const prixTotal = prixUnitaire * item.quantite;
    sousTotal += prixTotal;

    html += `
      <tr>
        <td data-label="Produit"><img src="${item.image}" alt="${item.nom}" style="max-width: 80px;"></td>
        <td data-label="Nom">${item.nom}</td>
        <td data-label="Taille">${tailleAffichee}</td>
        <td data-label="Quantité">${item.quantite}</td>
        <td data-label="Prix">${prixTotal.toFixed(2).replace('.', ',')} €</td>
      </tr>
    `;
  });

  // Ajout des lignes de total et mode de retrait
  const totalTTC = sousTotal + fraisLivraison;

  html += `
      <tr class="ligne-total">
        <td colspan="4" style="text-align:right; font-weight:bold;">Total :</td>
        <td style="font-weight:bold;">${sousTotal.toFixed(2).replace('.', ',')} €</td>
      </tr>
      <tr class="ligne-mode-retrait">
        <td colspan="3" style="text-align:right; font-weight:bold;">Mode de retrait :</td>
        <td>${retraitTexte}</td>
        <td style="font-weight:bold;">${fraisLivraison.toFixed(2).replace('.', ',')} €</td>
      </tr>
      <tr class="ligne-total-ttc">
        <td colspan="4" style="text-align:right; font-weight:bold; border-top:2px solid #000;">Total TTC :</td>
        <td style="font-weight:bold; border-top:2px solid #000;">${totalTTC.toFixed(2).replace('.', ',')} €</td>
      </tr>
    </tbody>
  </table>
  `;

  tableauPanier.innerHTML = html;

  // Supprime affichage texte simple, le tableau inclut tout
  const modeRetraitElt = document.getElementById("mode-retrait");
  if (modeRetraitElt) {
    modeRetraitElt.textContent = "";
  }

  // Gestion du formulaire de paiement
  const form = document.getElementById("formulaire-paiement");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const valeurs = Array.from(inputs).map((input) => input.value.trim());
    const tousRemplis = valeurs.every((val) => val !== "");

    if (!tousRemplis) {
      afficherPopup("Merci de remplir tous les champs du formulaire.");
      return;
    }

    afficherPopup("✅ Paiement validé ! Merci pour votre commande 🌸");

    localStorage.removeItem("panier");
    localStorage.removeItem("modeRetrait");

    setTimeout(() => {
      window.location.href = "/florilege/index.html";
    }, 4000);
  });
});

function capitaliserTaille(taille) {
  return taille
    .split(" ")
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(" ");
}

function afficherPopup(message) {
  let popup = document.createElement("div");
  popup.className = "custom-alert";
  popup.innerText = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.classList.add("visible"), 100);
  setTimeout(() => {
    popup.classList.remove("visible");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

function afficherPopupEtRediriger(message) {
  afficherPopup(message);
}
