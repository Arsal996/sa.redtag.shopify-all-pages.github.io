const hamBurger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamBurger.addEventListener('click', function() {
    hamBurger.classList.toggle('closeburger');
    navMenu.classList.toggle('active');
})