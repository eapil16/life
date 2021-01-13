'use strict';
const smoothScrolling = () => {
    const body = document.querySelector('body'),    
        menu = document.querySelector('.popup-dialog-menu');
      
    const smoothscroll = (target) => {
        event.preventDefault();
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
                block: 'start'
        });   
    };

    body.addEventListener('click', () => {
        const target = event.target.closest('body a');

        if (target) {
            const toTarget = target.getAttribute('href');
            if (toTarget[0] === '#') {
                menu.classList.remove('show-menu');
                smoothscroll(toTarget);
            }            
        }               
    });
    
};

export default smoothScrolling;
