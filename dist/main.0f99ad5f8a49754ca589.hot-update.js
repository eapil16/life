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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar portfolioSliderMobile = function portfolioSliderMobile() {\n  var sliderPortfolioPopup = function sliderPortfolioPopup() {\n    var slide = document.querySelectorAll('.popup-portfolio-slider__slide'),\n        slideText = modalBlock.querySelectorAll('.popup-portfolio-text'),\n        firstSlideItem = document.querySelector('.popup-portfolio-slider__slide'),\n        firstSlideText = modalBlock.querySelector('.popup-portfolio-text');\n    firstSlideItem.classList.add('active');\n    firstSlideText.classList.add('active-text');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    modalBlock.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      if (!event.target.closest('.popup-arrow')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(slideText, currentSlide, 'active-text');\n\n      if (event.target.closest('#popup_portfolio_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#popup_portfolio_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(slideText, currentSlide, 'active-text');\n    });\n  };\n\n  var widthWindow = document.documentElement.clientWidth;\n\n  if (widthWindow < 576) {\n    sliderPortfolioPopup();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolioSliderMobile);\n\n//# sourceURL=webpack://diplom/./src/modules/portfolioSliderMobile.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a701fdb5fcdd98acaafa"
/******/ 	})();
/******/ 	
/******/ }
);