/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/tabsWorking.js":
/*!************************************!*\
  !*** ./src/modules/tabsWorking.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar tabsWorking = function tabsWorking() {\n  var navTabsTarent = document.getElementById('scheme-list'),\n      navTabs = navTabsTarent.querySelectorAll('.button_o'),\n      navContentTarent = document.querySelectorAll('.scheme-slider__slide'),\n      tabsText = document.querySelectorAll('.scheme-description-block');\n  navTabs.forEach(function (elem, index) {\n    elem.setAttribute('data-tab', ++index);\n  });\n  navContentTarent.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('active-tab');\n    }\n\n    elem.setAttribute('data-tab-content', ++index);\n  });\n  navTabsTarent.addEventListener('click', function (event) {\n    var target = event.target.closest('.button_o ');\n\n    if (target) {\n      var value = target.getAttribute('data-tab');\n      navContentTarent.forEach(function (elem, index) {\n        if (value.trim() === elem.getAttribute('data-tab-content').trim()) {\n          elem.classList.add('active-tab');\n          navTabs[index].classList.add('active');\n          tabsText.forEach(function (element) {\n            if (target.textContent.trim() === element.querySelector('.scheme-description-block__title').textContent.trim()) {\n              element.classList.add('visible-content-block');\n            } else {\n              element.classList.remove('visible-content-block');\n            }\n          });\n        } else {\n          elem.classList.remove('active-tab');\n          navTabs[index].classList.remove('active');\n        }\n      });\n    }\n  }); // const showSlidesTabs =() => {\n  //     const carouselTabs = new sliderCarousel({\n  //     main: '#scheme nav',\n  //     wrap: '#scheme-list',\n  //     prev: '#nav-arrow-scheme_left',\n  //     next: '#nav-arrow-scheme_right',\n  //     slidesToShow: 5,\n  //     infinity: true,\n  //     responsive : [{\n  //         breakpoint: 1025,\n  //         slidesToShow:4\n  //     },\n  //     {\n  //         breakpoint: 767,\n  //         slidesToShow:3\n  //     },\n  //     {\n  //         breakpoint: 576,\n  //         slidesToShow:2\n  //     }]\n  //     });\n  //     carouselTabs.init();\n  // };\n  // const widthWindow = document.documentElement.clientWidth;\n  // if (widthWindow < 1135) {\n  //     showSlidesTabs();\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsWorking);\n\n//# sourceURL=webpack://diplom/./src/modules/tabsWorking.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "3b6bd43239820eb3536c"
/******/ 	})();
/******/ 	
/******/ }
);