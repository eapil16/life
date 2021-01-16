/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/disignerPopup.js":
/*!**************************************!*\
  !*** ./src/modules/disignerPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/SliderCarousel */ \"./src/modules/SliderCarousel.js\");\n\n\n\n\nvar disignerPopup = function disignerPopup() {\n  var navTabsTarent = document.querySelector('.popup-design'),\n      navTabs = navTabsTarent.querySelectorAll('.button_o'),\n      navContentTarent = document.querySelectorAll('.popup-slider'),\n      textTabs = navTabsTarent.querySelectorAll('.popup-design-text'),\n      counterBlock = document.getElementById('popup-designs-counter'),\n      content = counterBlock.querySelector('.slider-counter-content__current'),\n      total = counterBlock.querySelector('.slider-counter-content__total'),\n      blockdDesigns = document.getElementById('designs');\n  navTabs.forEach(function (elem, index) {\n    elem.setAttribute('data-tab', ++index);\n  });\n  navContentTarent.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('active-tab');\n    }\n\n    elem.setAttribute('data-tab-content', ++index);\n  });\n  textTabs.forEach(function (elem, index) {\n    if (index === 0) {\n      elem.classList.add('visible-content-block');\n    }\n\n    elem.setAttribute('data-tab-text', ++index);\n  });\n\n  var sliderRepair = function sliderRepair(element) {\n    // const dot = dots.querySelectorAll('.preview-block__item');\n    var slide = element.querySelectorAll('.popup-design-slider__style-slide'),\n        firstSlideItem = element.querySelector('.popup-design-slider__style-slide');\n    firstSlideItem.classList.add('active');\n    var currentSlide = 0;\n    total.textContent = slide.length;\n    content.textContent = 1;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n      var count = ++index;\n      content.textContent = count;\n    };\n\n    navTabsTarent.addEventListener('click', function (event) {\n      event.preventDefault();\n      var target = !event.target.closest('.popup-arrow');\n\n      if (target) {\n        return;\n      }\n\n      prevSlide(slide, currentSlide, 'active');\n\n      if (event.target.closest('#popup_design_right')) {\n        currentSlide++;\n      } else if (event.target.closest('#popup_design_left')) {\n        currentSlide--;\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n    });\n  };\n\n  var firstSlide = navTabsTarent.querySelector('.popup-design-slider__style-slide'),\n      firstDots = navTabsTarent.querySelector('.popup-designs-slider__style1');\n  firstSlide.classList.add('active');\n  sliderRepair(firstDots);\n\n  var showDisignerPopup = function showDisignerPopup() {\n    var carouselDisignerPopup = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_0__.default({\n      main: '#designs-popup__slider',\n      wrap: '#nav-list-popup-designs',\n      prev: '#nav-arrow-popup-designs_left',\n      next: '#nav-arrow-popup-designs_right',\n      slidesToShow: 2,\n      infinity: true,\n      responsive: [{\n        breakpoint: 767,\n        slidesToShow: 2\n      }, {\n        breakpoint: 576,\n        slidesToShow: 1\n      }]\n    });\n    carouselDisignerPopup.init();\n  };\n\n  navTabsTarent.addEventListener('click', function (event) {\n    var target = event.target.closest('.button_o');\n\n    if (target) {\n      var value = target.getAttribute('data-tab');\n      navContentTarent.forEach(function (elem, index) {\n        if (value.trim() === elem.getAttribute('data-tab-content').trim()) {\n          elem.classList.add('active-tab');\n          navTabs[index].classList.add('active');\n          textTabs[index].classList.add('visible-content-block');\n          sliderRepair(elem);\n        } else {\n          elem.classList.remove('active-tab');\n          navTabs[index].classList.remove('active');\n          textTabs[index].classList.remove('visible-content-block');\n        }\n      });\n    }\n  });\n  blockdDesigns.addEventListener('click', function (event) {\n    if (event.target.closest('.link-list-designs')) {\n      var widthWindow = document.documentElement.clientWidth;\n\n      if (widthWindow < 1025) {\n        showDisignerPopup();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disignerPopup);\n\n//# sourceURL=webpack://diplom/./src/modules/disignerPopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "8202fb9532cb7de57e97"
/******/ 	})();
/******/ 	
/******/ }
);