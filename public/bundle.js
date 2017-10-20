/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/www/node-wallet-app/node_modules/eslint-config-airbnb-base/rules/best-practices.js:\n\tConfiguration for rule \"no-else-return\" is invalid:\n\tValue \"[object Object]\" should NOT have more than 0 items.\n\nReferenced from: /home/vagrant/www/node-wallet-app/node_modules/eslint-config-airbnb-base/index.js\nReferenced from: /home/vagrant/www/node-wallet-app/node_modules/eslint-config-airbnb/index.js\nReferenced from: /home/vagrant/www/node-wallet-app/.eslintrc.js\n    at validateRuleOptions (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-validator.js:113:15)\n    at /home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-validator.js:153:9\n    at Array.forEach (native)\n    at validateRules (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-validator.js:152:30)\n    at Object.validate (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-validator.js:230:5)\n    at loadFromDisk (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:549:19)\n    at load (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:592:20)\n    at /home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:421:36\n    at Array.reduceRight (native)\n    at applyExtends (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:403:28)\n    at loadFromDisk (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:556:22)\n    at load (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:592:20)\n    at /home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:421:36\n    at Array.reduceRight (native)\n    at applyExtends (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:403:28)\n    at loadFromDisk (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:556:22)\n    at load (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:592:20)\n    at /home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:421:36\n    at Array.reduceRight (native)\n    at applyExtends (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:403:28)\n    at loadFromDisk (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:556:22)\n    at Object.load (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config/config-file.js:592:20)\n    at Config.getLocalConfigHierarchy (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config.js:226:44)\n    at Config.getConfigHierarchy (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config.js:180:43)\n    at Config.getConfigVector (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config.js:285:21)\n    at Config.getConfig (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/config.js:328:29)\n    at processText (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/cli-engine.js:158:33)\n    at CLIEngine.executeOnText (/home/vagrant/www/node-wallet-app/node_modules/eslint/lib/cli-engine.js:606:17)\n    at lint (/home/vagrant/www/node-wallet-app/node_modules/eslint-loader/index.js:218:17)\n    at Object.module.exports (/home/vagrant/www/node-wallet-app/node_modules/eslint-loader/index.js:213:21)");

/***/ })
/******/ ]);