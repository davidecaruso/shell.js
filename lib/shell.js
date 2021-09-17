/*!
 * shell.js - A JavaScript library to create HTML terminals in web pages.
 * Author: Davide Caruso <davide.caruso93@gmail.com>
 * Version: v3.3.1
 * URL: https://shelljs.io
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
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./assets/style/main.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./assets/style/main.scss ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/fonts/shell.eot?kg1zqe */ "./assets/fonts/shell.eot?kg1zqe");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../assets/fonts/shell.ttf?kg1zqe */ "./assets/fonts/shell.ttf?kg1zqe");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../assets/fonts/shell.woff?kg1zqe */ "./assets/fonts/shell.woff?kg1zqe");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../../assets/fonts/shell.svg?kg1zqe */ "./assets/fonts/shell.svg?kg1zqe");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#icomoon" });
// Module
exports.push([module.id, "@font-face {\n  font-family: 'shell';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  font-family: 'shell' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-close:before {\n  content: \"\\e5cd\"; }\n\n.icon-enlarge:before {\n  content: \"\\e3c1\"; }\n\n.icon-folder:before {\n  content: \"\\e2c7\"; }\n\n.icon-command:before {\n  content: \"\\e5dd\"; }\n\n.icon-minimize:before {\n  content: \"\\e15b\"; }\n\n.icon-dot:before {\n  content: \"\\e900\"; }\n\n.icon-key:before {\n  content: \"\\e901\"; }\n\n.shell {\n  font-family: sans-serif; }\n\n.shell .shell__content {\n  font-family: monospace; }\n\n.shell {\n  font-weight: 400; }\n\n.shell {\n  width: 400px;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  text-align: left;\n  color: #F1F1F1;\n  overflow: hidden;\n  font-weight: 300;\n  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 5px; }\n  @media (min-width: 320px) and (max-width: 767px) {\n    .shell {\n      font-size: 7.5px; } }\n  .shell .shell__status-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 21px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background: #333333; }\n    .shell .shell__status-bar .status-bar__buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      padding: 0 5px; }\n      .shell .shell__status-bar .status-bar__buttons .button {\n        -webkit-appearance: none;\n           -moz-appearance: none;\n                appearance: none;\n        border: 0;\n        padding: 0;\n        outline: none;\n        text-align: center;\n        margin: 0 3px;\n        border-radius: 50%;\n        cursor: pointer;\n        width: 13px;\n        height: 13px;\n        font-size: 11.25px;\n        line-height: 9.75px; }\n        .shell .shell__status-bar .status-bar__buttons .button i {\n          text-align: center;\n          width: 100%;\n          height: 13px;\n          display: block; }\n          .shell .shell__status-bar .status-bar__buttons .button i:before {\n            line-height: 13px;\n            display: block; }\n      .shell .shell__status-bar .status-bar__buttons .button--close {\n        background: #FF4F37;\n        color: #FF4F37; }\n        .shell .shell__status-bar .status-bar__buttons .button--close:hover {\n          color: #841000; }\n      .shell .shell__status-bar .status-bar__buttons .button--minimize {\n        background: #FEC600;\n        color: #FEC600; }\n        .shell .shell__status-bar .status-bar__buttons .button--minimize:hover {\n          color: #987600; }\n      .shell .shell__status-bar .status-bar__buttons .button--enlarge {\n        background: #00DB51;\n        color: #00DB51; }\n        .shell .shell__status-bar .status-bar__buttons .button--enlarge:hover {\n          color: #00752b; }\n    .shell .shell__status-bar .status-bar__title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 12px;\n      line-height: 20.25px;\n      text-align: left;\n      -webkit-box-flex: 97;\n          -ms-flex-positive: 97;\n              flex-grow: 97;\n      color: inherit; }\n  .shell .shell__content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 1px solid transparent;\n    padding: 2px;\n    font-size: 12px;\n    line-height: 13.5px;\n    background: #292929;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .shell .shell__content .line .line__prefix .user {\n      color: #8AD733; }\n    .shell .shell__content .line .line__prefix .host {\n      color: #8AD733; }\n    .shell .shell__content .line .line__prefix .path {\n      color: #729FCF; }\n    .shell .shell__content .line.line--root .line__prefix .user {\n      color: #FFFFFF; }\n    .shell .shell__content .line.line--root .line__prefix .host {\n      color: #FFFFFF; }\n    .shell .shell__content .line.line--root .line__prefix .path {\n      color: #FFFFFF; }\n    .shell .shell__content .line.line--active {\n      display: block; }\n  .shell .typed-cursor {\n    opacity: 1;\n    background-color: #F1F1F1;\n    -webkit-animation: blink 1s infinite;\n            animation: blink 1s infinite; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 0; }\n  49% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n.shell--light .shell__content {\n  color: #878787;\n  border-color: #EBEBEB;\n  background: #FFFFFF; }\n  .shell--light .shell__content .line.line--root .line__prefix .user {\n    color: #878787; }\n  .shell--light .shell__content .line.line--root .line__prefix .host {\n    color: #878787; }\n  .shell--light .shell__content .line.line--root .line__prefix .path {\n    color: #878787; }\n\n.shell--light .shell__typed-cursor {\n  background-color: #878787; }\n\n.shell--responsive {\n  width: 100%;\n  height: 100%;\n  min-height: 200px; }\n\n.shell--typed .shell__content .line {\n  display: none; }\n\n.shell--osx .shell__status-bar {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#EBEBEB), to(#CBCBCB));\n  background-image: linear-gradient(to bottom, #EBEBEB 0%, #CBCBCB 100%);\n  position: relative; }\n  .shell--osx .shell__status-bar .status-bar__title {\n    color: #878787;\n    text-align: center;\n    -webkit-box-flex: 100;\n        -ms-flex-positive: 100;\n            flex-grow: 100; }\n\n.shell--osx .shell__content {\n  background: rgba(0, 0, 0, 0.9); }\n  .shell--osx .shell__content .line .line__prefix .user {\n    color: #FFFFFF; }\n  .shell--osx .shell__content .line .line__prefix .host {\n    color: #FFFFFF; }\n  .shell--osx .shell__content .line .line__prefix .path {\n    color: #FFFFFF; }\n  .shell--osx .shell__content .line.line--root .line__prefix .user {\n    color: #FFFFFF; }\n  .shell--osx .shell__content .line.line--root .line__prefix .host {\n    color: #FFFFFF; }\n  .shell--osx .shell__content .line.line--root .line__prefix .path {\n    color: #FFFFFF; }\n\n.shell--osx.shell--light {\n  color: #878787; }\n  .shell--osx.shell--light .shell__content {\n    border-color: #EBEBEB;\n    background: #FFFFFF; }\n    .shell--osx.shell--light .shell__content .line .line__prefix .user {\n      color: #878787; }\n    .shell--osx.shell--light .shell__content .line .line__prefix .host {\n      color: #878787; }\n    .shell--osx.shell--light .shell__content .line .line__prefix .path {\n      color: #878787; }\n    .shell--osx.shell--light .shell__content .line.line--root .line__prefix .user {\n      color: #878787; }\n    .shell--osx.shell--light .shell__content .line.line--root .line__prefix .host {\n      color: #878787; }\n    .shell--osx.shell--light .shell__content .line.line--root .line__prefix .path {\n      color: #878787; }\n\n.shell--ubuntu .shell__status-bar {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#3F3F3F), to(#585858));\n  background-image: linear-gradient(to bottom, #3F3F3F 0%, #585858 100%); }\n  .shell--ubuntu .shell__status-bar .icon {\n    display: none; }\n  .shell--ubuntu .shell__status-bar .status-bar__title {\n    color: #FFFFFF; }\n  .shell--ubuntu .shell__status-bar .status-bar__buttons .button--close {\n    background: #D75224;\n    color: #444444; }\n    .shell--ubuntu .shell__status-bar .status-bar__buttons .button--close:hover {\n      background: #c14a20;\n      color: #444444; }\n  .shell--ubuntu .shell__status-bar .status-bar__buttons .button--minimize, .shell--ubuntu .shell__status-bar .status-bar__buttons .button--enlarge {\n    background: #898989;\n    color: #555555; }\n    .shell--ubuntu .shell__status-bar .status-bar__buttons .button--minimize:hover, .shell--ubuntu .shell__status-bar .status-bar__buttons .button--enlarge:hover {\n      background: #7c7c7c;\n      color: #555555; }\n\n.shell--ubuntu .shell__content {\n  background: #300924; }\n  .shell--ubuntu .shell__content .line .line__prefix .user {\n    color: #FFFFFF; }\n  .shell--ubuntu .shell__content .line .line__prefix .host {\n    color: #FFFFFF; }\n  .shell--ubuntu .shell__content .line .line__prefix .path {\n    color: #FFFFFF; }\n  .shell--ubuntu .shell__content .line--root .line__prefix .user {\n    color: #FFFFFF; }\n  .shell--ubuntu .shell__content .line--root .line__prefix .host {\n    color: #FFFFFF; }\n  .shell--ubuntu .shell__content .line--root .line__prefix .path {\n    color: #FFFFFF; }\n\n.shell--ubuntu.shell--light {\n  color: #878787; }\n  .shell--ubuntu.shell--light .shell__content {\n    background: #FFFFFF; }\n    .shell--ubuntu.shell--light .shell__content .line .line__prefix .user {\n      color: #878787; }\n    .shell--ubuntu.shell--light .shell__content .line .line__prefix .host {\n      color: #878787; }\n    .shell--ubuntu.shell--light .shell__content .line .line__prefix .path {\n      color: #878787; }\n    .shell--ubuntu.shell--light .shell__content .line--root .line__prefix .user {\n      color: #878787; }\n    .shell--ubuntu.shell--light .shell__content .line--root .line__prefix .host {\n      color: #878787; }\n    .shell--ubuntu.shell--light .shell__content .line--root .line__prefix .path {\n      color: #878787; }\n\n.shell--windows {\n  color: #FFFFFF;\n  border-radius: 0;\n  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5); }\n  .shell--windows .shell__status-bar {\n    height: 30px;\n    background-color: #69C1F0; }\n    .shell--windows .shell__status-bar .status-bar__title {\n      font-size: 12px;\n      line-height: 30px;\n      color: #292929; }\n    .shell--windows .shell__status-bar .status-bar__buttons {\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      padding: 0; }\n      .shell--windows .shell__status-bar .status-bar__buttons .button {\n        margin: 0;\n        border-radius: 0;\n        width: 25px;\n        height: 20px;\n        font-size: 13.5px;\n        line-height: 15px; }\n        .shell--windows .shell__status-bar .status-bar__buttons .button i {\n          width: 100%;\n          height: 20px;\n          font-size: 15px;\n          line-height: 15px; }\n          .shell--windows .shell__status-bar .status-bar__buttons .button i:before {\n            line-height: 20px; }\n        .shell--windows .shell__status-bar .status-bar__buttons .button.button--close {\n          width: 50px;\n          background: #C75050;\n          color: #FFFFFF; }\n          .shell--windows .shell__status-bar .status-bar__buttons .button.button--close:hover {\n            background: #c03d3d;\n            color: #FFFFFF; }\n        .shell--windows .shell__status-bar .status-bar__buttons .button.button--minimize {\n          background: transparent;\n          color: #292929; }\n          .shell--windows .shell__status-bar .status-bar__buttons .button.button--minimize:hover {\n            background: #1698dd;\n            color: #FFFFFF; }\n        .shell--windows .shell__status-bar .status-bar__buttons .button.button--enlarge {\n          background: transparent;\n          color: #292929; }\n          .shell--windows .shell__status-bar .status-bar__buttons .button.button--enlarge:hover {\n            background: #1698dd;\n            color: #FFFFFF; }\n    .shell--windows .shell__status-bar .status-bar__icon {\n      background: #000000;\n      color: #FFFFFF;\n      width: 20px;\n      height: 20px;\n      display: inline-block;\n      font-size: 9px;\n      line-height: 15px;\n      border-radius: 3px;\n      margin: 5px; }\n  .shell--windows .shell__content {\n    border-color: #69C1F0;\n    background: #000000; }\n    .shell--windows .shell__content .line .line__prefix .user {\n      color: #FFFFFF; }\n    .shell--windows .shell__content .line .line__prefix .host {\n      color: #FFFFFF; }\n    .shell--windows .shell__content .line .line__prefix .path {\n      color: #FFFFFF; }\n    .shell--windows .shell__content .line .line__prefix .line--root .user {\n      color: #FFFFFF; }\n    .shell--windows .shell__content .line .line__prefix .line--root .host {\n      color: #FFFFFF; }\n    .shell--windows .shell__content .line .line__prefix .line--root .path {\n      color: #FFFFFF; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./assets/style/main.scss":
/*!********************************!*\
  !*** ./assets/style/main.scss ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./assets/style/main.scss");
if(typeof content === 'string') content = [[module.id, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! !../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/***/ ((module) => {


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

/***/ "./src/Builders/BuilderFactory.ts":
/*!****************************************!*\
  !*** ./src/Builders/BuilderFactory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuilderFactory = void 0;
var Interfaces_1 = __webpack_require__(/*! ../Interfaces */ "./src/Interfaces/index.ts");
var index_1 = __webpack_require__(/*! ./index */ "./src/Builders/index.ts");
var BuilderFactory = (function () {
    function BuilderFactory() {
    }
    BuilderFactory.prototype.create = function (options) {
        switch (options.style) {
            case Interfaces_1.Style.OSX:
                return new index_1.OsxBuilder(options);
            case Interfaces_1.Style.UBUNTU:
                return new index_1.UbuntuBuilder(options);
            case Interfaces_1.Style.WINDOWS:
                return new index_1.WindowsBuilder(options);
            default:
                return new index_1.DefaultBuilder(options);
        }
    };
    return BuilderFactory;
}());
exports.BuilderFactory = BuilderFactory;


/***/ }),

/***/ "./src/Builders/BuilderInterface.ts":
/*!******************************************!*\
  !*** ./src/Builders/BuilderInterface.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Builders/DefaultBuilder.ts":
/*!****************************************!*\
  !*** ./src/Builders/DefaultBuilder.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultBuilder = void 0;
var Shell_1 = __webpack_require__(/*! ../Shell */ "./src/Shell/index.ts");
var DefaultBuilder = (function () {
    function DefaultBuilder(options) {
        this._char = '$';
        this.cursor = '&nbsp;';
        this.options = options;
        this.shell = new Shell_1.Shell(options);
    }
    Object.defineProperty(DefaultBuilder.prototype, "char", {
        get: function () {
            return this.options.root ? '#' : this._char;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultBuilder.prototype, "user", {
        get: function () {
            return this.options.root ? 'root' : this.options.user;
        },
        enumerable: false,
        configurable: true
    });
    DefaultBuilder.prototype.build = function () {
        return this.shell;
    };
    DefaultBuilder.prototype.addStatusBar = function () {
        var buttons = new Shell_1.StatusBarButtons("<button class=\"button button--close\"><i class=\"icon-close\"></i></button>" +
            "<button class=\"button button--minimize\"><i class=\"icon-minimize\"></i></button>" +
            "<button class=\"button button--enlarge\"><i class=\"icon-enlarge\"></i></button>");
        var title = new Shell_1.StatusBarTitle(this.user + "@" + this.options.host + ": " + this.options.path);
        this.shell.statusBar = new Shell_1.StatusBar(buttons, title);
        return this;
    };
    DefaultBuilder.prototype.addContent = function () {
        var _this = this;
        var content = '';
        var counter = 0;
        var loginParams = this.login(counter);
        if (Object.keys(loginParams).length) {
            content += this.buildLine(loginParams);
            counter++;
        }
        if (this.options.commands.length) {
            this.options.commands.forEach(function (command) {
                if (typeof command === 'object' && command['input']) {
                    var outputLines = command['output'];
                    command = command['input'];
                }
                var params = {
                    command: command,
                    counter: counter,
                    output: undefined,
                };
                content += _this.buildLine(params);
                if (/sudo/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = _this.sudo(params);
                    content += _this.buildLine(params);
                }
                if (/exit/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = _this.logout(params);
                    content += _this.buildLine(params);
                }
                if (outputLines) {
                    for (var _i = 0, outputLines_1 = outputLines; _i < outputLines_1.length; _i++) {
                        var outputLine = outputLines_1[_i];
                        counter++;
                        params.counter = counter;
                        params.command = outputLine;
                        params.output = true;
                        content += _this.buildLine(params);
                    }
                }
                counter++;
            });
            content += this.buildLine({ counter: counter, empty: true });
        }
        this.shell.content = new Shell_1.Content(content);
        return this;
    };
    DefaultBuilder.prototype.getPrefix = function () {
        return "<span class=\"line__prefix\">" +
            ("<span class=\"user\">" + this.user + "@</span>") +
            ("<span class=\"host\">" + this.options.host + "</span>") +
            "<span class=\"colon\">:</span>" +
            ("<span class=\"path\">" + this.options.path + "</span>") +
            ("<span class=\"char\">" + this.char + "</span>") +
            "&nbsp;</span>";
    };
    DefaultBuilder.prototype.login = function (counter) {
        return {};
    };
    DefaultBuilder.prototype.sudo = function (params) {
        this.options.root = true;
        params.command = "[sudo] password for " + this.options.user + ":";
        params.output = true;
        return params;
    };
    DefaultBuilder.prototype.logout = function (params) {
        this.options.root = false;
        params.command = 'logout';
        params.output = true;
        return params;
    };
    DefaultBuilder.prototype.buildLine = function (params) {
        var classes = ["line"];
        var counter = params.counter;
        params = __assign({
            counter: 0,
            empty: false,
            command: undefined,
            output: false,
        }, params);
        if (this.options.root) {
            classes.push("line--root");
        }
        else {
            var idx = classes.indexOf("line--root");
            if (idx != -1) {
                classes = classes.splice(idx, 1);
            }
        }
        var line = "<div class=\"" + classes.join(' ') + "\" data-index=\"" + counter + "\">";
        if (params.empty) {
            if (!this.options.typed) {
                classes.push("line--active");
            }
            line += "" + this.getPrefix() +
                ("<span class=\"command\"><span class=\"typed-cursor\">" + this.cursor + "</span></span>");
        }
        else {
            if (params.command) {
                line += (params.output ? '' : this.getPrefix()) +
                    "<span class=\"command" + (params.output ? " line--output" : '') + ("\">" + params.command + "</span>");
            }
        }
        line += '</div>';
        return line;
    };
    return DefaultBuilder;
}());
exports.DefaultBuilder = DefaultBuilder;


/***/ }),

/***/ "./src/Builders/OsxBuilder.ts":
/*!************************************!*\
  !*** ./src/Builders/OsxBuilder.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OsxBuilder = void 0;
var Shell_1 = __webpack_require__(/*! ../Shell */ "./src/Shell/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var index_1 = __webpack_require__(/*! ./index */ "./src/Builders/index.ts");
var OsxBuilder = (function (_super) {
    __extends(OsxBuilder, _super);
    function OsxBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columns = 80;
        _this.rows = 24;
        return _this;
    }
    OsxBuilder.prototype.addStatusBar = function () {
        var buttons = new Shell_1.StatusBarButtons("<button class=\"button button--close\"><i class=\"icon-dot\"></i></button>" +
            "<button class=\"button button--minimize\"><i class=\"icon-minimize\"></i></button>" +
            "<button class=\"button button--enlarge\"><i class=\"icon-enlarge\"></i></button>");
        var title = new Shell_1.StatusBarTitle(this.user + " \u2012 sh \u2012 " + (this.columns + 'x' + this.rows));
        this.shell.statusBar = new Shell_1.StatusBar(buttons, title);
        return this;
    };
    OsxBuilder.prototype.getPrefix = function () {
        return "<span class=\"line__prefix\">" +
            ("<span class=\"host\">" + this.options.host + "</span>") +
            "<span class=\"colon\">:</span>" +
            ("<span class=\"path\">" + this.options.path + "</span>") +
            ("<span class=\"user\"> " + this.user + "</span>") +
            ("<span class=\"char\">" + this.char + "</span>") +
            "&nbsp;</span>";
    };
    OsxBuilder.prototype.login = function (counter) {
        var date = new Date();
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var hours = (0, utils_1.strPad)(date.getHours().toString(), 2, 'STR_PAD_LEFT');
        var minutes = (0, utils_1.strPad)(date.getMinutes().toString(), 2, 'STR_PAD_LEFT');
        var seconds = (0, utils_1.strPad)(date.getSeconds().toString(), 2, 'STR_PAD_LEFT');
        return {
            command: "Last login: " +
                (days[date.getDay()] + " " + months[date.getMonth()] + " " + hours + ":" + minutes + ":" + seconds + " on ttys000"),
            output: true,
            counter: counter,
        };
    };
    OsxBuilder.prototype.sudo = function (params) {
        params = _super.prototype.sudo.call(this, params);
        params.command = "Password: <span class=\"icon-key\"></span>";
        return params;
    };
    return OsxBuilder;
}(index_1.DefaultBuilder));
exports.OsxBuilder = OsxBuilder;


/***/ }),

/***/ "./src/Builders/UbuntuBuilder.ts":
/*!***************************************!*\
  !*** ./src/Builders/UbuntuBuilder.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UbuntuBuilder = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/Builders/index.ts");
var UbuntuBuilder = (function (_super) {
    __extends(UbuntuBuilder, _super);
    function UbuntuBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UbuntuBuilder;
}(index_1.DefaultBuilder));
exports.UbuntuBuilder = UbuntuBuilder;


/***/ }),

/***/ "./src/Builders/WindowsBuilder.ts":
/*!****************************************!*\
  !*** ./src/Builders/WindowsBuilder.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowsBuilder = void 0;
var Shell_1 = __webpack_require__(/*! ../Shell */ "./src/Shell/index.ts");
var index_1 = __webpack_require__(/*! ./index */ "./src/Builders/index.ts");
var WindowsBuilder = (function (_super) {
    __extends(WindowsBuilder, _super);
    function WindowsBuilder(options) {
        var _this = _super.call(this, options) || this;
        _this._char = '&gt;';
        if (_this.options.path === '~') {
            _this.options.path = 'C:\\Windows\\system32\\';
        }
        return _this;
    }
    WindowsBuilder.prototype.addStatusBar = function () {
        var buttons = new Shell_1.StatusBarButtons("<button class=\"button button--minimize\"><i class=\"icon-minimize\"></i></button>" +
            "<button class=\"button button--enlarge\"><i class=\"icon-enlarge\"></i></button>" +
            "<button class=\"button button--close\"><i class=\"icon-close\"></i></button>");
        var icon = new Shell_1.StatusBarIcon("<i class=\"icon-command\"></i>");
        var title = new Shell_1.StatusBarTitle('Command Prompt');
        this.shell.statusBar = new Shell_1.StatusBar(buttons, icon, title);
        return this;
    };
    WindowsBuilder.prototype.getPrefix = function () {
        return "<span class=\"line__prefix\">" +
            ("<span class=\"path\">" + this.options.path + "</span>") +
            ("<span class=\"char\">" + this.char + "</span>") +
            "</span>";
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
}(index_1.DefaultBuilder));
exports.WindowsBuilder = WindowsBuilder;


/***/ }),

/***/ "./src/Builders/index.ts":
/*!*******************************!*\
  !*** ./src/Builders/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BuilderFactory */ "./src/Builders/BuilderFactory.ts"), exports);
__exportStar(__webpack_require__(/*! ./BuilderInterface */ "./src/Builders/BuilderInterface.ts"), exports);
__exportStar(__webpack_require__(/*! ./DefaultBuilder */ "./src/Builders/DefaultBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./OsxBuilder */ "./src/Builders/OsxBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./UbuntuBuilder */ "./src/Builders/UbuntuBuilder.ts"), exports);
__exportStar(__webpack_require__(/*! ./WindowsBuilder */ "./src/Builders/WindowsBuilder.ts"), exports);


/***/ }),

/***/ "./src/Interfaces/CommandParams.ts":
/*!*****************************************!*\
  !*** ./src/Interfaces/CommandParams.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Interfaces/Options.ts":
/*!***********************************!*\
  !*** ./src/Interfaces/Options.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Interfaces/Style.ts":
/*!*********************************!*\
  !*** ./src/Interfaces/Style.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Style = void 0;
var Style;
(function (Style) {
    Style["DEFAULT"] = "default";
    Style["OSX"] = "osx";
    Style["UBUNTU"] = "ubuntu";
    Style["WINDOWS"] = "windows";
})(Style = exports.Style || (exports.Style = {}));


/***/ }),

/***/ "./src/Interfaces/Theme.ts":
/*!*********************************!*\
  !*** ./src/Interfaces/Theme.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Theme = void 0;
var Theme;
(function (Theme) {
    Theme["DARK"] = "dark";
    Theme["LIGHT"] = "light";
})(Theme = exports.Theme || (exports.Theme = {}));


/***/ }),

/***/ "./src/Interfaces/index.ts":
/*!*********************************!*\
  !*** ./src/Interfaces/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./CommandParams */ "./src/Interfaces/CommandParams.ts"), exports);
__exportStar(__webpack_require__(/*! ./Options */ "./src/Interfaces/Options.ts"), exports);
__exportStar(__webpack_require__(/*! ./Style */ "./src/Interfaces/Style.ts"), exports);
__exportStar(__webpack_require__(/*! ./Theme */ "./src/Interfaces/Theme.ts"), exports);


/***/ }),

/***/ "./src/Shell/Content.ts":
/*!******************************!*\
  !*** ./src/Shell/Content.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Content = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/Shell/index.ts");
var Content = (function () {
    function Content(content) {
        this.content = content;
    }
    Content.prototype.toString = function () {
        return "<div class=\"" + index_1.Shell.IDENTIFIER + "__content\">" + this.content + "</div>";
    };
    return Content;
}());
exports.Content = Content;


/***/ }),

/***/ "./src/Shell/Shell.ts":
/*!****************************!*\
  !*** ./src/Shell/Shell.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shell = void 0;
var Shell = (function () {
    function Shell(options) {
        this.options = options;
    }
    Object.defineProperty(Shell.prototype, "statusBar", {
        set: function (value) {
            this._statusBar = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shell.prototype, "content", {
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shell.prototype, "classes", {
        get: function () {
            var classes = [Shell.IDENTIFIER];
            if (this.options.style !== 'default') {
                classes.push(Shell.IDENTIFIER + "--" + this.options.style);
            }
            if (this.options.theme !== 'dark') {
                classes.push(Shell.IDENTIFIER + "--" + this.options.theme);
            }
            if (this.options.responsive) {
                classes.push(Shell.IDENTIFIER + "--responsive");
            }
            if (this.options.typed && typeof this.options.typed === 'function') {
                classes.push(Shell.IDENTIFIER + "--typed");
            }
            return classes;
        },
        enumerable: false,
        configurable: true
    });
    Shell.prototype.toString = function () {
        return this._statusBar.toString() + this._content.toString();
    };
    Shell.IDENTIFIER = 'shell';
    return Shell;
}());
exports.Shell = Shell;


/***/ }),

/***/ "./src/Shell/ShellElement.ts":
/*!***********************************!*\
  !*** ./src/Shell/ShellElement.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Shell/StatusBar.ts":
/*!********************************!*\
  !*** ./src/Shell/StatusBar.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBar = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/Shell/index.ts");
var StatusBar = (function () {
    function StatusBar() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.elements = elements;
    }
    StatusBar.prototype.toString = function () {
        var content = "<div class=\"" + index_1.Shell.IDENTIFIER + "__" + StatusBar.IDENTIFIER + "\">";
        this.elements.forEach(function (el) {
            content += el.toString();
        });
        content += "</div>";
        return content;
    };
    StatusBar.IDENTIFIER = 'status-bar';
    return StatusBar;
}());
exports.StatusBar = StatusBar;


/***/ }),

/***/ "./src/Shell/StatusBarButtons.ts":
/*!***************************************!*\
  !*** ./src/Shell/StatusBarButtons.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBarButtons = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/Shell/index.ts");
var StatusBarButtons = (function () {
    function StatusBarButtons(content) {
        this.content = content;
    }
    StatusBarButtons.prototype.toString = function () {
        return "<div class=\"" + index_1.StatusBar.IDENTIFIER + "__buttons\">" + this.content + "</div>";
    };
    return StatusBarButtons;
}());
exports.StatusBarButtons = StatusBarButtons;


/***/ }),

/***/ "./src/Shell/StatusBarIcon.ts":
/*!************************************!*\
  !*** ./src/Shell/StatusBarIcon.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBarIcon = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/Shell/index.ts");
var StatusBarIcon = (function () {
    function StatusBarIcon(content) {
        this.content = content;
    }
    StatusBarIcon.prototype.toString = function () {
        return "<div class=\"" + index_1.StatusBar.IDENTIFIER + "__icon\">" + this.content + "</div>";
    };
    return StatusBarIcon;
}());
exports.StatusBarIcon = StatusBarIcon;


/***/ }),

/***/ "./src/Shell/StatusBarTitle.ts":
/*!*************************************!*\
  !*** ./src/Shell/StatusBarTitle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBarTitle = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/Shell/index.ts");
var StatusBarTitle = (function () {
    function StatusBarTitle(content) {
        this.content = content;
    }
    StatusBarTitle.prototype.toString = function () {
        return "<div class=\"" + index_1.StatusBar.IDENTIFIER + "__title\">" + this.content + "</div>";
    };
    return StatusBarTitle;
}());
exports.StatusBarTitle = StatusBarTitle;


/***/ }),

/***/ "./src/Shell/index.ts":
/*!****************************!*\
  !*** ./src/Shell/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ShellElement */ "./src/Shell/ShellElement.ts"), exports);
__exportStar(__webpack_require__(/*! ./Shell */ "./src/Shell/Shell.ts"), exports);
__exportStar(__webpack_require__(/*! ./StatusBar */ "./src/Shell/StatusBar.ts"), exports);
__exportStar(__webpack_require__(/*! ./StatusBarIcon */ "./src/Shell/StatusBarIcon.ts"), exports);
__exportStar(__webpack_require__(/*! ./StatusBarTitle */ "./src/Shell/StatusBarTitle.ts"), exports);
__exportStar(__webpack_require__(/*! ./StatusBarButtons */ "./src/Shell/StatusBarButtons.ts"), exports);
__exportStar(__webpack_require__(/*! ./Content */ "./src/Shell/Content.ts"), exports);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../assets/style/main.scss */ "./assets/style/main.scss");
var Builders_1 = __webpack_require__(/*! ./Builders */ "./src/Builders/index.ts");
var Interfaces_1 = __webpack_require__(/*! ./Interfaces */ "./src/Interfaces/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
module.exports = (function () {
    function Shell(selector, options) {
        this.options = {
            commands: [],
            host: 'host',
            path: '~',
            responsive: true,
            root: false,
            style: Interfaces_1.Style.DEFAULT,
            theme: Interfaces_1.Theme.DARK,
            typed: undefined,
            user: 'user',
        };
        if ((0, utils_1.$)(selector).length) {
            this.el = (0, utils_1.$)(selector)[0];
            this.factory = new Builders_1.BuilderFactory();
            this.options = __assign(__assign({}, this.options), options);
            this.init();
        }
    }
    Shell.prototype.init = function () {
        var builder = this.factory.create(this.options);
        var shell = builder.addStatusBar().addContent().build();
        var currentClasses = this.el.className.split(' ').filter(function (className) {
            return className !== '' && shell.classes.indexOf(className) === -1;
        });
        this.el.className = currentClasses.join(' ') + " " + shell.classes.join(' ');
        this.el.innerHTML = shell.toString();
        if (this.options.typed && typeof this.options.typed === 'function') {
            this.type(0, (0, utils_1.$)(".line", this.el).length || 0);
        }
    };
    Shell.prototype.type = function (index, commandsNum) {
        var _this = this;
        if (commandsNum > 0) {
            var line_1 = (0, utils_1.$)(".line[data-index=\"" + index + "\"]", this.el);
            var delay = 600;
            if (line_1.length) {
                var commandEl = (0, utils_1.$)(".command", line_1[0]);
                var commandContent = commandEl[0].innerHTML;
                line_1[0].className = "line--active " + line_1[0].className;
                if (commandEl[0].className.indexOf("line--output") === -1 && index < commandsNum - 1) {
                    commandEl[0].innerHTML = '';
                    new this.options.typed(commandEl[0], {
                        strings: [commandContent + "^" + delay],
                        typeSpeed: 90,
                        loop: false,
                        contentType: 'html',
                        cursorChar: '&nbsp;',
                        showCursor: true,
                        onStringTyped: function () {
                            line_1[0].removeChild((0, utils_1.$)(".typed-cursor", line_1[0])[0]);
                            _this.type((index + 1), commandsNum);
                        },
                    });
                }
                else if (index <= commandsNum - 2) {
                    this.type((index + 1), commandsNum);
                }
            }
        }
    };
    ;
    return Shell;
}());


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.$ = exports.strPad = exports.PadType = void 0;
var PadType;
(function (PadType) {
    PadType["STR_PAD_BOTH"] = "STR_PAD_BOTH";
    PadType["STR_PAD_LEFT"] = "STR_PAD_LEFT";
    PadType["STR_PAD_RIGHT"] = "STR_PAD_RIGHT";
})(PadType = exports.PadType || (exports.PadType = {}));
function strPad(input, length, string, type) {
    if (type === void 0) { type = PadType.STR_PAD_RIGHT; }
    var half = '';
    var padToGo;
    var repeater = function (s, len) {
        var collect = '';
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
function $(selector, parent) {
    if (parent === void 0) { parent = window.document; }
    return parent.querySelectorAll(selector);
}
exports.$ = $;


/***/ }),

/***/ "./assets/fonts/shell.eot?kg1zqe":
/*!***************************************!*\
  !*** ./assets/fonts/shell.eot?kg1zqe ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:application/vnd.ms-fontobject;base64,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");

/***/ }),

/***/ "./assets/fonts/shell.svg?kg1zqe":
/*!***************************************!*\
  !*** ./assets/fonts/shell.svg?kg1zqe ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPG1ldGFkYXRhPkdlbmVyYXRlZCBieSBJY29Nb29uPC9tZXRhZGF0YT4KICAgIDxkZWZzPgogICAgICAgIDxmb250IGlkPSJpY29tb29uIiBob3Jpei1hZHYteD0iMTAyNCI+CiAgICAgICAgICAgIDxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0Ii8+CiAgICAgICAgICAgIDxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0Ii8+CiAgICAgICAgICAgIDxnbHlwaCB1bmljb2RlPSImI3gyMDsiIGhvcml6LWFkdi14PSI1MTIiIGQ9IiIvPgogICAgICAgICAgICA8Z2x5cGggdW5pY29kZT0iJiN4ZTE1YjsiIGdseXBoLW5hbWU9Im1pbmltaXplIiBkPSJNODEwIDM4NC42NjdoLTU5NnY4NGg1OTZ2LTg0eiIvPgogICAgICAgICAgICA8Z2x5cGggdW5pY29kZT0iJiN4ZTJjNzsiIGdseXBoLW5hbWU9ImZvbGRlciIKICAgICAgICAgICAgICAgICAgIGQ9Ik00MjYgNzY4LjY2N2w4Ni04NmgzNDJjNDYgMCA4NC00MCA4NC04NnYtNDI2YzAtNDYtMzgtODYtODQtODZoLTY4NGMtNDYgMC04NCA0MC04NCA4NnY1MTJjMCA0NiAzOCA4NiA4NCA4NmgyNTZ6Ii8+CiAgICAgICAgICAgIDxnbHlwaCB1bmljb2RlPSImI3hlM2MxOyIgZ2x5cGgtbmFtZT0iZW5sYXJnZSIKICAgICAgICAgICAgICAgICAgIGQ9Ik04MTAgMTI4LjY2N3Y1OTZoLTU5NnYtNTk2aDU5NnpNODEwIDgxMC42NjdjNDYgMCA4Ni00MCA4Ni04NnYtNTk2YzAtNDYtNDAtODYtODYtODZoLTU5NmMtNDYgMC04NiA0MC04NiA4NnY1OTZjMCA0NiA0MCA4NiA4NiA4Nmg1OTZ6Ii8+CiAgICAgICAgICAgIDxnbHlwaCB1bmljb2RlPSImI3hlNWNkOyIgZ2x5cGgtbmFtZT0iY2xvc2UiCiAgICAgICAgICAgICAgICAgICBkPSJNODEwIDY2NC42NjdsLTIzOC0yMzggMjM4LTIzOC02MC02MC0yMzggMjM4LTIzOC0yMzgtNjAgNjAgMjM4IDIzOC0yMzggMjM4IDYwIDYwIDIzOC0yMzggMjM4IDIzOHoiLz4KICAgICAgICAgICAgPGdseXBoIHVuaWNvZGU9IiYjeGU1ZGQ7IiBnbHlwaC1uYW1lPSJjb21tYW5kIgogICAgICAgICAgICAgICAgICAgZD0iTTY4MiA2ODIuNjY3aDg2di01MTJoLTg2djUxMnpNMjM4IDYyMi42NjdsNjAgNjAgMjU2LTI1Ni0yNTYtMjU2LTYwIDYwIDE5NiAxOTZ6Ii8+CiAgICAgICAgICAgIDxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0iZG90IgogICAgICAgICAgICAgICAgICAgZD0iTTM5OS4zNiA0NjAuOGMwLTYyLjIwOCA1MC40ODMtMTEyLjY0IDExMi42OTEtMTEyLjY0czExMi41ODkgNTAuNDgzIDExMi41ODkgMTEyLjY0YzAgNjIuMjA4LTUwLjM4MSAxMTIuNTg5LTExMi41ODkgMTEyLjU4OXMtMTEyLjY5MS01MC4zODEtMTEyLjY5MS0xMTIuNTg5eiIvPgogICAgICAgICAgICA8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImtleSIKICAgICAgICAgICAgICAgICAgIGQ9Ik05MDUuNzc5IDczMC44OGMtMjUuNzU0IDE1Mi40MjItMTY0Ljg2NCAyNTQuMzEtMzEwLjczMyAyMjcuMzc5LTE0NS45Mi0yNi44OC0yNjkuMTA3LTE0NC4xNzktMjQzLjM1NC0yOTYuNzA0IDUuNDc4LTMyLjgxOSAyMC44OS04NC4xNzMgMzkuMDY2LTEyMS4wODhsLTI2NC45Ni0zOTUuNDE4Yy05Ljc3OS0xNC41OTItMTUuMzA5LTQwLjkwOS0xMi4zOS01OC40MTlsMTcuMDUwLTEwMC45MTVjMi45Ny0xNy41MSAxOS4wNDYtMjkuMjg2IDM1Ljg0LTI2LjMxN2w3Ny42MTkgMTQuMzg3YzE2Ljc5NCAzLjAyMSAzOC4wOTMgMTcuODE4IDQ3LjMwOSAzMi43MTdsMTA0LjgwNiAxNjkuNTIzIDAuOTIyIDEuMTI2IDcwLjk2MyAxMy4xMDcgMTIyLjM2OCAxOTguNjA1YzQwLjE5Mi03LjExNyA5Ny44OTQtNC43MSAxMzEuOTk0IDEuNTg3IDE0NS44MTggMjYuOTMxIDIwOS4yNTQgMTg3LjkwNCAxODMuNTAxIDM0MC40Mjl6TTc3Ni40OTkgNjUyLjY5OGMtNDAuMTQxLTU5LjkwNC04MS4xMDEtMTcuNzE1LTEzOC4zOTQgMjQuMzItNTcuMjkzIDQxLjg4Mi0xMDkuMzEyIDY3LjY4Ni02OS4yMjIgMTI3LjU5IDQwLjE0MSA1OS45MDQgMTE5LjA5MSA3NC40OTYgMTc2LjQ4NiAzMi41MTIgNTcuMzQ0LTQxLjkzMyA3MS4yMTktMTI0LjUxOCAzMS4xMy0xODQuNDIyeiIvPgogICAgICAgIDwvZm9udD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./assets/fonts/shell.ttf?kg1zqe":
/*!***************************************!*\
  !*** ./assets/fonts/shell.ttf?kg1zqe ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:font/ttf;base64,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");

/***/ }),

/***/ "./assets/fonts/shell.woff?kg1zqe":
/*!****************************************!*\
  !*** ./assets/fonts/shell.woff?kg1zqe ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:font/woff;base64,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");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./assets/style/main.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=shell.js.map