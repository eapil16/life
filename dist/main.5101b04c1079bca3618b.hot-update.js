/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/problems.js":
/*!*********************************!*\
  !*** ./src/modules/problems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\nvar problems = function problems() {\n  var parent = document.getElementById('problems');\n  parent.addEventListener('mouseover', function (event) {\n    var toolId = 0;\n    var target = event.target.closest('.problems-item');\n\n    if (target) {\n      target.classList.add('problems-item__active');\n      var item = target.querySelector('.problems-item-popup');\n      toolId = item.className;\n      var lastChar = toolId.substr(toolId.length - 2);\n      var block = parent.querySelector('.wrapper_middle');\n      var tools = block.querySelectorAll('.problems-item-popup');\n      tools.forEach(function (element) {\n        if (element.className.substr(toolId.length - 2) === lastChar) {\n          element.classList.add('problems-active');\n          var coords = element.getBoundingClientRect();\n\n          if (coords.top < 0) {\n            element.classList.add('to-bottom');\n          }\n        } else {\n          element.classList.remove('to-bottom');\n          element.classList.remove('problems-active');\n        }\n      });\n    }\n  });\n  parent.addEventListener('mouseout', function (event) {\n    var toolId = 0;\n    var target = event.target.closest('.problems-item');\n\n    if (target) {\n      target.classList.remove('problems-item__active');\n      var item = target.querySelector('.problems-item-popup');\n      toolId = item.className;\n      var lastChar = toolId.substr(toolId.length - 2);\n      var block = parent.querySelector('.wrapper_middle');\n      var tools = block.querySelectorAll('.problems-item-popup');\n      tools.forEach(function (element) {\n        if (element.className.substr(toolId.length - 2) === lastChar) {\n          element.classList.remove('problems-active');\n          var coords = element.getBoundingClientRect();\n\n          if (coords.top < 0) {\n            element.classList.remove('to-bottom');\n          }\n        } else {\n          element.classList.remove('to-bottom');\n          element.classList.remove('problems-active');\n        }\n      });\n    }\n  });\n\n  var showSlides = function showSlides() {\n    var tooltipCarousel = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__.default({\n      main: '.problems-slider-wrap',\n      wrap: '.problems-slider',\n      prev: '#problems-arrow_left',\n      next: '#problems-arrow_right',\n      slidesToShow: 1,\n      infinity: true\n    });\n    tooltipCarousel.init();\n  };\n\n  var widthWindow = document.documentElement.clientWidth;\n\n  if (widthWindow < 1025) {// showSlides();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (problems);\n\n//# sourceURL=webpack://diplom/./src/modules/problems.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "289fa3e0c7032c312d26"
/******/ 	})();
/******/ 	
/******/ }
);