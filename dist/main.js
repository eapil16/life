(()=>{"use strict";var e,t,c,n,o;c=document.querySelector(".popup-dialog-menu"),n=document.querySelector(".menu"),o=document.querySelector(".close-menu"),n.addEventListener("click",(function(e){(e.target.closest(".menu__title")||e.target.closest(".menu__icon"))&&c.classList.add("show-menu")})),o.addEventListener("click",(function(){return c.classList.remove("show-menu")})),e=document.querySelector(".header-contacts__arrow"),t=document.querySelector(".header-contacts__phone-number-accord"),e.addEventListener("click",(function(e){t.classList.toggle("show-phone")}))})();