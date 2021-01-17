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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar slidenInWindow = function slidenInWindow() {\n  var modalBlock = document.querySelector('.popup-portfolio'),\n      parent = document.getElementById('portfolio'),\n      counterBlock = document.getElementById('popup-portfolio-counter'),\n      content = counterBlock.querySelector('.slider-counter-content__current'),\n      total = counterBlock.querySelector('.slider-counter-content__total'),\n      popupРortfolio = document.querySelector('.popup-portfolio');\n  var currentSmallSlide = document.querySelectorAll('.portfolio-slider__slide-frame');\n  currentSmallSlide.forEach(function (elem, index) {\n    elem.setAttribute('slider-tab', index);\n  });\n\n  var sliderPortfolioPopup = function sliderPortfolioPopup(item) {\n    var getElementToSlide = document.querySelector('.active-get');\n\n    if (getElementToSlide) {\n      getElementToSlide.classList.remove('active-get');\n      getElementToSlide.classList.remove('active');\n    }\n\n    var slide = document.querySelectorAll('.popup-portfolio-slider__slide'),\n        slideText = modalBlock.querySelectorAll('.popup-portfolio-text'),\n        firstSlideItem = document.querySelector('.popup-portfolio-slider__slide'),\n        firstSlideText = modalBlock.querySelector('.popup-portfolio-text');\n    slide.forEach(function (elem, index) {\n      elem.setAttribute('mobile-tab', index);\n    });\n    var targElem = item.getAttribute('slider-tab');\n    var firstSlide = slide[\"\".concat(targElem)];\n    firstSlide.classList.add('active');\n    firstSlide.classList.add('active-get'); // добавляем нужному блоку класс\n\n    firstSlideText.classList.add('active-text');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    modalBlock.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      if (!event.target.closest('.popup-arrow')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(slideText, currentSlide, 'active-text');\n\n      if (event.target.closest('#popup_portfolio_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#popup_portfolio_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(slideText, currentSlide, 'active-text');\n    });\n  };\n\n  parent.addEventListener('click', function (event) {\n    if (event.target.closest('.portfolio-slider__slide-frame')) {\n      modalBlock.classList.add('block-visibility');\n      sliderPortfolioPopup(event.target);\n    }\n\n    if (event.target.closest('.close')) {\n      modalBlock.classList.remove('block-visibility');\n    }\n\n    var targetImage = event.target.closest('.portfolio-slider__slide-frame__image');\n\n    if (targetImage) {\n      popupРortfolio.classList.add('block-visibility');\n      var popupBlock = popupРortfolio.querySelector('.popup-dialog-portfolio');\n      console.log('popupBlock: ', popupBlock); // popupBlock.textContent = targetImage;\n    }\n  });\n  modalBlock.addEventListener('click', function (event) {\n    if (event.target.closest('.close')) {\n      modalBlock.classList.remove('block-visibility');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidenInWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/slidenInWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d674ba51f5c1bcd1e785"
/******/ 	})();
/******/ 	
/******/ }
);