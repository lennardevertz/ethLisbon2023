/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/pageManagers/popup.scss":
/*!********************************************!*\
  !*** ./src/common/pageManagers/popup.scss ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  font-size: 14px !important;\n  line-height: 20px !important;\n  color: #000000 !important;\n  border: 2px solid #E6E6E3 !important;\n  border-radius: 4px !important;\n  background-color: #d7d7d7 !important;\n  z-index: 1000000 !important;\n  background: #fff !important;\n}\n:host > div {\n  border-style: none none solid;\n  border-width: 0px 0px 1px;\n  border-color: #E6E6E3;\n  padding-left: 8px;\n  cursor: pointer;\n  position: relative;\n}\n:host > div:hover {\n  background: #E3E3E6;\n}\n\n.type {\n  font-weight: 600;\n  display: inline;\n  font-family: \"Segoe UI\", sans-serif;\n}\n\n.key {\n  display: inline;\n  font-family: \"Segoe UI\", sans-serif;\n  color: #11dd74;\n  font-weight: 600;\n}\n.key::before {\n  content: \" \";\n}\n\n.value {\n  font-family: \"Segoe UI\", sans-serif;\n  font-size: 10px;\n}\n\n.img {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  max-width: 5%;\n}\n\n.tooltip {\n  font-family: \"Segoe UI\", sans-serif;\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  right: 5px;\n}\n\n.empty {\n  padding: 5px;\n  height: 19px;\n}\n\n:host::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n\n:host::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n:host::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n:host::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n\n:host::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.9);\n}", "",{"version":3,"sources":["webpack://./src/common/pageManagers/popup.scss"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,4BAAA;EACA,yBAAA;EACA,oCAAA;EACA,6BAAA;EACA,oCAAA;EACA,2BAAA;EACA,2BAAA;AACF;AACE;EACE,6BAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AACJ;AACI;EACE,mBAAA;AACN;;AAIA;EACE,gBAAA;EACA,eAAA;EACA,mCAAA;AADF;;AAIA;EACE,eAAA;EACA,mCAAA;EACA,cAAA;EACA,gBAAA;AADF;AAGE;EACE,YAAA;AADJ;;AAKA;EACE,mCAAA;EACC,eAAA;AAFH;;AAKA;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AAFJ;;AAKA;EACE,mCAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;EAEA,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,UAAA;AAHF;;AAOA;EACI,YAAA;EACA,YAAA;AAJJ;;AAOA;EACI,UAAA;EACA,WAAA;AAJJ;;AAMA;EACI,mBAAA;EACA,8BAAA;AAHJ;;AAKA;EACI,mBAAA;EACA,8BAAA;AAFJ;;AAIA;EACG,8BAAA;AADH;;AAGA;EACG,8BAAA;AAAH","sourcesContent":[":host {\r\n  font-size: 14px!important;\r\n  line-height: 20px!important;\r\n  color: #000000!important;\r\n  border: 2px solid #E6E6E3!important;\r\n  border-radius: 4px!important;\r\n  background-color: #d7d7d7!important;\r\n  z-index: 1000000!important;\r\n  background: #fff!important;\r\n\r\n  > div {\r\n    border-style: none none solid;\r\n    border-width: 0px 0px 1px;\r\n    border-color: #E6E6E3;\r\n    padding-left: 8px;\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n    &:hover {\r\n      background: #E3E3E6;\r\n    }\r\n  }\r\n}\r\n\r\n.type {\r\n  font-weight: 600;\r\n  display: inline;\r\n  font-family: 'Segoe UI', sans-serif;\r\n}\r\n\r\n.key {\r\n  display: inline;\r\n  font-family: 'Segoe UI', sans-serif;\r\n  color: #11dd74;\r\n  font-weight: 600;\r\n\r\n  &::before {\r\n    content: ' ';\r\n  }\r\n}\r\n\r\n.value {\r\n  font-family: 'Segoe UI', sans-serif;\r\n   font-size: 10px;\r\n}\r\n\r\n.img {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    max-width: 5%;\r\n}\r\n\r\n.tooltip {\r\n  font-family: 'Segoe UI', sans-serif;\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 5px;\r\n  right: 5px;\r\n\r\n}\r\n\r\n.empty {\r\n    padding: 5px;\r\n    height: 19px;\r\n}\r\n\r\n:host::-webkit-scrollbar {\r\n    width: 6px;\r\n    height: 6px;\r\n}\r\n:host::-webkit-scrollbar-track {\r\n    border-radius: 10px;\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n:host::-webkit-scrollbar-thumb{\r\n    border-radius: 10px;\r\n    background: rgba(0,0,0,0.2);\r\n}\r\n:host::-webkit-scrollbar-thumb:hover{\r\n  \tbackground: rgba(0,0,0,0.4);\r\n}\r\n:host::-webkit-scrollbar-thumb:active{\r\n  \tbackground: rgba(0,0,0,.9);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/common/widgets/content/widgetStyle.scss":
/*!*****************************************************!*\
  !*** ./src/common/widgets/content/widgetStyle.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tipping-popup {\n  width: 16rem;\n  justify-content: center;\n  border-radius: 0.375rem;\n  border-color: #000;\n  padding: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  background: #fff;\n  line-height: 1.5;\n  tab-size: 4;\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.tipping-popup > div {\n  display: flex;\n  min-height: 292px;\n  flex-direction: column;\n}\n.tipping-popup > div > main {\n  flex-grow: 1;\n}\n.tipping-popup header {\n  display: flex;\n  justify-content: space-between;\n}\n.tipping-popup header.noH1 {\n  justify-content: end;\n}\n.tipping-popup header h1 {\n  color: rgb(17, 24, 39);\n  line-height: 1.5rem;\n  font-weight: 500;\n  font-size: 1.125rem;\n  margin: 0;\n}\n.tipping-popup header .closeButton {\n  align-self: center;\n  cursor: pointer;\n}\n.tipping-popup .valueSelection {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.tipping-popup .valueSelection button, .tipping-popup .valueSelection .more {\n  justify-content: center;\n  border-radius: 0.375rem;\n  border-width: 1px;\n  border-color: transparent;\n  background-color: rgb(17, 221, 116);\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  cursor: pointer;\n  cursor: pointer;\n  background-color: rgb(220, 252, 231);\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.tipping-popup .valueSelection button:hover, .tipping-popup .valueSelection button.isSelected, .tipping-popup .valueSelection .more:hover, .tipping-popup .valueSelection .more.isSelected {\n  background: rgb(17, 204, 116);\n}\n.tipping-popup .valueSelection .more {\n  width: 27px;\n  align-items: center;\n}\n.tipping-popup .valueSelection .more span {\n  display: none;\n}\n.tipping-popup .valueSelection .more input {\n  display: none;\n}\n.tipping-popup .valueSelection .more.isSelected {\n  display: flex;\n}\n.tipping-popup .valueSelection .more.isSelected img {\n  display: none;\n}\n.tipping-popup .valueSelection .more.isSelected span {\n  display: block;\n  flex: 0 0 auto;\n}\n.tipping-popup .valueSelection .more.isSelected input {\n  display: block;\n  flex: 1 1 auto;\n  background: transparent;\n  border: none;\n  width: 25px;\n  font-family: inherit;\n  font-size: inherit;\n  margin-right: -10px;\n  padding: 0;\n  line-height: 1;\n  height: 1em;\n}\n.tipping-popup .valueSelection .more.isSelected input:focus {\n  outline: none;\n}\n.tipping-popup .loader {\n  margin-left: auto;\n  margin-right: auto;\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 10px solid rgb(229, 231, 235);\n  border-top-color: #11dd74;\n  animation: spin 1s infinite linear;\n}\n.tipping-popup .success {\n  width: 7rem;\n  height: 7rem;\n  margin: 1.5rem auto auto;\n  display: block;\n}\n.tipping-popup .select-wrapper {\n  margin-top: 0.25rem;\n}\n.tipping-popup .select-wrapper label {\n  color: rgb(107, 114, 128);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.tipping-popup .select-wrapper .select {\n  margin-top: 0.25rem;\n  position: relative;\n}\n.tipping-popup .select-wrapper .select > button {\n  line-height: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  position: relative;\n  width: 100%;\n  cursor: default;\n  border-radius: 0.375rem;\n  border-width: 1px;\n  border-color: rgb(209, 213, 219);\n  border-style: solid;\n  background-color: rgb(255, 255, 255);\n  padding: 0.5rem 0.5rem 0.5rem 0.75rem;\n  text-align: left;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n}\n.tipping-popup .select-wrapper .select > button:focus {\n  border-color: rgb(99 102 241/var(--tw-border-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0px 0px 0px 1px rgb(99, 102, 241), 0px 1px 2px 0px rgba(0, 0, 0, 0.05);\n}\n.tipping-popup .select-wrapper .select img {\n  border-radius: 9999px;\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.tipping-popup .select-wrapper .select .name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  margin-left: 0.75rem;\n  flex: 1 1 auto;\n}\n.tipping-popup .select-wrapper .select .arrow {\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  margin-left: 0.75rem;\n  display: flex;\n  align-items: center;\n  padding-right: 0.5rem;\n}\n.tipping-popup .select-wrapper .select > ul {\n  list-style: none;\n  position: absolute;\n  z-index: 10;\n  margin: 0.25rem 0 0;\n  max-height: 14rem;\n  display: none;\n  width: 100%;\n  overflow: auto;\n  border-radius: 0.375rem;\n  background: #fff;\n  padding: 0.25rem 0;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;\n}\n.tipping-popup .select-wrapper .select > ul li {\n  display: flex;\n  align-items: center;\n  color: rgb(17, 24, 39);\n  padding: 0.5rem 2.25rem 0.5rem 0.75rem;\n  user-select: none;\n  cursor: default;\n}\n.tipping-popup .select-wrapper .select.isOpen > ul, .tipping-popup .select-wrapper .select:focus-within > ul {\n  display: block;\n}\n.tipping-popup .toggleMessageBox {\n  color: rgb(107, 114, 128);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: right;\n  display: block;\n  margin: 0.75rem 0 0.75rem 0.25rem;\n  cursor: pointer;\n}\n.tipping-popup .toggleMessageBox strong {\n  text-decoration-line: underline;\n  font-weight: inherit;\n}\n.tipping-popup .messageBox {\n  margin-top: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.tipping-popup .messageBox.isHidden {\n  display: none;\n}\n.tipping-popup .messageBox textarea {\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  color: rgb(55, 65, 81);\n  line-height: 1.25;\n  padding: 0.5rem 0.75rem;\n  border-color: rgb(209, 213, 219);\n  border-width: 1px;\n  border-radius: 0.375rem;\n  -webkit-appearance: none;\n  appearance: none;\n  resize: none;\n  width: 100%;\n  height: 4rem;\n  box-sizing: border-box;\n}\n.tipping-popup .messageBox textarea:focus {\n  border-color: rgb(99, 102, 241);\n}\n.tipping-popup h2 {\n  text-align: center;\n  margin: 2rem 0 0;\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n  color: rgb(17, 24, 39);\n}\n.tipping-popup p {\n  text-align: center;\n  color: rgb(107, 114, 128);\n  line-height: 1.5rem;\n  margin: 0.25rem 0 0;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.tipping-popup p strong {\n  color: rgb(17, 221, 116);\n}\n.tipping-popup .subtitle {\n  line-height: 1.5rem;\n  font-weight: 400;\n  font-size: 1.125rem;\n  color: rgb(17, 24, 39);\n}\n.tipping-popup .subtitle .linkIcon {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.tipping-popup .subtitle .twitterIcon {\n  width: 1rem;\n  margin-top: 0.25rem;\n  margin-left: 0.25rem;\n}\n.tipping-popup .subtitle a {\n  color: inherit;\n  text-decoration: inherit;\n}\n.tipping-popup .toggleText {\n  margin-top: 1.5rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  font-size: 1.125rem;\n  color: rgb(17, 24, 39);\n}\n.tipping-popup footer button {\n  justify-content: center;\n  border-radius: 0.375rem;\n  border-width: 1px;\n  border-color: transparent;\n  background-color: rgb(17, 221, 116);\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  cursor: pointer;\n  width: 100%;\n  color: #fff;\n}\n.tipping-popup footer button:hover, .tipping-popup footer button.isSelected {\n  background: rgb(17, 204, 116);\n}\n.tipping-popup footer .link {\n  font-weight: 500;\n  line-height: 1.5rem;\n  color: rgb(88, 101, 242);\n  font-size: 0.75rem;\n}\n\ninput[type=text] {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 8px 12px;\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-family: \"Segoe UI\", sans-serif;\n  line-height: 1.428571429;\n  color: #333333;\n  vertical-align: middle;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  box-sizing: border-box;\n  border-radius: 4px;\n  outline: none;\n}\n\ninput[type=text]:focus {\n  border: 1px solid #a6a6a6;\n}\n\n.results {\n  font-size: 14px !important;\n  line-height: 20px !important;\n  color: #000000 !important;\n  border: 2px solid #E6E6E3 !important;\n  border-radius: 4px !important;\n  background-color: #d7d7d7 !important;\n  z-index: 1000000 !important;\n  background: #fff !important;\n}\n.results > div {\n  border-style: none none solid;\n  border-width: 0px 0px 1px;\n  border-color: #E6E6E3;\n  padding-left: 8px;\n  cursor: pointer;\n  position: relative;\n}\n.results > div:hover {\n  background: #E3E3E6;\n}\n.results .type {\n  font-weight: 600;\n  display: inline;\n  font-family: \"Segoe UI\", sans-serif;\n}\n.results .key {\n  display: inline;\n  font-family: \"Segoe UI\", sans-serif;\n  color: #11dd74;\n  font-weight: 600;\n}\n.results .key::before {\n  content: \" \";\n}\n.results .value {\n  font-family: \"Segoe UI\", sans-serif;\n  font-size: 10px;\n}\n.results .img {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  max-width: 5%;\n}\n.results .tooltip {\n  font-family: \"Segoe UI\", sans-serif;\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  right: 5px;\n}\n.results .empty {\n  padding: 5px;\n  height: 19px;\n}\n.results::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.results::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1);\n}\n.results::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.results::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.4);\n}\n.results::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.9);\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", "",{"version":3,"sources":["webpack://./src/common/widgets/content/widgetStyle.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin button {\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    border-width: 1px;\r\n    border-color: transparent;\r\n    background-color: rgb(17 221 116);\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5rem;\r\n    font-weight: 500;\r\n    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\r\n    cursor: pointer;\r\n\r\n    &:hover, &.isSelected {\r\n        background: rgb(17 204 116)\r\n    }\r\n}\r\n\r\n.tipping-popup {\r\n    width: 16rem;\r\n    justify-content: center;\r\n    border-radius: 0.375rem;\r\n    border-color: #000;\r\n    padding: 0.75rem;\r\n    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\r\n    background: #fff;\r\n    line-height: 1.5;\r\n    tab-size: 4;\r\n    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\r\n    > div {\r\n        display: flex;\r\n        min-height: 292px;\r\n        flex-direction: column;\r\n\r\n        > main {\r\n            flex-grow: 1;\r\n        }\r\n    }\r\n\r\n    header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        &.noH1 {\r\n            justify-content: end;\r\n        }\r\n\r\n        h1 {\r\n            color: rgb(17 24 39);\r\n            line-height: 1.5rem;\r\n            font-weight: 500;\r\n            font-size: 1.125rem;\r\n            margin: 0;\r\n        }\r\n\r\n        .closeButton {\r\n            align-self: center;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    .valueSelection {\r\n        margin-top: 1rem;\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        button, .more {\r\n            @include button;\r\n            cursor: pointer;\r\n            background-color: rgb(220 252 231);\r\n            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\r\n\r\n        }\r\n\r\n        .more {\r\n            width: 27px;\r\n            align-items: center;\r\n\r\n            span {\r\n                display: none;\r\n            }\r\n\r\n            input {\r\n                display: none;\r\n            }\r\n\r\n            &.isSelected {\r\n                display: flex;\r\n\r\n                img {\r\n                    display: none;\r\n                }\r\n\r\n                span {\r\n                    display: block;\r\n                    flex: 0 0 auto;\r\n                }\r\n\r\n                input {\r\n                    display: block;\r\n                    flex: 1 1 auto;\r\n                    background: transparent;\r\n                    border: none;\r\n                    width: 25px;\r\n                    font-family: inherit;\r\n                    font-size: inherit;\r\n                    margin-right: -10px;\r\n                    padding: 0;\r\n                    line-height: 1;\r\n                    height: 1em;\r\n\r\n                    &:focus {\r\n                        outline: none;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .loader {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 6rem;\r\n        height: 6rem;\r\n        border-radius: 50%;\r\n        border: 10px solid rgb(229 231 235);\r\n        border-top-color: #11dd74;\r\n        animation: spin 1s infinite linear;\r\n    }\r\n\r\n    .success {\r\n        width: 7rem;\r\n        height: 7rem;\r\n        margin: 1.5rem auto auto;\r\n        display: block;\r\n    }\r\n\r\n    .select-wrapper {\r\n        margin-top: 0.25rem;\r\n\r\n        label {\r\n            color: rgb(107 114 128);\r\n            font-size: 0.875rem;\r\n            line-height: 1.25rem;\r\n\r\n        }\r\n\r\n        .select {\r\n            margin-top: 0.25rem;\r\n            position: relative;\r\n\r\n            > button {\r\n                line-height: inherit;\r\n                color: inherit;\r\n                font-family: inherit;\r\n                font-size: inherit;\r\n                position: relative;\r\n                width: 100%;\r\n                cursor: default;\r\n                border-radius: 0.375rem;\r\n                border-width: 1px;\r\n                border-color: rgb(209 213 219);\r\n                border-style: solid;\r\n                background-color: rgb(255 255 255);\r\n                padding: 0.5rem 0.5rem 0.5rem 0.75rem;\r\n                text-align: left;\r\n                box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\r\n                display: flex;\r\n                align-items: center;\r\n\r\n                &:focus {\r\n\r\n                    border-color: rgb(99 102 241 / var(--tw-border-opacity));\r\n                    outline: 2px solid transparent;\r\n                    outline-offset: 2px;\r\n                    box-shadow: 0px 0px 0px 1px rgb(99, 102, 241), 0px 1px 2px 0px rgba(0, 0, 0, 0.05);\r\n\r\n                }\r\n            }\r\n\r\n            img {\r\n\r\n                border-radius: 9999px;\r\n                flex-shrink: 0;\r\n                width: 1.5rem;\r\n                height: 1.5rem;\r\n            }\r\n\r\n            .name {\r\n\r\n                overflow: hidden;\r\n                text-overflow: ellipsis;\r\n                white-space: nowrap;\r\n                display: block;\r\n                margin-left: 0.75rem;\r\n                flex: 1 1 auto;\r\n            }\r\n\r\n            .arrow {\r\n                top: 0px;\r\n                bottom: 0px;\r\n                right: 0px;\r\n                margin-left: 0.75rem;\r\n                display: flex;\r\n                align-items: center;\r\n                padding-right: 0.5rem;\r\n\r\n            }\r\n\r\n            > ul {\r\n                list-style: none;\r\n                position: absolute;\r\n                z-index: 10;\r\n                margin: 0.25rem 0 0;\r\n                max-height: 14rem;\r\n                display: none;\r\n                width: 100%;\r\n                overflow: auto;\r\n                border-radius: 0.375rem;\r\n                background: #fff;\r\n                padding: 0.25rem 0;\r\n                font-size: 1rem;\r\n                line-height: 1.5rem;\r\n                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;\r\n\r\n                li {\r\n                    display: flex;\r\n                    align-items: center;\r\n                    color: rgb(17 24 39);\r\n                    padding: 0.5rem 2.25rem 0.5rem 0.75rem;\r\n                    user-select: none;\r\n                    cursor: default;\r\n                }\r\n            }\r\n\r\n            &.isOpen, &:focus-within {\r\n                > ul {\r\n                    display: block;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .toggleMessageBox {\r\n        color: rgb(107 114 128);\r\n        font-size: 0.875rem;\r\n        line-height: 1.25rem;\r\n        text-align: right;\r\n        display: block;\r\n        margin: 0.75rem 0 0.75rem 0.25rem;\r\n        cursor: pointer;\r\n\r\n        strong {\r\n            text-decoration-line: underline;\r\n            font-weight: inherit;\r\n        }\r\n    }\r\n\r\n    .messageBox {\r\n        margin-top: .75rem;\r\n        margin-bottom: 1.5rem;\r\n\r\n        &.isHidden {\r\n            display: none;\r\n        }\r\n\r\n        textarea {\r\n            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\r\n\r\n            color: rgb(55 65 81);\r\n            line-height: 1.25;\r\n            padding: 0.5rem 0.75rem;\r\n            border-color: rgb(209 213 219);\r\n            border-width: 1px;\r\n            border-radius: 0.375rem;\r\n            -webkit-appearance: none;\r\n            appearance: none;\r\n            resize: none;\r\n            width: 100%;\r\n            height: 4rem;\r\n            box-sizing: border-box;\r\n\r\n            &:focus {\r\n                border-color: rgb(99, 102, 241);\r\n            }\r\n        }\r\n    }\r\n\r\n    h2 {\r\n        text-align: center;\r\n        margin: 2rem 0 0;\r\n        font-size: 1.25rem;\r\n        font-weight: 500;\r\n        line-height: 1.5rem;\r\n        color: rgb(17 24 39)\r\n    }\r\n\r\n    p {\r\n        text-align: center;\r\n        color: rgb(107 114 128);\r\n        line-height: 1.5rem;\r\n        margin: 0.25rem 0 0;\r\n        font-size: 0.75rem;\r\n        font-weight: 500;\r\n\r\n        strong {\r\n            color: rgb(17 221 116);\r\n        }\r\n    }\r\n\r\n    .subtitle {\r\n\r\n        line-height: 1.5rem;\r\n        font-weight: 400;\r\n        font-size: 1.125rem;\r\n        color: rgb(17 24 39);\r\n\r\n        .linkIcon {\r\n            width: 1.25rem;\r\n            height: 1.25rem;\r\n        }\r\n\r\n        .twitterIcon {\r\n            width: 1rem;\r\n            margin-top: 0.25rem;\r\n            margin-left: 0.25rem;\r\n        }\r\n\r\n        a {\r\n            color: inherit;\r\n            text-decoration: inherit;\r\n        }\r\n    }\r\n\r\n    .toggleText {\r\n\r\n        margin-top: 1.5rem;\r\n        line-height: 1.5rem;\r\n        font-weight: 400;\r\n        font-size: 1.125rem;\r\n        color: rgb(17 24 39);\r\n\r\n    }\r\n\r\n    footer {\r\n\r\n        button {\r\n            @include button;\r\n            width: 100%;\r\n            color: #fff;\r\n\r\n        }\r\n\r\n        .link {\r\n\r\n            font-weight: 500;\r\n            line-height: 1.5rem;\r\n            color: rgb(88 101 242);\r\n            font-size: 0.75rem;\r\n        }\r\n    }\r\n}\r\n\r\n\r\ninput[type=\"text\"] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 38px;\r\n    padding: 8px 12px;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n    font-family: 'Segoe UI', sans-serif;\r\n    line-height: 1.428571429;\r\n    color: #333333;\r\n    vertical-align: middle;\r\n    background-color: #ffffff;\r\n    border: 1px solid #cccccc;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    outline: none;\r\n}\r\n\r\ninput[type=\"text\"]:focus {\r\n    border: 1px solid #a6a6a6;\r\n}\r\n\r\n.results {\r\n    font-size: 14px !important;\r\n    line-height: 20px !important;\r\n    color: #000000 !important;\r\n    border: 2px solid #E6E6E3 !important;\r\n    border-radius: 4px !important;\r\n    background-color: #d7d7d7 !important;\r\n    z-index: 1000000 !important;\r\n    background: #fff !important;\r\n\r\n    > div {\r\n        border-style: none none solid;\r\n        border-width: 0px 0px 1px;\r\n        border-color: #E6E6E3;\r\n        padding-left: 8px;\r\n        cursor: pointer;\r\n        position: relative;\r\n\r\n        &:hover {\r\n            background: #E3E3E6;\r\n        }\r\n    }\r\n\r\n\r\n    .type {\r\n        font-weight: 600;\r\n        display: inline;\r\n        font-family: 'Segoe UI', sans-serif;\r\n    }\r\n\r\n    .key {\r\n        display: inline;\r\n        font-family: 'Segoe UI', sans-serif;\r\n        color: #11dd74;\r\n        font-weight: 600;\r\n\r\n        &::before {\r\n            content: ' ';\r\n        }\r\n    }\r\n\r\n    .value {\r\n        font-family: 'Segoe UI', sans-serif;\r\n        font-size: 10px;\r\n    }\r\n\r\n    .img {\r\n        position: absolute;\r\n        top: 5px;\r\n        right: 5px;\r\n        max-width: 5%;\r\n    }\r\n\r\n    .tooltip {\r\n        font-family: 'Segoe UI', sans-serif;\r\n        visibility: hidden;\r\n        width: 120px;\r\n        background-color: black;\r\n        color: #fff;\r\n        text-align: center;\r\n        border-radius: 6px;\r\n        padding: 5px 0;\r\n\r\n        /* Position the tooltip */\r\n        position: absolute;\r\n        z-index: 1;\r\n        top: 5px;\r\n        right: 5px;\r\n\r\n    }\r\n\r\n    .empty {\r\n        padding: 5px;\r\n        height: 19px;\r\n    }\r\n\r\n    &::-webkit-scrollbar {\r\n        width: 6px;\r\n        height: 6px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n        border-radius: 10px;\r\n        background: rgba(0, 0, 0, 0.1);\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n        border-radius: 10px;\r\n        background: rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb:hover {\r\n        background: rgba(0, 0, 0, 0.4);\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb:active {\r\n        background: rgba(0, 0, 0, .9);\r\n    }\r\n}\r\n\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/fast-creator/dist/entry.js":
/*!*************************************************!*\
  !*** ./node_modules/fast-creator/dist/entry.js ***!
  \*************************************************/
/***/ ((module) => {



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 * @param attributes
 * @param documentObject
 * @returns {HTMLElement}
 */
function createFromDefinition() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var documentObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!documentObject) documentObject = document;
  var element = documentObject.createElement(attributes.tagName || 'div');
  repairClasses(attributes);

  for (var attrName in attributes) {
    if (attrName === 'className') {
      element.className = attributes[attrName];
    } else if (attrName === 'classList') {
      var _iterator = _createForOfIteratorHelper(attributes.classList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;
          element.classList.add(x);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (attrName === 'text') {
      element.textContent = attributes.text;
    } else if (attrName === 'html') {
      element.innerHTML = attributes.html;
    } else if (attrName === 'data') {
      Object.assign(element.dataset, attributes.data);
    } else if (attrName === 'children') {
      attributes.children.forEach(function (x) {
        return element.appendChild(x instanceof Node ? x : create(x, {}, documentObject));
      });
    } else if (attrName.startsWith('on')) {
      element[attrName] = attributes[attrName];
    } else if (attrName.startsWith('style')) {
      if (_typeof(attributes[attrName]) == "object") {
        for (var styleName in attributes[attrName]) {
          element.style.setProperty(styleName, attributes[attrName][styleName]);
        }
      } else if (attributes[attrName] !== false) {
        element.setAttribute(attrName, attributes[attrName]);
      }
    } else if (attrName === 'tagName') {//nothing
    } else {
      if (attributes[attrName] === true) element.setAttribute(attrName, attrName);else if (attributes[attrName] !== false) element.setAttribute(attrName, attributes[attrName]);
    }
  }

  return element;
}

function repairClasses(obj) {
  if (obj.className) {
    if (!obj.classList) obj.classList = [];
    obj.classList = [].concat(_toConsumableArray(obj.classList), _toConsumableArray(obj.className.split(' ')));
    delete obj.className;
  }
}
/**
 *
 * @param {string} selector
 * $returns {object}
 */


function parseSelector(selector) {
  selector = (selector + "").trim();
  var position = 0;

  function parseElement() {
    var ret = {};
    var canBeTagname = true;

    while (position < selector.length) {
      var _char = selector[position];
      position++;

      if (_char === '#') {
        ret.id = parseText();
      } else if (_char === '.') {
        if (!ret.classList) ret.classList = [];
        ret.classList.push(parseText());
      } else if (_char === '[') {
        var attrName = parseText(['=', ']']);
        skipWhitespace();

        if (selector[position] == '=') {
          position++;
          skipWhitespace();
          if (selector[position] != '"') throw new Error("Syntax error in position " + position);
          position++;
          var value = parseAttributeValue();
          skipWhitespace();
          if (selector[position] != '"') throw new Error("Syntax error in position " + position);
          position++;
          skipWhitespace();
          if (selector[position] != ']') throw new Error("Syntax error in position " + position);
          position++;
          ret[attrName] = value;
        } else if (selector[position] == ']') {
          position++;
          ret[attrName] = true;
        } else {
          throw new Error("Syntax error in position " + position);
        }
      } else if (/\s/.test(_char)) {
        while (position < selector.length && /\s/.test(selector[position])) {
          position++;
          skipWhitespace();
        }

        ret.children = [parseElement()];
      } else if (canBeTagname) {
        ret.tagName = _char + parseText();
      } else {
        throw new Error("Syntax error in position " + position);
      }

      canBeTagname = false;
    }

    return ret;
  }

  function parseText() {
    var escape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['.', '#', ',', '['];
    var text = '';

    while (position < selector.length) {
      var _char2 = selector[position];

      if (/\s/.test(_char2) || escape.includes(_char2)) {
        return text;
      } else {
        text += _char2;
        position++;
      }
    }

    return text;
  }

  function parseAttributeValue() {
    var text = '';

    while (position < selector.length) {
      var _char3 = selector[position];

      if (_char3 == '"') {
        return text;
      } else {
        text += _char3;
        position++;
      }
    }

    return text;
  }

  function skipWhitespace() {
    while (position < selector.length) {
      var _char4 = selector[position];

      if (!/\s/.test(_char4)) {
        return;
      } else {
        position++;
      }
    }
  }

  if (selector === "") return {};else return parseElement();
}
/**
 *
 * @param {string} selector
 * @param {object} attributes
 * @param documentObject
 * @returns {HTMLElement}
 */


function create() {
  var definition = {};
  var documentObject = null;

  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  if (typeof params[0] == "string") definition = mergeObjects(definition, parseSelector(params.splice(0, 1)[0]));
  if (_typeof(params[0]) == "object" && !(params[0] instanceof Node)) definition = mergeObjects(definition, params.splice(0, 1)[0]);

  for (var _i = 0, _params = params; _i < _params.length; _i++) {
    var param = _params[_i];

    if (param instanceof Document) {
      documentObject = param;
    } else if (param instanceof Node) {
      documentObject = param.ownerDocument;
      if (!definition.children) definition.children = [];
      definition.children.push(param);
    }
  }

  return createFromDefinition(definition, documentObject);
}

function mergeObjects(a, b) {
  repairClasses(a);
  repairClasses(b);

  var ret = _objectSpread({}, a, {}, b);

  if (a.data && b.data) {
    ret.data = _objectSpread({}, a.data, {}, b.data);
  }

  if (a.children && b.children) {
    ret.children = [].concat(_toConsumableArray(a.children), _toConsumableArray(b.children));
  }

  if (a.classList && b.classList) {
    ret.classList = [].concat(_toConsumableArray(a.classList), _toConsumableArray(b.classList));
  }

  return ret;
}

module.exports = {
  createFromDefinition: createFromDefinition,
  parseSelector: parseSelector,
  create: create,
  mergeObjects: mergeObjects,
  "default": create
};

/***/ }),

/***/ "./src/common/widgets/content/customizedDonationsWidget.mpts":
/*!*******************************************************************!*\
  !*** ./src/common/widgets/content/customizedDonationsWidget.mpts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _0=document.createDocumentFragment();const _1=document.createElement("header");const _2=document.createTextNode("\r\n    ");_1.append(_2);const _3=document.createElement("h1");const _4=document.createTextNode(variables["customHeader"]);_3.append(_4);_1.append(_3);const _5=document.createTextNode("\r\n    ");_1.append(_5);const _6=document.createElement("img");_6.setAttribute("class", "closeButton");_6.setAttribute("src", variables["close"]);_6.setAttribute("alt", "close");_1.append(_6);const _7=document.createTextNode("\r\n    ");_1.append(_7);const _8=document.createElement("style");const _9=document.createTextNode("\r\n    ::-webkit-scrollbar {\r\n         width: 6px;\r\n         height: 6px;\r\n         }\r\n         ::-webkit-scrollbar-track {\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.1);\r\n         }\r\n         ::-webkit-scrollbar-thumb{\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.2);\r\n         }\r\n         ::-webkit-scrollbar-thumb:hover{\r\n         background: rgba(0,0,0,0.4);\r\n         }\r\n         ::-webkit-scrollbar-thumb:active{\r\n         background: rgba(0,0,0,.9);\r\n         }\r\n     ");_8.append(_9);_1.append(_8);const _10=document.createTextNode("\r\n");_1.append(_10);_0.append(_1);const _11=document.createTextNode("\r\n");_0.append(_11);const _12=document.createElement("main");const _13=document.createTextNode("\r\n    ");_12.append(_13);const _14=document.createElement("p");_14.setAttribute("class", "toggleText");const _15=document.createTextNode(variables["customText"]);_14.append(_15);_12.append(_14);const _16=document.createTextNode("\r\n\r\n    ");_12.append(_16);const _17=document.createElement("input");_17.setAttribute("class", "toggleInput");_17.setAttribute("type", "text");_12.append(_17);const _18=document.createTextNode("\r\n\r\n    ");_12.append(_18);const _19=document.createElement("div");_19.setAttribute("class", "valueSelection");const _20=document.createTextNode("\r\n        ");_19.append(_20);const _21=document.createElement("button");_21.setAttribute("type", "button");_21.setAttribute("data-value", "1");_21.setAttribute("class", "isSelected");const _22=document.createTextNode("\r\n            ");_21.append(_22);const _23=document.createElement("span");const _24=document.createTextNode("$1");_23.append(_24);_21.append(_23);const _25=document.createTextNode("\r\n        ");_21.append(_25);_19.append(_21);const _26=document.createTextNode("\r\n\r\n        ");_19.append(_26);const _27=document.createElement("button");_27.setAttribute("type", "button");_27.setAttribute("data-value", "2");const _28=document.createTextNode("\r\n            ");_27.append(_28);const _29=document.createElement("span");const _30=document.createTextNode("$2");_29.append(_30);_27.append(_29);const _31=document.createTextNode("\r\n        ");_27.append(_31);_19.append(_27);const _32=document.createTextNode("\r\n\r\n        ");_19.append(_32);const _33=document.createElement("button");_33.setAttribute("type", "button");_33.setAttribute("data-value", "5");const _34=document.createTextNode("\r\n            ");_33.append(_34);const _35=document.createElement("span");const _36=document.createTextNode("$5");_35.append(_36);_33.append(_35);const _37=document.createTextNode("\r\n        ");_33.append(_37);_19.append(_33);const _38=document.createTextNode("\r\n\r\n        ");_19.append(_38);const _39=document.createElement("div");_39.setAttribute("class", "more");const _40=document.createTextNode("\r\n            ");_39.append(_40);const _41=document.createElement("img");_41.setAttribute("alt", "");_41.setAttribute("src", variables["pen"]);_39.append(_41);const _42=document.createTextNode("\r\n            ");_39.append(_42);const _43=document.createElement("span");const _44=document.createTextNode("$");_43.append(_44);_39.append(_43);const _45=document.createTextNode("\r\n            ");_39.append(_45);const _46=document.createElement("input");_39.append(_46);const _47=document.createTextNode("\r\n        ");_39.append(_47);_19.append(_39);const _48=document.createTextNode("\r\n    ");_19.append(_48);_12.append(_19);const _49=document.createTextNode("\r\n    ");_12.append(_49);const _50=document.createElement("div");_50.setAttribute("class", "select-wrapper networkSelection");const _51=document.createTextNode("\r\n        ");_50.append(_51);const _52=document.createElement("label");_52.setAttribute("for", "network");const _53=document.createTextNode("Network:");_52.append(_53);_50.append(_52);const _54=document.createTextNode("\r\n        ");_50.append(_54);const _55=document.createElement("div");_55.setAttribute("class", "select networkSelect");_55.setAttribute("data-network", variables["networks"]["0"]["code"]);const _56=document.createTextNode("\r\n            ");_55.append(_56);const _57=document.createElement("button");_57.setAttribute("type", "button");_57.setAttribute("id", "network");const _58=document.createTextNode("\r\n                ");_57.append(_58);const _59=document.createElement("img");_59.setAttribute("src", variables["networks"]["0"]["img"]);_59.setAttribute("alt", "");_57.append(_59);const _60=document.createTextNode("\r\n                ");_57.append(_60);const _61=document.createElement("span");_61.setAttribute("class", "name");const _62=document.createTextNode(variables["networks"]["0"]["name"]);_61.append(_62);_57.append(_61);const _63=document.createTextNode("\r\n                ");_57.append(_63);const _64=document.createElement("img");_64.setAttribute("class", "arrow");_64.setAttribute("src", variables["arrow"]);_57.append(_64);const _65=document.createTextNode("\r\n            ");_57.append(_65);_55.append(_57);const _66=document.createTextNode("\r\n            ");_55.append(_66);const _67=document.createElement("ul");_67.setAttribute("tabindex", "-1");_67.setAttribute("role", "listbox");const _68=document.createTextNode("\r\n                ");_67.append(_68);let _69=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["networks"])){let network = _foreachValue;const _70=document.createTextNode("\r\n                    ");_69.append(_70);const _71=document.createElement("li");_71.setAttribute("role", "option");_71.setAttribute("data-network", network["code"]);const _72=document.createTextNode("\r\n                        ");_71.append(_72);const _73=document.createElement("img");_73.setAttribute("src", network["img"]);_73.setAttribute("alt", "");_71.append(_73);const _74=document.createTextNode("\r\n                        ");_71.append(_74);const _75=document.createElement("span");_75.setAttribute("class", "name");const _76=document.createTextNode(network["name"]);_75.append(_76);_71.append(_75);const _77=document.createTextNode("\r\n                    ");_71.append(_77);_69.append(_71);const _78=document.createTextNode("\r\n                ");_69.append(_78);}_67.append(_69);const _79=document.createTextNode("\r\n            ");_67.append(_79);_55.append(_67);const _80=document.createTextNode("\r\n        ");_55.append(_80);_50.append(_55);const _81=document.createTextNode("\r\n    ");_50.append(_81);_12.append(_50);const _82=document.createTextNode("\r\n    ");_12.append(_82);const _83=document.createElement("div");_83.setAttribute("class", "select-wrapper tokenSelection");const _84=document.createTextNode("\r\n        ");_83.append(_84);const _85=document.createElement("label");_85.setAttribute("for", "tokenButton");const _86=document.createTextNode("Coin:");_85.append(_86);_83.append(_85);const _87=document.createTextNode("\r\n        ");_83.append(_87);const _88=document.createElement("div");_88.setAttribute("class", "select tokenSelect");_88.setAttribute("data-symbol", variables["tokens"]["0"]["symbol"]);const _89=document.createTextNode("\r\n            ");_88.append(_89);const _90=document.createElement("button");_90.setAttribute("type", "button");_90.setAttribute("id", "tokenButton");const _91=document.createTextNode("\r\n                ");_90.append(_91);const _92=document.createElement("img");_92.setAttribute("src", variables["tokens"]["0"]["logoURI"]);_92.setAttribute("alt", "");_90.append(_92);const _93=document.createTextNode("\r\n                ");_90.append(_93);const _94=document.createElement("span");_94.setAttribute("class", "name");const _95=document.createTextNode(variables["tokens"]["0"]["name"]);_94.append(_95);_90.append(_94);const _96=document.createTextNode("\r\n                ");_90.append(_96);const _97=document.createElement("img");_97.setAttribute("class", "arrow");_97.setAttribute("src", variables["arrow"]);_90.append(_97);const _98=document.createTextNode("\r\n            ");_90.append(_98);_88.append(_90);const _99=document.createTextNode("\r\n            ");_88.append(_99);const _100=document.createElement("ul");_100.setAttribute("tabindex", "-1");_100.setAttribute("role", "listbox");const _101=document.createTextNode("\r\n                ");_100.append(_101);let _102=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["tokens"])){let token = _foreachValue;const _103=document.createTextNode("\r\n                    ");_102.append(_103);const _104=document.createElement("li");_104.setAttribute("role", "option");_104.setAttribute("data-network", token["network"]);_104.setAttribute("data-symbol", token["symbol"]);const _105=document.createTextNode("\r\n                        ");_104.append(_105);const _106=document.createElement("img");_106.setAttribute("src", token["logoURI"]);_106.setAttribute("alt", "");_104.append(_106);const _107=document.createTextNode("\r\n                        ");_104.append(_107);const _108=document.createElement("span");_108.setAttribute("class", "name");const _109=document.createTextNode(token["name"]);_108.append(_109);_104.append(_108);const _110=document.createTextNode("\r\n                    ");_104.append(_110);_102.append(_104);const _111=document.createTextNode("\r\n                ");_102.append(_111);}_100.append(_102);const _112=document.createTextNode("\r\n            ");_100.append(_112);_88.append(_100);const _113=document.createTextNode("\r\n        ");_88.append(_113);_83.append(_88);const _114=document.createTextNode("\r\n    ");_83.append(_114);_12.append(_83);const _115=document.createTextNode("\r\n\r\n    ");_12.append(_115);const _116=document.createElement("div");_116.setAttribute("class", "toggleMessageBox");const _117=document.createTextNode("🗨️ ");_116.append(_117);const _118=document.createElement("strong");const _119=document.createTextNode("Add a message");_118.append(_119);_116.append(_118);_12.append(_116);const _120=document.createTextNode("\r\n\r\n    ");_12.append(_120);const _121=document.createElement("div");_121.setAttribute("class", "messageBox isHidden");const _122=document.createTextNode("\r\n        ");_121.append(_122);const _123=document.createElement("textarea");_123.setAttribute("name", "Text1");_123.setAttribute("cols", "20");_123.setAttribute("rows", "2");_123.setAttribute("maxlength", "45");_123.setAttribute("placeholder", "Hey, I love your work, keep going!🔥");_121.append(_123);const _124=document.createTextNode("\r\n    ");_121.append(_124);_12.append(_121);const _125=document.createTextNode("\r\n");_12.append(_125);_0.append(_12);const _126=document.createTextNode("\r\n");_0.append(_126);const _127=document.createElement("footer");const _128=document.createTextNode("\r\n    ");_127.append(_128);const _129=document.createElement("button");_129.setAttribute("type", "button");_129.setAttribute("class", "send");const _130=document.createTextNode("\r\n        ");_129.append(_130);const _131=document.createElement("span");const _132=document.createTextNode(variables["buttonValue"]);_131.append(_132);_129.append(_131);const _133=document.createTextNode("\r\n    ");_129.append(_133);_127.append(_129);const _134=document.createTextNode("\r\n");_127.append(_134);_0.append(_127);return _0}


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/arrow.svg":
/*!************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/arrow.svg ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSIjOWNhM2FmIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4Ij4NCiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiDQogICAgICAgICAgZD0iTTUuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxMC41ODZsMy4yOTMtMy4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTR6Ig0KICAgICAgICAgIGNsaXAtcnVsZT0iZXZlbm9kZCIvPg0KPC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/bnb.webp":
/*!***********************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/bnb.webp ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,UklGRnoBAABXRUJQVlA4TG4BAAAvGAAGEL+CoG3bePvPn9R5hYbCtm0bdvz/8BJBtk1ndH+5s40kycnMPVp4mKRACuSfDoX/G+CftUARQIFTCKAQwAA7RAkRBEE4qNEJDUFhlyBYoCTAAqGhI5jwI3jKBiHkoOOPFwoIgmAYxG3o1OoNhR1CCLFihigc0gLMEEIURL3dBWf2GQIItm0db06bWnFSI7Zt26+Y/1R+5esMIvqvwG3UBo5Nd1+BFUc6UdT4cyTDpJqMRWSkgoQmaghoooagLtvJzoDjsq+/lg7H8N3TpebDXtbR/TbTZXZlELBXDrLKXBjp2Ysts6j6eHi/x95YpG3YX4DAoOLnLu7Glp8XTnDGb7E3+knCQ9lXH4Gb/EqWhWvAUTnIINYSkXUReJuJyPQDSG1EpB3SlQf4NagrC0ViUPFZpE9x6elmPwk8eTlTGwb85azvb5k5x8Q/xhv3a3LsxvlSfiNIKL8qJKz+wT9+DgowiQqO/U71/ww=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/close.svg":
/*!************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/close.svg ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImgtNiB3LTYgdGV4dC1ncmF5LTUwMCBtbC1hdXRvIiBmaWxsPSJub25lIg0KICAgICB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzZiNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4NCiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik02IDE4TDE4IDZNNiA2bDEyIDEyIi8+DQo8L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/eth.png":
/*!**********************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/eth.png ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/matic.webp":
/*!*************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/matic.webp ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,UklGRhwCAABXRUJQVlA4TA8CAAAvGAAGED/kIJIkRaon/255pupJhMO2jRyJH/rvN40lICjyfzS2jSQpqj3rmcn9PD7/rP62DqDOwqgZRSAEkRFGKIoiIwRhFGFujvtvtjmK1+3xn6Ow/ZpA2IpQ/IYdRMgcjtdtjtft8dvrdv2sCLv9RcWMorYjFLYiOH5IMNw2iB2z7SAyw1GE2i+BhIQfKiR0UYlAhIwIxOXdDQEtBDywwAsDfDBBwA4BDQQUCECQbdt09GM7bdu2bdvGid/7sY2Bf3R6BhH9Z+S2jSPJU25l169geHpjqUzF7XBXMqmYlxEzki64wNdVSEdESOScENOZSwhIlvCHKCX5+yIAn58VTZHbRrMA/K9bR99ULNkow6QdoJ87bTL9xBXxCXGkmXge5LpfVT/Xq65dfBNJPp5ygUxKx2/p126TYs9P/YJDUxkAQzUPfiC8rDtgzw/eWV4yZY66RwLQk/XrOZOi+/iHACh7AAxb7/zw+Z+WGpQdIybD9D0BPA6AzEq6zvC+2ixv3fjAaadklgAOD0DuZ4zm0XZF4/KzHwheGYYBeMoAyO9xj9I2f7N2TgF6Z+EoZwAA7MfhpX9bsxICAjdGjkzKBf6G+jdlLfvf5KJPMkXgSsXzEOh7WbBrB2drVAM3BPk4948EEnIxppe17XxSONK8vyoi/T7cevXz/iq/B2Kyfh+vB9U3p/qu/bOd1feZAQA=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/pen.svg":
/*!**********************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/pen.svg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImgtNSB3LTUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzAwMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4NCiAgICA8cGF0aCBkPSJNMTMuNTg2IDMuNTg2YTIgMiAwIDExMi44MjggMi44MjhsLS43OTMuNzkzLTIuODI4LTIuODI4Ljc5My0uNzkzek0xMS4zNzkgNS43OTNMMyAxNC4xNzJWMTdoMi44MjhsOC4zOC04LjM3OS0yLjgzLTIuODI4eiIvPg0KPC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/common/img/usdc.png":
/*!***********************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/common/img/usdc.png ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADQ0lEQVR4XtXZMW4UQRCFYY7AEZyZC3ABTsAFOAEJiSVHhKQEJISkXAGRI5AQQrLkAAmRmBCcEBAZjYVX8rdV3bUzs7PjX/qTfa97unqN2LXv3VuI45OPP45PPl0VvXT9nSMYapLuv1o8+Nz6vFWw44/3XK7jn0lwsEX1PIvhQQ6t59srPnwtes7Z8YFr1XPPgg9Zu55/Em6+q6dvv2+91vPxy7Orh88/b72+i84xCjetKuY9xbyq8+yEm1XMsNczw15F5yrjRi3fn/32rLew37PF+c8/W/2WzlXCTVr2sF+1h/2WztfExS1b2B1rC7stnTPFhZkZ9uYyw16mc4a4KDPDXqaYZ2bYy3TeW1S/1WXYaynmLTPsZTr3BouRGfZ6innPDHuRzr3BYmSEnYpiXjHCTuTRsy/3nX3R4aO9zKtG2Il0/lEXYN6ziut6innk5OEH7GSOwT1aRtiJnHQB5i3H4j4txTyyfAERdjIj7GTdJ6/PtzqZEXZ09AWYtxRzFfOWYq7/h+9/+BHzzOEdFDsq5i3FPLL77j998819tzqZr95duHSrM6cyfEW3o90LEPOeYj63Yq6LX8AN9uZSzPVgFxDh2jGKue79AqI9KrhHVTHXRS4g26uH6yuKuS56ATcOv/Ov4tqeYq4HuYDIi19/fdQ19nqKua7mAm6MsNNSzHV1FxD9fcFOSzHX4QIufVHFPFPMM8U8U8wj9/plSMwjI+xkirnu/dtghB0V85ZirqMvYMBOZoSdMV2NsKPlCxgU88xd/s8X92op5pGbC6hcQoSdlrvi+pYRdvTW8JULGBTznhVcU1HMI53/GksaYaeqmFeNsKMPTj8cOfs1FiMj7FQU84oRdiKde8Nx4UPRYISdnmLeM8JOpnPfwnJkhr2WYt4yw16k84a4KDLD3txm2IsM/yga4cLMFnan2sJupnM2cXFmD/u72sN+pvOVcJOWPez37PHoxdetNZnOVcaNeraw27OF3Z7OtRNuVjHCTs8IOxWdZxRuWnXK4aesvdE5JuHma9fzz4IPWauee3Z84Fr0nHvFhx9az7cYHmRpyx9v94mHWkrPcXCGd8NDzm36y4y14cGn6v53Dgfq6fp98Q/twpmau6HU4QAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/common/RequestLimiter.js":
/*!**************************************!*\
  !*** ./src/common/RequestLimiter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestLimiter": () => (/* binding */ RequestLimiter)
/* harmony export */ });
class RequestLimiter {
    constructor(limits = [{time: 1000, amount: 40}]) {
        this.limits = limits;
        this.working = [];
        this.waiting = [];
    }

    isGood(howMuch = 1) {
        for (const limit of this.limits) {
            const now = new Date();
            const count = this.working.filter(x => now - x.start <= limit.time).map(x => x.count).reduce((a, b) => a + b, 0);
            if (count + howMuch > limit.amount) {
                return false;
            }
        }
        return true;
    }

    scheduleOne(item, callback) {
        return this.scheduleGroup([item], callback)
    }

    scheduleMany(array, callback) {
        let groups = [];
        const size = this.limits[0].amount;
        for (let i = 0; i < array.length; i += size) {
            groups.push(array.slice(i, size));
        }
        return Promise.all(groups.map(x => this.scheduleGroup(x, callback)))
    }

    scheduleGroup(array, callback) {
        if (this.isGood(array.length)) {
            return this.run(array, callback);
        } else {
            return new Promise((resolve, reject) => {
                this.waiting.push({callback, resolve, reject});
            });
        }
    }

    async run(data, callback) {
        const obj = {data, callback, count: data.length, start: new Date};
        this.working.push(obj)
        setTimeout(() => this.tryNext(), this.limits[0].time);
        try {
            return await callback(data);
        } finally {
            this.working.splice(this.working.indexOf(obj), 1);
        }
    }

    tryNext() {
        while (this.waiting.length > 0 && this.isGood(this.waiting[0].count)) {
            const waiting = this.waiting.pop();
            this.run(waiting.data, waiting.callback).then(waiting.resolve, waiting.reject);
        }
        if (this.waiting.length > 0) {
            setTimeout(() => this.tryNext(), this.limits[0].time);
        }
    }
}

/***/ }),

/***/ "./src/common/pageManagers/abstractPageManager.js":
/*!********************************************************!*\
  !*** ./src/common/pageManagers/abstractPageManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractPageManager": () => (/* binding */ AbstractPageManager)
/* harmony export */ });
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.scss */ "./src/common/pageManagers/popup.scss");


class AbstractPageManager {

    constructor(document) {
        this.document = document;
        this.reverseKnownAddresses = {};
    }

    generateRoundInfo(div, key, element, callback) {

        if (Object.values(element).length == 0) {
            let item = document.createElement('div')
            item.className = 'empty';
            item.textContent = "No round info found :(";
            let a = document.createElement('a')
            a.textContent = 'Add your project.';
            a.href = 'https://github.com/lennardevertz/ethLisbon2023';
            a.target = '_blank';
            item.append(document.createElement('br'))
            item.append(a)
            div.append(item)
            return
        }
        let infoElem = document.createElement('div');
        infoElem.textContent = Object.values(element)[0]['roundInfo'];
        div.append(infoElem)
        return
    }

    getRoundInfo(value) {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({type: "getRoundInfo", value}, response => {
                resolve(response);
            });
        });
    }

    isEnabled() {
        return new Promise(r => chrome.storage.local.get(['enabled'], x => r(x?.enabled ?? true)))
    }
}

/***/ }),

/***/ "./src/common/pageManagers/factory.js":
/*!********************************************!*\
  !*** ./src/common/pageManagers/factory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageManagerFactory": () => (/* binding */ pageManagerFactory)
/* harmony export */ });
/* harmony import */ var _twitterPageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twitterPageManager */ "./src/common/pageManagers/twitterPageManager.js");


// can add other websites here,
// stay with Twtitter for the scope of this hackathon
const specificDomainList = {
    "twitter.com": _twitterPageManager__WEBPACK_IMPORTED_MODULE_0__.TwitterPageManager,
}

// runs only if visited page is in specificDomainList
async function pageManagerFactory(document, url) {
    let specific = Object.entries(specificDomainList).find(([domain, constructor]) => url.hostname === domain || url.hostname.endsWith('.' + domain))
    if (specific) {
        return new specific[1](document)
    }
}

/***/ }),

/***/ "./src/common/pageManagers/twitterPageManager.js":
/*!*******************************************************!*\
  !*** ./src/common/pageManagers/twitterPageManager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterPageManager": () => (/* binding */ TwitterPageManager)
/* harmony export */ });
/* harmony import */ var _abstractPageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractPageManager */ "./src/common/pageManagers/abstractPageManager.js");
/* harmony import */ var _RequestLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RequestLimiter */ "./src/common/RequestLimiter.js");
/* harmony import */ var _widgets_customTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/customTwitter */ "./src/common/widgets/customTwitter.js");




class TwitterPageManager extends _abstractPageManager__WEBPACK_IMPORTED_MODULE_0__.AbstractPageManager {
    static namesResults = {};

    constructor(document) {
        super(document)
    }

    async init() {
        this.requestLimiter = new _RequestLimiter__WEBPACK_IMPORTED_MODULE_1__.RequestLimiter([{amount: 10, time: 1000}]);
        this.iconUrl = await this.getIcon()
        this.check()
        addEventListener('load', () => this.check())
        addEventListener('focus', () => setTimeout(() => this.check(), 250))
        addEventListener('popstate', () => this.check())
        addEventListener('click', () => setTimeout(() => this.check(), 250))
        addEventListener('click', e => {
        console.log(e.srcElement)
        console.log(this.lastDropdown)
            if (e.srcElement != this.lastDropdown) this.lastDropdown?.remove();
        });
        setInterval(() => this.check(), 2000);
    }

    async check() {
        if (await this.isEnabled()) {
            this.searchPlaces();
        } else {
            Array.from(document.querySelectorAll('.icon')).forEach(x => x.remove());
        }
        this.checkGarbageDropdown();
    }

    async searchPlaces() {
        const places = Array.from(this.listPlaces());
        const names = new Set(places.map(x => x.name).filter(x => x));
        await this.getInfo(names);
        for (const place of places) {
            TwitterPageManager.namesResults[place.name].then(x => {
                place.addCallback(x?.result ?? {});
            })
        }
    }

    checkGarbageDropdown() {
        const selector = '.icon:focus, .icon:hover, .iconTwitterDropdown:hover, .iconTwitterDropdown:focus, .iconTwitterDropdown.isClicked';
        if (!document.querySelector(selector)) {
            console.log("Running garbage collector")
            setTimeout(() => {
                if (!document.querySelector(selector)) {
                    this.lastDropdown?.remove();
                }
            }, 500);
        }
    }

    async getInfo(names) {
        const lacking = Array.from(names).filter(x => !TwitterPageManager.namesResults[x]);
        if (lacking.length == 0) return

        let requestPromise = this.apiCall(lacking);
        for (const name of lacking) {
            TwitterPageManager.namesResults[name] = requestPromise.then(d => d[name]);
        }
        await requestPromise;
    }

    async apiCall(names) {
        let responses = await this.requestLimiter.scheduleMany(names, (x) => {
            return new Promise((resolve, reject) => {
                console.log("getting bulk round info")
                chrome.runtime.sendMessage({
                    type: "getRoundInfoBulk",
                    value: x
                }, response => {
                    resolve(response);
                });
            });
        });
        return responses.reduce((a, b) => ({...a, ...b}));
    }

    getIcon() {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({
                type: "getIconUrl"
            }, response => {
                resolve(response);
            });
        });
    }

    * listPlaces() {
        for (const div of document.querySelectorAll('div.r-dnmrzs.r-1ny4l3l, .r-gtdqiz .css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci, .css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci')) {
            if (div.matches('.css-1dbjc4n.r-xoduu5.r-1wbh5a2.r-dnmrzs.r-1ny4l3l')) continue;
            const name = Array.from(div.querySelectorAll('.r-9ilb82, .r-14j79pv, .r-rjixqe')).map(x => x.textContent).find(x => x[0] == '@');
            if(!name) continue;
            let existingIcon = div.querySelector('.icon');
            if (existingIcon) {
                if (existingIcon.dataset.sourceName == name) {
                    continue;
                } else {
                    existingIcon.remove()
                    existingIcon = null
                }
            }
            const addCallback = (data) => {
              if (!data.error && !div.querySelector(".icon")) {
                if (Object.values(data).length !== 0) {
                  const dropdownContent = new _widgets_customTwitter__WEBPACK_IMPORTED_MODULE_2__.CustomTwitter(data[name]).div
                  this.createIcon(div, data, dropdownContent, name);
                }
              }
            };
            if (name) {
                yield {name, addCallback};
            }
        }
    }

    createIcon = (parent, data, dropdownContent, name) => {
      const icon = document.createElement("div");
      icon.className = "icon";
      icon.dataset.sourceName = name;
      icon.style.width = "1.1em";
      icon.style.height = "1.1em";
      icon.style.margin = "-1px 0 -1px 0";
      icon.style.borderTop = "2px solid transparent";
      icon.style.borderbottom = "2px solid transparent";
      icon.style.borderLeft = "0.3em solid transparent";
      icon.style.borderRight = "0.3em solid transparent";
      icon.style.background = `url(${this.iconUrl}) no-repeat`;
      icon.style.backgroundSize = `contain`;
      icon.onmouseover = (e) => e.stopPropagation();
      icon.setAttribute("tabindex", "-1");
      const dropdown = document.createElement("div");
//      dropdown.addEventListener("click", (e) => e.stopPropagation());
      icon.append(dropdown);
      parent
        .querySelector(
          ".r-1fmj7o5:not(h2), .r-18jsvk2:not(h2), .r-1nao33i:not(h2), .r-vlxjld:not(h2)"
        )
        ?.append(icon);
      icon.onmouseover = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let dropdown = dropdownContent;
        this.document.body.append(dropdown);
        let rect = icon.getBoundingClientRect();
        dropdown.classList.add("iconTwitterDropdown");
        dropdown.style.position = "absolute";
        dropdown.style.left = scrollX + rect.left + "px";
        dropdown.style.top = scrollY + rect.top + rect.height + "px";
        dropdown.style.zindex = 1000000;
        dropdown.onclick = () => {dropdown.classList.add("isClicked");}

        if (dropdown !== this.lastDropdown) {
          this.lastDropdown?.remove();
        }
        this.lastDropdown = dropdown;

        const eventCallback = () => {
          if (
            !dropdown.matches(":hover, :focus, :focus-within, .isClicked") &&
            !icon.matches(":hover, :focus, :focus-within")
          ) {
            setTimeout(() => this.checkGarbageDropdown(), 200);
            removeEventListener("scroll", eventCallback);
          }
        };

        dropdown.onmouseout = () => {
          setTimeout(() => this.checkGarbageDropdown(), 200);
        };
        dropdown.shadowRoot.addEventListener("close", () => dropdown.remove());
        icon.onblur = eventCallback;
        addEventListener("scroll", eventCallback);
      };
      icon.onclick = (e) => {
        dropdown.classList.add("isClicked");
        e.stopPropagation();
      };

      return { icon };
    };
}

/***/ }),

/***/ "./src/common/widgets/content/CustomizedDonationsWidget.js":
/*!*****************************************************************!*\
  !*** ./src/common/widgets/content/CustomizedDonationsWidget.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizedDapp": () => (/* binding */ CustomizedDapp)
/* harmony export */ });
/* harmony import */ var _customizedDonationsWidget_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizedDonationsWidget.mpts */ "./src/common/widgets/content/customizedDonationsWidget.mpts");
/* harmony import */ var _url_loader_img_eth_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!url-loader!../../img/eth.png */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/eth.png");
/* harmony import */ var _url_loader_img_usdc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!url-loader!../../img/usdc.png */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/usdc.png");
/* harmony import */ var _url_loader_img_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!url-loader!../../img/arrow.svg */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/arrow.svg");
/* harmony import */ var _url_loader_img_pen_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!url-loader!../../img/pen.svg */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/pen.svg");
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!url-loader!../../img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/close.svg");
/* harmony import */ var _url_loader_img_matic_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!url-loader!../../img/matic.webp */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/matic.webp");
/* harmony import */ var _url_loader_img_bnb_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !!url-loader!../../img/bnb.webp */ "./node_modules/url-loader/dist/cjs.js!./src/common/img/bnb.webp");
/* harmony import */ var _tippingUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tippingUtils */ "./src/common/widgets/tippingUtils.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_9__);












class CustomizedDapp {
    constructor(data) {
        let recipient = data.recipient ?? null;
        let network = "linea"
        let amount = 1
        let networks = [
            {name: 'Linea', img: _url_loader_img_eth_png__WEBPACK_IMPORTED_MODULE_1__["default"], chainId: 59140, code: 'linea'},
            {name: 'Polygon', img: _url_loader_img_matic_webp__WEBPACK_IMPORTED_MODULE_6__["default"], chainId: 137, code: 'Polygon'},
            {name: 'Ethereum', img: _url_loader_img_eth_png__WEBPACK_IMPORTED_MODULE_1__["default"], chainId: 1, code: 'ETH'},
            {name: 'BSC', img: _url_loader_img_bnb_webp__WEBPACK_IMPORTED_MODULE_7__["default"], chainId: 56, code: 'BSC'},
        ]
        if (data.tokenFilter) {
            networks = networks.filter(n => data.tokenFilter[n.code.toLowerCase()])
        }
        if (data.networkFilter){
            networks = networks.filter(n => data.networkFilter[n.name.toLowerCase()])
        }
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_9__.create)('div', {}, (0,_customizedDonationsWidget_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({
            customHeader: data.customHeader,
            customText: data.customText ?? "",
            buttonValue: data.buttonValue,
            networks,
            tokens: this.filterTokens(data.tokenFilter),
            eth_logo: _url_loader_img_eth_png__WEBPACK_IMPORTED_MODULE_1__["default"],
            usdc_logo: _url_loader_img_usdc_png__WEBPACK_IMPORTED_MODULE_2__["default"],
            arrow: _url_loader_img_arrow_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
            pen: _url_loader_img_pen_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
            close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
        }));

        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));

        this.html.querySelectorAll('.select').forEach(select => {
            select.onclick = e => select.classList.toggle('isOpen')
            select.onblur = e => select.classList.remove('isOpen')
            select.onclick = e => select.firstElementChild.focus();
        })
        this.html.querySelectorAll('.select ul li').forEach(li => {
            li.onclick = e => {
                e.stopPropagation();
                const button = li.parentNode.parentNode.querySelector('button')
                button.querySelector('.name').textContent = li.querySelector('.name').textContent;
                button.querySelector('img').src = li.querySelector('img').src;
                Object.assign(button.parentNode.dataset, li.dataset);
                li.parentNode.parentNode.classList.remove('isOpen')
                this.html.querySelector(':focus')?.blur()
                this.refreshVisibleCoins()
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let network = this.html.querySelector('.networkSelect').dataset.network ?? network;
            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
            let message = this.html.querySelector('.messageBox textarea').value;
            let input = this.html.querySelector('input').value;
            let amount = (this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value) ?? amount;
            this.html.dispatchEvent(Object.assign(new Event('customEvent', {bubbles: true}), {
                input,
                network,
                amount,
                token,
                recipient,
                message
            }))
        });
        this.html.querySelectorAll('.valueSelection > *').forEach(b => {
            b.onclick = e => {
                this.html.querySelectorAll('.valueSelection  > *').forEach(x => x.classList.remove('isSelected'))
                b.classList.add('isSelected')
                b.querySelector('input')?.focus();
            }
        })
        const toggleMessageBox = this.html.querySelector('.toggleMessageBox');
        const messageBox = this.html.querySelector('.messageBox');
        if (!data.showMessageBox)
            toggleMessageBox.style.display = 'none';
        else
            toggleMessageBox.onclick = () => {
                if (messageBox.classList.contains('isHidden')) {
                    messageBox.classList.remove('isHidden')
                    toggleMessageBox.lastChild.textContent = 'No message'
                } else {
                    messageBox.classList.add('isHidden')
                    toggleMessageBox.lastChild.textContent = 'Add a message'
                    messageBox.querySelector('textarea').value = '';
                }
            }
        const toggleValueSelection = this.html.querySelector('.valueSelection');
        if (!data.showValueSelection)
            toggleValueSelection.style.display = 'none';
            this.html.querySelector('.valueSelection .isSelected').dataset.value = ""
        const toggleNetworkSelection = this.html.querySelector('.networkSelection');
        if (!data.showNetworkSelection)
            toggleNetworkSelection.style.display = 'none';
            this.html.querySelector('.networkSelect').dataset.network = "";
        const toggleTokenSelection = this.html.querySelector('.tokenSelection');
        if (!data.showTokenSelection)
            toggleTokenSelection.style.display = 'none';
            this.html.querySelector('.tokenSelect').dataset.symbol = "";
        const toggleInput = this.html.querySelector('.toggleInput');
        if (!data.showInput)
            toggleInput.style.display = 'none';
        const toggleText = this.html.querySelector('.toggleText');
        if (!data.customText)
            toggleText.style.display = 'none';
        this.refreshVisibleCoins();
    }

    refreshVisibleCoins() {
        let network = this.html.querySelector('.networkSelect').dataset.network;
        let tokens = this.html.querySelectorAll('.tokenSelect li')
        for (let token of tokens) {
            token.style.display = token.dataset.network == network ? '' : 'none';
        }
        if (network && this.html.querySelector('.tokenSelect').dataset.network != network) {
            this.html.querySelector(`.tokenSelect li[data-network="${network}"]`).click();
        }
    }

    filterTokens(tokenFilter) {
        if (!tokenFilter) {
            return _tippingUtils__WEBPACK_IMPORTED_MODULE_8__.tokens;
        } else {
            return _tippingUtils__WEBPACK_IMPORTED_MODULE_8__.tokens.filter(t => {
                return tokenFilter[t.network.toLowerCase()]?.includes(t.symbol);
            })
        }
    }

}

/***/ }),

/***/ "./src/common/widgets/customTwitter.js":
/*!*********************************************!*\
  !*** ./src/common/widgets/customTwitter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomTwitter": () => (/* binding */ CustomTwitter)
/* harmony export */ });
/* harmony import */ var _content_widgetStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/widgetStyle.scss */ "./src/common/widgets/content/widgetStyle.scss");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_CustomizedDonationsWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/CustomizedDonationsWidget */ "./src/common/widgets/content/CustomizedDonationsWidget.js");





class CustomTwitter {
    constructor(data) {
        this.div = document.createElement('div')
        this.div.attachShadow({mode: 'open'})
        this.div.shadowRoot.append((0,fast_creator__WEBPACK_IMPORTED_MODULE_1__.create)('style', {text: _content_widgetStyle_scss__WEBPACK_IMPORTED_MODULE_0__["default"]}));

        let popup = (0,fast_creator__WEBPACK_IMPORTED_MODULE_1__.create)('section.tipping-popup')
        this.div.shadowRoot.append(popup);

        popup.append(new _content_CustomizedDonationsWidget__WEBPACK_IMPORTED_MODULE_2__.CustomizedDapp(data).html);
        popup.addEventListener('customEvent', async (e) => {
            console.log({e, data})
            // set url params that can be processed by third party app
            let params = {
                amount: e.amount ?? null,
                network: e.network ?? null,
                token: e.token ?? null,
                message: e.message ?? null,
                input: e.input ?? null,
                recipient: e.recipient ?? null,
                other: e.other ?? null
            }
            window.open(data['hostURL'] + Object.entries(params).filter(([k, v]) => v).map(x => encodeURIComponent(x[0]) + '=' + encodeURIComponent(x[1])).join('&'))
        })
    }
}


/***/ }),

/***/ "./src/common/widgets/tippingUtils.js":
/*!********************************************!*\
  !*** ./src/common/widgets/tippingUtils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokens": () => (/* binding */ tokens)
/* harmony export */ });
const tokens = [
    {
        "chainId": 1,
        "network": "ETH",
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
    },
    {
        "chainId": 59140,
        "network": "Linea",
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
    },
    {
        "chainId": 137,
        "network": "Polygon",
        "name": "MATIC",
        "symbol": "MATIC",
        "decimals": 18,
        "logoURI": "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912"
    },
    {
        "chainId": 56,
        "network": "BSC",
        "name": "BNB",
        "symbol": "BNB",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png"
    }
]

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/chromium/contentScript/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_pageManagers_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/pageManagers/factory */ "./src/common/pageManagers/factory.js");


(0,_common_pageManagers_factory__WEBPACK_IMPORTED_MODULE_0__.pageManagerFactory)(document, document.location).then(x=>x?.init())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUU7QUFDckU7QUFDQSxnRkFBa0IsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BhZ2VNYW5hZ2Vycy9wb3B1cC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lkZ2V0cy9jb250ZW50L3dpZGdldFN0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmFzdC1jcmVhdG9yL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXRzL2NvbnRlbnQvY3VzdG9taXplZERvbmF0aW9uc1dpZGdldC5tcHRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1nL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltZy9ibmIud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltZy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWcvZXRoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltZy9tYXRpYy53ZWJwIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1nL3Blbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWcvdXNkYy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9SZXF1ZXN0TGltaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BhZ2VNYW5hZ2Vycy9hYnN0cmFjdFBhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcGFnZU1hbmFnZXJzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wYWdlTWFuYWdlcnMvdHdpdHRlclBhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lkZ2V0cy9jb250ZW50L0N1c3RvbWl6ZWREb25hdGlvbnNXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXRzL2N1c3RvbVR3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aWRnZXRzL3RpcHBpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nocm9taXVtL2NvbnRlbnRTY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6aG9zdCB7XFxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFMyAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3ICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiAxMDAwMDAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcbjpob3N0ID4gZGl2IHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0U2RTZFMztcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG46aG9zdCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRTNFM0U2O1xcbn1cXG5cXG4udHlwZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5rZXkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzExZGQ3NDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5rZXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcblxcbi52YWx1ZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBtYXgtd2lkdGg6IDUlO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAxOXB4O1xcbn1cXG5cXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbn1cXG5cXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tbW9uL3BhZ2VNYW5hZ2Vycy9wb3B1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUNGO0FBQ0U7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBS0E7RUFDRSxtQ0FBQTtFQUNDLGVBQUE7QUFGSDs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU9BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBSko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0FBSEo7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0FBRko7O0FBSUE7RUFDRyw4QkFBQTtBQURIOztBQUdBO0VBQ0csOEJBQUE7QUFBSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6aG9zdCB7XFxyXFxuICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHghaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICMwMDAwMDAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFMyFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHghaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNyFpbXBvcnRhbnQ7XFxyXFxuICB6LWluZGV4OiAxMDAwMDAwIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmYhaW1wb3J0YW50O1xcclxcblxcclxcbiAgPiBkaXYge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRTZFNkUzO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNFM0UzRTY7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnR5cGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ua2V5IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICMxMWRkNzQ7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcblxcclxcbiAgJjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udmFsdWUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XFxyXFxuICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuXFxyXFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5IHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgIGhlaWdodDogNnB4O1xcclxcbn1cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbn1cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7XFxyXFxuICBcXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmV7XFxyXFxuICBcXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC45KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpcHBpbmctcG9wdXAge1xcbiAgd2lkdGg6IDE2cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB0YWItc2l6ZTogNDtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcbi50aXBwaW5nLXBvcHVwID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAyOTJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50aXBwaW5nLXBvcHVwID4gZGl2ID4gbWFpbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi50aXBwaW5nLXBvcHVwIGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGlwcGluZy1wb3B1cCBoZWFkZXIubm9IMSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuLnRpcHBpbmctcG9wdXAgaGVhZGVyIGgxIHtcXG4gIGNvbG9yOiByZ2IoMTcsIDI0LCAzOSk7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcbi50aXBwaW5nLXBvcHVwIGhlYWRlciAuY2xvc2VCdXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiBidXR0b24sIC50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAyMjEsIDExNik7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDI1MiwgMjMxKTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiBidXR0b246aG92ZXIsIC50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiBidXR0b24uaXNTZWxlY3RlZCwgLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIC5tb3JlOmhvdmVyLCAudGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUuaXNTZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTcsIDIwNCwgMTE2KTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIC5tb3JlIHtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIC5tb3JlIHNwYW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIC5tb3JlIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZS5pc1NlbGVjdGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZS5pc1NlbGVjdGVkIGltZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUuaXNTZWxlY3RlZCBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZS5pc1NlbGVjdGVkIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZS5pc1NlbGVjdGVkIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5sb2FkZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogNnJlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjI5LCAyMzEsIDIzNSk7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMTFkZDc0O1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnN1Y2Nlc3Mge1xcbiAgd2lkdGg6IDdyZW07XFxuICBoZWlnaHQ6IDdyZW07XFxuICBtYXJnaW46IDEuNXJlbSBhdXRvIGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciBsYWJlbCB7XFxuICBjb2xvcjogcmdiKDEwNywgMTE0LCAxMjgpO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdCB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdCA+IGJ1dHRvbiB7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IHJnYigyMDksIDIxMywgMjE5KTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwLjc1cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QgPiBidXR0b246Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoOTkgMTAyIDI0MS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2IoOTksIDEwMiwgMjQxKSwgMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QgLm5hbWUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICBmbGV4OiAxIDEgYXV0bztcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QgLmFycm93IHtcXG4gIHRvcDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QgPiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXJnaW46IDAuMjVyZW0gMCAwO1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAwcHggMHB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxMHB4IDE1cHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC00cHg7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0ID4gdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDE3LCAyNCwgMzkpO1xcbiAgcGFkZGluZzogMC41cmVtIDIuMjVyZW0gMC41cmVtIDAuNzVyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QuaXNPcGVuID4gdWwsIC50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0OmZvY3VzLXdpdGhpbiA+IHVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudG9nZ2xlTWVzc2FnZUJveCB7XFxuICBjb2xvcjogcmdiKDEwNywgMTE0LCAxMjgpO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMC43NXJlbSAwIDAuNzVyZW0gMC4yNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnRvZ2dsZU1lc3NhZ2VCb3ggc3Ryb25nIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuLnRpcHBpbmctcG9wdXAgLm1lc3NhZ2VCb3gge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLm1lc3NhZ2VCb3guaXNIaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLm1lc3NhZ2VCb3ggdGV4dGFyZWEge1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDtcXG4gIGNvbG9yOiByZ2IoNTUsIDY1LCA4MSk7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjA5LCAyMTMsIDIxOSk7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnRpcHBpbmctcG9wdXAgLm1lc3NhZ2VCb3ggdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoOTksIDEwMiwgMjQxKTtcXG59XFxuLnRpcHBpbmctcG9wdXAgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIDAgMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHJnYigxNywgMjQsIDM5KTtcXG59XFxuLnRpcHBpbmctcG9wdXAgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDEwNywgMTE0LCAxMjgpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIG1hcmdpbjogMC4yNXJlbSAwIDA7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4udGlwcGluZy1wb3B1cCBwIHN0cm9uZyB7XFxuICBjb2xvcjogcmdiKDE3LCAyMjEsIDExNik7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zdWJ0aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBjb2xvcjogcmdiKDE3LCAyNCwgMzkpO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc3VidGl0bGUgLmxpbmtJY29uIHtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc3VidGl0bGUgLnR3aXR0ZXJJY29uIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc3VidGl0bGUgYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnRvZ2dsZVRleHQge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IHJnYigxNywgMjQsIDM5KTtcXG59XFxuLnRpcHBpbmctcG9wdXAgZm9vdGVyIGJ1dHRvbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAyMjEsIDExNik7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50aXBwaW5nLXBvcHVwIGZvb3RlciBidXR0b246aG92ZXIsIC50aXBwaW5nLXBvcHVwIGZvb3RlciBidXR0b24uaXNTZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTcsIDIwNCwgMTE2KTtcXG59XFxuLnRpcHBpbmctcG9wdXAgZm9vdGVyIC5saW5rIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHJnYig4OCwgMTAxLCAyNDIpO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xcbn1cXG5cXG4ucmVzdWx0cyB7XFxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFMyAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3ICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiAxMDAwMDAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XFxufVxcbi5yZXN1bHRzID4gZGl2IHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweDtcXG4gIGJvcmRlci1jb2xvcjogI0U2RTZFMztcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucmVzdWx0cyA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRTNFM0U2O1xcbn1cXG4ucmVzdWx0cyAudHlwZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5yZXN1bHRzIC5rZXkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzExZGQ3NDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5yZXN1bHRzIC5rZXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5yZXN1bHRzIC52YWx1ZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLnJlc3VsdHMgLmltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBtYXgtd2lkdGg6IDUlO1xcbn1cXG4ucmVzdWx0cyAudG9vbHRpcCB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbn1cXG4ucmVzdWx0cyAuZW1wdHkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAxOXB4O1xcbn1cXG4ucmVzdWx0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbn1cXG4ucmVzdWx0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLnJlc3VsdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5yZXN1bHRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbi5yZXN1bHRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tbW9uL3dpZGdldHMvY29udGVudC93aWRnZXRTdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWtCQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0TkFBQTtBQWpCSjtBQW1CSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBakJSO0FBbUJRO0VBQ0ksWUFBQTtBQWpCWjtBQXFCSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQW5CUjtBQXFCUTtFQUNJLG9CQUFBO0FBbkJaO0FBc0JRO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBcEJaO0FBdUJRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBckJaO0FBeUJJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUF2QlI7QUF5QlE7RUFsRUosdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtSEFBQTtFQUNBLGVBQUE7RUEwRFEsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7QUFiWjtBQTdDSTtFQUNJ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REk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQTFEUjtBQTZESTtFQUNJLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTNEUjtBQTZEUTtFQUNJLFlBQUE7QUEzRFo7QUErREk7RUFDSSxtQ0FBQTtFQUNBLGVBQUE7QUE3RFI7QUFnRUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQTlEUjtBQWlFSTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBaEVSO0FBb0VJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFsRVI7QUFxRUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQW5FUjtBQXNFSTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUFwRVI7QUF1RUk7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0FBckVSO0FBd0VJO0VBQ0ksOEJBQUE7QUF0RVI7QUF5RUk7RUFDSSw4QkFBQTtBQXZFUjs7QUE0RUE7RUFDSTtJQUNJLG9CQUFBO0VBekVOO0VBMkVFO0lBQ0kseUJBQUE7RUF6RU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gYnV0dG9uIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3IDIyMSAxMTYpO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIsICYuaXNTZWxlY3RlZCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcgMjA0IDExNilcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGlwcGluZy1wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiAxNnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYigwIDAgMCAvIDAuMjUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICB0YWItc2l6ZTogNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG5cXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI5MnB4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgID4gbWFpbiB7XFxyXFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGhlYWRlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgJi5ub0gxIHtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3IDI0IDM5KTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuY2xvc2VCdXR0b24ge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnZhbHVlU2VsZWN0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgYnV0dG9uLCAubW9yZSB7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwIDI1MiAyMzEpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm1vcmUge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi5pc1NlbGVjdGVkIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2FkZXIge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNnJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2IoMjI5IDIzMSAyMzUpO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzExZGQ3NDtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Y2Nlc3Mge1xcclxcbiAgICAgICAgd2lkdGg6IDdyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDdyZW07XFxyXFxuICAgICAgICBtYXJnaW46IDEuNXJlbSBhdXRvIGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2VsZWN0LXdyYXBwZXIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4KTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgPiBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMDkgMjEzIDIxOSk7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDk5IDEwMiAyNDEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCByZ2IoOTksIDEwMiwgMjQxKSwgMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgaW1nIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5uYW1lIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5hcnJvdyB7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcXHJcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgPiB1bCB7XFxyXFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC4yNXJlbSAwIDA7XFxyXFxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0cmVtO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMHB4IDBweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMTBweCAxNXB4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtNHB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcgMjQgMzkpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDIuMjVyZW0gMC41cmVtIDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmlzT3BlbiwgJjpmb2N1cy13aXRoaW4ge1xcclxcbiAgICAgICAgICAgICAgICA+IHVsIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2dnbGVNZXNzYWdlQm94IHtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTA3IDExNCAxMjgpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjogMC43NXJlbSAwIDAuNzVyZW0gMC4yNXJlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIHN0cm9uZyB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVzc2FnZUJveCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAuNzVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAmLmlzSGlkZGVuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweCAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYig1NSA2NSA4MSk7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjA5IDIxMyAyMTkpO1xcclxcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoOTksIDEwMiwgMjQxKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAycmVtIDAgMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgY29sb3I6IHJnYigxNyAyNCAzOSlcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTA3IDExNCAxMjgpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMC4yNXJlbSAwIDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcblxcclxcbiAgICAgICAgc3Ryb25nIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3IDIyMSAxMTYpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdWJ0aXRsZSB7XFxyXFxuXFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDE3IDI0IDM5KTtcXHJcXG5cXHJcXG4gICAgICAgIC5saW5rSWNvbiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnR3aXR0ZXJJY29uIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2dnbGVUZXh0IHtcXHJcXG5cXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTcgMjQgMzkpO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvb3RlciB7XFxyXFxuXFxyXFxuICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5saW5rIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYig4OCAxMDEgMjQyKTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDM4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcXHJcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0U2RTZFMyAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNyAhaW1wb3J0YW50O1xcclxcbiAgICB6LWluZGV4OiAxMDAwMDAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcXHJcXG5cXHJcXG4gICAgPiBkaXYge1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4O1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTZFNkUzO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTNFM0U2O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC50eXBlIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAua2V5IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgY29sb3I6ICMxMWRkNzQ7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnICc7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnZhbHVlIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbWcge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICByaWdodDogNXB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9vbHRpcCB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG5cXHJcXG4gICAgICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICByaWdodDogNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lbXB0eSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgICAgd2lkdGg6IDZweDtcXHJcXG4gICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZyb21EZWZpbml0aW9uKCkge1xuICB2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFkb2N1bWVudE9iamVjdCkgZG9jdW1lbnRPYmplY3QgPSBkb2N1bWVudDtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudE9iamVjdC5jcmVhdGVFbGVtZW50KGF0dHJpYnV0ZXMudGFnTmFtZSB8fCAnZGl2Jyk7XG4gIHJlcGFpckNsYXNzZXMoYXR0cmlidXRlcyk7XG5cbiAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTGlzdCcpIHtcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihhdHRyaWJ1dGVzLmNsYXNzTGlzdCksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIHggPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoeCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGV4dCcpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHQ7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuaHRtbDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnZGF0YScpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5kYXRhc2V0LCBhdHRyaWJ1dGVzLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5hcHBlbmRDaGlsZCh4IGluc3RhbmNlb2YgTm9kZSA/IHggOiBjcmVhdGUoeCwge30sIGRvY3VtZW50T2JqZWN0KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICBpZiAoX3R5cGVvZihhdHRyaWJ1dGVzW2F0dHJOYW1lXSkgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYXR0cmlidXRlc1thdHRyTmFtZV0pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV1bc3R5bGVOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RhZ05hbWUnKSB7Ly9ub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSA9PT0gdHJ1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJOYW1lKTtlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGFpckNsYXNzZXMob2JqKSB7XG4gIGlmIChvYmouY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFvYmouY2xhc3NMaXN0KSBvYmouY2xhc3NMaXN0ID0gW107XG4gICAgb2JqLmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykpKTtcbiAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgfVxufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiAkcmV0dXJucyB7b2JqZWN0fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHNlbGVjdG9yID0gKHNlbGVjdG9yICsgXCJcIikudHJpbSgpO1xuICB2YXIgcG9zaXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlRWxlbWVudCgpIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgdmFyIGNhbkJlVGFnbmFtZSA9IHRydWU7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhciA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcbiAgICAgIHBvc2l0aW9uKys7XG5cbiAgICAgIGlmIChfY2hhciA9PT0gJyMnKSB7XG4gICAgICAgIHJldC5pZCA9IHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJy4nKSB7XG4gICAgICAgIGlmICghcmV0LmNsYXNzTGlzdCkgcmV0LmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICByZXQuY2xhc3NMaXN0LnB1c2gocGFyc2VUZXh0KCkpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJ1snKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHBhcnNlVGV4dChbJz0nLCAnXSddKTtcbiAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICc9Jykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICddJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnXScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgvXFxzLy50ZXN0KF9jaGFyKSkge1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGggJiYgL1xccy8udGVzdChzZWxlY3Rvcltwb3NpdGlvbl0pKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0LmNoaWxkcmVuID0gW3BhcnNlRWxlbWVudCgpXTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuQmVUYWduYW1lKSB7XG4gICAgICAgIHJldC50YWdOYW1lID0gX2NoYXIgKyBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY2FuQmVUYWduYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlVGV4dCgpIHtcbiAgICB2YXIgZXNjYXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJy4nLCAnIycsICcsJywgJ1snXTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoL1xccy8udGVzdChfY2hhcjIpIHx8IGVzY2FwZS5pbmNsdWRlcyhfY2hhcjIpKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjI7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKCkge1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjMgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmIChfY2hhcjMgPT0gJ1wiJykge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIzO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFdoaXRlc3BhY2UoKSB7XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXI0ID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoIS9cXHMvLnRlc3QoX2NoYXI0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gXCJcIikgcmV0dXJuIHt9O2Vsc2UgcmV0dXJuIHBhcnNlRWxlbWVudCgpO1xufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBkZWZpbml0aW9uID0ge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIHBhcmFtc1swXSA9PSBcInN0cmluZ1wiKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcnNlU2VsZWN0b3IocGFyYW1zLnNwbGljZSgwLCAxKVswXSkpO1xuICBpZiAoX3R5cGVvZihwYXJhbXNbMF0pID09IFwib2JqZWN0XCIgJiYgIShwYXJhbXNbMF0gaW5zdGFuY2VvZiBOb2RlKSkgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9wYXJhbXMgPSBwYXJhbXM7IF9pIDwgX3BhcmFtcy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW1zW19pXTtcblxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtO1xuICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtLm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAoIWRlZmluaXRpb24uY2hpbGRyZW4pIGRlZmluaXRpb24uY2hpbGRyZW4gPSBbXTtcbiAgICAgIGRlZmluaXRpb24uY2hpbGRyZW4ucHVzaChwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGRvY3VtZW50T2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKGEsIGIpIHtcbiAgcmVwYWlyQ2xhc3NlcyhhKTtcbiAgcmVwYWlyQ2xhc3NlcyhiKTtcblxuICB2YXIgcmV0ID0gX29iamVjdFNwcmVhZCh7fSwgYSwge30sIGIpO1xuXG4gIGlmIChhLmRhdGEgJiYgYi5kYXRhKSB7XG4gICAgcmV0LmRhdGEgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLmRhdGEsIHt9LCBiLmRhdGEpO1xuICB9XG5cbiAgaWYgKGEuY2hpbGRyZW4gJiYgYi5jaGlsZHJlbikge1xuICAgIHJldC5jaGlsZHJlbiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jaGlsZHJlbiksIF90b0NvbnN1bWFibGVBcnJheShiLmNoaWxkcmVuKSk7XG4gIH1cblxuICBpZiAoYS5jbGFzc0xpc3QgJiYgYi5jbGFzc0xpc3QpIHtcbiAgICByZXQuY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShiLmNsYXNzTGlzdCkpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUZyb21EZWZpbml0aW9uOiBjcmVhdGVGcm9tRGVmaW5pdGlvbixcbiAgcGFyc2VTZWxlY3RvcjogcGFyc2VTZWxlY3RvcixcbiAgY3JlYXRlOiBjcmVhdGUsXG4gIG1lcmdlT2JqZWN0czogbWVyZ2VPYmplY3RzLFxuICBcImRlZmF1bHRcIjogY3JlYXRlXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZhcmlhYmxlcyl7Y29uc3QgXzA9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2NvbnN0IF8xPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7Y29uc3QgXzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xLmFwcGVuZChfMik7Y29uc3QgXzM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO2NvbnN0IF80PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcImN1c3RvbUhlYWRlclwiXSk7XzMuYXBwZW5kKF80KTtfMS5hcHBlbmQoXzMpO2NvbnN0IF81PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMS5hcHBlbmQoXzUpO2NvbnN0IF82PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZUJ1dHRvblwiKTtfNi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiY2xvc2VcIl0pO182LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNsb3NlXCIpO18xLmFwcGVuZChfNik7Y29uc3QgXzc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xLmFwcGVuZChfNyk7Y29uc3QgXzg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2NvbnN0IF85PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmV7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOSk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgXCIpO184LmFwcGVuZChfOSk7XzEuYXBwZW5kKF84KTtjb25zdCBfMTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzEuYXBwZW5kKF8xMCk7XzAuYXBwZW5kKF8xKTtjb25zdCBfMTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzAuYXBwZW5kKF8xMSk7Y29uc3QgXzEyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF8xMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEyLmFwcGVuZChfMTMpO2NvbnN0IF8xND1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtfMTQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2dnbGVUZXh0XCIpO2NvbnN0IF8xNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJjdXN0b21UZXh0XCJdKTtfMTQuYXBwZW5kKF8xNSk7XzEyLmFwcGVuZChfMTQpO2NvbnN0IF8xNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICBcIik7XzEyLmFwcGVuZChfMTYpO2NvbnN0IF8xNz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XzE3LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9nZ2xlSW5wdXRcIik7XzE3LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO18xMi5hcHBlbmQoXzE3KTtjb25zdCBfMTg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgXCIpO18xMi5hcHBlbmQoXzE4KTtjb25zdCBfMTk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMTkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2YWx1ZVNlbGVjdGlvblwiKTtjb25zdCBfMjA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTkuYXBwZW5kKF8yMCk7Y29uc3QgXzIxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzIxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzIxLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCIxXCIpO18yMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlzU2VsZWN0ZWRcIik7Y29uc3QgXzIyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18yMS5hcHBlbmQoXzIyKTtjb25zdCBfMjM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzI0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJDFcIik7XzIzLmFwcGVuZChfMjQpO18yMS5hcHBlbmQoXzIzKTtjb25zdCBfMjU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMjEuYXBwZW5kKF8yNSk7XzE5LmFwcGVuZChfMjEpO2NvbnN0IF8yNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICAgICAgXCIpO18xOS5hcHBlbmQoXzI2KTtjb25zdCBfMjc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMjcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMjcuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjJcIik7Y29uc3QgXzI4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18yNy5hcHBlbmQoXzI4KTtjb25zdCBfMjk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzMwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJDJcIik7XzI5LmFwcGVuZChfMzApO18yNy5hcHBlbmQoXzI5KTtjb25zdCBfMzE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMjcuYXBwZW5kKF8zMSk7XzE5LmFwcGVuZChfMjcpO2NvbnN0IF8zMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICAgICAgXCIpO18xOS5hcHBlbmQoXzMyKTtjb25zdCBfMzM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMzMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMzMuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjVcIik7Y29uc3QgXzM0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18zMy5hcHBlbmQoXzM0KTtjb25zdCBfMzU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzM2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJDVcIik7XzM1LmFwcGVuZChfMzYpO18zMy5hcHBlbmQoXzM1KTtjb25zdCBfMzc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMzMuYXBwZW5kKF8zNyk7XzE5LmFwcGVuZChfMzMpO2NvbnN0IF8zOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICAgICAgXCIpO18xOS5hcHBlbmQoXzM4KTtjb25zdCBfMzk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMzkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb3JlXCIpO2NvbnN0IF80MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMzkuYXBwZW5kKF80MCk7Y29uc3QgXzQxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzQxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfNDEuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcInBlblwiXSk7XzM5LmFwcGVuZChfNDEpO2NvbnN0IF80Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMzkuYXBwZW5kKF80Mik7Y29uc3QgXzQzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF80ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiRcIik7XzQzLmFwcGVuZChfNDQpO18zOS5hcHBlbmQoXzQzKTtjb25zdCBfNDU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzM5LmFwcGVuZChfNDUpO2NvbnN0IF80Nj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XzM5LmFwcGVuZChfNDYpO2NvbnN0IF80Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18zOS5hcHBlbmQoXzQ3KTtfMTkuYXBwZW5kKF8zOSk7Y29uc3QgXzQ4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTkuYXBwZW5kKF80OCk7XzEyLmFwcGVuZChfMTkpO2NvbnN0IF80OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEyLmFwcGVuZChfNDkpO2NvbnN0IF81MD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO181MC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC13cmFwcGVyIG5ldHdvcmtTZWxlY3Rpb25cIik7Y29uc3QgXzUxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzUwLmFwcGVuZChfNTEpO2NvbnN0IF81Mj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XzUyLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldHdvcmtcIik7Y29uc3QgXzUzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmV0d29yazpcIik7XzUyLmFwcGVuZChfNTMpO181MC5hcHBlbmQoXzUyKTtjb25zdCBfNTQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfNTAuYXBwZW5kKF81NCk7Y29uc3QgXzU1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzU1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0IG5ldHdvcmtTZWxlY3RcIik7XzU1LnNldEF0dHJpYnV0ZShcImRhdGEtbmV0d29ya1wiLCB2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJjb2RlXCJdKTtjb25zdCBfNTY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzU1LmFwcGVuZChfNTYpO2NvbnN0IF81Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO181Ny5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO181Ny5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldHdvcmtcIik7Y29uc3QgXzU4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfNTcuYXBwZW5kKF81OCk7Y29uc3QgXzU5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzU5LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJpbWdcIl0pO181OS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzU3LmFwcGVuZChfNTkpO2NvbnN0IF82MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzU3LmFwcGVuZChfNjApO2NvbnN0IF82MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfNjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF82Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJuYW1lXCJdKTtfNjEuYXBwZW5kKF82Mik7XzU3LmFwcGVuZChfNjEpO2NvbnN0IF82Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzU3LmFwcGVuZChfNjMpO2NvbnN0IF82ND1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO182NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO182NC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiYXJyb3dcIl0pO181Ny5hcHBlbmQoXzY0KTtjb25zdCBfNjU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzU3LmFwcGVuZChfNjUpO181NS5hcHBlbmQoXzU3KTtjb25zdCBfNjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzU1LmFwcGVuZChfNjYpO2NvbnN0IF82Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XzY3LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XzY3LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJsaXN0Ym94XCIpO2NvbnN0IF82OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzY3LmFwcGVuZChfNjgpO2xldCBfNjk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2ZvcihsZXQgW19mb3JlYWNoS2V5LF9mb3JlYWNoVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlc1tcIm5ldHdvcmtzXCJdKSl7bGV0IG5ldHdvcmsgPSBfZm9yZWFjaFZhbHVlO2NvbnN0IF83MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO182OS5hcHBlbmQoXzcwKTtjb25zdCBfNzE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO183MS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwib3B0aW9uXCIpO183MS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgbmV0d29ya1tcImNvZGVcIl0pO2NvbnN0IF83Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtfNzEuYXBwZW5kKF83Mik7Y29uc3QgXzczPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzczLnNldEF0dHJpYnV0ZShcInNyY1wiLCBuZXR3b3JrW1wiaW1nXCJdKTtfNzMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO183MS5hcHBlbmQoXzczKTtjb25zdCBfNzQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzcxLmFwcGVuZChfNzQpO2NvbnN0IF83NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfNzUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF83Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXR3b3JrW1wibmFtZVwiXSk7Xzc1LmFwcGVuZChfNzYpO183MS5hcHBlbmQoXzc1KTtjb25zdCBfNzc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfNzEuYXBwZW5kKF83Nyk7XzY5LmFwcGVuZChfNzEpO2NvbnN0IF83OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzY5LmFwcGVuZChfNzgpO31fNjcuYXBwZW5kKF82OSk7Y29uc3QgXzc5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO182Ny5hcHBlbmQoXzc5KTtfNTUuYXBwZW5kKF82Nyk7Y29uc3QgXzgwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzU1LmFwcGVuZChfODApO181MC5hcHBlbmQoXzU1KTtjb25zdCBfODE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO181MC5hcHBlbmQoXzgxKTtfMTIuYXBwZW5kKF81MCk7Y29uc3QgXzgyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTIuYXBwZW5kKF84Mik7Y29uc3QgXzgzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzgzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LXdyYXBwZXIgdG9rZW5TZWxlY3Rpb25cIik7Y29uc3QgXzg0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzgzLmFwcGVuZChfODQpO2NvbnN0IF84NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7Xzg1LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRva2VuQnV0dG9uXCIpO2NvbnN0IF84Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvaW46XCIpO184NS5hcHBlbmQoXzg2KTtfODMuYXBwZW5kKF84NSk7Y29uc3QgXzg3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzgzLmFwcGVuZChfODcpO2NvbnN0IF84OD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO184OC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdCB0b2tlblNlbGVjdFwiKTtfODguc2V0QXR0cmlidXRlKFwiZGF0YS1zeW1ib2xcIiwgdmFyaWFibGVzW1widG9rZW5zXCJdW1wiMFwiXVtcInN5bWJvbFwiXSk7Y29uc3QgXzg5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO184OC5hcHBlbmQoXzg5KTtjb25zdCBfOTA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfOTAuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfOTAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2tlbkJ1dHRvblwiKTtjb25zdCBfOTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO185MC5hcHBlbmQoXzkxKTtjb25zdCBfOTI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfOTIuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJsb2dvVVJJXCJdKTtfOTIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO185MC5hcHBlbmQoXzkyKTtjb25zdCBfOTM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO185MC5hcHBlbmQoXzkzKTtjb25zdCBfOTQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Xzk0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfOTU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1widG9rZW5zXCJdW1wiMFwiXVtcIm5hbWVcIl0pO185NC5hcHBlbmQoXzk1KTtfOTAuYXBwZW5kKF85NCk7Y29uc3QgXzk2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfOTAuYXBwZW5kKF85Nik7Y29uc3QgXzk3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7Xzk3LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7Xzk3LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJhcnJvd1wiXSk7XzkwLmFwcGVuZChfOTcpO2NvbnN0IF85OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfOTAuYXBwZW5kKF85OCk7Xzg4LmFwcGVuZChfOTApO2NvbnN0IF85OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfODguYXBwZW5kKF85OSk7Y29uc3QgXzEwMD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XzEwMC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO18xMDAuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImxpc3Rib3hcIik7Y29uc3QgXzEwMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEwMC5hcHBlbmQoXzEwMSk7bGV0IF8xMDI9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2ZvcihsZXQgW19mb3JlYWNoS2V5LF9mb3JlYWNoVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlc1tcInRva2Vuc1wiXSkpe2xldCB0b2tlbiA9IF9mb3JlYWNoVmFsdWU7Y29uc3QgXzEwMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xMDIuYXBwZW5kKF8xMDMpO2NvbnN0IF8xMDQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO18xMDQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm9wdGlvblwiKTtfMTA0LnNldEF0dHJpYnV0ZShcImRhdGEtbmV0d29ya1wiLCB0b2tlbltcIm5ldHdvcmtcIl0pO18xMDQuc2V0QXR0cmlidXRlKFwiZGF0YS1zeW1ib2xcIiwgdG9rZW5bXCJzeW1ib2xcIl0pO2NvbnN0IF8xMDU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzEwNSk7Y29uc3QgXzEwNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xMDYuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRva2VuW1wibG9nb1VSSVwiXSk7XzEwNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzEwNC5hcHBlbmQoXzEwNik7Y29uc3QgXzEwNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtfMTA0LmFwcGVuZChfMTA3KTtjb25zdCBfMTA4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18xMDguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF8xMDk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW5bXCJuYW1lXCJdKTtfMTA4LmFwcGVuZChfMTA5KTtfMTA0LmFwcGVuZChfMTA4KTtjb25zdCBfMTEwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzExMCk7XzEwMi5hcHBlbmQoXzEwNCk7Y29uc3QgXzExMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEwMi5hcHBlbmQoXzExMSk7fV8xMDAuYXBwZW5kKF8xMDIpO2NvbnN0IF8xMTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEwMC5hcHBlbmQoXzExMik7Xzg4LmFwcGVuZChfMTAwKTtjb25zdCBfMTEzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7Xzg4LmFwcGVuZChfMTEzKTtfODMuYXBwZW5kKF84OCk7Y29uc3QgXzExND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzgzLmFwcGVuZChfMTE0KTtfMTIuYXBwZW5kKF84Myk7Y29uc3QgXzExNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICBcIik7XzEyLmFwcGVuZChfMTE1KTtjb25zdCBfMTE2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzExNi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZ2dsZU1lc3NhZ2VCb3hcIik7Y29uc3QgXzExNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIvCfl6jvuI8gXCIpO18xMTYuYXBwZW5kKF8xMTcpO2NvbnN0IF8xMTg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtjb25zdCBfMTE5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWRkIGEgbWVzc2FnZVwiKTtfMTE4LmFwcGVuZChfMTE5KTtfMTE2LmFwcGVuZChfMTE4KTtfMTIuYXBwZW5kKF8xMTYpO2NvbnN0IF8xMjA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgXCIpO18xMi5hcHBlbmQoXzEyMCk7Y29uc3QgXzEyMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xMjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZXNzYWdlQm94IGlzSGlkZGVuXCIpO2NvbnN0IF8xMjI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTIxLmFwcGVuZChfMTIyKTtjb25zdCBfMTIzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtfMTIzLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJUZXh0MVwiKTtfMTIzLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIyMFwiKTtfMTIzLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIyXCIpO18xMjMuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiNDVcIik7XzEyMy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkhleSwgSSBsb3ZlIHlvdXIgd29yaywga2VlcCBnb2luZyHwn5SlXCIpO18xMjEuYXBwZW5kKF8xMjMpO2NvbnN0IF8xMjQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMjEuYXBwZW5kKF8xMjQpO18xMi5hcHBlbmQoXzEyMSk7Y29uc3QgXzEyNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMTIuYXBwZW5kKF8xMjUpO18wLmFwcGVuZChfMTIpO2NvbnN0IF8xMjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzAuYXBwZW5kKF8xMjYpO2NvbnN0IF8xMjc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtjb25zdCBfMTI4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTI3LmFwcGVuZChfMTI4KTtjb25zdCBfMTI5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzEyOS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18xMjkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZW5kXCIpO2NvbnN0IF8xMzA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTI5LmFwcGVuZChfMTMwKTtjb25zdCBfMTMxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8xMzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wiYnV0dG9uVmFsdWVcIl0pO18xMzEuYXBwZW5kKF8xMzIpO18xMjkuYXBwZW5kKF8xMzEpO2NvbnN0IF8xMzM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMjkuYXBwZW5kKF8xMzMpO18xMjcuYXBwZW5kKF8xMjkpO2NvbnN0IF8xMzQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzEyNy5hcHBlbmQoXzEzNCk7XzAuYXBwZW5kKF8xMjcpO3JldHVybiBfMH1cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbWxsZDBKdmVEMGlNQ0F3SURJd0lESXdJaUJtYVd4c1BTSWpPV05oTTJGbUlpQjNhV1IwYUQwaU1qQndlQ0lnYUdWcFoyaDBQU0l5TUhCNElqNE5DaUFnSUNBOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpRFFvZ0lDQWdJQ0FnSUNBZ1pEMGlUVFV1TWpreklEY3VNamt6WVRFZ01TQXdJREF4TVM0ME1UUWdNRXd4TUNBeE1DNDFPRFpzTXk0eU9UTXRNeTR5T1ROaE1TQXhJREFnTVRFeExqUXhOQ0F4TGpReE5Hd3ROQ0EwWVRFZ01TQXdJREF4TFRFdU5ERTBJREJzTFRRdE5HRXhJREVnTUNBd01UQXRNUzQwTVRSNklnMEtJQ0FnSUNBZ0lDQWdJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0l2UGcwS1BDOXpkbWMrXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jub0JBQUJYUlVKUVZsQTRURzRCQUFBdkdBQUdFTCtDb0czYmVQdlBuOVI1aFliQ3RtMGJkdnovOEJKQnRrMW5kSCs1czQwa3ljbk1QVnA0bUtSQUN1U2ZEb1gvRytDZnRVQVJRSUZUQ0tBUXdBQTdSQWtSQkVFNHFORUpEVUZobHlCWW9DVEFBcUdoSTVqd0kzaktCaUhrb09PUEZ3b0lnbUFZeEczbzFPb05oUjFDQ0xGaWhpZ2MwZ0xNRUVJVVJMM2RCV2YyR1FJSXRtMGRiMDZiV25GU0k3WnQyNitZLzFSKzVlc01JdnF2d0czVUJvNU5kMStCRlVjNlVkVDRjeVREcEpxTVJXU2tnb1FtYWdob29vYWdMdHZKem9EanNxKy9sZzdIOE4zVHBlYkRYdGJSL1RiVFpYWmxFTEJYRHJMS1hCanAyWXN0czZqNmVIaS94OTVZcEczWVg0REFvT0xuTHU3R2xwOFhUbkRHYjdFMytrbkNROWxYSDRHYi9FcVdoV3ZBVVRuSUlOWVNrWFVSZUp1SnlQUURTRzFFcEIzU2xRZjROYWdyQzBWaVVQRlpwRTl4NmVsbVB3azhlVGxUR3diODVhenZiNWs1eDhRL3hodjNhM0xzeHZsU2ZpTklLTDhxSkt6K3dUOStEZ293aVFxTy9VNzEvd3c9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWTJ4aGMzTTlJbWd0TmlCM0xUWWdkR1Y0ZEMxbmNtRjVMVFV3TUNCdGJDMWhkWFJ2SWlCbWFXeHNQU0p1YjI1bElnMEtJQ0FnSUNCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlITjBjbTlyWlQwaUl6WmlOekk0TUNJZ2MzUnliMnRsTFhkcFpIUm9QU0l5SWlCM2FXUjBhRDBpTWpSd2VDSWdhR1ZwWjJoMFBTSXlOSEI0SWo0TkNpQWdJQ0E4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswMklERTRUREU0SURaTk5pQTJiREV5SURFeUlpOCtEUW84TDNOMlp6ND1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FNQUFBQ2R0NEhzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTUFVRXhVUlV4cGNXeDdiUC8vLyt6djhPdnU3K3Z1Ny8vLy8vLy8vK3Z1Ny8vLy8renY4TCsvdit2dTcrcnQ3dXJ0N3V6djhPenY3L0wxOXUzdjhPdnQ3dTN3OGVydTd1dnU3K3p3OGUzdzhhRmsvKzd5OU96djhPenU4Ty95OHV6djhQTDE5c0NxcXVuczdQRDA5ZTd1N3V2djcrZnQ3ZkR5OU83eTh1dnU3dXp1NytydTc4ek16T3ZyNysvejgrcnM3dTd4OCt6djhldnU4TzN3OGU3dzh1enU3K2pvNitYbjUvTDE5dkgxOXZMMTl1dnU3L0R6OWU3eTlPdnU3Ky95OC9IejllL3o5UEgxOXZEejlPenM3T3Z3OE92eTh1M3c4bi8vLy9EMDlmSDA5ZTd4OGUzdzhlM3c4ZXZ2Nyt2djhPenY4TzN4OGV2djcrdnc4UEwxOWU3eDlPdnQ3dXp3OGV2djhPN3g4dTd5OCszdzh1enY4Qzh3TUlLRGhCTVRFelExTlRVMk51dnU3K3J0N29TRmhqRXlNdS95OC9YNCtSRVJFUzB1TG9PRWhmYjUrakl6TS9EejlPN3g4bng5ZmVuczdUQXhNZlAyOS9MMTl2My8vKzN3OGZMMTkvei8veFVWRlh0OGZZR0NnL2o4L0RjNE9QVDQrQ1FsSlJRVUZQNy8vNFdHaDN4OWZpY29LUC8vLy9yOS8zK0FnWWVKaWZyOS9pNHZMek0wTkNzc0xQZjYrK25yN1BUMytIcDdmQ2txS2lJakkzNS9nSDErZnlvckt6WTNOOWJZMmRmYTJ4Y1hGK1hvNmZuOC9mdi8vNG1LaTRDQmdzZkp5dWZwNnZqNy9mVDQrUXdOREFRRUJQRHo5TE8xdFQwK1B0SFQxQ0VoSVI4Zkg2dXRyaU1rSkYxZVhpWW5KME5FUkVWR1J2WDUrcmE0dVkrUWtjSER4TjdoNG95UGo2V25xRk5WVlFjSEIvRHo5V3h0YnBXV2w4ek96NzdBd2FHanBFdE1UQnNiRzNkNGVaeWVuM1IyZHVQbTUzaDVldWpxNitIazVaaVptc1RIeU52ZTNyQ3lzNm1zcmRQVjFvS0VoV1JsWmVydDd4Z1pHWnVjbmZqNy9OM2c0VnBjWEpLVWxXWm9hS0Nob3NqTHpMcTl2cXl1ci9IMTlzM1EwVFUxTnZiNisyNXdjR2xyYThyTnprRkNRaWNuSjluYjNPRGk0L0wyOTFGU1UyQmlZa2RKU2J1K3Z6OUJRU01qSThIRXhlenc4VmRaV2UveTlLaXFxN0N5c3FTbXAweE5Uam83TzVhWW1jM1AwRTVPVHZUMjkvSDA5VlpYV0hGemM1NmdvR0pqWTdpNnU0YSszR0VBQUFCYmRGSk9Vd0FCQXZ6OSt3UUIvZ1A0QlByOC92MjY5TmI3K2hpT0tlMEJqdXRlcUdMbkEySDhGb2NWZDQ2UStOZ0ZLRUUvcmFscjc0L3FMaXkvd3YzRWJXM0gvb2FHNitvY2VDaDNBdFBTWGZmUWtOSE9yYWhyOVYzUHp0Yisvb2FxdmR3eEFBQUhFMGxFUVZSWXc0MVhkMXdUWnhqK3dBdDNBVkVjUUttMGJoRlhXMFc3Njk2cjJ6OHVNY2tsbDVEa0lsbUZwR2tnQ1dVVENDTlNGRncvOTFiY293N2MxVmFwdHE2cUhYYnYzWFIrZHdHOSt5NWd2ejhndjd0N24zdlhQZS96QWlBNktUSHdUL1RrR2ZjbmRNK0lKZXl4R2QwVDBsNU14dUhGR0J6YysrQlNBS1REUjgySzFiWVlMTFNkSk8yMHhkQ2luZmx5MnZBNGVPZWVFTkI4NHFEcFdwdkJoR0ZZVjRLRWgrZ0tmNW9NTnUyMFFZbmNBeDJjYUJ3a2poMXY4M2VSWUp3dFBDb1Y5NC9BSkYyMDJSUEc5Z2Q0ZEVldmozcXl0NDJXWU9TZG82SnBWZHR2VE1KazkzNHFDc1MxSC8yWVI3TVpDVUh5N0VQQjRMVTdDQ1FCSVI0YjNVNG1jQnc4MksxRllFNlNsSGJiTFMzRnUwQkk2cnM5eUQ0YndSNGY5VG9kVHdydHJSOGVLMTFYbjhXL0ZrOFhwYVdJRWFMd3VBZnlNZUhyWVFtWGJLdlFiRnBpVXZFdkVwM3lINGpEbzVEM3AvUjVLSzh6WWs1Uy9qUGVhdGNhajlBRmt1eWM5NUJVNkFNdXhSL09peGZaaHhZMnFMMjF4Wm1OeXlqaG5maThoM0ZCSm1OQVVyN28vYkNFRjd5ZUJVcnp4ZzBoRlhLcmMvNWdFTU92Zjk5RlBVWDJsR1c3UTY5ZW9NdzBmbjBRRFlMc3VhanYzYWJzQTVKZjZOZEYvUDdteFExeUZzQmN1dXBkQnZHaFM3OXV3MEIwV3dLa1Q3OGFMM2JnMDdjY2FnNUFaZ3djYmtGZGlLOS9Jcm8xRFZMd2ZMWkVuQURyNmlxOVBBd2dNMWNlTUNCNUpDWFpqNFNEd1BHQnZSN3ZTb3JQdnVvN0FCcmZaM2IwTnNIMDZzL1ZVZ29HUkhDQThsK3BVTXZiQUdBUSsrckxrVWQ2MkFhd0x1Qmc0SDBNSWM1Z2s4Y3B2d3RnemxRR3JVZ1F4RE1qRThGVVdNMUp0Z2daQ0IxMHFIa0FNdVA2dmVJczJLYXd6VEIwaUI4VHQ4Q0hiQUo0QURMTnhwVm9KVHI1aHd5RlNSaWhGZG1UOXZKdEJTaEE1UmZIVGNoam1IWUVUR0pTbmtTY3daVmNCdmtBc3BMQVlyUWZKYllrV0lTWERKZ29BWi9JMjQ3ZTBRWUF6MzYvTUEzWWxqa3hJRG5XaE5aQXhSenhoZ053eWdzTGF0dk1qZTdQTGU4STYyQktId1pTdDJDaURKN2lLdUIwNmd2bGV6ZXYvZGlzYVVWWXZ4TUpBdE9tZ3NGTEVRQ1Y2WTNGRFhwb3JpNHNlSHVUSmpOWGQ5NWRyREd6elZEejFXMWE4RkZoUzJlREJEUUZsT1dxUSsxMGVnb3JMcTZTYVdxTk9UcWRybTVOS1lRb05nWVdDRXVKR1JKQWR3dUJaUEJzbFZQdThSemQ1U28yS3BWS1RZNXUvbnlkTG5kdERSdEp6VGRDanJiT0F4bWlQdDVYdFZpOTkwMkZyRVNwVkNqQ0FQRG81aC95eVVwOHV3UzlRTkFaSU5hT0RJSUREWElZdWt3QnJSVThBTmFOODI2ais4SWlmaEQyZElCK1JLY0xOc0RRbFdGekFRQUxVUmRRWExmeTgwZ0FBdTNCRXJmQzFXYU9BTXpQeWRtOS9QMHlRVGVCZEdFSXF1OHZ2MWRUZkJlQkQ1QmJ0M3ozNzZldThSMnd4NElNV3VpRDNXLzk4WGVmMFNVR3FOT3QwT3kwR21nQksyV0FlVllCZ09rRXhSaU9YL3JGcDZ3VkF1VGtyamlrWDNKaldkWkNYaDBJUzNlMGtlaW1INElodWl4NHRMaVVpNk1WZ0EzK243TkxRMldOZndWNURNODIwbXhoSzFQK3h1b3p6Y3cxN2ZhTGxXWUl3UUhBNEZkODlHK1oxZEIwYnVNUFJSUy9sUWVEVklSUEtPMlpvenUyazdUZjlOTm1YNG1MQmNqUnJmQ2RwTFVXOHUrUGNzNWxad20rNTFRd0xGMzBPWjkwZUg5ZHpkQmxKd28vcUhTVjFPWHV6ajE4dXlYa3Y3TExIZmlUdEt2NG4zTnNNb2laZzN6UEt1YTBXbDlWdGJNcHhKUmR2MVZhdW56M3Jzc3RJY1BabXo2ZnB1UTN2OEFCdzF6STYwa29LYk5EMWFOM2VMWWVaNngvYlAyNTl1b3l5N0xtSFlyMVprWGdvSEE0U1BJZ3BVVWdWVlZvcDBPdGQxWnNhelRSWmMzTlphOHdiMjBPWkJwTDF0OUVtSjBqVlJ6U2VpZVVVcGJzZ0tTc0x2QWVDWVlZcS9iVUJuZU4wYXlwM055TTBBbWtkVlpiVEJFTkZzcTZ1b0FsVkwyM1lWM3o2WXBTdDlITTh0R0JHMWtJS1UrQzVsTkI0c2huQ0JHdmIrVjRYUzkzRkc1YXczR2ljYzJPb25Ka3V0NDNFRTVHZHJqYWVvaEdpK21DbDVzTW5tUHMyMWxLM3JDSFZDSHpuUnV1Y0x6Mzc4V0ltYjJwME1sU3U3cTZsaHV1cFM1MHVIWjl2TmZBc0ZTVGdrZkU4NTJ5TkhLem9YVXlhZHpyV3NyYkVSaFE0a1EvVVMvV2VOWjE3SFFJQXhnRHg5REpHbC8vdExSTjZVV0R5ZDNFSXN1ZWRRbHFuTEJHOHYxY0xsU3JyTWhLaHVxc0k1bEhoWUxPc0FmbTR1SkdiVllITW85dGhzSDVFWVR1bDYwNk1YQVNxU0FVbWtsOG9kbU8xRlV4N3p1Z1V0VzQzL09yVUtuN25GRHF3bHBLeFdLYmxacE9yNnR5MWJ1STFPMmM5MnlmS0R5QzNPOUVvTFhjWDFEdDJyaFZXQUVDaXlEM1dSOVMwb3BFQzRkbDVlSEtjMFdpaFNNcThzb0NWNTU2Wk9VaG1jTHZ2aFdRVUxzckQ3ZDBqWDRNV2Jvb2EzQzFoZUtaNzhsK2RFejc2MmNjdS9aQkNQN2F4ekRVM2JXUHRuVzA5b1VYei83akptUnJJeStlcjluR2owdnNjUEVNcjc2Smc2WkZYbjJuRDVwNHI5VzNkZm1PR3o1Nzdremg4aDA3YTlSdzZmOVp2bGtJdGtmeDVCbHBDZk15MGtraVBXTmVRbHJxTU5ieG1CVHgwLzhCc1A4RDVPV2Q0czhBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaHdDQUFCWFJVSlFWbEE0VEE4Q0FBQXZHQUFHRUQva0lKSWtSYW9uLzI1NXB1cEpoTU8yalJ5SkgvcnZONDBsSUNqeWZ6UzJqU1FwcWozcm1jbjlQRDcvclA2MkRxRE93cWdaUlNBRWtSRkdLSW9pSXdSaEZHRnVqdnR2dGptSzErM3huNk93L1pwQTJJcFEvSVlkUk1nY2p0ZHRqdGZ0OGR2cmR2MnNDTHY5UmNXTW9yWWpGTFlpT0g1SU1OdzJpQjJ6N1NBeXcxR0UyaStCaElRZktpUjBVWWxBaEl3SXhPWGREUUV0QkR5d3dBc0RmREJCd0E0QkRRUVVDRUNRYmR0MDlHTTdiZHUyYmR2R2lkLzdzWTJCZjNSNkJoSDlaK1MyalNQSlUyNWwxNjlnZUhwanFVekY3WEJYTXFtWWx4RXpraTY0d05kVlNFZEVTT1NjRU5PWlN3aElsdkNIS0NYNSt5SUFuNThWVFpIYlJyTUEvSzliUjk5VUxOa293NlFkb0o4N2JUTDl4Qlh4Q1hHa21YZ2U1THBmVlQvWHE2NWRmQk5KUHA1eWdVeEt4Mi9wMTI2VFlzOVAvWUpEVXhrQVF6VVBmaUM4ckR0Z3p3L2VXVjR5Wlk2NlJ3TFFrL1hyT1pPaSsvaUhBQ2g3QUF4YjcvencrWitXR3BRZEl5YkQ5RDBCUEE2QXpFcTZ6dkMrMml4djNmakFhYWRrbGdBT0QwRHVaNHptMFhaRjQvS3pId2hlR1lZQmVNb0F5Tzl4ajlJMmY3TjJUZ0Y2WitFb1p3QUE3TWZocFg5YnN4SUNBamRHamt6S0JmNkcramRsTGZ2ZjVLSlBNa1hnU3NYekVPaDdXYkJyQjJkclZBTTNCUGs0OTQ4RUVuSXhwcGUxN1h4U09OSzh2eW9pL1Q3Y2V2WHovaXEvQjJLeWZoK3ZCOVUzcC9xdS9iT2QxZmVaQVFBPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5TQjNMVFVpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F5TUNJZ1ptbHNiRDBpSXpBd01DSWdkMmxrZEdnOUlqSXdJaUJvWldsbmFIUTlJakl3SWo0TkNpQWdJQ0E4Y0dGMGFDQmtQU0pOTVRNdU5UZzJJRE11TlRnMllUSWdNaUF3SURFeE1pNDRNamdnTWk0NE1qaHNMUzQzT1RNdU56a3pMVEl1T0RJNExUSXVPREk0TGpjNU15MHVOemt6ZWsweE1TNHpOemtnTlM0M09UTk1NeUF4TkM0eE56SldNVGRvTWk0NE1qaHNPQzR6T0MwNExqTTNPUzB5TGpnekxUSXVPREk0ZWlJdlBnMEtQQzl6ZG1jK1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFEUTBsRVFWUjRYdFhaTVc0VVFSQ0ZZWTdBRVp5WkMzQUJUc0FGT0FFSmlTVkhoS1FFSklTa1hBR1JJNUFRUXJMa0FBbVJtQkNjRUJBWmpZVlg4cmRWM2JVenM3UGpYL3FUZmE5N3VucU4yTFh2M1Z1STQ1T1BQNDVQUGwwVnZYVDluU01ZYXBMdXYxbzgrTno2dkZXdzQ0LzNYSzdqbjBsd3NFWDFQSXZoUVE2dDU5c3JQbnd0ZXM3WjhZRnIxWFBQZ2c5WnU1NS9FbTYrcTZkdnYyKzkxdlB4eTdPcmg4OC9iNzIraTg0eENqZXRLdVk5eGJ5cTgreUVtMVhNc05jencxNUY1eXJqUmkzZm4vMzJyTGV3MzdQRitjOC9XLzJXemxYQ1RWcjJzRisxaC8yV3p0ZkV4UzFiMkIxckM3c3RuVFBGaFprWjl1WXl3MTZtYzRhNEtEUERYcWFZWjJiWXkzVGVXMVMvMVdYWWF5bm1MVFBzWlRyM0JvdVJHZlo2aW5uUERIdVJ6cjNCWW1TRW5ZcGlYakhDVHVUUnN5LzNuWDNSNGFPOXpLdEcySWwwL2xFWFlONnppdXQ2aW5uazVPRUg3R1NPd1QxYVJ0aUpuSFFCNWkzSDRqNHR4VHl5ZkFFUmRqSWo3R1RkSjYvUHR6cVpFWFowOUFXWXR4UnpGZk9XWXE3L2grOS8rQkh6ek9FZEZEc3E1aTNGUExMNzdqOTk4ODE5dHpxWnI5NWR1SFNyTTZjeWZFVzNvOTBMRVBPZVlqNjNZcTZMWDhBTjl1WlN6UFZnRnhEaDJqR0t1ZTc5QXFJOUtyaEhWVEhYUlM0ZzI2dUg2eXVLdVM1NkFUY092L092NHRxZVlxNEh1WURJaTE5L2ZkUTE5bnFLdWE3bUFtNk1zTk5TekhWMUZ4RDlmY0ZPU3pIWDRRSXVmVkhGUEZQTU04VThVOHdqOS9wbFNNd2pJK3hraXJudS9kdGdoQjBWODVaaXJxTXZZTUJPWm9TZE1WMk5zS1BsQ3hnVTg4eGQvczhYOTJvcDVwR2JDNmhjUW9TZGxydmkrcFlSZHZUVzhKVUxHQlR6bmhWY1UxSE1JNTMvR2tzYVlhZXFtRmVOc0tNUFRqOGNPZnMxRmlNajdGUVU4NG9SZGlLZGU4Tng0VVBSWUlTZG5tTGVNOEpPcG5QZnduSmtocjJXWXQ0eXcxNms4NGE0S0RMRDN0eG0ySXNNL3lnYTRjTE1GbmFuMnNKdXBuTTJjWEZtRC91NzJzTitwdk9WY0pPV1BlejM3UEhveGRldE5abk9WY2FOZXJhdzI3T0YzWjdPdFJOdVZqSENUczhJT3hXZFp4UnVXblhLNGFlc3ZkRTVKdUhtYTlmeno0SVBXYXVlZTNaODRGcjBuSHZGaHg5YXo3Y1lIbVJweXg5djk0bUhXa3JQY1hDR2Q4TkR6bTM2eTR5MTRjR242djUzRGdmcTZmcDk4US90d3BtYXU2SFU0UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiZXhwb3J0IGNsYXNzIFJlcXVlc3RMaW1pdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxpbWl0cyA9IFt7dGltZTogMTAwMCwgYW1vdW50OiA0MH1dKSB7XHJcbiAgICAgICAgdGhpcy5saW1pdHMgPSBsaW1pdHM7XHJcbiAgICAgICAgdGhpcy53b3JraW5nID0gW107XHJcbiAgICAgICAgdGhpcy53YWl0aW5nID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaXNHb29kKGhvd011Y2ggPSAxKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW1pdCBvZiB0aGlzLmxpbWl0cykge1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMud29ya2luZy5maWx0ZXIoeCA9PiBub3cgLSB4LnN0YXJ0IDw9IGxpbWl0LnRpbWUpLm1hcCh4ID0+IHguY291bnQpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgKyBob3dNdWNoID4gbGltaXQuYW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2NoZWR1bGVPbmUoaXRlbSwgY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZUdyb3VwKFtpdGVtXSwgY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgc2NoZWR1bGVNYW55KGFycmF5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBncm91cHMgPSBbXTtcclxuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5saW1pdHNbMF0uYW1vdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IHNpemUpIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goYXJyYXkuc2xpY2UoaSwgc2l6ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZ3JvdXBzLm1hcCh4ID0+IHRoaXMuc2NoZWR1bGVHcm91cCh4LCBjYWxsYmFjaykpKVxyXG4gICAgfVxyXG5cclxuICAgIHNjaGVkdWxlR3JvdXAoYXJyYXksIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHb29kKGFycmF5Lmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGFycmF5LCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZy5wdXNoKHtjYWxsYmFjaywgcmVzb2x2ZSwgcmVqZWN0fSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBydW4oZGF0YSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7ZGF0YSwgY2FsbGJhY2ssIGNvdW50OiBkYXRhLmxlbmd0aCwgc3RhcnQ6IG5ldyBEYXRlfTtcclxuICAgICAgICB0aGlzLndvcmtpbmcucHVzaChvYmopXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyeU5leHQoKSwgdGhpcy5saW1pdHNbMF0udGltZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ya2luZy5zcGxpY2UodGhpcy53b3JraW5nLmluZGV4T2Yob2JqKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeU5leHQoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMud2FpdGluZy5sZW5ndGggPiAwICYmIHRoaXMuaXNHb29kKHRoaXMud2FpdGluZ1swXS5jb3VudCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2FpdGluZyA9IHRoaXMud2FpdGluZy5wb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW4od2FpdGluZy5kYXRhLCB3YWl0aW5nLmNhbGxiYWNrKS50aGVuKHdhaXRpbmcucmVzb2x2ZSwgd2FpdGluZy5yZWplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy53YWl0aW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyeU5leHQoKSwgdGhpcy5saW1pdHNbMF0udGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9wb3B1cC5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RQYWdlTWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICAgICAgdGhpcy5yZXZlcnNlS25vd25BZGRyZXNzZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvdW5kSW5mbyhkaXYsIGtleSwgZWxlbWVudCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZWxlbWVudCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdlbXB0eSc7XHJcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIk5vIHJvdW5kIGluZm8gZm91bmQgOihcIjtcclxuICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgYS50ZXh0Q29udGVudCA9ICdBZGQgeW91ciBwcm9qZWN0Lic7XHJcbiAgICAgICAgICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbGVubmFyZGV2ZXJ0ei9ldGhMaXNib24yMDIzJztcclxuICAgICAgICAgICAgYS50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSlcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmQoYSlcclxuICAgICAgICAgICAgZGl2LmFwcGVuZChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZm9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5mb0VsZW0udGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKGVsZW1lbnQpWzBdWydyb3VuZEluZm8nXTtcclxuICAgICAgICBkaXYuYXBwZW5kKGluZm9FbGVtKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdW5kSW5mbyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHt0eXBlOiBcImdldFJvdW5kSW5mb1wiLCB2YWx1ZX0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnZW5hYmxlZCddLCB4ID0+IHIoeD8uZW5hYmxlZCA/PyB0cnVlKSkpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1R3aXR0ZXJQYWdlTWFuYWdlcn0gZnJvbSBcIi4vdHdpdHRlclBhZ2VNYW5hZ2VyXCI7XHJcblxyXG4vLyBjYW4gYWRkIG90aGVyIHdlYnNpdGVzIGhlcmUsXHJcbi8vIHN0YXkgd2l0aCBUd3RpdHRlciBmb3IgdGhlIHNjb3BlIG9mIHRoaXMgaGFja2F0aG9uXHJcbmNvbnN0IHNwZWNpZmljRG9tYWluTGlzdCA9IHtcclxuICAgIFwidHdpdHRlci5jb21cIjogVHdpdHRlclBhZ2VNYW5hZ2VyLFxyXG59XHJcblxyXG4vLyBydW5zIG9ubHkgaWYgdmlzaXRlZCBwYWdlIGlzIGluIHNwZWNpZmljRG9tYWluTGlzdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFnZU1hbmFnZXJGYWN0b3J5KGRvY3VtZW50LCB1cmwpIHtcclxuICAgIGxldCBzcGVjaWZpYyA9IE9iamVjdC5lbnRyaWVzKHNwZWNpZmljRG9tYWluTGlzdCkuZmluZCgoW2RvbWFpbiwgY29uc3RydWN0b3JdKSA9PiB1cmwuaG9zdG5hbWUgPT09IGRvbWFpbiB8fCB1cmwuaG9zdG5hbWUuZW5kc1dpdGgoJy4nICsgZG9tYWluKSlcclxuICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgc3BlY2lmaWNbMV0oZG9jdW1lbnQpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0UGFnZU1hbmFnZXJ9IGZyb20gXCIuL2Fic3RyYWN0UGFnZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtSZXF1ZXN0TGltaXRlcn0gZnJvbSBcIi4uL1JlcXVlc3RMaW1pdGVyXCI7XHJcbmltcG9ydCB7Q3VzdG9tVHdpdHRlcn0gZnJvbSBcIi4uL3dpZGdldHMvY3VzdG9tVHdpdHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFR3aXR0ZXJQYWdlTWFuYWdlciBleHRlbmRzIEFic3RyYWN0UGFnZU1hbmFnZXIge1xyXG4gICAgc3RhdGljIG5hbWVzUmVzdWx0cyA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlcXVlc3RMaW1pdGVyID0gbmV3IFJlcXVlc3RMaW1pdGVyKFt7YW1vdW50OiAxMCwgdGltZTogMTAwMH1dKTtcclxuICAgICAgICB0aGlzLmljb25VcmwgPSBhd2FpdCB0aGlzLmdldEljb24oKVxyXG4gICAgICAgIHRoaXMuY2hlY2soKVxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLmNoZWNrKCkpXHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2soKSwgMjUwKSlcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHRoaXMuY2hlY2soKSlcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVjaygpLCAyNTApKVxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5zcmNFbGVtZW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFzdERyb3Bkb3duKVxyXG4gICAgICAgICAgICBpZiAoZS5zcmNFbGVtZW50ICE9IHRoaXMubGFzdERyb3Bkb3duKSB0aGlzLmxhc3REcm9wZG93bj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5jaGVjaygpLCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGVjaygpIHtcclxuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0VuYWJsZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBsYWNlcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKSkuZm9yRWFjaCh4ID0+IHgucmVtb3ZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrR2FyYmFnZURyb3Bkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VhcmNoUGxhY2VzKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYWNlcyA9IEFycmF5LmZyb20odGhpcy5saXN0UGxhY2VzKCkpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVzID0gbmV3IFNldChwbGFjZXMubWFwKHggPT4geC5uYW1lKS5maWx0ZXIoeCA9PiB4KSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRJbmZvKG5hbWVzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBsYWNlIG9mIHBsYWNlcykge1xyXG4gICAgICAgICAgICBUd2l0dGVyUGFnZU1hbmFnZXIubmFtZXNSZXN1bHRzW3BsYWNlLm5hbWVdLnRoZW4oeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS5hZGRDYWxsYmFjayh4Py5yZXN1bHQgPz8ge30pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dhcmJhZ2VEcm9wZG93bigpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICcuaWNvbjpmb2N1cywgLmljb246aG92ZXIsIC5pY29uVHdpdHRlckRyb3Bkb3duOmhvdmVyLCAuaWNvblR3aXR0ZXJEcm9wZG93bjpmb2N1cywgLmljb25Ud2l0dGVyRHJvcGRvd24uaXNDbGlja2VkJztcclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBnYXJiYWdlIGNvbGxlY3RvclwiKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REcm9wZG93bj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEluZm8obmFtZXMpIHtcclxuICAgICAgICBjb25zdCBsYWNraW5nID0gQXJyYXkuZnJvbShuYW1lcykuZmlsdGVyKHggPT4gIVR3aXR0ZXJQYWdlTWFuYWdlci5uYW1lc1Jlc3VsdHNbeF0pO1xyXG4gICAgICAgIGlmIChsYWNraW5nLmxlbmd0aCA9PSAwKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IHJlcXVlc3RQcm9taXNlID0gdGhpcy5hcGlDYWxsKGxhY2tpbmcpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBsYWNraW5nKSB7XHJcbiAgICAgICAgICAgIFR3aXR0ZXJQYWdlTWFuYWdlci5uYW1lc1Jlc3VsdHNbbmFtZV0gPSByZXF1ZXN0UHJvbWlzZS50aGVuKGQgPT4gZFtuYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHJlcXVlc3RQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFwaUNhbGwobmFtZXMpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2VzID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGltaXRlci5zY2hlZHVsZU1hbnkobmFtZXMsICh4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgYnVsayByb3VuZCBpbmZvXCIpXHJcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJnZXRSb3VuZEluZm9CdWxrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHhcclxuICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VzLnJlZHVjZSgoYSwgYikgPT4gKHsuLi5hLCAuLi5ifSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJnZXRJY29uVXJsXCJcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICogbGlzdFBsYWNlcygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGRpdiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuci1kbm1yenMuci0xbnk0bDNsLCAuci1ndGRxaXogLmNzcy0xZGJqYzRuLnItMWl1c3ZyNC5yLTE2eTJ1b3guci0xNzc3ZmNpLCAuY3NzLTFkYmpjNG4uci0xNnkydW94LnItMXdiaDVhMi5yLTFwaTJ0c3guci0xNzc3ZmNpJykpIHtcclxuICAgICAgICAgICAgaWYgKGRpdi5tYXRjaGVzKCcuY3NzLTFkYmpjNG4uci14b2R1dTUuci0xd2JoNWEyLnItZG5tcnpzLnItMW55NGwzbCcpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IEFycmF5LmZyb20oZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yLTlpbGI4MiwgLnItMTRqNzlwdiwgLnItcmppeHFlJykpLm1hcCh4ID0+IHgudGV4dENvbnRlbnQpLmZpbmQoeCA9PiB4WzBdID09ICdAJyk7XHJcbiAgICAgICAgICAgIGlmKCFuYW1lKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGV4aXN0aW5nSWNvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdJY29uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdJY29uLmRhdGFzZXQuc291cmNlTmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSWNvbi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nSWNvbiA9IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhZGRDYWxsYmFjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFkYXRhLmVycm9yICYmICFkaXYucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhkYXRhKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gbmV3IEN1c3RvbVR3aXR0ZXIoZGF0YVtuYW1lXSkuZGl2XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSWNvbihkaXYsIGRhdGEsIGRyb3Bkb3duQ29udGVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQge25hbWUsIGFkZENhbGxiYWNrfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJY29uID0gKHBhcmVudCwgZGF0YSwgZHJvcGRvd25Db250ZW50LCBuYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xyXG4gICAgICBpY29uLmRhdGFzZXQuc291cmNlTmFtZSA9IG5hbWU7XHJcbiAgICAgIGljb24uc3R5bGUud2lkdGggPSBcIjEuMWVtXCI7XHJcbiAgICAgIGljb24uc3R5bGUuaGVpZ2h0ID0gXCIxLjFlbVwiO1xyXG4gICAgICBpY29uLnN0eWxlLm1hcmdpbiA9IFwiLTFweCAwIC0xcHggMFwiO1xyXG4gICAgICBpY29uLnN0eWxlLmJvcmRlclRvcCA9IFwiMnB4IHNvbGlkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgIGljb24uc3R5bGUuYm9yZGVyYm90dG9tID0gXCIycHggc29saWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgaWNvbi5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIwLjNlbSBzb2xpZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICBpY29uLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIwLjNlbSBzb2xpZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7dGhpcy5pY29uVXJsfSkgbm8tcmVwZWF0YDtcclxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGBjb250YWluYDtcclxuICAgICAgaWNvbi5vbm1vdXNlb3ZlciA9IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpY29uLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gICAgICBpY29uLmFwcGVuZChkcm9wZG93bik7XHJcbiAgICAgIHBhcmVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCIuci0xZm1qN281Om5vdChoMiksIC5yLTE4anN2azI6bm90KGgyKSwgLnItMW5hbzMzaTpub3QoaDIpLCAuci12bHhqbGQ6bm90KGgyKVwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgID8uYXBwZW5kKGljb24pO1xyXG4gICAgICBpY29uLm9ubW91c2VvdmVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZHJvcGRvd24gPSBkcm9wZG93bkNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZChkcm9wZG93bik7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBpY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJpY29uVHdpdHRlckRyb3Bkb3duXCIpO1xyXG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLmxlZnQgPSBzY3JvbGxYICsgcmVjdC5sZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLnRvcCA9IHNjcm9sbFkgKyByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIGRyb3Bkb3duLnN0eWxlLnppbmRleCA9IDEwMDAwMDA7XHJcbiAgICAgICAgZHJvcGRvd24ub25jbGljayA9ICgpID0+IHtkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiaXNDbGlja2VkXCIpO31cclxuXHJcbiAgICAgICAgaWYgKGRyb3Bkb3duICE9PSB0aGlzLmxhc3REcm9wZG93bikge1xyXG4gICAgICAgICAgdGhpcy5sYXN0RHJvcGRvd24/LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3REcm9wZG93biA9IGRyb3Bkb3duO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudENhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhZHJvcGRvd24ubWF0Y2hlcyhcIjpob3ZlciwgOmZvY3VzLCA6Zm9jdXMtd2l0aGluLCAuaXNDbGlja2VkXCIpICYmXHJcbiAgICAgICAgICAgICFpY29uLm1hdGNoZXMoXCI6aG92ZXIsIDpmb2N1cywgOmZvY3VzLXdpdGhpblwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja0dhcmJhZ2VEcm9wZG93bigpLCAyMDApO1xyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGV2ZW50Q2FsbGJhY2spO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRyb3Bkb3duLm9ubW91c2VvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tHYXJiYWdlRHJvcGRvd24oKSwgMjAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IGRyb3Bkb3duLnJlbW92ZSgpKTtcclxuICAgICAgICBpY29uLm9uYmx1ciA9IGV2ZW50Q2FsbGJhY2s7XHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBldmVudENhbGxiYWNrKTtcclxuICAgICAgfTtcclxuICAgICAgaWNvbi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiaXNDbGlja2VkXCIpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4geyBpY29uIH07XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2N1c3RvbWl6ZWREb25hdGlvbnNXaWRnZXQubXB0c1wiO1xyXG5pbXBvcnQgZXRoX2xvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuLi8uLi9pbWcvZXRoLnBuZ1wiXHJcbmltcG9ydCB1c2RjX2xvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuLi8uLi9pbWcvdXNkYy5wbmdcIlxyXG5pbXBvcnQgYXJyb3cgZnJvbSBcIiEhdXJsLWxvYWRlciEuLi8uLi9pbWcvYXJyb3cuc3ZnXCJcclxuaW1wb3J0IHBlbiBmcm9tIFwiISF1cmwtbG9hZGVyIS4uLy4uL2ltZy9wZW4uc3ZnXCJcclxuaW1wb3J0IGNsb3NlIGZyb20gXCIhIXVybC1sb2FkZXIhLi4vLi4vaW1nL2Nsb3NlLnN2Z1wiXHJcbmltcG9ydCBtYXRpY1Rva2VuSWNvbiBmcm9tIFwiISF1cmwtbG9hZGVyIS4uLy4uL2ltZy9tYXRpYy53ZWJwXCJcclxuaW1wb3J0IGJpYW5uY2VDb2luTG9nbyBmcm9tIFwiISF1cmwtbG9hZGVyIS4uLy4uL2ltZy9ibmIud2VicFwiXHJcbmltcG9ydCB7dG9rZW5zfSBmcm9tIFwiLi4vdGlwcGluZ1V0aWxzXCI7XHJcbmltcG9ydCB7Y3JlYXRlfSBmcm9tIFwiZmFzdC1jcmVhdG9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6ZWREYXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgcmVjaXBpZW50ID0gZGF0YS5yZWNpcGllbnQgPz8gbnVsbDtcclxuICAgICAgICBsZXQgbmV0d29yayA9IFwibGluZWFcIlxyXG4gICAgICAgIGxldCBhbW91bnQgPSAxXHJcbiAgICAgICAgbGV0IG5ldHdvcmtzID0gW1xyXG4gICAgICAgICAgICB7bmFtZTogJ0xpbmVhJywgaW1nOiBldGhfbG9nbywgY2hhaW5JZDogNTkxNDAsIGNvZGU6ICdsaW5lYSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ1BvbHlnb24nLCBpbWc6IG1hdGljVG9rZW5JY29uLCBjaGFpbklkOiAxMzcsIGNvZGU6ICdQb2x5Z29uJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnRXRoZXJldW0nLCBpbWc6IGV0aF9sb2dvLCBjaGFpbklkOiAxLCBjb2RlOiAnRVRIJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnQlNDJywgaW1nOiBiaWFubmNlQ29pbkxvZ28sIGNoYWluSWQ6IDU2LCBjb2RlOiAnQlNDJ30sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGlmIChkYXRhLnRva2VuRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIG5ldHdvcmtzID0gbmV0d29ya3MuZmlsdGVyKG4gPT4gZGF0YS50b2tlbkZpbHRlcltuLmNvZGUudG9Mb3dlckNhc2UoKV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLm5ldHdvcmtGaWx0ZXIpe1xyXG4gICAgICAgICAgICBuZXR3b3JrcyA9IG5ldHdvcmtzLmZpbHRlcihuID0+IGRhdGEubmV0d29ya0ZpbHRlcltuLm5hbWUudG9Mb3dlckNhc2UoKV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaHRtbCA9IGNyZWF0ZSgnZGl2Jywge30sIHRlbXBsYXRlKHtcclxuICAgICAgICAgICAgY3VzdG9tSGVhZGVyOiBkYXRhLmN1c3RvbUhlYWRlcixcclxuICAgICAgICAgICAgY3VzdG9tVGV4dDogZGF0YS5jdXN0b21UZXh0ID8/IFwiXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvblZhbHVlOiBkYXRhLmJ1dHRvblZhbHVlLFxyXG4gICAgICAgICAgICBuZXR3b3JrcyxcclxuICAgICAgICAgICAgdG9rZW5zOiB0aGlzLmZpbHRlclRva2VucyhkYXRhLnRva2VuRmlsdGVyKSxcclxuICAgICAgICAgICAgZXRoX2xvZ28sXHJcbiAgICAgICAgICAgIHVzZGNfbG9nbyxcclxuICAgICAgICAgICAgYXJyb3csXHJcbiAgICAgICAgICAgIHBlbixcclxuICAgICAgICAgICAgY2xvc2VcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdXR0b24nKS5vbmNsaWNrID0gKCkgPT4gdGhpcy5odG1sLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ2Nsb3NlJywge2J1YmJsZXM6IHRydWV9KSkpO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpLmZvckVhY2goc2VsZWN0ID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0Lm9uY2xpY2sgPSBlID0+IHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW4nKVxyXG4gICAgICAgICAgICBzZWxlY3Qub25ibHVyID0gZSA9PiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgc2VsZWN0Lm9uY2xpY2sgPSBlID0+IHNlbGVjdC5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QgdWwgbGknKS5mb3JFYWNoKGxpID0+IHtcclxuICAgICAgICAgICAgbGkub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGxpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQgPSBsaS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYnV0dG9uLnBhcmVudE5vZGUuZGF0YXNldCwgbGkuZGF0YXNldCk7XHJcbiAgICAgICAgICAgICAgICBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKT8uYmx1cigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hWaXNpYmxlQ29pbnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnNlbmQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV0d29yayA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubmV0d29ya1NlbGVjdCcpLmRhdGFzZXQubmV0d29yayA/PyBuZXR3b3JrO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0JykuZGF0YXNldC5zeW1ib2w7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlQm94IHRleHRhcmVhJykudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gKHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudmFsdWVTZWxlY3Rpb24gLmlzU2VsZWN0ZWQgaW5wdXQnKT8udmFsdWUgfHwgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy52YWx1ZVNlbGVjdGlvbiAuaXNTZWxlY3RlZCcpLmRhdGFzZXQudmFsdWUpID8/IGFtb3VudDtcclxuICAgICAgICAgICAgdGhpcy5odG1sLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ2N1c3RvbUV2ZW50Jywge2J1YmJsZXM6IHRydWV9KSwge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBuZXR3b3JrLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICByZWNpcGllbnQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsdWVTZWxlY3Rpb24gPiAqJykuZm9yRWFjaChiID0+IHtcclxuICAgICAgICAgICAgYi5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlU2VsZWN0aW9uICA+IConKS5mb3JFYWNoKHggPT4geC5jbGFzc0xpc3QucmVtb3ZlKCdpc1NlbGVjdGVkJykpXHJcbiAgICAgICAgICAgICAgICBiLmNsYXNzTGlzdC5hZGQoJ2lzU2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgYi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpPy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCB0b2dnbGVNZXNzYWdlQm94ID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVNZXNzYWdlQm94Jyk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUJveCA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUJveCcpO1xyXG4gICAgICAgIGlmICghZGF0YS5zaG93TWVzc2FnZUJveClcclxuICAgICAgICAgICAgdG9nZ2xlTWVzc2FnZUJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdG9nZ2xlTWVzc2FnZUJveC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VCb3guY2xhc3NMaXN0LmNvbnRhaW5zKCdpc0hpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdpc0hpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVzc2FnZUJveC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAnTm8gbWVzc2FnZSdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC5jbGFzc0xpc3QuYWRkKCdpc0hpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVzc2FnZUJveC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAnQWRkIGEgbWVzc2FnZSdcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQm94LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZVZhbHVlU2VsZWN0aW9uID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy52YWx1ZVNlbGVjdGlvbicpO1xyXG4gICAgICAgIGlmICghZGF0YS5zaG93VmFsdWVTZWxlY3Rpb24pXHJcbiAgICAgICAgICAgIHRvZ2dsZVZhbHVlU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudmFsdWVTZWxlY3Rpb24gLmlzU2VsZWN0ZWQnKS5kYXRhc2V0LnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZU5ldHdvcmtTZWxlY3Rpb24gPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLm5ldHdvcmtTZWxlY3Rpb24nKTtcclxuICAgICAgICBpZiAoIWRhdGEuc2hvd05ldHdvcmtTZWxlY3Rpb24pXHJcbiAgICAgICAgICAgIHRvZ2dsZU5ldHdvcmtTZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5uZXR3b3JrU2VsZWN0JykuZGF0YXNldC5uZXR3b3JrID0gXCJcIjtcclxuICAgICAgICBjb25zdCB0b2dnbGVUb2tlblNlbGVjdGlvbiA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudG9rZW5TZWxlY3Rpb24nKTtcclxuICAgICAgICBpZiAoIWRhdGEuc2hvd1Rva2VuU2VsZWN0aW9uKVxyXG4gICAgICAgICAgICB0b2dnbGVUb2tlblNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0JykuZGF0YXNldC5zeW1ib2wgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUlucHV0ID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVJbnB1dCcpO1xyXG4gICAgICAgIGlmICghZGF0YS5zaG93SW5wdXQpXHJcbiAgICAgICAgICAgIHRvZ2dsZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlVGV4dCA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlVGV4dCcpO1xyXG4gICAgICAgIGlmICghZGF0YS5jdXN0b21UZXh0KVxyXG4gICAgICAgICAgICB0b2dnbGVUZXh0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVmlzaWJsZUNvaW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFZpc2libGVDb2lucygpIHtcclxuICAgICAgICBsZXQgbmV0d29yayA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubmV0d29ya1NlbGVjdCcpLmRhdGFzZXQubmV0d29yaztcclxuICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2tlblNlbGVjdCBsaScpXHJcbiAgICAgICAgZm9yIChsZXQgdG9rZW4gb2YgdG9rZW5zKSB7XHJcbiAgICAgICAgICAgIHRva2VuLnN0eWxlLmRpc3BsYXkgPSB0b2tlbi5kYXRhc2V0Lm5ldHdvcmsgPT0gbmV0d29yayA/ICcnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV0d29yayAmJiB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0JykuZGF0YXNldC5uZXR3b3JrICE9IG5ldHdvcmspIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoYC50b2tlblNlbGVjdCBsaVtkYXRhLW5ldHdvcms9XCIke25ldHdvcmt9XCJdYCkuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyVG9rZW5zKHRva2VuRmlsdGVyKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbkZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuRmlsdGVyW3QubmV0d29yay50b0xvd2VyQ2FzZSgpXT8uaW5jbHVkZXModC5zeW1ib2wpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgY3NzIGZyb20gXCIuL2NvbnRlbnQvd2lkZ2V0U3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQge2NyZWF0ZX0gZnJvbSBcImZhc3QtY3JlYXRvclwiO1xyXG5pbXBvcnQge0N1c3RvbWl6ZWREYXBwfSBmcm9tIFwiLi9jb250ZW50L0N1c3RvbWl6ZWREb25hdGlvbnNXaWRnZXRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVHdpdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuZGl2LmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSlcclxuICAgICAgICB0aGlzLmRpdi5zaGFkb3dSb290LmFwcGVuZChjcmVhdGUoJ3N0eWxlJywge3RleHQ6IGNzc30pKTtcclxuXHJcbiAgICAgICAgbGV0IHBvcHVwID0gY3JlYXRlKCdzZWN0aW9uLnRpcHBpbmctcG9wdXAnKVxyXG4gICAgICAgIHRoaXMuZGl2LnNoYWRvd1Jvb3QuYXBwZW5kKHBvcHVwKTtcclxuXHJcbiAgICAgICAgcG9wdXAuYXBwZW5kKG5ldyBDdXN0b21pemVkRGFwcChkYXRhKS5odG1sKTtcclxuICAgICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjdXN0b21FdmVudCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtlLCBkYXRhfSlcclxuICAgICAgICAgICAgLy8gc2V0IHVybCBwYXJhbXMgdGhhdCBjYW4gYmUgcHJvY2Vzc2VkIGJ5IHRoaXJkIHBhcnR5IGFwcFxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBlLmFtb3VudCA/PyBudWxsLFxyXG4gICAgICAgICAgICAgICAgbmV0d29yazogZS5uZXR3b3JrID8/IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogZS50b2tlbiA/PyBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZS5tZXNzYWdlID8/IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogZS5pbnB1dCA/PyBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50OiBlLnJlY2lwaWVudCA/PyBudWxsLFxyXG4gICAgICAgICAgICAgICAgb3RoZXI6IGUub3RoZXIgPz8gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRhdGFbJ2hvc3RVUkwnXSArIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZmlsdGVyKChbaywgdl0pID0+IHYpLm1hcCh4ID0+IGVuY29kZVVSSUNvbXBvbmVudCh4WzBdKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh4WzFdKSkuam9pbignJicpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHRva2VucyA9IFtcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFdGhlcmV1bVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvMzJ4MzIvMTAyNy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogNTkxNDAsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiTGluZWFcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFdGhlcmV1bVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvMzJ4MzIvMTAyNy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJNQVRJQ1wiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiTUFUSUNcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vYXNzZXRzLmNvaW5nZWNrby5jb20vY29pbnMvaW1hZ2VzLzQ3MTMvc21hbGwvbWF0aWMtdG9rZW4taWNvbi5wbmc/MTYyNDQ0NjkxMlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJCTkJcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkJOQlwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzMyeDMyLzE4MzkucG5nXCJcclxuICAgIH1cclxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3BhZ2VNYW5hZ2VyRmFjdG9yeX0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wYWdlTWFuYWdlcnMvZmFjdG9yeVwiO1xyXG5cclxucGFnZU1hbmFnZXJGYWN0b3J5KGRvY3VtZW50LCBkb2N1bWVudC5sb2NhdGlvbikudGhlbih4PT54Py5pbml0KCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9