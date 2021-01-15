'use strict';
const tooltip = () => {

   
    const parent = document.getElementById('formula');
   
        // elements = parent.querySelectorAll('.formula-item');
    parent.addEventListener('mouseover', function(event){
		let toolId = 0;
        const target = event.target;
        if (target.classList.contains('formula-item')) {
            const value = target.querySelector('.formula-item__icon-inner-text').textContent;
            console.log('value: ', value);
            const qweerty = target.querySelector('.formula-item-popup');
            toolId = qweerty.className;// если класс наш чилд, определяем его атрибут pos,чтоб точно такой же показать тултип
            console.log('toolId: ', toolId);

            var lastChar = toolId.substr(toolId.length - 2); // => "1"
            console.log('lastChar: ', lastChar);
        }
                // // перебираем тултипы
        const block = parent.querySelector('.wrapper_small');
        const tools = block.querySelectorAll('.formula-item-popup');
        console.log('tools: ', tools);
		for (let i = 0; i < tools.length; i++){
            let pos = tools[i].className.substr(toolId.length - 2);// смотрим у каждого атрибут pos
            console.log('tools[i]: ', tools[i]);
            if (pos !== lastChar && tools[i].style.display === "block")  {
                tools[i].style.display='none';
            }
			if (pos === lastChar && tools[i].style.display === "none") {
                tools[i].style.display='block';
            } 
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
