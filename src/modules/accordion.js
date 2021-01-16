'use strict';
const accordion = () => {
    const accordion = document.querySelector('.accordion'),
        list = accordion.querySelectorAll('.title_block');
        
    const addClassActive = (data) => {
        list.forEach((element)=> {
            if(element.querySelector('h2').textContent.trim() === data.textContent.trim()) {
                element.classList.add('tabs-active');
                element.querySelector('h2').classList.add('msg-active');
            } else {
                element.classList.remove('tabs-active');
                element.querySelector('h2').classList.remove('msg-active');
            }
        });        
    };

    accordion.addEventListener('click', (event) => {
        console.log('event: ', event);
        if (event.target.closest('li')) {
            addClassActive(event.target.closest('li h2'));
        }   
    });
    
};

export default accordion;