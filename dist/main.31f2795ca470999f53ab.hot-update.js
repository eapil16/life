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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tooltip = function tooltip() {\n  var parent = document.getElementById('formula'); // elements = parent.querySelectorAll('.formula-item');\n\n  parent.addEventListener('mouseover', function (event) {\n    var toolId = 0;\n    var target = event.target;\n\n    if (target.classList.contains('formula-item')) {\n      var value = target.querySelector('.formula-item__icon-inner-text').textContent;\n      console.log('value: ', value);\n      var qweerty = target.querySelector('.formula-item-popup');\n      toolId = qweerty.className; // если класс наш чилд, определяем его атрибут pos,чтоб точно такой же показать тултип\n\n      console.log('toolId: ', toolId);\n      var lastChar = toolId.substr(toolId.length - 2); // => \"1\"\n\n      var block = parent.querySelector('.wrapper_small');\n      var tools = block.querySelectorAll('.formula-item-popup');\n      console.log('tools: ', tools);\n      tools.forEach(function (element) {\n        console.log('element: ', element);\n        console.log('lastChar: ', lastChar);\n\n        if (element.className.substr(toolId.length - 2) === lastChar) {\n          console.log('нашли', element);\n        }\n      });\n    } // // перебираем тултипы\n    // for (let i = 0; i < tools.length; i++){\n    //     let pos = tools[i].className.substr(toolId.length - 2);// смотрим у каждого атрибут pos\n    //     console.log('tools[i]: ', tools[i]);\n    //     if (pos !== lastChar && tools[i].style.display === \"block\")  {\n    //         tools[i].style.display='none';\n    //     }\n    // \tif (pos === lastChar && tools[i].style.display === \"none\") {\n    //         tools[i].style.display='block';\n    //     } \n    // }\n\n  }); // parents.addEventListener('mouseover', (event) => {\n  //     const  target = event.target.closest('.formula-item');\n  //     if (target) {\n  //         let tooltipHtml = target.querySelector('.formula-item-popup');\n  //         tooltipHtml.classList.add('tooltip-active');\n  //         const coords = tooltipHtml.getBoundingClientRect();\n  //         if (coords.top < 0) { \n  //             target.classList.add('to-bottom');\n  //         } \n  //     }     \n  // });\n  // parents.addEventListener('mouseout', (event) => {\n  //     const  target = event.target.closest('.formula-item');\n  //     if (target) {\n  //         // let tooltipHtml = target.querySelector('.formula-item-popup');\n  //         // tooltipHtml.classList.add('tooltip-active');\n  //         // const coords = tooltipHtml.getBoundingClientRect();\n  //         // if (coords.top < 0) { \n  //         //     target.classList.add('to-bottom');\n  //         // } \n  //     }     \n  // });\n  // parents.addEventListener('mouseover', (event) => {\n  //      const  target = event.target.closest('.formula-item');\n  //     // if (target) {\n  //     //     target.classList.add('tooltip-active');\n  //     //     let tooltipHtml = target.querySelector('.formula-item-popup');\n  //     //     const coords = tooltipHtml.getBoundingClientRect();\n  //     //     if (coords.top < 0) { \n  //     //         target.classList.add('to-bottom');\n  //     //     } \n  //     // }\n  // });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);\n\n//# sourceURL=webpack://diplom/./src/modules/tooltip.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "6d2df81b5bde5b8c1348"
/******/ 	})();
/******/ 	
/******/ }
);