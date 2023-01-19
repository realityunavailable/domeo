import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';

// init Swiper:
const swiper = new Swiper('.swiper-js', {
    modules: [Navigation],
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