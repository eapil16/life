/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar sendForm = function sendForm() {\n  // const inputForm = document.querySelectorAll('.feedback__input-input');\n  // console.log('inputForm: ', inputForm);\n  var validPhone = function validPhone(item) {\n    console.log('item: ', item);\n    item.value = item.value.replace(/[^+0-9]/, '');\n  };\n\n  document.body.addEventListener('input', function (event) {\n    var targetName = event.target.closest('.feedback__input-input'); // console.log('targetName: ', targetName);\n\n    if (targetName) {\n      validPhone(targetName);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c7b9ba3c6977804cf02d"
/******/ 	})();
/******/ 	
/******/ }
);