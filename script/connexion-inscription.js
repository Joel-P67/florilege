document.addEventListener('DOMContentLoaded', () => {
  const btnConnexion = document.getElementById('btn-connexion');
  const btnInscription = document.getElementById('btn-inscription');
  const formConnexion = document.getElementById('form-connexion');
  const formInscription = document.getElementById('form-inscription');

  btnConnexion.addEventListener('click', () => {
    const actif = btnConnexion.classList.contains('actif');
    resetActive();
    if (!actif) {
      btnConnexion.classList.add('actif');
      formConnexion.classList.remove('hidden');
    }
  });

  btnInscription.addEventListener('click', () => {
    const actif = btnInscription.classList.contains('actif');
    resetActive();
    if (!actif) {
      btnInscription.classList.add('actif');
      formInscription.classList.remove('hidden');
    }
  });

  function resetActive() {
    btnConnexion.classList.remove('actif');
    btnInscription.classList.remove('actif');
    formConnexion.classList.add('hidden');
    formInscription.classList.add('hidden');
  }
});
