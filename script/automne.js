const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');
const oakContainer = document.querySelector('.oak-leaf-container');

if (burger && sideMenu && oakContainer) {
  burger.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('show');
    sideMenu.classList.toggle('hidden', !isOpen);

    if (isOpen) {
      launchOakLeaves();
    }
  });

  const submenuButtons = document.querySelectorAll('.has-submenu > button');

  submenuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      parent.classList.toggle('open');
    });
  });
} else {
  console.log('Burger, sideMenu ou oakContainer non trouvés dans cette page');
}

function launchOakLeaves() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createOakLeaf(), i * 150);
  }
}

function createOakLeaf() {
  const feuille = document.createElement('div');
  feuille.classList.add('oak-leaf');

  // Choisir une image parmi les 8 disponibles
  const index = Math.floor(Math.random() * 8) + 1;
  feuille.style.backgroundImage = `url('/florilege/menu-img/automne-00${index}.png')`;

  // Position initiale : hors écran à gauche, top aléatoire
  const top = Math.random() * 30;
  feuille.style.top = `${top}%`;
  feuille.style.left = '-30px';

  // Taille aléatoire (20px à 30px)
  const size = Math.random() * 10 + 20;
  feuille.style.width = `${size}px`;
  feuille.style.height = `${size}px`;

  // Durée et opacité aléatoires
  feuille.style.animationDuration = `${Math.random() * 3 + 4}s`;
  feuille.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);

  // Miroir horizontal aléatoire (effet visuel de variété)
  const flip = Math.random() > 0.5 ? -1 : 1;
  const scale = 0.8 + Math.random() * 0.6;
  feuille.style.transform = `scaleX(${flip * scale})`;

  oakContainer.appendChild(feuille);

  feuille.addEventListener('animationend', () => {
    feuille.remove();
  });
}
