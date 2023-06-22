"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard_api"] = self["webpackChunkleaderboard_api"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-decoration: none;\r\n}\r\n\r\nbody,\r\nheader,\r\nmain,\r\nsection {\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 17px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  color: #fff;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\nheader,\r\nmain {\r\n  padding: 2rem 1.5rem;\r\n}\r\n\r\n#page-title {\r\n  font-size: 2.5em;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(325px, 40%));\r\n  grid-auto-rows: minmax(200px, auto);\r\n  column-gap: 1rem;\r\n  justify-content: space-around;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  margin: 1.8rem 0;\r\n}\r\n\r\n.section-title {\r\n  font-size: 1.6em;\r\n}\r\n\r\n.btn-actions {\r\n  border: 2px solid #830297;\r\n  border-radius: 0.2rem;\r\n  outline: none;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  color: #fff;\r\n  padding: 0.65rem 1.5rem;\r\n  font-size: 1em;\r\n  box-shadow: #14a5c6ba 0 15px 30px -5px;\r\n  transition: all 0.3s ease-out;\r\n}\r\n\r\n.btn-actions:hover {\r\n  background: linear-gradient(144deg, #591066, #5b42f3 50%, #14a5c6ba);\r\n  border-color: transparent;\r\n  box-shadow: rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px, rgba(17, 17, 26, 0.1) 0 24px 80px;\r\n  transform: translateY(-5px);\r\n}\r\n\r\n#refreshing-message {\r\n  width: 100%;\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  color: #830297;\r\n  background: transparent;\r\n  text-shadow: 0 1px 0 #14a5c6ba, 1px 0 0 #5dabcd, 1px 2px 1px #14a5c6ba, 2px 1px 1px #5dabcd, 2px 3px 2px #14a5c6ba, 3px 2px 2px #5dabcd, 3px 4px 2px #14a5c6ba, 4px 3px 3px #5dabcd, 4px 5px 3px #14a5c6ba, 5px 4px 2px #5dabcd, 5px 6px 2px #14a5c6ba, 6px 5px 2px #5dabcd, 6px 7px 1px #14a5c6ba, 7px 6px 1px #5dabcd, 7px 8px 0 #14a5c6ba, 8px 7px 0 #5dabcd;\r\n}\r\n\r\n#scores-list {\r\n  border: 1px solid #440170;\r\n  border-radius: 0.3rem;\r\n  list-style: none;\r\n  overflow-y: scroll;\r\n  height: 250px;\r\n  background-color: #191c296d;\r\n  position: relative;\r\n}\r\n\r\n#scores-list li {\r\n  padding: 0.4rem 0.6rem;\r\n  font-size: 1em;\r\n  background-color: transparent;\r\n  transition: background-color 0.3s ease-out;\r\n}\r\n\r\n#scores-list li:nth-child(even) {\r\n  background-color: rgba(17, 17, 26, 0.5);\r\n}\r\n\r\n#scores-list li:hover {\r\n  background-color: rgba(17, 17, 26, 0.5);\r\n}\r\n\r\n#add-score-form {\r\n  width: 100%;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.input-group {\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.input-group input {\r\n  width: 100%;\r\n  padding: 0.7rem;\r\n  font-size: 1em;\r\n  background-color: #191c2953;\r\n  border: 1px solid #440170;\r\n  border-radius: 0.3rem;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n\r\n.input-group input::placeholder {\r\n  color: #ffffffa4;\r\n}\r\n\r\n.submit-button {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n#show-form-results {\r\n  font-weight: 600;\r\n  font-style: italic;\r\n  color: #fff;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header,\r\n  main {\r\n    padding: 2rem 2.5rem;\r\n  }\r\n\r\n  #page-title {\r\n    font-size: 4em;\r\n  }\r\n\r\n  #add-score-form {\r\n    width: 70%;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameWallpapers_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameWallpapers.jpg */ \"./src/gameWallpapers.jpg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_loadScores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loadScores.js */ \"./src/modules/loadScores.js\");\n/* harmony import */ var _modules_saveScores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/saveScores.js */ \"./src/modules/saveScores.js\");\n\n\n\n\n\n/* Set a background image to the body */\ndocument.body.style.backgroundImage = `url(${_gameWallpapers_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\n\n(0,_modules_loadScores_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst formSaveScore = document.querySelector('#add-score-form');\nconst btnRefresh = document.querySelector('#btn-refresh');\n\nformSaveScore.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const gameId = localStorage.getItem('game-id');\n  const { name, score } = formSaveScore;\n  (0,_modules_saveScores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(name.value, Number(score.value), gameId);\n  formSaveScore.reset();\n});\n\nbtnRefresh.addEventListener('click', () => {\n  document.querySelector('#refreshing-message').innerHTML = 'Data scores are reloaded!';\n  setTimeout(() => {\n    document.querySelector('#refreshing-message').innerHTML = '';\n  }, 2000);\n  (0,_modules_loadScores_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://leaderboard-api/./src/index.js?");

/***/ }),

/***/ "./src/modules/generateGameId.js":
/*!***************************************!*\
  !*** ./src/modules/generateGameId.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGameIdFromMessage = (gameIdDetails) => gameIdDetails\n  .replace('Game with ID: ', '')\n  .replace(' added.', '');\n\nconst newGameId = async () => {\n  const dateNow = new Date().toUTCString();\n  const options = {\n    method: 'POST',\n    body: JSON.stringify({\n      name: `Revolutionary Game - version of ${dateNow}`,\n    }),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  };\n  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', options);\n  const data = await response.json();\n  return getGameIdFromMessage(data.result);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGameId);\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/generateGameId.js?");

/***/ }),

/***/ "./src/modules/getScores.js":
/*!**********************************!*\
  !*** ./src/modules/getScores.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getScores = async (gameId) => {\n  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);\n  const dataScores = await response.json();\n  return dataScores.result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScores);\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/getScores.js?");

/***/ }),

/***/ "./src/modules/loadScores.js":
/*!***********************************!*\
  !*** ./src/modules/loadScores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateGameId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateGameId.js */ \"./src/modules/generateGameId.js\");\n/* harmony import */ var _getScores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getScores.js */ \"./src/modules/getScores.js\");\n/* harmony import */ var _showScores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showScores.js */ \"./src/modules/showScores.js\");\n\n\n\n\nconst loadScores = async () => {\n  let gameId = localStorage.getItem('game-id');\n  if (!gameId) {\n    gameId = await (0,_generateGameId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    localStorage.setItem('game-id', gameId);\n  }\n  const allScores = await (0,_getScores_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gameId);\n  (0,_showScores_js__WEBPACK_IMPORTED_MODULE_2__.listRecentScores)(allScores);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadScores);\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/loadScores.js?");

/***/ }),

/***/ "./src/modules/saveScores.js":
/*!***********************************!*\
  !*** ./src/modules/saveScores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showScores_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showScores.js */ \"./src/modules/showScores.js\");\n\n\nconst displaySuccessMessage = (message) => {\n  const messageContainer = document.querySelector('#show-form-results');\n  messageContainer.textContent = message;\n  setTimeout(() => {\n    messageContainer.textContent = '';\n  }, 4000);\n};\n\nconst saveNewScore = async (user, score, gameId) => {\n  const data = { user, score };\n  const options = {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json; charset=UTF-8',\n    },\n  };\n  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, options);\n  const finalResult = await response.json();\n  (0,_showScores_js__WEBPACK_IMPORTED_MODULE_0__.insertScoreInDOM)(data);\n  displaySuccessMessage(finalResult.result);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveNewScore);\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/saveScores.js?");

/***/ }),

/***/ "./src/modules/showScores.js":
/*!***********************************!*\
  !*** ./src/modules/showScores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertScoreInDOM: () => (/* binding */ insertScoreInDOM),\n/* harmony export */   listRecentScores: () => (/* binding */ listRecentScores)\n/* harmony export */ });\nconst insertScoreInDOM = ({ user, score }) => {\n  const liElement = document.createElement('li');\n  liElement.textContent = `${user}: ${score}`;\n  document.querySelector('#scores-list').appendChild(liElement);\n};\n\nconst listRecentScores = (scores) => {\n  document.querySelector('#scores-list').innerHTML = '';\n  scores.forEach((score) => insertScoreInDOM(score));\n};\n\n\n//# sourceURL=webpack://leaderboard-api/./src/modules/showScores.js?");

/***/ }),

/***/ "./src/gameWallpapers.jpg":
/*!********************************!*\
  !*** ./src/gameWallpapers.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cff7f275377e6e42fbd7.jpg\";\n\n//# sourceURL=webpack://leaderboard-api/./src/gameWallpapers.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);