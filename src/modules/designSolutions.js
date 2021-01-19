'use strict';
import SliderTabs from '../modules/sliderTabs';
const designSolutions = () => {
    const navTabsTarent = document.getElementById('designs'),
        navTabs = navTabsTarent.querySelectorAll('.button_o'),
        navContentTarent = document.querySelectorAll('.designs-slider__item'),
        preview = navTabsTarent.querySelectorAll('.preview-block'),
        counterBlock = document.getElementById('designs-counter'),
        content = counterBlock.querySelector('.slider-counter-content__current'),
        total = counterBlock.querySelector('.slider-counter-content__total'),
        pupap = document.querySelector('.popup-design'),
        pupapBlock = document.querySelector('.popup-design');
        
    navTabs.forEach((elem, index) => {
        elem.setAttribute('data-tab', ++index);
    });

    navContentTarent.forEach((elem, index) => {
        if (index === 0) {
            elem.classList.add('active-tab');
        }
        elem.setAttribute('data-tab-content', ++index);
    });

    preview.forEach((elem, index) => {
        if (index === 0) {
            elem.classList.add('visible');
        }
        elem.setAttribute('data-tab-preview', ++index);
    });
    

    const sliderRepair = (element, dots) =>{
        const dot = dots.querySelectorAll('.preview-block__item');
        const slide = element.querySelectorAll('.designs-slider__style-slide'),
        firstSlideItem = element.querySelector('.designs-slider__style-slide');
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

            const targetButt = !event.target.closest('.slider-arrow-tablet-mobile');
            const tagterDot = !event.target.closest('.preview-block__item');        
            
            if((tagterDot && targetButt)) {
                return;
            }    
           
            prevSlide(slide, currentSlide, 'active');
            prevSlide(dot, currentSlide, 'preview_active');
            
            if (event.target.closest('#design_right')) {
                currentSlide++;
            } else if (event.target.closest('#design_left')) {
                currentSlide--;
            }  else if (!tagterDot) {                
                dot.forEach((elem, index) => {
                    if(elem.querySelector('.preview-block__item-inner').textContent === event.target.textContent){                       
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

            nextSlide(slide, currentSlide, 'active');
            nextSlide(dot, currentSlide, 'preview_active');
              
        }); 
    };

    const firstSlide = navTabsTarent.querySelector('.designs-slider__style1'),
        firstDots = navTabsTarent.querySelector('.preview-block');
       
    firstSlide.classList.add('active-tab');
    sliderRepair(firstSlide, firstDots);

    navTabsTarent.addEventListener('click', (event) => {
        const target = event.target.closest('.button_o');
        if(target) {
            const value = target.getAttribute('data-tab');
            
            navContentTarent.forEach((elem, index) => {
                if (value.trim() === elem.getAttribute('data-tab-content').trim()) {
                    elem.classList.add('active-tab');
                    navTabs[index].classList.add('active');
                    preview[index].classList.add('visible');
                    sliderRepair(elem, preview[index]);
                } else {
                    elem.classList.remove('active-tab');
                    navTabs[index].classList.remove('active');
                    preview[index].classList.remove('visible');
                }
            });
        }

        if (event.target.closest('.link-list-designs')) {
            pupap.classList.add('block-visibility');
        }
    });

    pupapBlock.addEventListener('click', (event) => {
        if (event.target.closest('.close ')) {
            pupap.classList.remove('block-visibility');
        }
    });

    // const showDesignTabs =() => {
        const carouselDesign = new SliderTabs({
            main: '#designs nav',
            wrap: '#designs-list',
            prev: '#nav-arrow-designs_left',
            next: '#nav-arrow-designs_right',
            slidesToShow: 3,
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
            carouselDesign.init();
    // };

    // const widthWindow = document.documentElement.clientWidth;
    // if (widthWindow < 1135) {
    //     showDesignTabs();
    // }

};
export default designSolutions;