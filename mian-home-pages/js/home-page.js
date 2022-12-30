//   // dropdowm navbar js 
const hamBurger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamBurger.addEventListener('click', function() {
    hamBurger.classList.toggle('closeburger');
    navMenu.classList.toggle('active');
})

// add to wishlist slider 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints:{
          0: {
              slidesPerView: 2,
              spaceBetween: 5,
          },
          550: {
              slidesPerView: 2,
          },
          650: {
              slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
        },
          950: {
              slidesPerView: 3,
          },
          1150: {
            slidesPerView: 4,
        }
        },
  mousewheel: true,
  keyboard: true,
});

// read content 

function readMore() {
  let ten = document.getElementById("all-content");
  if (ten.style.display === "block") {
    ten.style.display = "none";
  } else {
    ten.style.display = "block";
  }
}