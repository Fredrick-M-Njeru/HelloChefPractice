const navLinks = document.querySelector('.nav-links')
const hamMenu = document.querySelector('#hamMenu');

hamMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})