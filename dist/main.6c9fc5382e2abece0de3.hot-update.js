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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar getDataBase = function getDataBase() {\n  var targetList = document.querySelector('.nav-list-popup-repair'),\n      blockDate = document.querySelector('.popup-repair-types-content__head-date'),\n      blockConent = document.querySelector('.popup-repair-types-content-table');\n  var objData;\n\n  var renderData = function renderData(dataBase) {\n    dataBase.forEach(function (element, index) {\n      if (element.title) {\n        var button = document.createElement('button');\n        button.classList.add('button_o');\n        button.classList.add('popup-repair-types-nav__item');\n\n        if (index === 1) {\n          button.classList.add('active');\n        }\n\n        button.setAttribute('data-tab', index);\n        button.textContent = element.title;\n        targetList.append(button);\n      } else if (element.date) {\n        blockDate.textContent = element.date;\n      }\n\n      var table = document.createElement('table');\n      table.classList.add('popup-repair-types-content-table__list');\n\n      if (element.priceList) {\n        element.priceList.forEach(function (item, index) {\n          var tr = document.createElement('tr');\n          tr.classList.add('mobile-row');\n          tr.innerHTML = \"\\n                        <td class=\\\"repair-types-name\\\">\".concat(item.typeService, \"</td>\\n                        <td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0415\\u0434.\\u0438\\u0437\\u043C\\u0435\\u0440\\u0435\\u043D\\u0438\\u044F</td>\\n                        <td class=\\\"mobile-col-title tablet-hide desktop-hide\\\">\\u0426\\u0435\\u043D\\u0430 \\u0437\\u0430 \\u0435\\u0434.</td>\\n                        <td class=\\\"repair-types-value\\\">\").concat(item.units, \"</td>\\n                        <td class=\\\"repair-types-value\\\">\").concat(item.cost, \"</td>\\n                    \");\n          table.append(tr);\n        });\n\n        if (index === 1) {\n          table.classList.add('active-tab');\n        }\n\n        table.setAttribute('data-tab-content', index);\n        blockConent.append(table);\n      }\n    });\n  };\n\n  targetList.addEventListener('click', function (event) {\n    var target = event.target.closest('.popup-repair-types-nav__item'),\n        navTabs = targetList.querySelectorAll('.button_o');\n\n    if (target) {\n      console.log('target: ', target);\n      var value = target.getAttribute('data-tab'),\n          blocks = document.querySelectorAll('.popup-repair-types-content-table__list');\n      blocks.forEach(function (element, index) {\n        if (value.trim() === element.getAttribute('data-tab-content').trim()) {\n          console.log('value: ', value);\n          element.classList.add('active-tab');\n          navTabs[index].classList.add('active');\n        } else {\n          element.classList.remove('active-tab');\n        }\n      });\n    }\n  });\n  fetch('./db/db.json').then(function (response) {\n    if (response.status !== 200) {\n      throw new Error('status network not 200');\n    }\n\n    return response.text();\n  }).then(function (data) {\n    objData = JSON.parse(data);\n    renderData(objData);\n  })[\"catch\"](function (error) {\n    return console.error(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataBase);\n\n//# sourceURL=webpack://diplom/./src/modules/getDataBase.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "4cb91f0e21fb6248523f"
/******/ 	})();
/******/ 	
/******/ }
);