/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar accordion = function accordion() {\n  var accordion = document.querySelector('.accordion'),\n      list = accordion.querySelectorAll('li');\n\n  var addClassActive = function addClassActive(data) {\n    list.forEach(function (element) {\n      if (element.querySelector('h2').textContent.trim() === data.textContent.trim()) {\n        element.classList.add('tabs-active');\n        element.querySelector('h2').classList.add('msg-active');\n      } else {\n        element.classList.remove('tabs-active');\n        element.querySelector('h2').classList.remove('msg-active');\n      }\n    });\n  };\n\n  accordion.addEventListener('click', function (event) {\n    if (event.target.closest('.title_block')) {\n      console.log('event.target.closest(li): ', event.target.closest('li'));\n      addClassActive(event.target.closest('li h2'));\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://diplom/./src/modules/accordion.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d9fa545d4b5a78b404b0"
/******/ 	})();
/******/ 	
/******/ }
);