//gnbmenu
var mainmenu = $(".header_nav>.width_h>ul>li"), //원뎁스 li 할당
  subMenu = mainmenu.find("ul"), //투뎁스 ul 할당
  header = $(".header_nav"), //.header_nav할당
  headerHeight = header.height(), //header높이 할당
  subMenuHeight = subMenu.height(), //subMenu 높이할당
  totalHeaderHeight = headerHeight + subMenuHeight + 200;

mainmenu.mouseenter(function () {
  header
    .addClass("active")
    .stop()
    .animate({ height: totalHeaderHeight + "px" }, 300);
});
mainmenu.mouseleave(function () {
  header
    .removeClass("active")
    .stop()
    .animate({ height: headerHeight + "px" }, 300);
});

//swiper
var swiper = new Swiper(".Swiper1", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".Swiper2", {
  slidesPerView: 3,
  /*grid: {
    rows: 2,
  },*/
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    801: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
    1400: { slidesPerView: 6 },
  },
});
var swiper3 = new Swiper(".Swiper3", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    801: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
    1400: { slidesPerView: 6 },
  },
});

//top
const btt = document.querySelector("#back_to_top");
let scrollAmount;
//console.log(window)
window.addEventListener("scroll", function () {
  scrollAmount = this.scrollY;
  if (scrollAmount > scrollAmount / 12) {
    btt.classList.add("visible");
  } else {
    btt.classList.remove("visible");
  }
});
btt.addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(btt.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});
//shop
const shop = document.querySelector("#shop");
window.addEventListener("scroll", function () {
  scrollAmount = this.scrollY;
  if (scrollAmount > scrollAmount / 12) {
    shop.classList.add("visible");
  } else {
    shop.classList.remove("visible");
  }
});
