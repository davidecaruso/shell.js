/*!
 * shell.js - A JavaScript library to create HTML terminals in web pages.
 * Author: Davide Caruso <davide.caruso93@gmail.com>
 * Version: v3.0.0-rc.2
 * URL: https://davidecaruso.github.io/shell.js
 * License(s): MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Shell", [], factory);
	else if(typeof exports === 'object')
		exports["Shell"] = factory();
	else
		root["Shell"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/shell.eot?kg1zqe":
/*!***************************************!*\
  !*** ./assets/fonts/shell.eot?kg1zqe ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,yAYAACQGAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA2UwyQgAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIF6wAAALwAAABgY21hcLHrq+QAAAEcAAAAfGdhc3AAAAAQAAABmAAAAAhnbHlmacjZyQAAAaAAAAIcaGVhZA66QEYAAAO8AAAANmhoZWEHbAPMAAAD9AAAACRobXR4IgAFcAAABBgAAAAsbG9jYQG6AmIAAAREAAAAGG1heHAADgA0AAAEXAAAACBuYW1lmUoJ+wAABHwAAAGGcG9zdAADAAAAAAYEAAAAIAADA8ABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkBA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABABgAAAAFAAQAAMABAABACDhW+LH48HlzeXd6QH//f//AAAAAAAg4Vvix+PB5c3l3ekA//3//wAB/+MeqR0+HEUaOhorFwkAAwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABANYBgQMqAdUAAwAAASE1IQMq/awCVAGBVAAAAQBWAFUDqgMBABEAAAEXITIWFREUBiMhIiY1ETQ2MwGqVgFWIjIxI/1UIjIxIwMBVjQi/lYjMzMjAgAiNAAAAAIAgAArA4ADKwADABMAACURIREBMhYVERQGIyEiJjURNDYzAyr9rAJUIjQzI/2sIjQzI4ECVP2sAqo0Iv2sIzMzIwJUIjQAAAEA1gCBAyoC1QALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uApnu7jzu7jzu7jzu7gACAO4AqwMAAqsAAwAJAAABMxEjATcJASc3AqpWVv5EPAEA/wA8xAKr/gABxDz/AP8APMQAAQGPAVwCcQI9AAwAAAEUFjMyNjU0JiMiBhUBj0IvL0JCLy9CAc0vQkIvLkJCLgAAAgBx/9cDigO+ACUAMQAAAS4DBw4DFx4BFwEOAR8BHgE/AT4BPwQWNjc+AycHBiYnLgE3PgEXHgEDigo6VWc3N2FEIQoEFQ7+9wgHAhEDFQxODRsHaQFHeh5NGTdOLw0Jgh5BKys4Hh5nKysTAts5XT4ZCgo0TmM5GUUc/nULIg1lDRACDwITDKkBDccFAgQLQl5xOU4tJSAfNC0tEyAfbAAAAAABAAAAAAAAQjJM2V8PPPUACwQAAAAAANX4/doAAAAA1fj92gAA/9cDqgO+AAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOqAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAANYEAABWBAAAgAQAANYEAADuBAABjwQAAHEAAAAAAAoAFAAeACwATABwAIoApAC8AQ4AAQAAAAsAMgACAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="

/***/ }),

/***/ "./assets/fonts/shell.svg?kg1zqe":
/*!***************************************!*\
  !*** ./assets/fonts/shell.svg?kg1zqe ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTViOyIgZ2x5cGgtbmFtZT0ibWluaW1pemUiIGQ9Ik04MTAgMzg0LjY2N2gtNTk2djg0aDU5NnYtODR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTJjNzsiIGdseXBoLW5hbWU9ImZvbGRlciIgZD0iTTQyNiA3NjguNjY3bDg2LTg2aDM0MmM0NiAwIDg0LTQwIDg0LTg2di00MjZjMC00Ni0zOC04Ni04NC04NmgtNjg0Yy00NiAwLTg0IDQwLTg0IDg2djUxMmMwIDQ2IDM4IDg2IDg0IDg2aDI1NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlM2MxOyIgZ2x5cGgtbmFtZT0iZW5sYXJnZSIgZD0iTTgxMCAxMjguNjY3djU5NmgtNTk2di01OTZoNTk2ek04MTAgODEwLjY2N2M0NiAwIDg2LTQwIDg2LTg2di01OTZjMC00Ni00MC04Ni04Ni04NmgtNTk2Yy00NiAwLTg2IDQwLTg2IDg2djU5NmMwIDQ2IDQwIDg2IDg2IDg2aDU5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNWNkOyIgZ2x5cGgtbmFtZT0iY2xvc2UiIGQ9Ik04MTAgNjY0LjY2N2wtMjM4LTIzOCAyMzgtMjM4LTYwLTYwLTIzOCAyMzgtMjM4LTIzOC02MCA2MCAyMzggMjM4LTIzOCAyMzggNjAgNjAgMjM4LTIzOCAyMzggMjM4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU1ZGQ7IiBnbHlwaC1uYW1lPSJjb21tYW5kIiBkPSJNNjgyIDY4Mi42NjdoODZ2LTUxMmgtODZ2NTEyek0yMzggNjIyLjY2N2w2MCA2MCAyNTYtMjU2LTI1Ni0yNTYtNjAgNjAgMTk2IDE5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0iZG90IiBkPSJNMzk5LjM2IDQ2MC44YzAtNjIuMjA4IDUwLjQ4My0xMTIuNjQgMTEyLjY5MS0xMTIuNjRzMTEyLjU4OSA1MC40ODMgMTEyLjU4OSAxMTIuNjRjMCA2Mi4yMDgtNTAuMzgxIDExMi41ODktMTEyLjU4OSAxMTIuNTg5cy0xMTIuNjkxLTUwLjM4MS0xMTIuNjkxLTExMi41ODl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImtleSIgZD0iTTkwNS43NzkgNzMwLjg4Yy0yNS43NTQgMTUyLjQyMi0xNjQuODY0IDI1NC4zMS0zMTAuNzMzIDIyNy4zNzktMTQ1LjkyLTI2Ljg4LTI2OS4xMDctMTQ0LjE3OS0yNDMuMzU0LTI5Ni43MDQgNS40NzgtMzIuODE5IDIwLjg5LTg0LjE3MyAzOS4wNjYtMTIxLjA4OGwtMjY0Ljk2LTM5NS40MThjLTkuNzc5LTE0LjU5Mi0xNS4zMDktNDAuOTA5LTEyLjM5LTU4LjQxOWwxNy4wNTAtMTAwLjkxNWMyLjk3LTE3LjUxIDE5LjA0Ni0yOS4yODYgMzUuODQtMjYuMzE3bDc3LjYxOSAxNC4zODdjMTYuNzk0IDMuMDIxIDM4LjA5MyAxNy44MTggNDcuMzA5IDMyLjcxN2wxMDQuODA2IDE2OS41MjMgMC45MjIgMS4xMjYgNzAuOTYzIDEzLjEwNyAxMjIuMzY4IDE5OC42MDVjNDAuMTkyLTcuMTE3IDk3Ljg5NC00LjcxIDEzMS45OTQgMS41ODcgMTQ1LjgxOCAyNi45MzEgMjA5LjI1NCAxODcuOTA0IDE4My41MDEgMzQwLjQyOXpNNzc2LjQ5OSA2NTIuNjk4Yy00MC4xNDEtNTkuOTA0LTgxLjEwMS0xNy43MTUtMTM4LjM5NCAyNC4zMi01Ny4yOTMgNDEuODgyLTEwOS4zMTIgNjcuNjg2LTY5LjIyMiAxMjcuNTkgNDAuMTQxIDU5LjkwNCAxMTkuMDkxIDc0LjQ5NiAxNzYuNDg2IDMyLjUxMiA1Ny4zNDQtNDEuOTMzIDcxLjIxOS0xMjQuNTE4IDMxLjEzLTE4NC40MjJ6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="

/***/ }),

/***/ "./assets/fonts/shell.ttf?kg1zqe":
/*!***************************************!*\
  !*** ./assets/fonts/shell.ttf?kg1zqe ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBesAAAC8AAAAYGNtYXCx66vkAAABHAAAAHxnYXNwAAAAEAAAAZgAAAAIZ2x5ZmnI2ckAAAGgAAACHGhlYWQOukBGAAADvAAAADZoaGVhB2wDzAAAA/QAAAAkaG10eCIABXAAAAQYAAAALGxvY2EBugJiAAAERAAAABhtYXhwAA4ANAAABFwAAAAgbmFtZZlKCfsAAAR8AAABhnBvc3QAAwAAAAAGBAAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAQPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAYAAAABQAEAADAAQAAQAg4Vvix+PB5c3l3ekB//3//wAAAAAAIOFb4sfjweXN5d3pAP/9//8AAf/jHqkdPhxFGjoaKxcJAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQDWAYEDKgHVAAMAAAEhNSEDKv2sAlQBgVQAAAEAVgBVA6oDAQARAAABFyEyFhURFAYjISImNRE0NjMBqlYBViIyMSP9VCIyMSMDAVY0Iv5WIzMzIwIAIjQAAAACAIAAKwOAAysAAwATAAAlESERATIWFREUBiMhIiY1ETQ2MwMq/awCVCI0MyP9rCI0MyOBAlT9rAKqNCL9rCMzMyMCVCI0AAABANYAgQMqAtUACwAAAQcXBycHJzcnNxc3Ayru7jzu7jzu7jzu7gKZ7u487u487u487u4AAgDuAKsDAAKrAAMACQAAATMRIwE3CQEnNwKqVlb+RDwBAP8APMQCq/4AAcQ8/wD/ADzEAAEBjwFcAnECPQAMAAABFBYzMjY1NCYjIgYVAY9CLy9CQi8vQgHNL0JCLy5CQi4AAAIAcf/XA4oDvgAlADEAAAEuAwcOAxceARcBDgEfAR4BPwE+AT8EFjY3PgMnBwYmJy4BNz4BFx4BA4oKOlVnNzdhRCEKBBUO/vcIBwIRAxUMTg0bB2kBR3oeTRk3Ti8NCYIeQSsrOB4eZysrEwLbOV0+GQoKNE5jORlFHP51CyINZQ0QAg8CEwypAQ3HBQIEC0JecTlOLSUgHzQtLRMgH2wAAAAAAQAAAAAAAEIyTNlfDzz1AAsEAAAAAADV+P3aAAAAANX4/doAAP/XA6oDvgAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADqgABAAAAAAAAAAAAAAAAAAAACwQAAAAAAAAAAAAAAAIAAAAEAADWBAAAVgQAAIAEAADWBAAA7gQAAY8EAABxAAAAAAAKABQAHgAsAEwAcACKAKQAvAEOAAEAAAALADIAAgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),

/***/ "./assets/fonts/shell.woff?kg1zqe":
/*!****************************************!*\
  !*** ./assets/fonts/shell.woff?kg1zqe ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAAAZwAAsAAAAABiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF62NtYXAAAAFoAAAAfAAAAHyx66vkZ2FzcAAAAeQAAAAIAAAACAAAABBnbHlmAAAB7AAAAhwAAAIcacjZyWhlYWQAAAQIAAAANgAAADYOukBGaGhlYQAABEAAAAAkAAAAJAdsA8xobXR4AAAEZAAAACwAAAAsIgAFcGxvY2EAAASQAAAAGAAAABgBugJibWF4cAAABKgAAAAgAAAAIAAOADRuYW1lAAAEyAAAAYYAAAGGmUoJ+3Bvc3QAAAZQAAAAIAAAACAAAwAAAAMDwAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAGAAAAAUABAAAwAEAAEAIOFb4sfjweXN5d3pAf/9//8AAAAAACDhW+LH48HlzeXd6QD//f//AAH/4x6pHT4cRRo6GisXCQADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEA1gGBAyoB1QADAAABITUhAyr9rAJUAYFUAAABAFYAVQOqAwEAEQAAARchMhYVERQGIyEiJjURNDYzAapWAVYiMjEj/VQiMjEjAwFWNCL+ViMzMyMCACI0AAAAAgCAACsDgAMrAAMAEwAAJREhEQEyFhURFAYjISImNRE0NjMDKv2sAlQiNDMj/awiNDMjgQJU/awCqjQi/awjMzMjAlQiNAAAAQDWAIEDKgLVAAsAAAEHFwcnByc3JzcXNwMq7u487u487u487u4Cme7uPO7uPO7uPO7uAAIA7gCrAwACqwADAAkAAAEzESMBNwkBJzcCqlZW/kQ8AQD/ADzEAqv+AAHEPP8A/wA8xAABAY8BXAJxAj0ADAAAARQWMzI2NTQmIyIGFQGPQi8vQkIvL0IBzS9CQi8uQkIuAAACAHH/1wOKA74AJQAxAAABLgMHDgMXHgEXAQ4BHwEeAT8BPgE/BBY2Nz4DJwcGJicuATc+ARceAQOKCjpVZzc3YUQhCgQVDv73CAcCEQMVDE4NGwdpAUd6Hk0ZN04vDQmCHkErKzgeHmcrKxMC2zldPhkKCjROYzkZRRz+dQsiDWUNEAIPAhMMqQENxwUCBAtCXnE5Ti0lIB80LS0TIB9sAAAAAAEAAAAAAABCMkzZXw889QALBAAAAAAA1fj92gAAAADV+P3aAAD/1wOqA74AAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA6oAAQAAAAAAAAAAAAAAAAAAAAsEAAAAAAAAAAAAAAACAAAABAAA1gQAAFYEAACABAAA1gQAAO4EAAGPBAAAcQAAAAAACgAUAB4ALABMAHAAigCkALwBDgABAAAACwAyAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ }),

/***/ "./node_modules/101/exists.js":
/*!************************************!*\
  !*** ./node_modules/101/exists.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @module {function} 101/exists
 * @type {function}
 */

/**
 * Returns false for null and undefined, true for everything else.
 * @function module:101/exists
 * @param val {*} - value to be existance checked
 * @return {boolean} whether the value exists or not
 */
module.exports = exists;

function exists (val) {
  return val !== undefined && val !== null;
}

/***/ }),

/***/ "./node_modules/101/find-index.js":
/*!****************************************!*\
  !*** ./node_modules/101/find-index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module 101/find-index
 */

var isFunction = __webpack_require__(/*! ./is-function */ "./node_modules/101/is-function.js");
var exists = __webpack_require__(/*! ./exists */ "./node_modules/101/exists.js");

/**
 * Finds the first value in the list that passes the given function (predicate) and returns it's index.
 * If list is not provided findIndex will return a partial-function which accepts a list as the first argument.
 * @function module:101/find-index
 *
 * @param {array|string} list - list to be searched
 * @param {function} predicate - executed on each item in the list and returns true when the item is found
 * @return {number} - index of first item which passes predicate
 *
 * @param {function} predicate - executed on each item in the list and returns true when the item is found
 * @return {function} - partial function (accepts list and returns index of first item that passes predicate)
 */
module.exports = function (list, predicate) {
  if (exists(list && list.length) && !isFunction(list)) {
    return findIndex(list, predicate);
  }
  else if (isFunction(list)) {
    predicate = list;
    return function (list) {
      return findIndex(list, predicate);
    };
  }
  else {
    throw new TypeError('first argument must be a list (have length) or function');
  }
};

function findIndex (list, predicate) {
  if (!exists(list && list.length)) {
    throw new TypeError('list must have length property');
  }
  if (!isFunction(predicate)) {
    throw new TypeError('predicate must be a function');
  }

  var index = -1;
  list = Array.prototype.slice.call(list); // cast as array to use some.
  list.some(function (val, i) {
    if (predicate(val, i, list)) {
      index = i;
      return true;
    }
  });

  return index;
}


/***/ }),

/***/ "./node_modules/101/is-function.js":
/*!*****************************************!*\
  !*** ./node_modules/101/is-function.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @module 101/is-function
 */

/**
 * Functional version of val typeof 'function'
 * @function module:101/is-function
 * @param {*} val - value checked to be a function
 * @return {boolean} Whether the value is a function or not
 */
module.exports = isFunction;

function isFunction (v) {
  return typeof v === 'function';
}

/***/ }),

/***/ "./node_modules/@emmetio/abbreviation/dist/abbreviation.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@emmetio/abbreviation/dist/abbreviation.es.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/stream-reader-utils */ "./node_modules/@emmetio/stream-reader-utils/dist/stream-reader-utils.es.js");
/* harmony import */ var _emmetio_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emmetio/node */ "./node_modules/@emmetio/node/dist/node.es.js");
/* harmony import */ var _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emmetio/stream-reader */ "./node_modules/@emmetio/stream-reader/dist/stream-reader.es.js");




const ASTERISK = 42; // *

/**
 * Consumes node repeat token from current stream position and returns its
 * parsed value
 * @param  {StringReader} stream
 * @return {Object}
 */
function consumeRepeat(stream) {
	if (stream.eat(ASTERISK)) {
		stream.start = stream.pos;

		// XXX think about extending repeat syntax with through numbering
		return { count: stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"]) ? +stream.current() : null };
	}
}

const opt = { throws: true };

/**
 * Consumes quoted literal from current stream position and returns it’s inner,
 * unquoted, value
 * @param  {StringReader} stream
 * @return {String} Returns `null` if unable to consume quoted value from current
 * position
 */
function consumeQuoted(stream) {
	if (Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["eatQuoted"])(stream, opt)) {
		return stream.current().slice(1, -1);
	}
}

const TEXT_START = 123; // {
const TEXT_END = 125; // }
const ESCAPE =  92; // \ character

/**
 * Consumes text node `{...}` from stream
 * @param  {StreamReader} stream
 * @return {String} Returns consumed text value (without surrounding braces) or
 * `null` if there’s no text at starting position
 */
function consumeText(stream) {
	// NB using own implementation instead of `eatPair()` from @emmetio/stream-reader-utils
	// to disable quoted value consuming
	const start = stream.pos;

	if (stream.eat(TEXT_START)) {
		let stack = 1, ch;
		let result = '';
		let offset = stream.pos;

		while (!stream.eof()) {
			ch = stream.next();
			if (ch === TEXT_START) {
				stack++;
			} else if (ch === TEXT_END) {
				stack--;
				if (!stack) {
					stream.start = start;
					return result + stream.substring(offset, stream.pos - 1);
				}
			} else if (ch === ESCAPE) {
				ch = stream.next();
				if (ch === TEXT_START || ch === TEXT_END) {
					result += stream.substring(offset, stream.pos - 2) + String.fromCharCode(ch);
					offset = stream.pos;
				}
			}
		}

		// If we’re here then paired character can’t be consumed
		stream.pos = start;
		throw stream.error(`Unable to find closing ${String.fromCharCode(TEXT_END)} for text start`);
	}

	return null;
}

const EXCL       = 33; // .
const DOT        = 46; // .
const EQUALS     = 61; // =
const ATTR_OPEN  = 91; // [
const ATTR_CLOSE = 93; // ]

const reAttributeName = /^\!?[\w\-:\$@]+\.?$/;

/**
 * Consumes attributes defined in square braces from given stream.
 * Example:
 * [attr col=3 title="Quoted string" selected. support={react}]
 * @param {StringReader} stream
 * @returns {Array} Array of consumed attributes
 */
function consumeAttributes(stream) {
	if (!stream.eat(ATTR_OPEN)) {
		return null;
	}

	const result = [];
	let token, attr;

	while (!stream.eof()) {
		stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isWhiteSpace"]);

		if (stream.eat(ATTR_CLOSE)) {
			return result; // End of attribute set
		} else if ((token = consumeQuoted(stream)) != null) {
			// Consumed quoted value: anonymous attribute
			result.push({
				name: null,
				value: token
			});
		} else if (eatUnquoted(stream)) {
			// Consumed next word: could be either attribute name or unquoted default value
			token = stream.current();
			if (!reAttributeName.test(token)) {
				// anonymous attribute
				result.push({ name: null, value: token });
			} else {
				// Looks like a regular attribute
				attr = parseAttributeName(token);
				result.push(attr);

				if (stream.eat(EQUALS)) {
					// Explicitly defined value. Could be a word, a quoted string
					// or React-like expression
					if ((token = consumeQuoted(stream)) != null) {
						attr.value = token;
					} else if ((token = consumeText(stream)) != null) {
						attr.value = token;
						attr.options = {
							before: '{',
							after: '}'
						};
					} else if (eatUnquoted(stream)) {
						attr.value = stream.current();
					}
				}
			}
		} else {
			throw stream.error('Expected attribute name');
		}
	}

	throw stream.error('Expected closing "]" brace');
}

function parseAttributeName(name) {
	const options = {};

	// If a first character in attribute name is `!` — it’s an implied
	// default attribute
	if (name.charCodeAt(0) === EXCL) {
		name = name.slice(1);
		options.implied = true;
	}

	// Check for last character: if it’s a `.`, user wants boolean attribute
	if (name.charCodeAt(name.length - 1) === DOT) {
		name = name.slice(0, name.length - 1);
		options.boolean = true;
	}

	const attr = { name };
	if (Object.keys(options).length) {
		attr.options = options;
	}

	return attr;
}

/**
 * Eats token that can be an unquoted value from given stream
 * @param  {StreamReader} stream
 * @return {Boolean}
 */
function eatUnquoted(stream) {
	const start = stream.pos;
	if (stream.eatWhile(isUnquoted)) {
		stream.start = start;
		return true;
	}
}

function isUnquoted(code) {
	return !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isSpace"])(code) && !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isQuote"])(code)
		&& code !== ATTR_OPEN && code !== ATTR_CLOSE && code !== EQUALS;
}

const HASH    = 35; // #
const DOT$1     = 46; // .
const SLASH   = 47; // /

/**
 * Consumes a single element node from current abbreviation stream
 * @param  {StringReader} stream
 * @return {Node}
 */
function consumeElement(stream) {
	// consume element name, if provided
	const start = stream.pos;
	const node = new _emmetio_node__WEBPACK_IMPORTED_MODULE_1__["default"](eatName(stream));
	let next;

	while (!stream.eof()) {
		if (stream.eat(DOT$1)) {
			node.addClass(eatName(stream));
		} else if (stream.eat(HASH)) {
			node.setAttribute('id', eatName(stream));
		} else if (stream.eat(SLASH)) {
			// A self-closing indicator must be at the end of non-grouping node
			if (node.isGroup) {
				stream.backUp(1);
				throw stream.error('Unexpected self-closing indicator');
			}
			node.selfClosing = true;
			if (next = consumeRepeat(stream)) {
				node.repeat = next;
			}
			break;
		} else if (next = consumeAttributes(stream)) {
			for (let i = 0, il = next.length; i < il; i++) {
				node.setAttribute(next[i]);
			}
		} else if ((next = consumeText(stream)) !== null) {
			node.value = next;
		} else if (next = consumeRepeat(stream)) {
			node.repeat = next;
		} else {
			break;
		}
	}

	if (start === stream.pos) {
		throw stream.error(`Unable to consume abbreviation node, unexpected ${stream.peek()}`);
	}

	return node;
}

function eatName(stream) {
	stream.start = stream.pos;
	stream.eatWhile(isName);
	return stream.current();
}

function isName(code) {
	return Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isAlphaNumeric"])(code)
		|| code === 45 /* - */
		|| code === 58 /* : */
		|| code === 36 /* $ */
		|| code === 64 /* @ */
		|| code === 33 /* ! */
		|| code === 95 /* _ */
		|| code === 37 /* % */;
}

const GROUP_START = 40; // (
const GROUP_END   = 41; // )
const OP_SIBLING  = 43; // +
const OP_CHILD    = 62; // >
const OP_CLIMB    = 94; // ^

/**
 * Parses given string into a node tree
 * @param  {String} str Abbreviation to parse
 * @return {Node}
 */
function parse(str) {
	const stream = new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_2__["default"](str.trim());
	const root = new _emmetio_node__WEBPACK_IMPORTED_MODULE_1__["default"]();
	let ctx = root, groupStack = [], ch;

	while (!stream.eof()) {
		ch = stream.peek();

		if (ch === GROUP_START) { // start of group
			// The grouping node should be detached to properly handle
			// out-of-bounds `^` operator. Node will be attached right on group end
			const node = new _emmetio_node__WEBPACK_IMPORTED_MODULE_1__["default"]();
			groupStack.push([node, ctx, stream.pos]);
			ctx = node;
			stream.next();
			continue;
		} else if (ch === GROUP_END) { // end of group
			const lastGroup = groupStack.pop();
			if (!lastGroup) {
				throw stream.error('Unexpected ")" group end');
			}

			const node = lastGroup[0];
			ctx = lastGroup[1];
			stream.next();

			// a group can have a repeater
			if (node.repeat = consumeRepeat(stream)) {
				ctx.appendChild(node);
			} else {
				// move all children of group into parent node
				while (node.firstChild) {
					ctx.appendChild(node.firstChild);
				}
			}
			// for convenience, groups can be joined with optional `+` operator
			stream.eat(OP_SIBLING);

			continue;
		}

		const node = consumeElement(stream);
		ctx.appendChild(node);

		if (stream.eof()) {
			break;
		}

		switch (stream.peek()) {
			case OP_SIBLING:
				stream.next();
				continue;

			case OP_CHILD:
				stream.next();
				ctx = node;
				continue;

			case OP_CLIMB:
				// it’s perfectly valid to have multiple `^` operators
				while (stream.eat(OP_CLIMB)) {
					ctx = ctx.parent || ctx;
				}
				continue;
		}
	}

	if (groupStack.length) {
		stream.pos = groupStack.pop()[2];
		throw stream.error('Expected group close');
	}

	return root;
}

/**
 * Parses given abbreviation and un-rolls it into a full tree: recursively
 * replaces repeated elements with actual nodes
 * @param  {String} abbr
 * @return {Node}
 */
function index(abbr) {
	const tree = parse(abbr);
	tree.walk(unroll);
	return tree;
}

function unroll(node) {
	if (!node.repeat || !node.repeat.count) {
		return;
	}

	const parent = node.parent;
	let ix = parent.children.indexOf(node);

	for (let i = 0; i < node.repeat.count; i++) {
		const clone = node.clone(true);
		clone.repeat.value = i + 1;
		clone.walk(unroll);

		if (clone.isGroup) {
			while (clone.children.length > 0) {
				clone.firstChild.repeat = clone.repeat;
				parent.insertAt(clone.firstChild, ix++);
			}
		} else {
			parent.insertAt(clone, ix++);
		}
	}

	node.parent.removeChild(node);
}

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=abbreviation.es.js.map


/***/ }),

/***/ "./node_modules/@emmetio/css-abbreviation/dist/css-abbreviation.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@emmetio/css-abbreviation/dist/css-abbreviation.es.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/stream-reader-utils */ "./node_modules/@emmetio/stream-reader-utils/dist/stream-reader-utils.es.js");
/* harmony import */ var _emmetio_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emmetio/node */ "./node_modules/@emmetio/node/dist/node.es.js");
/* harmony import */ var _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emmetio/stream-reader */ "./node_modules/@emmetio/stream-reader/dist/stream-reader.es.js");




/**
 * A wrapper for holding CSS value
 */
class CSSValue {
	constructor() {
		this.type = 'css-value';
		this.value = [];
	}

	get size() {
		return this.value.length;
	}

	add(value) {
		this.value.push(value);
	}

	has(value) {
		return this.value.indexOf(value) !== -1;
	}

	toString() {
		return this.value.join(' ');
	}
}

const HASH = 35; // #
const DOT  = 46; // .

/**
 * Consumes a color token from given string
 * @param  {StreamReader} stream
 * @return {Color} Returns consumend color object, `undefined` otherwise
 */
function consumeColor(stream) {
	// supported color variations:
	// #abc   → #aabbccc
	// #0     → #000000
	// #fff.5 → rgba(255, 255, 255, 0.5)
	// #t     → transparent
	if (stream.peek() === HASH) {
		stream.start = stream.pos;
		stream.next();

		stream.eat(116) /* t */ || stream.eatWhile(isHex);
		const base = stream.current();

		// a hex color can be followed by `.num` alpha value
		stream.start = stream.pos;
		if (stream.eat(DOT) && !stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
			throw stream.error('Unexpected character for alpha value of color');
		}

		return new Color(base, stream.current());
	}
}

class Color {
	constructor(value, alpha) {
		this.type = 'color';
		this.raw = value;
		this.alpha = Number(alpha != null && alpha !== '' ? alpha : 1);
		value = value.slice(1); // remove #

		let r = 0, g = 0, b = 0;

		if (value === 't') {
			this.alpha = 0;
		} else {
			switch (value.length) {
				case 0:
					break;

				case 1:
					r = g = b = value + value;
					break;

				case 2:
					r = g = b = value;
					break;

				case 3:
					r = value[0] + value[0];
					g = value[1] + value[1];
					b = value[2] + value[2];
					break;

				default:
					value += value;
					r = value.slice(0, 2);
					g = value.slice(2, 4);
					b = value.slice(4, 6);
			}
		}

		this.r = parseInt(r, 16);
		this.g = parseInt(g, 16);
		this.b = parseInt(b, 16);
	}

	/**
	 * Output current color as hex value
	 * @param {Boolean} shor Produce short value (e.g. #fff instead of #ffffff), if possible
	 * @return {String}
	 */
	toHex(short) {
		const fn = (short && isShortHex(this.r) && isShortHex(this.g) && isShortHex(this.b))
			? toShortHex : toHex;

		return '#' + fn(this.r)  + fn(this.g) + fn(this.b);
	}

	/**
	 * Output current color as `rgba?(...)` CSS color
	 * @return {String}
	 */
	toRGB() {
		const values = [this.r, this.g, this.b];
		if (this.alpha !== 1) {
			values.push(this.alpha.toFixed(8).replace(/\.?0+$/, ''));
		}

		return `${values.length === 3 ? 'rgb' : 'rgba'}(${values.join(', ')})`;
	}

	toString(short) {
		if (!this.r && !this.g && !this.b && !this.alpha) {
			return 'transparent';
		}
		return this.alpha === 1 ? this.toHex(short) : this.toRGB();
	}
}

/**
 * Check if given code is a hex value (/0-9a-f/)
 * @param  {Number}  code
 * @return {Boolean}
 */
function isHex(code) {
	return Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(code) || Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isAlpha"])(code, 65, 70); // A-F
}

function isShortHex(hex) {
	return !(hex % 17);
}

function toShortHex(num) {
	return (num >> 4).toString(16);
}

function toHex(num) {
	return pad(num.toString(16), 2);
}

function pad(value, len) {
	while (value.length < len) {
		value = '0' + value;
	}
	return value;
}

/**
 * @param  {Number}  code
 * @return {Boolean}
 */
function isAlphaNumericWord(code) {
	return Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(code) || isAlphaWord(code);
}

/**
 * @param  {Number}  code
 * @return {Boolean}
 */
function isAlphaWord(code) {
	return code === 95 /* _ */ || Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isAlpha"])(code);
}

const PERCENT = 37; // %
const DOT$1     = 46; // .
const DASH    = 45; // -

/**
 * Consumes numeric CSS value (number with optional unit) from current stream,
 * if possible
 * @param  {StreamReader} stream
 * @return {NumericValue}
 */
function consumeNumericValue(stream) {
	stream.start = stream.pos;
	if (eatNumber(stream)) {
		const num = stream.current();
		stream.start = stream.pos;

		// eat unit, which can be a % or alpha word
		stream.eat(PERCENT) || stream.eatWhile(isAlphaWord);
		return new NumericValue(num, stream.current());
	}
}

/**
 * A numeric CSS value with optional unit
 */
class NumericValue {
	constructor(value, unit) {
		this.type = 'numeric';
		this.value = Number(value);
		this.unit = unit || '';
	}

	toString() {
		return `${this.value}${this.unit}`;
	}
}

/**
 * Eats number value from given stream
 * @param  {StreamReader} stream
 * @return {Boolean} Returns `true` if number was consumed
 */
function eatNumber(stream) {
	const start = stream.pos;
	const negative = stream.eat(DASH);
	const afterNegative = stream.pos;

	stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"]);
	
	const prevPos = stream.pos;
	if (stream.eat(DOT$1) && !stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
		// Number followed by a dot, but then no number
		stream.pos = prevPos;
	}

	// Edge case: consumed dash only: not a number, bail-out
	if (stream.pos === afterNegative) {
		stream.pos = start;
	}

	return stream.pos !== start;
}

const DOLLAR = 36; // $
const DASH$1   = 45; // -
const AT     = 64; // @

/**
 * Consumes a keyword: either a variable (a word that starts with $ or @) or CSS
 * keyword or shorthand
 * @param  {StreamReader} stream
 * @param  {Boolean} [short] Use short notation for consuming value.
 * The difference between “short” and “full” notation is that first one uses
 * alpha characters only and used for extracting keywords from abbreviation,
 * while “full” notation also supports numbers and dashes
 * @return {String} Consumed variable
 */
function consumeKeyword(stream, short) {
	stream.start = stream.pos;

	if (stream.eat(DOLLAR) || stream.eat(AT)) {
		// SCSS or LESS variable
		stream.eatWhile(isVariableName);
	} else if (short) {
		stream.eatWhile(isAlphaWord);
	} else {
		stream.eatWhile(isKeyword);
	}

	return stream.start !== stream.pos ? new Keyword(stream.current()) : null;
}

class Keyword {
	constructor(value) {
		this.type = 'keyword';
		this.value = value;
	}

	toString() {
		return this.value;
	}
}

function isKeyword(code) {
	return isAlphaNumericWord(code) || code === DASH$1;
}

function isVariableName(code) {
	return code === 45 /* - */ || isAlphaNumericWord(code);
}

const opt = { throws: true };

/**
 * Consumes 'single' or "double"-quoted string from given string, if possible
 * @param  {StreamReader} stream
 * @return {String}
 */
function consumeQuoted(stream) {
	if (Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["eatQuoted"])(stream, opt)) {
		return new QuotedString(stream.current());
	}
}

class QuotedString {
	constructor(value) {
		this.type = 'string';
		this.value = value;
	}

	toString() {
		return this.value;
	}
}

const LBRACE = 40; // (
const RBRACE = 41; // )
const COMMA  = 44; // ,

/**
 * Consumes arguments from given string.
 * Arguments are comma-separated list of CSS values inside round braces, e.g.
 * `(1, a2, 'a3')`. Nested lists and quoted strings are supported
 * @param  {StreamReader} stream
 * @return {Array}        Array of arguments, `null` if arguments cannot be consumed
 */
function consumeArgumentList(stream) {
	if (!stream.eat(LBRACE)) {
		// not an argument list
		return null;
	}

	let arg;
	const argsList = [];

	while (!stream.eof()) {
		if (arg = consumeArgument(stream)) {
			argsList.push(arg);
		} else {
			// didn’t consumed argument, expect argument separator or end-of-arguments
			stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isWhiteSpace"]);

			if (stream.eat(RBRACE)) {
				// end of arguments list
				break;
			}

			if (!stream.eat(COMMA)) {
				throw stream.error('Expected , or )');
			}
		}
	}

	return argsList;
}

/**
 * Consumes a single argument. An argument is a `CSSValue`, e.g. it could be
 * a space-separated string of value
 * @param  {StreamReader} stream
 * @return {CSSValue}
 */
function consumeArgument(stream) {
	const result = new CSSValue();
	let value;

	while (!stream.eof()) {
		stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_0__["isWhiteSpace"]);
		value = consumeNumericValue(stream) || consumeColor(stream)
			|| consumeQuoted(stream) || consumeKeywordOrFunction(stream);

		if (!value) {
			break;
		}

		result.add(value);
	}

	return result.size ? result : null;
}

/**
 * Consumes either function call like `foo()` or keyword like `foo`
 * @param  {StreamReader} stream
 * @return {Keyword|FunctionCall}
 */
function consumeKeywordOrFunction(stream) {
	const kw = consumeKeyword(stream);
	if (kw) {
		const args = consumeArgumentList(stream);
		return args ? new FunctionCall(kw.toString(), args) : kw;
	}
}

class FunctionCall {
	/**
	 * @param {String} name Function name
	 * @param {Array}  args Function arguments
	 */
	constructor(name, args) {
		this.type = 'function';
		this.name = name;
		this.args = args || [];
	}

	toString() {
		return `${this.name}(${this.args.join(', ')})`;
	}
}

const EXCL   = 33; // !
const DOLLAR$1 = 36; // $
const PLUS   = 43; // +
const DASH$2   = 45; // -
const COLON  = 58; // :
const AT$1     = 64; // @

/**
 * Parses given Emmet CSS abbreviation and returns it as parsed Node tree
 * @param {String} abbr
 * @return {Node}
 */
function index(abbr) {
	const root = new _emmetio_node__WEBPACK_IMPORTED_MODULE_1__["default"]();
	const stream = new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_2__["default"](abbr);

	while (!stream.eof()) {
		let node = new _emmetio_node__WEBPACK_IMPORTED_MODULE_1__["default"](consumeIdent(stream));
		node.value = consumeValue(stream);

		const args = consumeArgumentList(stream);
		if (args) {
			// technically, arguments in CSS are anonymous Emmet Node attributes,
			// but since Emmet can support only one anonymous, `null`-name
			// attribute (for good reasons), we’ll use argument index as name
			for (let i = 0; i < args.length; i++) {
				node.setAttribute(String(i), args[i]);
			}
		}

		// Consume `!important` modifier at the end of expression
		if (stream.eat(EXCL)) {
			node.value.add('!');
		}

		root.appendChild(node);

		// CSS abbreviations cannot be nested, only listed
		if (!stream.eat(PLUS)) {
			break;
		}
	}

	if (!stream.eof()) {
		throw stream.error('Unexpected character');
	}

	return root;
}

/**
 * Consumes CSS property identifier from given stream
 * @param  {StreamReader} stream
 * @return {String}
 */
function consumeIdent(stream) {
	stream.start = stream.pos;
	stream.eatWhile(isIdentPrefix);
	stream.eatWhile(isIdent);
	return stream.start !== stream.pos ? stream.current() : null;
}

/**
 * Consumes embedded value from Emmet CSS abbreviation stream
 * @param  {StreamReader} stream
 * @return {CSSValue}
 */
function consumeValue(stream) {
	const values = new CSSValue();
	let value;

	while (!stream.eof()) {
		// use colon as value separator
		stream.eat(COLON);
		if (value = consumeNumericValue(stream) || consumeColor(stream)) {
			// edge case: a dash after unit-less numeric value or color should
			// be treated as value separator, not negative sign
			if (!value.unit) {
				stream.eat(DASH$2);
			}
		} else {
			stream.eat(DASH$2);
			value = consumeKeyword(stream, true);
		}

		if (!value) {
			break;
		}

		values.add(value);
	}

	return values;
}

/**
 * @param  {Number}  code
 * @return {Boolean}
 */
function isIdent(code) {
	return isAlphaWord(code);
}

/**
 * @param  {Number}  code
 * @return {Boolean}
 */
function isIdentPrefix(code) {
	return code === AT$1 || code === DOLLAR$1 || code === EXCL;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emmetio/css-snippets-resolver/dist/css-snippets-resolver.es.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@emmetio/css-snippets-resolver/dist/css-snippets-resolver.es.js ***!
  \**************************************************************************************/
/*! exports provided: default, convertToCSSSnippets, stringScore, cssSnippets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToCSSSnippets", function() { return convertToCSSSnippets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringScore", function() { return stringScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssSnippets", function() { return cssSnippets; });
const DASH = 45; // -

/**
 * Calculates fuzzy match score of how close `abbr` matches given `string`.
 * @param  {String} abbr        Abbreviation to score
 * @param  {String} string      String to match
 * @param  {Number} [fuzziness] Fuzzy factor
 * @return {Number}             Match score
 */
function stringScore(abbr, string) {
	abbr = abbr.toLowerCase();
	string = string.toLowerCase();

	if (abbr === string) {
		return 1;
	}

	// a string MUST start with the same character as abbreviation
	if (!string || abbr.charCodeAt(0) !== string.charCodeAt(0)) {
		return 0;
	}

	const abbrLength = abbr.length;
	const stringLength = string.length;
	let i = 1, j = 1, score = stringLength;
	let ch1, ch2, found, acronym;

	while (i < abbrLength) {
		ch1 = abbr.charCodeAt(i);
		found = false;
		acronym = false;

		while (j < stringLength) {
			ch2 = string.charCodeAt(j);

			if (ch1 === ch2) {
				found = true;
				score += (stringLength - j) * (acronym ? 2 : 1);
				break;
			}

			// add acronym bonus for exactly next match after unmatched `-`
			acronym = ch2 === DASH;
			j++;
		}

		if (!found) {
			break;
		}

		i++;
	}

	return score && score * (i / abbrLength) / sum(stringLength);
}

/**
 * Calculates sum of first `n` natural numbers, e.g. 1+2+3+...n
 * @param  {Number} n
 * @return {Number}
 */
function sum(n) {
	return n * (n + 1) / 2;
}

const reProperty = /^([a-z-]+)(?:\s*:\s*([^\n\r]+))?$/;
const DASH$1 = 45; // -

/**
 * Creates a special structure for resolving CSS properties from plain CSS
 * snippets.
 * Almost all CSS snippets are aliases for real CSS properties with available
 * value variants, optionally separated by `|`. Most values are keywords that
 * can be fuzzy-resolved as well. Some CSS properties are shorthands for other,
 * more specific properties, like `border` and `border-style`. For such cases
 * keywords from more specific properties should be available in shorthands too.
 * @param {Snippet[]} snippets
 * @return {CSSSnippet[]}
 */
function cssSnippets(snippets) {
	return nest( snippets.map(snippet => new CSSSnippet(snippet.key, snippet.value)) );
}

class CSSSnippet {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.property = null;

		// detect if given snippet is a property
		const m = value && value.match(reProperty);
		if (m) {
			this.property = m[1];
			this.value = m[2];
		}

		this.dependencies = [];
	}

	addDependency(dep) {
		this.dependencies.push(dep);
	}

	get defaultValue() {
		return this.value != null ? splitValue(this.value)[0] : null;
	}

	/**
	 * Returns list of unique keywords for current CSS snippet and its dependencies
	 * @return {String[]}
	 */
	keywords() {
		const stack = [];
		const keywords = new Set();
		let i = 0, item, candidates;

		if (this.property) {
			// scan valid CSS-properties only
			stack.push(this);
		}

		while (i < stack.length) {
			// NB Keep items in stack instead of push/pop to avoid possible
			// circular references
			item = stack[i++];

			if (item.value) {
				candidates = splitValue(item.value).filter(isKeyword);

				// extract possible keywords from snippet value
				for (let j = 0; j < candidates.length; j++) {
					keywords.add(candidates[j].trim());
				}

				// add dependencies into scan stack
				for (let j = 0, deps = item.dependencies; j < deps.length; j++) {
					if (stack.indexOf(deps[j]) === -1) {
						stack.push(deps[j]);
					}
				}
			}
		}

		return Array.from(keywords);
	}
}

/**
 * Nests more specific CSS properties into shorthand ones, e.g.
 * background-position-x -> background-position -> background
 * @param  {CSSSnippet[]} snippets
 * @return {CSSSnippet[]}
 */
function nest(snippets) {
	snippets = snippets.sort(snippetsSort);
	const stack = [];

	// For sorted list of CSS properties, create dependency graph where each
	// shorthand property contains its more specific one, e.g.
	// background -> background-position -> background-position-x
	for (let i = 0, cur, prev; i < snippets.length; i++) {
		cur = snippets[i];

		if (!cur.property) {
			// not a CSS property, skip it
			continue;
		}

		// Check if current property belongs to one from parent stack.
		// Since `snippets` array is sorted, items are perfectly aligned
		// from shorthands to more specific variants
		while (stack.length) {
			prev = stack[stack.length - 1];

			if (cur.property.indexOf(prev.property) === 0
				&& cur.property.charCodeAt(prev.property.length) === DASH$1) {
				prev.addDependency(cur);
				stack.push(cur);
				break;
			}

			stack.pop();
		}

		if (!stack.length) {
			stack.push(cur);
		}
	}

	return snippets;
}

/**
 * A sorting function for array of snippets
 * @param  {CSSSnippet} a
 * @param  {CSSSnippet} b
 * @return {Number}
 */
function snippetsSort(a, b) {
	if (a.key === b.key) {
		return 0;
	}

	return a.key < b.key ? -1 : 1;
}

/**
 * Check if given string is a keyword candidate
 * @param  {String}  str
 * @return {Boolean}
 */
function isKeyword(str) {
	return /^\s*[\w-]+/.test(str);
}

function splitValue(value) {
	return String(value).split('|');
}

const globalKeywords = ['auto', 'inherit', 'unset'];
const unitlessProperties = [
	'z-index', 'line-height', 'opacity', 'font-weight', 'zoom',
	'flex', 'flex-grow', 'flex-shrink'
];

const defaultOptions = {
	intUnit: 'px',
	floatUnit: 'em',
	unitAliases: {
		e :'em',
		p: '%',
		x: 'ex',
		r: 'rem'
	},
	fuzzySearchMinScore: 0
};

/**
 * For every node in given `tree`, finds matching snippet from `registry` and
 * updates node with snippet data.
 *
 * This resolver uses fuzzy matching for searching matched snippets and their
 * keyword values.
 */

function index(tree, registry, options) {
	options = Object.assign({}, defaultOptions, options);
	options.unitAliases = Object.assign({}, defaultOptions.unitAliases, options && options.unitAliases);

	const snippets = convertToCSSSnippets(registry);

	tree.walk(node => resolveNode(node, snippets, options));
	return tree;
}

function convertToCSSSnippets(registry) {
	return cssSnippets(registry.all({type: 'string'}));
}

/**
 * Resolves given node: finds matched CSS snippets using fuzzy match and resolves
 * keyword aliases from node value
 * @param  {Node} node
 * @param  {CSSSnippet[]} snippets
 * @param  {Object} options
 * @return {Node}
 */
function resolveNode(node, snippets, options) {
	if (options.property) {
		// Resolve as value of given CSS property
		return resolveAsPropertyValue(node, snippets.find(snippet => snippet.property === options.property), options);
	}

	const snippet = findBestMatch(node.name, snippets, 'key', options.fuzzySearchMinScore);

	if (!snippet) {
		// Edge case: `!important` snippet
		return node.name === '!' ? setNodeAsText(node, '!important') : node;
	}

	return snippet.property
		? resolveAsProperty(node, snippet, options)
		: resolveAsSnippet(node, snippet);
}

/**
 * Resolves given parsed abbreviation node as CSS property
 * @param {Node} node
 * @param {CSSSnippet} snippet
 * @param  {Object} formatOptions
 * @return {Node}
 */
function resolveAsProperty(node, snippet, formatOptions) {
	const abbr = node.name;
	node.name = snippet.property;

	if (node.value && typeof node.value === 'object') {
		// resolve keyword shortcuts
		const keywords = snippet.keywords();

		if (!node.value.size) {
			// no value defined, try to resolve unmatched part as a keyword alias
			let kw = findBestMatch(getUnmatchedPart(abbr, snippet.key), keywords);

			if (!kw) {
				// no matching value, try to get default one
				kw = snippet.defaultValue;
				if (kw && kw.indexOf('${') === -1) {
					// Quick and dirty test for existing field. If not, wrap
					// default value in a field
					kw = `\${1:${kw}}`;
				}
			}

			if (kw) {
				node.value.add(kw);
			}
		} else {
			// replace keyword aliases in current node value
			for (let i = 0, token; i < node.value.value.length; i++) {
				token = node.value.value[i];

				if (token === '!') {
					token = `${!i ? '${1} ' : ''}!important`;
				} else if (isKeyword$1(token)) {
					token = findBestMatch(token.value, keywords)
						|| findBestMatch(token.value, globalKeywords)
						|| token;
				} else if (isNumericValue(token)) {
					token = resolveNumericValue(node.name, token, formatOptions);
				}

				node.value.value[i] = token;
			}
		}
	}

	return node;
}

/**
 * Resolves given parsed abbreviation node as a snippet: a plain code chunk
 * @param {Node} node
 * @param {CSSSnippet} snippet
 * @return {Node}
 */
function resolveAsSnippet(node, snippet) {
	return setNodeAsText(node, snippet.value);
}

/**
 * Resolves given parsed abbreviation node as property value of given `snippet`:
 * tries to find best matching keyword from CSS snippet
 * @param {Node} node
 * @param {CSSSnippet} snippet
 * @param {Object} options
 * @return {Node}
 */
function resolveAsPropertyValue(node, snippet, options) {
	// Possible resolved result for CSS property:
	// * matched snippet keyword
	// * color (starts with #)
	// Everything else should result the same as input abbreviation
	let keywords = globalKeywords.slice();
	if (snippet) {
		keywords = keywords.concat(snippet.keywords());
	}

	const values = [node.name].concat(node.value.value)
		.filter(Boolean)
		.map(value => {
			if (typeof value === 'string' || value.type === 'keyword') {
				value = String(value);
				return findBestMatch(value, keywords, null, options.fuzzySearchMinScore) || value;
			}

			return value;
		});

	node.name = null;
	node.value.value = values;

	return node;
}

/**
 * Sets given parsed abbreviation node as a text snippet
 * @param {Node} node
 * @param {String} text
 * @return {Node}
 */
function setNodeAsText(node, text) {
	node.name = null;
	node.value = text;
	return node;
}

/**
 * Finds best matching item from `items` array
 * @param {String} abbr  Abbreviation to match
 * @param {Array}  items List of items for match
 * @param {String} [key] If `items` is a list of objects, use `key` as object
 * property to test against
 * @param {Number} fuzzySearchMinScore The minimum score the best matched item should have to be a valid match.
 * @return {*}
 */
function findBestMatch(abbr, items, key, fuzzySearchMinScore) {
	if (!abbr) {
		return null;
	}

	let matchedItem = null;
	let maxScore = 0;
	fuzzySearchMinScore = fuzzySearchMinScore || 0;

	for (let i = 0, item; i < items.length; i++) {
		item = items[i];
		const score = stringScore(abbr, getScoringPart(item, key));

		if (score === 1) {
			// direct hit, no need to look further
			return item;
		}

		if (score && score >= maxScore) {
			maxScore = score;
			matchedItem = item;
		}
	}

	return maxScore >= fuzzySearchMinScore ? matchedItem : null;
}

function getScoringPart(item, key) {
	const value = item && typeof item === 'object' ? item[key] : item;
	const m = (value || '').match(/^[\w-@]+/);
	return m ? m[0] : value;
}

/**
 * Returns a part of `abbr` that wasn’t directly matched agains `string`.
 * For example, if abbreviation `poas` is matched against `position`, the unmatched part will be `as`
 * since `a` wasn’t found in string stream
 * @param {String} abbr
 * @param {String} string
 * @return {String}
 */
function getUnmatchedPart(abbr, string) {
	for (let i = 0, lastPos = 0; i < abbr.length; i++) {
		lastPos = string.indexOf(abbr[i], lastPos);
		if (lastPos === -1) {
			return abbr.slice(i);
		}
		lastPos++;
	}

	return '';
}

/**
 * Check if given CSS value token is a keyword
 * @param {*} token
 * @return {Boolean}
 */
function isKeyword$1(token) {
	return tokenTypeOf(token, 'keyword');
}

/**
 * Check if given CSS value token is a numeric value
 * @param  {*}  token
 * @return {Boolean}
 */
function isNumericValue(token) {
	return tokenTypeOf(token, 'numeric');
}

function tokenTypeOf(token, type) {
	return token && typeof token === 'object' && token.type === type;
}

/**
 * Resolves numeric value for given CSS property
 * @param  {String} property    CSS property name
 * @param  {NumericValue} token CSS numeric value token
 * @param  {Object} formatOptions Formatting options for units
 * @return {NumericValue}
 */
function resolveNumericValue(property, token, formatOptions) {
	if (token.unit) {
		token.unit = formatOptions.unitAliases[token.unit] || token.unit;
	} else if (token.value !== 0 && unitlessProperties.indexOf(property) === -1) {
		// use `px` for integers, `em` for floats
		// NB: num|0 is a quick alternative to Math.round(0)
		token.unit = token.value === (token.value|0) ? formatOptions.intUnit : formatOptions.floatUnit;
	}

	return token;
}

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=css-snippets-resolver.es.js.map


/***/ }),

/***/ "./node_modules/@emmetio/expand-abbreviation/dist/expand.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emmetio/expand-abbreviation/dist/expand.es.js ***!
  \*********************************************************************/
/*! exports provided: expand, parse, createSnippetsRegistry, createOptions, isStylesheet, createProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSnippetsRegistry", function() { return createSnippetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOptions", function() { return createOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStylesheet", function() { return isStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony import */ var _emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/abbreviation */ "./node_modules/@emmetio/abbreviation/dist/abbreviation.es.js");
/* harmony import */ var _emmetio_html_snippets_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emmetio/html-snippets-resolver */ "./node_modules/@emmetio/html-snippets-resolver/dist/html-snippets-resolver.es.js");
/* harmony import */ var _emmetio_html_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emmetio/html-transform */ "./node_modules/@emmetio/html-transform/dist/html-transform.es.js");
/* harmony import */ var _emmetio_variable_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emmetio/variable-resolver */ "./node_modules/@emmetio/variable-resolver/dist/variable-resolver.es.js");
/* harmony import */ var _emmetio_markup_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emmetio/markup-formatters */ "./node_modules/@emmetio/markup-formatters/dist/markup-formatters.es.js");
/* harmony import */ var _emmetio_css_abbreviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emmetio/css-abbreviation */ "./node_modules/@emmetio/css-abbreviation/dist/css-abbreviation.es.js");
/* harmony import */ var _emmetio_css_snippets_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emmetio/css-snippets-resolver */ "./node_modules/@emmetio/css-snippets-resolver/dist/css-snippets-resolver.es.js");
/* harmony import */ var _emmetio_stylesheet_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emmetio/stylesheet-formatters */ "./node_modules/@emmetio/stylesheet-formatters/dist/stylesheet-formatters.es.js");
/* harmony import */ var _emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emmetio/snippets */ "./node_modules/@emmetio/snippets/dist/snippets.es.js");
/* harmony import */ var _emmetio_lorem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emmetio/lorem */ "./node_modules/@emmetio/lorem/dist/lorem.es.js");
/* harmony import */ var _emmetio_snippets_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emmetio/snippets-registry */ "./node_modules/@emmetio/snippets-registry/dist/snippets-registry.es.js");
/* harmony import */ var _emmetio_output_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emmetio/output-profile */ "./node_modules/@emmetio/output-profile/dist/output-profile.es.js");













/**
 * Expands given abbreviation into code
 * @param  {String|Node} abbr    Abbreviation to parse or already parsed abbreviation
 * @param  {Object} config
 * @return {String}
 */
function expand(abbr, config) {
	config = Object.assign({}, config);

	if (typeof abbr === 'string') {
		abbr = parse(abbr, config);
	}

	return Object(_emmetio_markup_formatters__WEBPACK_IMPORTED_MODULE_4__["default"])(abbr, config.profile, config.syntax, config);
}

/**
 * Parses given Emmet abbreviation into a final abbreviation tree with all
 * required transformations applied
 * @param {String} Abbreviation to parse
 * @param  {Object} config
 * @return {Node}
 */
function parse(abbr, config) {
	return Object(_emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__["default"])(abbr)
		.use(_emmetio_html_snippets_resolver__WEBPACK_IMPORTED_MODULE_1__["default"], config.snippets)
		.use(_emmetio_variable_resolver__WEBPACK_IMPORTED_MODULE_3__["default"], config.variables)
		.use(_emmetio_html_transform__WEBPACK_IMPORTED_MODULE_2__["default"], config.text, config.options);
}

/**
 * Expands given abbreviation into code
 * @param  {String|Node} abbr    Abbreviation to parse or already parsed abbreviation
 * @param  {Object} config
 * @return {String}
 */
function expand$1(abbr, config) {
	config = config || {};

	if (typeof abbr === 'string') {
		abbr = parse$1(abbr, config);
	}

	return Object(_emmetio_stylesheet_formatters__WEBPACK_IMPORTED_MODULE_7__["default"])(abbr, config.profile, config.syntax, config);
}

/**
 * Parses given Emmet abbreviation into a final abbreviation tree with all
 * required transformations applied
 * @param {String|Node} abbr Abbreviation to parse or already parsed abbreviation
 * @param  {Object} config
 * @return {Node}
 */
function parse$1(abbr, config) {
	if (typeof abbr === 'string') {
		abbr = Object(_emmetio_css_abbreviation__WEBPACK_IMPORTED_MODULE_5__["default"])(abbr);
	}

	return abbr.use(_emmetio_css_snippets_resolver__WEBPACK_IMPORTED_MODULE_6__["default"], config.snippets, config.options);
}

const reLorem = /^lorem([a-z]*)(\d*)$/i;

/**
 * Constructs a snippets registry, filled with snippets, for given options
 * @param  {String} syntax  Abbreviation syntax
 * @param  {Object|Object[]} snippets Additional snippets
 * @return {SnippetsRegistry}
 */
function snippetsRegistryFactory(type, syntax, snippets) {
	const registrySnippets = [];

	if (type === 'markup') {
		registrySnippets.push(_emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__["default"].html);
	} else if (type === 'stylesheet') {
		registrySnippets.push(_emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__["default"].css);
	}

	if (syntax in _emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__["default"] && registrySnippets.indexOf(_emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__["default"][syntax]) === -1) {
		registrySnippets.push(_emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__["default"][syntax]);
	}

	if (Array.isArray(snippets)) {
		snippets.forEach(item => {
			// if array item is a string, treat it as a reference to globally
			// defined snippets
			registrySnippets.push(typeof item === 'string' ? _emmetio_snippets__WEBPACK_IMPORTED_MODULE_8__["default"][item] : item);
		});
	} else if (typeof snippets === 'object') {
		registrySnippets.push(snippets);
	}

	const registry = new _emmetio_snippets_registry__WEBPACK_IMPORTED_MODULE_10__["default"](registrySnippets.filter(Boolean));

	// for non-stylesheet syntaxes add Lorem Ipsum generator
	if (type !== 'stylesheet') {
		registry.get(0).set(reLorem, loremGenerator);
	}

	return registry;
}

function loremGenerator(node) {
	const options = {};
	const m = node.name.match(reLorem);
	if (m[1]) {
		options.lang = m[1];
	}

	if (m[2]) {
		options.wordCount = +m[2];
	}

	return Object(_emmetio_lorem__WEBPACK_IMPORTED_MODULE_9__["default"])(node, options);
}

/**
 * Default variables used in snippets to insert common values into predefined snippets
 * @type {Object}
 */
const defaultVariables = {
	lang: 'en',
	locale: 'en-US',
	charset: 'UTF-8'
};

/**
 * A list of syntaxes that should use Emmet CSS abbreviations:
 * a variations of default abbreviation that holds values right in abbreviation name
 * @type {Array}
 */
const stylesheetSyntaxes = ['css', 'sass', 'scss', 'less', 'stylus', 'sss'];

const defaultOptions = {
	/**
	 * Type of abbreviation to parse: 'markup' or 'stylesheet'.
	 * Can be auto-detected from `syntax` property. Default is 'markup'
	 */
	type: null,

	/**
	 * Abbreviation output syntax
	 * @type {String}
	 */
	syntax: 'html',

	/**
	 * Field/tabstop generator for editor. Most editors support TextMate-style
	 * fields: ${0} or ${1:item}. So for TextMate-style fields this function
	 * will look like this:
	 * @example
	 * (index, placeholder) => `\${${index}${placeholder ? ':' + placeholder : ''}}`
	 *
	 * @param  {Number} index         Placeholder index. Fields with the same indices
	 * should be linked
	 * @param  {String} [placeholder] Field placeholder
	 * @return {String}
	 */
	field: (index, placeholder) => placeholder || '',

	/**
	 * Insert given text string(s) into expanded abbreviation
	 * If array of strings is given, the implicitly repeated element (e.g. `li*`)
	 * will be repeated by the amount of items in array
	 * @type {String|String[]}
	 */
	text: null,

	/**
	 * Either predefined output profile or options for output profile. Used for
	 * abbreviation output
	 * @type {Profile|Object}
	 */
	profile: null,

	/**
	 * Custom variables for variable resolver
	 * @see @emmetio/variable-resolver
	 * @type {Object}
	 */
	variables: {},

	/**
	 * Custom predefined snippets for abbreviation. The expanded abbreviation
	 * will try to match given snippets that may contain custom elements,
	 * predefined attributes etc.
	 * May also contain array of items: either snippets (Object) or references
	 * to default syntax snippets (String; the key in default snippets hash)
	 * @see @emmetio/snippets
	 * @type {Object|SnippetsRegistry}
	 */
	snippets: {},

	/**
	 * Hash of additional transformations that should be applied to expanded
	 * abbreviation, like BEM or JSX. Since these transformations introduce
	 * side-effect, they are disabled by default and should be enabled by
	 * providing a transform name as a key and transform options as value:
	 * @example
	 * {
	 *     bem: {element: '--'},
	 *     jsx: true // no options, just enable transform
	 * }
	 * @see @emmetio/html-transform/lib/addons
	 * @type {Object}
	 */
	options: null,

	/**
	 * Additional options for syntax formatter
	 * @see @emmetio/markup-formatters
	 * @type {Object}
	 */
	format: null
};

/**
 * Expands given abbreviation into string, formatted according to provided
 * syntax and options
 * @param  {String|Node} abbr       Abbreviation string or parsed abbreviation tree
 * @param  {String|Object} [config] Parsing and formatting options (object) or
 * abbreviation syntax (string)
 * @return {String}
 */
function expand$2(abbr, config) {
	config = createOptions(config);

	return getType(config.type, config.syntax) === 'stylesheet'
		? expand$1(abbr, config)
		: expand(abbr, config);
}

/**
 * Parses given abbreviation into AST tree. This tree can be later formatted to
 * string with `expand` function
 * @param  {String} abbr             Abbreviation to parse
 * @param  {String|Object} [options] Parsing and formatting options (object) or
 * abbreviation syntax (string)
 * @return {Node}
 */
function parse$2(abbr, options) {
	options = createOptions(options);

	return getType(options.type, options.syntax) === 'stylesheet'
		? parse$1(abbr, options)
		: parse(abbr, options);
}

/**
 * Creates snippets registry for given syntax and additional `snippets`
 * @param  {String} type     Abbreviation type, 'markup' or 'stylesheet'
 * @param  {String} syntax   Snippets syntax, used for retrieving predefined snippets
 * @param  {SnippetsRegistry|Object|Object[]} [snippets] Additional snippets
 * @return {SnippetsRegistry}
 */
function createSnippetsRegistry(type, syntax, snippets) {
	// Backward-compatibility with <0.6
	if (type && type !== 'markup' && type !== 'stylesheet') {
		snippets = syntax;
		syntax = type;
		type = 'markup';
	}

	return snippets instanceof _emmetio_snippets_registry__WEBPACK_IMPORTED_MODULE_10__["default"]
		? snippets
		: snippetsRegistryFactory(type, syntax, snippets);
}

function createOptions(options) {
	if (typeof options === 'string') {
		options = { syntax: options };
	}

	options = Object.assign({}, defaultOptions, options);
	if (options.type == null && options.syntax) {
		options.type = isStylesheet(options.syntax) ? 'stylesheet' : 'markup';
	}

	options.format = Object.assign({field: options.field}, options.format);
	options.profile = createProfile(options);
	options.variables = Object.assign({}, defaultVariables, options.variables);
	options.snippets = createSnippetsRegistry(options.type, options.syntax, options.snippets);

	return options;
}

/**
 * Check if given syntax belongs to stylesheet markup.
 * Emmet uses different abbreviation flavours: one is a default markup syntax,
 * used for HTML, Slim, Pug etc, the other one is used for stylesheets and
 * allows embedded values in abbreviation name
 * @param  {String}  syntax
 * @return {Boolean}
 */
function isStylesheet(syntax) {
	return stylesheetSyntaxes.indexOf(syntax) !== -1;
}

/**
 * Creates output profile from given options
 * @param  {Object} options
 * @return {Profile}
 */
function createProfile(options) {
	return options.profile instanceof _emmetio_output_profile__WEBPACK_IMPORTED_MODULE_11__["default"]
		? options.profile
		: new _emmetio_output_profile__WEBPACK_IMPORTED_MODULE_11__["default"](options.profile);
}

/**
 * Returns type of abbreviation expander: either 'markup' or 'stylesheet'
 * @param {String} type
 * @param {String} [syntax]
 */
function getType(type, syntax) {
	if (type) {
		return type === 'stylesheet' ? 'stylesheet' : 'markup';
	}

	return isStylesheet(syntax) ? 'stylesheet' : 'markup';
}


//# sourceMappingURL=expand.es.js.map


/***/ }),

/***/ "./node_modules/@emmetio/field-parser/dist/field-parser.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@emmetio/field-parser/dist/field-parser.es.js ***!
  \********************************************************************/
/*! exports provided: default, mark, createToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* harmony import */ var _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/stream-reader */ "./node_modules/@emmetio/stream-reader/dist/stream-reader.es.js");
/* harmony import */ var _emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emmetio/stream-reader-utils */ "./node_modules/@emmetio/stream-reader-utils/dist/stream-reader-utils.es.js");



const DOLLAR      = 36;  // $
const COLON       = 58;  // :
const ESCAPE      = 92;  // \
const OPEN_BRACE  = 123; // {
const CLOSE_BRACE = 125; // }

/**
 * Finds fields in given string and returns object with field-less string
 * and array of fields found
 * @param  {String} string
 * @return {Object}
 */
function parse(string) {
	const stream = new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__["default"](string);
	const fields = [];
	let cleanString = '', offset = 0, pos = 0;
	let code, field;

	while (!stream.eof()) {
		code = stream.peek();
		pos = stream.pos;

		if (code === ESCAPE) {
			stream.next();
			stream.next();
		} else if (field = consumeField(stream, cleanString.length + pos - offset)) {
			fields.push(field);
			cleanString += stream.string.slice(offset, pos) + field.placeholder;
			offset = stream.pos;
		} else {
			stream.next();
		}
	}

	return new FieldString(cleanString + stream.string.slice(offset), fields);
}

/**
 * Marks given `string` with `fields`: wraps each field range with
 * `${index:placeholder}` (by default) or any other token produced by `token`
 * function, if provided
 * @param  {String} string String to mark
 * @param  {Array} fields Array of field descriptor. A field descriptor is a
 * `{index, location, length}` array. It is important that fields in array
 * must be ordered by their location in string: some fields my refer the same
 * location so they must appear in order that user expects.
 * @param  {Function} [token] Function that generates field token. This function
 * received two arguments: `index` and `placeholder` and should return string
 * @return {String}  String with marked fields
 */
function mark(string, fields, token) {
	token = token || createToken;

	// order fields by their location and appearence
	// NB field ranges should not overlap! (not supported yet)
	const ordered = fields
	.map((field, order) => ({order, field, end: field.location + field.length}))
	.sort((a, b) => (a.end - b.end) || (a.order - b.order));

	// mark ranges in string
	let offset = 0;
	const result = ordered.map(item => {
		const placeholder = string.substr(item.field.location, item.field.length);
		const prefix = string.slice(offset, item.field.location);
		offset = item.end;
		return prefix + token(item.field.index, placeholder);
	});

	return result.join('') + string.slice(offset);
}

/**
 * Creates field token for string
 * @param  {Number} index       Field index
 * @param  {String} placeholder Field placeholder, could be empty string
 * @return {String}
 */
function createToken(index, placeholder) {
	return placeholder ? `\${${index}:${placeholder}}` : `\${${index}}`;
}

/**
 * Consumes field from current stream position: it can be an `$index` or
 * or `${index}` or `${index:placeholder}`
 * @param  {StreamReader} stream
 * @param  {Number}       location Field location in *clean* string
 * @return {Field} Object with `index` and `placeholder` properties if
 * field was successfully consumed, `null` otherwise
 */
function consumeField(stream, location) {
	const start = stream.pos;

	if (stream.eat(DOLLAR)) {
		// Possible start of field
		let index = consumeIndex(stream);
		let placeholder = '';

		// consumed $index placeholder
		if (index != null) {
			return new Field(index, placeholder, location);
		}

		if (stream.eat(OPEN_BRACE)) {
			index = consumeIndex(stream);
			if (index != null) {
				if (stream.eat(COLON)) {
					placeholder = consumePlaceholder(stream);
				}

				if (stream.eat(CLOSE_BRACE)) {
					return new Field(index, placeholder, location);
				}
			}
		}
	}

	// If we reached here then there’s no valid field here, revert
	// back to starting position
	stream.pos = start;
}

/**
 * Consumes a placeholder: value right after `:` in field. Could be empty
 * @param  {StreamReader} stream
 * @return {String}
 */
function consumePlaceholder(stream) {
	let code;
	const stack = [];
	stream.start = stream.pos;

	while (!stream.eof()) {
		code = stream.peek();

		if (code === OPEN_BRACE) {
			stack.push(stream.pos);
		} else if (code === CLOSE_BRACE) {
			if (!stack.length) {
				break;
			}
			stack.pop();
		}
		stream.next();
	}

	if (stack.length) {
		throw stream.error('Unable to find matching "}" for curly brace at ' + stack.pop());
	}

	return stream.current();
}

/**
 * Consumes integer from current stream position
 * @param  {StreamReader} stream
 * @return {Number}
 */
function consumeIndex(stream) {
	stream.start = stream.pos;
	if (stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])) {
		return Number(stream.current());
	}
}

class Field {
	constructor(index, placeholder, location) {
		this.index = index;
		this.placeholder = placeholder;
		this.location = location;
		this.length = this.placeholder.length;
	}
}

class FieldString {
	/**
	 * @param {String} string
	 * @param {Field[]} fields
	 */
	constructor(string, fields) {
		this.string = string;
		this.fields = fields;
	}

	mark(token) {
		return mark(this.string, this.fields, token);
	}

	toString() {
		return this.string;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

//# sourceMappingURL=field-parser.es.js.map


/***/ }),

/***/ "./node_modules/@emmetio/html-snippets-resolver/dist/html-snippets-resolver.es.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@emmetio/html-snippets-resolver/dist/html-snippets-resolver.es.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/abbreviation */ "./node_modules/@emmetio/abbreviation/dist/abbreviation.es.js");


/**
 * For every node in given `tree`, finds matching snippet from `registry` and
 * resolves it into a parsed abbreviation. Resolved node is then updated or
 * replaced with matched abbreviation tree.
 *
 * A HTML registry basically contains aliases to another Emmet abbreviations,
 * e.g. a predefined set of name, attribues and so on, possibly a complex
 * abbreviation with multiple elements. So we have to get snippet, parse it
 * and recursively resolve it.
 *
 * @param  {Node} tree                 Parsed Emmet abbreviation
 * @param  {SnippetsRegistry} registry Registry with all available snippets
 * @return {Node} Updated tree
 */

var index = function(tree, registry) {
    tree.walk(node => resolveNode(node, registry));
    return tree;
};

function resolveNode(node, registry) {
    const stack = new Set();
    const resolve = node => {
        const snippet = registry.resolve(node.name);
        // A snippet in stack means circular reference.
        // It can be either a user error or a perfectly valid snippet like
        // "img": "img[src alt]/", e.g. an element with predefined shape.
        // In any case, simply stop parsing and keep element as is
        if (!snippet || stack.has(snippet)) {
            return;
        }

        // In case if matched snippet is a function, pass control into it
        if (typeof snippet.value === 'function') {
            return snippet.value(node, registry, resolve);
        }

        const tree = Object(_emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__["default"])(snippet.value);

        stack.add(snippet);
        tree.walk(resolve);
        stack.delete(snippet);

        // move current node contents into new tree
        const childTarget = findDeepestNode(tree);
        merge(childTarget, node);

        while (tree.firstChild) {
            node.parent.insertBefore(tree.firstChild, node);
        }

        childTarget.parent.insertBefore(node, childTarget);
        childTarget.remove();
    };

    resolve(node);
}

/**
 * Adds data from first node into second node and returns it
 * @param  {Node} from
 * @param  {Node} to
 * @return {Node}
 */
function merge(from, to) {
    to.name = from.name;

    if (from.selfClosing) {
        to.selfClosing = true;
    }

    if (from.value != null) {
        to.value = from.value;
    }

    if (from.repeat) {
        to.repeat = Object.assign({}, from.repeat);
    }

    return mergeAttributes(from, to);
}

/**
 * Transfer attributes from first element to second one and preserve first
 * element’s attributes order
 * @param  {Node} from
 * @param  {Node} to
 * @return {Node}
 */
function mergeAttributes(from, to) {
    mergeClassNames(from, to);

    // It’s important to preserve attributes order: ones in `from` have higher
    // pripority than in `to`. Collect attributes in map in order they should
    // appear in `to`
    const attrMap = new Map();

    let attrs = from.attributes;
    for (let i = 0; i < attrs.length; i++) {
        attrMap.set(attrs[i].name, attrs[i].clone());
    }

    attrs = to.attributes.slice();
    for (let i = 0, attr, a; i < attrs.length; i++) {
        attr = attrs[i];
        if (attrMap.has(attr.name)) {
            a = attrMap.get(attr.name);
            a.value = attr.value;

            // If user explicitly wrote attribute in abbreviation, it’s no longer
            // implied and should be outputted even if value is empty
            if (a.options.implied) {
                a.options.implied = false;
            }
        } else {
            attrMap.set(attr.name, attr);
        }

        to.removeAttribute(attr);
    }

    const newAttrs = Array.from(attrMap.values());
    for (let i = 0; i < newAttrs.length; i++) {
        to.setAttribute(newAttrs[i]);
    }

    return to;
}

/**
 * Adds class names from first node to second one
 * @param  {Node} from
 * @param  {Node} to
 * @return {Node}
 */
function mergeClassNames(from, to) {
    const classNames = from.classList;
    for (let i = 0; i < classNames.length; i++) {
        to.addClass(classNames[i]);
    }

    return to;
}

/**
 * Finds node which is the deepest for in current node or node iteself.
 * @param  {Node} node
 * @return {Node}
 */
function findDeepestNode(node) {
	while (node.children.length) {
		node = node.children[node.children.length - 1];
	}

	return node;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emmetio/html-transform/dist/html-transform.es.js":
/*!************************************************************************!*\
  !*** ./node_modules/@emmetio/html-transform/dist/html-transform.es.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emmetio_implicit_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/implicit-tag */ "./node_modules/@emmetio/implicit-tag/dist/implicit-tag.es.js");


/**
 * Adds missing tag names for given tree depending on node’s parent name
 */
var implicitTags = function(tree) {
    tree.walk(node => {
        // resolve only nameless nodes without content
        if (node.name == null && node.attributes.length) {
            node.name = Object(_emmetio_implicit_tag__WEBPACK_IMPORTED_MODULE_0__["default"])(node.parent.name);
        }
    });
    return tree;
};

/**
 * Locates all occurances of given `token` which are not escaped (e.g. are not
 * preceded with `\`) given in `str`
 * @param  {String} str
 * @return {Array}  Array of token ranges
 */
function findUnescapedTokens(str, token) {
    const result = new Set();
    const tlen = token.length;

    // 1. Find all occurances of tokens
    let pos = 0;
    while ((pos = str.indexOf(token, pos)) !== -1) {
        result.add(pos);
        pos += tlen;
    }

    if (result.size) {
        // 2. Remove ones that escaped
        let pos = 0;
        const len = str.length;

        while (pos < len) {
            if (str[pos++] === '\\') {
                result.delete(pos++);
            }
        }
    }

    return Array.from(result).map(ix => range(ix, tlen));
}

/**
 * Replaces `ranges`, generated by `range()` function, with given `value` in `str`
 * @param  {String} str    Where to replace ranges
 * @param  {Array} ranges Ranes, created by `range()` function
 * @param  {String|Function} value  Replacement value. If it’s a function, it
 * will take a range value as argument and should return a new string
 * @return {String}
 */
function replaceRanges(str, ranges, value) {
	// should walk from the end of array to keep ranges valid after replacement
	for (let i = ranges.length - 1; i >= 0; i--) {
		const r = ranges[i];

        let offset = 0;
        let offsetLength = 0;
        let descendingOrder = false;

        if (str.substr(r[0] + r[1], 1) === '@'){
            if (str.substr(r[0] + r[1] + 1, 1) === '-') {
                descendingOrder = true;
            } 
            const matches = str.substr(r[0] + r[1] + 1 + Number(descendingOrder)).match(/^(\d+)/);
            if (matches) {
                offsetLength = matches[1].length + 1 + Number(descendingOrder);
                offset = parseInt(matches[1]) - 1;
            } else {
                offsetLength = 2;
            }
        }

		str = str.substring(0, r[0])
			+ (typeof value === 'function' ? value(str.substr(r[0], r[1]), offset, descendingOrder) : value)
			+ str.substring(r[0] + r[1] + offsetLength);
	}

	return str;
}

function range(start, length) {
    return [start, length];
}

const numberingToken = '$';

/**
 * Numbering of expanded abbreviation: finds all nodes with `$` in value
 * or attributes and replaces its occurances with repeater value
 */
var applyNumbering = function(tree) {
    tree.walk(applyNumbering$1);
    return tree;
};

/**
 * Applies numbering for given node: replaces occurances of numbering token
 * in node’s name, content and attributes
 * @param  {Node} node
 * @return {Node}
 */
function applyNumbering$1(node) {
    const repeater = findRepeater(node);

    if (repeater && repeater.value != null) {
        // NB replace numbering in nodes with explicit repeater only:
        // it solves issues with abbreviations like `xsl:if[test=$foo]` where
        // `$foo` is preferred output
        const value = repeater.value;
        const count = repeater.count;

        node.name = replaceNumbering(node.name, value, count);
        node.value = replaceNumbering(node.value, value, count);
        node.attributes.forEach(attr => {
            const copy = node.getAttribute(attr.name).clone();
            copy.name = replaceNumbering(attr.name, value, count);
            copy.value = replaceNumbering(attr.value, value, count);
            node.replaceAttribute(attr.name, copy);
        });
    }

    return node;
}

/**
 * Returns repeater object for given node
 * @param  {Node} node
 * @return {Object}
 */
function findRepeater(node) {
    while (node) {
        if (node.repeat) {
            return node.repeat;
        }

        node = node.parent;
    }
}

/**
 * Replaces numbering in given string
 * @param  {String} str
 * @param  {Number} value
 * @return {String}
 */
function replaceNumbering(str, value, count) {
    // replace numbering in strings only: skip explicit wrappers that could
    // contain unescaped numbering tokens
    if (typeof str === 'string') {
        const ranges = getNumberingRanges(str);
        return replaceNumberingRanges(str, ranges, value, count);
    }

    return str;
}

/**
 * Returns numbering ranges, e.g. ranges of `$` occurances, in given string.
 * Multiple adjacent ranges are combined
 * @param  {String} str
 * @return {Array}
 */
function getNumberingRanges(str) {
    return findUnescapedTokens(str || '', numberingToken)
    .reduce((out, range$$1) => {
        // skip ranges that actually belongs to output placeholder or tabstops
        if (!/[#{]/.test(str[range$$1[0] + 1] || '')) {
            const lastRange = out[out.length - 1];
            if (lastRange && lastRange[0] + lastRange[1] === range$$1[0]) {
                lastRange[1] += range$$1[1];
            } else {
                out.push(range$$1);
            }
        }

        return out;
    }, []);
}

/**
 * @param  {String} str
 * @param  {Array} ranges
 * @param  {Number} value
 * @return {String}
 */
function replaceNumberingRanges(str, ranges, value, count) {
    const replaced = replaceRanges(str, ranges, (token, offset, descendingOrder) => {
    let _value = descendingOrder ? String(offset + count - value + 1) : String(value + offset);
        // pad values for multiple numbering tokens, e.g. 3 for $$$ becomes 003
        while (_value.length < token.length) {
            _value = '0' + _value;
        }
        return _value;
    });

    // unescape screened numbering tokens
    return unescapeString(replaced);
}

/**
 * Unescapes characters, screened with `\`, in given string
 * @param  {String} str
 * @return {String}
 */
function unescapeString(str) {
    let i = 0, result = '';
    const len = str.length;

    while (i < len) {
        const ch = str[i++];
        result += (ch === '\\') ? (str[i++] || '') : ch;
    }

    return result;
}

/** Placeholder for inserted content */
const placeholder = '$#';

/** Placeholder for caret */
const caret = '|';

const reUrl = /^((?:https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const reEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const reProto = /^([a-z]+:)?\/\//i;

/**
 * Inserts content into node with implicit repeat count: this node is then
 * duplicated for each content item and content itself is inserted either into
 * deepest child or instead of a special token.
 *
 * This method uses two distinct steps: `prepare()` and `insert()` since most
 * likely these steps will be used separately to properly insert content
 * with unescaped `$` numbering markers.
 *
 * @param {Node} tree Parsed abbreviation
 * @param {String[]} content Array of content items to insert
 * @return {Node}
 */
/**
 * Finds nodes with implicit repeat and creates `amount` copies of it in tree
 * @param  {Node} tree
 * @param  {Number} amount
 * @return {Node}
 */
function prepare(tree, amount) {
    amount = amount || 1;
    tree.walk(node => {
        if (node.repeat && node.repeat.count === null) {
            for (let i = 0; i < amount; i++) {
                const clone = node.clone(true);
                clone.repeat.implicit = true;
                clone.repeat.count = amount;
                clone.repeat.value = i + 1;
                clone.repeat.index = i;
                node.parent.insertBefore(clone, node);
            }

            node.remove();
        }
    });

    return tree;
}

/**
 * Inserts content into implicitly repeated nodes, created by `prepare()` method
 * @param  {Node} tree
 * @param  {String[]} content
 * @return {Node}
 */
function insert(tree, content) {
    if (Array.isArray(content) && content.length) {
        let updated = false;
        tree.walk(node => {
            if (node.repeat && node.repeat.implicit) {
                updated = true;
                insertContent(node, content[node.repeat.index]);
            }
        });

        if (!updated) {
            // no node with implicit repeat was found, insert content as
            // deepest child
            setNodeContent(findDeepestNode(tree), content.join('\n'));
        }
    }

    return tree;
}

/**
 * Inserts `content` into given `node`: either replaces output placeholders
 * or inserts it into deepest child node
 * @param  {Node} node
 * @param  {String} content
 * @return {Node}
 */
function insertContent(node, content) {
	let inserted = insertContentIntoPlaceholder(node, content);
	node.walk(child => inserted |= insertContentIntoPlaceholder(child, content));

	if (!inserted) {
		// no placeholders were found in node, insert content into deepest child
		setNodeContent(findDeepestNode(node), content);
	}

	return node;
}

/**
 * Inserts given `content` into placeholders for given `node`. Placeholders
 * might be available in attribute values and node content
 * @param  {Node} node
 * @param  {String} content
 * @return {Boolean} Returns `true` if placeholders were found and replaced in node
 */
function insertContentIntoPlaceholder(node, content) {
	const state = {replaced: false};

	node.value = replacePlaceholder(node.value, content, state);
	node.attributes.forEach(attr => {
		if (attr.value) {
			node.setAttribute(attr.name, replacePlaceholder(attr.value, content, state));
		}
	});

	return state.replaced;
}

/**
 * Replaces all placeholder occurances in given `str` with `value`
 * @param  {String} str
 * @param  {String} value
 * @param  {Object} [_state] If provided, set `replaced` property of given
 * object to `true` if placeholder was found and replaced
 * @return {String}
 */
function replacePlaceholder(str, value, _state) {
	if (typeof str === 'string') {
		const ranges = findUnescapedTokens(str, placeholder);
		if (ranges.length) {
			if (_state) {
				_state.replaced = true;
			}

			str = replaceRanges(str, ranges, value);
		}
	}

	return str;
}

/**
 * Finds node which is the deepest for in current node or node iteself.
 * @param  {Node} node
 * @return {Node}
 */
function findDeepestNode(node) {
	while (node.children.length) {
		node = node.children[node.children.length - 1];
	}

	return node;
}

/**
 * Updates content of given node
 * @param {Node} node
 * @param {String} content
 */
function setNodeContent(node, content) {
	// find caret position and replace it with content, if possible
	if (node.value) {
		const ranges = findUnescapedTokens(node.value, caret);
		if (ranges.length) {
			node.value = replaceRanges(node.value, ranges, content);
			return;
		}
	}

	if (node.name.toLowerCase() === 'a' || node.hasAttribute('href')) {
		// special case: inserting content into `<a>` tag
		if (reUrl.test(content)) {
			node.setAttribute('href', (reProto.test(content) ? '' : 'http://') + content);
		} else if (reEmail.test(content)) {
			node.setAttribute('href', 'mailto:' + content);
		}
	}

	node.value = content;
}

const defaultOptions = {
	element: '__',
	modifier: '_'
};

const reElement  = /^(-+)([a-z0-9]+[a-z0-9-]*)/i;
const reModifier = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i;
const blockCandidates1 = className => /^[a-z]\-/i.test(className);
const blockCandidates2 = className => /^[a-z]/i.test(className);

/**
 * BEM transformer: updates class names written as `-element` and
 * `_modifier` into full class names as described in BEM specs. Also adds missing
 * class names: fir example, if node contains `.block_modifier` class, ensures
 * that element contains `.block` class as well
 */
var bem = function(tree, options) {
	options = Object.assign({}, defaultOptions, options);

	tree.walk(node => expandClassNames(node, options));

	const lookup = createBlockLookup(tree);
	tree.walk(node => expandShortNotation(node, lookup, options));

	return tree;
};

/**
 * Expands existing class names in BEM notation in given `node`.
 * For example, if node contains `b__el_mod` class name, this method ensures
 * that element contains `b__el` class as well
 * @param  {Node} node
 * @param  {Object} options
 * @return {Set}
 */
function expandClassNames(node, options) {
	const classNames = node.classList.reduce((out, cl) => {
		// remove all modifiers and element prefixes from class name to get a base element name
		const ix = cl.indexOf('_');
		if (ix > 0 && !cl.startsWith('-')) {
			out.add(cl.slice(0, ix));
		    out.add(cl.slice(ix));
			return out;
		}

		return out.add(cl);
	}, new Set());

	if (classNames.size) {
		node.setAttribute('class', Array.from(classNames).join(' '));
	}
}

/**
 * Expands short BEM notation, e.g. `-element` and `_modifier`
 * @param  {Node} node      Parsed Emmet abbreviation node
 * @param  {Map} lookup     BEM block name lookup
 * @param  {Object} options
 */
function expandShortNotation(node, lookup, options) {
	const classNames = node.classList.reduce((out, cl) => {
		let prefix, m;
		const originalClass = cl;

		// parse element definition (could be only one)
		if (m = cl.match(reElement)) {
			prefix = getBlockName(node, lookup, m[1]) + options.element + m[2];
			out.add(prefix);
			cl = cl.slice(m[0].length);
		}

		// parse modifiers definitions 
		if (m = cl.match(reModifier)) {
			if (!prefix) {
				prefix = getBlockName(node, lookup, m[1]);
				out.add(prefix);
			}

			out.add(`${prefix}${options.modifier}${m[2]}`);
			cl = cl.slice(m[0].length);
		}

		if (cl === originalClass) {
			// class name wasn’t modified: it’s not a BEM-specific class,
			// add it as-is into output
			out.add(originalClass);
		}

		return out;
	}, new Set());

	const arrClassNames = Array.from(classNames).filter(Boolean);
	if (arrClassNames.length) {
		node.setAttribute('class', arrClassNames.join(' '));
	}
}

/**
 * Creates block name lookup for each node in given tree, e.g. finds block
 * name explicitly for each node
 * @param  {Node} tree
 * @return {Map}
 */
function createBlockLookup(tree) {
	const lookup = new Map();

	tree.walk(node => {
		const classNames = node.classList;
		if (classNames.length) {
			// guess best block name from class or use parent’s block name
			lookup.set(node,
				find(classNames, blockCandidates1)
				|| find(classNames, blockCandidates2)
				|| lookup.get(node.parent)
			);
		}
	});

	return lookup;
}

/**
 * Returns block name for given `node` by `prefix`, which tells the depth of
 * of parent node lookup
 * @param  {Node} node
 * @param  {Map} lookup
 * @param  {String} prefix
 * @return {String}
 */
function getBlockName(node, lookup, prefix) {
	let depth = prefix.length > 1 ? prefix.length : 0;

	// NB don’t walk up to root node, stay at first root child in case of
	// too deep prefix
	while (node.parent && node.parent.parent && depth--) {
		node = node.parent;
	}

	return lookup.get(node) || '';
}

function find(arr, filter) {
	for(let i = 0; i < arr.length; i++){
		if (reElement.test(arr[i]) || reModifier.test(arr[i])) {
			break;
		}
		if (filter(arr[i])) {
			return arr[i];
		}
	}
}

/**
 * JSX transformer: replaces `class` and `for` attributes with `className` and
 * `htmlFor` attributes respectively
 */
var jsx = function(tree) {
	tree.walk(node => {
		replace(node, 'class', 'className');
		replace(node, 'for', 'htmlFor');
	});
	return tree;
};

function replace(node, oldName, newName) {
	let attr = node.getAttribute(oldName);
	if (attr) {
		attr.name = newName;
	}
}

const reSupporterNames = /^xsl:(variable|with\-param)$/i;

/**
 * XSL transformer: removes `select` attributes from certain nodes that contain
 * children
 */
var xsl = function(tree) {
	tree.walk(node => {
		if (reSupporterNames.test(node.name || '') && (node.children.length || node.value)) {
			node.removeAttribute('select');
		}
	});
	return tree;
};

const supportedAddons = { bem, jsx, xsl };

/**
 * Runs additional transforms on given tree.
 * These transforms may introduce side-effects and unexpected result
 * so they are not applied by default, authors must specify which addons
 * in `addons` argument as `{addonName: addonOptions}`
 * @param {Node} tree Parsed Emmet abbreviation
 * @param {Object} addons Add-ons to apply and their options
 */
var addons = function(tree, addons) {
    Object.keys(addons || {}).forEach(key => {
        if (key in supportedAddons) {
            const addonOpt = typeof addons[key] === 'object' ? addons[key] : null;
            tree = tree.use(supportedAddons[key], addonOpt);
        }
    });

    return tree;
};

/**
 * Applies basic HTML-specific transformations for given parsed abbreviation:
 * – resolve implied tag names
 * – insert repeated content
 * – resolve node numbering
 */
var index = function(tree, content, appliedAddons) {
    if (typeof content === 'string') {
        content = [content];
    } else if (content && typeof content === 'object' && !Array.isArray(content)) {
        appliedAddons = content;
        content = null;
    }

    return tree
    .use(implicitTags)
    .use(prepare, Array.isArray(content) ? content.length : null)
    .use(applyNumbering)
    .use(insert, content)
    .use(addons, appliedAddons);
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emmetio/implicit-tag/dist/implicit-tag.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@emmetio/implicit-tag/dist/implicit-tag.es.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const inlineElements = new Set('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'.split(','));
const elementMap = {
    p: 'span',
    ul: 'li',
    ol: 'li',
    table: 'tr',
    tr: 'td',
    tbody: 'tr',
    thead: 'tr',
    tfoot: 'tr',
    colgroup: 'col',
    select: 'option',
    optgroup: 'option',
    audio: 'source',
    video: 'source',
    object: 'param',
    map: 'area'
};

/**
 * Returns best child node name for given parent node name
 * @param  {String} parentName Name of parent node
 * @return {String}
 */
function resolveImplicitName(parentName) {
    parentName = (parentName || '').toLowerCase();
    return elementMap[parentName]
        || (inlineElements.has(parentName) ? 'span' : 'div');
}

/* harmony default export */ __webpack_exports__["default"] = (resolveImplicitName);


/***/ }),

/***/ "./node_modules/@emmetio/lorem/dist/lorem.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@emmetio/lorem/dist/lorem.es.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emmetio_implicit_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/implicit-tag */ "./node_modules/@emmetio/implicit-tag/dist/implicit-tag.es.js");


var latin = {
	"common": ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"],
	"words": ["exercitationem", "perferendis", "perspiciatis", "laborum", "eveniet",
		"sunt", "iure", "nam", "nobis", "eum", "cum", "officiis", "excepturi",
		"odio", "consectetur", "quasi", "aut", "quisquam", "vel", "eligendi",
		"itaque", "non", "odit", "tempore", "quaerat", "dignissimos",
		"facilis", "neque", "nihil", "expedita", "vitae", "vero", "ipsum",
		"nisi", "animi", "cumque", "pariatur", "velit", "modi", "natus",
		"iusto", "eaque", "sequi", "illo", "sed", "ex", "et", "voluptatibus",
		"tempora", "veritatis", "ratione", "assumenda", "incidunt", "nostrum",
		"placeat", "aliquid", "fuga", "provident", "praesentium", "rem",
		"necessitatibus", "suscipit", "adipisci", "quidem", "possimus",
		"voluptas", "debitis", "sint", "accusantium", "unde", "sapiente",
		"voluptate", "qui", "aspernatur", "laudantium", "soluta", "amet",
		"quo", "aliquam", "saepe", "culpa", "libero", "ipsa", "dicta",
		"reiciendis", "nesciunt", "doloribus", "autem", "impedit", "minima",
		"maiores", "repudiandae", "ipsam", "obcaecati", "ullam", "enim",
		"totam", "delectus", "ducimus", "quis", "voluptates", "dolores",
		"molestiae", "harum", "dolorem", "quia", "voluptatem", "molestias",
		"magni", "distinctio", "omnis", "illum", "dolorum", "voluptatum", "ea",
		"quas", "quam", "corporis", "quae", "blanditiis", "atque", "deserunt",
		"laboriosam", "earum", "consequuntur", "hic", "cupiditate",
		"quibusdam", "accusamus", "ut", "rerum", "error", "minus", "eius",
		"ab", "ad", "nemo", "fugit", "officia", "at", "in", "id", "quos",
		"reprehenderit", "numquam", "iste", "fugiat", "sit", "inventore",
		"beatae", "repellendus", "magnam", "recusandae", "quod", "explicabo",
		"doloremque", "aperiam", "consequatur", "asperiores", "commodi",
		"optio", "dolor", "labore", "temporibus", "repellat", "veniam",
		"architecto", "est", "esse", "mollitia", "nulla", "a", "similique",
		"eos", "alias", "dolore", "tenetur", "deleniti", "porro", "facere",
		"maxime", "corrupti"]
};

var ru = {
	"common": ["далеко-далеко", "за", "словесными", "горами", "в стране", "гласных", "и согласных", "живут", "рыбные", "тексты"],
	"words": ["вдали", "от всех", "они", "буквенных", "домах", "на берегу", "семантика",
		"большого", "языкового", "океана", "маленький", "ручеек", "даль",
		"журчит", "по всей", "обеспечивает", "ее","всеми", "необходимыми",
		"правилами", "эта", "парадигматическая", "страна", "которой", "жаренные",
		"предложения", "залетают", "прямо", "рот", "даже", "всемогущая",
		"пунктуация", "не", "имеет", "власти", "над", "рыбными", "текстами",
		"ведущими", "безорфографичный", "образ", "жизни", "однажды", "одна",
		"маленькая", "строчка","рыбного", "текста", "имени", "lorem", "ipsum",
		"решила", "выйти", "большой", "мир", "грамматики", "великий", "оксмокс",
		"предупреждал", "о", "злых", "запятых", "диких", "знаках", "вопроса",
		"коварных", "точках", "запятой", "но", "текст", "дал", "сбить",
		"себя", "толку", "он", "собрал", "семь", "своих", "заглавных", "букв",
		"подпоясал", "инициал", "за", "пояс", "пустился", "дорогу",
		"взобравшись", "первую", "вершину", "курсивных", "гор", "бросил",
		"последний", "взгляд", "назад", "силуэт", "своего", "родного", "города",
		"буквоград", "заголовок", "деревни", "алфавит", "подзаголовок", "своего",
		"переулка", "грустный", "реторический", "вопрос", "скатился", "его",
		"щеке", "продолжил", "свой", "путь", "дороге", "встретил", "рукопись",
		"она", "предупредила",  "моей", "все", "переписывается", "несколько",
		"раз", "единственное", "что", "меня", "осталось", "это", "приставка",
		"возвращайся", "ты", "лучше", "свою", "безопасную", "страну", "послушавшись",
		"рукописи", "наш", "продолжил", "свой", "путь", "вскоре", "ему",
		"повстречался", "коварный", "составитель", "рекламных", "текстов",
		"напоивший", "языком", "речью", "заманивший", "свое", "агентство",
		"которое", "использовало", "снова", "снова", "своих", "проектах",
		"если", "переписали", "то", "живет", "там", "до", "сих", "пор"]
};

var sp = {
	"common": ["mujer", "uno", "dolor", "más", "de", "poder", "mismo", "si"],
	"words": ["ejercicio", "preferencia", "perspicacia", "laboral", "paño",
		"suntuoso", "molde", "namibia", "planeador", "mirar", "demás", "oficinista", "excepción",
		"odio", "consecuencia", "casi", "auto", "chicharra", "velo", "elixir",
		"ataque", "no", "odio", "temporal", "cuórum", "dignísimo",
		"facilismo", "letra", "nihilista", "expedición", "alma", "alveolar", "aparte",
		"león", "animal", "como", "paria", "belleza", "modo", "natividad",
		"justo", "ataque", "séquito", "pillo", "sed", "ex", "y", "voluminoso",
		"temporalidad", "verdades", "racional", "asunción", "incidente", "marejada",
		"placenta", "amanecer", "fuga", "previsor", "presentación", "lejos",
		"necesariamente", "sospechoso", "adiposidad", "quindío", "pócima",
		"voluble", "débito", "sintió", "accesorio", "falda", "sapiencia",
		"volutas", "queso", "permacultura", "laudo", "soluciones", "entero",
		"pan", "litro", "tonelada", "culpa", "libertario", "mosca", "dictado",
		"reincidente", "nascimiento", "dolor", "escolar", "impedimento", "mínima",
		"mayores", "repugnante", "dulce", "obcecado", "montaña", "enigma",
		"total", "deletéreo", "décima", "cábala", "fotografía", "dolores",
		"molesto", "olvido", "paciencia", "resiliencia", "voluntad", "molestias",
		"magnífico", "distinción", "ovni", "marejada", "cerro", "torre", "y",
		"abogada", "manantial", "corporal", "agua", "crepúsculo", "ataque", "desierto",
		"laboriosamente", "angustia", "afortunado", "alma", "encefalograma",
		"materialidad", "cosas", "o", "renuncia", "error", "menos", "conejo",
		"abadía", "analfabeto", "remo", "fugacidad", "oficio", "en", "almácigo", "vos", "pan",
		"represión", "números", "triste", "refugiado", "trote", "inventor",
		"corchea", "repelente", "magma", "recusado", "patrón", "explícito",
		"paloma", "síndrome", "inmune", "autoinmune", "comodidad",
		"ley", "vietnamita", "demonio", "tasmania", "repeler", "apéndice",
		"arquitecto", "columna", "yugo", "computador", "mula", "a", "propósito",
		"fantasía", "alias", "rayo", "tenedor", "deleznable", "ventana", "cara",
		"anemia", "corrupto"]
};

const langs = { latin, ru, sp };

const defaultOptions = {
	wordCount: 30,
	skipCommon: false,
	lang: 'latin'
};

/**
 * Replaces given parsed Emmet abbreviation node with nodes filled with
 * Lorem Ipsum stub text.
 * @param {Node} node
 * @return {Node}
 */
var index = function(node, options) {
	options = Object.assign({}, defaultOptions, options);
	const dict = langs[options.lang] || langs.latin;
    const startWithCommon = !options.skipCommon && !isRepeating(node);

	if (!node.repeat && !isRoot(node.parent)) {
		// non-repeating element, insert text stub as a content of parent node
		// and remove current one
		node.parent.value = paragraph(dict, options.wordCount, startWithCommon);
		node.remove();
	} else {
		// Replace named node with generated content
		node.value = paragraph(dict, options.wordCount, startWithCommon);
		node.name = node.parent.name ? Object(_emmetio_implicit_tag__WEBPACK_IMPORTED_MODULE_0__["default"])(node.parent.name) : null;
	}

	return node;
};

function isRoot(node) {
	return !node.parent;
}

/**
 * Returns random integer between <code>from</code> and <code>to</code> values
 * @param {Number} from
 * @param {Number} to
 * @returns {Number}
 */
function rand(from, to) {
	return Math.floor(Math.random() * (to - from) + from);
}

/**
 * @param {Array} arr
 * @param {Number} count
 * @returns {Array}
 */
function sample(arr, count) {
	const len = arr.length;
	const iterations = Math.min(len, count);
	const result = new Set();

	while (result.size < iterations) {
		result.add(arr[rand(0, len)]);
	}

	return Array.from(result);
}

function choice(val) {
	return val[rand(0, val.length - 1)];
}

function sentence(words, end) {
	if (words.length) {
		words = [capitalize(words[0])].concat(words.slice(1));
	}

	return words.join(' ') + (end || choice('?!...')); // more dots than question marks
}

function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

/**
 * Insert commas at randomly selected words. This function modifies values
 * inside <code>words</code> array
 * @param {Array} words
 */
function insertCommas(words) {
	if (words.length < 2) {
		return words;
	}

	words = words.slice();
	const len = words.length;
	const hasComma = /,$/;
	let totalCommas = 0;

	if (len > 3 && len <= 6) {
		totalCommas = rand(0, 1);
	} else if (len > 6 && len <= 12) {
		totalCommas = rand(0, 2);
	} else {
		totalCommas = rand(1, 4);
	}

	for (let i = 0, pos, word; i < totalCommas; i++) {
		pos = rand(0, len - 2);
		if (!hasComma.test(words[pos])) {
			words[pos] += ',';
		}
	}

	return words;
}

/**
 * Generate a paragraph of "Lorem ipsum" text
 * @param {Object} dict Words dictionary (see `lang/*.json`)
 * @param {Number} wordCount Words count in paragraph
 * @param {Boolean} startWithCommon Should paragraph start with common
 * "lorem ipsum" sentence.
 * @returns {String}
 */
function paragraph(dict, wordCount, startWithCommon) {
	const result = [];
	let totalWords = 0;
	let words;

	if (startWithCommon && dict.common) {
		words = dict.common.slice(0, wordCount);
		totalWords += words.length;
		result.push(sentence(insertCommas(words), '.'));
	}

	while (totalWords < wordCount) {
		words = sample(dict.words, Math.min(rand(2, 30), wordCount - totalWords));
		totalWords += words.length;
		result.push(sentence(insertCommas(words)));
	}

	return result.join(' ');
}

/**
 * Check if given node is in repeating context, e.g. node itself or one of its
 * parent is repeated
 * @param  {Node}  node
 * @return {Boolean}
 */
function isRepeating(node) {
    while (node.parent) {
        if (node.repeat && node.repeat.value && node.repeat.value > 1) {
            return true;
        }

        node = node.parent;
    }

    return false;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emmetio/markup-formatters/dist/markup-formatters.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@emmetio/markup-formatters/dist/markup-formatters.es.js ***!
  \******************************************************************************/
/*! exports provided: default, supports, template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _emmetio_field_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/field-parser */ "./node_modules/@emmetio/field-parser/dist/field-parser.es.js");
/* harmony import */ var _emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emmetio/output-renderer */ "./node_modules/@emmetio/output-renderer/dist/output-renderer.es.js");



const TOKEN       = /^(.*?)([A-Z_]+)(.*?)$/;
const TOKEN_OPEN  = 91; // [
const TOKEN_CLOSE = 93; // ]

/**
 * A basic templating engine.
 * Takes every `[TOKEN]` from given string and replaces it with
 * `TOKEN` value from given `data` attribute. The token itself may contain
 * various characters between `[`, token name and `]`. Contents of `[...]` will
 * be outputted only if `TOKEN` value is not empty. Also, only `TOKEN` name will
 * be replaced with actual value, all other characters will remain as is.
 *
 * Example:
 * ```
 * template('[<NAME>]', {NAME: 'foo'}) -> "<foo>"
 * template('[<NAME>]', {}) -> ""
 * ```
 */
function template(str, data) {
	if (str == null) {
		return str;
	}

	// NB since token may contain inner `[` and `]`, we can’t just use regexp
	// for replacement, should manually parse string instead
	const stack = [];
	const replacer = (str, left, token, right) =>
		data[token] != null ? left + data[token] + right : '';

	let output = '';
	let offset = 0, i = 0;
	let code, lastPos;

	while (i < str.length) {
		code = str.charCodeAt(i);
		if (code === TOKEN_OPEN) {
			stack.push(i);
		} else if (code === TOKEN_CLOSE) {
			lastPos = stack.pop();
			if (!stack.length) {
				output += str.slice(offset, lastPos) +
					str.slice(lastPos + 1, i).replace(TOKEN, replacer);
				offset = i + 1;
			}
		}

		i++;
	}

	return output + str.slice(offset);
}

/**
 * Various utility methods used by formatters
 */

/**
 * Splits given text by lines
 * @param  {String} text
 * @return {String[]}
 */
function splitByLines(text) {
	return (text || '').split(/\r\n|\r|\n/g);
}

/**
 * Check if given node is a first child in its parent
 * @param  {Node}  node
 * @return {Boolean}
 */
function isFirstChild(node) {
	return node.parent.firstChild === node;
}

/**
 * Check if given node is a root node
 * @param  {Node}  node
 * @return {Boolean}
 */
function isRoot(node) {
	return node && !node.parent;
}

/**
 * Check if given node is a pseudo-snippet: a text-only node with explicitly
 * defined children
 * @param  {Node}  node
 * @return {Boolean}
 */
function isPseudoSnippet(node) {
	return node.isTextOnly && !!node.children.length;
}

/**
 * Handles pseudo-snippet node.
 * A pseudo-snippet is a text-only node with explicitly defined children.
 * For such case, we have to figure out if pseudo-snippet contains fields
 * (tab-stops) in node value and “split” it: make contents before field with
 * lowest index node’s “open” part and contents after lowest index — “close”
 * part. With this trick a final output will look like node’s children
 * are nested inside node value
 * @param  {OutputNode} outNode
 * @return {Boolean} Returns “true” if given node is a pseudo-snippets,
 * `false` otherwise
 */
function handlePseudoSnippet(outNode) {
	const node = outNode.node; // original abbreviaiton node

	if (isPseudoSnippet(node)) {
		const fieldsModel = Object(_emmetio_field_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(node.value);
		const field = findLowestIndexField(fieldsModel);
		if (field) {
			const parts = splitFieldsModel(fieldsModel, field);
			outNode.open = outNode.renderFields(parts[0]);
			outNode.close = outNode.renderFields(parts[1]);
		} else {
			outNode.text = outNode.renderFields(fieldsModel);
		}

		return true;
	}

	return false;
}

/**
 * Finds field with lowest index in given text
 * @param  {Object} model
 * @return {Object}
 */
function findLowestIndexField(model) {
	return model.fields.reduce((result, field) =>
		!result || field.index < result.index ? field : result
		, null);
}

/**
 * Splits given fields model in two parts by given field
 * @param  {Object} model
 * @param  {Object} field
 * @return {Array} Two-items array
 */
function splitFieldsModel(model, field) {
	const ix = model.fields.indexOf(field);

	const left = new model.constructor(
		model.string.slice(0, field.location),
		model.fields.slice(0, ix)
	);

	const right = new model.constructor(
		model.string.slice(field.location + field.length),
		model.fields.slice(ix + 1)
	);

	return [left, right];
}

const commentOptions = {
	// enable node commenting
	enabled: false,

	// attributes that should trigger node commenting on specific node,
	// if commenting is enabled
	trigger: ['id', 'class'],

	// comment before opening tag
	before: '',

	// comment after closing tag
	after: '\n<!-- /[#ID][.CLASS] -->'
};

/**
 * Renders given parsed Emmet abbreviation as HTML, formatted according to
 * `profile` options
 * @param  {Node}     tree    Parsed Emmet abbreviation
 * @param  {Profile}  profile Output profile
 * @param  {Object}  [options] Additional formatter options
 * @return {String}
 */
function html(tree, profile, options) {
	options = Object.assign({}, options);
	const format = getFormatOptions(options);

	return Object(_emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])(tree, options.field, outNode => {
		outNode = setFormatting(outNode, profile);

		if (!handlePseudoSnippet(outNode)) {
			const node = outNode.node;

			if (node.name) {
				const name = profile.name(node.name);
				const attrs = formatAttributes(outNode, profile);

				outNode.open = `<${name}${attrs}${node.selfClosing ? profile.selfClose() : ''}>`;
				if (!node.selfClosing) {
					outNode.close = `</${name}>`;
				}

				commentNode(outNode, format.comment);
			}

			// Do not generate fields for nodes with empty value and children
			// or if node is self-closed
			if (node.value || (!node.children.length && !node.selfClosing) ) {
				outNode.text = outNode.renderFields(node.value);
			}
		}

		return outNode;
	});
}

/**
 * Updates formatting properties for given output node
 * @param  {OutputNode} outNode Output wrapper of farsed abbreviation node
 * @param  {Profile}    profile Output profile
 * @return {OutputNode}
 */
function setFormatting(outNode, profile) {
	const node = outNode.node;

	if (shouldFormatNode(node, profile)) {
		outNode.indent = profile.indent(getIndentLevel(node, profile));
		outNode.newline = '\n';
		const prefix = outNode.newline + outNode.indent;

		// do not format the very first node in output
		if (!isRoot(node.parent) || !isFirstChild(node)) {
			outNode.beforeOpen = prefix;
			if (node.isTextOnly) {
				outNode.beforeText = prefix;
			}
		}

		if (hasInnerFormatting(node, profile)) {
			if (!node.isTextOnly) {
				outNode.beforeText = prefix + profile.indent(1);
			}
			outNode.beforeClose = prefix;
		}
	}

	return outNode;
}

/**
 * Check if given node should be formatted
 * @param  {Node} node
 * @param  {Profile} profile
 * @return {Boolean}
 */
function shouldFormatNode(node, profile) {
	if (!profile.get('format')) {
		return false;
	}

	if (node.parent.isTextOnly
		&& node.parent.children.length === 1
		&& Object(_emmetio_field_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(node.parent.value).fields.length) {
		// Edge case: do not format the only child of text-only node,
		// but only if parent contains fields
		return false;
	}

	return isInline(node, profile) ? shouldFormatInline(node, profile) : true;
}

/**
 * Check if given inline node should be formatted as well, e.g. it contains
 * enough adjacent siblings that should force formatting
 * @param  {Node} node
 * @param  {Profile} profile
 * @return {Boolean}
 */
function shouldFormatInline(node, profile) {
	if (!isInline(node, profile)) {
		return false;
	}

	if (isPseudoSnippet(node)) {
		return true;
	}

	// check if inline node is the next sibling of block-level node
	if (node.childIndex === 0) {
		// first node in parent: format if it’s followed by a block-level element
		let next = node;
		while (next = next.nextSibling) {
			if (!isInline(next, profile)) {
				return true;
			}
		}
	} else if (!isInline(node.previousSibling, profile)) {
		// node is right after block-level element
		return true;
	}

	if (profile.get('inlineBreak')) {
		// check for adjacent inline elements before and after current element
		let adjacentInline = 1;
		let before = node, after = node;

		while (isInlineElement((before = before.previousSibling), profile)) {
			adjacentInline++;
		}

		while (isInlineElement((after = after.nextSibling), profile)) {
			adjacentInline++;
		}

		if (adjacentInline >= profile.get('inlineBreak')) {
			return true;
		}
	}

	// Another edge case: inline node contains node that should receive foramtting
	for (let i = 0, il = node.children.length; i < il; i++) {
		if (shouldFormatNode(node.children[i], profile)) {
			return true;
		}
	}

	return false;
}

/**
 * Check if given node contains inner formatting, e.g. any of its children should
 * be formatted
 * @param  {Node} node
 * @param  {Profile} profile
 * @return {Boolean}
 */
function hasInnerFormatting(node, profile) {
	// check if node if forced for inner formatting
	const nodeName = (node.name || '').toLowerCase();
	if (profile.get('formatForce').indexOf(nodeName) !== -1) {
		return true;
	}

	// check if any of children should receive formatting
	// NB don’t use `childrent.some()` to reduce memory allocations
	for (let i = 0; i < node.children.length; i++) {
		if (shouldFormatNode(node.children[i], profile)) {
			return true;
		}
	}

	return false;
}

/**
 * Outputs attributes of given abbreviation node as HTML attributes
 * @param  {OutputNode} outNode
 * @param  {Profile}    profile
 * @return {String}
 */
function formatAttributes(outNode, profile) {
	const node = outNode.node;

	return node.attributes.map(attr => {
		if (attr.options.implied && attr.value == null) {
			return null;
		}

		const attrName = profile.attribute(attr.name);
		let attrValue = null;

		// handle boolean attributes
		if (attr.options.boolean || profile.get('booleanAttributes').indexOf(attrName.toLowerCase()) !== -1) {
			if (profile.get('compactBooleanAttributes') && attr.value == null) {
				return ` ${attrName}`;
			} else if (attr.value == null) {
				attrValue = attrName;
			}
		}

		if (attrValue == null) {
			attrValue = outNode.renderFields(attr.value);
		}

		return ` ${attrName}=${profile.quote(attrValue)}`;
	}).join('');
}

/**
 * Check if given node is inline-level
 * @param  {Node}  node
 * @param  {Profile}  profile
 * @return {Boolean}
 */
function isInline(node, profile) {
	return (node && node.isTextOnly) || isInlineElement(node, profile);
}

/**
 * Check if given node is inline-level element, e.g. element with explicitly
 * defined node name
 * @param  {Node}  node
 * @param  {Profile}  profile
 * @return {Boolean}
 */
function isInlineElement(node, profile) {
	return node && profile.isInline(node);
}

/**
 * Computes indent level for given node
 * @param  {Node} node
 * @param  {Profile} profile
 * @param  {Number} level
 * @return {Number}
 */
function getIndentLevel(node, profile) {
	// Increase indent level IF NOT:
	// * parent is text-only node
	// * there’s a parent node with a name that is explicitly set to decrease level
	const skip = profile.get('formatSkip') || [];
	let level = node.parent.isTextOnly ? -2 : -1;
	let ctx = node;
	while (ctx = ctx.parent) {
		if (skip.indexOf( (ctx.name || '').toLowerCase() ) === -1) {
			level++;
		}
	}

	return level < 0 ? 0 : level;
}

/**
 * Comments given output node, if required
 * @param  {OutputNode} outNode
 * @param  {Object} options
 */
function commentNode(outNode, options) {
	const node = outNode.node;

	if (!options.enabled || !options.trigger || !node.name) {
		return;
	}

	const attrs = outNode.node.attributes.reduce((out, attr) => {
		if (attr.name && attr.value != null) {
			out[attr.name.toUpperCase().replace(/-/g, '_')] = attr.value;
		}

		return out;
	}, {});

	// add comment only if attribute trigger is present
	for (let i = 0, il = options.trigger.length; i < il; i++) {
		if (options.trigger[i].toUpperCase() in attrs) {
			outNode.open = template(options.before, attrs) + outNode.open;
			if (outNode.close) {
				outNode.close += template(options.after, attrs);
			}
			break;
		}
	}
}

function getFormatOptions(options) {
	const format = Object.assign({}, options && options.format);
	format.comment = Object.assign({}, commentOptions, format.comment);
	return format;
}

const reId = /^id$/i;
const reClass = /^class$/i;
const defaultAttrOptions = {
	primary: attrs => attrs.join(''),
	secondary: attrs => attrs.map(attr => attr.isBoolean ? attr.name : `${attr.name}=${attr.value}`).join(', ')
};

const defaultNodeOptions = {
	open: null,
	close: null,
	omitName: /^div$/i,
	attributes: defaultAttrOptions
};

function indentFormat(outNode, profile, options) {
	options = Object.assign({}, defaultNodeOptions, options);
	const node = outNode.node;

	outNode.indent = profile.indent(getIndentLevel$1(node, profile));
	outNode.newline = '\n';

	// Do not format the very first node in output
	if (!isRoot(node.parent) || !isFirstChild(node)) {
		outNode.beforeOpen = outNode.newline + outNode.indent;
	}

	if (node.name) {
		const data = Object.assign({
			NAME: profile.name(node.name),
			SELF_CLOSE: node.selfClosing ? options.selfClose : null
		}, getAttributes(outNode, profile, options.attributes));

		// omit tag name if node has primary attributes
		if (options.omitName && options.omitName.test(data.NAME) && data.PRIMARY_ATTRS) {
			data.NAME = null;
		}

		if (options.open != null) {
			outNode.open = template(options.open, data);
		}

		if (options.close != null) {
			outNode.close = template(options.close, data);
		}
	}

	return outNode;
}

/**
 * Formats attributes of given node into a string.
 * @param  {OutputNode} node          Output node wrapper
 * @param  {Profile}    profile       Output profile
 * @param  {Object}     options       Additional formatting options
 * @return {String}
 */
function getAttributes(outNode, profile, options) {
	options = Object.assign({}, defaultAttrOptions, options);
	const primary = [], secondary = [];
	const node = outNode.node;

	node.attributes.forEach(attr => {
		if (attr.options.implied && attr.value == null) {
			return null;
		}

		const name = profile.attribute(attr.name);
		const value = outNode.renderFields(attr.value);

		if (reId.test(name)) {
			value && primary.push(`#${value}`);
		} else if (reClass.test(name)) {
			value && primary.push(`.${value.replace(/\s+/g, '.')}`);
		} else {
			const isBoolean = attr.value == null
				&& (attr.options.boolean || profile.get('booleanAttributes').indexOf(name.toLowerCase()) !== -1);

			secondary.push({ name, value, isBoolean });
		}
	});

	return {
		PRIMARY_ATTRS: options.primary(primary) || null,
		SECONDARY_ATTRS: options.secondary(secondary) || null
	};
}

/**
 * Computes indent level for given node
 * @param  {Node} node
 * @return {Number}
 */
function getIndentLevel$1(node) {
	let level = node.parent.isTextOnly ? -2 : -1;
	let ctx = node;
	while (ctx = ctx.parent) {
		level++;
	}

	return level < 0 ? 0 : level;
}

const reNl = /\n|\r/;

/**
 * Renders given parsed Emmet abbreviation as HAML, formatted according to
 * `profile` options
 * @param  {Node}    tree      Parsed Emmet abbreviation
 * @param  {Profile} profile   Output profile
 * @param  {Object}  [options] Additional formatter options
 * @return {String}
 */
function haml(tree, profile, options) {
	options = options || {};
	const nodeOptions = {
		open: '[%NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)][SELF_CLOSE]',
		selfClose: '/',
		attributes: {
			secondary(attrs) {
				return attrs.map(attr => attr.isBoolean
					? `${attr.name}${profile.get('compactBooleanAttributes') ? '' : '=true'}`
					: `${attr.name}=${profile.quote(attr.value)}`
				).join(' ');
			}
		}
	};

	return Object(_emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])(tree, options.field, outNode => {
		outNode = indentFormat(outNode, profile, nodeOptions);
		outNode = updateFormatting(outNode, profile);

		if (!handlePseudoSnippet(outNode)) {
			const node = outNode.node;

			// Do not generate fields for nodes with empty value and children
			// or if node is self-closed
			if (node.value || (!node.children.length && !node.selfClosing) ) {
				outNode.text = outNode.renderFields(formatNodeValue(node, profile));
			}
		}

		return outNode;
	});
}

/**
 * Updates formatting properties for given output node
 * NB Unlike HTML, HAML is indent-based format so some formatting options from
 * `profile` will not take effect, otherwise output will be broken
 * @param  {OutputNode} outNode Output wrapper of parsed abbreviation node
 * @param  {Profile}    profile Output profile
 * @return {OutputNode}
 */
function updateFormatting(outNode, profile) {
	const node = outNode.node;

	if (!node.isTextOnly && node.value) {
		// node with text: put a space before single-line text
		outNode.beforeText = reNl.test(node.value)
			? outNode.newline + outNode.indent + profile.indent(1)
			: ' ';
	}

	return outNode;
}
/**
 * Formats value of given node: for multiline text we should add a ` |` suffix
 * at the end of each line. Also ensure that text is perfectly aligned.
 * @param  {Node}    node
 * @param  {Profile} profile
 * @return {String|null}
 */
function formatNodeValue(node, profile) {
	if (node.value != null && reNl.test(node.value)) {
		const lines = splitByLines(node.value);
		const indent = profile.indent(1);
		const maxLength = lines.reduce((prev, line) => Math.max(prev, line.length), 0);

		return lines.map((line, i) => `${i ? indent : ''}${pad(line, maxLength)} |`).join('\n');
	}

	return node.value;
}

function pad(text, len) {
	while (text.length < len) {
		text += ' ';
	}

	return text;
}

const reNl$1 = /\n|\r/;
const secondaryAttrs = {
	none:   '[ SECONDARY_ATTRS]',
	round:  '[(SECONDARY_ATTRS)]',
	curly:  '[{SECONDARY_ATTRS}]',
	square: '[[SECONDARY_ATTRS]'
};

/**
 * Renders given parsed Emmet abbreviation as Slim, formatted according to
 * `profile` options
 * @param  {Node}    tree      Parsed Emmet abbreviation
 * @param  {Profile} profile   Output profile
 * @param  {Object}  [options] Additional formatter options
 * @return {String}
 */
function slim(tree, profile, options) {
	options = options || {};
	const SECONDARY_ATTRS = options.attributeWrap
		&& secondaryAttrs[options.attributeWrap]
		|| secondaryAttrs.none;

	const booleanAttr = SECONDARY_ATTRS === secondaryAttrs.none
		? attr => `${attr.name}=true`
		: attr => attr.name;

	const nodeOptions = {
		open: `[NAME][PRIMARY_ATTRS]${SECONDARY_ATTRS}[SELF_CLOSE]`,
		selfClose: '/',
		attributes: {
			secondary(attrs) {
				return attrs.map(attr => attr.isBoolean
					? booleanAttr(attr)
					: `${attr.name}=${profile.quote(attr.value)}`
				).join(' ');
			}
		}
	};

	return Object(_emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])(tree, options.field, outNode => {
		outNode = indentFormat(outNode, profile, nodeOptions);
		outNode = updateFormatting$1(outNode, profile);

		if (!handlePseudoSnippet(outNode)) {
			const node = outNode.node;

			// Do not generate fields for nodes with empty value and children
			// or if node is self-closed
			if (node.value || (!node.children.length && !node.selfClosing) ) {
				outNode.text = outNode.renderFields(formatNodeValue$1(node, profile));
			}
		}

		return outNode;
	});
}

/**
 * Updates formatting properties for given output node
 * NB Unlike HTML, Slim is indent-based format so some formatting options from
 * `profile` will not take effect, otherwise output will be broken
 * @param  {OutputNode} outNode Output wrapper of farsed abbreviation node
 * @param  {Profile}    profile Output profile
 * @return {OutputNode}
 */
function updateFormatting$1(outNode, profile) {
	const node = outNode.node;
	const parent = node.parent;

	// Edge case: a single inline-level child inside node without text:
	// allow it to be inlined
	if (profile.get('inlineBreak') === 0 && isInline$1(node, profile)
		&& !isRoot(parent) && parent.value == null && parent.children.length === 1) {
		outNode.beforeOpen = ': ';
	}

	if (!node.isTextOnly && node.value) {
		// node with text: put a space before single-line text
		outNode.beforeText = reNl$1.test(node.value)
			? outNode.newline + outNode.indent + profile.indent(1)
			: ' ';
	}

	return outNode;
}

/**
 * Formats value of given node: for multiline text we should precede each
 * line with `| ` with one-level deep indent
 * @param  {Node} node
 * @param  {Profile} profile
 * @return {String|null}
 */
function formatNodeValue$1(node, profile) {
	if (node.value != null && reNl$1.test(node.value)) {
		const indent = profile.indent(1);
		return splitByLines(node.value).map((line, i) => `${indent}${i ? ' ' : '|'} ${line}`).join('\n');
	}

	return node.value;
}

/**
 * Check if given node is inline-level
 * @param  {Node}  node
 * @param  {Profile}  profile
 * @return {Boolean}
 */
function isInline$1(node, profile) {
	return node && (node.isTextOnly || profile.isInline(node));
}

const reNl$2 = /\n|\r/;

/**
 * Renders given parsed Emmet abbreviation as Pug, formatted according to
 * `profile` options
 * @param  {Node}    tree      Parsed Emmet abbreviation
 * @param  {Profile} profile   Output profile
 * @param  {Object}  [options] Additional formatter options
 * @return {String}
 */
function pug(tree, profile, options) {
	options = options || {};
	const nodeOptions = {
		open: '[NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)]',
		attributes: {
			secondary(attrs) {
				return attrs.map(attr => attr.isBoolean ? attr.name : `${attr.name}=${profile.quote(attr.value)}`).join(', ');
			}
		}
	};

	return Object(_emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_1__["default"])(tree, options.field, outNode => {
		outNode = indentFormat(outNode, profile, nodeOptions);
		outNode = updateFormatting$2(outNode, profile);

		if (!handlePseudoSnippet(outNode)) {
			const node = outNode.node;
			// Do not generate fields for nodes with empty value and children
			// or if node is self-closed
			if (node.value || (!node.children.length && !node.selfClosing) ) {
				outNode.text = outNode.renderFields(formatNodeValue$2(node, profile));
			}
		}

		return outNode;
	});
}

/**
 * Updates formatting properties for given output node
 * NB Unlike HTML, Pug is indent-based format so some formatting options from
 * `profile` will not take effect, otherwise output will be broken
 * @param  {OutputNode} outNode Output wrapper of parsed abbreviation node
 * @param  {Profile}    profile Output profile
 * @return {OutputNode}
 */
function updateFormatting$2(outNode, profile) {
	const node = outNode.node;

	if (!node.isTextOnly && node.value) {
		// node with text: put a space before single-line text
		outNode.beforeText = reNl$2.test(node.value)
			? outNode.newline + outNode.indent + profile.indent(1)
			: ' ';
	}

	return outNode;
}

/**
 * Formats value of given node: for multiline text we should precede each
 * line with `| ` with one-level deep indent
 * @param  {Node} node
 * @param  {Profile} profile
 * @return {String|null}
 */
function formatNodeValue$2(node, profile) {
	if (node.value != null && reNl$2.test(node.value)) {
		const indent = profile.indent(1);
		return splitByLines(node.value).map(line => `${indent}| ${line}`).join('\n');
	}

	return node.value;
}

const supportedSyntaxes = { html, haml, slim, pug };

/**
 * Outputs given parsed abbreviation in specified syntax
 * @param {Node}     tree     Parsed abbreviation tree
 * @param {Profile}  profile  Output profile
 * @param {String}   [syntax] Output syntax. If not given, `html` syntax is used
 * @param {Function} options.field A function to output field/tabstop for
 * host editor. This function takes two arguments: `index` and `placeholder` and
 * should return a string that represents tabstop in host editor. By default
 * only a placeholder is returned
 * @example
 * {
 * 	field(index, placeholder) {
 * 		// return field in TextMate-style, e.g. ${1} or ${2:foo}
 * 		return `\${${index}${placeholder ? ':' + placeholder : ''}}`;
 *  }
 * }
 * @return {String}
 */
function index(tree, profile, syntax, options) {
	if (typeof syntax === 'object') {
		options = syntax;
		syntax = null;
	}

	if (!supports(syntax)) {
		// fallback to HTML if given syntax is not supported
		syntax = 'html';
	}

	return supportedSyntaxes[syntax](tree, profile, options);
}

/**
 * Check if given syntax is supported
 * @param {String} syntax
 * @return {Boolean}
 */
function supports(syntax) {
	return !!syntax && syntax in supportedSyntaxes;
}

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=markup-formatters.es.js.map


/***/ }),

/***/ "./node_modules/@emmetio/node/dist/node.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@emmetio/node/dist/node.es.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Attribute descriptor of parsed abbreviation node
 * @param {String} name Attribute name
 * @param {String} value Attribute value
 * @param {Object} options Additional custom attribute options
 * @param {Boolean} options.boolean Attribute is boolean (e.g. name equals value)
 * @param {Boolean} options.implied Attribute is implied (e.g. must be outputted
 * only if contains non-null value)
 */
class Attribute {
	constructor(name, value, options) {
		this.name = name;
		this.value = value != null ? value : null;
		this.options = options || {};
	}

	/**
	 * Create a copy of current attribute
	 * @return {Attribute}
	 */
	clone() {
		return new Attribute(this.name, this.value, Object.assign({}, this.options));
	}

	/**
	 * A string representation of current node
	 */
	valueOf() {
		return `${this.name}="${this.value}"`;
	}
}

/**
 * A parsed abbreviation AST node. Nodes build up an abbreviation AST tree
 */
class Node {
	/**
	 * Creates a new node
	 * @param {String} [name] Node name
	 * @param {Array} [attributes] Array of attributes to add
	 */
	constructor(name, attributes) {
		// own properties
		this.name = name || null;
		this.value = null;
		this.repeat = null;
		this.selfClosing = false;

		this.children = [];

		/** @type {Node} Pointer to parent node */
		this.parent = null;

		/** @type {Node} Pointer to next sibling */
		this.next = null;

		/** @type {Node} Pointer to previous sibling */
		this.previous = null;

		this._attributes = [];

		if (Array.isArray(attributes)) {
			attributes.forEach(attr => this.setAttribute(attr));
		}
	}

	/**
	 * Array of current node attributes
	 * @return {Attribute[]} Array of attributes
	 */
	get attributes() {
		return this._attributes;
	}

	/**
	 * A shorthand to retreive node attributes as map
	 * @return {Object}
	 */
	get attributesMap() {
		return this.attributes.reduce((out, attr) => {
			out[attr.name] = attr.options.boolean ? attr.name : attr.value;
			return out;
		}, {});
	}

	/**
	 * Check if current node is a grouping one, e.g. has no actual representation
	 * and is used for grouping subsequent nodes only
	 * @return {Boolean}
	 */
	get isGroup() {
		return !this.name && !this.value && !this._attributes.length;
	}

	/**
	 * Check if given node is a text-only node, e.g. contains only value
	 * @return {Boolean}
	 */
	get isTextOnly() {
		return !this.name && !!this.value && !this._attributes.length;
	}

	/**
	 * Returns first child node
	 * @return {Node}
	 */
	get firstChild() {
		return this.children[0];
	}

	/**
	 * Returns last child of current node
	 * @return {Node}
	 */
	get lastChild() {
		return this.children[this.children.length - 1];
	}

	/**
	 * Return index of current node in its parent child list
	 * @return {Number} Returns -1 if current node is a root one
	 */
	get childIndex() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}

	/**
	 * Returns next sibling of current node
	 * @return {Node}
	 */
	get nextSibling() {
		return this.next;
	}

	/**
	 * Returns previous sibling of current node
	 * @return {Node}
	 */
	get previousSibling() {
		return this.previous;
	}

	/**
	 * Returns array of unique class names in current node
	 * @return {String[]}
	 */
	get classList() {
		const attr = this.getAttribute('class');
		return attr && attr.value
			? attr.value.split(/\s+/g).filter(uniqueClass)
			: [];
	}

	/**
	 * Convenient alias to create a new node instance
	 * @param {String} [name] Node name
	 * @param {Object} [attributes] Attributes hash
	 * @return {Node}
	 */
	create(name, attributes) {
		return new Node(name, attributes);
	}

	/**
	 * Sets given attribute for current node
	 * @param {String|Object|Attribute} name Attribute name or attribute object
	 * @param {String} [value] Attribute value
	 */
	setAttribute(name, value) {
		const attr = createAttribute(name, value);
		const curAttr = this.getAttribute(name);
		if (curAttr) {
			this.replaceAttribute(curAttr, attr);
		} else {
			this._attributes.push(attr);
		}
	}

	/**
	 * Check if attribute with given name exists in node
	 * @param  {String} name
	 * @return {Boolean}
	 */
	hasAttribute(name) {
		return !!this.getAttribute(name);
	}

	/**
	 * Returns attribute object by given name
	 * @param  {String} name
	 * @return {Attribute}
	 */
	getAttribute(name) {
		if (typeof name === 'object') {
			name = name.name;
		}

		for (var i = 0; i < this._attributes.length; i++) {
			const attr = this._attributes[i];
			if (attr.name === name) {
				return attr;
			}
		}
	}

	/**
	 * Replaces attribute with new instance
	 * @param {String|Attribute} curAttribute Current attribute name or instance
	 * to replace
	 * @param {String|Object|Attribute} newName New attribute name or attribute object
	 * @param {String} [newValue] New attribute value
	 */
	replaceAttribute(curAttribute, newName, newValue) {
		if (typeof curAttribute === 'string') {
			curAttribute = this.getAttribute(curAttribute);
		}

		const ix = this._attributes.indexOf(curAttribute);
		if (ix !== -1) {
			this._attributes.splice(ix, 1, createAttribute(newName, newValue));
		}
	}

	/**
	 * Removes attribute with given name
	 * @param  {String|Attribute} attr Atrtibute name or instance
	 */
	removeAttribute(attr) {
		if (typeof attr === 'string') {
			attr = this.getAttribute(attr);
		}

		const ix = this._attributes.indexOf(attr);
		if (ix !== -1) {
			this._attributes.splice(ix, 1);
		}
	}

	/**
	 * Removes all attributes from current node
	 */
	clearAttributes() {
		this._attributes.length = 0;
	}

	/**
	 * Adds given class name to class attribute
	 * @param {String} token Class name token
	 */
	addClass(token) {
		token = normalize(token);

		if (!this.hasAttribute('class')) {
			this.setAttribute('class', token);
		} else if (token && !this.hasClass(token)) {
			this.setAttribute('class', this.classList.concat(token).join(' '));
		}
	}

	/**
	 * Check if current node contains given class name
	 * @param {String} token Class name token
	 * @return {Boolean}
	 */
	hasClass(token) {
		return this.classList.indexOf(normalize(token)) !== -1;
	}

	/**
	 * Removes given class name from class attribute
	 * @param {String} token Class name token
	 */
	removeClass(token) {
		token = normalize(token);
		if (this.hasClass(token)) {
			this.setAttribute('class', this.classList.filter(name => name !== token).join(' '));
		}
	}

	/**
	 * Appends child to current node
	 * @param {Node} node
	 */
	appendChild(node) {
		this.insertAt(node, this.children.length);
	}

	/**
	 * Inserts given `newNode` before `refNode` child node
	 * @param {Node} newNode
	 * @param {Node} refNode
	 */
	insertBefore(newNode, refNode) {
		this.insertAt(newNode, this.children.indexOf(refNode));
	}

	/**
	 * Insert given `node` at `pos` position of child list
	 * @param {Node} node
	 * @param {Number} pos
	 */
	insertAt(node, pos) {
		if (pos < 0 || pos > this.children.length) {
			throw new Error('Unable to insert node: position is out of child list range');
		}

		const prev = this.children[pos - 1];
		const next = this.children[pos];

		node.remove();
		node.parent = this;
		this.children.splice(pos, 0, node);

		if (prev) {
			node.previous = prev;
			prev.next = node;
		}

		if (next) {
			node.next = next;
			next.previous = node;
		}
	}

	/**
	 * Removes given child from current node
	 * @param {Node} node
	 */
	removeChild(node) {
		const ix = this.children.indexOf(node);
		if (ix !== -1) {
			this.children.splice(ix, 1);
			if (node.previous) {
				node.previous.next = node.next;
			}

			if (node.next) {
				node.next.previous = node.previous;
			}

			node.parent = node.next = node.previous = null;
		}
	}

	/**
	 * Removes current node from its parent
	 */
	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	/**
	 * Creates a detached copy of current node
	 * @param {Boolean} deep Clone node contents as well
	 * @return {Node}
	 */
	clone(deep) {
		const clone = new Node(this.name);
		clone.value = this.value;
		clone.selfClosing = this.selfClosing;
		if (this.repeat) {
			clone.repeat = Object.assign({}, this.repeat);
		}

		this._attributes.forEach(attr => clone.setAttribute(attr.clone()));

		if (deep) {
			this.children.forEach(child => clone.appendChild(child.clone(true)));
		}

		return clone;
	}

	/**
	 * Walks on each descendant node and invokes given `fn` function on it.
	 * The function receives two arguments: the node itself and its depth level
	 * from current node. If function returns `false`, it stops walking
	 * @param {Function} fn
	 */
	walk(fn, _level) {
		_level = _level || 0;
		let ctx = this.firstChild;

		while (ctx) {
			// in case if context node will be detached during `fn` call
			const next = ctx.next;

			if (fn(ctx, _level) === false || ctx.walk(fn, _level + 1) === false) {
				return false;
			}

			ctx = next;
		}
	}

	/**
	 * A helper method for transformation chaining: runs given `fn` function on
	 * current node and returns the same node
	 */
	use(fn) {
		const args = [this];
		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}

		fn.apply(null, args);
		return this;
	}

	toString() {
		const attrs = this.attributes.map(attr => {
			attr = this.getAttribute(attr.name);
			const opt = attr.options;
			let out = `${opt && opt.implied ? '!' : ''}${attr.name || ''}`;
			if (opt && opt.boolean) {
				out += '.';
			} else if (attr.value != null) {
				out += `="${attr.value}"`;
			}
			return out;
		});

		let out = `${this.name || ''}`;
		if (attrs.length) {
			out += `[${attrs.join(' ')}]`;
		}

		if (this.value != null) {
			out += `{${this.value}}`;
		}

		if (this.selfClosing) {
			out += '/';
		}

		if (this.repeat) {
			out += `*${this.repeat.count ? this.repeat.count : ''}`;
			if (this.repeat.value != null) {
				out += `@${this.repeat.value}`;
			}
		}

		return out;
	}
}

/**
 * Attribute factory
 * @param  {String|Attribute|Object} name  Attribute name or attribute descriptor
 * @param  {*} value Attribute value
 * @return {Attribute}
 */
function createAttribute(name, value) {
	if (name instanceof Attribute) {
		return name;
	}

	if (typeof name === 'string') {
		return new Attribute(name, value);
	}

	if (name && typeof name === 'object') {
		return new Attribute(name.name, name.value, name.options);
	}
}

/**
 * @param  {String} str
 * @return {String}
 */
function normalize(str) {
	return String(str).trim();
}

function uniqueClass(item, i, arr) {
	return item && arr.indexOf(item) === i;
}

/* harmony default export */ __webpack_exports__["default"] = (Node);


/***/ }),

/***/ "./node_modules/@emmetio/output-profile/dist/output-profile.es.js":
/*!************************************************************************!*\
  !*** ./node_modules/@emmetio/output-profile/dist/output-profile.es.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @type {EmmetOutputProfile}
 */
var defaultOptions = {
	indent: '\t',
	tagCase: '',
	attributeCase: '',
	attributeQuotes: 'double',
	format: true,
	formatSkip: ['html'],
	formatForce: ['body'],
	inlineBreak: 3,
	compactBooleanAttributes: false,
	booleanAttributes: ['contenteditable', 'seamless', 'async', 'autofocus',
		'autoplay', 'checked', 'controls', 'defer', 'disabled', 'formnovalidate',
		'hidden', 'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'readonly',
		'required', 'reversed', 'selected', 'typemustmatch'],
	selfClosingStyle: 'html',
	inlineElements: ['a', 'abbr', 'acronym', 'applet', 'b', 'basefont', 'bdo',
		'big', 'br', 'button', 'cite', 'code', 'del', 'dfn', 'em', 'font', 'i',
		'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'map', 'object', 'q',
		's', 'samp', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup',
		'textarea', 'tt', 'u', 'var']
};

/**
 * Creates output profile for given options
 */
class Profile {
	/**
	 * @param {EmmetOutputProfile} options 
	 */
    constructor(options) {
		/** @type {EmmetOutputProfile} */
		this.options = Object.assign({}, defaultOptions, options);
		this.quoteChar = this.options.attributeQuotes === 'single' ? '\'' : '"';
    }

	/**
	 * Returns value of given option name
	 * @param {String} name
	 * @return {*}
	 */
	get(name) {
		return this.options[name];
	}

    /**
     * Quote given string according to profile
     * @param {String} str String to quote
     * @return {String}
     */
    quote(str) {
        return `${this.quoteChar}${str != null ? str : ''}${this.quoteChar}`;
    }

    /**
     * Output given tag name according to options
     * @param {String} name
     * @return {String}
     */
    name(name) {
        return strcase(name, this.options.tagCase);
    }

	/**
	 * Outputs attribute name according to current settings
	 * @param {String} attr Attribute name
	 * @return {String}
	 */
    attribute(attr) {
        return strcase(attr, this.options.attributeCase);
    }

    /**
     * Check if given attribute is boolean
     * @param {Object} attr
     * @return {Boolean}
     */
    isBooleanAttribute(attr) {
        return attr.options.boolean
			|| this.get('booleanAttributes').indexOf((attr.name || '').toLowerCase()) !== -1;
    }

	/**
	 * Returns a token for self-closing tag, depending on current options
	 * @return {String}
	 */
	selfClose() {
		switch (this.options.selfClosingStyle) {
			case 'xhtml': return ' /';
			case 'xml':   return '/';
			default:      return '';
		}
	}

	/**
	 * Returns indent for given level
	 * @param {Number} level Indentation level
	 * @return {String}
	 */
	indent(level) {
		level = level || 0;
		let output = '';
		while (level--) {
			output += this.options.indent;
		}

		return output;
	}

	/**
	 * Check if given tag name belongs to inline-level element
	 * @param {Object|String} node Parsed node or tag name
	 * @return {Boolean}
	 */
	isInline(node) {
        if (typeof node === 'string') {
            return this.get('inlineElements').indexOf(node.toLowerCase()) !== -1;
        }

        // inline node is a node either with inline-level name or text-only node
        return node.name != null ? this.isInline(node.name) : node.isTextOnly;
	}

	/**
	 * Outputs formatted field for given params
	 * @param {Number} index Field index
	 * @param {String} [placeholder] Field placeholder, can be empty
	 * @return {String}
	 */
	field(index, placeholder) {
		return this.options.field(index, placeholder);
	}
}
function strcase(string, type) {
    if (type) {
        return type === 'upper' ? string.toUpperCase() : string.toLowerCase();
	}
	
    return string;
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);


/***/ }),

/***/ "./node_modules/@emmetio/output-renderer/dist/output-renderer.es.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emmetio/output-renderer/dist/output-renderer.es.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emmetio_field_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/field-parser */ "./node_modules/@emmetio/field-parser/dist/field-parser.es.js");


const defaultFieldsRenderer = text => text;

/**
 * Output node is an object containing generated output for given Emmet
 * abbreviation node. Output node can be passed to various processors that
 * may shape-up final node output. The final output is simply a concatenation
 * of `.open`, `.text` and `.close` properties and its `.before*` and `.after*`
 * satellites
 * @param {Node}     node           Parsed Emmet abbreviation node
 * @param {Function} fieldsRenderer A function for rendering fielded text (text with
 * tabstops) for current node. @see ./render.js for details
 */
class OutputNode {
	constructor(node, fieldsRenderer, options) {
		if (typeof fieldsRenderer === 'object') {
			options = fieldsRenderer;
			fieldsRenderer = null;
		}

		this.node = node;
		this._fieldsRenderer = fieldsRenderer || defaultFieldsRenderer;

		this.open = null;
		this.beforeOpen = '';
		this.afterOpen = '';

		this.close = null;
		this.beforeClose = '';
		this.afterClose = '';

		this.text = null;
		this.beforeText = '';
		this.afterText = '';

		this.indent = '';
		this.newline = '';

		if (options) {
            Object.assign(this, options);
        }
	}

	clone() {
		return new this.constructor(this.node, this);
	}

	/**
	 * Properly indents given multiline text
	 * @param {String} text
	 */
	indentText(text) {
		const lines = splitByLines(text);
        if (lines.length === 1) {
            // no newlines, nothing to indent
            return text;
        }

        // No newline and no indent means no formatting at all:
        // in this case we should replace newlines with spaces
        const nl = (!this.newline && !this.indent) ? ' ' : this.newline;
        return lines.map((line, i) => i ? this.indent + line : line).join(nl);
	}

	/**
	 * Renders given text with fields
	 * @param {String} text
	 * @return {String}
	 */
	renderFields(text) {
		return this._fieldsRenderer(text);
	}

	toString(children) {
		const open = this._wrap(this.open, this.beforeOpen, this.afterOpen);
		const close = this._wrap(this.close, this.beforeClose, this.afterClose);
		const text = this._wrap(this.text, this.beforeText, this.afterText);

		return open + text + (children != null ? children : '') + close;
	}

	_wrap(str, before, after) {
		before = before != null ? before : '';
		after = after != null ? after : '';

        // automatically trim whitespace for non-empty wraps
        if (str != null) {
            str = before ? str.replace(/^\s+/, '') : str;
            str = after ? str.replace(/\s+$/, '') : str;
            return before + this.indentText(str) + after;
        }

        return '';
	}
}

/**
 * Splits given text by lines
 * @param  {String} text
 * @return {String[]}
 */
function splitByLines(text) {
	return (text || '').split(/\r\n|\r|\n/g);
}

/**
 * Default output of field (tabstop)
 * @param  {Number} index       Field index
 * @param  {String} placeholder Field placeholder, can be null
 * @return {String}
 */
const defaultField = (index, placeholder) => (placeholder || '');

/**
 * Renders given parsed abbreviation `tree` via `formatter` function.

 * @param {Node}     tree      Parsed Emmet abbreviation
 * @param {Function} [field]   Optional function to format field/tabstop (@see `defaultField`)
 * @param {Function} formatter Output formatter function. It takes an output node—
 * a special wrapper for parsed node that holds formatting and output properties—
 * and updates its output properties to shape-up node’s output.
 * Function arguments:
 * 	– `outNode`: OutputNode
 * 	– `renderFields`: a helper function that parses fields/tabstops from given
 * 	   text and replaces them with `field` function output.
 * 	   It also takes care about field indicies and ensures that the same indicies
 * 	   from different nodes won’t collide
 */
function render(tree, field, formatter) {
    if (typeof formatter === 'undefined') {
        formatter = field;
        field = null;
    }

    field = field || defaultField;

    // Each node may contain fields like `${1:placeholder}`.
	// Since most modern editors will link all fields with the same
	// index, we have to ensure that different nodes has their own indicies.
	// We’ll use this `fieldState` object to globally increment field indices
	// during output
	const fieldState = { index: 1 };

    const fieldsRenderer = text => text == null
        ? field(fieldState.index++)
        : getFieldsModel(text, fieldState).mark(field);

	return run(tree.children, formatter, fieldsRenderer);
}

function run(nodes, formatter, fieldsRenderer) {
	return nodes.map(node => {
		const outNode = formatter(new OutputNode(node, fieldsRenderer));
		return outNode ? outNode.toString(run(node.children, formatter, fieldsRenderer)) : '';
	}).join('');
}

/**
 * Returns fields (tab-stops) model with properly updated indices that won’t
 * collide with fields in other nodes of foprmatted tree
 * @param  {String|Object} text Text to get fields model from or model itself
 * @param  {Object} fieldState Abbreviation tree-wide field state reference
 * @return {Object} Field model
 */
function getFieldsModel(text, fieldState) {
	const model = typeof text === 'object' ? text : Object(_emmetio_field_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(text);
    let largestIndex = -1;

    model.fields.forEach(field => {
		field.index += fieldState.index;
		if (field.index > largestIndex) {
			largestIndex = field.index;
		}
	});

	if (largestIndex !== -1) {
		fieldState.index = largestIndex + 1;
	}

    return model;
}

/* harmony default export */ __webpack_exports__["default"] = (render);


/***/ }),

/***/ "./node_modules/@emmetio/snippets-registry/dist/snippets-registry.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@emmetio/snippets-registry/dist/snippets-registry.es.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Snippet {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class SnippetsStorage {
    constructor(data) {
        this._string = new Map();
        this._regexp = new Map();
        this._disabled = false;

        this.load(data);
    }

    get disabled() {
        return this._disabled;
    }

    /**
     * Disables current store. A disabled store always returns `undefined`
     * on `get()` method
     */
    disable() {
        this._disabled = true;
    }

    /**
     * Enables current store.
     */
    enable() {
        this._disabled = false;
    }

    /**
     * Registers a new snippet item
     * @param {String|Regexp} key
     * @param {String|Function} value
     */
    set(key, value) {
        if (typeof key === 'string') {
            key.split('|').forEach(k => this._string.set(k, new Snippet(k, value)));
        } else if (key instanceof RegExp) {
            this._regexp.set(key, new Snippet(key, value));
        } else {
            throw new Error('Unknow snippet key: ' + key);
        }

        return this;
    }

    /**
     * Returns a snippet matching given key. It first tries to find snippet
     * exact match in a string key map, then tries to match one with regexp key
     * @param {String} key
     * @return {Snippet}
     */
    get(key) {
        if (this.disabled) {
            return undefined;
        }

        if (this._string.has(key)) {
            return this._string.get(key);
        }

        const keys = Array.from(this._regexp.keys());
        for (let i = 0, il = keys.length; i < il; i++) {
            if (keys[i].test(key)) {
                return this._regexp.get(keys[i]);
            }
        }
    }

    /**
     * Batch load of snippets data
     * @param {Object|Map} data
     */
    load(data) {
        this.reset();
        if (data instanceof Map) {
            data.forEach((value, key) => this.set(key, value));
        } else if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => this.set(key, data[key]));
        }
    }

    /**
     * Clears all stored snippets
     */
    reset() {
        this._string.clear();
        this._regexp.clear();
    }

    /**
     * Returns all available snippets from given store
     */
    values() {
        if (this.disabled) {
            return [];
        }
        
        const string = Array.from(this._string.values());
        const regexp = Array.from(this._regexp.values());
        return string.concat(regexp);
    }
}

/**
 * A snippets registry. Contains snippets, separated by store and sorted by
 * priority: a store with higher priority takes precedence when resolving snippet
 * for given key
 */
class SnippetsRegistry {
    /**
     * Creates snippets registry, filled with given `data`
     * @param {Object|Array} data Registry snippets. If array is given, adds items
     * from array in order of precedence, registers global snippets otherwise
     */
    constructor(data) {
        this._registry = [];

        if (Array.isArray(data)) {
            data.forEach((snippets, level) => this.add(level, snippets));
        } else if (typeof data === 'object') {
            this.add(data);
        }
    }

    /**
     * Return store for given level
     * @param {Number} level
     * @return {SnippetsStorage}
     */
    get(level) {
        for (let i = 0; i < this._registry.length; i++) {
            const item = this._registry[i];
            if (item.level === level) {
                return item.store;
            }
        }
    }

    /**
     * Adds new store for given level
     * @param {Number} [level] Store level (priority). Store with higher level
     * takes precedence when resolving snippets
     * @param {Object} [snippets] A snippets data for new store
     * @return {SnipetsStorage}
     */
    add(level, snippets) {
        if (level != null && typeof level === 'object') {
            snippets = level;
            level = 0;
        }

        const store = new SnippetsStorage(snippets);

        // remove previous store from same level
        this.remove(level);

        this._registry.push({level, store});
        this._registry.sort((a, b) => b.level - a.level);

        return store;
    }

    /**
     * Remove registry with given level or store
     * @param {Number|SnippetsStorage} data Either level or snippets store
     */
    remove(data) {
        this._registry = this._registry
        .filter(item => item.level !== data && item.store !== data);
    }

    /**
     * Returns snippet from registry that matches given name
     * @param {String} name
     * @return {Snippet}
     */
    resolve(name) {
        for (let i = 0; i < this._registry.length; i++) {
            const snippet = this._registry[i].store.get(name);
            if (snippet) {
                return snippet;
            }
        }
    }

    /**
     * Returns all available snippets from current registry. Snippets with the
     * same key are resolved by their storage priority.
     * @param {Object} options
     * @param {Object} options.type Return snippets only of given type: 'string'
     * or 'regexp'. Returns all snippets if not defined
     * @return {Array}
     */
    all(options) {
        options = options || {};
        const result = new Map();

        const fillResult = snippet => {
            const type = snippet.key instanceof RegExp ? 'regexp' : 'string';
            if ((!options.type || options.type === type) && !result.has(snippet.key)) {
                result.set(snippet.key, snippet);
            }
        };

        this._registry.forEach(item => {
            item.store.values().forEach(fillResult);
        });

        return Array.from(result.values());
    }

    /**
     * Removes all stores from registry
     */
    clear() {
        this._registry.length = 0;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SnippetsRegistry);


/***/ }),

/***/ "./node_modules/@emmetio/snippets/dist/snippets.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@emmetio/snippets/dist/snippets.es.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = {
	"a": "a[href]",
	"a:link": "a[href='http://${0}']",
	"a:mail": "a[href='mailto:${0}']",
	"a:tel": "a[href='tel:+${0}']",
	"abbr": "abbr[title]",
	"acr|acronym": "acronym[title]",
	"base": "base[href]/",
	"basefont": "basefont/",
	"br": "br/",
	"frame": "frame/",
	"hr": "hr/",
	"bdo": "bdo[dir]",
	"bdo:r": "bdo[dir=rtl]",
	"bdo:l": "bdo[dir=ltr]",
	"col": "col/",
	"link": "link[rel=stylesheet href]/",
	"link:css": "link[href='${1:style}.css']",
	"link:print": "link[href='${1:print}.css' media=print]",
	"link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
	"link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
	"link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
	"link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
	"link:im|link:import": "link[rel=import href='${1:component}.html']",
	"meta": "meta/",
	"meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
	"meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
	"meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
	"meta:edge": "meta:compat[content='${1:ie=edge}']",
	"meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
	"style": "style",
	"script": "script[!src]",
	"script:src": "script[src]",
	"img": "img[src alt]/",
	"img:s|img:srcset": "img[srcset src alt]",
	"img:z|img:sizes": "img[sizes srcset src alt]",
	"picture": "picture",
	"src|source": "source/",
	"src:sc|source:src": "source[src type]",
	"src:s|source:srcset": "source[srcset]",
	"src:t|source:type": "source[srcset type='${1:image/}']",
	"src:z|source:sizes": "source[sizes srcset]",
	"src:m|source:media": "source[media='(${1:min-width: })' srcset]",
	"src:mt|source:media:type": "source:media[type='${2:image/}']",
	"src:mz|source:media:sizes": "source:media[sizes srcset]",
	"src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
	"iframe": "iframe[src frameborder=0]",
	"embed": "embed[src type]/",
	"object": "object[data type]",
	"param": "param[name value]/",
	"map": "map[name]",
	"area": "area[shape coords href alt]/",
	"area:d": "area[shape=default]",
	"area:c": "area[shape=circle]",
	"area:r": "area[shape=rect]",
	"area:p": "area[shape=poly]",
	"form": "form[action]",
	"form:get": "form[method=get]",
	"form:post": "form[method=post]",
	"label": "label[for]",
	"input": "input[type=${1:text}]/",
	"inp": "input[name=${1} id=${1}]",
	"input:h|input:hidden": "input[type=hidden name]",
	"input:t|input:text": "inp[type=text]",
	"input:search": "inp[type=search]",
	"input:email": "inp[type=email]",
	"input:url": "inp[type=url]",
	"input:p|input:password": "inp[type=password]",
	"input:datetime": "inp[type=datetime]",
	"input:date": "inp[type=date]",
	"input:datetime-local": "inp[type=datetime-local]",
	"input:month": "inp[type=month]",
	"input:week": "inp[type=week]",
	"input:time": "inp[type=time]",
	"input:tel": "inp[type=tel]",
	"input:number": "inp[type=number]",
	"input:color": "inp[type=color]",
	"input:c|input:checkbox": "inp[type=checkbox]",
	"input:r|input:radio": "inp[type=radio]",
	"input:range": "inp[type=range]",
	"input:f|input:file": "inp[type=file]",
	"input:s|input:submit": "input[type=submit value]",
	"input:i|input:image": "input[type=image src alt]",
	"input:b|input:button": "input[type=button value]",
    "input:reset": "input:button[type=reset]",
	"isindex": "isindex/",
	"select": "select[name=${1} id=${1}]",
	"select:d|select:disabled": "select[disabled.]",
	"opt|option": "option[value]",
	"textarea": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
	"marquee": "marquee[behavior direction]",
	"menu:c|menu:context": "menu[type=context]",
	"menu:t|menu:toolbar": "menu[type=toolbar]",
	"video": "video[src]",
	"audio": "audio[src]",
	"html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
	"keygen": "keygen/",
	"command": "command/",
	"btn:s|button:s|button:submit" : "button[type=submit]",
	"btn:r|button:r|button:reset" : "button[type=reset]",
	"btn:d|button:d|button:disabled" : "button[disabled.]",
	"fst:d|fset:d|fieldset:d|fieldset:disabled" : "fieldset[disabled.]",

	"bq": "blockquote",
	"fig": "figure",
	"figc": "figcaption",
	"pic": "picture",
	"ifr": "iframe",
	"emb": "embed",
	"obj": "object",
	"cap": "caption",
	"colg": "colgroup",
	"fst": "fieldset",
	"btn": "button",
	"optg": "optgroup",
	"tarea": "textarea",
	"leg": "legend",
	"sect": "section",
	"art": "article",
	"hdr": "header",
	"ftr": "footer",
	"adr": "address",
	"dlg": "dialog",
	"str": "strong",
	"prog": "progress",
	"mn": "main",
	"tem": "template",
	"fset": "fieldset",
	"datag": "datagrid",
	"datal": "datalist",
	"kg": "keygen",
	"out": "output",
	"det": "details",
	"cmd": "command",

	"ri:d|ri:dpr": "img:s",
	"ri:v|ri:viewport": "img:z",
	"ri:a|ri:art": "pic>src:m+img",
	"ri:t|ri:type": "pic>src:t+img",

	"!!!": "{<!DOCTYPE html>}",
	"doc": "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+meta:edge+title{${1:Document}})+body",
	"!|html:5": "!!!+doc",

	"c": "{<!-- ${0} -->}",
	"cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
	"cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}"
};

var css = {
	"@f": "@font-face {\n\tfont-family: ${1};\n\tsrc: url(${1});\n}",
	"@ff": "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}",
	"@i|@import": "@import url(${0});",
	"@kf": "@keyframes ${1:identifier} {\n\t${2}\n}",
	"@m|@media": "@media ${1:screen} {\n\t${0}\n}",
	"ac": "align-content:flex-start|flex-end|center|space-between|space-around|stretch",
	"ai": "align-items:flex-start|flex-end|center|baseline|stretch",
	"anim": "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
	"animdel": "animation-delay:${1:time}",
	"animdir": "animation-direction:normal|reverse|alternate|alternate-reverse",
	"animdur": "animation-duration:${1:0}s",
	"animfm": "animation-fill-mode:both|forwards|backwards",
	"animic": "animation-iteration-count:1|infinite",
	"animn": "animation-name",
	"animps": "animation-play-state:running|paused",
	"animtf": "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
	"ap": "appearance:none",
	"as": "align-self:auto|flex-start|flex-end|center|baseline|stretch",
	"b": "bottom",
	"bd": "border:${1:1px} ${2:solid} ${3:#000}",
	"bdb": "border-bottom:${1:1px} ${2:solid} ${3:#000}",
	"bdbc": "border-bottom-color:#${1:000}",
	"bdbi": "border-bottom-image:url(${0})",
	"bdbk": "border-break:close",
	"bdbli": "border-bottom-left-image:url(${0})|continue",
	"bdblrs": "border-bottom-left-radius",
	"bdbri": "border-bottom-right-image:url(${0})|continue",
	"bdbrrs": "border-bottom-right-radius",
	"bdbs": "border-bottom-style",
	"bdbw": "border-bottom-width",
	"bdc": "border-color:#${1:000}",
	"bdci": "border-corner-image:url(${0})|continue",
	"bdcl": "border-collapse:collapse|separate",
	"bdf": "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
	"bdi": "border-image:url(${0})",
	"bdl": "border-left:${1:1px} ${2:solid} ${3:#000}",
	"bdlc": "border-left-color:#${1:000}",
	"bdlen": "border-length",
	"bdli": "border-left-image:url(${0})",
	"bdls": "border-left-style",
	"bdlw": "border-left-width",
	"bdr": "border-right:${1:1px} ${2:solid} ${3:#000}",
	"bdrc": "border-right-color:#${1:000}",
	"bdri": "border-right-image:url(${0})",
	"bdrs": "border-radius",
	"bdrst": "border-right-style",
	"bdrw": "border-right-width",
	"bds": "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
	"bdsp": "border-spacing",
	"bdt": "border-top:${1:1px} ${2:solid} ${3:#000}",
	"bdtc": "border-top-color:#${1:000}",
	"bdti": "border-top-image:url(${0})",
	"bdtli": "border-top-left-image:url(${0})|continue",
	"bdtlrs": "border-top-left-radius",
	"bdtri": "border-top-right-image:url(${0})|continue",
	"bdtrrs": "border-top-right-radius",
	"bdts": "border-top-style",
	"bdtw": "border-top-width",
	"bdw": "border-width",
	"bfv": "backface-visibility:hidden|visible",
	"bg": "background:#${1:000}",
	"bga": "background-attachment:fixed|scroll",
	"bgbk": "background-break:bounding-box|each-box|continuous",
	"bgc": "background-color:#${1:fff}",
	"bgcp": "background-clip:padding-box|border-box|content-box|no-clip",
	"bgi": "background-image:url(${0})",
	"bgo": "background-origin:padding-box|border-box|content-box",
	"bgp": "background-position:${1:0} ${2:0}",
	"bgpx": "background-position-x",
	"bgpy": "background-position-y",
	"bgr": "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
	"bgsz": "background-size:contain|cover",
	"bxsh": "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} #${5:000}|none",
	"bxsz": "box-sizing:border-box|content-box|border-box",
	"c": "color:#${1:000}",
	"cl": "clear:both|left|right|none",
	"cm": "/* ${0} */",
	"cnt": "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters({$0})",
	"coi": "counter-increment",
	"colm": "columns",
	"colmc": "column-count",
	"colmf": "column-fill",
	"colmg": "column-gap",
	"colmr": "column-rule",
	"colmrc": "column-rule-color",
	"colmrs": "column-rule-style",
	"colmrw": "column-rule-width",
	"colms": "column-span",
	"colmw": "column-width",
	"cor": "counter-reset",
	"cp": "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
	"cps": "caption-side:top|bottom",
	"cur": "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
	"d": "display:block|none|flex|inline-flex|inline|inline-block|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
	"ec": "empty-cells:show|hide",
	"f": "font:${1:1em} ${2:sans-serif}",
	"fef": "font-effect:none|engrave|emboss|outline",
	"fem": "font-emphasize",
	"femp": "font-emphasize-position:before|after",
	"fems": "font-emphasize-style:none|accent|dot|circle|disc",
	"ff": "font-family:serif|sans-serif|cursive|fantasy|monospace",
	"fl": "float:left|right|none",
	"fs": "font-style:italic|normal|oblique",
	"fsm": "font-smoothing:antialiased|subpixel-antialiased|none",
	"fst": "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
	"fv": "font-variant:normal|small-caps",
	"fw": "font-weight:normal|bold|bolder|lighter",
	"fx": "flex",
	"fxb": "flex-basis:fill|max-content|min-content|fit-content|content",
	"fxd": "flex-direction:row|row-reverse|column|column-reverse",
	"fxf": "flex-flow",
	"fxg": "flex-grow",
	"fxsh": "flex-shrink",
	"fxw": "flex-wrap:nowrap|wrap|wrap-reverse",
	"fz": "font-size",
	"fza": "font-size-adjust",
	"h": "height",
	"jc": "justify-content:flex-start|flex-end|center|space-between|space-around",
	"l": "left",
	"lg": "background-image:linear-gradient(${1})",
	"lh": "line-height",
	"lis": "list-style",
	"lisi": "list-style-image",
	"lisp": "list-style-position:inside|outside",
	"list": "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
	"lts": "letter-spacing:normal",
	"m": "margin",
	"mah": "max-height",
	"mar": "max-resolution",
	"maw": "max-width",
	"mb": "margin-bottom",
	"mih": "min-height",
	"mir": "min-resolution",
	"miw": "min-width",
	"ml": "margin-left",
	"mr": "margin-right",
	"mt": "margin-top",
	"ol": "outline",
	"olc": "outline-color:#${1:000}|invert",
	"olo": "outline-offset",
	"ols": "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
	"olw": "outline-width|thin|medium|thick",
	"op": "opacity",
	"ord": "order",
	"ori": "orientation:landscape|portrait",
	"orp": "orphans",
	"ov": "overflow:hidden|visible|hidden|scroll|auto",
	"ovs": "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
	"ovx": "overflow-x:hidden|visible|hidden|scroll|auto",
	"ovy": "overflow-y:hidden|visible|hidden|scroll|auto",
	"p": "padding",
	"pb": "padding-bottom",
	"pgba": "page-break-after:auto|always|left|right",
	"pgbb": "page-break-before:auto|always|left|right",
	"pgbi": "page-break-inside:auto|avoid",
	"pl": "padding-left",
	"pos": "position:relative|absolute|relative|fixed|static",
	"pr": "padding-right",
	"pt": "padding-top",
	"q": "quotes",
	"qen": "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
	"qru": "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
	"r": "right",
	"rsz": "resize:none|both|horizontal|vertical",
	"t": "top",
	"ta": "text-align:left|center|right|justify",
	"tal": "text-align-last:left|center|right",
	"tbl": "table-layout:fixed",
	"td": "text-decoration:none|underline|overline|line-through",
	"te": "text-emphasis:none|accent|dot|circle|disc|before|after",
	"th": "text-height:auto|font-size|text-size|max-size",
	"ti": "text-indent",
	"tj": "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
	"to": "text-outline:${1:0} ${2:0} ${3:#000}",
	"tov": "text-overflow:ellipsis|clip",
	"tr": "text-replace",
	"trf": "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
	"trfo": "transform-origin",
	"trfs": "transform-style:preserve-3d",
	"trs": "transition:${1:prop} ${2:time}",
	"trsde": "transition-delay:${1:time}",
	"trsdu": "transition-duration:${1:time}",
	"trsp": "transition-property:${1:prop}",
	"trstf": "transition-timing-function:${1:fn}",
	"tsh": "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
	"tt": "text-transform:uppercase|lowercase|capitalize|none",
	"tw": "text-wrap:none|normal|unrestricted|suppress",
	"us": "user-select:none",
	"v": "visibility:hidden|visible|collapse",
	"va": "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
	"w": "width",
	"whs": "white-space:nowrap|pre|pre-wrap|pre-line|normal",
	"whsc": "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
	"wid": "widows",
	"wm": "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
	"wob": "word-break:normal|keep-all|break-all",
	"wos": "word-spacing",
	"wow": "word-wrap:none|unrestricted|suppress|break-word|normal",
	"z": "z-index",
	"zom": "zoom:1"
};

var xsl = {
    "tm|tmatch": "xsl:template[match mode]",
    "tn|tname": "xsl:template[name]",
    "call": "xsl:call-template[name]",
    "ap": "xsl:apply-templates[select mode]",
    "api": "xsl:apply-imports",
    "imp": "xsl:import[href]",
    "inc": "xsl:include[href]",
    "ch": "xsl:choose",
    "wh|xsl:when": "xsl:when[test]",
    "ot": "xsl:otherwise",
    "if": "xsl:if[test]",
    "par": "xsl:param[name]",
    "pare": "xsl:param[name select]",
    "var": "xsl:variable[name]",
    "vare": "xsl:variable[name select]",
    "wp": "xsl:with-param[name select]",
    "key": "xsl:key[name match use]",
    "elem": "xsl:element[name]",
    "attr": "xsl:attribute[name]",
    "attrs": "xsl:attribute-set[name]",
    "cp": "xsl:copy[select]",
    "co": "xsl:copy-of[select]",
    "val": "xsl:value-of[select]",
    "for|each": "xsl:for-each[select]",
    "tex": "xsl:text",
    "com": "xsl:comment",
    "msg": "xsl:message[terminate=no]",
    "fall": "xsl:fallback",
    "num": "xsl:number[value]",
    "nam": "namespace-alias[stylesheet-prefix result-prefix]",
    "pres": "xsl:preserve-space[elements]",
    "strip": "xsl:strip-space[elements]",
    "proc": "xsl:processing-instruction[name]",
    "sort": "xsl:sort[select order]",
    "choose": "xsl:choose>xsl:when+xsl:otherwise",
    "xsl": "!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{\n|}",
    "!!!": "{<?xml version=\"1.0\" encoding=\"UTF-8\"?>}"
};

var index = { html, css, xsl };

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emmetio/stream-reader-utils/dist/stream-reader-utils.es.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emmetio/stream-reader-utils/dist/stream-reader-utils.es.js ***!
  \**********************************************************************************/
/*! exports provided: eatQuoted, isQuote, isAlpha, isNumber, isAlphaNumeric, isSpace, isWhiteSpace, eatPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eatQuoted", function() { return eatQuoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuote", function() { return isQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlpha", function() { return isAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumeric", function() { return isAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpace", function() { return isSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function() { return isWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eatPair", function() { return eatPair; });
/**
 * Methods for consuming quoted values
 */

const SINGLE_QUOTE = 39; // '
const DOUBLE_QUOTE = 34; // "

const defaultOptions = {
	escape: 92,   // \ character
	throws: false
};

/**
 * Consumes 'single' or "double"-quoted string from given string, if possible
 * @param  {StreamReader} stream
 * @param  {Number}  options.escape A character code of quote-escape symbol
 * @param  {Boolean} options.throws Throw error if quotes string can’t be properly consumed
 * @return {Boolean} `true` if quoted string was consumed. The contents
 *                   of quoted string will be availabe as `stream.current()`
 */
var eatQuoted = function(stream, options) {
	options = options ? Object.assign({}, defaultOptions, options) : defaultOptions;
	const start = stream.pos;
	const quote = stream.peek();

	if (stream.eat(isQuote)) {
		while (!stream.eof()) {
			switch (stream.next()) {
				case quote:
					stream.start = start;
					return true;

				case options.escape:
					stream.next();
					break;
			}
		}

		// If we’re here then stream wasn’t properly consumed.
		// Revert stream and decide what to do
		stream.pos = start;

		if (options.throws) {
			throw stream.error('Unable to consume quoted string');
		}
	}

	return false;
};

function isQuote(code) {
	return code === SINGLE_QUOTE || code === DOUBLE_QUOTE;
}

/**
 * Check if given code is a number
 * @param  {Number}  code
 * @return {Boolean}
 */
function isNumber(code) {
	return code > 47 && code < 58;
}

/**
 * Check if given character code is alpha code (letter through A to Z)
 * @param  {Number}  code
 * @param  {Number}  [from]
 * @param  {Number}  [to]
 * @return {Boolean}
 */
function isAlpha(code, from, to) {
	from = from || 65; // A
	to   = to   || 90; // Z
	code &= ~32; // quick hack to convert any char code to uppercase char code

	return code >= from && code <= to;
}

/**
 * Check if given character code is alpha-numeric (letter through A to Z or number)
 * @param  {Number}  code
 * @return {Boolean}
 */
function isAlphaNumeric(code) {
	return isNumber(code) || isAlpha(code);
}

function isWhiteSpace(code) {
	return code === 32   /* space */
		|| code === 9    /* tab */
		|| code === 160; /* non-breaking space */
}

/**
 * Check if given character code is a space
 * @param  {Number}  code
 * @return {Boolean}
 */
function isSpace(code) {
	return isWhiteSpace(code)
		|| code === 10  /* LF */
		|| code === 13; /* CR */
}

const defaultOptions$1 = {
	escape: 92,   // \ character
	throws: false
};

/**
 * Eats paired characters substring, for example `(foo)` or `[bar]`
 * @param  {StreamReader} stream
 * @param  {Number} open      Character code of pair openinig
 * @param  {Number} close     Character code of pair closing
 * @param  {Object} [options]
 * @return {Boolean}       Returns `true` if chacarter pair was successfully
 *                         consumed, it’s content will be available as `stream.current()`
 */
function eatPair(stream, open, close, options) {
	options = options ? Object.assign({}, defaultOptions$1, options) : defaultOptions$1;
	const start = stream.pos;

	if (stream.eat(open)) {
		let stack = 1, ch;

		while (!stream.eof()) {
			if (eatQuoted(stream, options)) {
				continue;
			}

			ch = stream.next();
			if (ch === open) {
				stack++;
			} else if (ch === close) {
				stack--;
				if (!stack) {
					stream.start = start;
					return true;
				}
			} else if (ch === options.escape) {
				stream.next();
			}
		}

		// If we’re here then paired character can’t be consumed
		stream.pos = start;

		if (options.throws) {
			throw stream.error(`Unable to find matching pair for ${String.fromCharCode(open)}`);
		}
	}

	return false;
}




/***/ }),

/***/ "./node_modules/@emmetio/stream-reader/dist/stream-reader.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@emmetio/stream-reader/dist/stream-reader.es.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A streaming, character code-based string reader
 */
class StreamReader {
	constructor(string, start, end) {
		if (end == null && typeof string === 'string') {
			end = string.length;
		}

		this.string = string;
		this.pos = this.start = start || 0;
		this.end = end;
	}

	/**
	 * Returns true only if the stream is at the end of the file.
	 * @returns {Boolean}
	 */
	eof() {
		return this.pos >= this.end;
	}

	/**
	 * Creates a new stream instance which is limited to given `start` and `end`
	 * range. E.g. its `eof()` method will look at `end` property, not actual
	 * stream end
	 * @param  {Point} start
	 * @param  {Point} end
	 * @return {StreamReader}
	 */
	limit(start, end) {
		return new this.constructor(this.string, start, end);
	}

	/**
	 * Returns the next character code in the stream without advancing it.
	 * Will return NaN at the end of the file.
	 * @returns {Number}
	 */
	peek() {
		return this.string.charCodeAt(this.pos);
	}

	/**
	 * Returns the next character in the stream and advances it.
	 * Also returns <code>undefined</code> when no more characters are available.
	 * @returns {Number}
	 */
	next() {
		if (this.pos < this.string.length) {
			return this.string.charCodeAt(this.pos++);
		}
	}

	/**
	 * `match` can be a character code or a function that takes a character code
	 * and returns a boolean. If the next character in the stream 'matches'
	 * the given argument, it is consumed and returned.
	 * Otherwise, `false` is returned.
	 * @param {Number|Function} match
	 * @returns {Boolean}
	 */
	eat(match) {
		const ch = this.peek();
		const ok = typeof match === 'function' ? match(ch) : ch === match;

		if (ok) {
			this.next();
		}

		return ok;
	}

	/**
	 * Repeatedly calls <code>eat</code> with the given argument, until it
	 * fails. Returns <code>true</code> if any characters were eaten.
	 * @param {Object} match
	 * @returns {Boolean}
	 */
	eatWhile(match) {
		const start = this.pos;
		while (!this.eof() && this.eat(match)) {}
		return this.pos !== start;
	}

	/**
	 * Backs up the stream n characters. Backing it up further than the
	 * start of the current token will cause things to break, so be careful.
	 * @param {Number} n
	 */
	backUp(n) {
		this.pos -= (n || 1);
	}

	/**
	 * Get the string between the start of the current token and the
	 * current stream position.
	 * @returns {String}
	 */
	current() {
		return this.substring(this.start, this.pos);
	}

	/**
	 * Returns substring for given range
	 * @param  {Number} start
	 * @param  {Number} [end]
	 * @return {String}
	 */
	substring(start, end) {
		return this.string.slice(start, end);
	}

	/**
	 * Creates error object with current stream state
	 * @param {String} message
	 * @return {Error}
	 */
	error(message) {
		const err = new Error(`${message} at char ${this.pos + 1}`);
		err.originalMessage = message;
		err.pos = this.pos;
		err.string = this.string;
		return err;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (StreamReader);


/***/ }),

/***/ "./node_modules/@emmetio/stylesheet-formatters/dist/stylesheet-formatters.es.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@emmetio/stylesheet-formatters/dist/stylesheet-formatters.es.js ***!
  \**************************************************************************************/
/*! exports provided: default, supports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return supports; });
/* harmony import */ var _emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emmetio/output-renderer */ "./node_modules/@emmetio/output-renderer/dist/output-renderer.es.js");
/* harmony import */ var _emmetio_field_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emmetio/field-parser */ "./node_modules/@emmetio/field-parser/dist/field-parser.es.js");



const defaultFormatOptions = {
	shortHex: true,
	between: ': ',
	after: ';'
};

/**
 * Renders given parsed Emmet CSS abbreviation as CSS-like
 * stylesheet, formatted according to `profile` options
 * @param  {Node}     tree    Parsed Emmet abbreviation
 * @param  {Profile}  profile Output profile
 * @param  {Object}  [options] Additional formatter options
 * @return {String}
 */
function css(tree, profile, options) {
	options = options || {};
	const formatOpt = Object.assign({}, defaultFormatOptions, options && options.format);

	return Object(_emmetio_output_renderer__WEBPACK_IMPORTED_MODULE_0__["default"])(tree, options.field, outNode => {
		const node = outNode.node;
		let value = stringifyValue(node, formatOpt);

		if (node.attributes.length) {
			const fieldValues = node.attributes.map(attr => stringifyValue(attr, formatOpt));
			value = injectFields(value, fieldValues);
		}

		outNode.open = node.name && profile.name(node.name);
		outNode.afterOpen = formatOpt.between;
		outNode.text = outNode.renderFields(value || null);

		if (outNode.open && (!outNode.text || !outNode.text.endsWith(';'))) {
			outNode.afterText = formatOpt.after;
		}

		if (profile.get('format')) {
			outNode.newline = '\n';
			if (tree.lastChild !== node) {
				outNode.afterText += outNode.newline;
			}
		}

		return outNode;
	});
}

/**
 * Injects given field values at each field of given string
 * @param  {String}   string
 * @param  {String[]} attributes
 * @return {FieldString}
 */
function injectFields(string, values) {
	const fieldsModel = Object(_emmetio_field_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
	const fieldsAmount = fieldsModel.fields.length;

	if (fieldsAmount) {
		values = values.slice();
		if (values.length > fieldsAmount) {
			// More values that output fields: collapse rest values into
			// a single token
			values = values.slice(0, fieldsAmount - 1)
				.concat(values.slice(fieldsAmount - 1).join(', '));
		}

		while (values.length) {
			const value = values.shift();
			const field = fieldsModel.fields.shift();
			const delta = value.length - field.length;

			fieldsModel.string = fieldsModel.string.slice(0, field.location)
				+ value
				+ fieldsModel.string.slice(field.location + field.length);

			// Update location of the rest fields in string
			for (let i = 0, il = fieldsModel.fields.length; i < il; i++) {
				fieldsModel.fields[i].location += delta;
			}
		}
	}

	return fieldsModel;
}

function stringifyValue(node, options) {
	if (node.value && typeof node.value === 'object' && node.value.type === 'css-value') {
		return node.value.value
		.map(token => {
			if (token && typeof token === 'object') {
				return token.type === 'color'
					? token.toString(options.shortHex)
					: token.toString();
			}

			return String(token);
		})
		.join(' ');
	}

	return node.value != null ? String(node.value) : '';
}

const syntaxFormat = {
	css: {
		between: ': ',
		after: ';'
	},
	scss: 'css',
	less: 'css',
	sass: {
		between: ': ',
		after: ''
	},
	stylus: {
		between: ' ',
		after: ''
	}
};

/**
 * Outputs given parsed abbreviation in specified stylesheet syntax
 * @param {Node}     tree     Parsed abbreviation tree
 * @param {Profile}  profile  Output profile
 * @param {String}   [syntax] Output syntax. If not given, `css` syntax is used
 * @param {Function} options.field A function to output field/tabstop for
 * host editor. This function takes two arguments: `index` and `placeholder` and
 * should return a string that represents tabstop in host editor. By default
 * only a placeholder is returned
 * @example
 * {
 * 	field(index, placeholder) {
 * 		// return field in TextMate-style, e.g. ${1} or ${2:foo}
 * 		return `\${${index}${placeholder ? ':' + placeholder : ''}}`;
 *  }
 * }
 * @return {String}
 */
function index(tree, profile, syntax, options) {
	if (typeof syntax === 'object') {
		options = syntax;
		syntax = null;
	}

	if (!supports(syntax)) {
		// fallback to CSS if given syntax is not supported
		syntax = 'css';
	}

	options = Object.assign({}, options, {
		format: getFormat(syntax, options)
	});

	// CSS abbreviations doesn’t support nesting so simply
	// output root node children
	return css(tree, profile, options);
}

/**
 * Check if given syntax is supported
 * @param {String} syntax
 * @return {Boolean}
 */
function supports(syntax) {
	return !!syntax && syntax in syntaxFormat;
}

/**
 * Returns formatter object for given syntax
 * @param  {String} syntax
 * @param  {Object} [options]
 * @return {Object} Formatter object as defined in `syntaxFormat`
 */
function getFormat(syntax, options) {
	let format = syntaxFormat[syntax];
	if (typeof format === 'string') {
		format = syntaxFormat[format];
	}

	return Object.assign({}, format, options && options.format);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=stylesheet-formatters.es.js.map


/***/ }),

/***/ "./node_modules/@emmetio/variable-resolver/dist/variable-resolver.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@emmetio/variable-resolver/dist/variable-resolver.es.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Replaces all unescaped ${variable} occurances in given parsed abbreviation
 * `tree` with values provided in `variables` hash. Precede `$` with `\` to
 * escape it and skip replacement
 * @param {Node} tree Parsed abbreviation tree
 * @param {Object} variables Variables values
 * @return {Node}
 */
function replaceVariables(tree, variables) {
	variables = variables || {};
    tree.walk(node => replaceInNode(node, variables));
    return tree;
}

function replaceInNode(node, variables) {
    // Replace variables in attributes.
    const attrs = node.attributes;

    for (let i = 0, il = attrs.length; i < il; i++) {
        const attr = attrs[i];
        if (typeof attr.value === 'string') {
            node.setAttribute(attr.name, replaceInString(attr.value, variables));
        }
    }

    if (node.value != null) {
        node.value = replaceInString(node.value, variables);
    }

    return node;
}

/**
 * Replaces all unescaped `${variable}` occurances in given string with values
 * from `variables` object
 * @param  {String} string
 * @param  {Object} variables
 * @return {String}
 */
function replaceInString(string, variables) {
    const model = createModel(string);
    let offset = 0;
    let output = '';

    for (let i = 0, il = model.variables.length; i < il; i++) {
        const v = model.variables[i];
        let value = v.name in variables ? variables[v.name] : v.name;
        if (typeof value === 'function') {
            value = value(model.string, v, offset + v.location);
        }

        output += model.string.slice(offset, v.location) + value;
        offset = v.location + v.length;
    }

    return output + model.string.slice(offset);
}

/**
 * Creates variable model from given string. The model contains a `string` with
 * all escaped variable tokens written without escape symbol and `variables`
 * property with all unescaped variables and their ranges
 * @param  {String} string
 * @return {Object}
 */
function createModel(string) {
    const reVariable = /\$\{([a-z][\w\-]*)\}/ig;
    const escapeCharCode = 92; // `\` symbol
    const variables = [];

    // We have to replace unescaped (e.g. not preceded with `\`) tokens.
    // Instead of writing a stream parser, we’ll cut some edges here:
    // 1. Find all tokens
    // 2. Walk string char-by-char and resolve only tokens that are not escaped
    const tokens = new Map();
    let m;
    while (m = reVariable.exec(string)) {
        tokens.set(m.index, m);
    }

    if (tokens.size) {
        let start = 0, pos = 0, len = string.length;
        let output = '';
        while (pos < len) {
            if (string.charCodeAt(pos) === escapeCharCode && tokens.has(pos + 1)) {
                // Found escape symbol that escapes variable: we should
                // omit this symbol in output string and skip variable
                const token = tokens.get(pos + 1);
                output += string.slice(start, pos) + token[0];
                start = pos = token.index + token[0].length;
                tokens.delete(pos + 1);
                continue;
            }

            pos++;
        }

        string = output + string.slice(start);

        // Not using `.map()` here to reduce memory allocations
        const validMatches = Array.from(tokens.values());
        for (let i = 0, il = validMatches.length; i < il; i++) {
            const token = validMatches[i];
            variables.push({
                name: token[1],
                location: token.index,
                length: token[0].length
            });
        }
    }

    return {string, variables};
}

/* harmony default export */ __webpack_exports__["default"] = (replaceVariables);


/***/ }),

/***/ "./node_modules/array-flatten/array-flatten.js":
/*!*****************************************************!*\
  !*** ./node_modules/array-flatten/array-flatten.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `arrayFlatten`.
 */
module.exports = flatten
module.exports.from = flattenFrom
module.exports.depth = flattenDepth
module.exports.fromDepth = flattenFromDepth

/**
 * Flatten an array.
 *
 * @param  {Array} array
 * @return {Array}
 */
function flatten (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected value to be an array')
  }

  return flattenFrom(array)
}

/**
 * Flatten an array-like structure.
 *
 * @param  {Array} array
 * @return {Array}
 */
function flattenFrom (array) {
  return flattenDown(array, [])
}

/**
 * Flatten an array-like structure with depth.
 *
 * @param  {Array}  array
 * @param  {number} depth
 * @return {Array}
 */
function flattenDepth (array, depth) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected value to be an array')
  }

  return flattenFromDepth(array, depth)
}

/**
 * Flatten an array-like structure with depth.
 *
 * @param  {Array}  array
 * @param  {number} depth
 * @return {Array}
 */
function flattenFromDepth (array, depth) {
  if (typeof depth !== 'number') {
    throw new TypeError('Expected the depth to be a number')
  }

  return flattenDownDepth(array, [], depth)
}

/**
 * Flatten an array indefinitely.
 *
 * @param  {Array} array
 * @param  {Array} result
 * @return {Array}
 */
function flattenDown (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenDown(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {number} depth
 * @return {Array}
 */
function flattenDownDepth (array, result, depth) {
  depth--

  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > -1 && Array.isArray(value)) {
      flattenDownDepth(value, result, depth)
    } else {
      result.push(value)
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/array-subtract/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/array-subtract/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module src/index
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var findIndex = __webpack_require__(/*! 101/find-index */ "./node_modules/101/find-index.js");
var isFunction = __webpack_require__(/*! 101/is-function */ "./node_modules/101/is-function.js");

var ArraySubtract = function () {
  /**
   * Accepts a function as a comparator
   * @constructor
   * @throws
   * @param {Function} comparator
   */

  function ArraySubtract(comparator) {
    _classCallCheck(this, ArraySubtract);

    if (!isFunction(comparator)) {
      throw new Error('argument must be a function');
    }
    this.comparator = comparator;
  }

  /**
   * Returns a new array that contains a unique set of all the values in `a` that do not have
   * corresponding values in b
   *
   * @throws
   * @param {Array<*>} a
   * @param {Array<*>} b
   * @return Array<*>
   */

  _createClass(ArraySubtract, [{
    key: 'sub',
    value: function sub(a, b) {
      var _this = this;

      if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error('invalid arguments, arguments to ArraySubtract.prototype.sub must be Arrays');
      }
      var resultArray = [];

      var _loop = function _loop(i, lenA) {
        var aVal = a[i];
        var bFindIndex = findIndex(b, function (val) {
          return _this.comparator(aVal, val);
        });
        if (! ~bFindIndex) {
          // aVal does not exist in b
          resultArray.push(aVal);
        }
      };

      for (var i = 0, lenA = a.length; i < lenA; i++) {
        _loop(i, lenA);
      }
      return resultArray;
    }
  }]);

  return ArraySubtract;
}();

module.exports = ArraySubtract;

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bluebird/js/browser/bluebird.js":
/*!******************************************************!*\
  !*** ./node_modules/bluebird/js/browser/bluebird.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.5.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) { var getCompiled, makeGetter, makeMethodCaller; }

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) { var maybeCaller; }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    var self = this;
    setTimeout(function() {
        self._notifyUnhandledRejection();
    }, 1);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new CustomEvent(name.toLowerCase(), {
                    detail: event,
                    cancelable: true
                });
                return !util.global.dispatchEvent(domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new Event(name.toLowerCase(), {
                    cancelable: true
                });
                domEvent.detail = event;
                return !util.global.dispatchEvent(domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name.toLowerCase(), false, true,
                    event);
                return !util.global.dispatchEvent(domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
         getDomain) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) { var i, promiseSetters, thenCallbacks, holderClasses, generateHolderClass, promiseSetter, thenCallback; }

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) { var domain, bitField, maybePromise, i, callbacks, holder, HolderClass, ret; }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : util.domainBind(domain, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" &&
                    util.domainBind(domain, handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
Promise.Promise = Promise;
Promise.version = "3.5.1";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) { var parameterCount, parameterDeclaration, argumentSequence, switchCaseArgumentOrder; }

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : util.domainBind(domain, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && 
        this._eachValues !== null && 
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova))) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

function domainBind(self, cb) {
    return self.bind(cb);
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    domainBind: domainBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shell {\n  font-family: sans-serif; }\n\n.shell .content {\n  font-family: monospace; }\n\n.shell {\n  font-weight: 400; }\n\n@font-face {\n  font-family: 'shell';\n  src: url(" + escape(__webpack_require__(/*! ../../assets/fonts/shell.eot?kg1zqe */ "./assets/fonts/shell.eot?kg1zqe")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../../assets/fonts/shell.eot?kg1zqe */ "./assets/fonts/shell.eot?kg1zqe")) + "#iefix) format(\"embedded-opentype\"), url(" + escape(__webpack_require__(/*! ../../assets/fonts/shell.ttf?kg1zqe */ "./assets/fonts/shell.ttf?kg1zqe")) + ") format(\"truetype\"), url(" + escape(__webpack_require__(/*! ../../assets/fonts/shell.woff?kg1zqe */ "./assets/fonts/shell.woff?kg1zqe")) + ") format(\"woff\"), url(" + escape(__webpack_require__(/*! ../../assets/fonts/shell.svg?kg1zqe */ "./assets/fonts/shell.svg?kg1zqe")) + "#icomoon) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  font-family: 'shell' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-close:before {\n  content: \"\\E5CD\"; }\n\n.icon-enlarge:before {\n  content: \"\\E3C1\"; }\n\n.icon-folder:before {\n  content: \"\\E2C7\"; }\n\n.icon-command:before {\n  content: \"\\E5DD\"; }\n\n.icon-minimize:before {\n  content: \"\\E15B\"; }\n\n.icon-dot:before {\n  content: \"\\E900\"; }\n\n.icon-key:before {\n  content: \"\\E901\"; }\n\n.shell {\n  width: 400px;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  text-align: left;\n  color: #F1F1F1;\n  overflow: hidden;\n  font-weight: 300;\n  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 5px; }\n  @media (min-width: 320px) and (max-width: 767px) {\n    .shell {\n      font-size: 7.5px; } }\n  .shell.responsive {\n    width: 100%;\n    height: 100%;\n    min-height: 200px; }\n  .shell.typed .content .line {\n    display: none; }\n  .shell .status-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 21px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background: #333333; }\n    .shell .status-bar .buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-flex: 3;\n          -ms-flex-positive: 3;\n              flex-grow: 3; }\n      .shell .status-bar .buttons button {\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        border: 0;\n        padding: 0;\n        outline: none;\n        text-align: center;\n        margin: 0 3px;\n        border-radius: 50%;\n        cursor: pointer;\n        width: 13px;\n        height: 13px;\n        font-size: 11.25px;\n        line-height: 9.75px; }\n        .shell .status-bar .buttons button i {\n          text-align: center;\n          width: 100%;\n          height: 13px;\n          display: block; }\n        .shell .status-bar .buttons button.icon-close {\n          background: #FF4F37;\n          color: #FF4F37; }\n          .shell .status-bar .buttons button.icon-close:hover {\n            color: #841000; }\n        .shell .status-bar .buttons button.icon-minimize {\n          background: #FEC600;\n          color: #FEC600; }\n          .shell .status-bar .buttons button.icon-minimize:hover {\n            color: #987600; }\n        .shell .status-bar .buttons button.icon-enlarge {\n          background: #00DB51;\n          color: #00DB51; }\n          .shell .status-bar .buttons button.icon-enlarge:hover {\n            color: #00752b; }\n    .shell .status-bar .title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 12px;\n      line-height: 20.25px;\n      text-align: left;\n      -webkit-box-flex: 97;\n          -ms-flex-positive: 97;\n              flex-grow: 97; }\n  .shell .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 1px solid transparent;\n    padding: 2px;\n    font-size: 12px;\n    line-height: 13.5px;\n    background: #292929;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .shell .content .line.active {\n      display: block; }\n    .shell .content .line .prefix .user {\n      color: #8AD733; }\n    .shell .content .line .prefix .host {\n      color: #8AD733; }\n    .shell .content .line .prefix .path {\n      color: #729FCF; }\n    .shell .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.light .content {\n    color: #878787;\n    border-color: #EBEBEB;\n    background: #FFFFFF; }\n  .shell.light .typed-cursor {\n    background-color: #878787; }\n  .shell .typed-cursor {\n    opacity: 1;\n    background-color: #F1F1F1;\n    -webkit-animation: blink 1s infinite;\n            animation: blink 1s infinite; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n  .shell.ubuntu .status-bar {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#3F3F3F), to(#585858));\n    background-image: linear-gradient(to bottom, #3F3F3F 0%, #585858 100%); }\n    .shell.ubuntu .status-bar .icon {\n      display: none; }\n    .shell.ubuntu .status-bar .title {\n      color: #FFFFFF; }\n    .shell.ubuntu .status-bar .buttons button.icon-close {\n      background: #D75224;\n      color: #444444; }\n      .shell.ubuntu .status-bar .buttons button.icon-close:hover {\n        background: #c14a20;\n        color: #444444; }\n    .shell.ubuntu .status-bar .buttons button.icon-minimize, .shell.ubuntu .status-bar .buttons button.icon-enlarge {\n      background: #898989;\n      color: #555555; }\n      .shell.ubuntu .status-bar .buttons button.icon-minimize:hover, .shell.ubuntu .status-bar .buttons button.icon-enlarge:hover {\n        background: #7c7c7c;\n        color: #555555; }\n  .shell.ubuntu .content {\n    background: #300924; }\n    .shell.ubuntu .content .line .prefix .user {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .host {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .path {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.ubuntu.light {\n    color: #878787; }\n    .shell.ubuntu.light .content {\n      background: #FFFFFF; }\n      .shell.ubuntu.light .content .line .prefix .user {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .host {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .path {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .root .user {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .root .host {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .root .path {\n        color: #878787; }\n  .shell.osx .status-bar {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#CBCBCB));\n    background-image: linear-gradient(to bottom, #EBEBEB 0%, #CBCBCB 100%);\n    position: relative; }\n    .shell.osx .status-bar .title {\n      color: #878787;\n      text-align: center;\n      -webkit-box-flex: 100;\n          -ms-flex-positive: 100;\n              flex-grow: 100; }\n  .shell.osx .content {\n    background: rgba(0, 0, 0, 0.9); }\n    .shell.osx .content .line .prefix .user {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .host {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .path {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.osx.light {\n    color: #878787; }\n    .shell.osx.light .content {\n      border-color: #EBEBEB;\n      background: #FFFFFF; }\n      .shell.osx.light .content .line .prefix .user {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .host {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .path {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .root .user {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .root .host {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .root .path {\n        color: #878787; }\n  .shell.windows {\n    color: #FFFFFF;\n    border-radius: 0;\n    -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5); }\n    .shell.windows .status-bar {\n      height: 30px;\n      background-color: #69C1F0; }\n      .shell.windows .status-bar .buttons {\n        -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n                align-items: stretch;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n        padding: 0; }\n        .shell.windows .status-bar .buttons button {\n          margin: 0;\n          border-radius: 0;\n          width: 25px;\n          height: 20px;\n          font-size: 13.5px;\n          line-height: 15px; }\n          .shell.windows .status-bar .buttons button i {\n            width: 100%;\n            height: 20px;\n            font-size: 7.5px;\n            line-height: 15px; }\n          .shell.windows .status-bar .buttons button.icon-close {\n            width: 50px;\n            background: #C75050;\n            color: #FFFFFF; }\n            .shell.windows .status-bar .buttons button.icon-close:hover {\n              background: #c03d3d;\n              color: #FFFFFF; }\n          .shell.windows .status-bar .buttons button.icon-minimize {\n            background: transparent;\n            color: #292929; }\n            .shell.windows .status-bar .buttons button.icon-minimize:hover {\n              background: #1698dd;\n              color: #FFFFFF; }\n          .shell.windows .status-bar .buttons button.icon-enlarge {\n            background: transparent;\n            color: #292929; }\n            .shell.windows .status-bar .buttons button.icon-enlarge:hover {\n              background: #1698dd;\n              color: #FFFFFF; }\n      .shell.windows .status-bar .icon {\n        background: #000000;\n        color: #FFFFFF;\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        font-size: 9px;\n        line-height: 15px;\n        border-radius: 3px;\n        margin: 5px; }\n      .shell.windows .status-bar .title {\n        font-size: 12px;\n        line-height: 30px;\n        color: #292929; }\n    .shell.windows .content {\n      border-color: #69C1F0;\n      background: #000000; }\n      .shell.windows .content .line .prefix .user {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .host {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .path {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .user {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .host {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .path {\n        color: #FFFFFF; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/methods/index.js":
/*!***************************************!*\
  !*** ./node_modules/methods/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * methods
 * Copyright(c) 2013-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var http = __webpack_require__(/*! http */ 1);

/**
 * Module exports.
 * @public
 */

module.exports = getCurrentNodeMethods() || getBasicNodeMethods();

/**
 * Get the current Node.js methods.
 * @private
 */

function getCurrentNodeMethods() {
  return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {
    return method.toLowerCase();
  });
}

/**
 * Get the "basic" Node.js methods, a snapshot from Node.js 0.10.
 * @private
 */

function getBasicNodeMethods() {
  return [
    'get',
    'post',
    'put',
    'head',
    'delete',
    'options',
    'trace',
    'copy',
    'lock',
    'mkcol',
    'move',
    'purge',
    'propfind',
    'proppatch',
    'unlock',
    'report',
    'mkactivity',
    'checkout',
    'merge',
    'm-search',
    'notify',
    'subscribe',
    'unsubscribe',
    'patch',
    'search',
    'connect'
  ];
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/parseurl/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseurl/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * parseurl
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var url = __webpack_require__(/*! url */ "./node_modules/url/url.js")
var parse = url.parse
var Url = url.Url

/**
 * Module exports.
 * @public
 */

module.exports = parseurl
module.exports.original = originalurl

/**
 * Parse the `req` url with memoization.
 *
 * @param {ServerRequest} req
 * @return {Object}
 * @public
 */

function parseurl (req) {
  var url = req.url

  if (url === undefined) {
    // URL is undefined
    return undefined
  }

  var parsed = req._parsedUrl

  if (fresh(url, parsed)) {
    // Return cached URL parse
    return parsed
  }

  // Parse the URL
  parsed = fastparse(url)
  parsed._raw = url

  return (req._parsedUrl = parsed)
};

/**
 * Parse the `req` original url with fallback and memoization.
 *
 * @param {ServerRequest} req
 * @return {Object}
 * @public
 */

function originalurl (req) {
  var url = req.originalUrl

  if (typeof url !== 'string') {
    // Fallback
    return parseurl(req)
  }

  var parsed = req._parsedOriginalUrl

  if (fresh(url, parsed)) {
    // Return cached URL parse
    return parsed
  }

  // Parse the URL
  parsed = fastparse(url)
  parsed._raw = url

  return (req._parsedOriginalUrl = parsed)
};

/**
 * Parse the `str` url with fast-path short-cut.
 *
 * @param {string} str
 * @return {Object}
 * @private
 */

function fastparse (str) {
  if (typeof str !== 'string' || str.charCodeAt(0) !== 0x2f /* / */) {
    return parse(str)
  }

  var pathname = str
  var query = null
  var search = null

  // This takes the regexp from https://github.com/joyent/node/pull/7878
  // Which is /^(\/[^?#\s]*)(\?[^#\s]*)?$/
  // And unrolls it into a for loop
  for (var i = 1; i < str.length; i++) {
    switch (str.charCodeAt(i)) {
      case 0x3f: /* ?  */
        if (search === null) {
          pathname = str.substring(0, i)
          query = str.substring(i + 1)
          search = str.substring(i)
        }
        break
      case 0x09: /* \t */
      case 0x0a: /* \n */
      case 0x0c: /* \f */
      case 0x0d: /* \r */
      case 0x20: /*    */
      case 0x23: /* #  */
      case 0xa0:
      case 0xfeff:
        return parse(str)
    }
  }

  var url = Url !== undefined
    ? new Url()
    : {}
  url.path = str
  url.href = str
  url.pathname = pathname
  url.query = query
  url.search = search

  return url
}

/**
 * Determine if parsed is still fresh for url.
 *
 * @param {string} url
 * @param {object} parsedUrl
 * @return {boolean}
 * @private
 */

function fresh (url, parsedUrl) {
  return typeof parsedUrl === 'object' &&
    parsedUrl !== null &&
    (Url === undefined || parsedUrl instanceof Url) &&
    parsedUrl._raw === url
}


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathtoRegexp`.
 */

module.exports = pathtoRegexp;

/**
 * Match matching groups in a regular expression.
 */
var MATCHING_GROUP_REGEXP = /\((?!\?)/g;

/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String|RegExp|Array} path
 * @param  {Array} keys
 * @param  {Object} options
 * @return {RegExp}
 * @api private
 */

function pathtoRegexp(path, keys, options) {
  options = options || {};
  keys = keys || [];
  var strict = options.strict;
  var end = options.end !== false;
  var flags = options.sensitive ? '' : 'i';
  var extraOffset = 0;
  var keysOffset = keys.length;
  var i = 0;
  var name = 0;
  var m;

  if (path instanceof RegExp) {
    while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {
      keys.push({
        name: name++,
        optional: false,
        offset: m.index
      });
    }

    return path;
  }

  if (Array.isArray(path)) {
    // Map array parts into regexps and return their source. We also pass
    // the same keys and options instance into every generation to get
    // consistent matching groups before we join the sources together.
    path = path.map(function (value) {
      return pathtoRegexp(value, keys, options).source;
    });

    return new RegExp('(?:' + path.join('|') + ')', flags);
  }

  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
    .replace(/\/\(/g, '/(?:')
    .replace(/([\/\.])/g, '\\$1')
    .replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function (match, slash, format, key, capture, star, optional, offset) {
      slash = slash || '';
      format = format || '';
      capture = capture || '([^\\/' + format + ']+?)';
      optional = optional || '';

      keys.push({
        name: key,
        optional: !!optional,
        offset: offset + extraOffset
      });

      var result = ''
        + (optional ? '' : slash)
        + '(?:'
        + format + (optional ? slash : '') + capture
        + (star ? '((?:[\\/' + format + '].+?)?)' : '')
        + ')'
        + optional;

      extraOffset += result.length - match.length;

      return result;
    })
    .replace(/\*/g, function (star, index) {
      var len = keys.length

      while (len-- > keysOffset && keys[len].offset > index) {
        keys[len].offset += 3; // Replacement length minus asterisk length.
      }

      return '(.*)';
    });

  // This is a workaround for handling unnamed matching groups.
  while (m = MATCHING_GROUP_REGEXP.exec(path)) {
    var escapeCount = 0;
    var index = m.index;

    while (path.charAt(--index) === '\\') {
      escapeCount++;
    }

    // It's possible to escape the bracket.
    if (escapeCount % 2 === 1) {
      continue;
    }

    if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {
      keys.splice(keysOffset + i, 0, {
        name: name++, // Unnamed matching groups must be consistently linear.
        optional: false,
        offset: m.index
      });
    }

    i++;
  }

  // If the path is non-ending, match until the end or a slash.
  path += (end ? '$' : (path[path.length - 1] === '/' ? '' : '(?=\\/|$)'));

  return new RegExp(path, flags);
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/router/index.js":
/*!**************************************!*\
  !*** ./node_modules/router/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, process, Buffer) {/*!
 * router
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('router')
var flatten = __webpack_require__(/*! array-flatten */ "./node_modules/array-flatten/array-flatten.js")
var Layer = __webpack_require__(/*! ./lib/layer */ "./node_modules/router/lib/layer.js")
var methods = __webpack_require__(/*! methods */ "./node_modules/methods/index.js")
var mixin = __webpack_require__(/*! utils-merge */ "./node_modules/utils-merge/index.js")
var parseUrl = __webpack_require__(/*! parseurl */ "./node_modules/parseurl/index.js")
var Route = __webpack_require__(/*! ./lib/route */ "./node_modules/router/lib/route.js")
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "./node_modules/setprototypeof/index.js")

/**
 * Module variables.
 * @private
 */

var slice = Array.prototype.slice

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

/**
 * Expose `Router`.
 */

module.exports = Router

/**
 * Expose `Route`.
 */

module.exports.Route = Route

/**
 * Initialize a new `Router` with the given `options`.
 *
 * @param {object} options
 * @return {Router} which is a callable function
 * @public
 */

function Router(options) {
  if (!(this instanceof Router)) {
    return new Router(options)
  }

  var opts = options || {}

  function router(req, res, next) {
    router.handle(req, res, next)
  }

  // inherit from the correct prototype
  setPrototypeOf(router, this)

  router.caseSensitive = opts.caseSensitive
  router.mergeParams = opts.mergeParams
  router.params = {}
  router.strict = opts.strict
  router.stack = []

  return router
}

/**
 * Router prototype inherits from a Function.
 */

/* istanbul ignore next */
Router.prototype = function () {}

/**
 * Map the given param placeholder `name`(s) to the given callback.
 *
 * Parameter mapping is used to provide pre-conditions to routes
 * which use normalized placeholders. For example a _:user_id_ parameter
 * could automatically load a user's information from the database without
 * any additional code.
 *
 * The callback uses the same signature as middleware, the only difference
 * being that the value of the placeholder is passed, in this case the _id_
 * of the user. Once the `next()` function is invoked, just like middleware
 * it will continue on to execute the route, or subsequent parameter functions.
 *
 * Just like in middleware, you must either respond to the request or call next
 * to avoid stalling the request.
 *
 *  router.param('user_id', function(req, res, next, id){
 *    User.find(id, function(err, user){
 *      if (err) {
 *        return next(err)
 *      } else if (!user) {
 *        return next(new Error('failed to load user'))
 *      }
 *      req.user = user
 *      next()
 *    })
 *  })
 *
 * @param {string} name
 * @param {function} fn
 * @public
 */

Router.prototype.param = function param(name, fn) {
  if (!name) {
    throw new TypeError('argument name is required')
  }

  if (typeof name !== 'string') {
    throw new TypeError('argument name must be a string')
  }

  if (!fn) {
    throw new TypeError('argument fn is required')
  }

  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  var params = this.params[name]

  if (!params) {
    params = this.params[name] = []
  }

  params.push(fn)

  return this
}

/**
 * Dispatch a req, res into the router.
 *
 * @private
 */

Router.prototype.handle = function handle(req, res, callback) {
  if (!callback) {
    throw new TypeError('argument callback is required')
  }

  debug('dispatching %s %s', req.method, req.url)

  var idx = 0
  var methods
  var protohost = getProtohost(req.url) || ''
  var removed = ''
  var self = this
  var slashAdded = false
  var paramcalled = {}

  // middleware and routes
  var stack = this.stack

  // manage inter-router variables
  var parentParams = req.params
  var parentUrl = req.baseUrl || ''
  var done = restore(callback, req, 'baseUrl', 'next', 'params')

  // setup next layer
  req.next = next

  // for options requests, respond with a default if nothing else responds
  if (req.method === 'OPTIONS') {
    methods = []
    done = wrap(done, generateOptionsResponder(res, methods))
  }

  // setup basic req values
  req.baseUrl = parentUrl
  req.originalUrl = req.originalUrl || req.url

  next()

  function next(err) {
    var layerError = err === 'route'
      ? null
      : err

    // remove added slash
    if (slashAdded) {
      req.url = req.url.substr(1)
      slashAdded = false
    }

    // restore altered req.url
    if (removed.length !== 0) {
      req.baseUrl = parentUrl
      req.url = protohost + removed + req.url.substr(protohost.length)
      removed = ''
    }

    // signal to exit router
    if (layerError === 'router') {
      defer(done, null)
      return
    }

    // no more matching layers
    if (idx >= stack.length) {
      defer(done, layerError)
      return
    }

    // get pathname of request
    var path = getPathname(req)

    if (path == null) {
      return done(layerError)
    }

    // find next matching layer
    var layer
    var match
    var route

    while (match !== true && idx < stack.length) {
      layer = stack[idx++]
      match = matchLayer(layer, path)
      route = layer.route

      if (typeof match !== 'boolean') {
        // hold on to layerError
        layerError = layerError || match
      }

      if (match !== true) {
        continue
      }

      if (!route) {
        // process non-route handlers normally
        continue
      }

      if (layerError) {
        // routes do not match with a pending error
        match = false
        continue
      }

      var method = req.method;
      var has_method = route._handles_method(method)

      // build up automatic options response
      if (!has_method && method === 'OPTIONS' && methods) {
        methods.push.apply(methods, route._methods())
      }

      // don't even bother matching route
      if (!has_method && method !== 'HEAD') {
        match = false
        continue
      }
    }

    // no match
    if (match !== true) {
      return done(layerError)
    }

    // store route for dispatch on change
    if (route) {
      req.route = route
    }

    // Capture one-time layer values
    req.params = self.mergeParams
      ? mergeParams(layer.params, parentParams)
      : layer.params
    var layerPath = layer.path

    // this should be done for the layer
    self.process_params(layer, paramcalled, req, res, function (err) {
      if (err) {
        return next(layerError || err)
      }

      if (route) {
        return layer.handle_request(req, res, next)
      }

      trim_prefix(layer, layerError, layerPath, path)
    })
  }

  function trim_prefix(layer, layerError, layerPath, path) {
    if (layerPath.length !== 0) {
      // Validate path breaks on a path separator
      var c = path[layerPath.length]
      if (c && c !== '/') {
        next(layerError)
        return
      }

      // Trim off the part of the url that matches the route
      // middleware (.use stuff) needs to have the path stripped
      debug('trim prefix (%s) from url %s', layerPath, req.url)
      removed = layerPath
      req.url = protohost + req.url.substr(protohost.length + removed.length)

      // Ensure leading slash
      if (!protohost && req.url[0] !== '/') {
        req.url = '/' + req.url
        slashAdded = true
      }

      // Setup base URL (no trailing slash)
      req.baseUrl = parentUrl + (removed[removed.length - 1] === '/'
        ? removed.substring(0, removed.length - 1)
        : removed)
    }

    debug('%s %s : %s', layer.name, layerPath, req.originalUrl)

    if (layerError) {
      layer.handle_error(layerError, req, res, next)
    } else {
      layer.handle_request(req, res, next)
    }
  }
}

/**
 * Process any parameters for the layer.
 *
 * @private
 */

Router.prototype.process_params = function process_params(layer, called, req, res, done) {
  var params = this.params

  // captured parameters from the layer, keys and values
  var keys = layer.keys

  // fast track
  if (!keys || keys.length === 0) {
    return done()
  }

  var i = 0
  var name
  var paramIndex = 0
  var key
  var paramVal
  var paramCallbacks
  var paramCalled

  // process params in order
  // param callbacks can be async
  function param(err) {
    if (err) {
      return done(err)
    }

    if (i >= keys.length ) {
      return done()
    }

    paramIndex = 0
    key = keys[i++]
    name = key.name
    paramVal = req.params[name]
    paramCallbacks = params[name]
    paramCalled = called[name]

    if (paramVal === undefined || !paramCallbacks) {
      return param()
    }

    // param previously called with same value or error occurred
    if (paramCalled && (paramCalled.match === paramVal
      || (paramCalled.error && paramCalled.error !== 'route'))) {
      // restore value
      req.params[name] = paramCalled.value

      // next param
      return param(paramCalled.error)
    }

    called[name] = paramCalled = {
      error: null,
      match: paramVal,
      value: paramVal
    }

    paramCallback()
  }

  // single param callbacks
  function paramCallback(err) {
    var fn = paramCallbacks[paramIndex++]

    // store updated value
    paramCalled.value = req.params[key.name]

    if (err) {
      // store error
      paramCalled.error = err
      param(err)
      return
    }

    if (!fn) return param()

    try {
      fn(req, res, paramCallback, paramVal, key.name)
    } catch (e) {
      paramCallback(e)
    }
  }

  param()
}

/**
 * Use the given middleware function, with optional path, defaulting to "/".
 *
 * Use (like `.all`) will run for any http METHOD, but it will not add
 * handlers for those methods so OPTIONS requests will not consider `.use`
 * functions even if they could respond.
 *
 * The other difference is that _route_ path is stripped and not visible
 * to the handler function. The main effect of this feature is that mounted
 * handlers can operate without any code changes regardless of the "prefix"
 * pathname.
 *
 * @public
 */

Router.prototype.use = function use(handler) {
  var offset = 0
  var path = '/'

  // default path to '/'
  // disambiguate router.use([handler])
  if (typeof handler !== 'function') {
    var arg = handler

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0]
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1
      path = handler
    }
  }

  var callbacks = flatten(slice.call(arguments, offset))

  if (callbacks.length === 0) {
    throw new TypeError('argument handler is required')
  }

  for (var i = 0; i < callbacks.length; i++) {
    var fn = callbacks[i]

    if (typeof fn !== 'function') {
      throw new TypeError('argument handler must be a function')
    }

    // add the middleware
    debug('use %o %s', path, fn.name || '<anonymous>')

    var layer = new Layer(path, {
      sensitive: this.caseSensitive,
      strict: false,
      end: false
    }, fn)

    layer.route = undefined

    this.stack.push(layer)
  }

  return this
}

/**
 * Create a new Route for the given path.
 *
 * Each route contains a separate middleware stack and VERB handlers.
 *
 * See the Route api documentation for details on adding handlers
 * and middleware to routes.
 *
 * @param {string} path
 * @return {Route}
 * @public
 */

Router.prototype.route = function route(path) {
  var route = new Route(path)

  var layer = new Layer(path, {
    sensitive: this.caseSensitive,
    strict: this.strict,
    end: true
  }, handle)

  function handle(req, res, next) {
    route.dispatch(req, res, next)
  }

  layer.route = route

  this.stack.push(layer)
  return route
}

// create Router#VERB functions
methods.concat('all').forEach(function(method){
  Router.prototype[method] = function (path) {
    var route = this.route(path)
    route[method].apply(route, slice.call(arguments, 1))
    return this
  }
})

/**
 * Generate a callback that will make an OPTIONS response.
 *
 * @param {OutgoingMessage} res
 * @param {array} methods
 * @private
 */

function generateOptionsResponder(res, methods) {
  return function onDone(fn, err) {
    if (err || methods.length === 0) {
      return fn(err)
    }

    trySendOptionsResponse(res, methods, fn)
  }
}

/**
 * Get pathname of request.
 *
 * @param {IncomingMessage} req
 * @private
 */

function getPathname(req) {
  try {
    return parseUrl(req).pathname;
  } catch (err) {
    return undefined;
  }
}

/**
 * Get get protocol + host for a URL.
 *
 * @param {string} url
 * @private
 */

function getProtohost(url) {
  if (typeof url !== 'string' || url.length === 0 || url[0] === '/') {
    return undefined
  }

  var searchIndex = url.indexOf('?')
  var pathLength = searchIndex !== -1
    ? searchIndex
    : url.length
  var fqdnIndex = url.substr(0, pathLength).indexOf('://')

  return fqdnIndex !== -1
    ? url.substr(0, url.indexOf('/', 3 + fqdnIndex))
    : undefined
}

/**
 * Match path to a layer.
 *
 * @param {Layer} layer
 * @param {string} path
 * @private
 */

function matchLayer(layer, path) {
  try {
    return layer.match(path);
  } catch (err) {
    return err;
  }
}

/**
 * Merge params with parent params
 *
 * @private
 */

function mergeParams(params, parent) {
  if (typeof parent !== 'object' || !parent) {
    return params
  }

  // make copy of parent for base
  var obj = mixin({}, parent)

  // simple non-numeric merging
  if (!(0 in params) || !(0 in parent)) {
    return mixin(obj, params)
  }

  var i = 0
  var o = 0

  // determine numeric gap in params
  while (i in params) {
    i++
  }

  // determine numeric gap in parent
  while (o in parent) {
    o++
  }

  // offset numeric indices in params before merge
  for (i--; i >= 0; i--) {
    params[i + o] = params[i]

    // create holes for the merge when necessary
    if (i < o) {
      delete params[i]
    }
  }

  return mixin(obj, params)
}

/**
 * Restore obj props after function
 *
 * @private
 */

function restore(fn, obj) {
  var props = new Array(arguments.length - 2)
  var vals = new Array(arguments.length - 2)

  for (var i = 0; i < props.length; i++) {
    props[i] = arguments[i + 2]
    vals[i] = obj[props[i]]
  }

  return function(){
    // restore vals
    for (var i = 0; i < props.length; i++) {
      obj[props[i]] = vals[i]
    }

    return fn.apply(this, arguments)
  }
}

/**
 * Send an OPTIONS response.
 *
 * @private
 */

function sendOptionsResponse(res, methods) {
  var options = Object.create(null)

  // build unique method map
  for (var i = 0; i < methods.length; i++) {
    options[methods[i]] = true
  }

  // construct the allow list
  var allow = Object.keys(options).sort().join(', ')

  // send response
  res.setHeader('Allow', allow)
  res.setHeader('Content-Length', Buffer.byteLength(allow))
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.end(allow)
}

/**
 * Try to send an OPTIONS response.
 *
 * @private
 */

function trySendOptionsResponse(res, methods, next) {
  try {
    sendOptionsResponse(res, methods)
  } catch (err) {
    next(err)
  }
}

/**
 * Wrap a function
 *
 * @private
 */

function wrap(old, fn) {
  return function proxy() {
    var args = new Array(arguments.length + 1)

    args[0] = old
    for (var i = 0, len = arguments.length; i < len; i++) {
      args[i + 1] = arguments[i]
    }

    fn.apply(this, args)
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/router/lib/layer.js":
/*!******************************************!*\
  !*** ./node_modules/router/lib/layer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * router
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var pathRegexp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js")
var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('router:layer')

/**
 * Module variables.
 * @private
 */

var hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Expose `Layer`.
 */

module.exports = Layer

function Layer(path, options, fn) {
  if (!(this instanceof Layer)) {
    return new Layer(path, options, fn)
  }

  debug('new %o', path)
  var opts = options || {}

  this.handle = fn
  this.name = fn.name || '<anonymous>'
  this.params = undefined
  this.path = undefined
  this.regexp = pathRegexp(path, this.keys = [], opts)

  // set fast path flags
  this.regexp.fast_star = path === '*'
  this.regexp.fast_slash = path === '/' && opts.end === false
}

/**
 * Handle the error for the layer.
 *
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */

Layer.prototype.handle_error = function handle_error(error, req, res, next) {
  var fn = this.handle

  if (fn.length !== 4) {
    // not a standard error handler
    return next(error)
  }

  try {
    fn(error, req, res, next)
  } catch (err) {
    next(err)
  }
}

/**
 * Handle the request for the layer.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */

Layer.prototype.handle_request = function handle(req, res, next) {
  var fn = this.handle

  if (fn.length > 3) {
    // not a standard request handler
    return next()
  }

  try {
    fn(req, res, next)
  } catch (err) {
    next(err)
  }
}

/**
 * Check if this route matches `path`, if so
 * populate `.params`.
 *
 * @param {String} path
 * @return {Boolean}
 * @api private
 */

Layer.prototype.match = function match(path) {
  var match

  if (path != null) {
    // fast path non-ending match for / (any path matches)
    if (this.regexp.fast_slash) {
      this.params = {}
      this.path = ''
      return true
    }

    // fast path for * (everything matched in a param)
    if (this.regexp.fast_star) {
      this.params = {'0': decode_param(path)}
      this.path = path
      return true
    }

    // match the path
    match = this.regexp.exec(path)
  }

  if (!match) {
    this.params = undefined
    this.path = undefined
    return false
  }

  // store values
  this.params = {}
  this.path = match[0]

  // iterate matches
  var keys = this.keys
  var params = this.params

  for (var i = 1; i < match.length; i++) {
    var key = keys[i - 1]
    var prop = key.name
    var val = decode_param(match[i])

    if (val !== undefined || !(hasOwnProperty.call(params, prop))) {
      params[prop] = val
    }
  }

  return true
}

/**
 * Decode param value.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function decode_param(val){
  if (typeof val !== 'string' || val.length === 0) {
    return val
  }

  try {
    return decodeURIComponent(val)
  } catch (err) {
    if (err instanceof URIError) {
      err.message = 'Failed to decode param \'' + val + '\''
      err.status = 400
    }

    throw err
  }
}


/***/ }),

/***/ "./node_modules/router/lib/route.js":
/*!******************************************!*\
  !*** ./node_modules/router/lib/route.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * router
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('router:route')
var flatten = __webpack_require__(/*! array-flatten */ "./node_modules/array-flatten/array-flatten.js")
var Layer = __webpack_require__(/*! ./layer */ "./node_modules/router/lib/layer.js")
var methods = __webpack_require__(/*! methods */ "./node_modules/methods/index.js")

/**
 * Module variables.
 * @private
 */

var slice = Array.prototype.slice

/**
 * Expose `Route`.
 */

module.exports = Route

/**
 * Initialize `Route` with the given `path`,
 *
 * @param {String} path
 * @api private
 */

function Route(path) {
  debug('new %o', path)
  this.path = path
  this.stack = []

  // route handlers for various http methods
  this.methods = {}
}

/**
 * @private
 */

Route.prototype._handles_method = function _handles_method(method) {
  if (this.methods._all) {
    return true
  }

  // normalize name
  var name = method.toLowerCase()

  if (name === 'head' && !this.methods['head']) {
    name = 'get'
  }

  return Boolean(this.methods[name])
}

/**
 * @return {array} supported HTTP methods
 * @private
 */

Route.prototype._methods = function _methods() {
  var methods = Object.keys(this.methods)

  // append automatic head
  if (this.methods.get && !this.methods.head) {
    methods.push('head')
  }

  for (var i = 0; i < methods.length; i++) {
    // make upper case
    methods[i] = methods[i].toUpperCase()
  }

  return methods
}

/**
 * dispatch req, res into this route
 *
 * @private
 */

Route.prototype.dispatch = function dispatch(req, res, done) {
  var idx = 0
  var stack = this.stack
  if (stack.length === 0) {
    return done()
  }

  var method = req.method.toLowerCase()
  if (method === 'head' && !this.methods['head']) {
    method = 'get'
  }

  req.route = this

  next()

  function next(err) {
    // signal to exit route
    if (err && err === 'route') {
      return done()
    }

    // signal to exit router
    if (err && err === 'router') {
      return done(err)
    }

    // no more matching layers
    if (idx >= stack.length) {
      return done(err)
    }

    var layer
    var match

    // find next matching layer
    while (match !== true && idx < stack.length) {
      layer = stack[idx++]
      match = !layer.method || layer.method === method
    }

    // no match
    if (match !== true) {
      return done(err)
    }

    if (err) {
      layer.handle_error(err, req, res, next)
    } else {
      layer.handle_request(req, res, next)
    }
  }
}

/**
 * Add a handler for all HTTP verbs to this route.
 *
 * Behaves just like middleware and can respond or call `next`
 * to continue processing.
 *
 * You can use multiple `.all` call to add multiple handlers.
 *
 *   function check_something(req, res, next){
 *     next()
 *   }
 *
 *   function validate_user(req, res, next){
 *     next()
 *   }
 *
 *   route
 *   .all(validate_user)
 *   .all(check_something)
 *   .get(function(req, res, next){
 *     res.send('hello world')
 *   })
 *
 * @param {array|function} handler
 * @return {Route} for chaining
 * @api public
 */

Route.prototype.all = function all(handler) {
  var callbacks = flatten(slice.call(arguments))

  if (callbacks.length === 0) {
    throw new TypeError('argument handler is required')
  }

  for (var i = 0; i < callbacks.length; i++) {
    var fn = callbacks[i]

    if (typeof fn !== 'function') {
      throw new TypeError('argument handler must be a function')
    }

    var layer = Layer('/', {}, fn)
    layer.method = undefined

    this.methods._all = true
    this.stack.push(layer)
  }

  return this
}

methods.forEach(function (method) {
  Route.prototype[method] = function (handler) {
    var callbacks = flatten(slice.call(arguments))

    if (callbacks.length === 0) {
      throw new TypeError('argument handler is required')
    }

    for (var i = 0; i < callbacks.length; i++) {
      var fn = callbacks[i]

      if (typeof fn !== 'function') {
        throw new TypeError('argument handler must be a function')
      }

      debug('%s %s', method, this.path)

      var layer = Layer('/', {}, fn)
      layer.method = method

      this.methods[method] = true
      this.stack.push(layer)
    }

    return this
  }
})


/***/ }),

/***/ "./node_modules/serialize-javascript/index.js":
/*!****************************************************!*\
  !*** ./node_modules/serialize-javascript/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/



// Generate an internal UID to make the regexp pattern harder to guess.
var UID                 = Math.floor(Math.random() * 0x10000000000).toString(16);
var PLACE_HOLDER_REGEXP = new RegExp('"@__(F|R|D)-' + UID + '-(\\d+)__@"', 'g');

var IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
var UNSAFE_CHARS_REGEXP   = /[<>\/\u2028\u2029]/g;

// Mapping of unsafe HTML and invalid JavaScript line terminator chars to their
// Unicode char counterparts which are safe to use in JavaScript strings.
var ESCAPED_CHARS = {
    '<'     : '\\u003C',
    '>'     : '\\u003E',
    '/'     : '\\u002F',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};

function escapeUnsafeChars(unsafeChar) {
    return ESCAPED_CHARS[unsafeChar];
}

module.exports = function serialize(obj, options) {
    options || (options = {});

    // Backwards-compatibility for `space` as the second argument.
    if (typeof options === 'number' || typeof options === 'string') {
        options = {space: options};
    }

    var functions = [];
    var regexps   = [];
    var dates     = [];

    // Returns placeholders for functions and regexps (identified by index)
    // which are later replaced by their string representation.
    function replacer(key, value) {
        if (!value) {
            return value;
        }

        // If the value is an object w/ a toJSON method, toJSON is called before
        // the replacer runs, so we use this[key] to get the non-toJSONed value.
        var origValue = this[key];
        var type = typeof origValue;

        if (type === 'object') {
            if(origValue instanceof RegExp) {
                return '@__R-' + UID + '-' + (regexps.push(origValue) - 1) + '__@';
            }

            if(origValue instanceof Date) {
                return '@__D-' + UID + '-' + (dates.push(origValue) - 1) + '__@';
            }
        }

        if (type === 'function') {
            return '@__F-' + UID + '-' + (functions.push(origValue) - 1) + '__@';
        }

        return value;
    }

    var str;

    // Creates a JSON string representation of the value.
    // NOTE: Node 0.12 goes into slow mode with extra JSON.stringify() args.
    if (options.isJSON && !options.space) {
        str = JSON.stringify(obj);
    } else {
        str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);
    }

    // Protects against `JSON.stringify()` returning `undefined`, by serializing
    // to the literal string: "undefined".
    if (typeof str !== 'string') {
        return String(str);
    }

    // Replace unsafe HTML and invalid JavaScript line terminator chars with
    // their safe Unicode char counterpart. This _must_ happen before the
    // regexps and functions are serialized and added back to the string.
    if (options.unsafe !== true) {
        str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
    }

    if (functions.length === 0 && regexps.length === 0 && dates.length === 0) {
        return str;
    }

    // Replaces all occurrences of function, regexp and date placeholders in the
    // JSON string with their string representations. If the original value can
    // not be found, then `undefined` is used.
    return str.replace(PLACE_HOLDER_REGEXP, function (match, type, valueIndex) {
        if (type === 'D') {
            return "new Date(\"" + dates[valueIndex].toISOString() + "\")";
        }

        if (type === 'R') {
            return regexps[valueIndex].toString();
        }

        var fn           = functions[valueIndex];
        var serializedFn = fn.toString();

        if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {
            throw new TypeError('Serializing native function: ' + fn.name);
        }

        return serializedFn;
    });
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/setprototypeof/index.js":
/*!**********************************************!*\
  !*** ./node_modules/setprototypeof/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Object.setPrototypeOf || ({__proto__:[]} instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

function mixinProperties(obj, proto) {
	for (var prop in proto) {
		if (!obj.hasOwnProperty(prop)) {
			obj[prop] = proto[prop];
		}
	}
	return obj;
}


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/try-defer/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/try-defer/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tryDefer;
exports.browserDefer = browserDefer;
exports.dateDefer = dateDefer;

var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ "./node_modules/serialize-javascript/index.js");

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function tryDefer(condition) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$tracing = _ref.tracing;
  var tracing = _ref$tracing === undefined ? false : _ref$tracing;

  var _queue = [];
  var _errors = [];
  var _attempts = 0;

  function _execute(_ref2) {
    var fn = _ref2.fn;
    var args = _ref2.args;
    var hard = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    _attempts += 1;
    try {
      if (hard || !condition || condition()) return fn.apply(undefined, _toConsumableArray(args));
      return _enqueue(fn, args);
    } catch (err) {
      if (hard) throw err;
      return _enqueue(fn, args, err);
    }
  }

  function _enqueue(fn, args, err) {
    var attempt = _attempts;
    _queue.push({ fn: fn, args: args, attempt: attempt, err: err });
    if (err) _errors.push(err);
    return { deferred: typeof err === 'undefined',
      attempt: attempt,
      err: err
    };
  }

  function status() {
    var _status = { queue: _queue, errors: _errors, attempts: _attempts };
    return _status;
  }

  function replay() {
    var hard = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var drain = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    var queue = _queue;
    if (drain) _queue = [];
    var output = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var queued = _step.value;

        output.push(_execute(queued, hard));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return output;
  }

  function serialize() {
    var serialized = '(function (undefined) {\n      var queue = ' + (0, _serializeJavascript2.default)(_queue) + ';\n      var results = [];\n      while(queue.length > 0) {\n        var item = queue.shift();\n        var fn = item.fn;\n        var args = item.args;\n        results.push(fn.apply(undefined, args));\n      }\n      return results;\n    })();';
    return serialized;
  }

  function reactReplay(React) {
    var serialized = serialize();
    return function (props) {
      return React.createElement('script', { dangerouslySetInnerHTML: { __html: serialized } });
    };
  }

  /** Returns a 2 item array of [ thunk, defer ] that wraps a function and functions for replaying in various scenarios. */
  return [function (fn) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _execute({ fn: fn, args: args });
    };
  }, { status: status, replay: replay, serialize: serialize, reactReplay: reactReplay }];
}

/** Only execute on browser. */
function browserDefer() {
  var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var tracing = _ref3.tracing;

  return tryDefer(function condition() {
    if (typeof window === 'undefined') return false;
    if (typeof document === 'undefined') return false;
    return true;
  }, { tracing: tracing });
}

/** Only execute between certain times. */
function dateDefer(_ref4) {
  var after = _ref4.after;
  var before = _ref4.before;

  var _ref5 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var tracing = _ref5.tracing;

  return tryDefer(function dateCondition() {
    var now = Date.now();
    if (after) {
      if (now <= (typeof after === 'function' ? after() : after)) return false;
    }
    if (before) {
      if (now >= (typeof before === 'function' ? before() : before)) return false;
    }
    return true;
  }, { tracing: tracing });
}

/***/ }),

/***/ "./node_modules/universal-style-loader/lib/compile/addStyles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/universal-style-loader/lib/compile/addStyles.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalStyles = __webpack_require__(/*! universal-styles */ "./node_modules/universal-styles/lib/index.js");

var _universalStyles2 = _interopRequireDefault(_universalStyles);

var _util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MIT License http://www.opensource.org/licenses/mit-license.php
 * Author Tobias Koppers @sokra (style-loader)
 * Refactored by Cole Chamberlain <cole.chamberlain@gmail.com> @noderaider (ES2016 / universal-style-loader)
 */

var universalContext = (0, _universalStyles2.default)();
exports.default = universalContext(function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  function memoize(fn) {
    var cache = {};
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var stringifiedArgs = JSON.stringify(args);
      var result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn.apply(undefined, args);
      return result;
    };
  }

  var isOldIE = memoize(function () {
    return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    );
  });
  var getHeadElement = memoize(function () {
    return document.head || document.getElementsByTagName('head')[0];
  });
  var stylesInDOM = {};
  var singletonElement = null;
  var singletonCounter = 0;
  var styleElementsInsertedAtTop = [];

  function addStyles(list, options, meta) {
    options = options || {};
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (typeof options.singleton === 'undefined') options.singleton = isOldIE();

    // By default, add <style> tags to the bottom of <head>.
    if (typeof options.insertAt === 'undefined') options.insertAt = 'bottom';

    var styles = listToStyles(list);
    addStylesToDOM(styles, options, meta);

    return function update(newList) {
      var mayRemove = [];
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDOM[item.id];
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
      if (newList) {
        var newStyles = listToStyles(newList);
        addStylesToDOM(newStyles, options, meta);
      }
      for (var i = 0; i < mayRemove.length; i++) {
        var domStyle = mayRemove[i];
        if (domStyle.refs === 0) {
          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j]();
          }delete stylesInDOM[domStyle.id];
        }
      }
    };
  }

  function addStylesToDOM(styles, options, meta) {
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDOM[item.id];
      if (domStyle) {
        domStyle.refs++;
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
        for (; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j], options, meta));
        }
      } else {
        var parts = [];
        for (var j = 0; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j], options, meta));
        }
        stylesInDOM[item.id] = { id: item.id, refs: 1, parts: parts };
      }
    }
  }

  function listToStyles(list) {
    var styles = [];
    var newStyles = {};
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = { css: css, media: media, sourceMap: sourceMap };
      if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
    }
    return styles;
  }

  function insertStyleElement(options, styleElement) {
    var head = getHeadElement();
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
    if (options.insertAt === 'top') {
      if (!lastStyleElementInsertedAtTop) {
        head.insertBefore(styleElement, head.firstChild);
      } else if (lastStyleElementInsertedAtTop.nextSibling) {
        head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
      } else {
        head.appendChild(styleElement);
      }
      styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
      head.appendChild(styleElement);
    } else {
      throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
  }

  function removeStyleElement(styleElement) {
    styleElement.parentNode.removeChild(styleElement);
    var idx = styleElementsInsertedAtTop.indexOf(styleElement);
    if (idx >= 0) styleElementsInsertedAtTop.splice(idx, 1);
  }

  function createStyleElement(options, meta) {
    //console.trace('createStyleElement => ', util.inspect(options))
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    setMetaAttributes(styleElement, meta);
    insertStyleElement(options, styleElement);
    return styleElement;
  }

  function createLinkElement(options, meta) {
    //console.trace('createLinkElement => ', util.inspect(options))
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    setMetaAttributes(linkElement, meta);
    insertStyleElement(options, linkElement);
    return linkElement;
  }

  function setMetaAttributes(element, meta) {
    if (meta.resourcePath) element.setAttribute('data-resource-path', meta.resourcePath);
  }

  function addStyle(obj, options, meta) {
    //console.trace('addStyle => ', util.inspect({ obj, options }))
    var styleElement, update, remove;

    if (options.singleton) {
      var styleIndex = singletonCounter++;
      styleElement = singletonElement || (singletonElement = createStyleElement(options, meta));
      update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
      remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
    } else if (obj.sourceMap && typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function') {
      styleElement = createLinkElement(options, meta);
      update = updateLink.bind(null, styleElement);
      remove = function remove() {
        removeStyleElement(styleElement);
        if (styleElement.href) URL.revokeObjectURL(styleElement.href);
      };
    } else {
      styleElement = createStyleElement(options, meta);
      update = applyToTag.bind(null, styleElement);
      remove = function remove() {
        removeStyleElement(styleElement);
      };
    }

    update(obj);

    return function updateStyle(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
        update(obj = newObj);
      } else {
        remove();
      }
    };
  }

  var replaceText = function () {
    var textStore = [];

    return function (index, replacement) {
      textStore[index] = replacement;
      return textStore.filter(Boolean).join('\n');
    };
  }();

  function applyToSingletonTag(styleElement, index, remove, obj) {
    var css = remove ? '' : obj.css;

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = replaceText(index, css);
    } else {
      var cssNode = document.createTextNode(css);
      var childNodes = styleElement.childNodes;
      if (childNodes[index]) styleElement.removeChild(childNodes[index]);
      if (childNodes.length) styleElement.insertBefore(cssNode, childNodes[index]);else styleElement.appendChild(cssNode);
    }
  }

  function applyToTag(styleElement, obj) {
    var css = obj.css;
    var media = obj.media;

    if (media) styleElement.setAttribute('media', media);

    if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }

  function updateLink(linkElement, obj) {
    var css = obj.css;
    var sourceMap = obj.sourceMap;

    if (sourceMap) {
      // http://stackoverflow.com/a/26603875
      css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }

    var blob = new Blob([css], { type: 'text/css' });
    var oldSrc = linkElement.href;
    linkElement.href = URL.createObjectURL(blob);
    if (oldSrc) URL.revokeObjectURL(oldSrc);
  }

  return addStyles.apply(undefined, args);
});

/***/ }),

/***/ "./node_modules/universal-styles/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-styles/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoutingError = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _RoutingError = __webpack_require__(/*! ./types/RoutingError */ "./node_modules/universal-styles/lib/types/RoutingError.js");

Object.defineProperty(exports, 'RoutingError', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RoutingError).default;
  }
});
exports.default = universalStyles;
exports.reactStyles = reactStyles;
exports.serializeStyles = serializeStyles;

var _bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _tryDefer = __webpack_require__(/*! try-defer */ "./node_modules/try-defer/lib/index.js");

var _dom = __webpack_require__(/*! ./utils/dom */ "./node_modules/universal-styles/lib/utils/dom.js");

var _util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var _util2 = _interopRequireDefault(_util);

var _router = __webpack_require__(/*! router */ "./node_modules/router/index.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function universalStyles() {
  /*
  console.warn('UNIVERSAL STYLES: EXECUTING')
  if(global.__universal__)
    return global.__universal__._context(fn)
  */

  var _browserDefer = (0, _tryDefer.browserDefer)({ tracing: true }),
      _browserDefer2 = _slicedToArray(_browserDefer, 2),
      _context = _browserDefer2[0],
      replay = _browserDefer2[1].replay;
  /*
  global.__universal__ =  { _context
                          , ...defer
                          }
                          */


  global.__universal__ = global.__universal__ || [];
  global.__universal__.push(replay);
  return _context;
}

function replay() {
  if (!global.__universal__) throw new Error('global.__universal__ DNE. You must use the webpack universal-style-loader to serialize styles.');
  global.__universal__.forEach(function (x) {
    return x(true, false);
  });
}

function reactStyles(React) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      processCSS = _ref.processCSS;

  function renderStyles(req) {
    return extractElements(req, processCSS).then(function (elements) {
      return elements.map(function (_ref2, i) {
        var tagName = _ref2.tagName,
            attributes = _ref2.attributes,
            children = _ref2.children;

        switch (tagName) {
          case 'style':
            return React.createElement('style', _extends({}, attributes, { dangerouslySetInnerHTML: { __html: children } }));
          case 'link':
            return React.createElement('link', attributes);
          default:
            throw new Error('Unsupported tagName => ' + tagName);
        }
      });
    });
  }

  return function universalMiddleware(renderers, route) {
    var router = new _router2.default();
    router.use(function (req, res, next) {
      route(renderers(req).then(function (_ref3) {
        var renderBody = _ref3.renderBody,
            renderHead = _ref3.renderHead,
            renderPage = _ref3.renderPage;

        var body = renderBody();
        return renderStyles(req).then(function (styles) {
          var head = renderHead(styles);
          var page = renderPage({ body: body, head: head });
          return page;
        });
      }), res, next);
    });
    return router;
  };
}

function serializeStyles(req) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      processCSS = _ref4.processCSS;

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    return _bluebird2.default.resolve(replay());
  } else {
    return extractElements(req, processCSS).then(function (elements) {
      return elements.map(function (_ref5) {
        var tagName = _ref5.tagName,
            attributes = _ref5.attributes,
            children = _ref5.children;

        var serialized = '<' + tagName + ' ' + Object.keys(attributes).map(function (x) {
          return x + '="' + attributes[x] + '"';
        }).join(' ') + (children ? '' : '/') + '>';
        return children ? serialized + '\n    ' + children + '\n  </' + tagName + '>' : serialized;
      }).join('\n');
    });
  }
}

function extractElements(req, processCSS) {
  var _createDOMContext = (0, _dom.createDOMContext)(replay)(req),
      result = _createDOMContext.result,
      dom = _createDOMContext.dom;

  console.trace(_util2.default.inspect(dom.document));
  var _dom$document = dom.document,
      head = _dom$document.head,
      body = _dom$document.body;

  return _bluebird2.default.all(head.childNodes.map(function (_ref6) {
    var tagName = _ref6.tagName,
        type = _ref6.type,
        media = _ref6.media,
        styleSheet = _ref6.styleSheet,
        href = _ref6.href,
        meta = _ref6.meta,
        childNodes = _ref6.childNodes;

    var _ret = function () {
      switch (tagName) {
        case 'style':
          var result = { tagName: tagName, attributes: { type: type, media: media }, meta: meta };
          var rawCSS = styleSheet ? styleSheet.cssText : childNodes[0].data;
          return {
            v: processCSS ? processCSS(rawCSS, result).then(function (children) {
              return _extends({}, result, { children: children });
            }) : _bluebird2.default.resolve(_extends({}, result, { children: rawCSS }))
          };
        case 'link':
          var attributes = { type: type, href: href };
          return {
            v: _bluebird2.default.resolve({ tagName: tagName, attributes: attributes })
          };
        default:
          throw new Error('Unsupported element tagName => ' + tagName + ', type => ' + type);
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/universal-styles/lib/types/RoutingError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/universal-styles/lib/types/RoutingError.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function resolveStatus(arg) {
  return typeof arg === 'string' ? { status: 500, statusMessage: arg } : _extends({ status: 500,
    statusMessage: 'A routing error occurred.'
  }, arg);
}

var RoutingError = function (_Error) {
  _inherits(RoutingError, _Error);

  function RoutingError(arg, fileName, lineNumber) {
    _classCallCheck(this, RoutingError);

    var _resolveStatus = resolveStatus(arg),
        status = _resolveStatus.status,
        statusMessage = _resolveStatus.statusMessage,
        redirectLocation = _resolveStatus.redirectLocation,
        error = _resolveStatus.error;

    var _this = _possibleConstructorReturn(this, (RoutingError.__proto__ || Object.getPrototypeOf(RoutingError)).call(this, statusMessage, fileName, lineNumber));

    _this.name = 'RoutingError';
    _this.status = status;
    _this.statusMessage = statusMessage;
    _this.redirect = redirect;
    _this.message = statusMessage;
    _this.innerError = error;
    if (Error.captureStackTrace) Error.captureStackTrace(_this, _this.constructor.name);else _this.stack = new Error().stack;
    return _this;
  }

  return RoutingError;
}(Error);

exports.default = RoutingError;

/***/ }),

/***/ "./node_modules/universal-styles/lib/utils/applyCapitalization.js":
/*!************************************************************************!*\
  !*** ./node_modules/universal-styles/lib/utils/applyCapitalization.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyCapitalization;
function applyCapitalization(str) {
  var minLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return str.length < minLength ? str.toUpperCase() : "" + str[0].toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/universal-styles/lib/utils/dom.js":
/*!********************************************************!*\
  !*** ./node_modules/universal-styles/lib/utils/dom.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDOM = createDOM;
exports.removeDOM = removeDOM;
exports.createDOMContext = createDOMContext;

var _applyCapitalization = __webpack_require__(/*! ./applyCapitalization */ "./node_modules/universal-styles/lib/utils/applyCapitalization.js");

var _applyCapitalization2 = _interopRequireDefault(_applyCapitalization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDOM(req) {
  var userAgent = req.headers['user-agent'];
  var navigator = { userAgent: userAgent };

  var elements = [];
  function createElement(tagName) {
    var attributes = new Map();
    var nodes = { parent: null, children: [] };
    var meta = {};
    function setAttribute(name, value) {
      if (name.startsWith('data-')) {
        var attrName = name.split('-').slice(1).map(function (x, i) {
          return i > 0 ? (0, _applyCapitalization2.default)(x) : x;
        }).join('');
        meta[attrName] = value;
      }
      attributes.set(name, value);
    }
    function getAttribute(name) {
      return attributes.get(name);
    }
    function hasAttribute(name) {
      return attributes.has(name);
    }
    function removeAttribute(name) {
      return attributes.remove(name);
    }

    var element = { tagName: tagName,
      setAttribute: setAttribute,
      getAttribute: getAttribute,
      hasAttribute: hasAttribute,
      removeAttribute: removeAttribute,
      get meta() {
        return meta;
      },
      get childNodes() {
        return nodes.children;
      }
    };

    function insertBefore(beforeNode, node) {
      var insertAt = nodes.children.map(function (x) {
        return x._id;
      }).indexOf(beforeNode._id);
      node.parentNode = element;
      nodes.children = nodes.children.splice(insertAt, 0, node);
    }
    function appendChild(node) {
      node.parentNode = element;
      nodes.children.push(node);
    }
    function removeChild(node) {
      node.parentNode = null;
      nodes.children = nodes.children.filter(function (x) {
        return x._id !== node._id;
      });
    }

    element.insertBefore = insertBefore;
    element.appendChild = appendChild;
    element.removeChild = removeChild;

    switch (tagName) {
      case 'style':
        element.styleSheet = {};
      case 'link':
    }
    elements.push(element);
    return element;
  }
  function createTextNode(data) {
    return { data: data };
  }
  function getElementsByTagName(tagName) {
    return elements.filter(function (x) {
      return x.tagName === tagName;
    });
  }
  function getElementById(id) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        if (element.id === id) return element;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  var head = createElement('head');
  var body = createElement('body');
  var document = { head: head,
    body: body,
    createElement: createElement,
    createTextNode: createTextNode,
    getElementsByTagName: getElementsByTagName,
    getElementById: getElementById
  };
  global.window = { document: document, navigator: navigator };
  global.document = document;
}

function removeDOM() {
  var dom = { window: global.window,
    document: global.document
  };
  delete global.document;
  delete global.window;
  return dom;
}

function createDOMContext(fn) {
  return function execute(req) {
    createDOM(req);
    var result = fn();
    var dom = removeDOM();
    return { result: result, dom: dom };
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/utils-merge/index.js":
/*!*******************************************!*\
  !*** ./node_modules/utils-merge/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Merge object b with object a.
 *
 *     var a = { foo: 'bar' }
 *       , b = { bar: 'baz' };
 *
 *     merge(a, b);
 *     // => { foo: 'bar', bar: 'baz' }
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object}
 * @api public
 */

exports = module.exports = function(a, b){
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/Classes/BuilderFactory.ts":
/*!******************************************!*\
  !*** ./src/js/Classes/BuilderFactory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ../Enums */ "./src/js/Enums/index.ts");
var _1 = __webpack_require__(/*! ./ */ "./src/js/Classes/index.ts");
var BuilderFactory = (function () {
    function BuilderFactory() {
    }
    BuilderFactory.prototype.create = function (options) {
        switch (options.style) {
            case Enums_1.Style.OSX:
                return new _1.OsxBuilder(options);
            case Enums_1.Style.UBUNTU:
                return new _1.UbuntuBuilder(options);
            case Enums_1.Style.WINDOWS:
                return new _1.WindowsBuilder(options);
            default:
                return new _1.DefaultBuilder(options);
        }
    };
    return BuilderFactory;
}());
exports.BuilderFactory = BuilderFactory;


/***/ }),

/***/ "./src/js/Classes/DefaultBuilder.ts":
/*!******************************************!*\
  !*** ./src/js/Classes/DefaultBuilder.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Shell_1 = __webpack_require__(/*! ./Shell */ "./src/js/Classes/Shell.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/js/util.ts");
var DefaultBuilder = (function () {
    function DefaultBuilder(o) {
        this._char = "$";
        this.cursor = "&nbsp;";
        this.options = o;
    }
    Object.defineProperty(DefaultBuilder.prototype, "char", {
        get: function () {
            return this.options.root ? "#" : this._char;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultBuilder.prototype, "user", {
        get: function () {
            return this.options.root ? "root" : this.options.user;
        },
        enumerable: true,
        configurable: true
    });
    DefaultBuilder.prototype.create = function () {
        this.shell = new Shell_1.Shell;
    };
    DefaultBuilder.prototype.get = function () {
        return util_1.expand(this.shell.toString());
    };
    DefaultBuilder.prototype.addStatusBar = function () {
        this.shell.statusBar = "(.status-bar>" +
            "(.buttons>(button.icon-close+button.icon-minimize+button.icon-enlarge))+" +
            ("(.title>{" + this.user + "@" + this.options.host + ": " + this.options.path + "})") +
            ")";
    };
    DefaultBuilder.prototype.addContent = function () {
        var _this = this;
        var content = "(.content>(";
        var counter = 0;
        var loginParams = this.login(counter);
        if (Object.keys(loginParams).length) {
            content += this.buildLine(loginParams);
            counter++;
        }
        if (this.options.commands.length) {
            this.options.commands.forEach(function (command) {
                var params = {
                    command: command,
                    counter: counter,
                    output: null
                };
                if (counter > 0) {
                    content += "+";
                }
                content += _this.buildLine(params);
                if (/sudo/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = _this.sudo(params);
                    content += "+" + _this.buildLine(params);
                }
                if (/exit/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = _this.logout(params);
                    content += "+" + _this.buildLine(params);
                }
                counter++;
            });
            content += "+" + this.buildLine({ counter: counter, empty: true });
        }
        content += "))";
        this.shell.content = content;
    };
    DefaultBuilder.prototype.buildLine = function (params) {
        var line = "(";
        var classes = ["line", "line-" + params.counter];
        params = __assign({
            counter: 0,
            empty: false,
            command: null,
            output: false
        }, params);
        if (this.options.root) {
            classes.push("root");
        }
        else {
            var idx = classes.indexOf("root");
            if (idx != -1) {
                classes = classes.splice(idx, 1);
            }
        }
        if (params.empty) {
            if (!this.options.typed) {
                classes.push("active");
            }
            line += "." + classes.join(".") + ">(" + this.getPrefix() + "+span.command>span.typed-cursor{" + this.cursor + "})";
        }
        else {
            line += "." + classes.join(".") + ">(";
            if (params.command) {
                line += (params.output ? "" : this.getPrefix() + "+") +
                    ("span.command" + (params.output ? ".output" : "") + ">{ " + params.command + "}");
            }
            line += ")";
        }
        line += ")";
        return line;
    };
    DefaultBuilder.prototype.getPrefix = function () {
        return "(span.prefix>(" +
            ("span.user{" + this.user + "@}+") +
            ("span.host{" + this.options.host + "}+") +
            "span.colon{:}+" +
            ("span.path{" + this.options.path + "}+") +
            ("span.char{" + this.char + "}") +
            "))";
    };
    DefaultBuilder.prototype.sudo = function (params) {
        this.options.root = true;
        params.command = "[sudo] password for " + this.options.user + ":";
        params.output = true;
        return params;
    };
    DefaultBuilder.prototype.logout = function (params) {
        this.options.root = false;
        params.command = "logout";
        params.output = true;
        return params;
    };
    DefaultBuilder.prototype.login = function (counter) {
        return {};
    };
    return DefaultBuilder;
}());
exports.DefaultBuilder = DefaultBuilder;


/***/ }),

/***/ "./src/js/Classes/Director.ts":
/*!************************************!*\
  !*** ./src/js/Classes/Director.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Director = (function () {
    function Director() {
    }
    Director.prototype.build = function (builder) {
        builder.create();
        builder.addStatusBar();
        builder.addContent();
        return builder.get();
    };
    return Director;
}());
exports.Director = Director;


/***/ }),

/***/ "./src/js/Classes/OsxBuilder.ts":
/*!**************************************!*\
  !*** ./src/js/Classes/OsxBuilder.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "./src/js/Classes/index.ts");
var util_1 = __webpack_require__(/*! ../util */ "./src/js/util.ts");
var OsxBuilder = (function (_super) {
    __extends(OsxBuilder, _super);
    function OsxBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columns = 80;
        _this.rows = 24;
        return _this;
    }
    OsxBuilder.prototype.addStatusBar = function () {
        this.shell.statusBar = "(.status-bar>" +
            "(.buttons>(button.icon-close.icon-dot+button.icon-minimize+button.icon-enlarge))+" +
            ("(.title>{" + this.user + " \u2012 sh \u2012 " + (this.columns + "x" + this.rows) + "})") +
            ")";
    };
    OsxBuilder.prototype.getPrefix = function () {
        return "(span.prefix>(" +
            ("span.host{" + this.options.host + "}+") +
            "span.colon{:}+" +
            ("span.path{" + this.options.path + "}+") +
            ("span.user{ " + this.user + "}+") +
            ("span.char{" + this.char + "}") +
            "))";
    };
    OsxBuilder.prototype.login = function (counter) {
        var date = new Date();
        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var hours = util_1.strPad(date.getHours().toString(), 2, "STR_PAD_LEFT");
        var minutes = util_1.strPad(date.getMinutes().toString(), 2, "STR_PAD_LEFT");
        var seconds = util_1.strPad(date.getSeconds().toString(), 2, "STR_PAD_LEFT");
        return {
            command: "Last login: " + days[date.getDay()] + " " + months[date.getMonth()] + " " + hours + ":" + minutes + ":" + seconds + " on ttys000",
            output: true,
            counter: counter
        };
    };
    OsxBuilder.prototype.sudo = function (params) {
        params = _super.prototype.sudo.call(this, params);
        params.command = "Password: <span class=\"icon-key\"></span>";
        return params;
    };
    return OsxBuilder;
}(_1.DefaultBuilder));
exports.OsxBuilder = OsxBuilder;


/***/ }),

/***/ "./src/js/Classes/Shell.ts":
/*!*********************************!*\
  !*** ./src/js/Classes/Shell.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shell = (function () {
    function Shell() {
    }
    Object.defineProperty(Shell.prototype, "statusBar", {
        set: function (value) {
            this._statusBar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shell.prototype, "content", {
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Shell.prototype.toString = function () {
        return this._statusBar + this._content;
    };
    return Shell;
}());
exports.Shell = Shell;


/***/ }),

/***/ "./src/js/Classes/UbuntuBuilder.ts":
/*!*****************************************!*\
  !*** ./src/js/Classes/UbuntuBuilder.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "./src/js/Classes/index.ts");
var UbuntuBuilder = (function (_super) {
    __extends(UbuntuBuilder, _super);
    function UbuntuBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UbuntuBuilder.prototype.addStatusBar = function () {
        this.shell.statusBar = "(.status-bar>" +
            "(.buttons>(button.icon-close+button.icon-minimize+button.icon-enlarge))+" +
            ("(.title>{" + this.user + "@" + this.options.host + ": " + this.options.path + "})") +
            ")";
    };
    UbuntuBuilder.prototype.getPrefix = function () {
        return "(span.prefix>(" +
            ("span.user{" + this.user + "@}+") +
            ("span.host{" + this.options.host + "}+") +
            "span.colon{:}+" +
            ("span.path{" + this.options.path + "}+") +
            ("span.char{" + this.char + "}") +
            "))";
    };
    return UbuntuBuilder;
}(_1.DefaultBuilder));
exports.UbuntuBuilder = UbuntuBuilder;


/***/ }),

/***/ "./src/js/Classes/WindowsBuilder.ts":
/*!******************************************!*\
  !*** ./src/js/Classes/WindowsBuilder.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! ./ */ "./src/js/Classes/index.ts");
var WindowsBuilder = (function (_super) {
    __extends(WindowsBuilder, _super);
    function WindowsBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._char = "&gt;";
        return _this;
    }
    WindowsBuilder.prototype.addStatusBar = function () {
        this.shell.statusBar = "(.status-bar>(" +
            "(.buttons>(button.icon-minimize+button.icon-enlarge+button.icon-close))+" +
            "(.icon>i.icon-command)+" +
            "(.title>{Command Prompt})" +
            "))";
    };
    WindowsBuilder.prototype.getPrefix = function () {
        return "(span.prefix>(" +
            ("span.path{" + this.options.path + "}+") +
            ("span.char{" + this.char + "}") +
            "))";
    };
    WindowsBuilder.prototype.sudo = function (params) {
        params = _super.prototype.sudo.call(this, params);
        this.options.root = false;
        params.command = "bash: sudo: command not found";
        return params;
    };
    WindowsBuilder.prototype.logout = function (params) {
        params = _super.prototype.sudo.call(this, params);
        this.options.root = false;
        params.command = "bash: exit: command not found";
        return params;
    };
    return WindowsBuilder;
}(_1.DefaultBuilder));
exports.WindowsBuilder = WindowsBuilder;


/***/ }),

/***/ "./src/js/Classes/index.ts":
/*!*********************************!*\
  !*** ./src/js/Classes/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./BuilderFactory */ "./src/js/Classes/BuilderFactory.ts"));
__export(__webpack_require__(/*! ./Director */ "./src/js/Classes/Director.ts"));
__export(__webpack_require__(/*! ./Shell */ "./src/js/Classes/Shell.ts"));
__export(__webpack_require__(/*! ./DefaultBuilder */ "./src/js/Classes/DefaultBuilder.ts"));
__export(__webpack_require__(/*! ./OsxBuilder */ "./src/js/Classes/OsxBuilder.ts"));
__export(__webpack_require__(/*! ./UbuntuBuilder */ "./src/js/Classes/UbuntuBuilder.ts"));
__export(__webpack_require__(/*! ./WindowsBuilder */ "./src/js/Classes/WindowsBuilder.ts"));


/***/ }),

/***/ "./src/js/Enums/Style.ts":
/*!*******************************!*\
  !*** ./src/js/Enums/Style.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Style;
(function (Style) {
    Style["DEFAULT"] = "default";
    Style["OSX"] = "osx";
    Style["UBUNTU"] = "ubuntu";
    Style["WINDOWS"] = "windows";
})(Style = exports.Style || (exports.Style = {}));


/***/ }),

/***/ "./src/js/Enums/Theme.ts":
/*!*******************************!*\
  !*** ./src/js/Enums/Theme.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Theme;
(function (Theme) {
    Theme["DARK"] = "dark";
    Theme["LIGHT"] = "light";
})(Theme = exports.Theme || (exports.Theme = {}));


/***/ }),

/***/ "./src/js/Enums/index.ts":
/*!*******************************!*\
  !*** ./src/js/Enums/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Style */ "./src/js/Enums/Style.ts"));
__export(__webpack_require__(/*! ./Theme */ "./src/js/Enums/Theme.ts"));


/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
var Classes_1 = __webpack_require__(/*! ./Classes */ "./src/js/Classes/index.ts");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/js/Enums/index.ts");
var util_1 = __webpack_require__(/*! ./util */ "./src/js/util.ts");
module.exports = (function () {
    function Shell(selector, options) {
        this.name = "shell";
        this.options = {
            commands: [],
            host: "host",
            path: "~",
            responsive: true,
            root: false,
            style: Enums_1.Style.DEFAULT,
            theme: Enums_1.Theme.DARK,
            typed: null,
            user: "user"
        };
        if (util_1.$(selector).length) {
            this.el = util_1.$(selector)[0];
            this.director = new Classes_1.Director();
            this.factory = new Classes_1.BuilderFactory();
            this.options = __assign({}, this.options, options);
            if (this.options.style === "windows" && this.options.path === "~") {
                this.options.path = "C:\\Windows\\system32\\";
            }
            this.init();
        }
    }
    Shell.prototype.addClassNames = function () {
        var classes = [this.name, this.options.theme];
        if (this.options.style !== "default") {
            classes.push(this.options.style);
        }
        if (this.options.responsive) {
            classes.push("responsive");
        }
        if (this.options.typed) {
            classes.push("typed");
        }
        var currentClasses = this.el.className.split(" ").filter(function (className) { return className !== ""; });
        currentClasses = util_1.arrDiff(currentClasses, classes);
        this.el.className = currentClasses.join(" ") + " " + classes.join(" ");
    };
    Shell.prototype.bindTyping = function () {
        if (this.options.typed && typeof this.options.typed === "function") {
            var commandsNum = util_1.$(".line", this.el).length;
            if (commandsNum) {
                this.type(0, commandsNum);
            }
        }
        else {
            this.el.className = this.el.className.replace(" typed", "");
        }
    };
    Shell.prototype.init = function () {
        this.addClassNames();
        var builder = this.factory.create(this.options);
        this.el.innerHTML = this.director.build(builder);
        this.bindTyping();
    };
    Shell.prototype.type = function (index, commandsNum) {
        var _this = this;
        var typed = this.options.typed;
        var line = util_1.$(".line-" + index, this.el);
        var speed = "^800";
        if (line.length) {
            var command = util_1.$(".command", line[0]);
            var commandText = command[0].innerHTML;
            line[0].className = "active " + line[0].className;
            if (command[0].className.indexOf("output") === -1 && index < commandsNum - 1) {
                command[0].innerHTML = "";
                new typed(command[0], {
                    strings: [speed + commandText],
                    typeSpeed: 50,
                    loop: false,
                    contentType: "html",
                    cursorChar: "&nbsp;",
                    showCursor: true,
                    onStringTyped: function () {
                        line[0].removeChild(util_1.$(".typed-cursor", line[0])[0]);
                        _this.type((index + 1), commandsNum);
                    }
                });
            }
            else if (index <= commandsNum - 2) {
                this.type((index + 1), commandsNum);
            }
        }
    };
    ;
    return Shell;
}());


/***/ }),

/***/ "./src/js/util.ts":
/*!************************!*\
  !*** ./src/js/util.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var expand_abbreviation_1 = __webpack_require__(/*! @emmetio/expand-abbreviation */ "./node_modules/@emmetio/expand-abbreviation/dist/expand.es.js");
var Subtract = __webpack_require__(/*! array-subtract */ "./node_modules/array-subtract/lib/index.js");
var PadType;
(function (PadType) {
    PadType["STR_PAD_BOTH"] = "STR_PAD_BOTH";
    PadType["STR_PAD_LEFT"] = "STR_PAD_LEFT";
    PadType["STR_PAD_RIGHT"] = "STR_PAD_RIGHT";
})(PadType = exports.PadType || (exports.PadType = {}));
function strPad(input, length, string, type) {
    if (type === void 0) { type = PadType.STR_PAD_RIGHT; }
    var half = "";
    var padToGo;
    var repeater = function (s, len) {
        var collect = "";
        while (collect.length < len) {
            collect += s;
        }
        collect = collect.substr(0, len);
        return collect;
    };
    if ((padToGo = length - input.length) > 0) {
        switch (type) {
            case PadType.STR_PAD_BOTH:
                half = repeater(string, Math.ceil(padToGo / 2));
                input = half + input + half;
                input = input.substr(0, length);
                break;
            case PadType.STR_PAD_LEFT:
                input = repeater(string, padToGo) + input;
                break;
            case PadType.STR_PAD_RIGHT:
            default:
                input = input + repeater(string, padToGo);
                break;
        }
    }
    return input;
}
exports.strPad = strPad;
function arrDiff(a1, a2) {
    return (new Subtract(function (a, b) {
        return a === b;
    })).sub(a1, a2);
}
exports.arrDiff = arrDiff;
function $(selector, parent) {
    if (parent === void 0) { parent = window.document; }
    return parent.querySelectorAll(selector);
}
exports.$ = $;
function expand(source, minify, options) {
    if (minify === void 0) { minify = true; }
    source = source.replace(/\\/g, "\\\\");
    var html = expand_abbreviation_1.expand(source, options);
    if (minify) {
        html = html.replace(/\n|\r|\t/g, "");
    }
    html = html.replace(/\\\\/g, "\\");
    return html;
}
exports.expand = expand;


/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** universal-style-loader/lib/index.js => pitch: start */

/** Adds some css to the DOM by adding a <style> tag */

/** load the styles */
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss");
if(typeof content === 'string')
  content = [[module.i, content, '']];

/** add the styles to the DOM */
var update = __webpack_require__(/*! ../../node_modules/universal-style-loader/lib/compile/addStyles.js */ "./node_modules/universal-style-loader/lib/compile/addStyles.js").default(content, {}, {"resourcePath":"/private/var/www/shell.js/src/sass/main.scss"});
if(content.locals) module.exports = content.locals;

/** Hot Module Replacement */
if(false) {}
/** universal-style-loader/lib/index.js => pitch: end */

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/sass/main.scss ./src/js/main.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /private/var/www/shell.js/src/sass/main.scss */"./src/sass/main.scss");
module.exports = __webpack_require__(/*! /private/var/www/shell.js/src/js/main.ts */"./src/js/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=shell.js.map