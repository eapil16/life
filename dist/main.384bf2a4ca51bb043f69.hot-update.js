/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./node_modules/webpack-dev-server/client/index.js?http://localhost:8080":
/*!*******************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?http://localhost:8080 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("var __resourceQuery = \"?http://localhost:8080\";\n\n/* global __resourceQuery WorkerGlobalScope self */\n\n/* eslint prefer-destructuring: off */\n\nvar stripAnsi = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'strip-ansi'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar socket = __webpack_require__(/*! ./socket */ \"./node_modules/webpack-dev-server/client/socket.js\");\n\nvar overlay = __webpack_require__(/*! ./overlay */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n\nvar _require = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/log'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n    log = _require.log,\n    setLogLevel = _require.setLogLevel;\n\nvar sendMessage = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/sendMessage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar reloadApp = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/reloadApp'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar createSocketUrl = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/createSocketUrl'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar status = {\n  isUnloading: false,\n  currentHash: ''\n};\nvar options = {\n  hot: false,\n  hotReload: true,\n  liveReload: false,\n  initial: true,\n  useWarningOverlay: false,\n  useErrorOverlay: false,\n  useProgress: false\n};\nvar socketUrl = createSocketUrl(__resourceQuery);\nself.addEventListener('beforeunload', function () {\n  status.isUnloading = true;\n});\n\nif (typeof window !== 'undefined') {\n  var qs = window.location.search.toLowerCase();\n  options.hotReload = qs.indexOf('hotreload=false') === -1;\n}\n\nvar onSocketMessage = {\n  hot: function hot() {\n    options.hot = true;\n    log.info('[WDS] Hot Module Replacement enabled.');\n  },\n  liveReload: function liveReload() {\n    options.liveReload = true;\n    log.info('[WDS] Live Reloading enabled.');\n  },\n  invalid: function invalid() {\n    log.info('[WDS] App updated. Recompiling...'); // fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n\n    if (options.useWarningOverlay || options.useErrorOverlay) {\n      overlay.clear();\n    }\n\n    sendMessage('Invalid');\n  },\n  hash: function hash(_hash) {\n    status.currentHash = _hash;\n  },\n  'still-ok': function stillOk() {\n    log.info('[WDS] Nothing changed.');\n\n    if (options.useWarningOverlay || options.useErrorOverlay) {\n      overlay.clear();\n    }\n\n    sendMessage('StillOk');\n  },\n  'log-level': function logLevel(level) {\n    var hotCtx = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n    if (hotCtx.keys().indexOf('./log') !== -1) {\n      hotCtx('./log').setLogLevel(level);\n    }\n\n    setLogLevel(level);\n  },\n  overlay: function overlay(value) {\n    if (typeof document !== 'undefined') {\n      if (typeof value === 'boolean') {\n        options.useWarningOverlay = false;\n        options.useErrorOverlay = value;\n      } else if (value) {\n        options.useWarningOverlay = value.warnings;\n        options.useErrorOverlay = value.errors;\n      }\n    }\n  },\n  progress: function progress(_progress) {\n    if (typeof document !== 'undefined') {\n      options.useProgress = _progress;\n    }\n  },\n  'progress-update': function progressUpdate(data) {\n    if (options.useProgress) {\n      log.info(\"[WDS] \".concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n\n    sendMessage('Progress', data);\n  },\n  ok: function ok() {\n    sendMessage('Ok');\n\n    if (options.useWarningOverlay || options.useErrorOverlay) {\n      overlay.clear();\n    }\n\n    if (options.initial) {\n      return options.initial = false;\n    } // eslint-disable-line no-return-assign\n\n\n    reloadApp(options, status);\n  },\n  'content-changed': function contentChanged() {\n    log.info('[WDS] Content base changed. Reloading...');\n    self.location.reload();\n  },\n  warnings: function warnings(_warnings) {\n    log.warn('[WDS] Warnings while compiling.');\n\n    var strippedWarnings = _warnings.map(function (warning) {\n      return stripAnsi(warning);\n    });\n\n    sendMessage('Warnings', strippedWarnings);\n\n    for (var i = 0; i < strippedWarnings.length; i++) {\n      log.warn(strippedWarnings[i]);\n    }\n\n    if (options.useWarningOverlay) {\n      overlay.showMessage(_warnings);\n    }\n\n    if (options.initial) {\n      return options.initial = false;\n    } // eslint-disable-line no-return-assign\n\n\n    reloadApp(options, status);\n  },\n  errors: function errors(_errors) {\n    log.error('[WDS] Errors while compiling. Reload prevented.');\n\n    var strippedErrors = _errors.map(function (error) {\n      return stripAnsi(error);\n    });\n\n    sendMessage('Errors', strippedErrors);\n\n    for (var i = 0; i < strippedErrors.length; i++) {\n      log.error(strippedErrors[i]);\n    }\n\n    if (options.useErrorOverlay) {\n      overlay.showMessage(_errors);\n    }\n\n    options.initial = false;\n  },\n  error: function error(_error) {\n    log.error(_error);\n  },\n  close: function close() {\n    log.error('[WDS] Disconnected!');\n    sendMessage('Close');\n  }\n};\nsocket(socketUrl, onSocketMessage);\n\n//# sourceURL=webpack://diplom/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/* provided dependency */ var __webpack_dev_server_client__ = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'D:\\\\OpenServer\\\\domains\\\\diplom\\\\node_modules\\\\webpack-dev-server\\\\client\\\\clients\\\\SockJSClient.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n/* global __webpack_dev_server_client__ */\n\n/* eslint-disable\n  camelcase\n*/\n// this SockJSClient is here as a default fallback, in case inline mode\n// is off or the client is not injected. This will be switched to\n// WebsocketClient when it becomes the default\n// important: the path to SockJSClient here is made to work in the 'client'\n// directory, but is updated via the webpack compilation when compiled from\n// the 'client-src' directory\n\nvar Client = typeof __webpack_dev_server_client__ !== 'undefined' ? __webpack_dev_server_client__ : // eslint-disable-next-line import/no-unresolved\n__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './clients/SockJSClient'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar retries = 0;\nvar client = null;\n\nvar socket = function initSocket(url, handlers) {\n  client = new Client(url);\n  client.onOpen(function () {\n    retries = 0;\n  });\n  client.onClose(function () {\n    if (retries === 0) {\n      handlers.close();\n    } // Try to reconnect.\n\n\n    client = null; // After 10 retries stop trying, to prevent logspam.\n\n    if (retries <= 10) {\n      // Exponentially increase timeout to reconnect.\n      // Respectfully copied from the package `got`.\n      // eslint-disable-next-line no-mixed-operators, no-restricted-properties\n      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n      retries += 1;\n      setTimeout(function () {\n        socket(url, handlers);\n      }, retryInMs);\n    }\n  });\n  client.onMessage(function (data) {\n    var msg = JSON.parse(data);\n\n    if (handlers[msg.type]) {\n      handlers[msg.type](msg.data);\n    }\n  });\n};\n\nmodule.exports = socket;\n\n//# sourceURL=webpack://diplom/./node_modules/webpack-dev-server/client/socket.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "cc4e26ca3c88d62fca64"
/******/ 	})();
/******/ 	
/******/ }
);