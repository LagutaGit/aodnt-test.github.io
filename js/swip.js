var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  /*     slidesPerView: 1,
    spaceBetween: 30, */
/*   mousewheel: true, */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  Infinity: true,
});

var swiper2 = new Swiper(".mySwiper2", {
/*   cssMode: true, */
/*   slidePerView: 4, */
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});
