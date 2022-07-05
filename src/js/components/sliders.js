import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const testimonialsSlider = document.querySelector(".testimonials__slider");

const testimonials = new Swiper(testimonialsSlider, {
  slidesPerView: 1,
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
});
