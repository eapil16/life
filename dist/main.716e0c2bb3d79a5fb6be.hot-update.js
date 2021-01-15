/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/getDataBase.js":
/*!************************************!*\
  !*** ./src/modules/getDataBase.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar getDataBase = function getDataBase() {\n  var targetList = document.querySelector('.nav-list-popup-repair'),\n      blockDate = document.querySelector('.popup-repair-types-content__head-date'),\n      blockConent = document.querySelector('.popup-repair-types-content-table-wrap');\n  console.log('targetList: ', targetList);\n  var objData;\n\n  var renderData = function renderData(dataBase) {\n    dataBase.forEach(function (element, index) {\n      if (element.title) {\n        var button = document.createElement('button');\n        button.classList.add('button_o');\n        button.classList.add('popup-repair-types-nav__item');\n        button.setAttribute('data-tab', index);\n        button.textContent = element.title;\n        targetList.append(button);\n      } else if (element.date) {\n        console.log('element.date: ', element.date);\n        blockDate.textContent = element.date;\n        console.log('blockDate: ', blockDate);\n      }\n    });\n    console.log('dataBase: ', dataBase);\n  };\n\n  fetch('./db/db.json').then(function (response) {\n    if (response.status !== 200) {\n      throw new Error('status network not 200');\n    }\n\n    return response.text();\n  }).then(function (data) {\n    objData = JSON.parse(data);\n    renderData(objData);\n  })[\"catch\"](function (error) {\n    return console.error(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataBase);\n\n//# sourceURL=webpack://diplom/./src/modules/getDataBase.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "5ca4f797ad74c5e06e8f"
/******/ 	})();
/******/ 	
/******/ }
);