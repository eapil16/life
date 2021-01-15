'use strict';
const tooltip = () => {

    const parent = document.getElementById('formula');
   
    parent.addEventListener('mouseover', function(event){
     	let toolId = 0;
        const target = event.target.closest('.formula-item');
         if (target) {
            const value = target.querySelector('.formula-item__icon-inner-text').textContent;
            const qweerty = target.querySelector('.formula-item-popup');
            toolId = qweerty.className;            
            let lastChar = toolId.substr(toolId.length - 2); 
            const block = parent.querySelector('.wrapper_small');
            const tools = block.querySelectorAll('.formula-item-popup');
            tools.forEach((element) => {
                if (element.className.substr(toolId.length - 2) === lastChar ) {
                    element.classList.add('tooltip-active');
                    // let tooltipHtml = target.querySelector('.formula-item-popup');
                    const coords = element.getBoundingClientRect();
                    if (coords.top < 0) { 
                        element.classList.add('to-bottom');
                    } 
                } else {
                    element.classList.remove('to-bottom');
                    element.classList.remove('tooltip-active');
                }
            });
        }           
	});





    // parents.addEventListener('mouseover', (event) => {
    //     const  target = event.target.closest('.formula-item');
        
    //     if (target) {
    //         let tooltipHtml = target.querySelector('.formula-item-popup');
            
    //         tooltipHtml.classList.add('tooltip-active');
    //         const coords = tooltipHtml.getBoundingClientRect();
    //         if (coords.top < 0) { 
    //             target.classList.add('to-bottom');
    //         } 
    //     }     

    // });

    // parents.addEventListener('mouseout', (event) => {
    //     const  target = event.target.closest('.formula-item');
        
    //     if (target) {
    //         // let tooltipHtml = target.querySelector('.formula-item-popup');
            
    //         // tooltipHtml.classList.add('tooltip-active');
    //         // const coords = tooltipHtml.getBoundingClientRect();
    //         // if (coords.top < 0) { 
    //         //     target.classList.add('to-bottom');
    //         // } 
    //     }     

    // });

    // parents.addEventListener('mouseover', (event) => {
    //      const  target = event.target.closest('.formula-item');
         
        
    //     // if (target) {
    //     //     target.classList.add('tooltip-active');
    //     //     let tooltipHtml = target.querySelector('.formula-item-popup');
    //     //     const coords = tooltipHtml.getBoundingClientRect();
    //     //     if (coords.top < 0) { 
    //     //         target.classList.add('to-bottom');
    //     //     } 
    //     // }

    // });

    
};

export default tooltip;
