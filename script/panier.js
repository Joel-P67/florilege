function capitaliserTaille(taille) {
  return taille
    .split(" ")
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(" ");
}

function afficherPanier() {
  const section = document.getElementById("panier-contenu");
  const panier = JSON.parse(localStorage.getItem("panier")) || [];

  if (panier.length === 0) {
    section.innerHTML = "<p>Votre panier est vide.</p>";
    return;
  }

  let sousTotal = 0;
  let html = `
    <table class="table-tarifs">
      <thead>
        <tr>
          <th>Produit</th>
          <th>Nom</th>
          <th>Taille</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
  `;

  panier.forEach((item, index) => {
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
        <td data-label="Prix">${prixTotal.toFixed(2).replace(".", ",")} €</td>
        <td data-label="Supprimer">
          <button class="btn bouton-panier supprimer-article" onclick="supprimerDuPanier(${index})" title="Supprimer cet article">
            <img src="/florilege/menu-img/poubelle.png" alt="Supprimer" width="24" height="24">
          </button>
        </td>
      </tr>
    `;
  });

  // Ligne Total HT corrigée
  html += `
    <tr>
      
      <td colspan="4"><strong>Total HT :</strong></td>
      <td><strong id="ligne-total-hors-frais">${sousTotal.toFixed(2).replace(".", ",")} €</strong></td>
      <td></td>
    </tr>
  `;

  // Ligne méthode de réception avec colspan sur les 4 premières colonnes
  html += `
    <tr>
      <td colspan="2"><strong>Méthode de réception :</strong></td>
      <td colspan="2">
        <select id="livraison-mode" style="margin-left: 10px;">
          <option value="">-- Choisir --</option>
          <option value="retirer">Retrait en boutique (gratuit)</option>
          <option value="livrer">Livraison à domicile (+15,70 €)</option>
        </select>
      </td>
      <td id="frais-livraison">0,00 €</td>
      <td></td>
    </tr>
  `;

  // Ligne Total TTC corrigée
  html += `
      <tr>
        <td colspan="4"><strong>Total TTC :</strong> 
        <td id="ligne-total-ttc"><strong>${sousTotal.toFixed(2).replace(".", ",")} €</strong></td>
        <td></td>
      </tr>
  `;

  html += `
      </tbody>
    </table>

    <div id="message-erreur-container" class="message-erreur" style="display: none;">
      <p class="message-texte">Veuillez choisir un mode de retrait.</p>
    </div>

    <div class="boutons-actions">
      <button class="btn btn-theme continuer-achats" onclick="window.location.href='index.html'">
        Continuer mes achats
      </button>
      <button class="btn btn-theme valider-commande" id="btn-valider" onclick="validerCommande()">
        Valider ma commande
      </button>
    </div>
  `;

  section.innerHTML = html;

  // Gestion du changement du mode de livraison
  const selectLivraison = document.getElementById("livraison-mode");
  const boutonValider = document.getElementById("btn-valider");
  const ligneTotalTTC = document.getElementById("ligne-total-ttc");
  const fraisLivraisonElt = document.getElementById("frais-livraison");

  selectLivraison.addEventListener("change", (e) => {
    const choix = e.target.value;
    const fraisLivraison = (choix === "livrer") ? 15.70 : 0;
    const totalTTC = sousTotal + fraisLivraison;

    ligneTotalTTC.innerHTML = `<strong>${totalTTC.toFixed(2).replace(".", ",")} €</strong>`;
    fraisLivraisonElt.textContent = fraisLivraison.toFixed(2).replace(".", ",") + " €";

    boutonValider.disabled = choix === "";

    const messageErreur = document.getElementById("message-erreur-container");
    if (messageErreur) {
      messageErreur.style.display = "none";
    }
  });
}

function validerCommande() {
  const selectLivraison = document.getElementById("livraison-mode");
  const choix = selectLivraison ? selectLivraison.value : "";

  if (choix === "") {
    afficherPopup("Veuillez choisir un mode de retrait.");
    return;
  }

  // ✅ Stocker le mode de retrait choisi
  localStorage.setItem("modeRetrait", choix);

  // ✅ Rediriger vers la page de paiement
  window.location.href = "/florilege/partials/panier-paiement.html";
}

function supprimerDuPanier(index) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.splice(index, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
  majCompteurPanier();
}

function majCompteurPanier() {
  const compteur = document.getElementById("compteur-panier");
  if (!compteur) return;

  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const totalArticles = panier.reduce((acc, item) => acc + item.quantite, 0);
  compteur.textContent = totalArticles;
}

document.addEventListener("DOMContentLoaded", () => {
  afficherPanier();
  majCompteurPanier();
});






