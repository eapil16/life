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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  document.onmouseover = function (event) {\n    var target = event.target.closest('.formula-item');\n\n    if (target) {\n      var tooltipHtml = target.querySelector('.formula-item-popup');\n      tooltipHtml.classList.add('tooltip-active');\n      var coords = tooltipHtml.getBoundingClientRect();\n\n      if (coords.top < 0) {\n        target.classList.add('to-bottom');\n      }\n    }\n  };\n\n  document.onmouseout = function (event) {\n    var target = event.target.closest('.formula-item');\n\n    if (target) {\n      var targetBottom = target.closest('.to-bottom');\n      console.log('event.relatedTarget: ', event.relatedTarget);\n    } // if (tooltipHtml) {\n    // //   tooltipElem.remove();\n    // //   tooltipElem = null;\n    // }\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d5459094ed93b3373f1a"
/******/ 	})();
/******/ 	
/******/ }
);