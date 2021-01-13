/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar smoothScrolling = function smoothScrolling() {\n  // const parent = document.querySelector('.popup-dialog-menu'),\n  var body = document.querySelector('body'),\n      menu = document.querySelector('.popup-dialog-menu');\n  console.log('parent: ', parent);\n\n  var smoothscroll = function smoothscroll(target) {\n    event.preventDefault();\n    document.querySelector(toBlock).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  }; // parent.addEventListener('click', () => {\n  //     const target = event.target,   \n  //     footerBtn = target.closest('.button-footer'), \n  //     linkTo = target.closest('.popup-menu-nav a');\n  //     console.log('footerBtn: ', footerBtn);\n  //     if (linkTo) {\n  //         menu.classList.remove('show-menu');\n  //         smoothscroll(linkTo);\n  //     } \n  // });\n\n\n  body.addEventListener('click', function () {\n    var target = event.target,\n        // footerBtn = target.closest('.button-footer'), \n    linkTo = target.closest('body a'); // console.log('footerBtn: ', footerBtn);\n\n    if (linkTo) {\n      menu.classList.remove('show-menu');\n      smoothscroll(linkTo);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScrolling.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "321034312b983c0d9c4e"
/******/ 	})();
/******/ 	
/******/ }
);