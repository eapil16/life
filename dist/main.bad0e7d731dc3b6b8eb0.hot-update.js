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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  var selector = 'formula-item';\n  console.log('selector: ', selector);\n  var parents = document.getElementById('formula'),\n      elements = parents.querySelectorAll('.formula-item');\n  console.log('element: ', elements);\n\n  parents.onmouseover = function (event) {//     const  target = event.target.closest('.formula-item');\n    //     if (target) {\n    //         let tooltipHtml = target.querySelector('.formula-item-popup');\n    //         tooltipHtml.classList.add('tooltip-active');\n    //         const coords = tooltipHtml.getBoundingClientRect();\n    //         if (coords.top < 0) { \n    //             target.classList.add('to-bottom');\n    //         } \n    //     }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "bb0b5874321eb130bf1c"
/******/ 	})();
/******/ 	
/******/ }
);