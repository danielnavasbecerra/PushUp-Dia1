//Swiper slider

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
const swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
});

//Navigation bar effects on scroll

//Responsive navigation menu toggle
