/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePhone */ \"./src/modules/togglePhone.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip */ \"./src/modules/tooltip.js\");\n/* harmony import */ var _modules_tabsWorking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tabsWorking */ \"./src/modules/tabsWorking.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./src/modules/sliderReviews.js\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  (0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_modules_tooltip__WEBPACK_IMPORTED_MODULE_6__.default)();\n  (0,_modules_tabsWorking__WEBPACK_IMPORTED_MODULE_7__.default)();\n  (0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_8__.default)();\n  var carousel = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_5__.default({\n    main: '#partners .wrapper',\n    wrap: '.partners-slider',\n    prev: '#partners-arrow_left',\n    next: '#partners-arrow_right',\n    slidesToShow: 3,\n    infinity: true,\n    responsive: [{\n      breakpoint: 1200,\n      slidesToShow: 2\n    }, {\n      breakpoint: 768,\n      slidesToShow: 1\n    }]\n  });\n  carousel.init();\n});\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/sliderReviews.js":
/*!**************************************!*\
  !*** ./src/modules/sliderReviews.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar sliderReviews = function sliderReviews() {\n  var slide = document.querySelectorAll('.reviews-slider__slide'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content'),\n      dotsUl = document.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval;\n\n  var gerDots = function gerDots() {\n    for (var i = 0; i < slide.length; i++) {\n      var dotBlock = document.createElement('li');\n      dotBlock.classList.add('dot');\n\n      if (i === 0) {\n        dotBlock.classList.add('dot-active');\n      }\n\n      dotsUl.append(dotBlock);\n    }\n  };\n\n  gerDots();\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderReviews);\n\n//# sourceURL=webpack://diplom/./src/modules/sliderReviews.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "bdba2a1c21b5dcfaa2fc"
/******/ 	})();
/******/ 	
/******/ }
);