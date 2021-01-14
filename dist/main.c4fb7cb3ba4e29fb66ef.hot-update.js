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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  // document.onmouseover = function(event) {\n  //     const  target = event.target.closest('.formula-item');\n  //     if (target) {\n  //         console.log('target: ', target);\n  //         console.log('наше');\n  //         let tooltipHtml = target.querySelector('.formula-item-popup');\n  //         console.log('tooltipHtml: ', tooltipHtml);\n  //         if (!tooltipHtml) {return; }\n  //         const tooltipElem = document.createElement('div');\n  //         // tooltipElem.className = 'tooltip';\n  //         // tooltipElem.innerHTML = tooltipHtml;\n  //         // document.body.append(tooltipElem);\n  //         tooltipHtml.classList.add('block-visibility');\n  //         let coords = tooltipHtml.getBoundingClientRect();\n  //         console.log('coords: ', coords);\n  //         let left = coords.left + (event.target.offsetWidth - tooltipHtml.offsetWidth) / 2;\n  //         console.log('left: ', left);\n  //         if (left < 0) {left = 0;} // не заезжать за левый край окна\n  //         let top = coords.top - tooltipElem.offsetHeight - 5;\n  //         if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу\n  //           top = coords.top + event.target.offsetHeight + 5;\n  //         }\n  //         tooltipHtml.style.left = left + 'px';\n  //         tooltipHtml.style.top = top + 'px';\n  //     }\n  //     // если у нас есть подсказка...\n  // }\n  var tooltipElem;\n\n  document.onmouseover = function (event) {\n    var target = event.target; // если у нас есть подсказка...\n\n    var tooltipHtml = target.dataset.tooltip;\n    if (!tooltipHtml) return; // ...создадим элемент для подсказки\n\n    tooltipElem = document.createElement('div');\n    tooltipElem.className = 'tooltip';\n    tooltipElem.innerHTML = tooltipHtml;\n    document.body.append(tooltipElem); // спозиционируем его сверху от аннотируемого элемента (top-center)\n\n    var coords = target.getBoundingClientRect();\n    var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;\n    if (left < 0) left = 0; // не заезжать за левый край окна\n\n    var top = coords.top - tooltipElem.offsetHeight - 5;\n\n    if (top < 0) {\n      // если подсказка не помещается сверху, то отображать её снизу\n      top = coords.top + target.offsetHeight + 5;\n    }\n\n    tooltipElem.style.left = left + 'px';\n    tooltipElem.style.top = top + 'px';\n  };\n\n  document.onmouseout = function (e) {\n    if (tooltipElem) {\n      tooltipElem.remove();\n      tooltipElem = null;\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "764557893977f0c2ba6e"
/******/ 	})();
/******/ 	
/******/ }
);