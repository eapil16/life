'use strict';
const accordion = () => {
    const accordion = document.querySelector('.accordion'),
        list = accordion.querySelectorAll('li'),
        parent = document.getElementById('faq');

        
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

    parent.addEventListener('click', (event) => {
        if (event.target.closest('.msg')) {
            event.target.preventDefaut();
        } 
        if (event.target.closest('.title_block')) {
            console.log('event.target.closest(li): ', event.target.closest('li'));
            addClassActive(event.target.closest('.title_block');
        } 

    });
    
};

export default accordion;