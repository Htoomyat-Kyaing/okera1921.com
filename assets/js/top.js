var heroSwiper = new Swiper(".heroSwiper", {
  direction: "vertical",
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var playSwiper = new Swiper(".playSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        initialSlide: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});