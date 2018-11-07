(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _serializeJavascript = __webpack_require__(2);\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function (initData) {\n\tvar viewData = 'window.__data=' + (0, _serializeJavascript2.default)({ initData: initData }) + ';';\n\treturn _react2.default.createElement(\n\t\t'html',\n\t\t{ lang: 'ru' },\n\t\t_react2.default.createElement(\n\t\t\t'head',\n\t\t\tnull,\n\t\t\t_react2.default.createElement('meta', { charSet: 'utf-8' }),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'title',\n\t\t\t\tnull,\n\t\t\t\t'Node Wallet App'\n\t\t\t),\n\t\t\t_react2.default.createElement('link', { rel: 'shortcut icon', href: 'favicon.ico' }),\n\t\t\t_react2.default.createElement('link', { rel: 'stylesheet', href: 'styles.css' })\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'body',\n\t\t\tnull,\n\t\t\t_react2.default.createElement('div', { id: 'root' }),\n\t\t\t_react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: viewData } }),\n\t\t\t_react2.default.createElement('script', { src: 'bundle.client.js' })\n\t\t)\n\t);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/views/index.server.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./source/views/index.server.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"serialize-javascript\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })
/******/ ]);
});