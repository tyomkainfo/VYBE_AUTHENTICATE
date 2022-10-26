document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    header.addEventListener("click", (e) => {
        const target = e.target;

        if (target.closest(".notification-close") && target.closest(".header__notification")) {
            target.closest(".header__notification").classList.add("hidden")
        }


    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
        0:{
            items:2
        },

        1000:{
            items:5
        }
    }
});