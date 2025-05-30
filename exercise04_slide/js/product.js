const swiper = new Swiper('.product_slides', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1.28,
      spaceBetween: 16,
    },
    768: {
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
