'use strict';
class SliderCarousel {
    constructor({
        main, 
        wrap, 
        next,
        prev,
        position = 0,
        slidesToShow = 3,
        infinity = false,
        responsive = []
    }) {
        if (!main || !wrap) {
            console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wpap"');
        }
        this.main = document.querySelector(main);  
        this.wrap = document.querySelector(wrap); 
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
        this.responsive = responsive;
    }

    init(){
        this.addGloClass();
        this.addStyle();
        this.getDots();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
           this.addArrow(); 
           this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }        
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
           item.classList.add('glo-slider__item'); 
        }
    }
    
    addStyle(){
       
        let style = document.getElementById('sliderCarusel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
        }
        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            } 
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
                padding: 0 0 50px 0 !important;
            }  
            .glo-slider__item {
                display:flex !important;
                align-items: center !important;
                flex:0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
                justify-content: center;
                max-width: 100% !important;
            }  
        `;
        document.head.appendChild(style);
        
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition; 
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider(){

        
        
        
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            // let delElem;
            // delElem.remove();
            if (this.options.position > this.options.maxPosition) {
                // this.options.position = 0;

                const index = (this.options.position - this.options.maxPosition) - 1 ;
                console.log('index: ', index);
                const lastSlide = this.slides.length -1;
                console.log('this.slides: ', this.slides);
                console.log('lengthSlides: ', lastSlide);

                // const sliderClone = this.slides[index - 1].cloneNode(true);
                // const delElem = this.slides[index - 1];
                // console.log('delElem: ', delElem);
                // sliderClone.classList.add('slider-clone');
                
                // this.wrap.appendChild(sliderClone); // вставляем скопированный элемент
                
                this.slides[index].before(this.slides[lastSlide]);
                
                
            }
            // const delElem = this.slides[this.options.position - this.options.maxPosition - 1];
            // delElem.remove();
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            
        }
        // this.slides[0].remove();
    }

    getDots() {
        const dotsUl = document.createElement('ul');
        dotsUl.classList.add('slider-dots');
        for (let i = 0; i < this.slides.length; i++) {
            const dotBlock = document.createElement('li');
            dotBlock.classList.add('dot');
            if (i === 0) {
                dotBlock.classList.add('dot-active');
            }            
            dotsUl.append(dotBlock);
        } 
        this.main.append(dotsUl);   
        const style = document.createElement('style');
        style.textContent = `
            .slider-dots {
                position: absolute;
                bottom: 0px;
                width: 100%;
                margin: 0 auto;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                z-index: 5;
            }
            .slider-dots .dot {
                cursor: pointer;
                height: 16px;
                width: 16px;
                margin: 0 10px;
                border-radius: 50%;
                border: solid #f58c22;
                display: inline-block;
                -webkit-transition: background-color,-webkit-transform .4s;
                transition: background-color,transform .4s,-webkit-transform .4s;
                background: transparent;
            }
            .slider-dots .dot-active {
                background-color: #f58c22;
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
        `;
        document.head.appendChild(style);  
    }

    addArrow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next {
                margin:0 10px;
                border: 20px solid transparent;
                background: transparent;
            } 
            .glo-slider__next {
                border-left-color: #19bbff;
            }
            .glo-slider__prev {
                border-right-color: #19bbff;
            }
            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus {
                background: transparent;
                outline:none;
            }
        `;
        document.head.appendChild(style);
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max( ... allResponse);
        
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if(widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };

        checkResponse();

        window.addEventListener('resize' , checkResponse);

    }

}

export default SliderCarousel;