document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu-mobile');
    const burgerIcon = burgerMenu.querySelector('.burger-icon');

    burgerIcon.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
    });
});


