'use strict';
const slidenInWindow = () => {
    const modalBlock = document.querySelector('.popup-portfolio'),
        parent = document.getElementById('portfolio'),
        counterBlock = document.getElementById('popup-portfolio-counter'),
        content = counterBlock.querySelector('.slider-counter-content__current'),
        total = counterBlock.querySelector('.slider-counter-content__total');

    const sliderPortfolioPopup = () => {
        const slide = document.querySelectorAll('.popup-portfolio-slider__slide'),
            slideText = modalBlock.querySelectorAll('.popup-portfolio-text'),
            firstSlideItem = document.querySelector('.popup-portfolio-slider__slide'),
            firstSlideText = modalBlock.querySelector('.popup-portfolio-text');

        firstSlideItem.classList.add('active');
        firstSlideText.classList.add('active-text');
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

        modalBlock.addEventListener('click', (event) => {
            event.preventDefault();
                       
            if(!event.target.closest('.popup-arrow')) {
                return;
            }    
           
            prevSlide(slide, currentSlide, 'active');
            prevSlide(slideText, currentSlide, 'active-text');
           
            if (event.target.closest('#popup_portfolio_right')) {
                currentSlide++;
            } else if (event.target.closest('#popup_portfolio_left')) {
                currentSlide--;
            } 

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } 

            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            } 

            nextSlide(slide, currentSlide, 'active');
            nextSlide(slideText, currentSlide, 'active-text');  
        });
    };

    parent.addEventListener('click', (event) => {
        if (event.target.closest('.portfolio-slider__slide-frame')) {
            modalBlock.classList.add('block-visibility');
            sliderPortfolioPopup();
        }
        if (event.target.closest('.close')) {
            modalBlock.classList.remove('block-visibility'); 
        }
    });

    modalBlock.addEventListener('click', (event) => {
        if (event.target.closest('.close')) {
            modalBlock.classList.remove('block-visibility'); 
        }
    });    

};

export default slidenInWindow;