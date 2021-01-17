'use strict';
const accordion = () => {
    const accordion = document.querySelector('.accordion'),
        list = accordion.querySelectorAll('li'),
        parent = document.getElementById('faq');
        
    const addClassActive = (data) => {
        list.forEach((element)=> {
            const value = element.querySelector('h2').textContent;
            if(value.trim() === data.trim()) {
                element.classList.add('tabs-active');
                element.querySelector('h2').classList.add('msg-active');
            } else {
                element.classList.remove('tabs-active');
                element.querySelector('h2').classList.remove('msg-active');
            }
        });       
    };

    parent.addEventListener('click', (event) => {
        const target = event.target.closest('.title_block');
        if (target) {
            addClassActive(target.textContent); 
        }
    });
    
};

export default accordion;