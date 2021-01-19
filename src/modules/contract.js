'use strict';
import sliderCarousel from '../modules/SliderCarousel';

const contract = () => {
    const selector = document.getElementById('transparency'),
        modal = document.querySelector('.popup-transparency'),
        content = modal.querySelector('.slider-counter-content__current'),
        total = modal.querySelector('.slider-counter-content__total');
        
    content.textContent = 1; 
       
    const contractSlider = () => {
        
        const slide = document.querySelectorAll('.popup-transparency-slider__slide'),
        slider = document.querySelector('.popup-transparency-slider-wrap');
        
        let currentSlide = 0;
        total.textContent = slide.length;
         
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

        modal.addEventListener('click', (event) => {
            event.preventDefault();
            let targetPopup = event.target.closest('.popup-arrow');
           
            if(!event.target.closest('.popup-arrow')) {
                return;
            }    
           
            prevSlide(slide, currentSlide, 'slide-active');
            
            if (event.target.closest('#transparency_right')) {
                currentSlide++;
            } else if (event.target.closest('#transparency_left')) {
                currentSlide--;
            } 

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } 

            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            } 

            nextSlide(slide, currentSlide, 'slide-active');
                
        }); 

    };

    selector.addEventListener('click', (event) => {
        if (event.target.closest('.transparency-item__img')) {
            modal.classList.add('block-visibility');
            contractSlider();
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target.closest('.close')) {
            modal.classList.remove('block-visibility');
        }
         
    }); 

    const showSlides =() => {
        const contractTabs = new sliderCarousel({
            main: '#transparency .transparency-slider-wrap',
            wrap: '.transparency-slider',
            prev: '#transparency-arrow_left',
            next: '#transparency-arrow_right',
            slidesToShow: 1,
            infinity: true,
        });
        contractTabs.init();
    };

    const widthWindow = document.documentElement.clientWidth;
    if (widthWindow < 1135) {
        showSlides();
    }

};

export default contract;