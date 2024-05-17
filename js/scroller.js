document.addEventListener("DOMContentLoaded", function () {
    var gallarySwipers = document.querySelectorAll(".swiper-container");

    gallarySwipers.forEach(function(gallarySwiper) {
        var swiper = new Swiper(gallarySwiper, {
            direction: "horizontal",
            slidesPerView: 4, // Автоматическое количество слайдов на экране
            // Другие параметры Swiper, если нужно
        });

        var rangeInput = gallarySwiper.querySelector(".swiper-range");

        // Обработчик изменения значения ползунка
        rangeInput.addEventListener("input", function () {
            var value = parseInt(this.value);
            var slideIndex = Math.round((value / 100) * (swiper.slides.length - 1));
            swiper.slideTo(slideIndex); // Переход к слайду
        });
    });
});
