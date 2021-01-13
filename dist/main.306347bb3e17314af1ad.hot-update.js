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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePhone */ \"./src/modules/togglePhone.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\n\n\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)();\nvar carousel = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_4__.default({\n  main: '#partners .wrapper',\n  wrap: '.partners-slider',\n  prev: '#partners-arrow_left',\n  next: '#partners-arrow_right',\n  slidesToShow: 3,\n  infinity: true,\n  responsive: [{\n    breakpoint: 1200,\n    slidesToShow: 3\n  }, {\n    breakpoint: 768,\n    slidesToShow: 2\n  }, {\n    breakpoint: 576,\n    slidesToShow: 1\n  }]\n});\ncarousel.init();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "0555e66dde64a864063d"
/******/ 	})();
/******/ 	
/******/ }
);