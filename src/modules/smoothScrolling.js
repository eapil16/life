'use strict';
const smoothScrolling = () => {
    const body = document.querySelector('body'),    
        menu = document.querySelector('.popup-dialog-menu'),
        windowList = document.querySelector('.popup-repair-types'),
        popupPrivacy = document.querySelector('.popup-privacy'),
        popupnWide = document.querySelector('.popup-consultation');
      
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
            if (toTarget && toTarget[0] === '#' && toTarget.length > 1) {
                menu.classList.remove('show-menu');
                smoothscroll(toTarget);
            }      
        } 
        
        if (event.target.closest('.link-list')) {
            menu.classList.remove('show-menu');
            windowList.classList.add('block-visibility');
        }     
        
        if (event.target.closest('.link-privacy')) {
            popupPrivacy.classList.add('block-visibility');
        }

        if (event.target.closest('.button_wide')) {
            popupnWide.classList.add('block-visibility');
        }

        if (event.target.closest('.close')) {
            windowList.classList.remove('block-visibility');
            popupPrivacy.classList.remove('block-visibility');
            popupnWide.classList.remove('block-visibility');
        }
  
    });     
};

export default smoothScrolling;
