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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  document.onmouseover = function (event) {\n    var target = event.target.closest('.formula-item');\n\n    if (target) {\n      console.log('target: ', target);\n      console.log('наше');\n      var tooltipHtml = target.querySelector('.formula-item-popup');\n      console.log('tooltipHtml: ', tooltipHtml);\n\n      if (!tooltipHtml) {\n        return;\n      }\n\n      var tooltipElem = document.createElement('div'); // tooltipElem.className = 'tooltip';\n      // tooltipElem.innerHTML = tooltipHtml;\n      // document.body.append(tooltipElem);\n\n      tooltipHtml.classList.add('block-visibility');\n      var coords = tooltipHtml.getBoundingClientRect();\n      console.log('coords: ', coords);\n      var left = coords.left + (event.target.offsetWidth - tooltipElem.offsetWidth) / 2;\n      if (left < 0) left = 0; // не заезжать за левый край окна\n    } // если у нас есть подсказка...\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "6bfa39f878e0052f728f"
/******/ 	})();
/******/ 	
/******/ }
);