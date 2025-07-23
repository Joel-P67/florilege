const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');
const sunflowerContainer = document.querySelector('.sunflower-container');

if (burger && sideMenu && sunflowerContainer) {
  burger.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('show');
    sideMenu.classList.toggle('hidden', !isOpen);

    if (isOpen) {
      launchSunflowers();
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
  console.log('Burger, sideMenu ou sunflowerContainer non trouvés dans cette page');
}

function launchSunflowers() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createSunflower(), i * 150);
  }
}

function createSunflower() {
  const flower = document.createElement('div');
  flower.classList.add('sunflower');

  // Choisir une image parmi les 8 disponibles
  const index = Math.floor(Math.random() * 8) + 1;
  flower.style.backgroundImage = `url('../menu-img/ete-00${index}.png')`;

  const top = Math.random() * 30;
  flower.style.top = `${top}%`;
  flower.style.left = '-30px';

  const size = Math.random() * 12 + 26; // Taille plus grande pour les fleurs
  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;

  flower.style.animationDuration = `${Math.random() * 3 + 4}s`;
  flower.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);

  const flip = Math.random() > 0.5 ? -1 : 1;
  const scale = 0.9 + Math.random() * 0.4;
  flower.style.transform = `scaleX(${flip * scale})`;

  sunflowerContainer.appendChild(flower);

  flower.addEventListener('animationend', () => {
    flower.remove();
  });
}
