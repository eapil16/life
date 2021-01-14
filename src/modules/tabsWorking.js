'use strict';
import sliderCarousel from '../modules/SliderCarousel';
 
const tabsWorking = () => {
    const navTabsTarent = document.getElementById('scheme-list'),
        navTabs = navTabsTarent.querySelectorAll('.button_o'),
        navContentTarent = document.querySelectorAll('.scheme-slider__slide'),
        tabsText = document.querySelectorAll('.scheme-description-block');
           
    navTabs.forEach((elem, index) => {
        elem.setAttribute('data-tab', ++index);
    });

    navContentTarent.forEach((elem, index) => {
        if (index === 0) {
            elem.classList.add('active-tab');
        }
        elem.setAttribute('data-tab-content', ++index);
    });

    navTabsTarent.addEventListener('click', (event) => {
        const target = event.target.closest('.button_o ');
        if(target) {
            const value = target.getAttribute('data-tab');
            
            navContentTarent.forEach((elem, index) => {
                if (value.trim() === elem.getAttribute('data-tab-content').trim()) {
                    elem.classList.add('active-tab');
                    navTabs[index].classList.add('active');
                    tabsText.forEach((element) => {
                        if (target.textContent.trim() === element.querySelector('.scheme-description-block__title').textContent.trim()) {
                            element.classList.add('visible-content-block');
                         } else {
                            element.classList.remove('visible-content-block');
                        }
                    });  
                } else {
                    elem.classList.remove('active-tab');
                    navTabs[index].classList.remove('active');
                }
            });
        }
    });

    const showSlidesTabs =() => {
        const carouselTabs = new sliderCarousel({
        main: '#scheme nav',
        wrap: '#scheme-list',
        prev: '#nav-arrow-scheme_left',
        next: '#nav-arrow-scheme_right',
        slidesToShow: 5,
        infinity: true,
        responsive : [{
            breakpoint: 1025,
            slidesToShow:4
        },
        {
            breakpoint: 767,
            slidesToShow:3
        },
        {
            breakpoint: 576,
            slidesToShow:1
        }]
        });
        carouselTabs.init();
    };

    const widthWindow = document.documentElement.clientWidth;
    if (widthWindow < 1135) {
        showSlidesTabs();
    }
};

export default tabsWorking;

