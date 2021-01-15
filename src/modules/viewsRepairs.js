'use strict';
const viewsRepairs = () => {
    const selector = document.getElementById('repair-types'),
        blockTabsButton = selector.querySelector('.nav-list-repair'),
        tabsButton = blockTabsButton.querySelectorAll('button'),
        blockTabsContent = selector.querySelector('.repair-types-slider'),
        tabsContent = selector.querySelectorAll('.block-slider'),
        counter = document.getElementById('repair-counter');

    let currentSlide = 0,
        interval;

    const slider = (element) => {
        console.log('element: ', element);
       
        const slide = element.querySelectorAll('.repair-types-slider__slide'),
       
            btn = selector.querySelectorAll('.slider-arrow'),
            slider = selector.querySelector('.repair-types-slider-wrap');
        
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        
        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if(!target.matches('.slider-arrow')) {
                return;
            }    
            prevSlide(slide, currentSlide, 'active');
                
            if (target.matches('#repair-types-arrow_right')) {
                currentSlide++;
                console.log('currentSlide: ', currentSlide);
            } else if (target.matches('#repair-types-arrow_left')) {
                currentSlide--;
                console.log('currentSlide: ', currentSlide);
            } 
    
            if (currentSlide >= slide.length) {
                console.log('slide.length: ', slide.length);
                currentSlide = 0;
            } 
    
            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            } 
    
            nextSlide(slide, currentSlide, 'active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.slider-arrow')) {
                stopSlide();   
            }
        });
    
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.slider-arrow')) {
                startSlide();   
            }
        });

        startSlide(1500);        

    };

    // const getSlider = (element, count) => {
    //     tabsContent.forEach((element, index) => {
    //         if (count === index) {
    //             startSlide(element);
    //         } else {
    //             stopSlide(element);
    //         }            
    //     });
    // };

    const firstSlide = selector.querySelector('.types-repair1');
    console.log('firstSlide: ', firstSlide);
    
    slider(firstSlide);
        
    blockTabsButton.addEventListener('click', (event) => {
        const target = event.target,
            targetButton = target.closest('.button_o');
            
        if (targetButton) {
            const textValue = targetButton.className,
              value = textValue.substr(textValue.length - 1);
                  
            tabsContent.forEach((element, index) => {
                const elementvalue = element.className.substr(element.className.length - 1);
                if (elementvalue === value) {
                    element.classList.add('block-slider__active');
                    tabsButton[index].classList.add('active');
                    slider(element);
                } else {
                    element.classList.remove('block-slider__active');
                    tabsButton[index].classList.remove('active');
                }
            });
        }

    });  
};

export default viewsRepairs;
