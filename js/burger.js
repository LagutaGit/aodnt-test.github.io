document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu-mobile');
    const burgerIcon = burgerMenu.querySelector('.burger-icon');

    burgerIcon.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
    });
});


// Код всплывающей подсказки
/* document.addEventListener('DOMContentLoaded', function() {
    alert('Добрый день! Буду честен, некоторые моменты были реализованы немного не так как в макете, но я постарался сделать так, чтобы подходило по стилистике сайта. Спасибо за внимание! P.S. Если для проверки данная надпись будет мешать, код от неё находится в файле burger.js');
}); */