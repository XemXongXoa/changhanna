 const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
// =======================================================================//
$(document).ready(function () {
  $("#menu").on("click", function () {
    $("#menu").css("display", "none");
    $("#lgMenu").addClass("enter");
    $("#lgMenu").css("z-index", "10000");
  });
  $("#exit").on("click", function () {
    $("#menu").css("display", "block");
    $("#lgMenu").css("z-index", "-100");
    $("#lgMenu").removeClass("enter");

  });
});
// =======================================================================//
const nav = document.querySelector("nav");
    const btnstyle = document.querySelector(".btnstyle");
    btnstyle.addEventListener("click", function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 90) {
        btnstyle.classList.add("active");
        nav.classList.add("boxShadow");

      } else {
        btnstyle.classList.remove("active");
        nav.classList.remove("boxShadow");
      }
    });

// =======================================================================//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// =======================================================================//
  
