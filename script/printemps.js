const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');
const petalContainer = document.querySelector('.petal-container');

if (burger && sideMenu && petalContainer) {
  burger.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('show');
    sideMenu.classList.toggle('hidden', !isOpen);

    if (isOpen) {
      launchPetals();
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
  console.log('Burger, sideMenu ou petalContainer non trouvés dans cette page');
}

function launchPetals() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createPetal(), i * 150);
  }
}

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Choisir une image parmi les 6 disponibles
  const index = Math.floor(Math.random() * 8) + 1;
  petal.style.backgroundImage = `url('../menu-img/printemps-00${index}.png')`;

  // Position initiale : hors écran à gauche, top aléatoire
  const top = Math.random() * 30;
  petal.style.top = `${top}%`;
  petal.style.left = '-30px';

  // Taille aléatoire (20px à 30px)
  const size = Math.random() * 10 + 25; // 25 à 35px
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  // Durée et opacité aléatoires
  petal.style.animationDuration = `${Math.random() * 3 + 4}s`;
  petal.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);

  // Miroir horizontal aléatoire (effet visuel de variété)
  const flip = Math.random() > 0.5 ? -1 : 1;
  const scale = 0.8 + Math.random() * 0.6;
  petal.style.transform = `scaleX(${flip * scale})`;

  petalContainer.appendChild(petal);

  petal.addEventListener('animationend', () => {
    petal.remove();
  });
}
