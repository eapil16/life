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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar viewsRepairs = function viewsRepairs() {\n  var selector = document.getElementById('repair-types'),\n      blockTabsButton = selector.querySelector('.nav-list-repair'),\n      tabsButton = blockTabsButton.querySelectorAll('button'),\n      blockTabsContent = selector.querySelector('.repair-types-slider'),\n      tabsContent = selector.querySelectorAll('.block-slider'),\n      counter = document.getElementById('repair-counter');\n  var currentSlide = 0,\n      interval;\n\n  var slider = function slider(element) {\n    var slide = element.querySelectorAll('.repair-types-slider__slide'),\n        btn = selector.querySelectorAll('.slider-arrow'),\n        slider = selector.querySelector('.repair-types-slider-wrap');\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n    };\n\n    var autoPlaySlide = function autoPlaySlide() {\n      prevSlide(slide, currentSlide, 'active');\n      currentSlide++;\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      nextSlide(slide, currentSlide, 'active');\n    };\n\n    var startSlide = function startSlide() {\n      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n      interval = setInterval(autoPlaySlide, time);\n    };\n\n    var stopSlide = function stopSlide() {\n      clearInterval(interval);\n    };\n\n    slider.addEventListener('mouseover', function (event) {\n      if (event.target.matches('.slider-arrow')) {\n        stopSlide();\n      }\n    });\n    slider.addEventListener('mouseout', function (event) {\n      if (event.target.matches('.slider-arrow')) {\n        startSlide();\n      }\n    });\n    startSlide(1500);\n  };\n\n  var sliderStop = function sliderStop(element) {\n    var stopSlide = function stopSlide() {\n      clearInterval(interval);\n    };\n  };\n\n  var firstSlide = selector.querySelector('.types-repair1');\n  slider(firstSlide);\n  blockTabsButton.addEventListener('click', function (event) {\n    var target = event.target,\n        targetButton = target.closest('.button_o');\n\n    if (targetButton) {\n      var textValue = targetButton.className,\n          value = textValue.substr(textValue.length - 1);\n      tabsContent.forEach(function (element, index) {\n        var elementvalue = element.className.substr(element.className.length - 1);\n\n        if (elementvalue === value) {\n          element.classList.add('block-slider__active');\n          tabsButton[index].classList.add('active');\n          slider(element);\n        } else {\n          element.classList.remove('block-slider__active');\n          tabsButton[index].classList.remove('active');\n          sliderStop(element);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewsRepairs);\n\n//# sourceURL=webpack://diplom/./src/modules/viewsRepairs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d305b0e5ac29fba1b6b8"
/******/ 	})();
/******/ 	
/******/ }
);