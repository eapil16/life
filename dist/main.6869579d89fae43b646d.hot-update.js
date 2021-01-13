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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar smoothScrolling = function smoothScrolling() {\n  var body = document.querySelector('body'),\n      menu = document.querySelector('.popup-dialog-menu'),\n      window = document.querySelector('.popup-repair-types');\n  var popupShow;\n\n  var smoothscroll = function smoothscroll(target) {\n    document.querySelector(target).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  };\n\n  var popupShowAnimate = function popupShowAnimate() {\n    popupShow = requestAnimationFrame(popupShowAnimate);\n    count += 0.03;\n\n    if (count < 1) {\n      popup.style.opacity = count;\n    } else {\n      cancelAnimationFrame(popupShow);\n    }\n\n    if (document.documentElement.clientWidth < 768) {\n      cancelAnimationFrame(popupShow);\n      popup.style.opacity = 1;\n    }\n  };\n\n  body.addEventListener('click', function () {\n    event.preventDefault();\n    var target = event.target.closest('body a'),\n        link = event.target.closest('.link-list');\n\n    if (target) {\n      var toTarget = target.getAttribute('href');\n\n      if (toTarget && toTarget[0] === '#' && toTarget.length > 1) {\n        menu.classList.remove('show-menu');\n        smoothscroll(toTarget);\n      }\n    }\n\n    if (link) {\n      menu.classList.remove('show-menu');\n      window.classList.add('block-visibility');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScrolling.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a409bc034c16800d7322"
/******/ 	})();
/******/ 	
/******/ }
);