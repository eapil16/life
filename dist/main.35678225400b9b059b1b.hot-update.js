/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/portfolioSliderMobile.js":
/*!**********************************************!*\
  !*** ./src/modules/portfolioSliderMobile.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar portfolioSliderMobile = function portfolioSliderMobile() {\n  var sliderMobile = function sliderMobile() {\n    var slide = document.querySelectorAll('.portfolio-slider__slide-frame__image'),\n        slideText = document.querySelector('.portfolio-slider__slide-frame__image'),\n        counterBlock = document.getElementById('portfolio-counter'),\n        content = counterBlock.querySelector('.slider-counter-content__current'),\n        parent = document.getElementById('portfolio'),\n        total = counterBlock.querySelector('.slider-counter-content__total'),\n        popupРortfolio = document.querySelector('.popup-portfolio');\n    slideText.classList.add('active');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    parent.addEventListener('click', function (event) {\n      event.preventDefault();\n      var targetImage = event.target.closest('.portfolio-slider__slide-frame__image');\n\n      if (targetImage) {\n        popupРortfolio.classList.add('block-visibility');\n        var popupBlock = popupРortfolio.querySelector('.popup-dialog-portfolio');\n        console.log('popupBlock: ', popupBlock); // popupBlock.textContent = targetImage;\n      }\n\n      if (!event.target.closest('.slider-arrow-tablet-mobile')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n\n      if (event.target.closest('#portfolio-arrow-mobile_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#portfolio-arrow-mobile_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n    });\n  };\n\n  var widthWindow = document.documentElement.clientWidth;\n\n  if (widthWindow < 576) {\n    sliderMobile();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioSliderMobile);\n\n//# sourceURL=webpack://diplom/./src/modules/portfolioSliderMobile.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "61ffd3667a5679a04a9b"
/******/ 	})();
/******/ 	
/******/ }
);