import '../css/styles.css';
import {initializeMenu} from './modules/menu';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const menuBtn = document.querySelector('[data-id="menu-btn"]');
initializeMenu(menuBtn);

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    800: {
      slidesPerView: 2.5,
    }
  }
});
