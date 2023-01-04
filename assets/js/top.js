var heroSwiper = new Swiper(".heroSwiper", {
  direction: "vertical",
  // loop: true,
  // effect: "fade",
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var playSwiper = new Swiper(".playSwiper", {
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 20,
        initialSlide: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});