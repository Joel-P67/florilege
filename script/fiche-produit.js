document.addEventListener('DOMContentLoaded', () => {
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

  const correspondanceOccasions = {
    anniversaire: 'Anniversaire',
    amour: 'Amour',
    mariage: 'Mariage',
    felicitations: 'Félicitation',
    naissance: 'Naissance',
    remerciements: 'Remerciement',
    astrologie: 'Astrologie',
    idees_cadeau: 'Idée Cadeau',
    deuil: 'Deuil',
    noel: 'Noël',
  };

  const params = new URLSearchParams(window.location.search);
  const produitId = params.get('id');
  let produitGlobal = null;

  function afficherMessage(message) {
    const title = document.getElementById('product-title');
    if (title) {
      title.textContent = message;
    } else {
      document.body.innerHTML = `<p>${message}</p>`;
    }
  }

  function formaterOccasion(occasions) {
    if (!occasions) return '';
    return occasions
      .map((occ) => {
        const key = occ.toLowerCase();
        if (correspondanceOccasions[key]) {
          return correspondanceOccasions[key];
        }
        let sansUnderscore = occ.replace(/_/g, ' ');
        return sansUnderscore.replace(/\b\w/g, (c) => c.toUpperCase());
      })
      .join(', ');
  }

  if (!produitId) {
    afficherMessage('Produit non spécifié.');
  } else {
    async function chargerProduit() {
      try {
        const promesses = fichiersJson.map((fichier) => fetch(fichier).then((resp) => resp.json()));
        const resultats = await Promise.all(promesses);
        const tousProduits = resultats.flat();

        const produit = tousProduits.find((p) => {
          const idProduit = p.id || (p.nom ? p.nom.replace(/\s+/g, '-').toLowerCase() : '');
          return idProduit === produitId;
        });

        if (!produit) {
          afficherMessage('Produit non trouvé.');
          return;
        }

        produitGlobal = produit;
        afficherProduit(produit);
      } catch (err) {
        console.error(err);
        afficherMessage('Erreur lors du chargement du produit.');
      }
    }

    function afficherProduit(p) {
      const container = document.getElementById('fiche-produit');
      if (!container) {
        console.error('Container #fiche-produit introuvable');
        return;
      }

      const images = p.images || [p.image].filter(Boolean);
      const imagePrincipale = images[0] || '';

      container.innerHTML = `
        <div class="galerie-produit">
          <img id="image-principale" src="${imagePrincipale}" alt="Image principale du produit : ${p.nom}" class="image-principale" />
          <div class="miniatures">
            ${images
          .map(
            (img, index) => `
              <img src="${img}" class="miniature" data-index="${index}" alt="Miniature ${index + 1} de ${p.nom}" />
            `
          )
          .join('')}
          </div>
        </div>
      `;

      document.getElementById('product-title').textContent = p.nom || '';
      document.getElementById('product-id').textContent = p.id ? `ID : ${p.id}` : '';
      document.getElementById('product-occasion').textContent = p.occasion
        ? `Occasion : ${formaterOccasion(p.occasion)}`
        : '';
      document.getElementById('product-description').textContent = p.description || '';
      document.getElementById('product-rating').textContent = p.note ? `Note : ${p.note}/5` : '';

      const additional = document.getElementById('additional-info');
      const productPrice = document.getElementById('product-price');

      if (additional) {
        let compositionHTML = '';
        if (p.composition) {
          const compositionFormatee = p.composition
            .map((mot) => mot.replace(/\b\w/g, (c) => c.toUpperCase()))
            .join(', ');
          compositionHTML = `<p><strong>Composition :</strong> ${compositionFormatee}</p>`;
        }

        let couleursHTML = '';
        if (p.couleurs_principales) {
          couleursHTML = `<p><strong>Couleurs :</strong> ${p.couleurs_principales.join(', ')}</p>`;
        }

        additional.innerHTML = compositionHTML + couleursHTML;
      }

      if (productPrice) {
        let tarifsHTML = '';
        if (p.tarifs) {
          const tailles = p.tailles_bouquets || p.tailles_generales;
          if (tailles) {
            tarifsHTML = `
        <p>Tarifs :</p>
        <table class="table-tarifs">
          <thead>
            <tr><th></th><th>Taille</th><th>Prix</th><th>Quantité</th></tr>
          </thead>
          <tbody>
      `;
            tailles.forEach((taille) => {
              const cleTarif = taille.replace(/_/g, ' ');
              const prix = p.tarifs[cleTarif];
              if (prix !== undefined) {
                const tailleAffichee = cleTarif.replace(/\b\w/g, (c) => c.toUpperCase());
                tarifsHTML += `
            <tr>
              <td><img src="menu-img/feuille.png" alt="Icône de feuille" width="24" height="24"></td>
              <td data-label="Taille">${tailleAffichee}</td>
              <td data-label="Prix">${prix.toFixed(2)} €</td>
              <td data-label="Quantité">
                <input type="number" name="quantite-${taille}" min="0" value="0" class="quantite-input" />
              </td>
            </tr>
          `;
              }
            });
            tarifsHTML += `
          </tbody>
        </table>
        <div class="boutons-actions">
          <button class="btn add-to-cart">Ajouter au panier</button>
          <button class="btn" onclick="window.history.back()">Continuer mes achats</button>
        </div>
      `;
          }
        }
        productPrice.innerHTML = tarifsHTML;
      }

      // Miniatures
      const toutesMiniatures = document.querySelectorAll('.miniature');
      toutesMiniatures.forEach((thumb, idx) => {
        if (idx === 0) thumb.classList.add('active');
        thumb.addEventListener('click', () => {
          const index = parseInt(thumb.dataset.index, 10);
          const nouvelleImage = images[index];
          const imgPrincipale = document.getElementById('image-principale');
          imgPrincipale.src = nouvelleImage;
          imgPrincipale.alt = `Image principale du produit : ${p.nom}`;
          toutesMiniatures.forEach((mini) => mini.classList.remove('active'));
          thumb.classList.add('active');
        });
      });

      // Écouteur bouton après ajout dynamique
      const boutonAjouter = document.querySelector('.add-to-cart');
      if (boutonAjouter) {
        boutonAjouter.addEventListener('click', () => {
          if (!produitGlobal) {
            afficherPopup('Produit non chargé.');
            return;
          }

          const nom = produitGlobal.nom;
          const id = produitGlobal.id;
          const image = document.querySelector('.image-principale')?.src || '';
          const tarifs = produitGlobal.tarifs || {};

          const quantites = Array.from(document.querySelectorAll('.quantite-input'))
            .map((input) => {
              const taille = input.name.replace('quantite-', '');
              const quantite = parseInt(input.value, 10);
              return quantite > 0 ? { taille, quantite } : null;
            })
            .filter(Boolean);

          if (quantites.length === 0) {
            afficherPopup('Veuillez sélectionner au moins une quantité.');
            return;
          }

          let panier = JSON.parse(localStorage.getItem('panier')) || [];

          quantites.forEach((q) => {
            const indexExistant = panier.findIndex((item) => item.id === id && item.taille === q.taille);

            if (indexExistant !== -1) {
              panier[indexExistant].quantite += q.quantite;
            } else {
              panier.push({
                id,
                nom,
                taille: q.taille,
                quantite: q.quantite,
                image,
                tarifs,
              });
            }
          });

          localStorage.setItem('panier', JSON.stringify(panier));
          afficherPopup('🌸 Produit ajouté au panier !');
        });
      }
    }

    chargerProduit();
  }
});