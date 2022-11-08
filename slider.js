const swiper = new Swiper(".mySwiper", {
    speed: 1000,
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        // when window width is >= 900px
        900: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
    },
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});