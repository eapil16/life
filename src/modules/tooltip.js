'use strict';
const tooltip = () => {

    const selector = 'formula-item';
    console.log('selector: ', selector);
    
    const parents = document.getElementById('formula'),
        elements = parents.querySelectorAll('.formula-item');
    // console.log('element: ', elements);

  
    parents.onmouseover = function(event) {
         const  target = event.target.closest('.formula-item');
         
        
        if (target) {
            console.log('target: ', target);

            if(target.closest('tooltip-active')) {
                target.classList.remove('tooltip-active');
            } else {
                target.classList.add('tooltip-active');
            }
            
            // let tooltipHtml = target.querySelector('.formula-item-popup');
            
            
            // const coords = tooltipHtml.getBoundingClientRect();
            // if (coords.top < 0) { 
            //     target.classList.add('to-bottom');
            // } 
        }

    };
};

export default tooltip;
