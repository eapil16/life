'use strict';
import sliderCarousel from '../modules/SliderCarousel';
const tooltip = () => {

    const parent = document.getElementById('formula');
   
    parent.addEventListener('mouseover', function(event){
     	let toolId = 0;
        const target = event.target.closest('.formula-item');
         if (target) {
            target.classList.add('formula-item__active');
            const value = target.querySelector('.formula-item__icon-inner-text').textContent;
            const qweerty = target.querySelector('.formula-item-popup');
            toolId = qweerty.className;            
            let lastChar = toolId.substr(toolId.length - 2); 
            const block = parent.querySelector('.wrapper_small');
            const tools = block.querySelectorAll('.formula-item-popup');
            tools.forEach((element) => {
                if (element.className.substr(toolId.length - 2) === lastChar ) {
                    element.classList.add('tooltip-active');
                    const coords = element.getBoundingClientRect();
                    if (coords.top < 0) { 
                        element.classList.add('to-bottom');
                    } 
                } else {
                    element.classList.remove('to-bottom');
                    element.classList.remove('tooltip-active');
                }
            });
        }        
	});

    parent.addEventListener('mouseout', function(event){
        let toolId = 0;
       const target = event.target.closest('.formula-item');
        if (target) {
           const value = target.querySelector('.formula-item__icon-inner-text').textContent;
           const qweerty = target.querySelector('.formula-item-popup');
           toolId = qweerty.className;            
           let lastChar = toolId.substr(toolId.length - 2); 
           const block = parent.querySelector('.wrapper_small');
           const tools = block.querySelectorAll('.formula-item-popup');
           target.classList.remove('formula-item__active');
           tools.forEach((element) => {
               if (element.className.substr(toolId.length - 2) === lastChar ) {
                   element.classList.remove('tooltip-active');
                   const coords = element.getBoundingClientRect();
                   if (coords.top < 0) { 
                       element.classList.remove('to-bottom');
                   } 
               } else {
                   element.classList.remove('to-bottom');
                   element.classList.remove('tooltip-active');
               }
           });
       }        
   });

   const showSlides =() => {
        const tooltipCarousel = new sliderCarousel({
            main: '.formula-slider-wrap',
            wrap: '.formula-slider',
            prev: '#formula-arrow_left',
            next: '#formula-arrow_right',
            slidesToShow: 1,
            infinity: true,
        });
        tooltipCarousel.init();
    };

    const widthWindow = document.documentElement.clientWidth;
    if (widthWindow < 1025) {
        showSlides();
    }

};

export default tooltip;
