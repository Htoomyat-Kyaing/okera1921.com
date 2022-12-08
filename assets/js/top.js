var heroSwiper = new Swiper(".heroSwiper", {
  direction: "vertical",
  spaceBetween: 50,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var playSwiper = new Swiper(".playSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 2,
        calculateHeight:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});