// --- Liste de fichiers JSON à charger ---
const fichiersJson = [
  'ambiance-et-bien-etre/bougies-parfumees.json',
  'ambiance-et-bien-etre/huiles-essentielles.json',
  'ambiance-et-bien-etre/parfums.json',
  'ambiance-et-bien-etre/savons.json',
  'fleurs-fraiches/bouquets-fleurs-fraiches-astrologie.json',
  'fleurs-fraiches/bouquets-fleurs-fraiches-automne.json',
  'fleurs-fraiches/bouquets-fleurs-fraiches-deuil.json',
  'fleurs-fraiches/bouquets-fleurs-fraiches-ete.json',
  'fleurs-fraiches/bouquets-fleurs-fraiches-hiver.json',
  'fleurs-fraiches/bouquets-fleurs-fraiches-printemps.json',
  'fleurs-fraiches/ornements-fleurs-fraiches-astrologie.json',
  'fleurs-fraiches/ornements-fleurs-fraiches-automne.json',
  'fleurs-fraiches/ornements-fleurs-fraiches-deuil.json',
  'fleurs-fraiches/ornements-fleurs-fraiches-ete.json',
  'fleurs-fraiches/ornements-fleurs-fraiches-hiver.json',
  'fleurs-fraiches/ornements-fleurs-fraiches-printemps.json',
  'fleurs-sechees/bouquets-fleurs-sechees-astrologie.json',
  'fleurs-sechees/bouquets-fleurs-sechees-automne.json',
  'fleurs-sechees/bouquets-fleurs-sechees-deuil.json',
  'fleurs-sechees/bouquets-fleurs-sechees-ete.json',
  'fleurs-sechees/bouquets-fleurs-sechees-hiver.json',
  'fleurs-sechees/bouquets-fleurs-sechees-printemps.json',
  'fleurs-sechees/ornements-fleurs-sechees-astrologie.json',
  'fleurs-sechees/ornements-fleurs-sechees-automne.json',
  'fleurs-sechees/ornements-fleurs-sechees-deuil.json',
  'fleurs-sechees/ornements-fleurs-sechees-ete.json',
  'fleurs-sechees/ornements-fleurs-sechees-hiver.json',
  'fleurs-sechees/ornements-fleurs-sechees-printemps.json',
  'gourmandises/boites-de-chocolats.json',
  'gourmandises/bouquets-de-friandises.json',
  'gourmandises/sucreries.json',
  'outils-vases-pots/outils.json',
  'outils-vases-pots/pots.json',
  'outils-vases-pots/vases.json',
  'plantes/a-feuilles.json',
  'plantes/a-fleurs.json',
  'terrariums/terrariums-moyens.json',
  'terrariums/terrariums-grands.json',
  'terrariums/terrariums-petits.json',
];

// Variables globales
let produits = [];
let produitsFiltres = [];
let indexAffichage = 0;
const CHUNK_AFFICHAGE = 30;

// Mapping des types selon catégorie
const typesParCategorie = {
  fleurs_fraiches: ['bouquets', 'centres_de_table', 'couronnes'],
  fleurs_sechees: ['bouquets', 'centres_de_table', 'couronnes'],
  plantes: ['a_fleurs', 'a_feuilles'],
  ambiance_bien_etre: ['savons', 'parfums', 'huiles_essentielles'],
  gourmandises: ['boites_de_chocolats', 'bouquets_de_friandises', 'sucreries'],
};

const couleursValides = [
  'argent',
  'blanc',
  'bleu',
  'jaune',
  'multicolores',
  'noir',
  'orange',
  'rose',
  'rouge',
  'violet',
];

document.addEventListener('DOMContentLoaded', () => {
  // Sélections sécurisées des éléments du DOM
  const selectCategorie = document.getElementById('categorie');
  const selectType = document.getElementById('type');
  const selectOccasion = document.getElementById('occasion');
  const selectCouleur = document.getElementById('couleur');
  const formFiltre = document.getElementById('form-filtre');
  const listeProduits = document.getElementById('liste-produits');
  const btnAfficherPlus = document.getElementById('btn-afficher-plus');
  const messageAucun = document.getElementById('message-aucun');

  if (!listeProduits || !messageAucun) return; // on quitte si page non concernée

  // ---------- Fonctions internes ----------
  function formaterTexte(text) {
    return text
      .split('_')
      .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
      .join(' ');
  }

  function majTypes() {
    const cat = selectCategorie?.value;
    if (!selectType) return;
    selectType.innerHTML = '<option value="">-- Choisir un type --</option>';

    if (cat && typesParCategorie[cat]) {
      typesParCategorie[cat].forEach((type) => {
        selectType.innerHTML += `<option value="${type}">${formaterTexte(type)}</option>`;
      });
      selectType.disabled = false;
    } else {
      selectType.disabled = true;
    }

    majCouleurs();
  }

  function majCouleurs() {
    const cat = selectCategorie?.value;
    if (!selectCouleur) return;
    selectCouleur.innerHTML = '<option value="">-- Choisir une couleur --</option>';

    if (['fleurs_fraiches', 'fleurs_sechees', 'ambiance_bien_etre'].includes(cat)) {
      couleursValides.forEach((coul) => {
        selectCouleur.innerHTML += `<option value="${coul}">${formaterTexte(coul)}</option>`;
      });
      selectCouleur.disabled = false;
    } else {
      selectCouleur.disabled = true;
    }
  }

  function filtrerProduits() {
    const cat = selectCategorie?.value;
    const type = selectType?.value;
    const occasion = selectOccasion?.value;
    const couleur = selectCouleur?.value;

    produitsFiltres = produits.filter((p) => {
      if (cat && p.categorie !== cat) return false;
      if (type && p.type !== type) return false;
      if (occasion && (!p.occasion || !p.occasion.includes(occasion))) return false;
      if (couleur && (!p.couleur || !p.couleur.includes(couleur))) return false;
      return true;
    });

    indexAffichage = 0;
    afficherProduits();
  }

  function afficherProduits() {
    if (!listeProduits) return;

    if (indexAffichage === 0) {
      listeProduits.innerHTML = '';
    }

    messageAucun.style.display = 'none';

    if (produitsFiltres.length === 0) {
      messageAucun.textContent = 'Aucun produit ne correspond à votre recherche.';
      messageAucun.style.display = 'block';
      if (btnAfficherPlus) btnAfficherPlus.style.display = 'none';
      return;
    }

    const tranche = produitsFiltres.slice(indexAffichage, indexAffichage + CHUNK_AFFICHAGE);

    tranche.forEach((p) => {
      const imgSrc = p.images && Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : p.image || '';

      let prixAffiche = 'Prix non disponible';
      if (p.tarifs && typeof p.tarifs === 'object') {
        const prixValues = Object.values(p.tarifs).filter((val) => typeof val === 'number');
        if (prixValues.length > 0) {
          const minPrix = Math.min(...prixValues);
          const maxPrix = Math.max(...prixValues);
          prixAffiche =
            minPrix === maxPrix ? `${minPrix.toFixed(2)} €` : `${minPrix.toFixed(2)} € - ${maxPrix.toFixed(2)} €`;
        }
      }

      const lien = document.createElement('a');
      lien.className = 'produit';
      lien.href = `fiche-produit.html?id=${encodeURIComponent(p.id)}`;
      lien.innerHTML = `
        <img src="${imgSrc}" alt="${p.nom || 'Image produit'}" />
        <h3>${p.nom || 'Nom inconnu'}</h3>
        <p>${prixAffiche}</p>
      `;
      listeProduits.appendChild(lien);
    });

    indexAffichage += CHUNK_AFFICHAGE;

    if (btnAfficherPlus) {
      btnAfficherPlus.style.display = indexAffichage >= produitsFiltres.length ? 'none' : 'inline-block';
    }
  }

  async function chargerProduits() {
    try {
      const promesses = fichiersJson.map((fichier) =>
        fetch(fichier).then((resp) => {
          if (!resp.ok) throw new Error(`Erreur chargement ${fichier}`);
          return resp.json();
        })
      );

      const resultats = await Promise.all(promesses);
      produits = resultats.flat();

      produitsFiltres = [...produits];
      indexAffichage = 0;
      afficherProduits();
      majTypes();
      majCouleurs();
    } catch (err) {
      console.error('Erreur lors du chargement des produits JSON :', err);
      messageAucun.textContent = 'Erreur de chargement des produits.';
      messageAucun.style.display = 'block';
    }
  }

  // ---------- Événements ----------
  const btnReset = document.getElementById('btn-reset');

  if (formFiltre && btnReset) {
    btnReset.addEventListener('click', () => {
      formFiltre.reset(); // Réinitialise tous les champs
      setTimeout(() => {
        majTypes(); // Met à jour les types disponibles
        majCouleurs(); // Met à jour les couleurs disponibles
        produitsFiltres = [...produits]; // Réinitialise les produits affichés
        indexAffichage = 0;
        afficherProduits(); // Réaffiche tous les produits
      }, 0);
    });
  }

  if (selectCategorie)
    selectCategorie.addEventListener('change', () => {
      majTypes();
      filtrerProduits();
    });

  if (selectType) selectType.addEventListener('change', filtrerProduits);
  if (selectOccasion) selectOccasion.addEventListener('change', filtrerProduits);
  if (selectCouleur) selectCouleur.addEventListener('change', filtrerProduits);
  if (btnAfficherPlus) btnAfficherPlus.addEventListener('click', afficherProduits);

  // Chargement des produits au démarrage
  chargerProduits();
});
