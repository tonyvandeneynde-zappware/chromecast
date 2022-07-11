/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import clpp from 'clpp'\nvar instance;\n\nvar CastlabsPlayer = /*#__PURE__*/_createClass(function CastlabsPlayer() {\n  var _this = this;\n\n  _classCallCheck(this, CastlabsPlayer);\n\n  _defineProperty(this, \"init\", function () {\n    _this.player = new clpp.Player('castPlayer', {\n      license: '<your_license_key>'\n    });\n    console.log('player:', _this.player);\n    _this.receiver = clpp.cast.Receiver.getInstance();\n\n    _this.receiver.init(_this.player);\n\n    _this.setInterceptors();\n\n    clpp.cast.Receiver.getInstance().start();\n  });\n\n  _defineProperty(this, \"setInterceptors\", function () {\n    _this.receiver.setLoadRequestDataInterceptor(function (loadRequestData) {\n      console.log('loadRequestData:', loadRequestData);\n      loadRequestData.media.contentUrl = 'https://stream4.romeo.a1.net:443/session/d9c30ce6-010c-11ed-9317-005056ab337f$h1.0$default/zemjxh/__cl/cg:SO/__c/1256_ORFeins_HDMAX_ABR/__op/dash-default/__f/SD.mpd?token=f8e37d66fd4ef3c7e7abbd2c77981ed6_1657625422_1657625422';\n      return loadRequestData;\n    });\n\n    _this.receiver.addMessageListener(function (data) {\n      console.log('custom message listener data:', data);\n    });\n  });\n\n  if (!instance) {\n    this.init();\n    instance = this;\n  }\n\n  return instance; // singleton\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CastlabsPlayer());\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;