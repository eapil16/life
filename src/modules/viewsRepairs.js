'use strict';
import sliderCarousel from '../modules/SliderCarousel';
const viewsRepairs = () => {
    const selector = document.getElementById('repair-types'),
        blockTabsButton = selector.querySelector('.nav-list-repair'),
        tabsButton = blockTabsButton.querySelectorAll('button'),
        tabsContent = selector.querySelectorAll('.block-slider'),
        counterBlock = document.getElementById('repair-counter'),
        content = counterBlock.querySelector('.slider-counter-content__current'),
        total = counterBlock.querySelector('.slider-counter-content__total');
    const widthWindow = window.innerWidth;
    let counetSlide = 1;
    const sliderRepair = (element) =>{
        const slide = element.querySelectorAll('.repair-types-slider__slide'),
        firstSlideItem = element.querySelector('.repair-types-slider__slide');
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

        selector.addEventListener('click', (event) => {
            event.preventDefault();
                       
            if(!event.target.closest('.slider-arrow')) {
                return;
            }    
           
            prevSlide(slide, currentSlide, 'active');
            
            if (event.target.closest('#repair-types-arrow_right')) {
                currentSlide++;
            } else if (event.target.closest('#repair-types-arrow_left')) {
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
        
    const firstSlide = selector.querySelector('.types-repair1'),
        firstSlideItem = selector.querySelector('.repair-types-slider__slide');

    firstSlideItem.classList.add('active');
    sliderRepair(firstSlide);

    tabsButton.forEach((elem, index) => {
        if (index === 0) {
            elem.classList.add('active');
        }
        elem.setAttribute('data-tab', ++index);
    });
    

    blockTabsButton.addEventListener('click', (event) => {
        const target = event.target,
            targetButton = target.closest('.button_o');
            
        if (targetButton) {
            const value = targetButton.getAttribute('data-tab').trim();

            tabsContent.forEach((element, index) => {
                const elementvalue = element.className.substr(element.className.length - 1);
                if (elementvalue === value) {
                    element.classList.add('block-slider__active');
                    tabsButton[index].classList.add('active');
                    sliderRepair(element);
                } else {
                    element.classList.remove('block-slider__active');
                    tabsButton[index].classList.remove('active');
                }
            });
        }

    });  

    const showRepairTabs =() => {
        const carouselRepair = new sliderCarousel({
        main: '#repair-types nav',
        wrap: '.nav-list-repair',
        prev: '#nav-arrow-repair-left_base',
        next: '#nav-arrow-repair-right_base',
        slidesToShow: counetSlide,
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
        carouselRepair.init();
    };

    const resizeWin = (widthWindow) => {
        if (widthWindow > 1025) {
            return;
        }
        if (widthWindow < 1025) {
            counetSlide = 3;
        }
        if (widthWindow <= 767 && widthWindow >= 576) {
            counetSlide = 2;
        }
        if (widthWindow < 575) {
            counetSlide = 1;
        }
    };

    resizeWin(widthWindow);

    window.addEventListener('resize', event => {
        resizeWin(window.innerWidth);
        if (counetSlide < 4) {
            showRepairTabs();  
        }              
    });
};

export default viewsRepairs;
