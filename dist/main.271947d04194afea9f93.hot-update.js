/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/togglePhone.js":
/*!************************************!*\
  !*** ./src/modules/togglePhone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar togglePhone = function togglePhone() {\n  var arrow = document.querySelector('.header-contacts__arrow'),\n      target = document.querySelector('.header-contacts__phone-number-accord');\n\n  var toggle = function toggle(data) {\n    data.classList.toggle('show-phone');\n  };\n\n  arrow.addEventListener('click', function (event) {\n    event.target.style.transform = 'rotate(-180deg)';\n    toggle(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePhone);\n\n//# sourceURL=webpack://diplom/./src/modules/togglePhone.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "bfaca5042e5cda56694d"
/******/ 	})();
/******/ 	
/******/ }
);