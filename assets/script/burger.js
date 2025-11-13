// Toggle menu
const menuToggle = document.querySelector('.menu-toggle');
const submenu = document.querySelector('.submenu');

menuToggle.addEventListener('click', () => {
    const isOpen = submenu.classList.toggle('active'); // correspond à .submenu.active
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Fermer le menu lors du clic sur un lien
const menuLinks = document.querySelectorAll('.submenu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        submenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});
