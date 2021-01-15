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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  var parent = document.getElementById('formula'); // elements = parent.querySelectorAll('.formula-item');\n\n  parent.addEventListener('mouseover', function (event) {\n    var toolId = 0;\n    var target = event.target;\n\n    if (target.classList.contains('formula-item')) {\n      var value = target.querySelector('.formula-item__icon-inner-text').textContent;\n      console.log('value: ', value);\n      var qweerty = target.querySelector('.formula-item-popup');\n      toolId = qweerty.className; // если класс наш чилд, определяем его атрибут pos,чтоб точно такой же показать тултип\n\n      console.log('toolId: ', toolId);\n    } // // перебираем тултипы\n    // tools = document.querySelectorAll('.tool');\n    // for (let i = 0; i<tools.length;i++){\n    // \tlet pos = tools[i].getAttribute('pos');// смотрим у каждого атрибут pos\n    // \tif (pos!=toolId && tools[i].style.display==\"block\")  tools[i].style.display='none';\n    // \tif (pos==toolId && tools[i].style.display==\"none\")  tools[i].style.display='block';\n    // }\n\n  }); // parents.addEventListener('mouseover', (event) => {\n  //     const  target = event.target.closest('.formula-item');\n  //     if (target) {\n  //         let tooltipHtml = target.querySelector('.formula-item-popup');\n  //         tooltipHtml.classList.add('tooltip-active');\n  //         const coords = tooltipHtml.getBoundingClientRect();\n  //         if (coords.top < 0) { \n  //             target.classList.add('to-bottom');\n  //         } \n  //     }     \n  // });\n  // parents.addEventListener('mouseout', (event) => {\n  //     const  target = event.target.closest('.formula-item');\n  //     if (target) {\n  //         // let tooltipHtml = target.querySelector('.formula-item-popup');\n  //         // tooltipHtml.classList.add('tooltip-active');\n  //         // const coords = tooltipHtml.getBoundingClientRect();\n  //         // if (coords.top < 0) { \n  //         //     target.classList.add('to-bottom');\n  //         // } \n  //     }     \n  // });\n  // parents.addEventListener('mouseover', (event) => {\n  //      const  target = event.target.closest('.formula-item');\n  //     // if (target) {\n  //     //     target.classList.add('tooltip-active');\n  //     //     let tooltipHtml = target.querySelector('.formula-item-popup');\n  //     //     const coords = tooltipHtml.getBoundingClientRect();\n  //     //     if (coords.top < 0) { \n  //     //         target.classList.add('to-bottom');\n  //     //     } \n  //     // }\n  // });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "f407e4dd6f2692c2a08c"
/******/ 	})();
/******/ 	
/******/ }
);