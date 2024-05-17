// Получаем все элементы с классом "card-front"
const cardFronts = document.querySelectorAll('.card-front');

// Получаем все элементы с классом "card-back"
const cardBacks = document.querySelectorAll('.card-back');

// Получаем все элементы с классом "ages-close"
const agesClose = document.querySelectorAll('.ages-close');

// Функция для скрытия card-back и отображения card-front
function hideCardBacksAndShowCardFronts() {
    cardBacks.forEach(cardBack => {
        cardBack.style.display = 'none';
    });
    cardFronts.forEach(cardFront => {
        cardFront.style.display = 'block';
    });
}

// Обработчики событий для элементов card-front
cardFronts.forEach((cardFront, index) => {
    cardFront.addEventListener('click', () => {
        cardBacks[index].style.display = 'block';
        cardFront.style.display = 'none';
    });
});

// Обработчики событий для элементов ages-close
agesClose.forEach((agesCloseElement, index) => {
    agesCloseElement.addEventListener('click', () => {
        cardFronts[index].style.display = 'block';
        cardBacks[index].style.display = 'none';
    });
});
