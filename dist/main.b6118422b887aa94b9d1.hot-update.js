/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/contract.js":
/*!*********************************!*\
  !*** ./src/modules/contract.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar contract = function contract() {\n  var selector = document.getElementById('transparency'),\n      modal = document.querySelector('.popup-transparency'),\n      close = modal.querySelector('.close'),\n      body = document.querySelector('body');\n\n  var contrsctSlider = function contrsctSlider() {\n    var slide = document.querySelectorAll('.popup-transparency-slider__slide'),\n        slider = document.querySelector('.popup-transparency-slider-wrap');\n    console.log('slider: ', slider);\n    console.log('slide: ', slide);\n    var currentSlide = 0,\n        interval; // const prevSlide = (elem, index, strClass) => {\n    //     elem[index].classList.remove(strClass);\n    // };\n    // const nextSlide = (elem, index, strClass) => {\n    //     elem[index].classList.add(strClass);\n    // };\n    // slider.addEventListener('click', (event) => {\n    //     event.preventDefault();\n    //     let target = event.target;\n    //     if(!target.matches('.popup-arrow_transparency')) {\n    //         return;\n    //     }\n    //     prevSlide(slide, currentSlide, 'slide-active');\n    //     console.log('target.matches(#transparency_right) ', target.matches('#transparency_right'));\n    //     if (target.matches('#transparency_right')) {\n    //         currentSlide++;\n    //         console.log('currentSlide: ', currentSlide);\n    //     } else if (target.matches('#transparency_left')) {\n    //         currentSlide--;\n    //         console.log('currentSlide: ', currentSlide);\n    //     } \n    //     if (currentSlide >= slide.length) {\n    //         currentSlide = 0;\n    //     } \n    //     if (currentSlide < 0) {\n    //         currentSlide = slide.length -1;\n    //     }             \n    //     nextSlide(slide, currentSlide, 'slide-active');\n    // });   \n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n    };\n\n    modal.addEventListener('click', function (event) {\n      event.preventDefault();\n      var target = event.target;\n\n      if (!target.matches('.popup-arrow')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'slide-active');\n\n      if (target.matches('#arrow-right')) {\n        currentSlide++;\n      } else if (target.matches('#arrow-left')) {\n        currentSlide--;\n      } else if (target.matches('.dot')) {}\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'slide-active');\n    });\n  };\n\n  selector.addEventListener('click', function (event) {\n    if (event.target.closest('.transparency-item__img')) {\n      modal.classList.add('block-visibility');\n      contrsctSlider();\n    }\n  });\n  close.addEventListener('click', function (event) {\n    modal.classList.remove('block-visibility');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contract);\n\n//# sourceURL=webpack://diplom/./src/modules/contract.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "b6a5471c4174c29924d5"
/******/ 	})();
/******/ 	
/******/ }
);