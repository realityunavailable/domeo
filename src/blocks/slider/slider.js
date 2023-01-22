import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper-js', {
    navigation: {
        nextEl: '.swiper-nav-next',
        prevEl: '.swiper-nav-prev',
    },
    loop: true,
    centeredSlides: true,
    simulateTouch: false,
    speed: 700,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2, 
        },
        1025: {
            slidesPerView: 3,
        }
    }
});

const partner = new Swiper('.swiper-partner-js', {
    loop: true,
    simulateTouch: true,
    autoplay: {
        delay: 2000,
        // disableOnInteraction: false,
    },
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: "auto",
    breakpoints: {
        320: {
            spaceBetween: 10
        },
        767: {
            spaceBetween: 14.5
        },
    }
});