<<<<<<< HEAD
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(11)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseResponse;
/* harmony export (immutable) */ __webpack_exports__["c"] = validateUrl;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateEmptyInput;
function parseResponse(response) {
  if (!(response || response.data || response.data.resources)) {
    return;
  }

  var resources = response.data.resources;

  var arrayOfFields = [];
  resources.forEach(function (resource) {
    var fields = {};
    resource.fields.forEach(function (field) {
      if (field.value) {
        fields[field.attribute] = field.value;
      }
    });
    arrayOfFields.push(fields);
  });

  return arrayOfFields;
}

function validateUrl(urlString) {
  var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
  "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
  return !!pattern.test(urlString);
}

function validateEmptyInput(input) {
  return input === "";
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(52);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_buttons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fields__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_labels__ = __webpack_require__(33);




Nova.booting(function (Vue, router, store) {

  Vue.component('cancel-button', __WEBPACK_IMPORTED_MODULE_0__components_buttons__["a" /* CancelButton */]);
  Vue.component('submit-button', __WEBPACK_IMPORTED_MODULE_0__components_buttons__["b" /* SubmitButton */]);
  Vue.component('dropdown-field', __WEBPACK_IMPORTED_MODULE_1__components_fields__["a" /* DropdownField */]);
  Vue.component('text-field', __WEBPACK_IMPORTED_MODULE_1__components_fields__["b" /* TextField */]);
  Vue.component('error-label', __WEBPACK_IMPORTED_MODULE_2__components_labels__["a" /* ErrorLabel */]);
  Vue.component('label-text', __WEBPACK_IMPORTED_MODULE_2__components_labels__["b" /* LabelText */]);

  router.addRoutes([{
    name: 'create-favorites',
    path: '/create-favorites',
    component: __webpack_require__(46)
  }]);
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CancelButton_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CancelButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CancelButton_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubmitButton_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SubmitButton_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SubmitButton_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CancelButton_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__SubmitButton_vue___default.a; });





/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(8)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(12)
/* template */
var __vue_template__ = __webpack_require__(13)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/buttons/CancelButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-97a543f6", Component.options)
  } else {
    hotAPI.reload("data-v-97a543f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("04906d62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-97a543f6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CancelButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-97a543f6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CancelButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(10), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".cancel {\n    text-decoration: none;\n    color: gray;\n    font-weight: bold;\n    margin-right: 20px;\n}\n  ", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "cancel-button"
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("button", { staticClass: "cancel" }, [_vm._v("Cancel")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-97a543f6", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(18)
/* template */
var __vue_template__ = __webpack_require__(19)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/buttons/SubmitButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53148223", Component.options)
  } else {
    hotAPI.reload("data-v-53148223", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5233cab2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53148223\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubmitButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53148223\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubmitButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(17), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".submit-button {\n    border: none;\n    background-color: #3c7fd1;\n    border-radius: 10px;\n    padding: 10px;\n    color: #dfdfdf;\n    font-weight: bold;\n}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "submit-button"
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "submit-button", attrs: { type: "button" } },
      [_c("span", [_vm._v(" Create Favorite ")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53148223", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DropdownField_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DropdownField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DropdownField_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TextField_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TextField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TextField_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__TextField_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__DropdownField_vue___default.a; });





/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(25)
/* template */
var __vue_template__ = __webpack_require__(26)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/fields/DropdownField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41d525be", Component.options)
  } else {
    hotAPI.reload("data-v-41d525be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("55e9e407", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41d525be\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DropdownField.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41d525be\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DropdownField.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(24), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".field-container {\n    display: flex;\n    height: 75px;\n}\n  \n.input-spacing {\n    margin: 5px;\n    padding: 10px;\n    margin-right: 20%;\n    width: 75%;\n}\n  \n.label-spacing {\n    margin: 5px;\n    margin-left: 25px;\n    padding: 10px;\n    padding-top: 20px;\n    width: 25%;\n}\n\n.error {\n  padding: 5px;\n  color: red;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.arrow-decoration {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    background-image: linear-gradient(45deg, transparent 50%, gray 50%),\n      linear-gradient(135deg, gray 50%, transparent 50%),\n      radial-gradient(#ddd 70%, transparent 72%);\n    background-position: calc(100% - 20px) calc(1em + 2px),\n      calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;\n    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;\n    background-repeat: no-repeat;\n  }", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dropdown-field",
  beforeCreate: function beforeCreate() {
    var _this = this;

    Nova.request().get("/nova-api/users").then(function (res) {
      var arrayOfFields = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* parseResponse */])(res);

      arrayOfFields.forEach(function (fields) {
        _this.users.push({ name: fields.name, id: fields.id });
      });
    });
  },
  data: function data() {
    return {
      users: []
    };
  },

  props: {
    label: {
      default: "",
      type: String
    },
    error: {
      default: false,
      type: Boolean
    },
    changeInput: {
      default: function _default() {
        return;
      },
      type: Function
    },
    input: {
      default: "",
      type: String
    }
  },
  computed: {
    computedInput: {
      get: function get() {
        return this.input;
      },
      set: function set(newInput) {
        this.input = newInput;
      }
    },
    errorText: function errorText() {
      return "The " + this.label + " field is required.";
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field-container" }, [
    _c(
      "div",
      { staticClass: "label-spacing" },
      [_c("label-text", { attrs: { label: _vm.label, isRequired: true } })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "input-spacing" },
      [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.computedInput,
                expression: "computedInput"
              }
            ],
            class: {
              "input-error": _vm.error,
              "input-decoration": true,
              "arrow-decoration": true
            },
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.computedInput = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                function($event) {
                  return _vm.changeInput(_vm.input, _vm.label)
                }
              ]
            }
          },
          [
            _c(
              "option",
              {
                attrs: { value: "", selected: "selected", disabled: "disabled" }
              },
              [_vm._v("—")]
            ),
            _vm._v(" "),
            _vm._l(_vm.users, function(user) {
              return _c(
                "option",
                { key: user.name, domProps: { value: user.id } },
                [_vm._v("\n        " + _vm._s(user.name) + "\n      ")]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm.error
          ? _c("error-label", { attrs: { text: _vm.errorText } })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41d525be", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(31)
/* template */
var __vue_template__ = __webpack_require__(32)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/fields/TextField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24d96abc", Component.options)
  } else {
    hotAPI.reload("data-v-24d96abc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("46fd8736", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24d96abc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TextField.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24d96abc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TextField.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(30), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".field-container {\n    display: flex;\n    height: 75px;\n}\n  \n.input-spacing {\n    margin: 5px;\n    padding: 10px;\n    margin-right: 20%;\n    width: 75%;\n}\n  \n.label-spacing {\n    margin: 5px;\n    margin-left: 25px;\n    padding: 10px;\n    padding-top: 20px;\n    width: 25%;\n}\n\n.error {\n  padding: 5px;\n  color: red;\n  font-style: italic;\n  font-size: 12px;\n}\n\n\n.input-decoration {\n    border: 1px solid #6d6b81;\n    width: 100%;\n    height: 100%;\n    padding: 10px 10px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.input-decoration:focus {\n    border: 3px solid #3c3b47;\n    border-radius: 10px;\n    outline: none;\n}\n\n\n.input-error {\n    border-color: red;\n}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "text-field",
  props: {
    label: {
      default: "",
      type: String
    },
    placeholder: {
      default: "",
      type: String
    },
    type: {
      default: "",
      type: String
    },
    error: {
      default: false,
      type: Boolean
    },
    validationError: {
      default: false,
      type: Boolean
    },
    sameError: {
      default: false,
      type: Boolean
    },
    isRequired: {
      default: false,
      type: Boolean
    },
    changeInput: {
      default: function _default() {
        return;
      },
      type: Function
    },
    input: {
      default: "",
      type: String
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    computedInput: {
      get: function get() {
        return this.input;
      },
      set: function set(newInput) {
        this.input = newInput;
      }
    },
    validationText: function validationText() {
      return "The " + this.label + " field must be a Url.";
    },
    errorText: function errorText() {
      return "The " + this.label + " field is required.";
    },
    emptyAndValidationErrorText: function emptyAndValidationErrorText() {
      return "The " + this.label + " field is required and must be a Url.";
    },
    sameErrorText: function sameErrorText() {
      return "This " + this.label + " is already used.";
    }
  }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "field-container" }, [
    _c(
      "div",
      { staticClass: "label-spacing" },
      [
        _c("label-text", {
          attrs: { label: _vm.label, isRequired: _vm.isRequired }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "input-spacing" },
      [
        _vm.type === "checkbox"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.computedInput,
                  expression: "computedInput"
                }
              ],
              class: {
                "input-error":
                  _vm.error || _vm.validationError || _vm.sameError,
                "input-decoration": true
              },
              attrs: { placeholder: _vm.placeholder, type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.computedInput)
                  ? _vm._i(_vm.computedInput, null) > -1
                  : _vm.computedInput
              },
              on: {
                input: function($event) {
                  return _vm.changeInput(_vm.input, _vm.placeholder)
                },
                change: function($event) {
                  var $$a = _vm.computedInput,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.computedInput = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.computedInput = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.computedInput = $$c
                  }
                }
              }
            })
          : _vm.type === "radio"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.computedInput,
                  expression: "computedInput"
                }
              ],
              class: {
                "input-error":
                  _vm.error || _vm.validationError || _vm.sameError,
                "input-decoration": true
              },
              attrs: { placeholder: _vm.placeholder, type: "radio" },
              domProps: { checked: _vm._q(_vm.computedInput, null) },
              on: {
                input: function($event) {
                  return _vm.changeInput(_vm.input, _vm.placeholder)
                },
                change: function($event) {
                  _vm.computedInput = null
                }
              }
            })
          : _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.computedInput,
                  expression: "computedInput"
                }
              ],
              class: {
                "input-error":
                  _vm.error || _vm.validationError || _vm.sameError,
                "input-decoration": true
              },
              attrs: { placeholder: _vm.placeholder, type: _vm.type },
              domProps: { value: _vm.computedInput },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.computedInput = $event.target.value
                  },
                  function($event) {
                    return _vm.changeInput(_vm.input, _vm.placeholder)
                  }
                ]
              }
            }),
        _vm._v(" "),
        _vm.error && _vm.validationError
          ? _c("error-label", {
              attrs: { text: _vm.emptyAndValidationErrorText }
            })
          : _vm.error
          ? _c("error-label", { attrs: { text: _vm.errorText } })
          : _vm.validationError
          ? _c("error-label", { attrs: { text: _vm.validationText } })
          : _vm.sameError
          ? _c("error-label", { attrs: { text: _vm.sameErrorText } })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24d96abc", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LabelText_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LabelText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LabelText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorLabel_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorLabel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ErrorLabel_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__LabelText_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ErrorLabel_vue___default.a; });





/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(38)
/* template */
var __vue_template__ = __webpack_require__(39)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/labels/LabelText.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b771ddc", Component.options)
  } else {
    hotAPI.reload("data-v-5b771ddc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("a8cc1710", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b771ddc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LabelText.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b771ddc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LabelText.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(37), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".required {\n    color: red;\n}", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "label-text",
  props: {
    label: {
      default: "",
      type: String
    },
    isRequired: {
      default: false,
      type: Boolean
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { attrs: { for: _vm.label } }, [
    _vm._v("\n  " + _vm._s(_vm.label) + "\n  "),
    _vm.isRequired
      ? _c("span", { staticClass: "required" }, [_vm._v("*")])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b771ddc", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/labels/ErrorLabel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41deed7e", Component.options)
  } else {
    hotAPI.reload("data-v-41deed7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3406c78e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41deed7e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ErrorLabel.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41deed7e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ErrorLabel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(43), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "error-label",
  props: {
    text: {
      default: "",
      type: String
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "error" }, [_vm._v(_vm._s(_vm.text))])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41deed7e", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(50)
/* template */
var __vue_template__ = __webpack_require__(51)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6e5db1d0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(49), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\nh1 {\n    font-weight: bold;\n    margin-bottom: 7px;\n    margin-left: 5px;\n  }\n  \n  .input-container {\n    margin: 20px;\n  }\n  \n  .input-container-background {\n    background-color: white;\n    border-radius: 10px;\n  }\n  \n  .btn-container {\n    margin-right: 22px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  ", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // Input types
      textInput: "text",
      urlInput: "url",
      dateInput: "date",
      title: "Article Title",
      source: "Article Source",
      postDate: "Post Date",
      author: "Author",
      user: "User",
      createdAt: "Created At",

      // Values
      // valUser: "",

      // Input values
      inputTitle: "",
      inputSource: "",
      inputUser: "",
      inputPostDate: "",
      inputAuthor: "",

      // Errors
      errorTitle: false,
      errorSource: false,
      errorUser: false,
      errorPostDate: false,
      validationErrorSource: false,
      errorSameTitle: false
    };
  },

  methods: {
    submitForm: function submitForm(event) {
      var _this = this;

      this.errorTitle = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* validateEmptyInput */])(this.inputTitle);
      this.errorSource = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* validateEmptyInput */])(this.inputSource);
      this.errorUser = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* validateEmptyInput */])(this.inputUser);
      this.errorPostDate = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* validateEmptyInput */])(this.inputPostDate);

      if (!Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* validateUrl */])(this.inputSource)) {
        this.validationErrorSource = true;
        return;
      }

      // Show Error
      if (this.errorTitle || this.errorSource || this.errorUser) {
        return;
      }

      var formData = new FormData();
      formData.append("title", this.inputTitle);
      formData.append("source", this.inputSource);
      formData.append("posting_date", this.inputPostDate);
      formData.append("author", this.inputAuthor);
      formData.append("created_at", new Date().toLocaleString());
      formData.append("user", this.inputUser);
      formData.append("user_trashed", false);
      formData.append("viaResource", "");
      formData.append("viaResourceId", "");
      formData.append("viaRelationship", "");

      Nova.request().post("/nova-api/favorites?editing=true&editMode=create", formData).then(function (res) {
        _this.clearInputs();
        _this.$toasted.show("Favorite created successfully!", {
          type: "success"
        });
      }).catch(function (e) {
        if (e.response.data.errors.title[0] === "The Article Title has already been taken.") {
          _this.errorSameTitle = true;
        }
      });
    },
    changeInput: function changeInput() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var input = args[0],
          type = args[1];

      if (type === this.title) {
        this.inputTitle = input;
        this.errorTitle = false;
        this.errorSameTitle = false;
      } else if (type === this.source) {
        this.inputSource = input;
        this.errorSource = false;
        this.validationErrorSource = false;
      } else if (type === this.user) {
        this.inputUser = input;
        this.errorUser = false;
      } else if (type === this.postDate) {
        this.inputPostDate = input;
        this.errorPostDate = false;
      } else if (type === this.author) {
        this.inputAuthor = input;
      }
    },
    clearInputs: function clearInputs() {
      this.inputTitle = "";
      this.inputSource = "";
      this.inputUser = "";
      this.inputPostDate = "";
      this.inputAuthor = "";
      this.errorSameTitle = false;
      this.validationErrorSource = false;
      this.errorTitle = false;
      this.errorSource = false;
      this.errorUser = false;
      this.errorPostDate = false;
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "input-container" }, [
      _c("h1", [_vm._v("Create Favorite")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "input-container-background" },
        [
          _c("text-field", {
            attrs: {
              isRequired: true,
              type: _vm.textInput,
              label: _vm.title,
              placeholder: _vm.title,
              error: _vm.errorTitle,
              sameError: _vm.errorSameTitle,
              changeInput: _vm.changeInput,
              input: _vm.inputTitle
            }
          }),
          _vm._v(" "),
          _c("text-field", {
            attrs: {
              isRequired: false,
              type: _vm.textInput,
              label: _vm.author,
              placeholder: _vm.author,
              changeInput: _vm.changeInput,
              input: _vm.inputAuthor
            }
          }),
          _vm._v(" "),
          _c("text-field", {
            attrs: {
              isRequired: true,
              type: _vm.urlInput,
              label: _vm.source,
              placeholder: _vm.source,
              error: _vm.errorSource,
              validationError: _vm.validationErrorSource,
              changeInput: _vm.changeInput,
              input: _vm.inputSource
            }
          }),
          _vm._v(" "),
          _c("text-field", {
            attrs: {
              isRequired: true,
              type: _vm.dateInput,
              label: _vm.postDate,
              placeholder: _vm.postDate,
              error: _vm.errorPostDate,
              changeInput: _vm.changeInput,
              input: _vm.inputPostDate
            }
          }),
          _vm._v(" "),
          _c("dropdown-field", {
            attrs: {
              label: _vm.user,
              error: _vm.errorUser,
              changeInput: _vm.changeInput,
              input: _vm.inputUser
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "btn-container" },
      [
        _c("cancel-button", {
          nativeOn: {
            click: function($event) {
              return _vm.clearInputs($event)
            }
          }
        }),
        _vm._v(" "),
        _c("submit-button", {
          nativeOn: {
            click: function($event) {
              return _vm.submitForm($event)
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
=======
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){r(2),t.exports=r(15)},function(t,e,r){Nova.booting(function(t,e,n){e.addRoutes([{name:"create-favorites",path:"/create-favorites",component:r(3)}])})},function(t,e,r){var n=r(9)(r(10),r(14),!1,function(t){r(4)},null,null);t.exports=n.exports},function(t,e,r){var n=r(5);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(7)("eede8234",n,!0,{})},function(t,e,r){(e=t.exports=r(0)(!1)).i(r(6),""),e.push([t.i,"",""])},function(t,e,r){(t.exports=r(0)(!1)).push([t.i,"h1{font-weight:700;margin-bottom:7px;margin-left:5px}.input-container{margin:20px}.input-container-background{background-color:#fff;border-radius:10px}.btn-container{margin-right:22px;display:flex;align-items:center;justify-content:center}.field-container{display:flex;height:75px}.input-spacing{margin:5px;padding:10px;margin-right:20%;width:75%}.label-spacing{margin:5px;margin-left:25px;padding:10px;padding-top:20px;width:25%}",""])},function(t,e,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=r(8),o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},p=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(g(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(g(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,r,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(f){var i=u++;n=s||(s=v()),e=x.bind(null,n,i,!1),r=x.bind(null,n,i,!0)}else n=v(),e=function(t,e){var r=e.css,n=e.media,i=e.sourceMap;n&&t.setAttribute("media",n);p.ssrId&&t.setAttribute(h,e.id);i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}t.exports=function(t,e,r,n){c=r,p=n||{};var a=i(t,e);return d(a),function(e){for(var r=[],n=0;n<a.length;n++){var s=a[n];(u=o[s.id]).refs--,r.push(u)}e?d(a=i(t,e)):a=[];for(n=0;n<r.length;n++){var u;if(0===(u=r[n]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}};var y,m=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}},function(t,e){t.exports=function(t,e,r,n,i,o){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var p=l.functional,h=p?l.render:l.beforeCreate;p?(l._injectStyles=c,l.render=function(t,e){return c.call(e),h(t,e)}):l.beforeCreate=h?[].concat(h,c):[c]}return{esModule:a,exports:s,options:l}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),i=r.n(n);function o(t){if(t||t.data||t.data.resources){var e=[];return t.data.resources.forEach(function(t){var r={};t.fields.forEach(function(t){t.value&&(r[t.attribute]=t.value)}),e.push(r)}),e}}function a(t){return""===t}e.default={data:function(){return{textInput:"text",urlInput:"url",dateInput:"date",title:"Article Title",source:"Article Source",postDate:"Post Date",author:"Author",user:"User",createdAt:"Created At",users:[],inputTitle:"",inputSource:"",inputUser:"",inputPostDate:"",inputAuthor:"",errorTitle:!1,errorSource:!1,errorUser:!1,errorPostDate:!1,validationErrorSource:!1,errorSameTitle:!1}},methods:{submitForm:function(t){var e,r=this;if(this.errorTitle=a(this.inputTitle),this.errorSource=a(this.inputSource),this.errorUser=a(this.inputUser),this.errorPostDate=a(this.inputPostDate),e=this.inputSource,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)){if(!(this.errorTitle||this.errorSource||this.errorUser)){var n=new FormData;n.append("title",this.inputTitle),n.append("source",this.inputSource),n.append("posting_date",this.inputPostDate),n.append("author",this.inputAuthor),n.append("created_at",(new Date).toLocaleString()),n.append("user",this.inputUser),n.append("user_trashed",!1),n.append("viaResource",""),n.append("viaResourceId",""),n.append("viaRelationship",""),Nova.request().post("/nova-api/favorites?editing=true&editMode=create",n).then(function(t){r.clearInputs(),r.$toasted.show("Favorite created successfully!",{type:"success"})}).catch(function(t){"The Article Title has already been taken."===t.response.data.errors.title[0]&&(r.errorSameTitle=!0)})}}else this.validationErrorSource=!0},changeInput:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e[0],i=e[1];i===this.title?(this.inputTitle=n,this.errorTitle=!1,this.errorSameTitle=!1):i===this.source?(this.inputSource=n,this.errorSource=!1,this.validationErrorSource=!1):i===this.user?(this.inputUser=n,this.errorUser=!1):i===this.postDate?(this.inputPostDate=n,this.errorPostDate=!1):i===this.author&&(this.inputAuthor=n)},clearInputs:function(){this.inputTitle="",this.inputSource="",this.inputUser="",this.inputPostDate="",this.inputAuthor="",this.errorSameTitle=!1,this.validationErrorSource=!1,this.errorTitle=!1,this.errorSource=!1,this.errorUser=!1,this.errorPostDate=!1},getUsers:function(){var t,e=(t=i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Nova.request().get("/nova-api/users").then(function(t){var e=[];return o(t).forEach(function(t){e.push({name:t.name,id:t.id})}),e}));case 1:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(i,o){try{var a=e[i](o),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},function(t,e,r){t.exports=r(12)},function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(13),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{(l=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==n&&i.call(m,a)&&(g=m);var x=S.prototype=w.prototype=Object.create(g);E.prototype=x.constructor=S,S.constructor=E,S[u]=E.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},C(T.prototype),T.prototype[s]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,r,n){var i=new T(b(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(x),x[u]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new U(n||[]);return o._invoke=function(t,e,r){var n=p;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return O()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=_(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function w(){}function E(){}function S(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,a){var s=_(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},a)}a(s.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-container"},[r("h1",[t._v("Create Favorite")]),t._v(" "),r("div",{staticClass:"input-container-background"},[r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.title,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.textInput,error:t.errorTitle,sameError:t.errorSameTitle,placeholder:t.title,changeInput:t.changeInput,input:t.inputTitle}}),t._v(" "),r("error-label",{attrs:{label:t.title,emptyError:t.errorTitle,sameError:t.errorSameTitle}})],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.author,isRequired:!1}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.textInput,placeholder:t.author,changeInput:t.changeInput,input:t.inputAuthor}})],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.source,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.urlInput,error:t.errorSource,validationError:t.validationErrorSource,placeholder:t.source,changeInput:t.changeInput,input:t.inputSource}}),t._v(" "),r("error-label",{attrs:{label:t.source,errorType:t.emptyAndInvalidError,emptyError:t.errorSource,validationError:t.validationErrorSource}})],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.source,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("text-input",{attrs:{type:t.dateInput,error:t.errorPostDate,placeholder:t.postDate,changeInput:t.changeInput,input:t.inputPostDate}}),t._v(" "),r("error-label",{attrs:{label:t.postDate,emptyError:t.errorPostDate}})],1)]),t._v(" "),r("div",{staticClass:"field-container"},[r("div",{staticClass:"label-spacing"},[r("label-text",{attrs:{label:t.user,isRequired:!0}})],1),t._v(" "),r("div",{staticClass:"input-spacing"},[r("dropdown-input",{attrs:{label:t.user,input:t.inputUser,changeInput:t.changeInput,getOptions:t.getUsers,error:t.errorUser}}),t._v(" "),r("error-label",{attrs:{label:t.user,emptyError:t.errorUser}})],1)])])]),t._v(" "),r("div",{staticClass:"btn-container"},[r("cancel-button",{nativeOn:{click:function(e){return t.clearInputs(e)}}}),t._v(" "),r("submit-button",{nativeOn:{click:function(e){return t.submitForm(e)}}})],1)])},staticRenderFns:[]}},function(t,e){}]);
>>>>>>> Unify ErrorLabels and remove extra computed property in TextInput
