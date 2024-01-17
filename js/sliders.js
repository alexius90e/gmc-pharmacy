const pharmaciesSections = document.querySelectorAll(".pharmacies");

pharmaciesSections.forEach((section) => {
  const swiperElem = section.querySelector(".swiper");
  const nextButton = section.querySelector(".swiper-button-next");
  const prevButton = section.querySelector(".swiper-button-prev");

  const swiper = new Swiper(swiperElem, {
    spaceBetween: 10,
    slidesPerView: 2,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1120: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
});
