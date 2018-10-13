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
