'use strict';

import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import smoothScrolling from './modules/smoothScrolling';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import sliderCarousel from './modules/SliderCarousel'; 
import tooltip from './modules/tooltip';

toggleMenu();
togglePhone();
smoothScrolling();
sendForm();
accordion();
tooltip();

const carousel = new sliderCarousel({
    main: '#partners .wrapper',
    wrap: '.partners-slider',
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
    slidesToShow: 4,
    infinity: true,
    responsive : [{
        breakpoint: 1200,
        slidesToShow:3
    },
    {
        breakpoint: 768,
        slidesToShow:2
    },
    {
        breakpoint: 576,
        slidesToShow:1
    }]
});
carousel.init();