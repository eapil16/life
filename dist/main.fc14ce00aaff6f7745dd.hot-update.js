/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/disignerPopup.js":
/*!**************************************!*\
  !*** ./src/modules/disignerPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar disignerPopup = function disignerPopup() {\n  var navTabsTarent = document.querySelector('.popup-design'),\n      navTabs = navTabsTarent.querySelectorAll('.button_o'),\n      navContentTarent = document.querySelectorAll('.popup-slider'),\n      textTabs = navTabsTarent.querySelectorAll('.popup-design-text');\n  console.log('navTabsTarent: ', navTabsTarent);\n  navTabs.forEach(function (elem, index) {\n    elem.setAttribute('data-tab', ++index);\n  });\n  navContentTarent.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('active-tab');\n    }\n\n    elem.setAttribute('data-tab-content', ++index);\n  });\n  textTabs.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('active');\n    }\n\n    elem.setAttribute('data-tab-text', ++index);\n  });\n  navTabsTarent.addEventListener('click', function (event) {\n    var target = event.target.closest('.button_o');\n\n    if (target) {\n      var value = target.getAttribute('data-tab');\n      navContentTarent.forEach(function (elem, index) {\n        if (value.trim() === elem.getAttribute('data-tab-content').trim()) {\n          elem.classList.add('active-tab');\n          navTabs[index].classList.add('active'); // preview[index].classList.add('visible');\n          // sliderRepair(elem, preview[index]);\n        } else {\n          elem.classList.remove('active-tab');\n          navTabs[index].classList.remove('active'); // preview[index].classList.remove('visible');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disignerPopup);\n\n//# sourceURL=webpack://diplom/./src/modules/disignerPopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d17a952d4c9a2cc08f62"
/******/ 	})();
/******/ 	
/******/ }
);