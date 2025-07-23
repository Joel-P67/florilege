function majCompteurPanier() {
  const compteur = document.getElementById('compteur-panier');
  if (!compteur) return;

  const panier = JSON.parse(localStorage.getItem('panier')) || [];
  let total = 0;
  panier.forEach((item) => (total += item.quantite));
  compteur.textContent = total;
}
document.addEventListener('DOMContentLoaded', majCompteurPanier);