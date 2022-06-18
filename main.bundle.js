/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Poppins-Regular.ttf */ "./src/font/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Poppins-Bold.ttf */ "./src/font/Poppins-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root{\n    --bg-color: #171b25;\n    --card-bg-color: #1e222d;\n    --card-bg-color-loading: rgba(30, 34, 45, 0.8);\n    --card-border-color: #3a445c;\n    --text-color-light: #ffffff;\n    --text-color-hl: #a7b1fc;\n    --toggle-settings: #24c5b6;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n  \n\nbody{\n    background-color: var(--bg-color);\n    color: var(--text-color-light);\n    font-family: 'poppins', Ubuntu,sans-serif;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n}\n\nh2{\n    font-size: 2rem;\n    color: var(--text-color-hl);\n}\n\nh3{\n    font-size: 2rem;\n}\n\nh4{\n    font-size: 1.2rem;\n}\n\np{\n    font-size: 1rem;\n}\n\n.shadow{\n    box-shadow: 0px 0px 250px 50px var(--text-color-hl);\n    position: absolute;\n    top: 50%;\n}\n\n/***************\nHEADER (SEARCH BAR)\n***************/\n.header{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    border-bottom: 1px solid var(--text-color-hl);\n    box-shadow: 0 0 24px 2px var(--text-color-hl);\n}\n\n.search{\n    width: 90%;\n    max-width: 440px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.search form{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n\n.search form input{\n    flex: 1;\n    padding: 8px 8px 8px 48px;\n    color: var(--text-color-light);\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    font-style: italic;\n    font-size: 1rem;\n}\n\n.search form button{\n    background: 0;\n    border: 0;\n    color: var(--text-color-light);\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.search form button:hover{\n    cursor: pointer;\n    color: var(--text-color-hl);\n    }\n    \n\n/***************\nCONTENT\n***************/\n\n.content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n}\n\n/* Current Weather Card*/\n\n.current-card{\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    display: grid;\n    grid-template-areas: \n    \"current-header current-header\" \n    \"current-main current-second\";\n    grid-template-columns: 60% 40%;\n    margin-top: 32px;\n}\n\n.current-card-header{\n    grid-area: current-header;\n    padding: 16px;\n    border-bottom: 1px solid var(--text-color-hl);\n}\n\n.current-card-main{\n    grid-area: current-main;\n    padding: 16px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(106px, 1fr));\n    grid-template-rows: 128px;\n    align-items: center;\n    text-align: center;\n    position: relative;\n}\n\n.current-card-main > img{\n    height: 128px;\n    justify-self: center;\n}\n\n.current-card-main > p{\n    font-weight: 300;\n    font-style: italic;\n    text-transform: capitalize;\n    position: absolute;\n    bottom: 32px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n}\n.current-card-loc{\n    display: flex;\n    align-items: flex-end;\n}\n\n.current-card-loc span{\n    font-style: italic;\n    margin: 6px 8px;\n}\n.current-card-second{\n    grid-area: current-second;\n    padding: 0px 16px;\n    margin: 36px 0;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    font-weight: 300;\n    letter-spacing: 0.2px;\n}\n\n.current-card-second > p{\n    border-bottom: 1px solid var(--text-color-hl);\n    padding: 8px 8px;\n}\n\n\n/* Week Weather Card*/\n.week-card{    \n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    padding: 16px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.week-card-day{\n\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.week-card-day img{\n    height: 42px;\n    aspect-ratio: 1;\n}\n\n.week-card-day :last-child{\n    color:var(--text-color-hl);\n    font-size: 0.90rem;\n}\n\n/***************\nSETTINGS °C / °F\n***************/\n.settings-card{    \n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    padding: 16px 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.switch-container{\n    position: relative;\n    display: flex;\n    gap: 8px;\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 80%;\n}\n\n.option{\n    z-index: 1;\n    flex: 1;\n    cursor: pointer;\n    padding: 8px 0;\n}\n\n.flip{\n    position: absolute;\n    top: 0;\n    left: 0%;\n    width: 50%;\n    height: 100%;\n    border-radius: 4px;\n    background-color: var(--toggle-settings);\n    transition: left .5s ease-in-out;\n}\n\n\n/***************\nLOADING ANIMATION\n***************/\n.loading {\n    display: none;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    bottom: 6px;\n    left: 54px;\n    animation: loading-anim 1.2s linear infinite;\n}\n\n.loading > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n/* Loading screen */\n.loading-screen{\n    position: absolute;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--card-bg-color-loading);\n    border: 1px solid var(--card-border-color);\n    width: 100%;\n    height: 100%;\n}\n\n.loading-big {\n    display: flex;\n    animation: loading-anim 1.2s linear infinite;\n    height: 96px;\n    width: 96px;\n}\n\n.loading-big  > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading-big  > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n@keyframes loading-anim {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/***************\nModal\n***************/\n\n.modal{\n    display: flex;\n    opacity: 0;\n    flex-direction: column;\n    position: absolute;\n    left: 50%;\n    bottom: 32px;\n\n\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n    left: 50%;\n    bottom: 32px;\n\n    background-color: rgb(255, 255, 255);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n\n    transform: translateX(-50%);\n    transition: opacity 1s ease-in-out;\n}\n\n.modal svg{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal h2{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal p{\n    color: var(--card-border-color);\n    margin: 8px;\n}\n\n.modal-close{\n    position: absolute;\n    top: 8px;\n    right: 8px;;\n}\n\n.modal-close :hover{\n    cursor: pointer;\n    color: var(--card-border-color);\n}\n/***************\nJS CLASS\n***************/\n\n.show{\n    display: flex;\n    opacity: 1;\n}\n\n.flip-active{\n    left: 50%;\n}\n\n/***************\nPRELOAD\nAvoid to trigger animation on page loading\n***************/\n\n.preload * {\n    -webkit-transition: none !important;\n    -moz-transition: none !important;\n    -ms-transition: none !important;\n    -o-transition: none !important;\n  }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root{\n    --bg-color: #171b25;\n    --card-bg-color: #1e222d;\n    --card-bg-color-loading: rgba(30, 34, 45, 0.8);\n    --card-border-color: #3a445c;\n    --text-color-light: #ffffff;\n    --text-color-hl: #a7b1fc;\n    --toggle-settings: #24c5b6;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('./font/Poppins-Regular.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('./font/Poppins-Bold.ttf') format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n  \n\nbody{\n    background-color: var(--bg-color);\n    color: var(--text-color-light);\n    font-family: 'poppins', Ubuntu,sans-serif;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n}\n\nh2{\n    font-size: 2rem;\n    color: var(--text-color-hl);\n}\n\nh3{\n    font-size: 2rem;\n}\n\nh4{\n    font-size: 1.2rem;\n}\n\np{\n    font-size: 1rem;\n}\n\n.shadow{\n    box-shadow: 0px 0px 250px 50px var(--text-color-hl);\n    position: absolute;\n    top: 50%;\n}\n\n/***************\nHEADER (SEARCH BAR)\n***************/\n.header{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    border-bottom: 1px solid var(--text-color-hl);\n    box-shadow: 0 0 24px 2px var(--text-color-hl);\n}\n\n.search{\n    width: 90%;\n    max-width: 440px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.search form{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n\n.search form input{\n    flex: 1;\n    padding: 8px 8px 8px 48px;\n    color: var(--text-color-light);\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    font-style: italic;\n    font-size: 1rem;\n}\n\n.search form button{\n    background: 0;\n    border: 0;\n    color: var(--text-color-light);\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.search form button:hover{\n    cursor: pointer;\n    color: var(--text-color-hl);\n    }\n    \n\n/***************\nCONTENT\n***************/\n\n.content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n}\n\n/* Current Weather Card*/\n\n.current-card{\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    display: grid;\n    grid-template-areas: \n    \"current-header current-header\" \n    \"current-main current-second\";\n    grid-template-columns: 60% 40%;\n    margin-top: 32px;\n}\n\n.current-card-header{\n    grid-area: current-header;\n    padding: 16px;\n    border-bottom: 1px solid var(--text-color-hl);\n}\n\n.current-card-main{\n    grid-area: current-main;\n    padding: 16px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(106px, 1fr));\n    grid-template-rows: 128px;\n    align-items: center;\n    text-align: center;\n    position: relative;\n}\n\n.current-card-main > img{\n    height: 128px;\n    justify-self: center;\n}\n\n.current-card-main > p{\n    font-weight: 300;\n    font-style: italic;\n    text-transform: capitalize;\n    position: absolute;\n    bottom: 32px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n}\n.current-card-loc{\n    display: flex;\n    align-items: flex-end;\n}\n\n.current-card-loc span{\n    font-style: italic;\n    margin: 6px 8px;\n}\n.current-card-second{\n    grid-area: current-second;\n    padding: 0px 16px;\n    margin: 36px 0;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    font-weight: 300;\n    letter-spacing: 0.2px;\n}\n\n.current-card-second > p{\n    border-bottom: 1px solid var(--text-color-hl);\n    padding: 8px 8px;\n}\n\n\n/* Week Weather Card*/\n.week-card{    \n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    padding: 16px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.week-card-day{\n\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.week-card-day img{\n    height: 42px;\n    aspect-ratio: 1;\n}\n\n.week-card-day :last-child{\n    color:var(--text-color-hl);\n    font-size: 0.90rem;\n}\n\n/***************\nSETTINGS °C / °F\n***************/\n.settings-card{    \n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    padding: 16px 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.switch-container{\n    position: relative;\n    display: flex;\n    gap: 8px;\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 80%;\n}\n\n.option{\n    z-index: 1;\n    flex: 1;\n    cursor: pointer;\n    padding: 8px 0;\n}\n\n.flip{\n    position: absolute;\n    top: 0;\n    left: 0%;\n    width: 50%;\n    height: 100%;\n    border-radius: 4px;\n    background-color: var(--toggle-settings);\n    transition: left .5s ease-in-out;\n}\n\n\n/***************\nLOADING ANIMATION\n***************/\n.loading {\n    display: none;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    bottom: 6px;\n    left: 54px;\n    animation: loading-anim 1.2s linear infinite;\n}\n\n.loading > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n/* Loading screen */\n.loading-screen{\n    position: absolute;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--card-bg-color-loading);\n    border: 1px solid var(--card-border-color);\n    width: 100%;\n    height: 100%;\n}\n\n.loading-big {\n    display: flex;\n    animation: loading-anim 1.2s linear infinite;\n    height: 96px;\n    width: 96px;\n}\n\n.loading-big  > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading-big  > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n@keyframes loading-anim {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/***************\nModal\n***************/\n\n.modal{\n    display: flex;\n    opacity: 0;\n    flex-direction: column;\n    position: absolute;\n    left: 50%;\n    bottom: 32px;\n\n\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n    left: 50%;\n    bottom: 32px;\n\n    background-color: rgb(255, 255, 255);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n\n    transform: translateX(-50%);\n    transition: opacity 1s ease-in-out;\n}\n\n.modal svg{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal h2{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal p{\n    color: var(--card-border-color);\n    margin: 8px;\n}\n\n.modal-close{\n    position: absolute;\n    top: 8px;\n    right: 8px;;\n}\n\n.modal-close :hover{\n    cursor: pointer;\n    color: var(--card-border-color);\n}\n/***************\nJS CLASS\n***************/\n\n.show{\n    display: flex;\n    opacity: 1;\n}\n\n.flip-active{\n    left: 50%;\n}\n\n/***************\nPRELOAD\nAvoid to trigger animation on page loading\n***************/\n\n.preload * {\n    -webkit-transition: none !important;\n    -moz-transition: none !important;\n    -ms-transition: none !important;\n    -o-transition: none !important;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachDayOfInterval/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachDayOfInterval/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eachDayOfInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `eachDay` to `eachDayOfInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))
 *
 *   // v2.0.0 onward
 *
 *   eachDayOfInterval(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
 *   )
 *   ```
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start);
  var endDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFlip": () => (/* binding */ animationFlip),
/* harmony export */   "convertTemp": () => (/* binding */ convertTemp),
/* harmony export */   "errorModal": () => (/* binding */ errorModal),
/* harmony export */   "loadingIcon": () => (/* binding */ loadingIcon),
/* harmony export */   "populateDom": () => (/* binding */ populateDom)
/* harmony export */ });
const currentCity = document.querySelector('.current-city');
const currentCountry = document.querySelector('.current-country');
const currentIcon = document.querySelector('.current-icon');
const currentTemp = document.querySelector('.current-temp .temp');
const currentDesc = document.querySelector('.current-desc');
const currentFeel = document.querySelector('.current-feel .temp');
const currentHumi = document.querySelector('.current-humi span');
const currentWind = document.querySelector('.current-wind span');

const weekDay = document.querySelectorAll('.week-card-day h4');
const weekIcon = document.querySelectorAll('.week-card-day img');
const weekMaxTemp = document.querySelectorAll('.week-card-day h4 + img + p span');
const weekMinTemp = document.querySelectorAll('.week-card-day h4 + img + p + p span');
const allTempField = document.querySelectorAll('.temp');
const loading = document.querySelector('.loading');
const loadingScreen = document.querySelector('.loading-screen');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal p');
const optionFlip = document.querySelector('.flip');

const populateDom = (() => {
  const currentCard = (data) => {
    currentCity.textContent = data.city;
    currentCountry.textContent = `${data.country}`;
    currentIcon.src = data.icon;
    currentIcon.alt = 'Weather condition icon';
    currentTemp.textContent = data.currentTemp;
    currentDesc.textContent = data.description;
    currentFeel.textContent = data.feelTemp;
    currentHumi.textContent = data.humidity;
    currentWind.textContent = data.wind;
  };
  const nextWeekCard = (data) => {
    for (let index = 0; index < 5; index++) {
      weekDay[index].textContent = data[index].dayName;
      weekIcon[index].src = data[index].img;
      weekIcon[index].alt = `${data[index].dayName} weather condition icon`;
      weekMaxTemp[index].textContent = data[index].tempMax;
      weekMinTemp[index].textContent = data[index].tempMin;
    }
  };

  return { currentCard, nextWeekCard };
})();

const errorModal = (() => {
  // Module to hid / show "Error" modal
  const hideModal = () => {
    modal.classList.remove('show');
  };

  const showModal = (message) => {
    modalText.textContent = message;
    modal.classList.add('show');
    setTimeout(hideModal, 5000);
  };

  return { showModal, hideModal };
})();

const convertTemp = (() => {
  // Module to convert DOM temperature °C / °F
  const toCelsius = () => {
    for (let index = 0; index < allTempField.length; index++) {
      const value = allTempField[index].textContent; // Get the value of the span

      // If value is null, return
      if (value === '') return;

      let valueSplit = value.split('°'); // Split value [tempValue , Symbol]

      // Convert tempValue to °C
      const tempConverted = Math.round((Number(valueSplit[0]) - 32) / 1.8);
      valueSplit[0] = tempConverted;
      valueSplit[1] = 'C'; // Change symbol

      // Update DOM value with converted value
      allTempField[index].textContent = valueSplit.join('°');
    }
  };

  const toFahrenheit = () => {
    for (let index = 0; index < allTempField.length; index++) {
      const value = allTempField[index].textContent; // Get the value of the span

      // If value is null, return
      if (value === '') return;

      let valueSplit = value.split('°'); // Split value [tempValue , Symbol]

      // Convert tempValue to °F
      const tempConverted = Math.round(Number(valueSplit[0]) * 1.80 + 32);
      valueSplit[0] = tempConverted;
      valueSplit[1] = 'F'; // Change symbol

      // Update DOM value with converted value
      allTempField[index].textContent = valueSplit.join('°');
    }
  };

  return { toCelsius, toFahrenheit };
})();

function loadingIcon(display) {
  // Function to display "loading" screen while fetching data's
  if (display === 'add') {
    loading.classList.add('show');
    loadingScreen.classList.add('show');
  } else {
    loading.classList.remove('show');
    loadingScreen.classList.remove('show');
  }
}

function animationFlip(units) {
  // Flip background of settings "Metric / Fahrenheit"
  if (units === 'imperial') {
    optionFlip.classList.add('flip-active');
  } else {
    optionFlip.classList.remove('flip-active');
  }
}




/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");


const processData = (() => {
  // Process data's and return an object with only the data...
  // ... that we want to show

  const currentWeather = (data, units) => {
    // Return weather data's for current weather

    // Set temperature unit symbol
    let unitsSymbol;
    (units === 'metric')
      ? unitsSymbol = '°C'
      : unitsSymbol = '°F';

    // If Icon is not valid, use placeholder
    let weatherIcon;
    (data[2] !== 'img_error')
      ? weatherIcon = data[2]
      : weatherIcon = '1347e712e01cabec5496.png';

    // Create object with only needed data's...
    const cleanData = {
      currentTemp: `${Math.round(data[0].current.temp)}${unitsSymbol}`,
      description: data[0].current.weather[0].description,
      humidity: `${data[0].current.humidity}%`,
      feelTemp: `${Math.round(data[0].current.feels_like)}${unitsSymbol}`,
      wind: `${Math.round(data[0].current.wind_speed / (1000 / 3600))} km/h`,
      city: data[1].name,
      country: data[1].state,
      icon: weatherIcon,
    };

    // ...and return it
    return cleanData;
  };
  const nextWeekWeather = (data, units) => {
    // Return weather data's for next 5 days

    // Set temperature unit symbol
    let unitsSymbol;
    (units === 'metric')
      ? unitsSymbol = '°C'
      : unitsSymbol = '°F';

    // Create array which will contain only needed data's
    let weekWeather = [];

    // Get today date
    const today = new Date();
    // Get week
    const todayPlus5 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(today, 4);
    const week = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])({
      start: today,
      end: todayPlus5,
    });

    // Fill up "weekWeather" array with next 5 days weather condition
    for (let index = 0; index < 5; index++) {
      const day = week[index];
      const dayName = day.toLocaleDateString(undefined, { weekday: 'short' });

      // If Icon is not valid, use placeholder
      let weatherIcon;
      (data[3][index] !== 'img_error')
        ? weatherIcon = data[3][index]
        : weatherIcon = '1347e712e01cabec5496.png';

      // Add only needed data's to our array
      const dayData = {
        dayName,
        img: weatherIcon,
        tempMin: `${Math.round(data[0].daily[index].temp.min)}${unitsSymbol}`,
        tempMax: `${Math.round(data[0].daily[index].temp.max)}${unitsSymbol}`,
      };

      weekWeather.push(dayData);
    }

    // Return week weather data's
    return weekWeather;
  };

  return { currentWeather, nextWeekWeather };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processData);


/***/ }),

/***/ "./src/weatherApi.js":
/*!***************************!*\
  !*** ./src/weatherApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_KEY = '3bf7a0b35954a29f1f35a6169ee2f0bf'; // Open weather API Key

// function delay(ms) {
//   // TEST: Add a delay to the request to test loading function
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

async function getConditionIcon(iconID) {
  // Fetch weather condition icon...
  try {
    const response = await fetch(
      `https://openweathermap.org/img/wn/${`${iconID}`}@4x.png`,
      { mode: 'cors' },
    );
    // Check response status, if not 200, there is an error
    if (response.status === 200) return response.url;
    return 'img_error';
  } catch (error) {
    console.error(`Error fetching icon: ${error}`);
    return 'img_error';
  }
}

async function getGeocoding(city) {
  // Fetch geographic coordinate (lat/lon) from the city name...
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
      { mode: 'cors' },
    );

    // Check response status, if it's not 200, there is an error
    if (response.status !== 200) return 'error';

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error(`Error fetching coordinate: ${error}`);
    return 'errorCatch';
  }
}

async function getWeather(city, units) {
  // Fetch weather for the entered country

  // Get geo coordinate (lat/lon) from city name
  const coordinate = await getGeocoding(city);

  // Check for API response error
  if (coordinate === 'error' || coordinate === undefined) {
    return 'error';
  }

  // Check for a "catch" error
  if (coordinate === 'errorCatch') {
    return 'errorCatch';
  }

  // Get weather data's
  let data;

  try {
    // Get weather data using Open Weather API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&units=${units}&exclude=minutely,hourly&appid=${API_KEY}`,
      { mode: 'cors' },
    );

    // Check response status, if it's not 200, there is an error
    if (response.status !== 200) return 'error';
    data = await response.json();
  } catch (error) {
    console.error(`Error fetching weather: ${error}`);
    return 'errorCatch';
  }

  // Fetching current weather condition icon
  const currentIconID = data.current.weather[0].icon;
  const currentIconURL = await getConditionIcon(currentIconID);

  // Fetch week weather condition icon
  let weekIconURL = [];

  for (let index = 0; index < 5; index++) {
    // Fetch weather icon for the week
    const dailyIconID = data.daily[index].weather[0].icon;
    const dailyIconURL = await getConditionIcon(dailyIconID);
    weekIconURL.push(dailyIconURL);
  }

  /* TEST ZONE */
  // await delay(2000);
  /* TEST ZONE */

  // Return row weather data and current weather condition icon
  return [data, coordinate, currentIconURL, weekIconURL];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


/***/ }),

/***/ "./src/font/Poppins-Bold.ttf":
/*!***********************************!*\
  !*** ./src/font/Poppins-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdb29a5d7ccf57ff05a3.ttf";

/***/ }),

/***/ "./src/font/Poppins-Regular.ttf":
/*!**************************************!*\
  !*** ./src/font/Poppins-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weatherApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherApi */ "./src/weatherApi.js");
/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processData */ "./src/processData.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





const searchButton = document.querySelector('.search-button');
const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const modalClose = document.querySelector('.modal-close');
const optionScale = document.querySelectorAll('.option');

let tempScale = 'metric';

async function loadWeather() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadingIcon)('add');

  // Fetch weather data from OpenWeather API
  const apiData = await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_1__["default"])(cityInput.value, tempScale);

  // Check if data are correct
  if (apiData === 'error') {
    // If no, show error on the page - E.g. Incorrect / not found city name
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadingIcon)('remove');
    const message = 'Something went wrong! Please check city name or retry later';
    _dom__WEBPACK_IMPORTED_MODULE_3__.errorModal.showModal(message);
  } else if (apiData === 'errorCatch') {
    // If no, show error on the page - Catch others errors (e.g. network)
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadingIcon)('remove');
    const message = 'Something went wrong! Please retry later';
    _dom__WEBPACK_IMPORTED_MODULE_3__.errorModal.showModal(message);
  } else {
    // If yes, process data's...
    // ...Get current weather data
    const cleanDataCurrent = _processData__WEBPACK_IMPORTED_MODULE_2__["default"].currentWeather(apiData, tempScale);
    // ...Get week weather data
    const cleanDataWeek = _processData__WEBPACK_IMPORTED_MODULE_2__["default"].nextWeekWeather(apiData, tempScale);

    // ...then, populate "current" card ...
    _dom__WEBPACK_IMPORTED_MODULE_3__.populateDom.currentCard(cleanDataCurrent);
    // ...and "next week" card
    _dom__WEBPACK_IMPORTED_MODULE_3__.populateDom.nextWeekCard(cleanDataWeek);
  }

  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadingIcon)('remove');
}

/** **********************
EVENT LISTENER
*********************** */

form.addEventListener('keydown', (e) => {
  // When user press "Enter"...
  const key = e.code;
  if (key === 'Enter') {
    loadWeather(); // ...load the weather
    e.preventDefault(); // ...prevent form submit
  }
});

searchButton.addEventListener('click', (e) => {
  // When click button "search"...
  loadWeather(); // ...load the weather
  e.preventDefault(); // ...prevent form submit
});

modalClose.addEventListener('click', () => {
  // Close the modal when user click on "X" button
  _dom__WEBPACK_IMPORTED_MODULE_3__.errorModal.hideModal();
});

/** **********************
OPTIONS
*********************** */

optionScale.forEach((option) => option.addEventListener('click', (e) => {
  // Change temperature scale to °C or °F depending on user selection
  const unitsSelection = e.target.getAttribute('units');

  // Ignore if user click on scale which is already selected
  if (unitsSelection === tempScale) return;

  if (unitsSelection === 'imperial') {
    _dom__WEBPACK_IMPORTED_MODULE_3__.convertTemp.toFahrenheit(); // Convert temperature value on the DOM
    tempScale = 'imperial'; // Change selected temperature scale
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.animationFlip)(tempScale); // Flip setting display
  } else {
    _dom__WEBPACK_IMPORTED_MODULE_3__.convertTemp.toCelsius();
    tempScale = 'metric';
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.animationFlip)(tempScale);
  }
}));

/** **********************
PRELOAD
Avoid to trigger animation on page loading
*********************** */

const body = document.querySelector('body');

window.addEventListener('load', () => {
  body.classList.remove('preload');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFB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Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZWFjaERheU9mSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL3NyYy9wcm9jZXNzRGF0YS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL3NyYy93ZWF0aGVyQXBpLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L1BvcHBpbnMtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1iZy1jb2xvcjogIzE3MWIyNTtcXG4gICAgLS1jYXJkLWJnLWNvbG9yOiAjMWUyMjJkO1xcbiAgICAtLWNhcmQtYmctY29sb3ItbG9hZGluZzogcmdiYSgzMCwgMzQsIDQ1LCAwLjgpO1xcbiAgICAtLWNhcmQtYm9yZGVyLWNvbG9yOiAjM2E0NDVjO1xcbiAgICAtLXRleHQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tdGV4dC1jb2xvci1obDogI2E3YjFmYztcXG4gICAgLS10b2dnbGUtc2V0dGluZ3M6ICMyNGM1YjY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG4gIFxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBVYnVudHUsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuaDN7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDR7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5we1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zaGFkb3d7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjUwcHggNTBweCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKlxcbkhFQURFUiAoU0VBUkNIIEJBUilcXG4qKioqKioqKioqKioqKiovXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDI0cHggMnB4IHZhcigtLXRleHQtY29sb3ItaGwpO1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIGZvcm17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWFyY2ggZm9ybSBpbnB1dHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNDhweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2VhcmNoIGZvcm0gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2ggZm9ybSBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGwpO1xcbiAgICB9XFxuICAgIFxcblxcbi8qKioqKioqKioqKioqKipcXG5DT05URU5UXFxuKioqKioqKioqKioqKioqL1xcblxcbi5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi8qIEN1cnJlbnQgV2VhdGhlciBDYXJkKi9cXG5cXG4uY3VycmVudC1jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiY3VycmVudC1oZWFkZXIgY3VycmVudC1oZWFkZXJcXFwiIFxcbiAgICBcXFwiY3VycmVudC1tYWluIGN1cnJlbnQtc2Vjb25kXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50LWhlYWRlcjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItaGwpO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLW1haW57XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1tYWluO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwNnB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jdXJyZW50LWNhcmQtbWFpbiA+IGltZ3tcXG4gICAgaGVpZ2h0OiAxMjhweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LWNhcmQtbWFpbiA+IHB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMnB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdXJyZW50LWNhcmQtbG9je1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5jdXJyZW50LWNhcmQtbG9jIHNwYW57XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiA2cHggOHB4O1xcbn1cXG4uY3VycmVudC1jYXJkLXNlY29uZHtcXG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50LXNlY29uZDtcXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XFxuICAgIG1hcmdpbjogMzZweCAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLXNlY29uZCA+IHB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG59XFxuXFxuXFxuLyogV2VlayBXZWF0aGVyIENhcmQqL1xcbi53ZWVrLWNhcmR7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ud2Vlay1jYXJkLWRheXtcXG5cXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ud2Vlay1jYXJkLWRheSBpbWd7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG4ud2Vlay1jYXJkLWRheSA6bGFzdC1jaGlsZHtcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKlxcblNFVFRJTkdTIMKwQyAvIMKwRlxcbioqKioqKioqKioqKioqKi9cXG4uc2V0dGluZ3MtY2FyZHsgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA0NDBweDtcXG4gICAgcGFkZGluZzogMTZweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zd2l0Y2gtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5vcHRpb257XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZsZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4IDA7XFxufVxcblxcbi5mbGlwe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUtc2V0dGluZ3MpO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKlxcbkxPQURJTkcgQU5JTUFUSU9OXFxuKioqKioqKioqKioqKioqL1xcbi5sb2FkaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgbGVmdDogNTRweDtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLWFuaW0gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5sb2FkaW5nID4gc3Zne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuLmxvYWRpbmcgPiBzdmc6bnRoLWNoaWxkKDEpe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBMb2FkaW5nIHNjcmVlbiAqL1xcbi5sb2FkaW5nLXNjcmVlbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvci1sb2FkaW5nKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG9hZGluZy1iaWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbmltYXRpb246IGxvYWRpbmctYW5pbSAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgaGVpZ2h0OiA5NnB4O1xcbiAgICB3aWR0aDogOTZweDtcXG59XFxuXFxuLmxvYWRpbmctYmlnICA+IHN2Z3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1obCk7XFxufVxcblxcbi5sb2FkaW5nLWJpZyAgPiBzdmc6bnRoLWNoaWxkKDEpe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmctYW5pbSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qKioqKioqKioqKioqKipcXG5Nb2RhbFxcbioqKioqKioqKioqKioqKi9cXG5cXG4ubW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IDMycHg7XFxuXFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMzJweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsIHN2Z3tcXG4gICAgY29sb3I6IHJnYigyNDEsIDEwOSwgMTA5KTtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcblxcbi5tb2RhbCBoMntcXG4gICAgY29sb3I6IHJnYigyNDEsIDEwOSwgMTA5KTtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcblxcbi5tb2RhbCBwe1xcbiAgICBjb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLm1vZGFsLWNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICByaWdodDogOHB4OztcXG59XFxuXFxuLm1vZGFsLWNsb3NlIDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbn1cXG4vKioqKioqKioqKioqKioqXFxuSlMgQ0xBU1NcXG4qKioqKioqKioqKioqKiovXFxuXFxuLnNob3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mbGlwLWFjdGl2ZXtcXG4gICAgbGVmdDogNTAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqXFxuUFJFTE9BRFxcbkF2b2lkIHRvIHRyaWdnZXIgYW5pbWF0aW9uIG9uIHBhZ2UgbG9hZGluZ1xcbioqKioqKioqKioqKioqKi9cXG5cXG4ucHJlbG9hZCAqIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw4Q0FBOEM7SUFDOUMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtEQUF5RDtJQUN6RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtEQUFzRDtJQUN0RCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BC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Q1QsWUFBWTs7O0lBR1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLFNBQVM7SUFDVCxZQUFZOztJQUVaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjs7SUFFaEIsMkJBQTJCO0lBQzNCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtBQUNuQztBQUNBOztlQUVlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7O2VBR2U7O0FBRWY7SUFDSSxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw4QkFBOEI7RUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1iZy1jb2xvcjogIzE3MWIyNTtcXG4gICAgLS1jYXJkLWJnLWNvbG9yOiAjMWUyMjJkO1xcbiAgICAtLWNhcmQtYmctY29sb3ItbG9hZGluZzogcmdiYSgzMCwgMzQsIDQ1LCAwLjgpO1xcbiAgICAtLWNhcmQtYm9yZGVyLWNvbG9yOiAjM2E0NDVjO1xcbiAgICAtLXRleHQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tdGV4dC1jb2xvci1obDogI2E3YjFmYztcXG4gICAgLS10b2dnbGUtc2V0dGluZ3M6ICMyNGM1YjY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnLi9mb250L1BvcHBpbnMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnQvUG9wcGlucy1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuICBcXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgVWJ1bnR1LHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1obCk7XFxufVxcblxcbmgze1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxucHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2hhZG93e1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1MHB4IDUwcHggdmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxufVxcblxcbi8qKioqKioqKioqKioqKipcXG5IRUFERVIgKFNFQVJDSCBCQVIpXFxuKioqKioqKioqKioqKioqL1xcbi5oZWFkZXJ7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IDJweCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuLnNlYXJjaHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA0NDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCBmb3Jte1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VhcmNoIGZvcm0gaW5wdXR7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDQ4cHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNlYXJjaCBmb3JtIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoIGZvcm0gYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgfVxcbiAgICBcXG5cXG4vKioqKioqKioqKioqKioqXFxuQ09OVEVOVFxcbioqKioqKioqKioqKioqKi9cXG5cXG4uY29udGVudHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4vKiBDdXJyZW50IFdlYXRoZXIgQ2FyZCovXFxuXFxuLmN1cnJlbnQtY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImN1cnJlbnQtaGVhZGVyIGN1cnJlbnQtaGVhZGVyXFxcIiBcXG4gICAgXFxcImN1cnJlbnQtbWFpbiBjdXJyZW50LXNlY29uZFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtY2FyZC1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1oZWFkZXI7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuLmN1cnJlbnQtY2FyZC1tYWlue1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQtbWFpbjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDZweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTI4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLW1haW4gPiBpbWd7XFxuICAgIGhlaWdodDogMTI4cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLW1haW4gPiBwe1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzJweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY3VycmVudC1jYXJkLWxvY3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLWxvYyBzcGFue1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbjogNnB4IDhweDtcXG59XFxuLmN1cnJlbnQtY2FyZC1zZWNvbmR7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1zZWNvbmQ7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgICBtYXJnaW46IDM2cHggMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcXG59XFxuXFxuLmN1cnJlbnQtY2FyZC1zZWNvbmQgPiBwe1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxufVxcblxcblxcbi8qIFdlZWsgV2VhdGhlciBDYXJkKi9cXG4ud2Vlay1jYXJkeyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLndlZWstY2FyZC1kYXl7XFxuXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLndlZWstY2FyZC1kYXkgaW1ne1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLndlZWstY2FyZC1kYXkgOmxhc3QtY2hpbGR7XFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3ItaGwpO1xcbiAgICBmb250LXNpemU6IDAuOTByZW07XFxufVxcblxcbi8qKioqKioqKioqKioqKipcXG5TRVRUSU5HUyDCsEMgLyDCsEZcXG4qKioqKioqKioqKioqKiovXFxuLnNldHRpbmdzLWNhcmR7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3dpdGNoLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ub3B0aW9ue1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmbGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweCAwO1xcbn1cXG5cXG4uZmxpcHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlLXNldHRpbmdzKTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKipcXG5MT0FESU5HIEFOSU1BVElPTlxcbioqKioqKioqKioqKioqKi9cXG4ubG9hZGluZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA2cHg7XFxuICAgIGxlZnQ6IDU0cHg7XFxuICAgIGFuaW1hdGlvbjogbG9hZGluZy1hbmltIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGluZyA+IHN2Z3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1obCk7XFxufVxcblxcbi5sb2FkaW5nID4gc3ZnOm50aC1jaGlsZCgxKXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogTG9hZGluZyBzY3JlZW4gKi9cXG4ubG9hZGluZy1zY3JlZW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctY29sb3ItbG9hZGluZyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvYWRpbmctYmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLWFuaW0gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIGhlaWdodDogOTZweDtcXG4gICAgd2lkdGg6IDk2cHg7XFxufVxcblxcbi5sb2FkaW5nLWJpZyAgPiBzdmd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGwpO1xcbn1cXG5cXG4ubG9hZGluZy1iaWcgID4gc3ZnOm50aC1jaGlsZCgxKXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nLWFuaW0ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKioqKioqKioqKioqKioqXFxuTW9kYWxcXG4qKioqKioqKioqKioqKiovXFxuXFxuLm1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm90dG9tOiAzMnB4O1xcblxcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IDMycHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbCBzdmd7XFxuICAgIGNvbG9yOiByZ2IoMjQxLCAxMDksIDEwOSk7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4ubW9kYWwgaDJ7XFxuICAgIGNvbG9yOiByZ2IoMjQxLCAxMDksIDEwOSk7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4ubW9kYWwgcHtcXG4gICAgY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbi5tb2RhbC1jbG9zZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDhweDs7XFxufVxcblxcbi5tb2RhbC1jbG9zZSA6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG59XFxuLyoqKioqKioqKioqKioqKlxcbkpTIENMQVNTXFxuKioqKioqKioqKioqKioqL1xcblxcbi5zaG93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZmxpcC1hY3RpdmV7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKlxcblBSRUxPQURcXG5Bdm9pZCB0byB0cmlnZ2VyIGFuaW1hdGlvbiBvbiBwYWdlIGxvYWRpbmdcXG4qKioqKioqKioqKioqKiovXFxuXFxuLnByZWxvYWQgKiB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgLW8tdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZWFjaERheU9mSW50ZXJ2YWxcbiAqIEBjYXRlZ29yeSBJbnRlcnZhbCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGFycmF5IG9mIGRhdGVzIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHRpbWUgaW50ZXJ2YWwuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGFycmF5IG9mIGRhdGVzIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHRpbWUgaW50ZXJ2YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBlYWNoRGF5YCB0byBgZWFjaERheU9mSW50ZXJ2YWxgLlxuICogICBUaGlzIGNoYW5nZSB3YXMgbWFkZSB0byBtaXJyb3IgdGhlIHVzZSBvZiB0aGUgd29yZCBcImludGVydmFsXCIgaW4gc3RhbmRhcmQgSVNPIDg2MDE6MjAwNCB0ZXJtaW5vbG9neTpcbiAqXG4gKiAgIGBgYFxuICogICAyLjEuM1xuICogICB0aW1lIGludGVydmFsXG4gKiAgIHBhcnQgb2YgdGhlIHRpbWUgYXhpcyBsaW1pdGVkIGJ5IHR3byBpbnN0YW50c1xuICogICBgYGBcbiAqXG4gKiAgIEFsc28sIHRoaXMgZnVuY3Rpb24gbm93IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggYHN0YXJ0YCBhbmQgYGVuZGAgcHJvcGVydGllc1xuICogICBpbnN0ZWFkIG9mIHR3byBhcmd1bWVudHMgYXMgYW4gaW50ZXJ2YWwuXG4gKiAgIFRoaXMgZnVuY3Rpb24gbm93IHRocm93cyBgUmFuZ2VFcnJvcmAgaWYgdGhlIHN0YXJ0IG9mIHRoZSBpbnRlcnZhbCBpcyBhZnRlciBpdHMgZW5kXG4gKiAgIG9yIGlmIGFueSBkYXRlIGluIHRoZSBpbnRlcnZhbCBpcyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZWFjaERheShuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDIwKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGVhY2hEYXlPZkludGVydmFsKFxuICogICAgIHsgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCAyMCkgfVxuICogICApXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsLiBTZWUgW0ludGVydmFsXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0ludGVydmFsfVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc3RlcD0xXSAtIHRoZSBzdGVwIHRvIGluY3JlbWVudCBieS4gVGhlIHZhbHVlIHNob3VsZCBiZSBtb3JlIHRoYW4gMS5cbiAqIEByZXR1cm5zIHtEYXRlW119IHRoZSBhcnJheSB3aXRoIHN0YXJ0cyBvZiBkYXlzIGZyb20gdGhlIGRheSBvZiB0aGUgaW50ZXJ2YWwgc3RhcnQgdG8gdGhlIGRheSBvZiB0aGUgaW50ZXJ2YWwgZW5kXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnN0ZXBgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDFcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IFRoZSBzdGFydCBvZiBhbiBpbnRlcnZhbCBjYW5ub3QgYmUgYWZ0ZXIgaXRzIGVuZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gRGF0ZSBpbiBpbnRlcnZhbCBjYW5ub3QgYmUgYEludmFsaWQgRGF0ZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRWFjaCBkYXkgYmV0d2VlbiA2IE9jdG9iZXIgMjAxNCBhbmQgMTAgT2N0b2JlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gZWFjaERheU9mSW50ZXJ2YWwoe1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgOSwgNiksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgOSwgMTApXG4gKiB9KVxuICogLy89PiBbXG4gKiAvLyAgIE1vbiBPY3QgMDYgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgVHVlIE9jdCAwNyAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBXZWQgT2N0IDA4IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFRodSBPY3QgMDkgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgRnJpIE9jdCAxMCAyMDE0IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaERheU9mSW50ZXJ2YWwoZGlydHlJbnRlcnZhbCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGludGVydmFsID0gZGlydHlJbnRlcnZhbCB8fCB7fTtcbiAgdmFyIHN0YXJ0RGF0ZSA9IHRvRGF0ZShpbnRlcnZhbC5zdGFydCk7XG4gIHZhciBlbmREYXRlID0gdG9EYXRlKGludGVydmFsLmVuZCk7XG4gIHZhciBlbmRUaW1lID0gZW5kRGF0ZS5nZXRUaW1lKCk7IC8vIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlIG9yIGlmIGFueSBkYXRlIGlzIGBJbnZhbGlkIERhdGVgXG5cbiAgaWYgKCEoc3RhcnREYXRlLmdldFRpbWUoKSA8PSBlbmRUaW1lKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGludGVydmFsJyk7XG4gIH1cblxuICB2YXIgZGF0ZXMgPSBbXTtcbiAgdmFyIGN1cnJlbnREYXRlID0gc3RhcnREYXRlO1xuICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0ZXAgPSBvcHRpb25zICYmICdzdGVwJyBpbiBvcHRpb25zID8gTnVtYmVyKG9wdGlvbnMuc3RlcCkgOiAxO1xuICBpZiAoc3RlcCA8IDEgfHwgaXNOYU4oc3RlcCkpIHRocm93IG5ldyBSYW5nZUVycm9yKCdgb3B0aW9ucy5zdGVwYCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxJyk7XG5cbiAgd2hpbGUgKGN1cnJlbnREYXRlLmdldFRpbWUoKSA8PSBlbmRUaW1lKSB7XG4gICAgZGF0ZXMucHVzaCh0b0RhdGUoY3VycmVudERhdGUpKTtcbiAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIHN0ZXApO1xuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVzO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjdXJyZW50Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWNpdHknKTtcbmNvbnN0IGN1cnJlbnRDb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY291bnRyeScpO1xuY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1pY29uJyk7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAgLnRlbXAnKTtcbmNvbnN0IGN1cnJlbnREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtZGVzYycpO1xuY29uc3QgY3VycmVudEZlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1mZWVsIC50ZW1wJyk7XG5jb25zdCBjdXJyZW50SHVtaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWh1bWkgc3BhbicpO1xuY29uc3QgY3VycmVudFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13aW5kIHNwYW4nKTtcblxuY29uc3Qgd2Vla0RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrLWNhcmQtZGF5IGg0Jyk7XG5jb25zdCB3ZWVrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrLWNhcmQtZGF5IGltZycpO1xuY29uc3Qgd2Vla01heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vlay1jYXJkLWRheSBoNCArIGltZyArIHAgc3BhbicpO1xuY29uc3Qgd2Vla01pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vlay1jYXJkLWRheSBoNCArIGltZyArIHAgKyBwIHNwYW4nKTtcbmNvbnN0IGFsbFRlbXBGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wJyk7XG5jb25zdCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcbmNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1zY3JlZW4nKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwgcCcpO1xuY29uc3Qgb3B0aW9uRmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwJyk7XG5cbmNvbnN0IHBvcHVsYXRlRG9tID0gKCgpID0+IHtcbiAgY29uc3QgY3VycmVudENhcmQgPSAoZGF0YSkgPT4ge1xuICAgIGN1cnJlbnRDaXR5LnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIGN1cnJlbnRDb3VudHJ5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jb3VudHJ5fWA7XG4gICAgY3VycmVudEljb24uc3JjID0gZGF0YS5pY29uO1xuICAgIGN1cnJlbnRJY29uLmFsdCA9ICdXZWF0aGVyIGNvbmRpdGlvbiBpY29uJztcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudFRlbXA7XG4gICAgY3VycmVudERlc2MudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIGN1cnJlbnRGZWVsLnRleHRDb250ZW50ID0gZGF0YS5mZWVsVGVtcDtcbiAgICBjdXJyZW50SHVtaS50ZXh0Q29udGVudCA9IGRhdGEuaHVtaWRpdHk7XG4gICAgY3VycmVudFdpbmQudGV4dENvbnRlbnQgPSBkYXRhLndpbmQ7XG4gIH07XG4gIGNvbnN0IG5leHRXZWVrQ2FyZCA9IChkYXRhKSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgIHdlZWtEYXlbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVtpbmRleF0uZGF5TmFtZTtcbiAgICAgIHdlZWtJY29uW2luZGV4XS5zcmMgPSBkYXRhW2luZGV4XS5pbWc7XG4gICAgICB3ZWVrSWNvbltpbmRleF0uYWx0ID0gYCR7ZGF0YVtpbmRleF0uZGF5TmFtZX0gd2VhdGhlciBjb25kaXRpb24gaWNvbmA7XG4gICAgICB3ZWVrTWF4VGVtcFtpbmRleF0udGV4dENvbnRlbnQgPSBkYXRhW2luZGV4XS50ZW1wTWF4O1xuICAgICAgd2Vla01pblRlbXBbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVtpbmRleF0udGVtcE1pbjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgY3VycmVudENhcmQsIG5leHRXZWVrQ2FyZCB9O1xufSkoKTtcblxuY29uc3QgZXJyb3JNb2RhbCA9ICgoKSA9PiB7XG4gIC8vIE1vZHVsZSB0byBoaWQgLyBzaG93IFwiRXJyb3JcIiBtb2RhbFxuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9IChtZXNzYWdlKSA9PiB7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgc2V0VGltZW91dChoaWRlTW9kYWwsIDUwMDApO1xuICB9O1xuXG4gIHJldHVybiB7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH07XG59KSgpO1xuXG5jb25zdCBjb252ZXJ0VGVtcCA9ICgoKSA9PiB7XG4gIC8vIE1vZHVsZSB0byBjb252ZXJ0IERPTSB0ZW1wZXJhdHVyZSDCsEMgLyDCsEZcbiAgY29uc3QgdG9DZWxzaXVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbGxUZW1wRmllbGQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFsbFRlbXBGaWVsZFtpbmRleF0udGV4dENvbnRlbnQ7IC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIHNwYW5cblxuICAgICAgLy8gSWYgdmFsdWUgaXMgbnVsbCwgcmV0dXJuXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSByZXR1cm47XG5cbiAgICAgIGxldCB2YWx1ZVNwbGl0ID0gdmFsdWUuc3BsaXQoJ8KwJyk7IC8vIFNwbGl0IHZhbHVlIFt0ZW1wVmFsdWUgLCBTeW1ib2xdXG5cbiAgICAgIC8vIENvbnZlcnQgdGVtcFZhbHVlIHRvIMKwQ1xuICAgICAgY29uc3QgdGVtcENvbnZlcnRlZCA9IE1hdGgucm91bmQoKE51bWJlcih2YWx1ZVNwbGl0WzBdKSAtIDMyKSAvIDEuOCk7XG4gICAgICB2YWx1ZVNwbGl0WzBdID0gdGVtcENvbnZlcnRlZDtcbiAgICAgIHZhbHVlU3BsaXRbMV0gPSAnQyc7IC8vIENoYW5nZSBzeW1ib2xcblxuICAgICAgLy8gVXBkYXRlIERPTSB2YWx1ZSB3aXRoIGNvbnZlcnRlZCB2YWx1ZVxuICAgICAgYWxsVGVtcEZpZWxkW2luZGV4XS50ZXh0Q29udGVudCA9IHZhbHVlU3BsaXQuam9pbignwrAnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9GYWhyZW5oZWl0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbGxUZW1wRmllbGQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFsbFRlbXBGaWVsZFtpbmRleF0udGV4dENvbnRlbnQ7IC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIHNwYW5cblxuICAgICAgLy8gSWYgdmFsdWUgaXMgbnVsbCwgcmV0dXJuXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSByZXR1cm47XG5cbiAgICAgIGxldCB2YWx1ZVNwbGl0ID0gdmFsdWUuc3BsaXQoJ8KwJyk7IC8vIFNwbGl0IHZhbHVlIFt0ZW1wVmFsdWUgLCBTeW1ib2xdXG5cbiAgICAgIC8vIENvbnZlcnQgdGVtcFZhbHVlIHRvIMKwRlxuICAgICAgY29uc3QgdGVtcENvbnZlcnRlZCA9IE1hdGgucm91bmQoTnVtYmVyKHZhbHVlU3BsaXRbMF0pICogMS44MCArIDMyKTtcbiAgICAgIHZhbHVlU3BsaXRbMF0gPSB0ZW1wQ29udmVydGVkO1xuICAgICAgdmFsdWVTcGxpdFsxXSA9ICdGJzsgLy8gQ2hhbmdlIHN5bWJvbFxuXG4gICAgICAvLyBVcGRhdGUgRE9NIHZhbHVlIHdpdGggY29udmVydGVkIHZhbHVlXG4gICAgICBhbGxUZW1wRmllbGRbaW5kZXhdLnRleHRDb250ZW50ID0gdmFsdWVTcGxpdC5qb2luKCfCsCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyB0b0NlbHNpdXMsIHRvRmFocmVuaGVpdCB9O1xufSkoKTtcblxuZnVuY3Rpb24gbG9hZGluZ0ljb24oZGlzcGxheSkge1xuICAvLyBGdW5jdGlvbiB0byBkaXNwbGF5IFwibG9hZGluZ1wiIHNjcmVlbiB3aGlsZSBmZXRjaGluZyBkYXRhJ3NcbiAgaWYgKGRpc3BsYXkgPT09ICdhZGQnKSB7XG4gICAgbG9hZGluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgbG9hZGluZ1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgbG9hZGluZ1NjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uRmxpcCh1bml0cykge1xuICAvLyBGbGlwIGJhY2tncm91bmQgb2Ygc2V0dGluZ3MgXCJNZXRyaWMgLyBGYWhyZW5oZWl0XCJcbiAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSB7XG4gICAgb3B0aW9uRmxpcC5jbGFzc0xpc3QuYWRkKCdmbGlwLWFjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbkZsaXAuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcC1hY3RpdmUnKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBwb3B1bGF0ZURvbSwgZXJyb3JNb2RhbCwgbG9hZGluZ0ljb24sIGNvbnZlcnRUZW1wLCBhbmltYXRpb25GbGlwLFxufTtcbiIsImltcG9ydCB7IGFkZERheXMsIGVhY2hEYXlPZkludGVydmFsIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBwcm9jZXNzRGF0YSA9ICgoKSA9PiB7XG4gIC8vIFByb2Nlc3MgZGF0YSdzIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggb25seSB0aGUgZGF0YS4uLlxuICAvLyAuLi4gdGhhdCB3ZSB3YW50IHRvIHNob3dcblxuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IChkYXRhLCB1bml0cykgPT4ge1xuICAgIC8vIFJldHVybiB3ZWF0aGVyIGRhdGEncyBmb3IgY3VycmVudCB3ZWF0aGVyXG5cbiAgICAvLyBTZXQgdGVtcGVyYXR1cmUgdW5pdCBzeW1ib2xcbiAgICBsZXQgdW5pdHNTeW1ib2w7XG4gICAgKHVuaXRzID09PSAnbWV0cmljJylcbiAgICAgID8gdW5pdHNTeW1ib2wgPSAnwrBDJ1xuICAgICAgOiB1bml0c1N5bWJvbCA9ICfCsEYnO1xuXG4gICAgLy8gSWYgSWNvbiBpcyBub3QgdmFsaWQsIHVzZSBwbGFjZWhvbGRlclxuICAgIGxldCB3ZWF0aGVySWNvbjtcbiAgICAoZGF0YVsyXSAhPT0gJ2ltZ19lcnJvcicpXG4gICAgICA/IHdlYXRoZXJJY29uID0gZGF0YVsyXVxuICAgICAgOiB3ZWF0aGVySWNvbiA9ICcxMzQ3ZTcxMmUwMWNhYmVjNTQ5Ni5wbmcnO1xuXG4gICAgLy8gQ3JlYXRlIG9iamVjdCB3aXRoIG9ubHkgbmVlZGVkIGRhdGEncy4uLlxuICAgIGNvbnN0IGNsZWFuRGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUZW1wOiBgJHtNYXRoLnJvdW5kKGRhdGFbMF0uY3VycmVudC50ZW1wKX0ke3VuaXRzU3ltYm9sfWAsXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YVswXS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBodW1pZGl0eTogYCR7ZGF0YVswXS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgZmVlbFRlbXA6IGAke01hdGgucm91bmQoZGF0YVswXS5jdXJyZW50LmZlZWxzX2xpa2UpfSR7dW5pdHNTeW1ib2x9YCxcbiAgICAgIHdpbmQ6IGAke01hdGgucm91bmQoZGF0YVswXS5jdXJyZW50LndpbmRfc3BlZWQgLyAoMTAwMCAvIDM2MDApKX0ga20vaGAsXG4gICAgICBjaXR5OiBkYXRhWzFdLm5hbWUsXG4gICAgICBjb3VudHJ5OiBkYXRhWzFdLnN0YXRlLFxuICAgICAgaWNvbjogd2VhdGhlckljb24sXG4gICAgfTtcblxuICAgIC8vIC4uLmFuZCByZXR1cm4gaXRcbiAgICByZXR1cm4gY2xlYW5EYXRhO1xuICB9O1xuICBjb25zdCBuZXh0V2Vla1dlYXRoZXIgPSAoZGF0YSwgdW5pdHMpID0+IHtcbiAgICAvLyBSZXR1cm4gd2VhdGhlciBkYXRhJ3MgZm9yIG5leHQgNSBkYXlzXG5cbiAgICAvLyBTZXQgdGVtcGVyYXR1cmUgdW5pdCBzeW1ib2xcbiAgICBsZXQgdW5pdHNTeW1ib2w7XG4gICAgKHVuaXRzID09PSAnbWV0cmljJylcbiAgICAgID8gdW5pdHNTeW1ib2wgPSAnwrBDJ1xuICAgICAgOiB1bml0c1N5bWJvbCA9ICfCsEYnO1xuXG4gICAgLy8gQ3JlYXRlIGFycmF5IHdoaWNoIHdpbGwgY29udGFpbiBvbmx5IG5lZWRlZCBkYXRhJ3NcbiAgICBsZXQgd2Vla1dlYXRoZXIgPSBbXTtcblxuICAgIC8vIEdldCB0b2RheSBkYXRlXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIEdldCB3ZWVrXG4gICAgY29uc3QgdG9kYXlQbHVzNSA9IGFkZERheXModG9kYXksIDQpO1xuICAgIGNvbnN0IHdlZWsgPSBlYWNoRGF5T2ZJbnRlcnZhbCh7XG4gICAgICBzdGFydDogdG9kYXksXG4gICAgICBlbmQ6IHRvZGF5UGx1czUsXG4gICAgfSk7XG5cbiAgICAvLyBGaWxsIHVwIFwid2Vla1dlYXRoZXJcIiBhcnJheSB3aXRoIG5leHQgNSBkYXlzIHdlYXRoZXIgY29uZGl0aW9uXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRheSA9IHdlZWtbaW5kZXhdO1xuICAgICAgY29uc3QgZGF5TmFtZSA9IGRheS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdzaG9ydCcgfSk7XG5cbiAgICAgIC8vIElmIEljb24gaXMgbm90IHZhbGlkLCB1c2UgcGxhY2Vob2xkZXJcbiAgICAgIGxldCB3ZWF0aGVySWNvbjtcbiAgICAgIChkYXRhWzNdW2luZGV4XSAhPT0gJ2ltZ19lcnJvcicpXG4gICAgICAgID8gd2VhdGhlckljb24gPSBkYXRhWzNdW2luZGV4XVxuICAgICAgICA6IHdlYXRoZXJJY29uID0gJzEzNDdlNzEyZTAxY2FiZWM1NDk2LnBuZyc7XG5cbiAgICAgIC8vIEFkZCBvbmx5IG5lZWRlZCBkYXRhJ3MgdG8gb3VyIGFycmF5XG4gICAgICBjb25zdCBkYXlEYXRhID0ge1xuICAgICAgICBkYXlOYW1lLFxuICAgICAgICBpbWc6IHdlYXRoZXJJY29uLFxuICAgICAgICB0ZW1wTWluOiBgJHtNYXRoLnJvdW5kKGRhdGFbMF0uZGFpbHlbaW5kZXhdLnRlbXAubWluKX0ke3VuaXRzU3ltYm9sfWAsXG4gICAgICAgIHRlbXBNYXg6IGAke01hdGgucm91bmQoZGF0YVswXS5kYWlseVtpbmRleF0udGVtcC5tYXgpfSR7dW5pdHNTeW1ib2x9YCxcbiAgICAgIH07XG5cbiAgICAgIHdlZWtXZWF0aGVyLnB1c2goZGF5RGF0YSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHdlZWsgd2VhdGhlciBkYXRhJ3NcbiAgICByZXR1cm4gd2Vla1dlYXRoZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgY3VycmVudFdlYXRoZXIsIG5leHRXZWVrV2VhdGhlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc0RhdGE7XG4iLCJjb25zdCBBUElfS0VZID0gJzNiZjdhMGIzNTk1NGEyOWYxZjM1YTYxNjllZTJmMGJmJzsgLy8gT3BlbiB3ZWF0aGVyIEFQSSBLZXlcblxuLy8gZnVuY3Rpb24gZGVsYXkobXMpIHtcbi8vICAgLy8gVEVTVDogQWRkIGEgZGVsYXkgdG8gdGhlIHJlcXVlc3QgdG8gdGVzdCBsb2FkaW5nIGZ1bmN0aW9uXG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuLy8gICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuLy8gICB9KTtcbi8vIH1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29uZGl0aW9uSWNvbihpY29uSUQpIHtcbiAgLy8gRmV0Y2ggd2VhdGhlciBjb25kaXRpb24gaWNvbi4uLlxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7YCR7aWNvbklEfWB9QDR4LnBuZ2AsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgICk7XG4gICAgLy8gQ2hlY2sgcmVzcG9uc2Ugc3RhdHVzLCBpZiBub3QgMjAwLCB0aGVyZSBpcyBhbiBlcnJvclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICByZXR1cm4gJ2ltZ19lcnJvcic7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgaWNvbjogJHtlcnJvcn1gKTtcbiAgICByZXR1cm4gJ2ltZ19lcnJvcic7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvY29kaW5nKGNpdHkpIHtcbiAgLy8gRmV0Y2ggZ2VvZ3JhcGhpYyBjb29yZGluYXRlIChsYXQvbG9uKSBmcm9tIHRoZSBjaXR5IG5hbWUuLi5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgICk7XG5cbiAgICAvLyBDaGVjayByZXNwb25zZSBzdGF0dXMsIGlmIGl0J3Mgbm90IDIwMCwgdGhlcmUgaXMgYW4gZXJyb3JcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHJldHVybiAnZXJyb3InO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhWzBdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGNvb3JkaW5hdGU6ICR7ZXJyb3J9YCk7XG4gICAgcmV0dXJuICdlcnJvckNhdGNoJztcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHksIHVuaXRzKSB7XG4gIC8vIEZldGNoIHdlYXRoZXIgZm9yIHRoZSBlbnRlcmVkIGNvdW50cnlcblxuICAvLyBHZXQgZ2VvIGNvb3JkaW5hdGUgKGxhdC9sb24pIGZyb20gY2l0eSBuYW1lXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBhd2FpdCBnZXRHZW9jb2RpbmcoY2l0eSk7XG5cbiAgLy8gQ2hlY2sgZm9yIEFQSSByZXNwb25zZSBlcnJvclxuICBpZiAoY29vcmRpbmF0ZSA9PT0gJ2Vycm9yJyB8fCBjb29yZGluYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBhIFwiY2F0Y2hcIiBlcnJvclxuICBpZiAoY29vcmRpbmF0ZSA9PT0gJ2Vycm9yQ2F0Y2gnKSB7XG4gICAgcmV0dXJuICdlcnJvckNhdGNoJztcbiAgfVxuXG4gIC8vIEdldCB3ZWF0aGVyIGRhdGEnc1xuICBsZXQgZGF0YTtcblxuICB0cnkge1xuICAgIC8vIEdldCB3ZWF0aGVyIGRhdGEgdXNpbmcgT3BlbiBXZWF0aGVyIEFQSVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZS5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGUubG9ufSZ1bml0cz0ke3VuaXRzfSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZhcHBpZD0ke0FQSV9LRVl9YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcblxuICAgIC8vIENoZWNrIHJlc3BvbnNlIHN0YXR1cywgaWYgaXQncyBub3QgMjAwLCB0aGVyZSBpcyBhbiBlcnJvclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgcmV0dXJuICdlcnJvcic7XG4gICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyB3ZWF0aGVyOiAke2Vycm9yfWApO1xuICAgIHJldHVybiAnZXJyb3JDYXRjaCc7XG4gIH1cblxuICAvLyBGZXRjaGluZyBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9uIGljb25cbiAgY29uc3QgY3VycmVudEljb25JRCA9IGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb247XG4gIGNvbnN0IGN1cnJlbnRJY29uVVJMID0gYXdhaXQgZ2V0Q29uZGl0aW9uSWNvbihjdXJyZW50SWNvbklEKTtcblxuICAvLyBGZXRjaCB3ZWVrIHdlYXRoZXIgY29uZGl0aW9uIGljb25cbiAgbGV0IHdlZWtJY29uVVJMID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAvLyBGZXRjaCB3ZWF0aGVyIGljb24gZm9yIHRoZSB3ZWVrXG4gICAgY29uc3QgZGFpbHlJY29uSUQgPSBkYXRhLmRhaWx5W2luZGV4XS53ZWF0aGVyWzBdLmljb247XG4gICAgY29uc3QgZGFpbHlJY29uVVJMID0gYXdhaXQgZ2V0Q29uZGl0aW9uSWNvbihkYWlseUljb25JRCk7XG4gICAgd2Vla0ljb25VUkwucHVzaChkYWlseUljb25VUkwpO1xuICB9XG5cbiAgLyogVEVTVCBaT05FICovXG4gIC8vIGF3YWl0IGRlbGF5KDIwMDApO1xuICAvKiBURVNUIFpPTkUgKi9cblxuICAvLyBSZXR1cm4gcm93IHdlYXRoZXIgZGF0YSBhbmQgY3VycmVudCB3ZWF0aGVyIGNvbmRpdGlvbiBpY29uXG4gIHJldHVybiBbZGF0YSwgY29vcmRpbmF0ZSwgY3VycmVudEljb25VUkwsIHdlZWtJY29uVVJMXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlckFwaSc7XG5pbXBvcnQgcHJvY2Vzc0RhdGEgZnJvbSAnLi9wcm9jZXNzRGF0YSc7XG5pbXBvcnQge1xuICBwb3B1bGF0ZURvbSwgZXJyb3JNb2RhbCwgbG9hZGluZ0ljb24sIGNvbnZlcnRUZW1wLCBhbmltYXRpb25GbGlwLFxufSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktaW5wdXQnKTtcbmNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcbmNvbnN0IG9wdGlvblNjYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbicpO1xuXG5sZXQgdGVtcFNjYWxlID0gJ21ldHJpYyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXZWF0aGVyKCkge1xuICBsb2FkaW5nSWNvbignYWRkJyk7XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBkYXRhIGZyb20gT3BlbldlYXRoZXIgQVBJXG4gIGNvbnN0IGFwaURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlJbnB1dC52YWx1ZSwgdGVtcFNjYWxlKTtcblxuICAvLyBDaGVjayBpZiBkYXRhIGFyZSBjb3JyZWN0XG4gIGlmIChhcGlEYXRhID09PSAnZXJyb3InKSB7XG4gICAgLy8gSWYgbm8sIHNob3cgZXJyb3Igb24gdGhlIHBhZ2UgLSBFLmcuIEluY29ycmVjdCAvIG5vdCBmb3VuZCBjaXR5IG5hbWVcbiAgICBsb2FkaW5nSWNvbigncmVtb3ZlJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIGNoZWNrIGNpdHkgbmFtZSBvciByZXRyeSBsYXRlcic7XG4gICAgZXJyb3JNb2RhbC5zaG93TW9kYWwobWVzc2FnZSk7XG4gIH0gZWxzZSBpZiAoYXBpRGF0YSA9PT0gJ2Vycm9yQ2F0Y2gnKSB7XG4gICAgLy8gSWYgbm8sIHNob3cgZXJyb3Igb24gdGhlIHBhZ2UgLSBDYXRjaCBvdGhlcnMgZXJyb3JzIChlLmcuIG5ldHdvcmspXG4gICAgbG9hZGluZ0ljb24oJ3JlbW92ZScpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSByZXRyeSBsYXRlcic7XG4gICAgZXJyb3JNb2RhbC5zaG93TW9kYWwobWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgeWVzLCBwcm9jZXNzIGRhdGEncy4uLlxuICAgIC8vIC4uLkdldCBjdXJyZW50IHdlYXRoZXIgZGF0YVxuICAgIGNvbnN0IGNsZWFuRGF0YUN1cnJlbnQgPSBwcm9jZXNzRGF0YS5jdXJyZW50V2VhdGhlcihhcGlEYXRhLCB0ZW1wU2NhbGUpO1xuICAgIC8vIC4uLkdldCB3ZWVrIHdlYXRoZXIgZGF0YVxuICAgIGNvbnN0IGNsZWFuRGF0YVdlZWsgPSBwcm9jZXNzRGF0YS5uZXh0V2Vla1dlYXRoZXIoYXBpRGF0YSwgdGVtcFNjYWxlKTtcblxuICAgIC8vIC4uLnRoZW4sIHBvcHVsYXRlIFwiY3VycmVudFwiIGNhcmQgLi4uXG4gICAgcG9wdWxhdGVEb20uY3VycmVudENhcmQoY2xlYW5EYXRhQ3VycmVudCk7XG4gICAgLy8gLi4uYW5kIFwibmV4dCB3ZWVrXCIgY2FyZFxuICAgIHBvcHVsYXRlRG9tLm5leHRXZWVrQ2FyZChjbGVhbkRhdGFXZWVrKTtcbiAgfVxuXG4gIGxvYWRpbmdJY29uKCdyZW1vdmUnKTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKioqKioqKipcbkVWRU5UIExJU1RFTkVSXG4qKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAvLyBXaGVuIHVzZXIgcHJlc3MgXCJFbnRlclwiLi4uXG4gIGNvbnN0IGtleSA9IGUuY29kZTtcbiAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgIGxvYWRXZWF0aGVyKCk7IC8vIC4uLmxvYWQgdGhlIHdlYXRoZXJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIC4uLnByZXZlbnQgZm9ybSBzdWJtaXRcbiAgfVxufSk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vIFdoZW4gY2xpY2sgYnV0dG9uIFwic2VhcmNoXCIuLi5cbiAgbG9hZFdlYXRoZXIoKTsgLy8gLi4ubG9hZCB0aGUgd2VhdGhlclxuICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIC4uLnByZXZlbnQgZm9ybSBzdWJtaXRcbn0pO1xuXG5tb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBDbG9zZSB0aGUgbW9kYWwgd2hlbiB1c2VyIGNsaWNrIG9uIFwiWFwiIGJ1dHRvblxuICBlcnJvck1vZGFsLmhpZGVNb2RhbCgpO1xufSk7XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqXG5PUFRJT05TXG4qKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5vcHRpb25TY2FsZS5mb3JFYWNoKChvcHRpb24pID0+IG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vIENoYW5nZSB0ZW1wZXJhdHVyZSBzY2FsZSB0byDCsEMgb3IgwrBGIGRlcGVuZGluZyBvbiB1c2VyIHNlbGVjdGlvblxuICBjb25zdCB1bml0c1NlbGVjdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndW5pdHMnKTtcblxuICAvLyBJZ25vcmUgaWYgdXNlciBjbGljayBvbiBzY2FsZSB3aGljaCBpcyBhbHJlYWR5IHNlbGVjdGVkXG4gIGlmICh1bml0c1NlbGVjdGlvbiA9PT0gdGVtcFNjYWxlKSByZXR1cm47XG5cbiAgaWYgKHVuaXRzU2VsZWN0aW9uID09PSAnaW1wZXJpYWwnKSB7XG4gICAgY29udmVydFRlbXAudG9GYWhyZW5oZWl0KCk7IC8vIENvbnZlcnQgdGVtcGVyYXR1cmUgdmFsdWUgb24gdGhlIERPTVxuICAgIHRlbXBTY2FsZSA9ICdpbXBlcmlhbCc7IC8vIENoYW5nZSBzZWxlY3RlZCB0ZW1wZXJhdHVyZSBzY2FsZVxuICAgIGFuaW1hdGlvbkZsaXAodGVtcFNjYWxlKTsgLy8gRmxpcCBzZXR0aW5nIGRpc3BsYXlcbiAgfSBlbHNlIHtcbiAgICBjb252ZXJ0VGVtcC50b0NlbHNpdXMoKTtcbiAgICB0ZW1wU2NhbGUgPSAnbWV0cmljJztcbiAgICBhbmltYXRpb25GbGlwKHRlbXBTY2FsZSk7XG4gIH1cbn0pKTtcblxuLyoqICoqKioqKioqKioqKioqKioqKioqKipcblBSRUxPQURcbkF2b2lkIHRvIHRyaWdnZXIgYW5pbWF0aW9uIG9uIHBhZ2UgbG9hZGluZ1xuKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncHJlbG9hZCcpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=