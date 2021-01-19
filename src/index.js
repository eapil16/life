import toggleMenu from './modules/toggleMenu';
import togglePhone from './modules/togglePhone';
import smoothScrolling from './modules/smoothScrolling';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import sliderCarousel from './modules/SliderCarousel'; 
import tooltip from './modules/tooltip';
import tabsWorking from './modules/tabsWorking';
import sliderReviews from './modules/sliderReviews';
import getDataBase from './modules/getDataBase';
import viewsRepairs from './modules/viewsRepairs';
import contract from './modules/contract';
import problems from './modules/problems';
import designSolutions from './modules/designSolutions';
import disignerPopup from './modules/disignerPopup';
import slidenInWindow from './modules/slidenInWindow';
import PortfolioCarousel from './modules/PortfolioSlider';
import portfolioSliderMobile from './modules/portfolioSliderMobile';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    toggleMenu();
    togglePhone();
    smoothScrolling();
    sendForm();
    accordion();
    tooltip();
    tabsWorking();
    sliderReviews();
    getDataBase();
    viewsRepairs();
    contract();
    problems();
    designSolutions();
    disignerPopup();
    slidenInWindow();
    portfolioSliderMobile();

    const carousel = new sliderCarousel({
        main: '#partners .wrapper',
        wrap: '.partners-slider',
        prev: '#partners-arrow_left',
        next: '#partners-arrow_right',
        slidesToShow: window.innerWidth < 768 ? 1 : 2,
        infinity: true,
        responsive: [
            {
                breakpoint: 768,
                slidesToShow: 1
            }
        ]
    });
    carousel.init();

    // const carouselPortfolio = new PortfolioCarousel({
    //     main: '#portfolio-inspires',
    //     wrap: '.portfolio-slider__wrap',
    //     prev: '#portfolio-arrow_left',
    //     next: '#portfolio-arrow_right',
    //     slidesToShow: 3,
    //     infinity: true,
    //     responsive : [{
    //         breakpoint: 1200,
    //         slidesToShow:2
    //     },
    //     {
    //         breakpoint: 900,
    //         slidesToShow:1
    //     }]
    // });

    // carouselPortfolio.init();
});