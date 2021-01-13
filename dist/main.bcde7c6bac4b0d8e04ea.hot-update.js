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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePhone */ \"./src/modules/togglePhone.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./src/modules/sliderReviews.js\");\n\n\n\n\n\n\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_togglePhone__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var maskPhone = function maskPhone(selector) {\n    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n    var elems = document.querySelectorAll(\".\".concat(selector));\n\n    function mask(event) {\n      var keyCode = event.keyCode;\n      var template = masked,\n          def = template.replace(/\\D/g, \"\"),\n          val = this.value.replace(/\\D/g, \"\");\n      var i = 0,\n          newValue = template.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n      i = newValue.indexOf(\"_\");\n\n      if (i !== -1) {\n        newValue = newValue.slice(0, i);\n      }\n\n      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n        return \"\\\\d{1,\" + a.length + \"}\";\n      }).replace(/[+()]/g, \"\\\\$&\");\n      reg = new RegExp(\"^\" + reg + \"$\");\n\n      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n        this.value = newValue;\n      }\n\n      if (event.type === \"blur\" && this.value.length < 5) {\n        this.value = \"\";\n      }\n    }\n\n    var _iterator = _createForOfIteratorHelper(elems),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var elem = _step.value;\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  maskPhone('feedback__input-input');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderReviews.js":
/*!**************************************!*\
  !*** ./src/modules/sliderReviews.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar sliderReviews = function sliderReviews() {\n  console.log('1');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderReviews);\n\n//# sourceURL=webpack://diplom/./src/modules/sliderReviews.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar smoothScrolling = function smoothScrolling() {\n  var body = document.querySelector('body'),\n      menu = document.querySelector('.popup-dialog-menu'),\n      windowList = document.querySelector('.popup-repair-types'),\n      popupPrivacy = document.querySelector('.popup-privacy'),\n      popupnWide = document.querySelector('.popup-consultation');\n\n  var smoothscroll = function smoothscroll(target) {\n    document.querySelector(target).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  };\n\n  body.addEventListener('click', function () {\n    event.preventDefault();\n    var target = event.target.closest('body a');\n\n    if (target) {\n      var toTarget = target.getAttribute('href');\n\n      if (toTarget && toTarget[0] === '#' && toTarget.length > 1) {\n        menu.classList.remove('show-menu');\n        smoothscroll(toTarget);\n      }\n    }\n\n    if (event.target.closest('.link-list')) {\n      menu.classList.remove('show-menu');\n      windowList.classList.add('block-visibility');\n    }\n\n    if (event.target.closest('.link-privacy')) {\n      popupPrivacy.classList.add('block-visibility');\n    }\n\n    if (event.target.closest('.button_wide')) {\n      popupnWide.classList.add('block-visibility');\n    }\n\n    if (event.target.closest('.close')) {\n      windowList.classList.remove('block-visibility');\n      popupPrivacy.classList.remove('block-visibility');\n      popupnWide.classList.remove('block-visibility');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://diplom/./src/modules/smoothScrolling.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('.popup-dialog-menu'),\n      menuBtn = document.querySelector('.menu'),\n      closeMenu = document.querySelector('.close-menu');\n  menuBtn.addEventListener('click', function (event) {\n    if (event.target.closest('.menu__title') || event.target.closest('.menu__icon')) {\n      menu.classList.add('show-menu');\n    }\n  });\n  closeMenu.addEventListener('click', function () {\n    return menu.classList.remove('show-menu');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://diplom/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePhone.js":
/*!************************************!*\
  !*** ./src/modules/togglePhone.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar togglePhone = function togglePhone() {\n  var arrow = document.querySelector('.header-contacts__arrow'),\n      target = document.querySelector('.header-contacts__phone-number-accord');\n\n  var toggle = function toggle(tagtet) {\n    tagtet.classList.toggle('show-phone');\n  };\n\n  arrow.addEventListener('click', function (event) {\n    toggle(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePhone);\n\n//# sourceURL=webpack://diplom/./src/modules/togglePhone.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a67888759deb12bf4de3"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ }
);