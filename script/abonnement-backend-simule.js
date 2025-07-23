// abonnement-backend-simule.js

const DEBUG = false; // Passe à true pour voir les logs de debug dans la console

/**
 * Vérifie si l'utilisateur est connecté
 */
function estConnecte() {
  return localStorage.getItem("utilisateurConnecte") === "true";
}

/**
 * Récupère le nom de l'utilisateur actuel (fictif ou stocké)
 */
function getUtilisateurActuel() {
  if (!estConnecte()) return null;
  return localStorage.getItem("nomUtilisateur") || "utilisateur_test";
}

/**
 * Enregistre un abonnement dans le localStorage
 * @param {string} utilisateur - nom ou identifiant utilisateur
 * @param {object} formule - objet contenant les infos de formule (nom, prix, fréquence, engagement)
 * @returns {boolean} true si réussi, false sinon
 */
function enregistrerAbonnement(utilisateur, formule) {
  if (!utilisateur || !formule) return false;

  const abonnements = JSON.parse(localStorage.getItem("abonnements")) || [];

  abonnements.push({
    utilisateur,
    formule,
    dateInscription: new Date().toISOString(),
  });

  localStorage.setItem("abonnements", JSON.stringify(abonnements));

  if (DEBUG) console.log("✅ Abonnement enregistré :", utilisateur, formule);
  return true;
}

/**
 * Récupère tous les abonnements enregistrés
 * @returns {array} tableau des abonnements
 */
function recupererAbonnements() {
  const abonnements = JSON.parse(localStorage.getItem("abonnements")) || [];
  if (DEBUG) console.log("📦 Abonnements récupérés :", abonnements);
  return abonnements;
}

/**
 * Supprime un abonnement pour un utilisateur
 * @param {string} utilisateur - nom de l'utilisateur
 * @returns {boolean} true si supprimé, false sinon
 */
function supprimerAbonnement(utilisateur) {
  if (!utilisateur) return false;

  let abonnements = JSON.parse(localStorage.getItem("abonnements")) || [];
  const avant = abonnements.length;

  abonnements = abonnements.filter((a) => a.utilisateur !== utilisateur);
  localStorage.setItem("abonnements", JSON.stringify(abonnements));

  const apres = abonnements.length;

  if (DEBUG) {
    if (avant === apres) {
      console.warn("⚠️ Aucun abonnement supprimé pour :", utilisateur);
    } else {
      console.log("🗑️ Abonnement supprimé pour :", utilisateur);
    }
  }

  return avant !== apres;
}
