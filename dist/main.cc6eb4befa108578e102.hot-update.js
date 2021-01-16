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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar slidenInWindow = function slidenInWindow() {\n  var modalBlock = document.querySelector('.popup-portfolio'),\n      parent = document.getElementById('portfolio'),\n      textBlocks = modalBlock.querySelectorAll('.popup-portfolio-text');\n  parent.addEventListener('click', function (event) {\n    if (event.target.closest('.portfolio-slider__slide-frame')) {\n      modalBlock.classList.add('block-visibility');\n    }\n  });\n  console.log('parent: ', parent);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidenInWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/slidenInWindow.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "33e2a512a868f5770b62"
/******/ 	})();
/******/ 	
/******/ }
);