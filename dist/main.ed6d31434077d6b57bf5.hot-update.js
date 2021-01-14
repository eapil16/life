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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  document.onmouseover = function (event) {\n    var target = event.target.closest('.formula-item');\n\n    if (target) {\n      var tooltipHtml = target.querySelector('.formula-item-popup'); // if (!tooltipHtml) {return;}\n\n      tooltipHtml.classList.add('tooltip-active');\n      var coords = tooltipHtml.getBoundingClientRect();\n      console.log('coords.top: ', coords.top);\n\n      if (coords.top < 0) {\n        // если подсказка не помещается сверху, то отображать её снизу\n        console.log(target);\n        target.classList.add('to-bottom');\n      } // tooltipHtml.style.top = top + 'px';\n\n    } // если у нас есть подсказка...\n\n  };\n\n  document.onmouseout = function (event) {\n    var target = event.target; // const  target = event.target.closest('.tooltip-active');\n\n    console.log('target: ', target);\n\n    if (target) {\n      console.log('target: ', target);\n    } // if (tooltipHtml) {\n    // //   tooltipElem.remove();\n    // //   tooltipElem = null;\n    // }\n\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "aa8bce698d88c617acb7"
/******/ 	})();
/******/ 	
/******/ }
);