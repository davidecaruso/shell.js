/*!
 * shell.js - A JavaScript and CSS library to create terminals
 * Author: Davide Caruso <davide.caruso93@gmail.com
 * Version: v1.0.5
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./shell.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./shell.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Replace all occurrences of the search string with the replacement string\n * @param $search: The value being searched for, otherwise known as the needle.\n * @param $replace: The replacement value that replaces found search values.\n * @param $subject: The string being searched and replaced on, otherwise known as the haystack.\n */\n.shell {\n  font-family: sans-serif; }\n\n.shell .content {\n  font-family: monospace; }\n\nbody {\n  font-style: normal; }\n\nbody {\n  font-weight: 400; }\n\n@media (min-width: 320px) and (max-width: 767px) {\n  body {\n    font-size: 7.5px; } }\n\n.shell {\n  width: 400px;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  position: relative;\n  text-align: left;\n  color: #F1F1F1;\n  overflow: hidden;\n  font-weight: 300;\n  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 2px; }\n  .shell.responsive {\n    width: 100%;\n    height: 100%; }\n  .shell.typed .content .line {\n    display: none; }\n  .shell .status-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background: #333333;\n    border: 1px solid #292929;\n    border-bottom: 0; }\n    .shell .status-bar .buttons {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-flex: 2;\n          -ms-flex-positive: 2;\n              flex-grow: 2; }\n      .shell .status-bar .buttons button {\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        border: 0;\n        padding: 0;\n        outline: none;\n        text-align: center;\n        margin: 0 2px;\n        border-radius: 50%;\n        width: 15px;\n        height: 15px;\n        font-size: 13.5px;\n        line-height: 11.25px; }\n        .shell .status-bar .buttons button i {\n          text-align: center;\n          width: 100%;\n          height: 15px;\n          display: block;\n          font-size: 7.5px;\n          line-height: 11.25px; }\n        .shell .status-bar .buttons button.close {\n          background: #F25056;\n          color: #F25056; }\n          .shell .status-bar .buttons button.close:hover {\n            color: #A21F2C; }\n        .shell .status-bar .buttons button.minimize {\n          background: #FAC536;\n          color: #FAC536; }\n          .shell .status-bar .buttons button.minimize:hover {\n            color: #C28723; }\n        .shell .status-bar .buttons button.enlarge {\n          background: #39EA49;\n          color: #39EA49; }\n          .shell .status-bar .buttons button.enlarge:hover {\n            color: #0B7407; }\n    .shell .status-bar .title {\n      font-size: 12px;\n      line-height: 20.25px;\n      text-align: center;\n      -webkit-box-flex: 98;\n          -ms-flex-positive: 98;\n              flex-grow: 98; }\n  .shell .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 1px solid #292929;\n    padding: 1px;\n    font-size: 12px;\n    line-height: 13.5px;\n    background: #292929;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .shell .content .line.active {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .shell .content .line .prefix .user {\n      color: #8AD733; }\n    .shell .content .line .prefix .host {\n      color: #8AD733; }\n    .shell .content .line .prefix .path {\n      color: #729FCF; }\n    .shell .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell .typed-cursor {\n    opacity: 1;\n    background: #F1F1F1;\n    -webkit-animation: blink 1s infinite;\n            animation: blink 1s infinite; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n  .shell.ubuntu .status-bar {\n    border-color: transparent;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#3F3F3F), to(#585858));\n    background-image: linear-gradient(to bottom, #3F3F3F 0%, #585858 100%); }\n    .shell.ubuntu .status-bar .icon {\n      display: none; }\n    .shell.ubuntu .status-bar .title {\n      color: #FFFFFF; }\n    .shell.ubuntu .status-bar .buttons button.close {\n      background: #D75224;\n      color: #444444; }\n      .shell.ubuntu .status-bar .buttons button.close:hover {\n        color: #A21F2C; }\n    .shell.ubuntu .status-bar .buttons button.minimize {\n      background: #898989;\n      color: #555555; }\n      .shell.ubuntu .status-bar .buttons button.minimize:hover {\n        color: #555555; }\n    .shell.ubuntu .status-bar .buttons button.enlarge {\n      background: #898989;\n      color: #555555; }\n      .shell.ubuntu .status-bar .buttons button.enlarge:hover {\n        color: #555555; }\n  .shell.ubuntu .content {\n    border-color: transparent;\n    background: #300924; }\n    .shell.ubuntu .content .line .prefix .user {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .host {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .path {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell.ubuntu .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.ubuntu.light {\n    color: #666666; }\n    .shell.ubuntu.light .content {\n      background: #FFFFFF; }\n      .shell.ubuntu.light .content .line .prefix .user {\n        color: #666666; }\n      .shell.ubuntu.light .content .line .prefix .host {\n        color: #666666; }\n      .shell.ubuntu.light .content .line .prefix .path {\n        color: #666666; }\n      .shell.ubuntu.light .content .line .prefix .root .user {\n        color: #666666; }\n      .shell.ubuntu.light .content .line .prefix .root .host {\n        color: #666666; }\n      .shell.ubuntu.light .content .line .prefix .root .path {\n        color: #666666; }\n  .shell.osx .status-bar {\n    border-color: #EBEBEB;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#CBCBCB));\n    background-image: linear-gradient(to bottom, #EBEBEB 0%, #CBCBCB 100%); }\n    .shell.osx .status-bar .title {\n      color: #666666; }\n  .shell.osx .content {\n    background: rgba(0, 0, 0, 0.9); }\n    .shell.osx .content .line .prefix .user {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .host {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .path {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .user {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .host {\n      color: #FFFFFF; }\n    .shell.osx .content .line .prefix .root .path {\n      color: #FFFFFF; }\n  .shell.osx.light {\n    color: #666666; }\n    .shell.osx.light .content {\n      border-color: #EBEBEB;\n      background: #FFFFFF; }\n      .shell.osx.light .content .line .prefix .user {\n        color: #666666; }\n      .shell.osx.light .content .line .prefix .host {\n        color: #666666; }\n      .shell.osx.light .content .line .prefix .path {\n        color: #666666; }\n      .shell.osx.light .content .line .prefix .root .user {\n        color: #666666; }\n      .shell.osx.light .content .line .prefix .root .host {\n        color: #666666; }\n      .shell.osx.light .content .line .prefix .root .path {\n        color: #666666; }\n  .shell.windows {\n    color: #FFFFFF;\n    border-radius: 0;\n    -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5); }\n    .shell.windows .status-bar {\n      border: 0;\n      height: 30px;\n      background-color: #69C1F0; }\n      .shell.windows .status-bar .buttons {\n        -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n                align-items: stretch;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n        padding: 0; }\n        .shell.windows .status-bar .buttons button {\n          margin: 0;\n          border-radius: 0;\n          width: 25px;\n          height: 20px;\n          font-size: 13.5px;\n          line-height: 15px; }\n          .shell.windows .status-bar .buttons button i {\n            width: 100%;\n            height: 20px;\n            font-size: 7.5px;\n            line-height: 15px; }\n          .shell.windows .status-bar .buttons button.close {\n            width: 50px;\n            background: #C75050;\n            color: #FFFFFF; }\n            .shell.windows .status-bar .buttons button.close:hover {\n              background: #c03d3d;\n              color: #FFFFFF; }\n          .shell.windows .status-bar .buttons button.minimize {\n            background: transparent;\n            color: #292929; }\n            .shell.windows .status-bar .buttons button.minimize:hover {\n              background: #1698dd;\n              color: #FFFFFF; }\n          .shell.windows .status-bar .buttons button.enlarge {\n            background: transparent;\n            color: #292929; }\n            .shell.windows .status-bar .buttons button.enlarge:hover {\n              background: #1698dd;\n              color: #FFFFFF; }\n      .shell.windows .status-bar .icon {\n        background: #000000;\n        color: #FFFFFF;\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        font-size: 9px;\n        line-height: 15px;\n        border-radius: 3px;\n        margin: 5px; }\n      .shell.windows .status-bar .title {\n        color: #292929;\n        font-size: 12px;\n        line-height: 28.5px; }\n    .shell.windows .content {\n      border-color: #69C1F0;\n      background: #000000; }\n      .shell.windows .content .line .prefix .user {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .host {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .path {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .user {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .host {\n        color: #FFFFFF; }\n      .shell.windows .content .line .prefix .root .path {\n        color: #FFFFFF; }\n", ""]);

// exports


/***/ }),
/* 3 */
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
/* 4 */
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

var	fixUrls = __webpack_require__(5);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = __webpack_require__(7);

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
          var lastLine = this.el[0].querySelectorAll('.line-' + (commandsNum - 1));
          var initCommands = function initCommands(i) {

            var line = _this.el[0].querySelectorAll('.line-' + i);
            var command = line[0].querySelectorAll('.command');
            var commandText = command[0].innerHTML;
            var speed = line[0].className.indexOf('root') >= 0 ? 2500 : 800; /// Time for password

            /// Show the line
            line[0].className = 'active ' + line[0].className;

            if (command[0].className.indexOf('output') === -1 && i < commandsNum - 1) {

              /// Empty the command
              command[0].innerHTML = '';

              new Typed(command[0], {
                strings: ['^' + speed + ' ' + commandText],
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
          prefix += '<span class="host">' + this.options.host + '</span><span \n                    class="colon">:</span><span \n                    class="path">' + this.options.path + '</span><span \n                    class="user">' + user + '</span><span \n                    class="char">' + char + '</span>';
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
          buttons = '<div class="buttons">\n                     <button class="close" title="Close"><i class="fa fa-times"></i></button>\n                     <button class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>\n                     <button class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></button>\n                   </div>';
          title = '<div class="title">' + user + ' &horbar; sh &horbar; 80x24</div>';
          break;

        case 'windows':
          buttons = '<div class="buttons">\n                    <button class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>\n                    <button class="enlarge" title="Enlarge"><i class="fa fa-square-o"></i></button>\n                    <button class="close" title="Close"><i class="fa fa-times"></i></button>\n                   </div>';
          title = '<div class="icon"><i class="fa fa-terminal"></i></div><div class="title">Command Prompt</div>';
          break;

        case 'ubuntu':
        /* falls through */
        default:
          buttons = '<div class="buttons">\n                    <button href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></button>\n                    <button href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>\n                    <button href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></button>\n                   </div>';
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
      if (this.options.style === 'osx') {

        var hours = Shell._pad(date.getHours(), 2);
        var minutes = Shell._pad(date.getMinutes(), 2);
        var seconds = Shell._pad(date.getSeconds(), 2);

        content += this.buildLine({
          command: 'Last login: ' + days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + hours + ':' + minutes + ':' + seconds + ' on ttys000',
          output: true,
          prefix: false
        });

        counter++;
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

            if (_this2.options.style === 'windows') {
              params.command = 'bash: sudo: command not found';
              params.output = true;
            } else {
              params.command = '[sudo] password for ' + _this2.options.user + ':';
              params.output = true;
              becomeRoot = true;
            }

            content += _this2.buildLine(params);
            if (becomeRoot) {
              _this2.options.root = true;
            }
          }

          /// If command contains "exit" logout from root
          if (/exit/.test(command)) {

            counter++;
            params.counter = counter;

            if (_this2.options.style === 'windows') {
              params.command = 'bash: sudo: command not found';
            } else {
              _this2.options.root = false;
              params.command = null;
              params.output = 'logout';
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

        line = '<div class="' + classes.join(' ') + '">' + (params.command ? (params.prefix ? this.buildPrefix() + ' ' : '') + '<span class="command' + (params.output ? ' output' : '') + '">' + params.command + '</span>' : '') + '</div>';
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
/* 7 */
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
   * @property {string} style The terminal's style (ubuntu || osx || windows || custom)
   */
  style: 'custom',

  /**
   * @property {string} theme The theme (dark || light)
   */
  theme: 'dark',

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