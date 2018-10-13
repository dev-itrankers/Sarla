document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// ==========================nav scroll======================
document.body.onscroll = function() {
  var y = document.body.getBoundingClientRect().y;
  if (y < 30) {
    document.querySelector("html").classList.add("navbar-pt");
    document.querySelector(".navbar-brand").classList.add("navbar-mh");
    document.querySelector(".navbar").classList.add("navbar-mh");
    document.querySelector(".navbar").classList.add("border");
    document.querySelectorAll(".navbar-dropdown").forEach(function(val) {
      val.classList.add("navbar-dropdown-onscroll");
    });
    document.querySelector(".navbar-item").classList.add("navbar-item-p");
    document.querySelector(".navbar-burger").classList.add("navbar-burger-h");
  }
  if (y > 30) {
    document.querySelector("html").classList.remove("navbar-pt");
    document.querySelector(".navbar-brand").classList.remove("navbar-mh");
    document.querySelector(".navbar").classList.remove("navbar-mh");
    document.querySelector(".navbar").classList.remove("border");
    document.querySelectorAll(".navbar-dropdown").forEach(function(val) {
      val.classList.remove("navbar-dropdown-onscroll");
    });
    document.querySelector(".navbar-item").classList.remove("navbar-item-p");
    document
      .querySelector(".navbar-burger")
      .classList.remove("navbar-burger-h");
  }
};
// ======================scroll nav contact global==========================
var scrollTarget = {
  "connect-with-us": document.querySelector(".connect-with-us"),
  map: document.querySelector("section.map")
};
document
  .querySelectorAll("a")
  .forEach(a => a.addEventListener("click", prevent));

function prevent(e) {
  e.preventDefault();
}

function scrollInView(e) {
  console.log(e);
  var target = e.target.getAttribute("target");
  if (!target) target = e.target.parentElement.getAttribute("target");
  scrollTarget[target].scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
document.querySelectorAll(".scroll-nav").forEach(a =>
  a.addEventListener("click", function() {
    a.classList.add("nav-active");
  })
);

// var a = document.querySelector(".deactive>a");

// document.querySelector(".scroll").addEventListener("click", function() {
//   a.classList.remove("deactive");
//   a.classList.add("active");
// });
document
  .querySelectorAll(".scroll-nav")
  .forEach(a => a.addEventListener("click", scrollInView));

window.addEventListener("scroll", function(e) {
  var connectTop = scrollTarget["connect-with-us"].getBoundingClientRect().top;
  console.log(connectTop, window.innerHeight / 2);
  if (connectTop < window.innerHeight / 2 && connectTop > -90) {
    document.querySelector(".contact-us").classList.add("nav-active");
  } else {
    document.querySelector(".contact-us").classList.remove("nav-active");
  }
  var globalTop = scrollTarget["map"].getBoundingClientRect().top;
  if (globalTop < window.innerHeight / 2 && globalTop > -70) {
    document.querySelector(".global").classList.add("nav-active");
  } else {
    document.querySelector(".global").classList.remove("nav-active");
  }
});
