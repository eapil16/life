'use strict';
const togglePhone = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
      target = document.querySelector('.header-contacts__phone-number-accord');
    
    const toggle = (tagtet) => {
        tagtet.classList.toggle('show-phone');
    };

    arrow.addEventListener('click' , (event) => {
        toggle(target);
    });

};

export default togglePhone;