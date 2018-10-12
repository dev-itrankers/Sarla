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


document.body.onscroll = function () {
    var y = document.body.getBoundingClientRect().y;
    console.log(y);
    if (y < 30) {
        document.querySelector("html").classList.add("navbar-pt");
        document.querySelector(".navbar-brand").classList.add("navbar-mh");
        document.querySelector(".navbar").classList.add("navbar-mh");
        document.querySelector(".navbar").classList.add("border");
        document.querySelectorAll(".navbar-dropdown").forEach(function (val) {
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
        document.querySelectorAll(".navbar-dropdown").forEach(function (val) {
            val.classList.remove("navbar-dropdown-onscroll");
        });
        document.querySelector(".navbar-item").classList.remove("navbar-item-p");
        document
            .querySelector(".navbar-burger")
            .classList.remove("navbar-burger-h");
    }
};

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
        block: "nearest"
    });
}
document
    .querySelectorAll(".scroll-nav")
    .forEach(a => a.addEventListener("click", scrollInView));
window.addEventListener("scroll", function (e) {
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
document.querySelectorAll(".menu li")
    .forEach(function (elem) {
        if (!elem.dataset.target) return;
        elem.addEventListener("click", function () {
            document.querySelector("#" + elem.dataset.target).scrollIntoView({ behavior: "smooth", block: "center" })
        })
    })