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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\nvar contract = function contract() {\n  var selector = document.getElementById('transparency'),\n      modal = document.querySelector('.popup-transparency'),\n      close = modal.querySelector('.close'),\n      content = modal.querySelector('.slider-counter-content__current'),\n      total = modal.querySelector('.slider-counter-content__total');\n  content.textContent = 1;\n\n  var contractSlider = function contractSlider() {\n    var slide = document.querySelectorAll('.popup-transparency-slider__slide'),\n        slider = document.querySelector('.popup-transparency-slider-wrap');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    modal.addEventListener('click', function (event) {\n      event.preventDefault();\n      var targetPopup = event.target.closest('.popup-arrow');\n\n      if (!event.target.closest('.popup-arrow')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'slide-active');\n\n      if (event.target.closest('#transparency_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#transparency_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'slide-active');\n    });\n  };\n\n  selector.addEventListener('click', function (event) {\n    if (event.target.closest('.transparency-item__img')) {\n      modal.classList.add('block-visibility');\n      contractSlider();\n    }\n  });\n  close.addEventListener('click', function (event) {\n    modal.classList.remove('block-visibility');\n  });\n\n  var showSlidesTabs = function showSlidesTabs() {\n    var carouselTabs = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__.default({\n      main: '#transparency-slider-wrap',\n      wrap: '#transparency-slider',\n      prev: '#transparency-arrow_left',\n      next: '#transparency-arrow_right',\n      slidesToShow: 1 // infinity: true,\n      // responsive : [{\n      //     breakpoint: 1025,\n      //     slidesToShow:4\n      // },\n      // {\n      //     breakpoint: 767,\n      //     slidesToShow:3\n      // },\n      // {\n      //     breakpoint: 576,\n      //     slidesToShow:1\n      // }]\n\n    });\n    carouselTabs.init();\n  };\n\n  var widthWindow = document.documentElement.clientWidth;\n\n  if (widthWindow < 1135) {\n    showSlidesTabs();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contract);\n\n//# sourceURL=webpack://diplom/./src/modules/contract.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "43d4838cda165cf7be23"
/******/ 	})();
/******/ 	
/******/ }
);