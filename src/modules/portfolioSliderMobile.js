'use strict';
const portfolioSliderMobile = () => {
    const sliderMobile = () => {
        const slide = document.querySelectorAll('.portfolio-slider__slide-frame__image'),
            slideText = document.querySelector('.portfolio-slider__slide-frame__image'),
            counterBlock = document.getElementById('portfolio-counter'),
            content = counterBlock.querySelector('.slider-counter-content__current'),
            parent = document.getElementById('portfolio'),
            total = counterBlock.querySelector('.slider-counter-content__total');

        slideText.classList.add('active');
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

        parent.addEventListener('click', (event) => {
            event.preventDefault();
              
            if(!event.target.closest('.slider-arrow-tablet-mobile')) {
                return;
            }   
           
            prevSlide(slide, currentSlide, 'active');
                      
            if (event.target.closest('#portfolio-arrow-mobile_right')) {
                currentSlide++;
            } else if (event.target.closest('#portfolio-arrow-mobile_left')) {
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
   
    const widthWindow = document.documentElement.clientWidth;
    if (widthWindow < 576) {
        sliderMobile();
    }  

};

export default portfolioSliderMobile;