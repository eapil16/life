/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/tooltip.js":
/*!********************************!*\
  !*** ./src/modules/tooltip.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\nvar tooltip = function tooltip() {\n  var parent = document.getElementById('formula');\n  parent.addEventListener('mouseover', function (event) {\n    var toolId = 0;\n    var target = event.target.closest('.formula-item');\n\n    if (target) {\n      target.classList.add('formula-item__active');\n      var value = target.querySelector('.formula-item__icon-inner-text').textContent;\n      var qweerty = target.querySelector('.formula-item-popup');\n      toolId = qweerty.className;\n      var lastChar = toolId.substr(toolId.length - 2);\n      var block = parent.querySelector('.wrapper_small');\n      var tools = block.querySelectorAll('.formula-item-popup');\n      tools.forEach(function (element) {\n        if (element.className.substr(toolId.length - 2) === lastChar) {\n          element.classList.add('tooltip-active');\n          var coords = element.getBoundingClientRect();\n\n          if (coords.top < 0) {\n            element.classList.add('to-bottom');\n          }\n        } else {\n          element.classList.remove('to-bottom');\n          element.classList.remove('tooltip-active');\n        }\n      });\n    }\n  });\n  parent.addEventListener('mouseout', function (event) {\n    var toolId = 0;\n    var target = event.target.closest('.formula-item');\n\n    if (target) {\n      var value = target.querySelector('.formula-item__icon-inner-text').textContent;\n      var qweerty = target.querySelector('.formula-item-popup');\n      toolId = qweerty.className;\n      var lastChar = toolId.substr(toolId.length - 2);\n      var block = parent.querySelector('.wrapper_small');\n      var tools = block.querySelectorAll('.formula-item-popup');\n      target.classList.remove('formula-item__active');\n      tools.forEach(function (element) {\n        if (element.className.substr(toolId.length - 2) === lastChar) {\n          element.classList.remove('tooltip-active');\n          var coords = element.getBoundingClientRect();\n\n          if (coords.top < 0) {\n            element.classList.remove('to-bottom');\n          }\n        } else {\n          element.classList.remove('to-bottom');\n          element.classList.remove('tooltip-active');\n        }\n      });\n    }\n  });\n\n  var showSlides = function showSlides() {\n    var contractTabs = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__.default({\n      main: '#transparency .transparency-slider-wrap',\n      wrap: '.transparency-slider',\n      prev: '#transparency-arrow_left',\n      next: '#transparency-arrow_right',\n      slidesToShow: 1,\n      infinity: true\n    });\n    contractTabs.init();\n  };\n\n  var widthWindow = document.documentElement.clientWidth;\n\n  if (widthWindow < 1024) {\n    showSlides();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "1c7b068e242eff30e47b"
/******/ 	})();
/******/ 	
/******/ }
);