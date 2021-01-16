'use strict';
const toggleMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu'),
        menuBtn = document.querySelector('.menu'),
        closeMenu = document.querySelector('.close-menu'),
        footer = document.querySelector('.footer');
    
    menuBtn.addEventListener('click', (event) => {
        if (event.target.closest('.menu__title') || event.target.closest('.menu__icon')) {
            menu.classList.add('show-menu');
        }      
    });

    footer.addEventListener('click', (event) => {
        if (event.target.closest('.menu__icon')) {
            menu.classList.add('show-menu');
        }      
    });

    closeMenu.addEventListener('click', () => menu.classList.remove('show-menu'));
};

export default toggleMenu;