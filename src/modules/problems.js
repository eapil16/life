'use strict';
import sliderCarousel from '../modules/SliderCarousel';
const problems = () => {
    const parent = document.getElementById('problems');
    
    parent.addEventListener('mouseover', function(event){
        let toolId = 0;
        const target = event.target.closest('.problems-item');
        if (target) {
            target.classList.add('problems-item__active');
            const item = target.querySelector('.problems-item-popup');
            toolId = item.className;            
            let lastChar = toolId.substr(toolId.length - 2); 
            const block = parent.querySelector('.wrapper_middle');
            const tools = block.querySelectorAll('.problems-item-popup');
            tools.forEach((element) => {
                if (element.className.substr(toolId.length - 2) === lastChar ) {
                   element.classList.add('problems-active');
                   const coords = element.getBoundingClientRect();
                   if (coords.top < 0) { 
                       element.classList.add('to-bottom');
                   } 
                } else {
                   element.classList.remove('to-bottom');
                   element.classList.remove('problems-active');
                }
            });
        }        
    });

    parent.addEventListener('mouseout', function(event){
        let toolId = 0;
        const target = event.target.closest('.problems-item');
        if (target) {
            target.classList.remove('problems-item__active');
            const item = target.querySelector('.problems-item-popup');
            toolId = item.className;            
            let lastChar = toolId.substr(toolId.length - 2); 
            const block = parent.querySelector('.wrapper_middle');
            const tools = block.querySelectorAll('.problems-item-popup');
            tools.forEach((element) => {
                if (element.className.substr(toolId.length - 2) === lastChar ) {
                    element.classList.remove('problems-active');
                    const coords = element.getBoundingClientRect();
                    if (coords.top < 0) { 
                       element.classList.remove('to-bottom');
                    } 
                } else {
                   element.classList.remove('to-bottom');
                   element.classList.remove('problems-active');
                }
            });
        }        
    });

    const problemsSlides =() => {
        const slide = document.querySelectorAll('.problems-slider__slide'),
        slider = document.querySelector('.problems-slider-wrap');
        
        let currentSlide = 0;
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
    
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
    
        parent.addEventListener('click', (event) => {
            event.preventDefault();
                      
            if(!event.target.closest('.slider-arrow')) {
                return;
            }    
               
            prevSlide(slide, currentSlide, 'active-item');
                
            if (event.target.closest('#problems-arrow_right')) {
                currentSlide++;
            } else if (event.target.closest('#problems-arrow_left')) {
                currentSlide--;
            } 
    
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } 
    
            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            } 
    
            nextSlide(slide, currentSlide, 'active-item');
                    
        }); 
    };

    const widthWindow = document.documentElement.clientWidth;
    if (widthWindow < 1025) {
        problemsSlides();
    }

};

export default problems;
