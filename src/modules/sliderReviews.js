'use strict';
const sliderReviews = () => {

    const slide = document.querySelectorAll('.reviews-slider__slide'),
        // slider = document.querySelector('.reviews-slider-wrap'),
        slider = document.getElementById('reviews'),
        dotsUl = document.querySelector('.slider-dots-reviews'),
        parent = document.getElementById('reviews');
            
    let currentSlide = 0,
        interval;

    dotsUl.style.display = 'flex';
    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot_active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot_active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    parent.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
    
        if(!target.matches('.slider-arrow, .dot')) {
            return;
        }
    
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot_active');

        if (event.target.closest('#reviews-arrow_right')) {
            currentSlide++;
        } else if (event.target.closest('#reviews-arrow_left')) { 
            currentSlide--;
        } else if (target.closest('.dot')) {
            dot.forEach((elem, index) => {
                if(elem === target){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        } 

        if (currentSlide < 0) {
            currentSlide = slide.length -1;
        } 

        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot_active');
    
    });     
    
    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
            stopSlide(); 
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
            startSlide(); 
        }
    });

    startSlide(1500);

};

export default sliderReviews;