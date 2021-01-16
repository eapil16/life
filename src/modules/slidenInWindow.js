'use strict';
const slidenInWindow = () => {
    const modalBlock = document.querySelector('.popup-portfolio'),
        parent = document.getElementById('portfolio'),
        counterBlock = document.getElementById('popup-portfolio-counter'),
        content = counterBlock.querySelector('.slider-counter-content__current'),
        total = counterBlock.querySelector('.slider-counter-content__total');

        const currentSmallSlide = document.querySelectorAll('.portfolio-slider__slide-frame');
        currentSmallSlide.forEach((elem, index) => {
            elem.setAttribute('slider-tab', index);
        });
    

    const sliderPortfolioPopup = (item) => {
       
        const getElementToSlide = document.querySelector('.active-get');
        if (getElementToSlide) {
            getElementToSlide.classList.remove('active-get');
            getElementToSlide.classList.remove('active');
        }
        
        const slide = document.querySelectorAll('.popup-portfolio-slider__slide'),
            slideText = modalBlock.querySelectorAll('.popup-portfolio-text'),
            firstSlideItem = document.querySelector('.popup-portfolio-slider__slide'),
            firstSlideText = modalBlock.querySelector('.popup-portfolio-text');
        
        slide.forEach((elem, index) => {
            elem.setAttribute('mobile-tab', index);
        });

       const targElem = item.getAttribute('slider-tab');
       const firstSlide = slide[`${targElem}`];

        firstSlide.classList.add('active'); 
        firstSlide.classList.add('active-get');// добавляем нужному блоку класс
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
            sliderPortfolioPopup(event.target);
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