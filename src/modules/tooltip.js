'use strict';
const tooltip = () => {

    const parents = document.getElementById('formula'),
        elements = parents.querySelectorAll('.formula-item');
    // console.log('element: ', elements);

  
    document.onmouseover = function(event) {
        const  target = event.target.closest('.formula-item');
        
        if (target) {
            let tooltipHtml = target.querySelector('.formula-item-popup');
            
            tooltipHtml.classList.add('tooltip-active');
            const coords = tooltipHtml.getBoundingClientRect();
            if (coords.top < 0) { 
                target.classList.add('to-bottom');
            } 
        }

    };
};

export default tooltip;
