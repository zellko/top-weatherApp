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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root{\n    --bg-color: #171b25;\n    --card-bg-color: #1e222d;\n    --card-bg-color-loading: rgba(30, 34, 45, 0.8);\n    --card-border-color: #3a445c;\n    --text-color-light: #ffffff;\n    --text-color-hl: #a7b1fc;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n  \n\nbody{\n    background-color: var(--bg-color);\n    color: var(--text-color-light);\n    font-family: 'poppins', Ubuntu,sans-serif;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n}\n\nh2{\n    font-size: 2rem;\n    color: var(--text-color-hl);\n}\n\nh3{\n    font-size: 2rem;\n}\n\nh4{\n    font-size: 1.2rem;\n}\n\np{\n    font-size: 1rem;\n}\n\n.shadow{\n    box-shadow: 0px 0px 250px 50px var(--text-color-hl);\n    position: absolute;\n    top: 50%;\n}\n\n/***************\nHEADER (SEARCH BAR)\n***************/\n.header{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    border-bottom: 1px solid var(--text-color-hl);\n    box-shadow: 0 0 24px 2px var(--text-color-hl);\n}\n\n.search{\n    width: 90%;\n    max-width: 440px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.search form{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n\n.search form input{\n    flex: 1;\n    padding: 8px 8px 8px 48px;\n    color: var(--text-color-light);\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    font-style: italic;\n    font-size: 1rem;\n}\n\n.search form button{\n    background: 0;\n    border: 0;\n    color: var(--text-color-light);\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.search form button:hover{\n    cursor: pointer;\n    color: var(--text-color-hl);\n    }\n    \n\n/***************\nCONTENT\n***************/\n\n.content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n}\n\n/* Current Weather Card*/\n\n.current-card{\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    display: grid;\n    grid-template-areas: \n    \"current-header current-header\" \n    \"current-main current-second\";\n    grid-template-columns: 60% 40%;\n    margin-top: 32px;\n}\n\n.current-card-header{\n    grid-area: current-header;\n    padding: 16px;\n    border-bottom: 1px solid var(--text-color-hl);\n}\n\n.current-card-main{\n    grid-area: current-main;\n    padding: 16px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(106px, 1fr));\n    grid-template-rows: 128px;\n    align-items: center;\n    text-align: center;\n    position: relative;\n}\n\n.current-card-main > img{\n    height: 128px;\n    justify-self: center;\n}\n\n.current-card-main > p{\n    font-weight: 300;\n    font-style: italic;\n    text-transform: capitalize;\n    position: absolute;\n    bottom: 32px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n}\n.current-card-loc{\n    display: flex;\n    align-items: flex-end;\n}\n\n.current-card-loc span{\n    font-style: italic;\n    margin: 6px 8px;\n}\n.current-card-second{\n    grid-area: current-second;\n    padding: 0px 16px;\n    margin: 36px 0;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    font-weight: 300;\n    letter-spacing: 0.2px;\n}\n\n.current-card-second > p{\n    border-bottom: 1px solid var(--text-color-hl);\n    padding: 8px 8px;\n}\n\n\n/* Week Weather Card*/\n.week-card{    \n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    padding: 16px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.week-card-day{\n\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.week-card-day img{\n    height: 42px;\n    aspect-ratio: 1;\n}\n\n.week-card-day :last-child{\n    color:var(--text-color-hl);\n    font-size: 0.90rem;\n}\n\n/***************\nLOADING ANIMATION\n***************/\n.loading {\n    display: none;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    bottom: 6px;\n    left: 54px;\n    animation: loading-anim 1.2s linear infinite;\n}\n\n.loading > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n/* Loading screen */\n.loading-screen{\n    position: absolute;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--card-bg-color-loading);\n    border: 1px solid var(--card-border-color);\n    width: 100%;\n    height: 100%;\n}\n\n.loading-big {\n    display: flex;\n    animation: loading-anim 1.2s linear infinite;\n    height: 96px;\n    width: 96px;\n}\n\n.loading-big  > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading-big  > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n@keyframes loading-anim {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n/***************\nModal\n***************/\n\n.modal{\n    display: flex;\n    opacity: 0;\n    flex-direction: column;\n    position: absolute;\n    left: 50%;\n    bottom: 32px;\n\n\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n    left: 50%;\n    bottom: 32px;\n\n    background-color: rgb(255, 255, 255);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n\n    transform: translateX(-50%);\n    transition: opacity 2s ease-in-out;\n}\n\n.modal svg{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal h2{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal p{\n    color: var(--card-border-color);\n    margin: 8px;\n}\n\n.modal-close{\n    position: absolute;\n    top: 8px;\n    right: 8px;;\n}\n\n.modal-close :hover{\n    cursor: pointer;\n    color: var(--card-border-color);\n}\n/***************\nJS CLASS\n***************/\n\n.show{\n    display: flex;\n    opacity: 1;\n}\n\n/***************\ngeoapify\n***************/\n/* \n@import \"~@geoapify/geocoder-autocomplete/styles/round-borders.css\";\n\n.autocomplete-container {\n    position: relative;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,wBAAwB;IACxB,8CAA8C;IAC9C,4BAA4B;IAC5B,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,+DAAyD;IACzD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,+DAAsD;IACtD,gBAAgB;IAChB,gBAAgB;AACpB;;;AAGA;IACI,iCAAiC;IACjC,8BAA8B;IAC9B,yCAAyC;IACzC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mDAAmD;IACnD,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;;eAEe;AACf;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,6CAA6C;IAC7C,6CAA6C;AACjD;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,OAAO;IACP,yBAAyB;IACzB,8BAA8B;IAC9B,sCAAsC;IACtC,0CAA0C;IAC1C,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B;;;AAGJ;;eAEe;;AAEf;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,WAAW;IACX,SAAS;AACb;;AAEA,wBAAwB;;AAExB;IACI,sCAAsC;IACtC,0CAA0C;IAC1C,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb;;iCAE6B;IAC7B,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,2DAA2D;IAC3D,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,6CAA6C;IAC7C,gBAAgB;AACpB;;;AAGA,qBAAqB;AACrB;IACI,sCAAsC;IACtC,0CAA0C;IAC1C,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;;eAEe;AACf;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,4CAA4C;AAChD;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,mBAAmB;AACnB;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,0CAA0C;IAC1C,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4CAA4C;IAC5C,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;;AAGA;;eAEe;;AAEf;IACI,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,YAAY;;;IAGZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;;IAElB,SAAS;IACT,YAAY;;IAEZ,oCAAoC;IACpC,kBAAkB;IAClB,UAAU;IACV,gBAAgB;;IAEhB,2BAA2B;IAC3B,kCAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,eAAe;IACf,+BAA+B;AACnC;AACA;;eAEe;;AAEf;IACI,aAAa;IACb,UAAU;AACd;;AAEA;;eAEe;AACf;;;;;GAKG","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root{\n    --bg-color: #171b25;\n    --card-bg-color: #1e222d;\n    --card-bg-color-loading: rgba(30, 34, 45, 0.8);\n    --card-border-color: #3a445c;\n    --text-color-light: #ffffff;\n    --text-color-hl: #a7b1fc;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('./font/Poppins-Regular.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('./font/Poppins-Bold.ttf') format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n  \n\nbody{\n    background-color: var(--bg-color);\n    color: var(--text-color-light);\n    font-family: 'poppins', Ubuntu,sans-serif;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n}\n\nh2{\n    font-size: 2rem;\n    color: var(--text-color-hl);\n}\n\nh3{\n    font-size: 2rem;\n}\n\nh4{\n    font-size: 1.2rem;\n}\n\np{\n    font-size: 1rem;\n}\n\n.shadow{\n    box-shadow: 0px 0px 250px 50px var(--text-color-hl);\n    position: absolute;\n    top: 50%;\n}\n\n/***************\nHEADER (SEARCH BAR)\n***************/\n.header{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    border-bottom: 1px solid var(--text-color-hl);\n    box-shadow: 0 0 24px 2px var(--text-color-hl);\n}\n\n.search{\n    width: 90%;\n    max-width: 440px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n}\n\n.search form{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 8px;\n}\n\n.search form input{\n    flex: 1;\n    padding: 8px 8px 8px 48px;\n    color: var(--text-color-light);\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    font-style: italic;\n    font-size: 1rem;\n}\n\n.search form button{\n    background: 0;\n    border: 0;\n    color: var(--text-color-light);\n    width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.search form button:hover{\n    cursor: pointer;\n    color: var(--text-color-hl);\n    }\n    \n\n/***************\nCONTENT\n***************/\n\n.content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    gap: 16px;\n}\n\n/* Current Weather Card*/\n\n.current-card{\n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    display: grid;\n    grid-template-areas: \n    \"current-header current-header\" \n    \"current-main current-second\";\n    grid-template-columns: 60% 40%;\n    margin-top: 32px;\n}\n\n.current-card-header{\n    grid-area: current-header;\n    padding: 16px;\n    border-bottom: 1px solid var(--text-color-hl);\n}\n\n.current-card-main{\n    grid-area: current-main;\n    padding: 16px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(106px, 1fr));\n    grid-template-rows: 128px;\n    align-items: center;\n    text-align: center;\n    position: relative;\n}\n\n.current-card-main > img{\n    height: 128px;\n    justify-self: center;\n}\n\n.current-card-main > p{\n    font-weight: 300;\n    font-style: italic;\n    text-transform: capitalize;\n    position: absolute;\n    bottom: 32px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n}\n.current-card-loc{\n    display: flex;\n    align-items: flex-end;\n}\n\n.current-card-loc span{\n    font-style: italic;\n    margin: 6px 8px;\n}\n.current-card-second{\n    grid-area: current-second;\n    padding: 0px 16px;\n    margin: 36px 0;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    font-weight: 300;\n    letter-spacing: 0.2px;\n}\n\n.current-card-second > p{\n    border-bottom: 1px solid var(--text-color-hl);\n    padding: 8px 8px;\n}\n\n\n/* Week Weather Card*/\n.week-card{    \n    background-color: var(--card-bg-color);\n    border: 1px solid var(--card-border-color);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n    padding: 16px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.week-card-day{\n\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.week-card-day img{\n    height: 42px;\n    aspect-ratio: 1;\n}\n\n.week-card-day :last-child{\n    color:var(--text-color-hl);\n    font-size: 0.90rem;\n}\n\n/***************\nLOADING ANIMATION\n***************/\n.loading {\n    display: none;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    bottom: 6px;\n    left: 54px;\n    animation: loading-anim 1.2s linear infinite;\n}\n\n.loading > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n/* Loading screen */\n.loading-screen{\n    position: absolute;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--card-bg-color-loading);\n    border: 1px solid var(--card-border-color);\n    width: 100%;\n    height: 100%;\n}\n\n.loading-big {\n    display: flex;\n    animation: loading-anim 1.2s linear infinite;\n    height: 96px;\n    width: 96px;\n}\n\n.loading-big  > svg{\n    position: absolute;\n    color: var(--text-color-hl);\n}\n\n.loading-big  > svg:nth-child(1){\n    transform: rotate(180deg);\n}\n\n@keyframes loading-anim {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n/***************\nModal\n***************/\n\n.modal{\n    display: flex;\n    opacity: 0;\n    flex-direction: column;\n    position: absolute;\n    left: 50%;\n    bottom: 32px;\n\n\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    \n    left: 50%;\n    bottom: 32px;\n\n    background-color: rgb(255, 255, 255);\n    border-radius: 4px;\n    width: 90%;\n    max-width: 440px;\n\n    transform: translateX(-50%);\n    transition: opacity 2s ease-in-out;\n}\n\n.modal svg{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal h2{\n    color: rgb(241, 109, 109);\n    margin: 4px;\n}\n\n.modal p{\n    color: var(--card-border-color);\n    margin: 8px;\n}\n\n.modal-close{\n    position: absolute;\n    top: 8px;\n    right: 8px;;\n}\n\n.modal-close :hover{\n    cursor: pointer;\n    color: var(--card-border-color);\n}\n/***************\nJS CLASS\n***************/\n\n.show{\n    display: flex;\n    opacity: 1;\n}\n\n/***************\ngeoapify\n***************/\n/* \n@import \"~@geoapify/geocoder-autocomplete/styles/round-borders.css\";\n\n.autocomplete-container {\n    position: relative;\n} */"],"sourceRoot":""}]);
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
/* harmony export */   "errorModal": () => (/* binding */ errorModal),
/* harmony export */   "loadingIcon": () => (/* binding */ loadingIcon),
/* harmony export */   "populateDom": () => (/* binding */ populateDom)
/* harmony export */ });
const currentCity = document.querySelector('.current-city');
const currentCountry = document.querySelector('.current-country');
const currentIcon = document.querySelector('.current-icon');
const currentTemp = document.querySelector('.current-temp');
const currentDesc = document.querySelector('.current-desc');
const currentFeel = document.querySelector('.current-feel');
const currentHumi = document.querySelector('.current-humi');
const currentWind = document.querySelector('.current-wind');

const weekDay = document.querySelectorAll('.week-card-day h4');
const weekIcon = document.querySelectorAll('.week-card-day img');
const weekMaxTemp = document.querySelectorAll('.week-card-day h4 + img + p ');
const weekMinTemp = document.querySelectorAll('.week-card-day h4 + img + p + p');

const loading = document.querySelector('.loading');
const loadingScreen = document.querySelector('.loading-screen');

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal p');

const populateDom = (() => {
  const currentCard = (data) => {
    currentCity.textContent = data.city;
    currentCountry.textContent = `${data.country}`;
    currentIcon.src = data.icon;
    currentIcon.alt = 'Weather condition icon';
    currentTemp.textContent = data.currentTemp;
    currentDesc.textContent = data.description;
    currentFeel.textContent = `Feel: ${data.feelTemp}`;
    currentHumi.textContent = `Humidity: ${data.humidity}`;
    currentWind.textContent = `Wind: ${data.wind}`;
  };
  const nextWeekCard = (data) => {
    for (let index = 0; index < 5; index++) {
      weekDay[index].textContent = data[index].dayName;
      weekIcon[index].src = data[index].img;
      weekIcon[index].alt = `${data[index].dayName} weather condition icon`;
      weekMaxTemp[index].textContent = `${data[index].tempMax}°C`;
      weekMinTemp[index].textContent = `${data[index].tempMin}°C`;
    }
  };

  return { currentCard, nextWeekCard };
})();

const errorModal = (() => {
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

function loadingIcon(display) {
  if (display === 'add') {
    loading.classList.add('show');
    loadingScreen.classList.add('show');
  } else {
    loading.classList.remove('show');
    loadingScreen.classList.remove('show');
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

  const currentWeather = (data) => {
    // Return weather data's for current weather

    // If Icon is not valid, use placeholder
    let weatherIcon;
    (data[2] !== 'img_error')
      ? weatherIcon = data[2]
      : weatherIcon = '1347e712e01cabec5496.png';

    const cleanData = {
      currentTemp: `${Math.round(data[0].current.temp)}°C`,
      description: data[0].current.weather[0].description,
      humidity: `${data[0].current.humidity}%`,
      feelTemp: `${Math.round(data[0].current.feels_like)}°C`,
      wind: `${Math.round(data[0].current.wind_speed / (1000 / 3600))} km/h`,
      city: data[1].name,
      country: data[1].state,
      icon: weatherIcon,
    };

    return cleanData;
  };
  const nextWeekWeather = (data) => {
    // Return weather data's for next 5 days
    console.log('WeekWeather');

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

      const iconImg = data[3][index]; // Fetch URL to check if icon available

      const dayData = {
        dayName,
        img: iconImg,
        tempMin: Math.round(data[0].daily[index].temp.min),
        tempMax: Math.round(data[0].daily[index].temp.max),
      };

      weekWeather.push(dayData);
    }

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
/* harmony export */   "getConditionIcon": () => (/* binding */ getConditionIcon),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
const API_KEY = '3bf7a0b35954a29f1f35a6169ee2f0bf'; // Open weather API Key

function delay(ms) {
  // TEST: Add a delay to the request to test loading function
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getConditionIcon(iconID) {
  // Fetch weather condition icon...
  try {
    const response = await fetch(
      `http://openweathermap.org/img/wn/${`${iconID}`}@4x.png`,
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
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
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

async function getWeather(city) {
  // Fetch weather for the entered country

  // Get geo coordinate (lat/lon) from city name
  const coordinate = await getGeocoding(city);

  // Check if coordinate are valid
  if (coordinate === 'error' || coordinate === undefined) {
    return 'error';
  }

  if (coordinate === 'errorCatch') {
    return 'errorCatch';
  }

  // Get weather data's
  let data;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`,
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
    const dailyIconID = data.daily[index].weather[0].icon;
    const dailyIconURL = await getConditionIcon(dailyIconID);
    weekIconURL.push(dailyIconURL);
  }

  /* TEST ZONE */
  await delay(2000);
  /* TEST ZONE */

  // Return row weather data and current weather condition icon
  return [data, coordinate, currentIconURL, weekIconURL];
}




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

async function loadWeather() {
  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadingIcon)('add');

  // Fetch weather data from OpenWeather API
  const apiData = await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_1__.getWeather)(cityInput.value);

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
    const cleanDataCurrent = _processData__WEBPACK_IMPORTED_MODULE_2__["default"].currentWeather(apiData); // Get current weather data
    const cleanDataWeek = _processData__WEBPACK_IMPORTED_MODULE_2__["default"].nextWeekWeather(apiData); // Get current weather data

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
  _dom__WEBPACK_IMPORTED_MODULE_3__.errorModal.hideModal();
});

/** **********************
AUTOCOMPLETE
*********************** */

// import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
// import autocomplete from './geoapify';

// let timer; // Timer identifier
// const waitTime = 500; // Wait time in milliseconds ;

// cityInput.addEventListener('keyup', (e) => {
//   const entry = e.target.value;

//   if (entry.length <= 1) return;

//   // Clear timer
//   clearTimeout(timer);

//   // Wait for X ms and then process the request
//   timer = setTimeout(async () => {
//     await autocomplete(entry);
//   }, waitTime);
// });

// const autocomplete = new GeocoderAutocomplete(
//   document.getElementById('autocomplete'),
//   'API_KEY',
//   { type: 'city', skipIcons: true, skipDetails: true },
// );

// autocomplete.on('select', (location) => {
//   // check selected location here
//   console.log(location);
// });

// autocomplete.on('suggestions', (suggestions) => {
//   // process suggestions here
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLGFBQWEsY0FBYyxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1B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SSxpREFBVztBQUNmO0FBQ0EsSUFBSSxzREFBb0I7QUFDeEIsSUFBSTtBQUNKO0FBQ0EsNkJBQTZCLG1FQUEwQixXQUFXO0FBQ2xFLDBCQUEwQixvRUFBMkIsV0FBVzs7QUFFaEU7QUFDQSxJQUFJLHlEQUF1QjtBQUMzQjtBQUNBLElBQUksMERBQXdCO0FBQzVCOztBQUVBLEVBQUUsaURBQVc7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixDQUFDOztBQUVEO0FBQ0EsRUFBRSxzREFBb0I7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsWUFBWSx1QkFBdUI7QUFDbkM7O0FBRUEsY0FBYztBQUNkLHlCQUF5Qjs7QUFFekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0RBQWtEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VhY2hEYXlPZkludGVydmFsL2luZGV4LmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9zcmMvcHJvY2Vzc0RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvLi9zcmMvd2VhdGhlckFwaS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3Atd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC13ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9Qb3BwaW5zLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0tYmctY29sb3I6ICMxNzFiMjU7XFxuICAgIC0tY2FyZC1iZy1jb2xvcjogIzFlMjIyZDtcXG4gICAgLS1jYXJkLWJnLWNvbG9yLWxvYWRpbmc6IHJnYmEoMzAsIDM0LCA0NSwgMC44KTtcXG4gICAgLS1jYXJkLWJvcmRlci1jb2xvcjogIzNhNDQ1YztcXG4gICAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLXRleHQtY29sb3ItaGw6ICNhN2IxZmM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG4gIFxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBVYnVudHUsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuaDN7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDR7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5we1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zaGFkb3d7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjUwcHggNTBweCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKlxcbkhFQURFUiAoU0VBUkNIIEJBUilcXG4qKioqKioqKioqKioqKiovXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDI0cHggMnB4IHZhcigtLXRleHQtY29sb3ItaGwpO1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIGZvcm17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zZWFyY2ggZm9ybSBpbnB1dHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNDhweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2VhcmNoIGZvcm0gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2ggZm9ybSBidXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGwpO1xcbiAgICB9XFxuICAgIFxcblxcbi8qKioqKioqKioqKioqKipcXG5DT05URU5UXFxuKioqKioqKioqKioqKioqL1xcblxcbi5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi8qIEN1cnJlbnQgV2VhdGhlciBDYXJkKi9cXG5cXG4uY3VycmVudC1jYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiY3VycmVudC1oZWFkZXIgY3VycmVudC1oZWFkZXJcXFwiIFxcbiAgICBcXFwiY3VycmVudC1tYWluIGN1cnJlbnQtc2Vjb25kXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50LWhlYWRlcjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItaGwpO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLW1haW57XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1tYWluO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwNnB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jdXJyZW50LWNhcmQtbWFpbiA+IGltZ3tcXG4gICAgaGVpZ2h0OiAxMjhweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LWNhcmQtbWFpbiA+IHB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMnB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdXJyZW50LWNhcmQtbG9je1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5jdXJyZW50LWNhcmQtbG9jIHNwYW57XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgbWFyZ2luOiA2cHggOHB4O1xcbn1cXG4uY3VycmVudC1jYXJkLXNlY29uZHtcXG4gICAgZ3JpZC1hcmVhOiBjdXJyZW50LXNlY29uZDtcXG4gICAgcGFkZGluZzogMHB4IDE2cHg7XFxuICAgIG1hcmdpbjogMzZweCAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLXNlY29uZCA+IHB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXG59XFxuXFxuXFxuLyogV2VlayBXZWF0aGVyIENhcmQqL1xcbi53ZWVrLWNhcmR7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ud2Vlay1jYXJkLWRheXtcXG5cXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ud2Vlay1jYXJkLWRheSBpbWd7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG4ud2Vlay1jYXJkLWRheSA6bGFzdC1jaGlsZHtcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKlxcbkxPQURJTkcgQU5JTUFUSU9OXFxuKioqKioqKioqKioqKioqL1xcbi5sb2FkaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgbGVmdDogNTRweDtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLWFuaW0gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5sb2FkaW5nID4gc3Zne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuLmxvYWRpbmcgPiBzdmc6bnRoLWNoaWxkKDEpe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4vKiBMb2FkaW5nIHNjcmVlbiAqL1xcbi5sb2FkaW5nLXNjcmVlbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvci1sb2FkaW5nKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG9hZGluZy1iaWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbmltYXRpb246IGxvYWRpbmctYW5pbSAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgaGVpZ2h0OiA5NnB4O1xcbiAgICB3aWR0aDogOTZweDtcXG59XFxuXFxuLmxvYWRpbmctYmlnICA+IHN2Z3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1obCk7XFxufVxcblxcbi5sb2FkaW5nLWJpZyAgPiBzdmc6bnRoLWNoaWxkKDEpe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmctYW5pbSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKipcXG5Nb2RhbFxcbioqKioqKioqKioqKioqKi9cXG5cXG4ubW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IDMycHg7XFxuXFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMzJweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDQwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsIHN2Z3tcXG4gICAgY29sb3I6IHJnYigyNDEsIDEwOSwgMTA5KTtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcblxcbi5tb2RhbCBoMntcXG4gICAgY29sb3I6IHJnYigyNDEsIDEwOSwgMTA5KTtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcblxcbi5tb2RhbCBwe1xcbiAgICBjb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLm1vZGFsLWNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICByaWdodDogOHB4OztcXG59XFxuXFxuLm1vZGFsLWNsb3NlIDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xcbn1cXG4vKioqKioqKioqKioqKioqXFxuSlMgQ0xBU1NcXG4qKioqKioqKioqKioqKiovXFxuXFxuLnNob3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qKioqKioqKioqKioqKipcXG5nZW9hcGlmeVxcbioqKioqKioqKioqKioqKi9cXG4vKiBcXG5AaW1wb3J0IFxcXCJ+QGdlb2FwaWZ5L2dlb2NvZGVyLWF1dG9jb21wbGV0ZS9zdHlsZXMvcm91bmQtYm9yZGVycy5jc3NcXFwiO1xcblxcbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwrREFBeUQ7SUFDekQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwrREFBc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBOztlQUVlO0FBQ2Y7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLDZDQUE2QztJQUM3Qyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLDBDQUEwQztJQUMxQyxrQkFB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SUFDVCxZQUFZOztJQUVaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjs7SUFFaEIsMkJBQTJCO0lBQzNCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtBQUNuQztBQUNBOztlQUVlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7ZUFFZTtBQUNmOzs7OztHQUtHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0tYmctY29sb3I6ICMxNzFiMjU7XFxuICAgIC0tY2FyZC1iZy1jb2xvcjogIzFlMjIyZDtcXG4gICAgLS1jYXJkLWJnLWNvbG9yLWxvYWRpbmc6IHJnYmEoMzAsIDM0LCA0NSwgMC44KTtcXG4gICAgLS1jYXJkLWJvcmRlci1jb2xvcjogIzNhNDQ1YztcXG4gICAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLXRleHQtY29sb3ItaGw6ICNhN2IxZmM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnLi9mb250L1BvcHBpbnMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnQvUG9wcGlucy1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuICBcXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgVWJ1bnR1LHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1obCk7XFxufVxcblxcbmgze1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxucHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2hhZG93e1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1MHB4IDUwcHggdmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxufVxcblxcbi8qKioqKioqKioqKioqKipcXG5IRUFERVIgKFNFQVJDSCBCQVIpXFxuKioqKioqKioqKioqKioqL1xcbi5oZWFkZXJ7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IDJweCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuLnNlYXJjaHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA0NDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCBmb3Jte1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2VhcmNoIGZvcm0gaW5wdXR7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDQ4cHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnNlYXJjaCBmb3JtIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoIGZvcm0gYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG4gICAgfVxcbiAgICBcXG5cXG4vKioqKioqKioqKioqKioqXFxuQ09OVEVOVFxcbioqKioqKioqKioqKioqKi9cXG5cXG4uY29udGVudHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4vKiBDdXJyZW50IFdlYXRoZXIgQ2FyZCovXFxuXFxuLmN1cnJlbnQtY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImN1cnJlbnQtaGVhZGVyIGN1cnJlbnQtaGVhZGVyXFxcIiBcXG4gICAgXFxcImN1cnJlbnQtbWFpbiBjdXJyZW50LXNlY29uZFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLmN1cnJlbnQtY2FyZC1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1oZWFkZXI7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLWhsKTtcXG59XFxuXFxuLmN1cnJlbnQtY2FyZC1tYWlue1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQtbWFpbjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDZweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTI4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLW1haW4gPiBpbWd7XFxuICAgIGhlaWdodDogMTI4cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLW1haW4gPiBwe1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzJweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY3VycmVudC1jYXJkLWxvY3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY3VycmVudC1jYXJkLWxvYyBzcGFue1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbjogNnB4IDhweDtcXG59XFxuLmN1cnJlbnQtY2FyZC1zZWNvbmR7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1zZWNvbmQ7XFxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xcbiAgICBtYXJnaW46IDM2cHggMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcXG59XFxuXFxuLmN1cnJlbnQtY2FyZC1zZWNvbmQgPiBwe1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1obCk7XFxuICAgIHBhZGRpbmc6IDhweCA4cHg7XFxufVxcblxcblxcbi8qIFdlZWsgV2VhdGhlciBDYXJkKi9cXG4ud2Vlay1jYXJkeyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLndlZWstY2FyZC1kYXl7XFxuXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLndlZWstY2FyZC1kYXkgaW1ne1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLndlZWstY2FyZC1kYXkgOmxhc3QtY2hpbGR7XFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3ItaGwpO1xcbiAgICBmb250LXNpemU6IDAuOTByZW07XFxufVxcblxcbi8qKioqKioqKioqKioqKipcXG5MT0FESU5HIEFOSU1BVElPTlxcbioqKioqKioqKioqKioqKi9cXG4ubG9hZGluZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA2cHg7XFxuICAgIGxlZnQ6IDU0cHg7XFxuICAgIGFuaW1hdGlvbjogbG9hZGluZy1hbmltIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGluZyA+IHN2Z3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1obCk7XFxufVxcblxcbi5sb2FkaW5nID4gc3ZnOm50aC1jaGlsZCgxKXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLyogTG9hZGluZyBzY3JlZW4gKi9cXG4ubG9hZGluZy1zY3JlZW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctY29sb3ItbG9hZGluZyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvYWRpbmctYmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nLWFuaW0gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIGhlaWdodDogOTZweDtcXG4gICAgd2lkdGg6IDk2cHg7XFxufVxcblxcbi5sb2FkaW5nLWJpZyAgPiBzdmd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItaGwpO1xcbn1cXG5cXG4ubG9hZGluZy1iaWcgID4gc3ZnOm50aC1jaGlsZCgxKXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nLWFuaW0ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqXFxuTW9kYWxcXG4qKioqKioqKioqKioqKiovXFxuXFxuLm1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm90dG9tOiAzMnB4O1xcblxcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IDMycHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbCBzdmd7XFxuICAgIGNvbG9yOiByZ2IoMjQxLCAxMDksIDEwOSk7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4ubW9kYWwgaDJ7XFxuICAgIGNvbG9yOiByZ2IoMjQxLCAxMDksIDEwOSk7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4ubW9kYWwgcHtcXG4gICAgY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbi5tb2RhbC1jbG9zZXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDhweDs7XFxufVxcblxcbi5tb2RhbC1jbG9zZSA6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcXG59XFxuLyoqKioqKioqKioqKioqKlxcbkpTIENMQVNTXFxuKioqKioqKioqKioqKioqL1xcblxcbi5zaG93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqXFxuZ2VvYXBpZnlcXG4qKioqKioqKioqKioqKiovXFxuLyogXFxuQGltcG9ydCBcXFwifkBnZW9hcGlmeS9nZW9jb2Rlci1hdXRvY29tcGxldGUvc3R5bGVzL3JvdW5kLWJvcmRlcnMuY3NzXFxcIjtcXG5cXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlYWNoRGF5T2ZJbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgYXJyYXkgb2YgZGF0ZXMgd2l0aGluIHRoZSBzcGVjaWZpZWQgdGltZSBpbnRlcnZhbC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgYXJyYXkgb2YgZGF0ZXMgd2l0aGluIHRoZSBzcGVjaWZpZWQgdGltZSBpbnRlcnZhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGVhY2hEYXlgIHRvIGBlYWNoRGF5T2ZJbnRlcnZhbGAuXG4gKiAgIFRoaXMgY2hhbmdlIHdhcyBtYWRlIHRvIG1pcnJvciB0aGUgdXNlIG9mIHRoZSB3b3JkIFwiaW50ZXJ2YWxcIiBpbiBzdGFuZGFyZCBJU08gODYwMToyMDA0IHRlcm1pbm9sb2d5OlxuICpcbiAqICAgYGBgXG4gKiAgIDIuMS4zXG4gKiAgIHRpbWUgaW50ZXJ2YWxcbiAqICAgcGFydCBvZiB0aGUgdGltZSBheGlzIGxpbWl0ZWQgYnkgdHdvIGluc3RhbnRzXG4gKiAgIGBgYFxuICpcbiAqICAgQWxzbywgdGhpcyBmdW5jdGlvbiBub3cgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBgc3RhcnRgIGFuZCBgZW5kYCBwcm9wZXJ0aWVzXG4gKiAgIGluc3RlYWQgb2YgdHdvIGFyZ3VtZW50cyBhcyBhbiBpbnRlcnZhbC5cbiAqICAgVGhpcyBmdW5jdGlvbiBub3cgdGhyb3dzIGBSYW5nZUVycm9yYCBpZiB0aGUgc3RhcnQgb2YgdGhlIGludGVydmFsIGlzIGFmdGVyIGl0cyBlbmRcbiAqICAgb3IgaWYgYW55IGRhdGUgaW4gdGhlIGludGVydmFsIGlzIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBlYWNoRGF5KG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjApKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZWFjaERheU9mSW50ZXJ2YWwoXG4gKiAgICAgeyBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMTApLCBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDIwKSB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtJbnRlcnZhbH0gaW50ZXJ2YWwgLSB0aGUgaW50ZXJ2YWwuIFNlZSBbSW50ZXJ2YWxde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvSW50ZXJ2YWx9XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zdGVwPTFdIC0gdGhlIHN0ZXAgdG8gaW5jcmVtZW50IGJ5LiBUaGUgdmFsdWUgc2hvdWxkIGJlIG1vcmUgdGhhbiAxLlxuICogQHJldHVybnMge0RhdGVbXX0gdGhlIGFycmF5IHdpdGggc3RhcnRzIG9mIGRheXMgZnJvbSB0aGUgZGF5IG9mIHRoZSBpbnRlcnZhbCBzdGFydCB0byB0aGUgZGF5IG9mIHRoZSBpbnRlcnZhbCBlbmRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuc3RlcGAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFYWNoIGRheSBiZXR3ZWVuIDYgT2N0b2JlciAyMDE0IGFuZCAxMCBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBlYWNoRGF5T2ZJbnRlcnZhbCh7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCA5LCA2KSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCA5LCAxMClcbiAqIH0pXG4gKiAvLz0+IFtcbiAqIC8vICAgTW9uIE9jdCAwNiAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBUdWUgT2N0IDA3IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFdlZCBPY3QgMDggMjAxNCAwMDowMDowMCxcbiAqIC8vICAgVGh1IE9jdCAwOSAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBGcmkgT2N0IDEwIDIwMTQgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoRGF5T2ZJbnRlcnZhbChkaXJ0eUludGVydmFsLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgaW50ZXJ2YWwgPSBkaXJ0eUludGVydmFsIHx8IHt9O1xuICB2YXIgc3RhcnREYXRlID0gdG9EYXRlKGludGVydmFsLnN0YXJ0KTtcbiAgdmFyIGVuZERhdGUgPSB0b0RhdGUoaW50ZXJ2YWwuZW5kKTtcbiAgdmFyIGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTsgLy8gVGhyb3cgYW4gZXhjZXB0aW9uIGlmIHN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgb3IgaWYgYW55IGRhdGUgaXMgYEludmFsaWQgRGF0ZWBcblxuICBpZiAoIShzdGFydERhdGUuZ2V0VGltZSgpIDw9IGVuZFRpbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwnKTtcbiAgfVxuXG4gIHZhciBkYXRlcyA9IFtdO1xuICB2YXIgY3VycmVudERhdGUgPSBzdGFydERhdGU7XG4gIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RlcCA9IG9wdGlvbnMgJiYgJ3N0ZXAnIGluIG9wdGlvbnMgPyBOdW1iZXIob3B0aW9ucy5zdGVwKSA6IDE7XG4gIGlmIChzdGVwIDwgMSB8fCBpc05hTihzdGVwKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2BvcHRpb25zLnN0ZXBgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEnKTtcblxuICB3aGlsZSAoY3VycmVudERhdGUuZ2V0VGltZSgpIDw9IGVuZFRpbWUpIHtcbiAgICBkYXRlcy5wdXNoKHRvRGF0ZShjdXJyZW50RGF0ZSkpO1xuICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgc3RlcCk7XG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIH1cblxuICByZXR1cm4gZGF0ZXM7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGN1cnJlbnRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtY2l0eScpO1xuY29uc3QgY3VycmVudENvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1jb3VudHJ5Jyk7XG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWljb24nKTtcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcCcpO1xuY29uc3QgY3VycmVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1kZXNjJyk7XG5jb25zdCBjdXJyZW50RmVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWZlZWwnKTtcbmNvbnN0IGN1cnJlbnRIdW1pID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaHVtaScpO1xuY29uc3QgY3VycmVudFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13aW5kJyk7XG5cbmNvbnN0IHdlZWtEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vlay1jYXJkLWRheSBoNCcpO1xuY29uc3Qgd2Vla0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vlay1jYXJkLWRheSBpbWcnKTtcbmNvbnN0IHdlZWtNYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWstY2FyZC1kYXkgaDQgKyBpbWcgKyBwICcpO1xuY29uc3Qgd2Vla01pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vlay1jYXJkLWRheSBoNCArIGltZyArIHAgKyBwJyk7XG5cbmNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbW9kYWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsIHAnKTtcblxuY29uc3QgcG9wdWxhdGVEb20gPSAoKCkgPT4ge1xuICBjb25zdCBjdXJyZW50Q2FyZCA9IChkYXRhKSA9PiB7XG4gICAgY3VycmVudENpdHkudGV4dENvbnRlbnQgPSBkYXRhLmNpdHk7XG4gICAgY3VycmVudENvdW50cnkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNvdW50cnl9YDtcbiAgICBjdXJyZW50SWNvbi5zcmMgPSBkYXRhLmljb247XG4gICAgY3VycmVudEljb24uYWx0ID0gJ1dlYXRoZXIgY29uZGl0aW9uIGljb24nO1xuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50VGVtcDtcbiAgICBjdXJyZW50RGVzYy50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgY3VycmVudEZlZWwudGV4dENvbnRlbnQgPSBgRmVlbDogJHtkYXRhLmZlZWxUZW1wfWA7XG4gICAgY3VycmVudEh1bWkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX1gO1xuICAgIGN1cnJlbnRXaW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7ZGF0YS53aW5kfWA7XG4gIH07XG4gIGNvbnN0IG5leHRXZWVrQ2FyZCA9IChkYXRhKSA9PiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgIHdlZWtEYXlbaW5kZXhdLnRleHRDb250ZW50ID0gZGF0YVtpbmRleF0uZGF5TmFtZTtcbiAgICAgIHdlZWtJY29uW2luZGV4XS5zcmMgPSBkYXRhW2luZGV4XS5pbWc7XG4gICAgICB3ZWVrSWNvbltpbmRleF0uYWx0ID0gYCR7ZGF0YVtpbmRleF0uZGF5TmFtZX0gd2VhdGhlciBjb25kaXRpb24gaWNvbmA7XG4gICAgICB3ZWVrTWF4VGVtcFtpbmRleF0udGV4dENvbnRlbnQgPSBgJHtkYXRhW2luZGV4XS50ZW1wTWF4fcKwQ2A7XG4gICAgICB3ZWVrTWluVGVtcFtpbmRleF0udGV4dENvbnRlbnQgPSBgJHtkYXRhW2luZGV4XS50ZW1wTWlufcKwQ2A7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGN1cnJlbnRDYXJkLCBuZXh0V2Vla0NhcmQgfTtcbn0pKCk7XG5cbmNvbnN0IGVycm9yTW9kYWwgPSAoKCkgPT4ge1xuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9IChtZXNzYWdlKSA9PiB7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgc2V0VGltZW91dChoaWRlTW9kYWwsIDUwMDApO1xuICB9O1xuXG4gIHJldHVybiB7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH07XG59KSgpO1xuXG5mdW5jdGlvbiBsb2FkaW5nSWNvbihkaXNwbGF5KSB7XG4gIGlmIChkaXNwbGF5ID09PSAnYWRkJykge1xuICAgIGxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9IGVsc2Uge1xuICAgIGxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlRG9tLCBlcnJvck1vZGFsLCBsb2FkaW5nSWNvbiB9O1xuIiwiaW1wb3J0IHsgYWRkRGF5cywgZWFjaERheU9mSW50ZXJ2YWwgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IHByb2Nlc3NEYXRhID0gKCgpID0+IHtcbiAgLy8gUHJvY2VzcyBkYXRhJ3MgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBkYXRhLi4uXG4gIC8vIC4uLiB0aGF0IHdlIHdhbnQgdG8gc2hvd1xuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gKGRhdGEpID0+IHtcbiAgICAvLyBSZXR1cm4gd2VhdGhlciBkYXRhJ3MgZm9yIGN1cnJlbnQgd2VhdGhlclxuXG4gICAgLy8gSWYgSWNvbiBpcyBub3QgdmFsaWQsIHVzZSBwbGFjZWhvbGRlclxuICAgIGxldCB3ZWF0aGVySWNvbjtcbiAgICAoZGF0YVsyXSAhPT0gJ2ltZ19lcnJvcicpXG4gICAgICA/IHdlYXRoZXJJY29uID0gZGF0YVsyXVxuICAgICAgOiB3ZWF0aGVySWNvbiA9ICcxMzQ3ZTcxMmUwMWNhYmVjNTQ5Ni5wbmcnO1xuXG4gICAgY29uc3QgY2xlYW5EYXRhID0ge1xuICAgICAgY3VycmVudFRlbXA6IGAke01hdGgucm91bmQoZGF0YVswXS5jdXJyZW50LnRlbXApfcKwQ2AsXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YVswXS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBodW1pZGl0eTogYCR7ZGF0YVswXS5jdXJyZW50Lmh1bWlkaXR5fSVgLFxuICAgICAgZmVlbFRlbXA6IGAke01hdGgucm91bmQoZGF0YVswXS5jdXJyZW50LmZlZWxzX2xpa2UpfcKwQ2AsXG4gICAgICB3aW5kOiBgJHtNYXRoLnJvdW5kKGRhdGFbMF0uY3VycmVudC53aW5kX3NwZWVkIC8gKDEwMDAgLyAzNjAwKSl9IGttL2hgLFxuICAgICAgY2l0eTogZGF0YVsxXS5uYW1lLFxuICAgICAgY291bnRyeTogZGF0YVsxXS5zdGF0ZSxcbiAgICAgIGljb246IHdlYXRoZXJJY29uLFxuICAgIH07XG5cbiAgICByZXR1cm4gY2xlYW5EYXRhO1xuICB9O1xuICBjb25zdCBuZXh0V2Vla1dlYXRoZXIgPSAoZGF0YSkgPT4ge1xuICAgIC8vIFJldHVybiB3ZWF0aGVyIGRhdGEncyBmb3IgbmV4dCA1IGRheXNcbiAgICBjb25zb2xlLmxvZygnV2Vla1dlYXRoZXInKTtcblxuICAgIGxldCB3ZWVrV2VhdGhlciA9IFtdO1xuXG4gICAgLy8gR2V0IHRvZGF5IGRhdGVcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgLy8gR2V0IHdlZWtcbiAgICBjb25zdCB0b2RheVBsdXM1ID0gYWRkRGF5cyh0b2RheSwgNCk7XG4gICAgY29uc3Qgd2VlayA9IGVhY2hEYXlPZkludGVydmFsKHtcbiAgICAgIHN0YXJ0OiB0b2RheSxcbiAgICAgIGVuZDogdG9kYXlQbHVzNSxcbiAgICB9KTtcblxuICAgIC8vIEZpbGwgdXAgXCJ3ZWVrV2VhdGhlclwiIGFycmF5IHdpdGggbmV4dCA1IGRheXMgd2VhdGhlciBjb25kaXRpb25cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZGF5ID0gd2Vla1tpbmRleF07XG4gICAgICBjb25zdCBkYXlOYW1lID0gZGF5LnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ3Nob3J0JyB9KTtcblxuICAgICAgY29uc3QgaWNvbkltZyA9IGRhdGFbM11baW5kZXhdOyAvLyBGZXRjaCBVUkwgdG8gY2hlY2sgaWYgaWNvbiBhdmFpbGFibGVcblxuICAgICAgY29uc3QgZGF5RGF0YSA9IHtcbiAgICAgICAgZGF5TmFtZSxcbiAgICAgICAgaW1nOiBpY29uSW1nLFxuICAgICAgICB0ZW1wTWluOiBNYXRoLnJvdW5kKGRhdGFbMF0uZGFpbHlbaW5kZXhdLnRlbXAubWluKSxcbiAgICAgICAgdGVtcE1heDogTWF0aC5yb3VuZChkYXRhWzBdLmRhaWx5W2luZGV4XS50ZW1wLm1heCksXG4gICAgICB9O1xuXG4gICAgICB3ZWVrV2VhdGhlci5wdXNoKGRheURhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB3ZWVrV2VhdGhlcjtcbiAgfTtcblxuICByZXR1cm4geyBjdXJyZW50V2VhdGhlciwgbmV4dFdlZWtXZWF0aGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzRGF0YTtcbiIsImNvbnN0IEFQSV9LRVkgPSAnM2JmN2EwYjM1OTU0YTI5ZjFmMzVhNjE2OWVlMmYwYmYnOyAvLyBPcGVuIHdlYXRoZXIgQVBJIEtleVxuXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAvLyBURVNUOiBBZGQgYSBkZWxheSB0byB0aGUgcmVxdWVzdCB0byB0ZXN0IGxvYWRpbmcgZnVuY3Rpb25cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb25kaXRpb25JY29uKGljb25JRCkge1xuICAvLyBGZXRjaCB3ZWF0aGVyIGNvbmRpdGlvbiBpY29uLi4uXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2Ake2ljb25JRH1gfUA0eC5wbmdgLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIC8vIENoZWNrIHJlc3BvbnNlIHN0YXR1cywgaWYgbm90IDIwMCwgdGhlcmUgaXMgYW4gZXJyb3JcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgcmV0dXJuICdpbWdfZXJyb3InO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGljb246ICR7ZXJyb3J9YCk7XG4gICAgcmV0dXJuICdpbWdfZXJyb3InO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEdlb2NvZGluZyhjaXR5KSB7XG4gIC8vIEZldGNoIGdlb2dyYXBoaWMgY29vcmRpbmF0ZSAobGF0L2xvbikgZnJvbSB0aGUgY2l0eSBuYW1lLi4uXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgICk7XG5cbiAgICAvLyBDaGVjayByZXNwb25zZSBzdGF0dXMsIGlmIGl0J3Mgbm90IDIwMCwgdGhlcmUgaXMgYW4gZXJyb3JcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHJldHVybiAnZXJyb3InO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhWzBdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGNvb3JkaW5hdGU6ICR7ZXJyb3J9YCk7XG4gICAgcmV0dXJuICdlcnJvckNhdGNoJztcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgLy8gRmV0Y2ggd2VhdGhlciBmb3IgdGhlIGVudGVyZWQgY291bnRyeVxuXG4gIC8vIEdldCBnZW8gY29vcmRpbmF0ZSAobGF0L2xvbikgZnJvbSBjaXR5IG5hbWVcbiAgY29uc3QgY29vcmRpbmF0ZSA9IGF3YWl0IGdldEdlb2NvZGluZyhjaXR5KTtcblxuICAvLyBDaGVjayBpZiBjb29yZGluYXRlIGFyZSB2YWxpZFxuICBpZiAoY29vcmRpbmF0ZSA9PT0gJ2Vycm9yJyB8fCBjb29yZGluYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ2Vycm9yJztcbiAgfVxuXG4gIGlmIChjb29yZGluYXRlID09PSAnZXJyb3JDYXRjaCcpIHtcbiAgICByZXR1cm4gJ2Vycm9yQ2F0Y2gnO1xuICB9XG5cbiAgLy8gR2V0IHdlYXRoZXIgZGF0YSdzXG4gIGxldCBkYXRhO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZS5sb259JnVuaXRzPW1ldHJpYyZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZhcHBpZD0ke0FQSV9LRVl9YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcblxuICAgIC8vIENoZWNrIHJlc3BvbnNlIHN0YXR1cywgaWYgaXQncyBub3QgMjAwLCB0aGVyZSBpcyBhbiBlcnJvclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgcmV0dXJuICdlcnJvcic7XG4gICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyB3ZWF0aGVyOiAke2Vycm9yfWApO1xuICAgIHJldHVybiAnZXJyb3JDYXRjaCc7XG4gIH1cblxuICAvLyBGZXRjaGluZyBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9uIGljb25cbiAgY29uc3QgY3VycmVudEljb25JRCA9IGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb247XG4gIGNvbnN0IGN1cnJlbnRJY29uVVJMID0gYXdhaXQgZ2V0Q29uZGl0aW9uSWNvbihjdXJyZW50SWNvbklEKTtcblxuICAvLyBGZXRjaCB3ZWVrIHdlYXRoZXIgY29uZGl0aW9uIGljb25cbiAgbGV0IHdlZWtJY29uVVJMID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICBjb25zdCBkYWlseUljb25JRCA9IGRhdGEuZGFpbHlbaW5kZXhdLndlYXRoZXJbMF0uaWNvbjtcbiAgICBjb25zdCBkYWlseUljb25VUkwgPSBhd2FpdCBnZXRDb25kaXRpb25JY29uKGRhaWx5SWNvbklEKTtcbiAgICB3ZWVrSWNvblVSTC5wdXNoKGRhaWx5SWNvblVSTCk7XG4gIH1cblxuICAvKiBURVNUIFpPTkUgKi9cbiAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gIC8qIFRFU1QgWk9ORSAqL1xuXG4gIC8vIFJldHVybiByb3cgd2VhdGhlciBkYXRhIGFuZCBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9uIGljb25cbiAgcmV0dXJuIFtkYXRhLCBjb29yZGluYXRlLCBjdXJyZW50SWNvblVSTCwgd2Vla0ljb25VUkxdO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyLCBnZXRDb25kaXRpb25JY29uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXJBcGknO1xuaW1wb3J0IHByb2Nlc3NEYXRhIGZyb20gJy4vcHJvY2Vzc0RhdGEnO1xuaW1wb3J0IHsgcG9wdWxhdGVEb20sIGVycm9yTW9kYWwsIGxvYWRpbmdJY29uIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LWlucHV0Jyk7XG5jb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXZWF0aGVyKCkge1xuICBsb2FkaW5nSWNvbignYWRkJyk7XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBkYXRhIGZyb20gT3BlbldlYXRoZXIgQVBJXG4gIGNvbnN0IGFwaURhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlJbnB1dC52YWx1ZSk7XG5cbiAgLy8gQ2hlY2sgaWYgZGF0YSBhcmUgY29ycmVjdFxuICBpZiAoYXBpRGF0YSA9PT0gJ2Vycm9yJykge1xuICAgIC8vIElmIG5vLCBzaG93IGVycm9yIG9uIHRoZSBwYWdlIC0gRS5nLiBJbmNvcnJlY3QgLyBub3QgZm91bmQgY2l0eSBuYW1lXG4gICAgbG9hZGluZ0ljb24oJ3JlbW92ZScpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSBjaGVjayBjaXR5IG5hbWUgb3IgcmV0cnkgbGF0ZXInO1xuICAgIGVycm9yTW9kYWwuc2hvd01vZGFsKG1lc3NhZ2UpO1xuICB9IGVsc2UgaWYgKGFwaURhdGEgPT09ICdlcnJvckNhdGNoJykge1xuICAgIC8vIElmIG5vLCBzaG93IGVycm9yIG9uIHRoZSBwYWdlIC0gQ2F0Y2ggb3RoZXJzIGVycm9ycyAoZS5nLiBuZXR3b3JrKVxuICAgIGxvYWRpbmdJY29uKCdyZW1vdmUnKTtcbiAgICBjb25zdCBtZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgcmV0cnkgbGF0ZXInO1xuICAgIGVycm9yTW9kYWwuc2hvd01vZGFsKG1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHllcywgcHJvY2VzcyBkYXRhJ3MuLi5cbiAgICBjb25zdCBjbGVhbkRhdGFDdXJyZW50ID0gcHJvY2Vzc0RhdGEuY3VycmVudFdlYXRoZXIoYXBpRGF0YSk7IC8vIEdldCBjdXJyZW50IHdlYXRoZXIgZGF0YVxuICAgIGNvbnN0IGNsZWFuRGF0YVdlZWsgPSBwcm9jZXNzRGF0YS5uZXh0V2Vla1dlYXRoZXIoYXBpRGF0YSk7IC8vIEdldCBjdXJyZW50IHdlYXRoZXIgZGF0YVxuXG4gICAgLy8gLi4udGhlbiwgcG9wdWxhdGUgXCJjdXJyZW50XCIgY2FyZCAuLi5cbiAgICBwb3B1bGF0ZURvbS5jdXJyZW50Q2FyZChjbGVhbkRhdGFDdXJyZW50KTtcbiAgICAvLyAuLi5hbmQgXCJuZXh0IHdlZWtcIiBjYXJkXG4gICAgcG9wdWxhdGVEb20ubmV4dFdlZWtDYXJkKGNsZWFuRGF0YVdlZWspO1xuICB9XG5cbiAgbG9hZGluZ0ljb24oJ3JlbW92ZScpO1xufVxuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKlxuRVZFTlQgTElTVEVORVJcbioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIC8vIFdoZW4gdXNlciBwcmVzcyBcIkVudGVyXCIuLi5cbiAgY29uc3Qga2V5ID0gZS5jb2RlO1xuICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgbG9hZFdlYXRoZXIoKTsgLy8gLi4ubG9hZCB0aGUgd2VhdGhlclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gLi4ucHJldmVudCBmb3JtIHN1Ym1pdFxuICB9XG59KTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gV2hlbiBjbGljayBidXR0b24gXCJzZWFyY2hcIi4uLlxuICBsb2FkV2VhdGhlcigpOyAvLyAuLi5sb2FkIHRoZSB3ZWF0aGVyXG4gIGUucHJldmVudERlZmF1bHQoKTsgLy8gLi4ucHJldmVudCBmb3JtIHN1Ym1pdFxufSk7XG5cbm1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVycm9yTW9kYWwuaGlkZU1vZGFsKCk7XG59KTtcblxuLyoqICoqKioqKioqKioqKioqKioqKioqKipcbkFVVE9DT01QTEVURVxuKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8gaW1wb3J0IHsgR2VvY29kZXJBdXRvY29tcGxldGUgfSBmcm9tICdAZ2VvYXBpZnkvZ2VvY29kZXItYXV0b2NvbXBsZXRlJztcbi8vIGltcG9ydCBhdXRvY29tcGxldGUgZnJvbSAnLi9nZW9hcGlmeSc7XG5cbi8vIGxldCB0aW1lcjsgLy8gVGltZXIgaWRlbnRpZmllclxuLy8gY29uc3Qgd2FpdFRpbWUgPSA1MDA7IC8vIFdhaXQgdGltZSBpbiBtaWxsaXNlY29uZHMgO1xuXG4vLyBjaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuLy8gICBjb25zdCBlbnRyeSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4vLyAgIGlmIChlbnRyeS5sZW5ndGggPD0gMSkgcmV0dXJuO1xuXG4vLyAgIC8vIENsZWFyIHRpbWVyXG4vLyAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cbi8vICAgLy8gV2FpdCBmb3IgWCBtcyBhbmQgdGhlbiBwcm9jZXNzIHRoZSByZXF1ZXN0XG4vLyAgIHRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4vLyAgICAgYXdhaXQgYXV0b2NvbXBsZXRlKGVudHJ5KTtcbi8vICAgfSwgd2FpdFRpbWUpO1xuLy8gfSk7XG5cbi8vIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBHZW9jb2RlckF1dG9jb21wbGV0ZShcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9jb21wbGV0ZScpLFxuLy8gICAnQVBJX0tFWScsXG4vLyAgIHsgdHlwZTogJ2NpdHknLCBza2lwSWNvbnM6IHRydWUsIHNraXBEZXRhaWxzOiB0cnVlIH0sXG4vLyApO1xuXG4vLyBhdXRvY29tcGxldGUub24oJ3NlbGVjdCcsIChsb2NhdGlvbikgPT4ge1xuLy8gICAvLyBjaGVjayBzZWxlY3RlZCBsb2NhdGlvbiBoZXJlXG4vLyAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbi8vIH0pO1xuXG4vLyBhdXRvY29tcGxldGUub24oJ3N1Z2dlc3Rpb25zJywgKHN1Z2dlc3Rpb25zKSA9PiB7XG4vLyAgIC8vIHByb2Nlc3Mgc3VnZ2VzdGlvbnMgaGVyZVxuLy8gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=