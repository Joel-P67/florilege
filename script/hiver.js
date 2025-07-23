const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');
const flakeContainer = document.querySelector('.flake-container');

if (burger && sideMenu && flakeContainer) {
  burger.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('show');
    sideMenu.classList.toggle('hidden', !isOpen);

    if (isOpen) {
      launchFlakes();
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
  console.log('Burger, sideMenu ou flakeContainer non trouvés dans cette page');
}

function launchFlakes() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createFlake(), i * 150);
  }
}

function createFlake() {
  const flake = document.createElement('div');
  flake.classList.add('flake');

  // Choisir une image parmi les 8 disponibles
  const index = Math.floor(Math.random() * 8) + 1;
  flake.style.backgroundImage = `url('/florilege/menu-img/hiver-00${index}.png')`;

  // Position initiale : hors écran à gauche, top aléatoire
  const top = Math.random() * 30;
  flake.style.top = `${top}%`;
  flake.style.left = '-30px';

  // Taille aléatoire (20px à 30px)
  const size = Math.random() * 10 + 20;
  flake.style.width = `${size}px`;
  flake.style.height = `${size}px`;

  // Durée et opacité aléatoires
  flake.style.animationDuration = `${Math.random() * 3 + 4}s`;
  flake.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);

  // Flip horizontal aléatoire
  const flip = Math.random() > 0.5 ? -1 : 1;
  const scale = 0.8 + Math.random() * 0.6;
  flake.style.transform = `scaleX(${flip * scale})`;

  flakeContainer.appendChild(flake);

  flake.addEventListener('animationend', () => {
    flake.remove();
  });
}
