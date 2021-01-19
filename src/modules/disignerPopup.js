'use strict';
import sliderCarousel from '../modules/SliderCarousel';
const disignerPopup = () => {
    const navTabsTarent = document.querySelector('.popup-design'),
        navTabs = navTabsTarent.querySelectorAll('.button_o'),
        navContentTarent = document.querySelectorAll('.popup-slider'),
        textTabs = navTabsTarent.querySelectorAll('.popup-design-text'),
        counterBlock = document.getElementById('popup-designs-counter'),
        content = counterBlock.querySelector('.slider-counter-content__current'),
        total = counterBlock.querySelector('.slider-counter-content__total'),
        blockdDesigns =  document.getElementById('designs');

    navTabs.forEach((elem, index) => {
        elem.setAttribute('data-tab', ++index);
    });

    navContentTarent.forEach((elem, index) => {
        if (index === 0) {
            elem.classList.add('active-tab');
        }
        elem.setAttribute('data-tab-content', ++index);
    });

    textTabs.forEach((elem, index) => {
        if (index === 0) {
            elem.classList.add('visible-content-block');
        }
        elem.setAttribute('data-tab-text', ++index);
    });

    const sliderRepair = (element) =>{
        const slide = element.querySelectorAll('.popup-design-slider__style-slide'),
        firstSlideItem = element.querySelector('.popup-design-slider__style-slide');
        firstSlideItem.classList.add('active');
        let currentSlide = 0;
        total.textContent = slide.length;
        content.textContent = 1;
         
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
            const count = ++index;
            content.textContent = count;
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
            const count = ++index;
            content.textContent = count;            
        };

        navTabsTarent.addEventListener('click', (event) => {
            event.preventDefault();

            const target = !event.target.closest('.popup-arrow');
                    
            if((target)) {
                return;
            }    
           
            prevSlide(slide, currentSlide, 'active');
                    
            if (event.target.closest('#popup_design_right')) {
                currentSlide++;
            } else if (event.target.closest('#popup_design_left')) {
                currentSlide--;
            } 

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } 

            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            } 

            nextSlide(slide, currentSlide, 'active');
              
        }); 
    };

    const firstSlide = navTabsTarent.querySelector('.popup-design-slider__style-slide'),
        firstDots = navTabsTarent.querySelector('.popup-designs-slider__style1');
   
    firstSlide.classList.add('active');
    sliderRepair(firstDots);

    const showDisignerPopup =() => {
        const carouselDisignerPopup = new sliderCarousel({
        main: '#designs-popup__slider',
        wrap: '#nav-list-popup-designs',
        prev: '#nav-arrow-popup-designs_left',
        next: '#nav-arrow-popup-designs_right',
        slidesToShow: 2,
        infinity: true,
        responsive : [{
            breakpoint: 767,
            slidesToShow:2
        },
        {
            breakpoint: 576,
            slidesToShow:1
        }]
        });
        carouselDisignerPopup.init();
    };

    navTabsTarent.addEventListener('click', (event) => {
        const target = event.target.closest('.button_o');
        if(target) {
            const value = target.getAttribute('data-tab');
            navContentTarent.forEach((elem, index) => {
                if (value.trim() === elem.getAttribute('data-tab-content').trim()) {
                    elem.classList.add('active-tab');
                    navTabs[index].classList.add('active');
                    textTabs[index].classList.add('visible-content-block');
                    sliderRepair(elem);
                } else {
                    elem.classList.remove('active-tab');
                    navTabs[index].classList.remove('active');
                    textTabs[index].classList.remove('visible-content-block');
                }
            });
        }

    });

    blockdDesigns.addEventListener('click', (event) => {
        if (event.target.closest('.link-list-designs')) {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < 1025) {
                showDisignerPopup();
            }
        }     
    });
};

export default disignerPopup;