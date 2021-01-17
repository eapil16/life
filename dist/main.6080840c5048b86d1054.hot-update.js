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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\nvar viewsRepairs = function viewsRepairs() {\n  var selector = document.getElementById('repair-types'),\n      blockTabsButton = selector.querySelector('.nav-list-repair'),\n      tabsButton = blockTabsButton.querySelectorAll('button'),\n      tabsContent = selector.querySelectorAll('.block-slider'),\n      counterBlock = document.getElementById('repair-counter'),\n      content = counterBlock.querySelector('.slider-counter-content__current'),\n      total = counterBlock.querySelector('.slider-counter-content__total');\n  var widthWindow = window.innerWidth;\n  var counetSlide = 1;\n\n  var sliderRepair = function sliderRepair(element) {\n    var slide = element.querySelectorAll('.repair-types-slider__slide'),\n        firstSlideItem = element.querySelector('.repair-types-slider__slide');\n    firstSlideItem.classList.add('active');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    selector.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      if (!event.target.closest('.slider-arrow')) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n\n      if (event.target.closest('#repair-types-arrow_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#repair-types-arrow_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n    });\n  };\n\n  var firstSlide = selector.querySelector('.types-repair1'),\n      firstSlideItem = selector.querySelector('.repair-types-slider__slide');\n  firstSlideItem.classList.add('active');\n  sliderRepair(firstSlide);\n  tabsButton.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('active');\n    }\n\n    elem.setAttribute('data-tab', ++index);\n  });\n  blockTabsButton.addEventListener('click', function (event) {\n    var target = event.target,\n        targetButton = target.closest('.button_o');\n\n    if (targetButton) {\n      var value = targetButton.getAttribute('data-tab').trim();\n      tabsContent.forEach(function (element, index) {\n        var elementvalue = element.className.substr(element.className.length - 1);\n\n        if (elementvalue === value) {\n          element.classList.add('block-slider__active');\n          tabsButton[index].classList.add('active');\n          sliderRepair(element);\n        } else {\n          element.classList.remove('block-slider__active');\n          tabsButton[index].classList.remove('active');\n        }\n      });\n    }\n  });\n\n  var showRepairTabs = function showRepairTabs() {\n    var carouselRepair = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__.default({\n      main: '#repair-types nav',\n      wrap: '.nav-list-repair',\n      prev: '#nav-arrow-repair-left_base',\n      next: '#nav-arrow-repair-right_base',\n      slidesToShow: counetSlide,\n      infinity: true,\n      responsive: [{\n        breakpoint: 767,\n        slidesToShow: 2\n      }, {\n        breakpoint: 576,\n        slidesToShow: 1\n      }]\n    });\n    carouselRepair.init();\n  };\n\n  var resizeWin = function resizeWin(widthWindow) {\n    if (widthWindow < 1025) {\n      counetSlide = 3;\n    }\n\n    if (widthWindow <= 767 && widthWindow >= 576) {\n      counetSlide = 4;\n    }\n\n    if (widthWindow < 575) {\n      counetSlide = 1;\n    }\n  };\n\n  resizeWin(widthWindow);\n  window.addEventListener('resize', function (event) {\n    resizeWin(window.innerWidth);\n\n    if (resizeWin < 1025) {\n      showRepairTabs();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewsRepairs);\n\n//# sourceURL=webpack://diplom/./src/modules/viewsRepairs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "817e3d00e14bcb51d083"
/******/ 	})();
/******/ 	
/******/ }
);