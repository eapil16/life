/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/designSolutions.js":
/*!****************************************!*\
  !*** ./src/modules/designSolutions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar designSolutions = function designSolutions() {\n  var navTabsTarent = document.getElementById('designs'),\n      navTabs = navTabsTarent.querySelectorAll('.button_o'),\n      navContentTarent = document.querySelectorAll('.designs-slider__item'),\n      preview = navTabsTarent.querySelectorAll('.preview-block'),\n      counterBlock = document.getElementById('designs-counter'),\n      content = counterBlock.querySelector('.slider-counter-content__current'),\n      total = counterBlock.querySelector('.slider-counter-content__total');\n  navTabs.forEach(function (elem, index) {\n    elem.setAttribute('data-tab', ++index);\n  });\n  navContentTarent.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('active-tab');\n    }\n\n    elem.setAttribute('data-tab-content', ++index);\n  });\n  preview.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('visible');\n    }\n\n    elem.setAttribute('data-tab-preview', ++index);\n  });\n\n  var sliderRepair = function sliderRepair(element, dots) {\n    var dot = dots.querySelectorAll('.preview-block__item');\n    var slide = element.querySelectorAll('.designs-slider__style-slide'),\n        firstSlideItem = element.querySelector('.designs-slider__style-slide');\n    firstSlideItem.classList.add('active');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    navTabsTarent.addEventListener('click', function (event) {\n      event.preventDefault();\n      var targetButt = !event.target.closest('.slider-arrow-tablet-mobile');\n      var tagterDot = !event.target.closest('.preview-block__item');\n\n      if (tagterDot && targetButt) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n      prevSlide(dot, currentSlide, 'preview_active');\n\n      if (event.target.closest('#design_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#design_left')) {\n        currentSlide--;\n      } else if (!tagterDot) {\n        dot.forEach(function (elem, index) {\n          if (elem.querySelector('.preview-block__item-inner').textContent === event.target.textContent) {\n            currentSlide = index;\n          }\n        });\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n      nextSlide(dot, currentSlide, 'preview_active');\n    });\n  };\n\n  var firstSlide = navTabsTarent.querySelector('.designs-slider__style1'),\n      firstDots = navTabsTarent.querySelector('.preview-block');\n  firstSlide.classList.add('active-tab');\n  firstDots.classList.add('preview_active');\n  sliderRepair(firstSlide, firstDots);\n  navTabsTarent.addEventListener('click', function (event) {\n    var target = event.target.closest('.button_o');\n\n    if (target) {\n      var value = target.getAttribute('data-tab');\n      navContentTarent.forEach(function (elem, index) {\n        if (value.trim() === elem.getAttribute('data-tab-content').trim()) {\n          elem.classList.add('active-tab');\n          navTabs[index].classList.add('active');\n          preview[index].classList.add('visible');\n          sliderRepair(elem, preview[index]);\n        } else {\n          elem.classList.remove('active-tab');\n          navTabs[index].classList.remove('active');\n          preview[index].classList.remove('visible');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (designSolutions);\n\n//# sourceURL=webpack://diplom/./src/modules/designSolutions.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "2178c61f6b191cf16677"
/******/ 	})();
/******/ 	
/******/ }
);