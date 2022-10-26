document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const body = document.querySelector("body");
    const navbarMenu = document.querySelector("#navbar-menu");
    let checkOpenMenu = false;

    header.addEventListener("click", (e) => {
        const target = e.target;

        if (target.closest(".notification-close") && target.closest(".header__notification")) {
            target.closest(".header__notification").classList.add("hidden")
        }

        if (target.closest(".navbar-menu__btn-open") &&
            !navbarMenu.classList.contains("show") && !body.classList.contains("hidden")) {
            navbarMenu.classList.add("show");
            body.classList.add("hidden");
        }
    })

    document.addEventListener("click", (e) => {
        const target = e.target;

        if (target.closest(".navbar-menu__btn-close") || !target.closest("#navbar-menu") &&
            !target.closest(".navbar-menu__btn-open") &&
            navbarMenu.classList.contains("show") && body.classList.contains("hidden")) {
            navbarMenu.classList.remove("show")
            body.classList.remove("hidden")
        }
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },

        1000:{
            items:5
        }
    }
});