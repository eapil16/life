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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePhone */ \"./src/modules/togglePhone.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip */ \"./src/modules/tooltip.js\");\n/* harmony import */ var _modules_tabsWorking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tabsWorking */ \"./src/modules/tabsWorking.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./src/modules/sliderReviews.js\");\n/* harmony import */ var _modules_getDataBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/getDataBase */ \"./src/modules/getDataBase.js\");\n/* harmony import */ var _modules_viewsRepairs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/viewsRepairs */ \"./src/modules/viewsRepairs.js\");\n/* harmony import */ var _modules_contract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/contract */ \"./src/modules/contract.js\");\n/* harmony import */ var _modules_problems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/problems */ \"./src/modules/problems.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  (0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_modules_tooltip__WEBPACK_IMPORTED_MODULE_6__.default)();\n  (0,_modules_tabsWorking__WEBPACK_IMPORTED_MODULE_7__.default)();\n  (0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_8__.default)();\n  (0,_modules_getDataBase__WEBPACK_IMPORTED_MODULE_9__.default)();\n  (0,_modules_viewsRepairs__WEBPACK_IMPORTED_MODULE_10__.default)();\n  (0,_modules_contract__WEBPACK_IMPORTED_MODULE_11__.default)();\n  (0,_modules_problems__WEBPACK_IMPORTED_MODULE_12__.default)();\n  var carousel = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_5__.default({\n    main: '#partners .wrapper',\n    wrap: '.partners-slider',\n    prev: '#partners-arrow_left',\n    next: '#partners-arrow_right',\n    slidesToShow: 3,\n    infinity: true,\n    responsive: [{\n      breakpoint: 1200,\n      slidesToShow: 2\n    }, {\n      breakpoint: 768,\n      slidesToShow: 1\n    }]\n  });\n  carousel.init();\n});\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/problems.js":
/*!*********************************!*\
  !*** ./src/modules/problems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n // import sliderCarousel from '../modules/SliderCarousel';\n\nvar problems = function problems() {\n  var parent = document.getElementById('problems');\n  console.log('1: ', 1);\n  parent.addEventListener('mouseover', function (event) {\n    var toolId = 0;\n    var target = event.target.closest('.problems-item');\n    console.log('target: ', target);\n\n    if (target) {\n      console.log('target: ', target);\n      target.classList.add('problems-item__active');\n      var value = target.querySelector('.formula-item__icon-inner-text').textContent;\n      var qweerty = target.querySelector('.problems-item-popup');\n      toolId = qweerty.className;\n      var lastChar = toolId.substr(toolId.length - 2);\n      var block = parent.querySelector('.wrapper_middle');\n      var tools = block.querySelectorAll('.problems-item-popup');\n      tools.forEach(function (element) {\n        if (element.className.substr(toolId.length - 2) === lastChar) {\n          element.classList.add('problems-active');\n          var coords = element.getBoundingClientRect();\n\n          if (coords.top < 0) {\n            element.classList.add('to-bottom');\n          }\n        } else {\n          element.classList.remove('to-bottom');\n          element.classList.remove('problems-active');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (problems);\n\n//# sourceURL=webpack://diplom/./src/modules/problems.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "e47dd4d8ea97ba8460f6"
/******/ 	})();
/******/ 	
/******/ }
);