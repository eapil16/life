/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/slidenInWindow.js":
/*!***************************************!*\
  !*** ./src/modules/slidenInWindow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar slidenInWindow = function slidenInWindow() {\n  var modalBlock = document.querySelector('.popup-portfolio'),\n      parent = document.getElementById('portfolio'),\n      textBlocks = modalBlock.querySelectorAll('.popup-portfolio-text'),\n      counterBlock = document.getElementById('popup-portfolio-counter'),\n      content = counterBlock.querySelector('.slider-counter-content__current'),\n      total = counterBlock.querySelector('.slider-counter-content__total');\n\n  var sliderPortfolioPopup = function sliderPortfolioPopup() {\n    var slide = document.querySelectorAll('.popup-portfolio-slider__slide'); // firstSlideItem = document.querySelector('.repair-types-slider__slide');\n    // firstSlideItem.classList.add('active');\n\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n    console.log('slide: ', slide);\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    modalBlock.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      if (!event.target.closest('.slider-arrow')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n\n      if (event.target.closest('#repair-types-arrow_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#repair-types-arrow_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n    });\n  };\n\n  parent.addEventListener('click', function (event) {\n    if (event.target.closest('.portfolio-slider__slide-frame')) {\n      modalBlock.classList.add('block-visibility');\n      sliderPortfolioPopup();\n    }\n  });\n  console.log('parent: ', parent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidenInWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/slidenInWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "2a2fc4a7a24e38c67652"
/******/ 	})();
/******/ 	
/******/ }
);