const swiper = new Swiper('.product_slides', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: false,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    320: {
      slidesPerView: 1.28,
      spaceBetween: 16,
    },
    576:{
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  mousewheel: true
});
