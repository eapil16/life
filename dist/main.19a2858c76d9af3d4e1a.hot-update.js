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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePhone */ \"./src/modules/togglePhone.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_showModalList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showModalList */ \"./src/modules/showModalList.js\");\n\n\n\n\n\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_showModalList__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar smoothScrolling = function smoothScrolling() {\n  var body = document.querySelector('body'),\n      menu = document.querySelector('.popup-dialog-menu'),\n      windowList = document.querySelector('.popup-repair-types');\n\n  var smoothscroll = function smoothscroll(target) {\n    document.querySelector(target).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  };\n\n  body.addEventListener('click', function () {\n    event.preventDefault();\n    var target = event.target.closest('body a');\n\n    if (target) {\n      var toTarget = target.getAttribute('href');\n\n      if (toTarget && toTarget[0] === '#' && toTarget.length > 1) {\n        menu.classList.remove('show-menu');\n        smoothscroll(toTarget);\n      }\n    }\n\n    if (event.target.closest('.link-list')) {\n      menu.classList.remove('show-menu');\n      windowList.classList.add('block-visibility');\n    }\n\n    if (event.target.closest('.close')) {\n      windowList.classList.remove('block-visibility');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScrolling.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "471d28216de58cd13890"
/******/ 	})();
/******/ 	
/******/ }
);