/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/viewsRepairs.js":
/*!*************************************!*\
  !*** ./src/modules/viewsRepairs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar viewsRepairs = function viewsRepairs() {\n  var selector = document.getElementById('repair-types'),\n      blockTabsButton = selector.querySelector('.nav-list-repair'),\n      tabsButton = blockTabsButton.querySelectorAll('button'),\n      blockTabsContent = selector.querySelector('.repair-types-slider'),\n      tabsContent = selector.querySelectorAll('.block-slider'),\n      counter = document.getElementById('repair-counter'); // let currentSlide = 0,\n  //     interval;\n  // const slider = (element) => {\n  //     console.log('element: ', element);\n  //     const slide = element.querySelectorAll('.repair-types-slider__slide'),\n  //         btn = selector.querySelectorAll('.slider-arrow'),\n  //         slider = selector.querySelector('.repair-types-slider-wrap');\n  //     const prevSlide = (elem, index, strClass) => {\n  //         elem[index].classList.remove(strClass);\n  //     };\n  //     const nextSlide = (elem, index, strClass) => {\n  //         elem[index].classList.add(strClass);\n  //     };\n  //     const autoPlaySlide = () => {\n  //         prevSlide(slide, currentSlide, 'active');\n  //         currentSlide++;\n  //         if (currentSlide >= slide.length) {\n  //             currentSlide = 0;\n  //         }\n  //         nextSlide(slide, currentSlide, 'active');\n  //     };\n  //     const startSlide = (time = 3000) => {\n  //         interval = setInterval(autoPlaySlide, time);\n  //     };\n  //     const stopSlide = () => {\n  //         clearInterval(interval);\n  //     };\n  //     slider.addEventListener('click', (event) => {\n  //         event.preventDefault();\n  //         let target = event.target;\n  //         if(!target.matches('.slider-arrow')) {\n  //             return;\n  //         }    \n  //         prevSlide(slide, currentSlide, 'active');\n  //         if (target.matches('#repair-types-arrow_right')) {\n  //             currentSlide++;\n  //             console.log('currentSlide: ', currentSlide);\n  //         } else if (target.matches('#repair-types-arrow_left')) {\n  //             currentSlide--;\n  //             console.log('currentSlide: ', currentSlide);\n  //         } \n  //         if (currentSlide >= slide.length) {\n  //             console.log('slide.length: ', slide.length);\n  //             currentSlide = 0;\n  //         } \n  //         if (currentSlide < 0) {\n  //             currentSlide = slide.length -1;\n  //         } \n  //         nextSlide(slide, currentSlide, 'active');\n  //     });\n  //     slider.addEventListener('mouseover', (event) => {\n  //         if (event.target.matches('.slider-arrow')) {\n  //             stopSlide();   \n  //         }\n  //     });\n  //     slider.addEventListener('mouseout', (event) => {\n  //         if (event.target.matches('.slider-arrow')) {\n  //             startSlide();   \n  //         }\n  //     });\n  //     startSlide(1500);        \n  // };\n  // const firstSlide = selector.querySelector('.types-repair1');\n  // console.log('firstSlide: ', firstSlide);\n  // slider(firstSlide);\n\n  var sliderRepair = function sliderRepair() {};\n\n  blockTabsButton.addEventListener('click', function (event) {\n    var target = event.target,\n        targetButton = target.closest('.button_o');\n\n    if (targetButton) {\n      var textValue = targetButton.className,\n          value = textValue.substr(textValue.length - 1);\n      tabsContent.forEach(function (element, index) {\n        var elementvalue = element.className.substr(element.className.length - 1);\n\n        if (elementvalue === value) {\n          element.classList.add('block-slider__active');\n          tabsButton[index].classList.add('active');\n          sliderRepair(element);\n        } else {\n          element.classList.remove('block-slider__active');\n          tabsButton[index].classList.remove('active');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewsRepairs);\n\n//# sourceURL=webpack://diplom/./src/modules/viewsRepairs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "3f7d77d5d0fad4ec8151"
/******/ 	})();
/******/ 	
/******/ }
);