/*!
 * shell.js - A JavaScript and CSS library to create terminals
 * Author: Davide Caruso <davide.caruso93@gmail.com>
 * Version: v2.0.3
 * URL: https://github.com/davidecaruso/shell.js
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
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./shell.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./shell.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(10);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Replace all occurrences of the search string with the replacement string\n * @param $search: The value being searched for, otherwise known as the needle.\n * @param $replace: The replacement value that replaces found search values.\n * @param $subject: The string being searched and replaced on, otherwise known as the haystack.\n */\n.shell {\n  font-family: sans-serif; }\n\n.shell .content {\n  font-family: monospace; }\n\nbody {\n  font-style: normal; }\n\nbody {\n  font-weight: 400; }\n\n@media (min-width: 320px) and (max-width: 767px) {\n  body {\n    font-size: 7.5px; } }\n\n@font-face {\n  font-family: 'shell';\n  src: url(" + __webpack_require__(1) + ");\n  src: url(" + __webpack_require__(1) + "#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(5) + ") format(\"truetype\"), url(" + __webpack_require__(6) + ") format(\"woff\"), url(" + __webpack_require__(7) + "#icomoon) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  font-family: 'shell' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-close:before {\n  content: \"\\E5CD\"; }\n\n.icon-enlarge:before {\n  content: \"\\E3C1\"; }\n\n.icon-folder:before {\n  content: \"\\E2C7\"; }\n\n.icon-command:before {\n  content: \"\\E5DD\"; }\n\n.icon-minimize:before {\n  content: \"\\E15B\"; }\n\n.icon-dot:before {\n  content: \"\\E900\"; }\n\n.icon-key:before {\n  content: \"\\E901\"; }\n\n.shell {\n  width: 400px;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  position: relative;\n  text-align: left;\n  color: #F1F1F1;\n  overflow: hidden;\n  font-weight: 300;\n  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 2px; }\n  .shell.responsive {\n    width: 100%;\n    height: 100%;\n    min-height: 200px; }\n  .shell.typed .content .line {\n    display: none; }\n  .shell .status-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 21px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background: #333333;\n    border: 1px solid #292929;\n    border-bottom: 0; }\n    .shell .status-bar .buttons {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2; }\n      .shell .status-bar .buttons button {\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        border: 0;\n        padding: 0;\n        outline: none;\n        text-align: center;\n        margin: 0 2px;\n        border-radius: 50%;\n        width: 15px;\n        height: 15px;\n        font-size: 13.5px;\n        line-height: 11.25px; }\n        .shell .status-bar .buttons button i {\n          text-align: center;\n          width: 100%;\n          height: 15px;\n          display: block;\n          font-size: 7.5px;\n          line-height: 11.25px; }\n        .shell .status-bar .buttons button.icon-close {\n          background: #FF4F37;\n          color: #FF4F37; }\n          .shell .status-bar .buttons button.icon-close:hover {\n            color: #841000; }\n        .shell .status-bar .buttons button.icon-minimize {\n          background: #FEC600;\n          color: #FEC600; }\n          .shell .status-bar .buttons button.icon-minimize:hover {\n            color: #987600; }\n        .shell .status-bar .buttons button.icon-enlarge {\n          background: #00DB51;\n          color: #00DB51; }\n          .shell .status-bar .buttons button.icon-enlarge:hover {\n            color: #00752b; }\n    .shell .status-bar .title {\n      font-size: 12px;\n      line-height: 20.25px;\n      text-align: left;\n      -webkit-box-flex: 98;\n          -ms-flex-positive: 98;\n              flex-grow: 98; }\n  .shell .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 1px solid #292929;\n    padding: 1px;\n    font-size: 12px;\n    line-height: 13.5px;\n    background: #292929;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .shell .content .line.active {\n      display: block; }\n    .shell .content .line .prefix .user {\n      color: #8AD733; }\n    .shell .content .line .prefix .host {\n      color: #8AD733; }\n    .shell .content .line .prefix .path {\n      color: #729FCF; }\n    .shell .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.light .content {\n    color: #878787;\n    border-color: #EBEBEB;\n    background: #FFFFFF; }\n  .shell.light .typed-cursor {\n    background-color: #878787; }\n  .shell .typed-cursor {\n    opacity: 1;\n    background-color: #F1F1F1;\n    -webkit-animation: blink 1s infinite;\n            animation: blink 1s infinite; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n  .shell.ubuntu .status-bar {\n    border-color: transparent;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#3F3F3F), to(#585858));\n    background-image: linear-gradient(to bottom, #3F3F3F 0%, #585858 100%); }\n    .shell.ubuntu .status-bar .icon {\n      display: none; }\n    .shell.ubuntu .status-bar .title {\n      color: #FFFFFF; }\n    .shell.ubuntu .status-bar .buttons button.icon-close {\n      background: #D75224;\n      color: #444444; }\n      .shell.ubuntu .status-bar .buttons button.icon-close:hover {\n        color: #A21F2C; }\n    .shell.ubuntu .status-bar .buttons button.icon-minimize {\n      background: #898989;\n      color: #555555; }\n      .shell.ubuntu .status-bar .buttons button.icon-minimize:hover {\n        color: #555555; }\n    .shell.ubuntu .status-bar .buttons button.icon-enlarge {\n      background: #898989;\n      color: #555555; }\n      .shell.ubuntu .status-bar .buttons button.icon-enlarge:hover {\n        color: #555555; }\n  .shell.ubuntu .content {\n    border-color: transparent;\n    background: #300924; }\n    .shell.ubuntu .content .line .prefix .user {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .host {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .path {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.ubuntu.light {\n    color: #878787; }\n    .shell.ubuntu.light .content {\n      background: #FFFFFF; }\n      .shell.ubuntu.light .content .line .prefix .user {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .host {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .path {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .root .user {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .root .host {\n        color: #878787; }\n      .shell.ubuntu.light .content .line .prefix .root .path {\n        color: #878787; }\n  .shell.osx .status-bar {\n    border-color: #EBEBEB;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#CBCBCB));\n    background-image: linear-gradient(to bottom, #EBEBEB 0%, #CBCBCB 100%); }\n    .shell.osx .status-bar .title {\n      color: #878787;\n      text-align: center; }\n  .shell.osx .content {\n    background: rgba(0, 0, 0, 0.9); }\n    .shell.osx .content .line .prefix .user {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .host {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .path {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.osx.light {\n    color: #878787; }\n    .shell.osx.light .content {\n      border-color: #EBEBEB;\n      background: #FFFFFF; }\n      .shell.osx.light .content .line .prefix .user {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .host {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .path {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .root .user {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .root .host {\n        color: #878787; }\n      .shell.osx.light .content .line .prefix .root .path {\n        color: #878787; }\n  .shell.windows {\n    color: #FFFFFF;\n    border-radius: 0;\n    -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5); }\n    .shell.windows .status-bar {\n      border: 0;\n      height: 30px;\n      background-color: #69C1F0; }\n      .shell.windows .status-bar .buttons {\n        -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n                align-items: stretch;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n        padding: 0; }\n        .shell.windows .status-bar .buttons button {\n          margin: 0;\n          border-radius: 0;\n          width: 25px;\n          height: 20px;\n          font-size: 13.5px;\n          line-height: 15px; }\n          .shell.windows .status-bar .buttons button i {\n            width: 100%;\n            height: 20px;\n            font-size: 7.5px;\n            line-height: 15px; }\n          .shell.windows .status-bar .buttons button.icon-close {\n            width: 50px;\n            background: #C75050;\n            color: #FFFFFF; }\n            .shell.windows .status-bar .buttons button.icon-close:hover {\n              background: #c03d3d;\n              color: #FFFFFF; }\n          .shell.windows .status-bar .buttons button.icon-minimize {\n            background: transparent;\n            color: #292929; }\n            .shell.windows .status-bar .buttons button.icon-minimize:hover {\n              background: #1698dd;\n              color: #FFFFFF; }\n          .shell.windows .status-bar .buttons button.icon-enlarge {\n            background: transparent;\n            color: #292929; }\n            .shell.windows .status-bar .buttons button.icon-enlarge:hover {\n              background: #1698dd;\n              color: #FFFFFF; }\n      .shell.windows .status-bar .icon {\n        background: #000000;\n        color: #FFFFFF;\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        font-size: 9px;\n        line-height: 15px;\n        border-radius: 3px;\n        margin: 5px; }\n      .shell.windows .status-bar .title {\n        font-size: 12px;\n        line-height: 30px;\n        color: #292929; }\n    .shell.windows .content {\n      border-color: #69C1F0;\n      background: #000000; }\n      .shell.windows .content .line .prefix .user {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .host {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .path {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .user {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .host {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .path {\n        color: #FFFFFF; }\n", ""]);

// exports


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlMTViOyIgZ2x5cGgtbmFtZT0ibWluaW1pemUiIGQ9Ik04MTAgMzg0LjY2N2gtNTk2djg0aDU5NnYtODR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTJjNzsiIGdseXBoLW5hbWU9ImZvbGRlciIgZD0iTTQyNiA3NjguNjY3bDg2LTg2aDM0MmM0NiAwIDg0LTQwIDg0LTg2di00MjZjMC00Ni0zOC04Ni04NC04NmgtNjg0Yy00NiAwLTg0IDQwLTg0IDg2djUxMmMwIDQ2IDM4IDg2IDg0IDg2aDI1NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlM2MxOyIgZ2x5cGgtbmFtZT0iZW5sYXJnZSIgZD0iTTgxMCAxMjguNjY3djU5NmgtNTk2di01OTZoNTk2ek04MTAgODEwLjY2N2M0NiAwIDg2LTQwIDg2LTg2di01OTZjMC00Ni00MC04Ni04Ni04NmgtNTk2Yy00NiAwLTg2IDQwLTg2IDg2djU5NmMwIDQ2IDQwIDg2IDg2IDg2aDU5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNWNkOyIgZ2x5cGgtbmFtZT0iY2xvc2UiIGQ9Ik04MTAgNjY0LjY2N2wtMjM4LTIzOCAyMzgtMjM4LTYwLTYwLTIzOCAyMzgtMjM4LTIzOC02MCA2MCAyMzggMjM4LTIzOCAyMzggNjAgNjAgMjM4LTIzOCAyMzggMjM4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU1ZGQ7IiBnbHlwaC1uYW1lPSJjb21tYW5kIiBkPSJNNjgyIDY4Mi42NjdoODZ2LTUxMmgtODZ2NTEyek0yMzggNjIyLjY2N2w2MCA2MCAyNTYtMjU2LTI1Ni0yNTYtNjAgNjAgMTk2IDE5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0iZG90IiBkPSJNMzk5LjM2IDQ2MC44YzAtNjIuMjA4IDUwLjQ4My0xMTIuNjQgMTEyLjY5MS0xMTIuNjRzMTEyLjU4OSA1MC40ODMgMTEyLjU4OSAxMTIuNjRjMCA2Mi4yMDgtNTAuMzgxIDExMi41ODktMTEyLjU4OSAxMTIuNTg5cy0xMTIuNjkxLTUwLjM4MS0xMTIuNjkxLTExMi41ODl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImtleSIgZD0iTTkwNS43NzkgNzMwLjg4Yy0yNS43NTQgMTUyLjQyMi0xNjQuODY0IDI1NC4zMS0zMTAuNzMzIDIyNy4zNzktMTQ1LjkyLTI2Ljg4LTI2OS4xMDctMTQ0LjE3OS0yNDMuMzU0LTI5Ni43MDQgNS40NzgtMzIuODE5IDIwLjg5LTg0LjE3MyAzOS4wNjYtMTIxLjA4OGwtMjY0Ljk2LTM5NS40MThjLTkuNzc5LTE0LjU5Mi0xNS4zMDktNDAuOTA5LTEyLjM5LTU4LjQxOWwxNy4wNTAtMTAwLjkxNWMyLjk3LTE3LjUxIDE5LjA0Ni0yOS4yODYgMzUuODQtMjYuMzE3bDc3LjYxOSAxNC4zODdjMTYuNzk0IDMuMDIxIDM4LjA5MyAxNy44MTggNDcuMzA5IDMyLjcxN2wxMDQuODA2IDE2OS41MjMgMC45MjIgMS4xMjYgNzAuOTYzIDEzLjEwNyAxMjIuMzY4IDE5OC42MDVjNDAuMTkyLTcuMTE3IDk3Ljg5NC00LjcxIDEzMS45OTQgMS41ODcgMTQ1LjgxOCAyNi45MzEgMjA5LjI1NCAxODcuOTA0IDE4My41MDEgMzQwLjQyOXpNNzc2LjQ5OSA2NTIuNjk4Yy00MC4xNDEtNTkuOTA0LTgxLjEwMS0xNy43MTUtMTM4LjM5NCAyNC4zMi01Ny4yOTMgNDEuODgyLTEwOS4zMTIgNjcuNjg2LTY5LjIyMiAxMjcuNTkgNDAuMTQxIDU5LjkwNCAxMTkuMDkxIDc0LjQ5NiAxNzYuNDg2IDMyLjUxMiA1Ny4zNDQtNDEuOTMzIDcxLjIxOS0xMjQuNTE4IDMxLjEzLTE4NC40MjJ6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = __webpack_require__(11);

var _defaults2 = _interopRequireDefault(_defaults);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Shell.js
 * @param {string} elementSelector HTML element selector _OR_ HTML element
 * @param {object} options options object
 * @returns {object} a new Typed object
 */
module.exports = function () {
  function Shell(elementSelector, options) {
    _classCallCheck(this, Shell);

    this.initialize(elementSelector, options);
    this.build();
  }

  /**
   * Load up defaults & options on the Shell instance
   * @param {string} elementSelector HTML element ID || instance of HTML element
   * @param {object} options options object
   * @static
   * @private
   */


  _createClass(Shell, [{
    key: 'initialize',
    value: function initialize(elementSelector, options) {

      this.el = null;
      if (typeof elementSelector === 'string') {
        var el = document.querySelectorAll(elementSelector);
        if (el.length) {
          this.el = el;
        }
      }

      this.options = _extends({}, _defaults2.default, options);

      /// Hardcode for Windows
      if (this.options.style === 'windows' && this.options.path === '~') {
        this.options.path = 'C:\\Windows\\system32\\';
      }
    }
  }, {
    key: 'build',
    value: function build() {
      var _this = this;

      if (this.el) {
        /// HTML element's classes
        var classes = ['shell', this.options.style, this.options.theme];
        if (this.options.responsive) classes.push('responsive');
        if (this.options.shadow) classes.push('shadow');
        if (this.options.typed) classes.push('typed');

        if (this.el[0].className.length) {
          this.el[0].className = this.el[0].className + ' ' + classes.join(' ');
        } else {
          this.el[0].className = classes.join(' ');
        }
        this.el[0].innerHTML = this.buildStatusBar() + this.buildContent();

        /// Typed.js integration
        if (this.options.typed && typeof Typed !== 'undefined') {

          var commandsNum = this.el[0].querySelectorAll('.line').length;
          var initCommands = function initCommands(i) {

            var line = _this.el[0].querySelectorAll('.line-' + i);
            var command = line[0].querySelectorAll('.command');
            var commandText = command[0].innerHTML;
            var speed = 800;

            /// Show the line
            line[0].className = 'active ' + line[0].className;

            if (command[0].className.indexOf('output') === -1 && i < commandsNum - 1) {

              /// Empty the command
              command[0].innerHTML = '';

              new Typed(command[0], {
                strings: ['^' + speed + commandText],
                typeSpeed: 50,
                loop: false,
                contentType: 'html',
                cursorChar: '&nbsp;',
                showCursor: true,
                onStringTyped: function onStringTyped(arrayPos, self) {
                  // Removes cursor from each line except for the last one
                  line[0].removeChild(line[0].querySelectorAll('.typed-cursor')[0]);
                  initCommands(i + 1);
                }
              });
            } else {
              if (i <= commandsNum - 2) {
                /// After the bash output go type next line
                initCommands(i + 1);
              }
            }
          };

          /// Type first line
          initCommands(0);
        } else {
          /// Typed.js was not found, remove class
          this.el[0].className = this.el[0].className.replace(' typed', '');
        }
      }
    }
  }, {
    key: 'buildPrefix',
    value: function buildPrefix() {

      var prefix = '<span class="prefix">';
      var user = this.options.root ? 'root' : this.options.user;
      var char = this.options.root ? '#' : '';

      /// Which OS
      switch (this.options.style) {

        case 'osx':
          char = char || '$';
          prefix += '<span class="host">' + this.options.host + '</span><span \n                    class="colon">:</span><span \n                    class="path">' + this.options.path + '</span><span \n                    class="user">&nbsp;' + user + '</span><span \n                    class="char">' + char + '</span>';
          break;

        case 'windows':
          char = char || '&gt;';
          prefix += '<span class="path">' + this.options.path + '</span><span \n                    class="char">' + char + '</span>';
          break;

        case 'ubuntu':
        /* falls through */
        default:
          char = char || '$';
          prefix += '<span class="user">' + user + '@</span><span \n                    class="host">' + this.options.host + '</span><span \n                    class="colon">:</span><span \n                    class="path">' + this.options.path + '</span><span \n                    class="char">' + char + '</span>';
          break;

      }

      prefix += '<span class="spacer">&nbsp;</span>';
      prefix += '</span>';

      return prefix;
    }
  }, {
    key: 'buildStatusBar',
    value: function buildStatusBar() {

      var statusBar = '<div class="status-bar">';
      var user = this.options.root ? 'root' : this.options.user;
      var buttons = void 0;
      var title = void 0;

      /// Which OS
      switch (this.options.style) {

        case 'osx':
          buttons = '<div class="buttons">\n                     <button class="icon-close icon-dot"></button>\n                     <button class="icon-minimize"></button>\n                     <button class="icon-enlarge"></button>\n                   </div>';
          title = '<div class="title">' + user + ' &horbar; sh &horbar; 80x24</div>';
          break;

        case 'windows':
          buttons = '<div class="buttons">\n                    <button class="icon-minimize"></button>\n                    <button class="icon-enlarge"></button>\n                    <button class="icon-close"></button>\n                   </div>';
          title = '<div class="icon"><i class="icon-command"></i></div><div class="title">Command Prompt</div>';
          break;

        case 'ubuntu':
        /* falls through */
        default:
          buttons = '<div class="buttons">\n                    <button class="icon-close"></button>\n                    <button class="icon-minimize"></button>\n                    <button class="icon-enlarge"></button>\n                   </div>';
          title = '<div class="title">' + user + '@' + this.options.host + ': ' + this.options.path + '</div>';
          break;

      }

      statusBar += buttons + title;
      statusBar += '</div>';

      return statusBar;
    }
  }, {
    key: 'buildContent',
    value: function buildContent() {
      var _this2 = this;

      /// Content's HTML wrapper
      var content = '<div class="content">';
      var date = new Date();
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var index = 0;
      var counter = 0;

      /// If style is OSX add a new line with last login
      switch (this.options.style) {

        case 'osx':
          var hours = Shell._pad(date.getHours(), 2);
          var minutes = Shell._pad(date.getMinutes(), 2);
          var seconds = Shell._pad(date.getSeconds(), 2);

          content += this.buildLine({
            command: 'Last login: ' + days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + hours + ':' + minutes + ':' + seconds + ' on ttys000',
            output: true,
            prefix: false
          });

          counter++;
          break;

      }

      /// If have some commands...
      if (this.options.commands.length) {

        this.options.commands.forEach(function (command) {

          var params = {
            command: command,
            counter: counter,
            output: null
          };
          var becomeRoot = false;

          /// Build line
          content += _this2.buildLine(params);

          /// If command contains "sudo" become root user
          if (/sudo/.test(command)) {

            counter++;
            params.counter = counter;

            switch (_this2.options.style) {
              case 'windows':
                params.command = 'bash: sudo: command not found';
                params.output = true;
                _this2.options.root = false;
                break;

              case 'osx':
                params.command = 'Password:<span class="icon-key"></span>';
                params.output = true;
                _this2.options.root = true;
                break;

              case 'ubuntu':
              /* falls through */
              default:
                params.command = '[sudo] password for ' + _this2.options.user + ':';
                params.output = true;
                _this2.options.root = true;
                break;
            }

            content += _this2.buildLine(params);
          }

          /// If command contains "exit" logout from root
          if (/exit/.test(command)) {

            counter++;
            params.counter = counter;

            if (_this2.options.style === 'windows') {
              params.command = 'bash: exit: command not found';
            } else {
              _this2.options.root = false;
              params.command = 'logout';
              params.output = true;
            }

            content += _this2.buildLine(params);
          }

          counter++;
          index++;
        });

        content += this.buildLine({ counter: counter, empty: true });
      }

      /// Close the content of the shell
      content += '</div>';

      return content;
    }
  }, {
    key: 'buildLine',
    value: function buildLine(params) {

      var line = '';

      /// Default parameters
      params = _extends({
        counter: 0,
        empty: false,
        command: null,
        prefix: true,
        output: false
      }, params);

      var classes = ['line'];
      /// Add "root" class
      if (this.options.root) {
        classes.push('root');
      }
      /// Add "line-[number]" class
      if (!isNaN(params.counter)) {
        classes.push('line-' + params.counter);
      }

      if (params.empty) {

        /// Add "active" class
        if (!this.options.typed) {
          classes.push('active');
        }

        line = '<div class="' + classes.join(' ') + '">' + this.buildPrefix() + '<span class="command"><span class="typed-cursor">&nbsp;</span></span></div>';
      } else {

        line = '<div class="' + classes.join(' ') + '">' + (params.command ? (params.prefix ? this.buildPrefix() : '') + '<span class="command' + (params.output ? ' output' : '') + '">' + params.command + '</span>' : '') + '</div>';
      }

      return line;
    }
  }], [{
    key: '_pad',
    value: function _pad(string, length, char) {
      char = char || '0';
      string = string + '';
      return string.length >= length ? string : new Array(length - string.length + 1).join(char) + string;
    }
  }]);

  return Shell;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default options
 * @returns {object} Shell default options
 * @public
 */
var defaults = {

  /**
   * @property {string} user The logged user
   */
  user: 'user',

  /**
   * @property {string} host The local host
   */
  host: 'host',

  /**
   * @property {string} path The current path displayed in the terminal
   */
  path: '~',

  /**
   * @property {string} style The operating system (ubuntu || osx || windows || default)
   */
  style: 'default',

  /**
   * @property {string} theme The theme (dark || light)
   */
  theme: 'dark',

  /**
   * @property {string} theme Adds the Typed.js integration
   */
  typed: false,

  /**
   * @property {boolean} responsive If true the terminal will be fluid
   */
  responsive: false,

  /**
   * @property {array} commands The commands list
   */
  commands: [],

  /**
   * @property {boolean} root If logged user is root or not
   */
  root: false
};

exports.default = defaults;

/***/ })
/******/ ]);
});
//# sourceMappingURL=shell.js.map