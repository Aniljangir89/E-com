document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for shoes
    const shoesSwiper = new Swiper('.shoes-slider', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: {
            el: '.shoes-slider .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.next-shoes',
            prevEl: '.prev-shoes',
        },
    });

    // Initialize Swiper for t-shirts
    const tshirtsSwiper = new Swiper('.tshirts-slider', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: {
            el: '.tshirts-slider .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.next-tshirts',
            prevEl: '.prev-tshirts',
        },
    });
});
