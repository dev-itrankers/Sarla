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

var header = document.querySelector(".prod-list-ul");
var links = header.querySelector(".deactive > a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.querySelector(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
var current = document.querySelector(".prod-item.active");
window.addEventListener("keydown", function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if ([40, 38].includes(key)) e.preventDefault();
});
window.addEventListener("keyup", changeSelectedProduct);

document
  .querySelector(".prod-list-ul li:first-child")
  .addEventListener("click", function() {
    changeSelectedProduct({ keyCode: 38 });
  });

document
  .querySelector(".prod-list-ul li:last-child")
  .addEventListener("click", function() {
    changeSelectedProduct({ keyCode: 40 });
  });

function changeSelectedProduct(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if (key === 40) {
    var temp = current && current.nextElementSibling;
    if (!temp.classList.contains("prod-item")) return;
    if (temp.classList.contains("prod-item")) {
      current.classList.remove("active");
      current.classList.add("deactive");
      current = temp;
      current.classList.add("active");
      current.classList.remove("deactive");
      document.querySelector(
        ".prod-list-ul li:first-child"
      ).innerHTML = `<i class="far fa-arrow-alt-circle-up"></i>`;
      document.querySelector(
        ".prod-list-ul li:last-child"
      ).innerHTML = `<i class="fas fa-arrow-alt-circle-down"></i>`;
      // current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  if (key === 38) {
    var temp = current && current.previousElementSibling;
    if (!temp.classList.contains("prod-item")) return;
    current.classList.remove("active");
    current.classList.add("deactive");
    current = temp;
    current.classList.add("active");
    current.classList.remove("deactive");
    document.querySelector(
      ".prod-list-ul li:last-child"
    ).innerHTML = `<i class="far fa-arrow-alt-circle-down"></i>`;
    document.querySelector(
      ".prod-list-ul li:first-child"
    ).innerHTML = `<i class="fas fa-arrow-alt-circle-up"></i>`;
    // current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
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
var scroll = document.querySelector(".scroll-bar");
document
  .querySelector(".det-btn .button")
  .addEventListener("click", function() {
    scroll.classList.add("active");
  });

document
  .querySelector(".close-btn .button")
  .addEventListener("click", function() {
    scroll.classList.remove("active");
  });
//-------------------------Pranjali JS--------------------------------
var scrollTarget = {
  "contact-form": document.querySelector(".contact-form")
};
document
  .querySelectorAll("a")
  .forEach(a => a.addEventListener("click", prevent));

function prevent(e) {
  e.preventDefault();
}

function scrollInView(e) {
  var target = e.target;
  if (!target.hasAttribute("target")) target = target.parentElement;
  // console.log(scrollTarget[target.getAttribute("target")]);
  scrollTarget[target.getAttribute("target")].scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
document
  .querySelectorAll(".scroll-nav")
  .forEach(a => a.addEventListener("click", scrollInView));
window.addEventListener("scroll", function(e) {
  var connectTop = scrollTarget["contact-form"].getBoundingClientRect().top;
  // console.log(connectTop, window.innerHeight * 0.6);
  if (connectTop < window.innerHeight * 0.6 && connectTop > 10) {
    document.querySelector(".contact-us").classList.add("nav-active");
    document.querySelector(".product").classList.remove("nav-active");
  } else {
    document.querySelector(".contact-us").classList.remove("nav-active");
    document.querySelector(".product").classList.add("nav-active");
  }
});

// document.querySelectorAll(".navbar-item").forEach(function(val) {
//   val.addEventListener("mouseover", function(e) {
//     val.classList.remove("nav-active");
//   });
//   val.addEventListener("mouseleave", function(e) {
//     val.classList.add("nav-active");
//   });
// });
