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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  // const inputForm = document.querySelectorAll('.feedback__input-input');\n  // console.log('inputForm: ', inputForm);\n  function maskPhone(selector) {\n    var _this = this;\n\n    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (__) --';\n    console.log('masked: ', masked);\n    console.log('selector: ', selector); // const elems = document.querySelectorAll(`.${selector}`);\n\n    var elems = document.querySelectorAll(selector);\n    console.log('elems: ', elems);\n\n    var mask = function mask(event) {\n      console.log('event: ', event);\n      var keyCode = event.keyCode;\n      console.log('keyCode: ', keyCode);\n\n      var template = masked,\n          def = template.replace(/\\D/g, \"\"),\n          val = _this.value.replace(/\\D/g, \"\");\n\n      console.log(template);\n      var i = 0,\n          newValue = template.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n      i = newValue.indexOf(\"_\");\n\n      if (i !== -1) {\n        newValue = newValue.slice(0, i);\n      }\n\n      var reg = template.substr(0, _this.value.length).replace(/_+/g, function (a) {\n        return \"\\\\d{1,\" + a.length + \"}\";\n      }).replace(/[+()]/g, \"\\\\$&\");\n      reg = new RegExp(\"^\" + reg + \"$\");\n\n      if (!reg.test(_this.value) || _this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n        _this.value = newValue;\n      }\n\n      if (event.type === \"blur\" && _this.value.length < 5) {\n        _this.value = \"\";\n      }\n    };\n\n    var _iterator = _createForOfIteratorHelper(elems),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var elem = _step.value;\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } // maskPhone('feedback__input-input');\n\n\n  document.body.addEventListener('input', function (event) {\n    var targetName = event.target.closest('.feedback__input-input');\n    console.log('targetName: ', targetName);\n\n    if (targetName) {\n      maskPhone('feedback__input-input');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "acdeab9790c801d49b2d"
/******/ 	})();
/******/ 	
/******/ }
);