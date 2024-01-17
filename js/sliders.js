const pharmaciesSections = document.querySelectorAll(".pharmacies");

pharmaciesSections.forEach((section) => {
  const swiperElem = section.querySelector(".swiper");
  const nextButton = section.querySelector(".swiper-button-next");
  const prevButton = section.querySelector(".swiper-button-prev");

  const swiper = new Swiper(swiperElem, {
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      576: {
        grid: {
          rows: 1,
        },
      },
      768: {
        slidesPerView: 2,
      },
      992: {
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