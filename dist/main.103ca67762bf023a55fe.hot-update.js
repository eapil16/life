/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/sliderReviews.js":
/*!**************************************!*\
  !*** ./src/modules/sliderReviews.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar sliderReviews = function sliderReviews() {\n  var slide = document.querySelectorAll('.reviews-slider__slide'),\n      slider = document.querySelector('.reviews-slider-wrap'),\n      dotsUl = document.querySelector('.slider-dots-reviews');\n  var currentSlide = 0,\n      interval;\n  dotsUl.style.display = 'flex';\n  var dot = document.querySelectorAll('.dot');\n  console.log('dot: ', dot);\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'slide-active');\n    prevSlide(dot, currentSlide, 'dot_active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'slide-active');\n    nextSlide(dot, currentSlide, 'dot_active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    console.log('target: ', !target.matches('.slider-arrow, .dot-reviews'));\n\n    if (!target.closest('.slider-arrow, .dot-reviews')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'slide-active');\n    prevSlide(dot, currentSlide, 'dot_active');\n\n    if (target.matches('#reviews-arrow_right')) {\n      currentSlide++;\n    } else if (target.matches('#reviews-arrow_left')) {\n      currentSlide--;\n    } else if (target.matches('.dot-reviews')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'slide-active');\n    nextSlide(dot, currentSlide, 'dot_active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.closest('.slider-arrow') || event.target.closest('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderReviews);\n\n//# sourceURL=webpack://diplom/./src/modules/sliderReviews.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "173a0dc4e81068a4f172"
/******/ 	})();
/******/ 	
/******/ }
);