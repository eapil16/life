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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var popup = document.querySelector('.popup');\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n  var preload = document.createElement('div');\n  preload.classList.add('preloader');\n  preload.innerHTML = '<div class=\"preloader__row\">' + '<div class=\"preloader__item\"></div>' + '<div class=\"preloader__item\"></div>' + '</div>';\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var sendData = function sendData(form) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    var flag = true;\n    form.appendChild(preload);\n    statusMessage.textContent = '';\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      if (val.trim() !== '') {\n        body[key] = val;\n      } else {\n        flag = false;\n      }\n    });\n\n    if (flag) {\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('Error network not 200');\n        }\n\n        preload.remove();\n        statusMessage.textContent = successMessage;\n        form.reset();\n        setTimeout(function () {\n          statusMessage.remove();\n        }, 3000);\n      }, function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = \"Ошибка при отправке\";\n        console.error(error);\n      });\n    } else {\n      preload.remove();\n      statusMessage.textContent = 'Заполните все поля формы';\n    }\n  };\n\n  var maskPhone = function maskPhone(selector) {\n    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n    var elems = document.querySelectorAll(\".\".concat(selector));\n\n    function mask(event) {\n      var keyCode = event.keyCode;\n      var template = masked,\n          def = template.replace(/\\D/g, \"\"),\n          val = this.value.replace(/\\D/g, \"\");\n      var i = 0,\n          newValue = template.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n      i = newValue.indexOf(\"_\");\n\n      if (i !== -1) {\n        newValue = newValue.slice(0, i);\n      }\n\n      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n        return \"\\\\d{1,\" + a.length + \"}\";\n      }).replace(/[+()]/g, \"\\\\$&\");\n      reg = new RegExp(\"^\" + reg + \"$\");\n\n      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n        this.value = newValue;\n      }\n\n      if (event.type === \"blur\" && this.value.length < 5) {\n        this.value = \"\";\n      }\n    }\n\n    var _iterator = _createForOfIteratorHelper(elems),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var elem = _step.value;\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  maskPhone('feedback__input-input');\n  maskPhone('feedback-block__form-input_phone');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://diplom/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "51dafb6ffc8abbd7c72f"
/******/ 	})();
/******/ 	
/******/ }
);