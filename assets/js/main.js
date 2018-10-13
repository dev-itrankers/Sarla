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

var firstProd = document.querySelector(".prod-item");
var prod_item_height = firstProd.getBoundingClientRect().height;
var first_prod_margin_top = 0;
document.querySelector(".prod-up-arrow").addEventListener("click", function() {
  changeSelectedProduct({ keyCode: 38 });
});

document
  .querySelector(".prod-down-arrow")
  .addEventListener("click", function() {
    changeSelectedProduct({ keyCode: 40 });
  });

function changeSelectedProduct(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if (key === 40) {
    var temp = current && current.nextElementSibling;
    if (!temp.classList.contains("prod-item")) return;
    first_prod_margin_top -= prod_item_height;
    firstProd.style.marginTop = first_prod_margin_top + "px";
    if (temp.classList.contains("prod-item")) {
      current.classList.remove("active");
      current.classList.add("deactive");
      current.classList.contains("smallfont") &&
        current.classList.remove("smallfont");
      current = temp;
      current.classList.add("active");
      current.classList.remove("deactive");
      scroll.classList.contains("active") && current.classList.add("smallfont");
      document.querySelector(
        ".prod-up-arrow"
      ).innerHTML = `<i class="far fa-arrow-alt-circle-up"></i>`;
      document.querySelector(
        ".prod-down-arrow"
      ).innerHTML = `<i class="fas fa-arrow-alt-circle-down"></i>`;
      // current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  if (key === 38) {
    var temp = current && current.previousElementSibling;
    if (!temp.classList.contains("prod-item")) return;
    first_prod_margin_top += prod_item_height;
    firstProd.style.marginTop = first_prod_margin_top + "px";
    current.classList.remove("active");
    current.classList.add("deactive");
    current.classList.contains("smallfont") &&
      current.classList.remove("smallfont");
    current = temp;
    scroll.classList.contains("active") && current.classList.add("smallfont");
    current.classList.add("active");
    current.classList.remove("deactive");
    document.querySelector(
      ".prod-down-arrow"
    ).innerHTML = `<i class="far fa-arrow-alt-circle-down"></i>`;
    document.querySelector(
      ".prod-up-arrow"
    ).innerHTML = `<i class="fas fa-arrow-alt-circle-up"></i>`;
    // current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

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
// =========================product scroll========================
var scroll = document.querySelector(".scroll-bar"),
  detSlide = document.querySelectorAll(".det-none"),
  prodGradient = document.querySelector(".prod-details");
document
  .querySelector(".det-btn .button")
  .addEventListener("click", function() {
    scroll.classList.add("active");
    current.classList.add("smallfont");
    detSlide.forEach((val, ind) => {
      val.classList.add("det-animate-" + (ind + 1));
    });
    prodGradient.style.background =
      "linear-gradient(rgba(0, 0, 0, 0.0),rgba(0,0,0,0.6)),url(assets/images/prod_img.jpg)";
  });

scroll.addEventListener("transitionend", function() {
  if (!scroll.classList.contains("active"))
    detSlide.forEach((val, ind) => {
      val.classList.remove("det-animate-" + (ind + 1));
      prodGradient.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.0),rgba(0,0,0,0)),url(assets/images/prod_img.jpg)";
    });
});

document
  .querySelector(".close-btn .button")
  .addEventListener("click", function() {
    scroll.classList.remove("active");
    current.classList.remove("smallfont");
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
  scrollTarget[target.getAttribute("target")].scrollIntoView({
    behavior: "smooth",
    block: "nearest"
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
/*--------------------------details button js---------------------- */

var scroll = document.querySelector(".scroll-bar"),
  scrollElemTop = scroll.getBoundingClientRect(),
  detSlide = document.querySelectorAll(".det-none"),
  prodDetails = document.querySelector(".prod-details");
console.log(scrollElemTop);
document.querySelector(".det-btn").addEventListener("click", function(e) {
  var target = this.getAttribute("target");
  prodDetails.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(function() {
    window.scrollBy(0, -36);
  }, 500);
  scroll.classList.add("active");
  current.classList.add("smallfont");
  detSlide.forEach((val, ind) => {
    val.classList.add("det-animate-" + (ind + 1));
  });
  prodDetails.style.background =
    "linear-gradient(rgba(0, 0, 0, 0.0),rgba(0,0,0,0.6)),url(assets/images/prod_img.jpg)";
});

scroll.addEventListener("transitionend", function() {
  if (!scroll.classList.contains("active"))
    detSlide.forEach((val, ind) => {
      val.classList.remove("det-animate-" + (ind + 1));
      prodDetails.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.0),rgba(0,0,0,0)),url(assets/images/prod_img.jpg)";
    });
});

document
  .querySelector(".close-btn .button")
  .addEventListener("click", function() {
    scroll.classList.remove("active");
    current.classList.remove("smallfont");
  });
