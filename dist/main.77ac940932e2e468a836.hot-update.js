/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/tabsWorking.js":
/*!************************************!*\
  !*** ./src/modules/tabsWorking.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tabsWorking = function tabsWorking() {\n  var navTabsTarent = document.getElementById('scheme-list'),\n      navTabs = navTabsTarent.querySelectorAll('.button_o'),\n      navContentTarent = document.querySelectorAll('.scheme-slider__slide');\n  navTabs.forEach(function (elem, index) {\n    elem.setAttribute('data-tab', ++index);\n  });\n  navContentTarent.forEach(function (elem, index) {\n    elem.setAttribute('data-tab-content', ++index);\n  });\n  navTabsTarent.addEventListener('click', function (event) {\n    var target = event.target.closest('.button_o ');\n\n    if (target) {\n      var value = target.getAttribute('data-tab-content');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsWorking);\n\n//# sourceURL=webpack://diplom/./src/modules/tabsWorking.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "cb1f0354b36bebe932b4"
/******/ 	})();
/******/ 	
/******/ }
);