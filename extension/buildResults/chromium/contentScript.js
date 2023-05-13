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
            {name: 'Linea', img: _url_loader_img_eth_png__WEBPACK_IMPORTED_MODULE_1__["default"], chainId: 59140, code: 'Linea'},
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
            let targetUrl = data['hostURL'] + Object.entries(params).filter(([k, v]) => v).map(x => encodeURIComponent(x[0]) + '=' + encodeURIComponent(x[1])).join('&')
            chrome.runtime.sendMessage({ type: 'openPopupWindow', value: targetUrl });
//            window.open()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sd0NBQXdDLGdDQUFnQyxnQ0FBZ0MsMEJBQTBCLGtDQUFrQywwQ0FBMEMsNkJBQTZCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLDRIQUE0SCx3QkFBd0IsbUNBQW1DLGdEQUFnRCxLQUFLLHdCQUF3QixxQkFBcUIsZ0NBQWdDLGdDQUFnQywyQkFBMkIseUJBQXlCLHdEQUF3RCx5QkFBeUIseUJBQXlCLG9CQUFvQixtUEFBbVAsbUJBQW1CLDBCQUEwQiw4QkFBOEIsbUNBQW1DLHdCQUF3Qiw2QkFBNkIsYUFBYSxTQUFTLG9CQUFvQiwwQkFBMEIsMkNBQTJDLHdCQUF3QixxQ0FBcUMsYUFBYSxvQkFBb0IscUNBQXFDLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLDBCQUEwQixhQUFhLDhCQUE4QixtQ0FBbUMsZ0NBQWdDLGFBQWEsU0FBUyw2QkFBNkIsNkJBQTZCLDBCQUEwQiwyQ0FBMkMsK0JBQStCLGdDQUFnQyxnQ0FBZ0MsbURBQW1ELDBEQUEwRCxpQkFBaUIsdUJBQXVCLDRCQUE0QixvQ0FBb0MsMEJBQTBCLGtDQUFrQyxpQkFBaUIsMkJBQTJCLGtDQUFrQyxpQkFBaUIsa0NBQWtDLGtDQUFrQyw2QkFBNkIsc0NBQXNDLHFCQUFxQiw4QkFBOEIsdUNBQXVDLHVDQUF1QyxxQkFBcUIsK0JBQStCLHVDQUF1Qyx1Q0FBdUMsZ0RBQWdELHFDQUFxQyxvQ0FBb0MsNkNBQTZDLDJDQUEyQyw0Q0FBNEMsbUNBQW1DLHVDQUF1QyxvQ0FBb0MscUNBQXFDLDBDQUEwQyx5QkFBeUIscUJBQXFCLGlCQUFpQixhQUFhLFNBQVMscUJBQXFCLDhCQUE4QiwrQkFBK0Isd0JBQXdCLHlCQUF5QiwrQkFBK0IsZ0RBQWdELHNDQUFzQywrQ0FBK0MsU0FBUyxzQkFBc0Isd0JBQXdCLHlCQUF5QixxQ0FBcUMsMkJBQTJCLFNBQVMsNkJBQTZCLGdDQUFnQyx1QkFBdUIsd0NBQXdDLG9DQUFvQyxxQ0FBcUMsaUJBQWlCLHlCQUF5QixvQ0FBb0MsbUNBQW1DLDhCQUE4Qix5Q0FBeUMsbUNBQW1DLHlDQUF5Qyx1Q0FBdUMsdUNBQXVDLGdDQUFnQyxvQ0FBb0MsNENBQTRDLHNDQUFzQyxtREFBbUQsd0NBQXdDLHVEQUF1RCwwREFBMEQscUNBQXFDLDhEQUE4RCxrQ0FBa0Msd0NBQXdDLGlDQUFpQyxxRkFBcUYsdURBQXVELDRDQUE0QywyR0FBMkcseUJBQXlCLGlCQUFpQix5QkFBeUIsOENBQThDLG1DQUFtQyxrQ0FBa0MsbUNBQW1DLGlCQUFpQiwyQkFBMkIseUNBQXlDLDRDQUE0Qyx3Q0FBd0MsbUNBQW1DLHlDQUF5QyxtQ0FBbUMsaUJBQWlCLDRCQUE0Qiw2QkFBNkIsZ0NBQWdDLCtCQUErQix5Q0FBeUMsa0NBQWtDLHdDQUF3QywwQ0FBMEMscUJBQXFCLDBCQUEwQixxQ0FBcUMsdUNBQXVDLGdDQUFnQyx3Q0FBd0Msc0NBQXNDLGtDQUFrQyxnQ0FBZ0MsbUNBQW1DLDRDQUE0QyxxQ0FBcUMsdUNBQXVDLG9DQUFvQyx3Q0FBd0MsZ0pBQWdKLDRCQUE0QixzQ0FBc0MsNENBQTRDLDZDQUE2QywrREFBK0QsMENBQTBDLHdDQUF3QyxxQkFBcUIsaUJBQWlCLDhDQUE4QywwQkFBMEIsdUNBQXVDLHFCQUFxQixpQkFBaUIsYUFBYSxTQUFTLCtCQUErQixvQ0FBb0MsZ0NBQWdDLGlDQUFpQyw4QkFBOEIsMkJBQTJCLDhDQUE4Qyw0QkFBNEIsd0JBQXdCLGdEQUFnRCxxQ0FBcUMsYUFBYSxTQUFTLHlCQUF5QiwrQkFBK0Isa0NBQWtDLDRCQUE0Qiw4QkFBOEIsYUFBYSwwQkFBMEIsb0lBQW9JLHlDQUF5QyxrQ0FBa0Msd0NBQXdDLCtDQUErQyxrQ0FBa0Msd0NBQXdDLHlDQUF5QyxpQ0FBaUMsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsdUNBQXVDLDZCQUE2QixvREFBb0QsaUJBQWlCLGFBQWEsU0FBUyxnQkFBZ0IsK0JBQStCLDZCQUE2QiwrQkFBK0IsNkJBQTZCLGdDQUFnQyx5Q0FBeUMsZUFBZSwrQkFBK0Isb0NBQW9DLGdDQUFnQyxnQ0FBZ0MsK0JBQStCLDZCQUE2Qix3QkFBd0IsdUNBQXVDLGFBQWEsU0FBUyx1QkFBdUIsb0NBQW9DLDZCQUE2QixnQ0FBZ0MsaUNBQWlDLDJCQUEyQiwrQkFBK0IsZ0NBQWdDLGFBQWEsOEJBQThCLDRCQUE0QixvQ0FBb0MscUNBQXFDLGFBQWEsbUJBQW1CLCtCQUErQix5Q0FBeUMsYUFBYSxTQUFTLHlCQUF5QixtQ0FBbUMsZ0NBQWdDLDZCQUE2QixnQ0FBZ0MsaUNBQWlDLGFBQWEsb0JBQW9CLHdCQUF3QixnQ0FBZ0MsNEJBQTRCLDRCQUE0QixpQkFBaUIsdUJBQXVCLHFDQUFxQyxvQ0FBb0MsdUNBQXVDLG1DQUFtQyxhQUFhLFNBQVMsS0FBSyxrQ0FBa0MsdUJBQXVCLG9CQUFvQixxQkFBcUIsMEJBQTBCLDJCQUEyQix3QkFBd0IsNENBQTRDLGlDQUFpQyx1QkFBdUIsK0JBQStCLGtDQUFrQyxrQ0FBa0MsK0JBQStCLDJCQUEyQixzQkFBc0IsS0FBSyxvQ0FBb0Msa0NBQWtDLEtBQUssa0JBQWtCLG1DQUFtQyxxQ0FBcUMsa0NBQWtDLDZDQUE2QyxzQ0FBc0MsNkNBQTZDLG9DQUFvQyxvQ0FBb0MsbUJBQW1CLDBDQUEwQyxzQ0FBc0Msa0NBQWtDLDhCQUE4Qiw0QkFBNEIsK0JBQStCLHlCQUF5QixvQ0FBb0MsYUFBYSxTQUFTLHVCQUF1Qiw2QkFBNkIsNEJBQTRCLGdEQUFnRCxTQUFTLGtCQUFrQiw0QkFBNEIsZ0RBQWdELDJCQUEyQiw2QkFBNkIsMkJBQTJCLDZCQUE2QixhQUFhLFNBQVMsb0JBQW9CLGdEQUFnRCw0QkFBNEIsU0FBUyxrQkFBa0IsK0JBQStCLHFCQUFxQix1QkFBdUIsMEJBQTBCLFNBQVMsc0JBQXNCLGdEQUFnRCwrQkFBK0IseUJBQXlCLG9DQUFvQyx3QkFBd0IsK0JBQStCLCtCQUErQiwyQkFBMkIseUVBQXlFLHVCQUF1QixxQkFBcUIsdUJBQXVCLGFBQWEsb0JBQW9CLHlCQUF5Qix5QkFBeUIsU0FBUyxrQ0FBa0MsdUJBQXVCLHdCQUF3QixTQUFTLHdDQUF3QyxnQ0FBZ0MsMkNBQTJDLFNBQVMsd0NBQXdDLGdDQUFnQywyQ0FBMkMsU0FBUyw4Q0FBOEMsMkNBQTJDLFNBQVMsK0NBQStDLDBDQUEwQyxTQUFTLEtBQUssNkJBQTZCLFlBQVksaUNBQWlDLFNBQVMsY0FBYyxzQ0FBc0MsU0FBUyxLQUFLLG1CQUFtQjtBQUM1bTFCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmYTs7QUFFYiwyQ0FBMkMsZ0NBQWdDLG9DQUFvQyxvREFBb0QsOERBQThELGlFQUFpRSxHQUFHLGtDQUFrQzs7QUFFdlUsaUNBQWlDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsYUFBYSx1REFBdUQsNENBQTRDLEtBQUssNkNBQTZDLDZFQUE2RSxPQUFPLGlEQUFpRCxtRkFBbUYsT0FBTzs7QUFFdGdCLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTSxtQ0FBbUM7O0FBRW5DLGdDQUFnQzs7QUFFaEMsa0NBQWtDOztBQUVsQyxtQ0FBbUM7O0FBRW5DLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVyx5Q0FBeUMsbUVBQW1FLGdFQUFnRSxXQUFXLHlCQUF5QixTQUFTLHdCQUF3Qiw0QkFBNEIsY0FBYyxTQUFTLCtCQUErQixzQkFBc0IsV0FBVyxZQUFZLGdLQUFnSyxzREFBc0QsU0FBUyxrQkFBa0IsNEJBQTRCLG9CQUFvQixzQkFBc0IsOEJBQThCLGNBQWMsdUJBQXVCLGVBQWUsWUFBWSxvQkFBb0IsTUFBTSxpRUFBaUUsVUFBVTs7QUFFMTJCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6SztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSx1RUFBdUU7QUFDdkUsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTSxrQ0FBa0M7QUFDeEMsTUFBTTtBQUNOLGtGQUFrRjtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQXdFLGFBQWE7QUFDckY7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixPQUFPOztBQUVuQztBQUNBLCtCQUErQixZQUFZO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMVFBLDZCQUFlLG9DQUFVLFdBQVcsMkNBQTJDLDBDQUEwQyw2Q0FBNkMsY0FBYyxzQ0FBc0MsNERBQTRELGNBQWMsY0FBYyw2Q0FBNkMsY0FBYyx1Q0FBdUMsd0NBQXdDLDJDQUEyQyxnQ0FBZ0MsY0FBYyw2Q0FBNkMsY0FBYyx5Q0FBeUMsK0RBQStELHdCQUF3Qix5QkFBeUIsY0FBYyx3Q0FBd0MsaUNBQWlDLHlDQUF5QyxjQUFjLHVDQUF1QyxpQ0FBaUMseUNBQXlDLGNBQWMsNkNBQTZDLHlDQUF5QyxjQUFjLDhDQUE4Qyx3Q0FBd0MsY0FBYyxZQUFZLGNBQWMsY0FBYywwQ0FBMEMsZUFBZSxjQUFjLDBDQUEwQyxlQUFlLHlDQUF5Qyw4Q0FBOEMsZ0JBQWdCLHNDQUFzQyx3Q0FBd0MsMkRBQTJELGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQiwwQ0FBMEMseUNBQXlDLGlDQUFpQyxnQkFBZ0Isa0RBQWtELGdCQUFnQix3Q0FBd0MsNENBQTRDLGtEQUFrRCxnQkFBZ0IsMkNBQTJDLG1DQUFtQyxvQ0FBb0Msd0NBQXdDLHNEQUFzRCxnQkFBZ0IseUNBQXlDLHdDQUF3QyxnQkFBZ0IsZ0JBQWdCLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLHNEQUFzRCxnQkFBZ0IsMkNBQTJDLG1DQUFtQyxvQ0FBb0Msc0RBQXNELGdCQUFnQix5Q0FBeUMsd0NBQXdDLGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQixnQkFBZ0Isc0RBQXNELGdCQUFnQiwyQ0FBMkMsbUNBQW1DLG9DQUFvQyxzREFBc0QsZ0JBQWdCLHlDQUF5Qyx3Q0FBd0MsZ0JBQWdCLGdCQUFnQixrREFBa0QsZ0JBQWdCLGdCQUFnQixzREFBc0QsZ0JBQWdCLHdDQUF3QyxrQ0FBa0Msc0RBQXNELGdCQUFnQix3Q0FBd0MsNEJBQTRCLDBDQUEwQyxnQkFBZ0Isc0RBQXNELGdCQUFnQix5Q0FBeUMsdUNBQXVDLGdCQUFnQixnQkFBZ0Isc0RBQXNELGdCQUFnQiwwQ0FBMEMsZ0JBQWdCLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLDhDQUE4QyxnQkFBZ0Isd0NBQXdDLDZEQUE2RCxrREFBa0QsZ0JBQWdCLDBDQUEwQyxtQ0FBbUMsOENBQThDLGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQix3Q0FBd0Msa0RBQWtELHFFQUFxRSxzREFBc0QsZ0JBQWdCLDJDQUEyQyxtQ0FBbUMsa0NBQWtDLDBEQUEwRCxnQkFBZ0Isd0NBQXdDLDJEQUEyRCw0QkFBNEIsZ0JBQWdCLDBEQUEwRCxnQkFBZ0IseUNBQXlDLGtDQUFrQyxzRUFBc0UsZ0JBQWdCLGdCQUFnQiwwREFBMEQsZ0JBQWdCLHdDQUF3QyxtQ0FBbUMsNENBQTRDLGdCQUFnQixzREFBc0QsZ0JBQWdCLGdCQUFnQixzREFBc0QsZ0JBQWdCLHVDQUF1QyxtQ0FBbUMsb0NBQW9DLDBEQUEwRCxnQkFBZ0IsMENBQTBDLDhFQUE4RSw0QkFBNEIsOERBQThELGdCQUFnQix1Q0FBdUMsbUNBQW1DLGtEQUFrRCxrRUFBa0UsZ0JBQWdCLHdDQUF3Qyx3Q0FBd0MsNEJBQTRCLGdCQUFnQixrRUFBa0UsZ0JBQWdCLHlDQUF5QyxrQ0FBa0MsbURBQW1ELGdCQUFnQixnQkFBZ0IsOERBQThELGdCQUFnQixnQkFBZ0IsMERBQTBELGlCQUFpQixnQkFBZ0Isc0RBQXNELGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQixnQkFBZ0IsOENBQThDLGdCQUFnQixnQkFBZ0IsOENBQThDLGdCQUFnQix3Q0FBd0MsMkRBQTJELGtEQUFrRCxnQkFBZ0IsMENBQTBDLHVDQUF1QywyQ0FBMkMsZ0JBQWdCLGdCQUFnQixrREFBa0QsZ0JBQWdCLHdDQUF3QyxnREFBZ0Qsb0VBQW9FLHNEQUFzRCxnQkFBZ0IsMkNBQTJDLG1DQUFtQyxzQ0FBc0MsMERBQTBELGdCQUFnQix3Q0FBd0MsNkRBQTZELDRCQUE0QixnQkFBZ0IsMERBQTBELGdCQUFnQix5Q0FBeUMsa0NBQWtDLG9FQUFvRSxnQkFBZ0IsZ0JBQWdCLDBEQUEwRCxnQkFBZ0Isd0NBQXdDLG1DQUFtQyw0Q0FBNEMsZ0JBQWdCLHNEQUFzRCxnQkFBZ0IsZ0JBQWdCLHNEQUFzRCxnQkFBZ0Isd0NBQXdDLG9DQUFvQyxxQ0FBcUMsMkRBQTJELGtCQUFrQiwyQ0FBMkMsNEVBQTRFLDBCQUEwQiwrREFBK0Qsa0JBQWtCLHdDQUF3QyxvQ0FBb0Msb0RBQW9ELGtEQUFrRCxtRUFBbUUsa0JBQWtCLHlDQUF5QywyQ0FBMkMsNkJBQTZCLGtCQUFrQixtRUFBbUUsa0JBQWtCLDBDQUEwQyxtQ0FBbUMsa0RBQWtELGtCQUFrQixrQkFBa0IsK0RBQStELGtCQUFrQixrQkFBa0IsMkRBQTJELG1CQUFtQixrQkFBa0IsdURBQXVELGtCQUFrQixpQkFBaUIsbURBQW1ELGlCQUFpQixnQkFBZ0IsK0NBQStDLGlCQUFpQixnQkFBZ0IsbURBQW1ELGlCQUFpQix5Q0FBeUMsK0NBQStDLDJDQUEyQyxrQkFBa0IsNENBQTRDLG9EQUFvRCxrQkFBa0Isa0JBQWtCLGlCQUFpQixtREFBbUQsaUJBQWlCLHlDQUF5QyxrREFBa0QsbURBQW1ELGtCQUFrQiw4Q0FBOEMsbUNBQW1DLGdDQUFnQywrQkFBK0IscUNBQXFDLHlFQUF5RSxrQkFBa0IsK0NBQStDLGtCQUFrQixpQkFBaUIsMkNBQTJDLGlCQUFpQixlQUFlLDJDQUEyQyxnQkFBZ0IsNENBQTRDLCtDQUErQyxrQkFBa0IsNENBQTRDLG9DQUFvQyxtQ0FBbUMsbURBQW1ELGtCQUFrQiwwQ0FBMEMsNkRBQTZELGtCQUFrQixrQkFBa0IsK0NBQStDLGtCQUFrQixrQkFBa0IsMkNBQTJDLGtCQUFrQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0Rud1gsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDQWhDLGlFQUFlLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7QUNBbkMsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQ0EvQixpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDQWhDLGlFQUFlLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7QUNBbkMsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQ0F4QjtBQUNQLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEK0I7QUFDL0I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pDd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUVBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMEQ7QUFDVDtBQUNNO0FBQ3ZEO0FBQ08saUNBQWlDLHFFQUFtQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyREFBYyxHQUFHLHVCQUF1QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaUVBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUx3RDtBQUNIO0FBQ0U7QUFDSDtBQUNKO0FBQ0k7QUFDVTtBQUNEO0FBQ3RCO0FBQ0g7QUFDcEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0JBQW9CLCtEQUFRLGdDQUFnQztBQUN6RSxhQUFhLHNCQUFzQixrRUFBYyxnQ0FBZ0M7QUFDakYsYUFBYSx1QkFBdUIsK0RBQVEsMEJBQTBCO0FBQ3RFLGFBQWEsa0JBQWtCLGdFQUFlLDJCQUEyQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBTSxVQUFVLEVBQUUsMkVBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsU0FBUztBQUNUO0FBQ0EsMEhBQTBILGNBQWM7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxjQUFjO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsUUFBUTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFNO0FBQ3pCLFVBQVU7QUFDVixtQkFBbUIsd0RBQWE7QUFDaEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJNkM7QUFDVDtBQUMrQjtBQUNuRTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUMsbUNBQW1DLG9EQUFNLFdBQVcsTUFBTSxpRUFBRyxDQUFDO0FBQzlEO0FBQ0Esb0JBQW9CLG9EQUFNO0FBQzFCO0FBQ0E7QUFDQSx5QkFBeUIsOEVBQWM7QUFDdkM7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDJDQUEyQztBQUNwRjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFFO0FBQ3JFO0FBQ0EsZ0ZBQWtCLGdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wYWdlTWFuYWdlcnMvcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpZGdldHMvY29udGVudC93aWRnZXRTdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtY3JlYXRvci9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lkZ2V0cy9jb250ZW50L2N1c3RvbWl6ZWREb25hdGlvbnNXaWRnZXQubXB0cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltZy9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWcvYm5iLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWcvY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1nL2V0aC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWcvbWF0aWMud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltZy9wZW4uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1nL3VzZGMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUmVxdWVzdExpbWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wYWdlTWFuYWdlcnMvYWJzdHJhY3RQYWdlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BhZ2VNYW5hZ2Vycy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcGFnZU1hbmFnZXJzL3R3aXR0ZXJQYWdlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpZGdldHMvY29udGVudC9DdXN0b21pemVkRG9uYXRpb25zV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lkZ2V0cy9jdXN0b21Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vd2lkZ2V0cy90aXBwaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9jaHJvbWl1bS9jb250ZW50U2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTMgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNyAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogMTAwMDAwMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG46aG9zdCA+IGRpdiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNFNkU2RTM7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuOmhvc3QgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0UzRTNFNjtcXG59XFxuXFxuLnR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ua2V5IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxMWRkNzQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ua2V5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4udmFsdWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgbWF4LXdpZHRoOiA1JTtcXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG59XFxuXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbW1vbi9wYWdlTWFuYWdlcnMvcG9wdXAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7QUFDTjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUtBO0VBQ0UsbUNBQUE7RUFDQyxlQUFBO0FBRkg7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFIRjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQUhKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUlBO0VBQ0csOEJBQUE7QUFESDs7QUFHQTtFQUNHLDhCQUFBO0FBQUhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcclxcbiAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4IWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTMhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4IWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDchaW1wb3J0YW50O1xcclxcbiAgei1pbmRleDogMTAwMDAwMCFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcXHJcXG5cXHJcXG4gID4gZGl2IHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI0U2RTZFMztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjRTNFM0U2O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50eXBlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmtleSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMTFkZDc0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnZhbHVlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIG1heC13aWR0aDogNSU7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcblxcclxcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5lbXB0eSB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogNnB4O1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG59XFxyXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG59XFxyXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xcclxcbiAgXFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xcclxcbiAgXFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aXBwaW5nLXBvcHVwIHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgdGFiLXNpemU6IDQ7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG4udGlwcGluZy1wb3B1cCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMjkycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGlwcGluZy1wb3B1cCA+IGRpdiA+IG1haW4ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4udGlwcGluZy1wb3B1cCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRpcHBpbmctcG9wdXAgaGVhZGVyLm5vSDEge1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbi50aXBwaW5nLXBvcHVwIGhlYWRlciBoMSB7XFxuICBjb2xvcjogcmdiKDE3LCAyNCwgMzkpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGlwcGluZy1wb3B1cCBoZWFkZXIgLmNsb3NlQnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gYnV0dG9uLCAudGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMjIxLCAxMTYpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweCAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyNTIsIDIzMSk7XFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gYnV0dG9uOmhvdmVyLCAudGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gYnV0dG9uLmlzU2VsZWN0ZWQsIC50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZTpob3ZlciwgLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIC5tb3JlLmlzU2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogcmdiKDE3LCAyMDQsIDExNik7XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZSB7XFxuICB3aWR0aDogMjdweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZSBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50aXBwaW5nLXBvcHVwIC52YWx1ZVNlbGVjdGlvbiAubW9yZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUuaXNTZWxlY3RlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUuaXNTZWxlY3RlZCBpbWcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnZhbHVlU2VsZWN0aW9uIC5tb3JlLmlzU2VsZWN0ZWQgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUuaXNTZWxlY3RlZCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMjVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGhlaWdodDogMWVtO1xcbn1cXG4udGlwcGluZy1wb3B1cCAudmFsdWVTZWxlY3Rpb24gLm1vcmUuaXNTZWxlY3RlZCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udGlwcGluZy1wb3B1cCAubG9hZGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDEwcHggc29saWQgcmdiKDIyOSwgMjMxLCAyMzUpO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzExZGQ3NDtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zdWNjZXNzIHtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgbWFyZ2luOiAxLjVyZW0gYXV0byBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc2VsZWN0LXdyYXBwZXIgbGFiZWwge1xcbiAgY29sb3I6IHJnYigxMDcsIDExNCwgMTI4KTtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3Qge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QgPiBidXR0b24ge1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjA5LCAyMTMsIDIxOSk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC43NXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0ID4gYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk5IDEwMiAyNDEvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiKDk5LCAxMDIsIDI0MSksIDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0IC5uYW1lIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgZmxleDogMSAxIGF1dG87XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0IC5hcnJvdyB7XFxuICB0b3A6IDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0ID4gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWFyZ2luOiAwLjI1cmVtIDAgMDtcXG4gIG1heC1oZWlnaHQ6IDE0cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMHB4IDBweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMTBweCAxNXB4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtNHB4O1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdCA+IHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYigxNywgMjQsIDM5KTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAyLjI1cmVtIDAuNXJlbSAwLjc1cmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LmlzT3BlbiA+IHVsLCAudGlwcGluZy1wb3B1cCAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdDpmb2N1cy13aXRoaW4gPiB1bCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRpcHBpbmctcG9wdXAgLnRvZ2dsZU1lc3NhZ2VCb3gge1xcbiAgY29sb3I6IHJnYigxMDcsIDExNCwgMTI4KTtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAuNzVyZW0gMCAwLjc1cmVtIDAuMjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50aXBwaW5nLXBvcHVwIC50b2dnbGVNZXNzYWdlQm94IHN0cm9uZyB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5tZXNzYWdlQm94IHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi50aXBwaW5nLXBvcHVwIC5tZXNzYWdlQm94LmlzSGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5tZXNzYWdlQm94IHRleHRhcmVhIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweCAwcHg7XFxuICBjb2xvcjogcmdiKDU1LCA2NSwgODEpO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIwOSwgMjEzLCAyMTkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi50aXBwaW5nLXBvcHVwIC5tZXNzYWdlQm94IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDk5LCAxMDIsIDI0MSk7XFxufVxcbi50aXBwaW5nLXBvcHVwIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwIDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiByZ2IoMTcsIDI0LCAzOSk7XFxufVxcbi50aXBwaW5nLXBvcHVwIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigxMDcsIDExNCwgMTI4KTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW46IDAuMjVyZW0gMCAwO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnRpcHBpbmctcG9wdXAgcCBzdHJvbmcge1xcbiAgY29sb3I6IHJnYigxNywgMjIxLCAxMTYpO1xcbn1cXG4udGlwcGluZy1wb3B1cCAuc3VidGl0bGUge1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IHJnYigxNywgMjQsIDM5KTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnN1YnRpdGxlIC5saW5rSWNvbiB7XFxuICB3aWR0aDogMS4yNXJlbTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnN1YnRpdGxlIC50d2l0dGVySWNvbiB7XFxuICB3aWR0aDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG59XFxuLnRpcHBpbmctcG9wdXAgLnN1YnRpdGxlIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcbi50aXBwaW5nLXBvcHVwIC50b2dnbGVUZXh0IHtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiByZ2IoMTcsIDI0LCAzOSk7XFxufVxcbi50aXBwaW5nLXBvcHVwIGZvb3RlciBidXR0b24ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMjIxLCAxMTYpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweCAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGlwcGluZy1wb3B1cCBmb290ZXIgYnV0dG9uOmhvdmVyLCAudGlwcGluZy1wb3B1cCBmb290ZXIgYnV0dG9uLmlzU2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogcmdiKDE3LCAyMDQsIDExNik7XFxufVxcbi50aXBwaW5nLXBvcHVwIGZvb3RlciAubGluayB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiByZ2IoODgsIDEwMSwgMjQyKTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTMgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNyAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogMTAwMDAwMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG4ucmVzdWx0cyA+IGRpdiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNFNkU2RTM7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJlc3VsdHMgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0UzRTNFNjtcXG59XFxuLnJlc3VsdHMgLnR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4ucmVzdWx0cyAua2V5IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxMWRkNzQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ucmVzdWx0cyAua2V5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ucmVzdWx0cyAudmFsdWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcbi5yZXN1bHRzIC5pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgbWF4LXdpZHRoOiA1JTtcXG59XFxuLnJlc3VsdHMgLnRvb2x0aXAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuLnJlc3VsdHMgLmVtcHR5IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuLnJlc3VsdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG59XFxuLnJlc3VsdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5yZXN1bHRzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ucmVzdWx0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4ucmVzdWx0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbW1vbi93aWRnZXRzL2NvbnRlbnQvd2lkZ2V0U3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrQkE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNE5BQUE7QUFqQko7QUFtQkk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQWpCUjtBQW1CUTtFQUNJLFlBQUE7QUFqQlo7QUFxQkk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFuQlI7QUFxQlE7RUFDSSxvQkFBQTtBQW5CWjtBQXNCUTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXBCWjtBQXVCUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQXJCWjtBQXlCSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBdkJSO0FBeUJRO0VBbEVKLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUhBQUE7RUFDQSxlQUFBO0VBMERRLGVBQUE7RUFDQSxvQ0FBQTtF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QXlEUTtFQUNJLG1CQUFBO0FBdkRaO0FBNERJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUExRFI7QUE2REk7RUFDSSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUEzRFI7QUE2RFE7RUFDSSxZQUFBO0FBM0RaO0FBK0RJO0VBQ0ksbUNBQUE7RUFDQSxlQUFBO0FBN0RSO0FBZ0VJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUE5RFI7QUFpRUk7RUFDSSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQWhFUjtBQW9FSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBbEVSO0FBcUVJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFuRVI7QUFzRUk7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0FBcEVSO0FBdUVJO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQXJFUjtBQXdFSTtFQUNJLDhCQUFBO0FBdEVSO0FBeUVJO0VBQ0ksOEJBQUE7QUF2RVI7O0FBNEVBO0VBQ0k7SUFDSSxvQkFBQTtFQXpFTjtFQTJFRTtJQUNJLHlCQUFBO0VBekVOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIGJ1dHRvbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNyAyMjEgMTE2KTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAmOmhvdmVyLCAmLmlzU2VsZWN0ZWQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE3IDIwNCAxMTYpXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRpcHBpbmctcG9wdXAge1xcclxcbiAgICB3aWR0aDogMTZyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2IoMCAwIDAgLyAwLjI1KTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgdGFiLXNpemU6IDQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuXFxyXFxuICAgID4gZGl2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAyOTJweDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICA+IG1haW4ge1xcclxcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICYubm9IMSB7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigxNyAyNCAzOSk7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmNsb3NlQnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52YWx1ZVNlbGVjdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgIGJ1dHRvbiwgLm1vcmUge1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCAyNTIgMjMxKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAwLjA1KTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5tb3JlIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjdweDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYuaXNTZWxlY3RlZCB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9hZGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDZyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDIyOSAyMzEgMjM1KTtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMxMWRkNzQ7XFxyXFxuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdWNjZXNzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA3cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0byBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlbGVjdC13cmFwcGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxuXFxyXFxuICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigxMDcgMTE0IDEyOCk7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5zZWxlY3Qge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgICAgID4gYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjA5IDIxMyAyMTkpO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUpO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAwLjA1KTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYig5OSAxMDIgMjQxIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiKDk5LCAxMDIsIDI0MSksIDBweCAxcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGltZyB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmFtZSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYXJyb3cge1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgID4gdWwge1xcclxcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMjVyZW0gMCAwO1xcclxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEwcHggMTVweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTRweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3IDI0IDM5KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAyLjI1cmVtIDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi5pc09wZW4sICY6Zm9jdXMtd2l0aGluIHtcXHJcXG4gICAgICAgICAgICAgICAgPiB1bCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9nZ2xlTWVzc2FnZUJveCB7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4KTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46IDAuNzVyZW0gMCAwLjc1cmVtIDAuMjVyZW07XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBzdHJvbmcge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lc3NhZ2VCb3gge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjc1cmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcblxcclxcbiAgICAgICAgJi5pc0hpZGRlbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNTUgNjUgODEpO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIwOSAyMTMgMjE5KTtcXHJcXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDk5LCAxMDIsIDI0MSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMTcgMjQgMzkpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDEwNyAxMTQgMTI4KTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgICBtYXJnaW46IDAuMjVyZW0gMCAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHJcXG4gICAgICAgIHN0cm9uZyB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigxNyAyMjEgMTE2KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3VidGl0bGUge1xcclxcblxcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgICAgICAgY29sb3I6IHJnYigxNyAyNCAzOSk7XFxyXFxuXFxyXFxuICAgICAgICAubGlua0ljb24ge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMS4yNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC50d2l0dGVySWNvbiB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDFyZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9nZ2xlVGV4dCB7XFxyXFxuXFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDE3IDI0IDM5KTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBmb290ZXIge1xcclxcblxcclxcbiAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b247XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGluayB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoODggMTAxIDI0Mik7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzOHB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XFxyXFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTMgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDcgIWltcG9ydGFudDtcXHJcXG4gICAgei1pbmRleDogMTAwMDAwMCAhaW1wb3J0YW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICAgID4gZGl2IHtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkO1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweDtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U2RTZFMztcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0UzRTNFNjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAudHlwZSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmtleSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGNvbG9yOiAjMTFkZDc0O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyAnO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52YWx1ZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW1nIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvb2x0aXAge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XFxyXFxuXFxyXFxuICAgICAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIHRvcDogNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZW1wdHkge1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVGcm9tRGVmaW5pdGlvbigpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghZG9jdW1lbnRPYmplY3QpIGRvY3VtZW50T2JqZWN0ID0gZG9jdW1lbnQ7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnRPYmplY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVzLnRhZ05hbWUgfHwgJ2RpdicpO1xuICByZXBhaXJDbGFzc2VzKGF0dHJpYnV0ZXMpO1xuXG4gIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXR0cmlidXRlcy5jbGFzc0xpc3QpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB4ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdodG1sJykge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgYXR0cmlidXRlcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQoeCBpbnN0YW5jZW9mIE5vZGUgPyB4IDogY3JlYXRlKHgsIHt9LCBkb2N1bWVudE9iamVjdCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICBlbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgaWYgKF90eXBlb2YoYXR0cmlidXRlc1thdHRyTmFtZV0pID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdW3N0eWxlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0YWdOYW1lJykgey8vbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gPT09IHRydWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSk7ZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBhaXJDbGFzc2VzKG9iaikge1xuICBpZiAob2JqLmNsYXNzTmFtZSkge1xuICAgIGlmICghb2JqLmNsYXNzTGlzdCkgb2JqLmNsYXNzTGlzdCA9IFtdO1xuICAgIG9iai5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpKSk7XG4gICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gIH1cbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogJHJldHVybnMge29iamVjdH1cclxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBzZWxlY3RvciA9IChzZWxlY3RvciArIFwiXCIpLnRyaW0oKTtcbiAgdmFyIHBvc2l0aW9uID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUVsZW1lbnQoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBjYW5CZVRhZ25hbWUgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG4gICAgICBwb3NpdGlvbisrO1xuXG4gICAgICBpZiAoX2NoYXIgPT09ICcjJykge1xuICAgICAgICByZXQuaWQgPSBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcuJykge1xuICAgICAgICBpZiAoIXJldC5jbGFzc0xpc3QpIHJldC5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgcmV0LmNsYXNzTGlzdC5wdXNoKHBhcnNlVGV4dCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICdbJykge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSBwYXJzZVRleHQoWyc9JywgJ10nXSk7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnPScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXScpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJ10nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL1xccy8udGVzdChfY2hhcikpIHtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoICYmIC9cXHMvLnRlc3Qoc2VsZWN0b3JbcG9zaXRpb25dKSkge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5jaGlsZHJlbiA9IFtwYXJzZUVsZW1lbnQoKV07XG4gICAgICB9IGVsc2UgaWYgKGNhbkJlVGFnbmFtZSkge1xuICAgICAgICByZXQudGFnTmFtZSA9IF9jaGFyICsgcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNhbkJlVGFnbmFtZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVRleHQoKSB7XG4gICAgdmFyIGVzY2FwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWycuJywgJyMnLCAnLCcsICdbJ107XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMiA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKC9cXHMvLnRlc3QoX2NoYXIyKSB8fCBlc2NhcGUuaW5jbHVkZXMoX2NoYXIyKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIyO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIzID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX2NoYXIzID09ICdcIicpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMztcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyNCA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKCEvXFxzLy50ZXN0KF9jaGFyNCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IFwiXCIpIHJldHVybiB7fTtlbHNlIHJldHVybiBwYXJzZUVsZW1lbnQoKTtcbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZGVmaW5pdGlvbiA9IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXNbMF0gPT0gXCJzdHJpbmdcIikgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJzZVNlbGVjdG9yKHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pKTtcbiAgaWYgKF90eXBlb2YocGFyYW1zWzBdKSA9PSBcIm9iamVjdFwiICYmICEocGFyYW1zWzBdIGluc3RhbmNlb2YgTm9kZSkpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyYW1zLnNwbGljZSgwLCAxKVswXSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGFyYW1zID0gcGFyYW1zOyBfaSA8IF9wYXJhbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtc1tfaV07XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbS5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKCFkZWZpbml0aW9uLmNoaWxkcmVuKSBkZWZpbml0aW9uLmNoaWxkcmVuID0gW107XG4gICAgICBkZWZpbml0aW9uLmNoaWxkcmVuLnB1c2gocGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkb2N1bWVudE9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhhLCBiKSB7XG4gIHJlcGFpckNsYXNzZXMoYSk7XG4gIHJlcGFpckNsYXNzZXMoYik7XG5cbiAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIGEsIHt9LCBiKTtcblxuICBpZiAoYS5kYXRhICYmIGIuZGF0YSkge1xuICAgIHJldC5kYXRhID0gX29iamVjdFNwcmVhZCh7fSwgYS5kYXRhLCB7fSwgYi5kYXRhKTtcbiAgfVxuXG4gIGlmIChhLmNoaWxkcmVuICYmIGIuY2hpbGRyZW4pIHtcbiAgICByZXQuY2hpbGRyZW4gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2hpbGRyZW4pLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jaGlsZHJlbikpO1xuICB9XG5cbiAgaWYgKGEuY2xhc3NMaXN0ICYmIGIuY2xhc3NMaXN0KSB7XG4gICAgcmV0LmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jbGFzc0xpc3QpKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGcm9tRGVmaW5pdGlvbjogY3JlYXRlRnJvbURlZmluaXRpb24sXG4gIHBhcnNlU2VsZWN0b3I6IHBhcnNlU2VsZWN0b3IsXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBtZXJnZU9iamVjdHM6IG1lcmdlT2JqZWN0cyxcbiAgXCJkZWZhdWx0XCI6IGNyZWF0ZVxufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF8wPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjb25zdCBfMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO2NvbnN0IF8yPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMS5hcHBlbmQoXzIpO2NvbnN0IF8zPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtjb25zdCBfND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJjdXN0b21IZWFkZXJcIl0pO18zLmFwcGVuZChfNCk7XzEuYXBwZW5kKF8zKTtjb25zdCBfNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEuYXBwZW5kKF81KTtjb25zdCBfNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO182LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VCdXR0b25cIik7XzYuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImNsb3NlXCJdKTtfNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjbG9zZVwiKTtfMS5hcHBlbmQoXzYpO2NvbnN0IF83PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMS5hcHBlbmQoXzcpO2NvbnN0IF84PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtjb25zdCBfOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjkpO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgIFwiKTtfOC5hcHBlbmQoXzkpO18xLmFwcGVuZChfOCk7Y29uc3QgXzEwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18xLmFwcGVuZChfMTApO18wLmFwcGVuZChfMSk7Y29uc3QgXzExPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18wLmFwcGVuZChfMTEpO2NvbnN0IF8xMj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtjb25zdCBfMTM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMi5hcHBlbmQoXzEzKTtjb25zdCBfMTQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XzE0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9nZ2xlVGV4dFwiKTtjb25zdCBfMTU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wiY3VzdG9tVGV4dFwiXSk7XzE0LmFwcGVuZChfMTUpO18xMi5hcHBlbmQoXzE0KTtjb25zdCBfMTY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgXCIpO18xMi5hcHBlbmQoXzE2KTtjb25zdCBfMTc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO18xNy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZ2dsZUlucHV0XCIpO18xNy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtfMTIuYXBwZW5kKF8xNyk7Y29uc3QgXzE4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgIFwiKTtfMTIuYXBwZW5kKF8xOCk7Y29uc3QgXzE5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzE5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmFsdWVTZWxlY3Rpb25cIik7Y29uc3QgXzIwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzE5LmFwcGVuZChfMjApO2NvbnN0IF8yMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18yMS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18yMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiMVwiKTtfMjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpc1NlbGVjdGVkXCIpO2NvbnN0IF8yMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMjEuYXBwZW5kKF8yMik7Y29uc3QgXzIzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8yND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiQxXCIpO18yMy5hcHBlbmQoXzI0KTtfMjEuYXBwZW5kKF8yMyk7Y29uc3QgXzI1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzIxLmFwcGVuZChfMjUpO18xOS5hcHBlbmQoXzIxKTtjb25zdCBfMjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgICAgIFwiKTtfMTkuYXBwZW5kKF8yNik7Y29uc3QgXzI3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzI3LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzI3LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCIyXCIpO2NvbnN0IF8yOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMjcuYXBwZW5kKF8yOCk7Y29uc3QgXzI5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8zMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiQyXCIpO18yOS5hcHBlbmQoXzMwKTtfMjcuYXBwZW5kKF8yOSk7Y29uc3QgXzMxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzI3LmFwcGVuZChfMzEpO18xOS5hcHBlbmQoXzI3KTtjb25zdCBfMzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgICAgIFwiKTtfMTkuYXBwZW5kKF8zMik7Y29uc3QgXzMzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzMzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzMzLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCI1XCIpO2NvbnN0IF8zND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMzMuYXBwZW5kKF8zNCk7Y29uc3QgXzM1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8zNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiQ1XCIpO18zNS5hcHBlbmQoXzM2KTtfMzMuYXBwZW5kKF8zNSk7Y29uc3QgXzM3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzMzLmFwcGVuZChfMzcpO18xOS5hcHBlbmQoXzMzKTtjb25zdCBfMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgICAgIFwiKTtfMTkuYXBwZW5kKF8zOCk7Y29uc3QgXzM5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzM5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9yZVwiKTtjb25zdCBfNDA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzM5LmFwcGVuZChfNDApO2NvbnN0IF80MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO180MS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzQxLnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJwZW5cIl0pO18zOS5hcHBlbmQoXzQxKTtjb25zdCBfNDI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzM5LmFwcGVuZChfNDIpO2NvbnN0IF80Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfNDQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkXCIpO180My5hcHBlbmQoXzQ0KTtfMzkuYXBwZW5kKF80Myk7Y29uc3QgXzQ1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18zOS5hcHBlbmQoXzQ1KTtjb25zdCBfNDY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO18zOS5hcHBlbmQoXzQ2KTtjb25zdCBfNDc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMzkuYXBwZW5kKF80Nyk7XzE5LmFwcGVuZChfMzkpO2NvbnN0IF80OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE5LmFwcGVuZChfNDgpO18xMi5hcHBlbmQoXzE5KTtjb25zdCBfNDk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMi5hcHBlbmQoXzQ5KTtjb25zdCBfNTA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfNTAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3Qtd3JhcHBlciBuZXR3b3JrU2VsZWN0aW9uXCIpO2NvbnN0IF81MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO181MC5hcHBlbmQoXzUxKTtjb25zdCBfNTI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO181Mi5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXR3b3JrXCIpO2NvbnN0IF81Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5ldHdvcms6XCIpO181Mi5hcHBlbmQoXzUzKTtfNTAuYXBwZW5kKF81Mik7Y29uc3QgXzU0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzUwLmFwcGVuZChfNTQpO2NvbnN0IF81NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO181NS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdCBuZXR3b3JrU2VsZWN0XCIpO181NS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgdmFyaWFibGVzW1wibmV0d29ya3NcIl1bXCIwXCJdW1wiY29kZVwiXSk7Y29uc3QgXzU2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO181NS5hcHBlbmQoXzU2KTtjb25zdCBfNTc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfNTcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfNTcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXR3b3JrXCIpO2NvbnN0IF81OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzU3LmFwcGVuZChfNTgpO2NvbnN0IF81OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO181OS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wibmV0d29ya3NcIl1bXCIwXCJdW1wiaW1nXCJdKTtfNTkuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO181Ny5hcHBlbmQoXzU5KTtjb25zdCBfNjA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO181Ny5hcHBlbmQoXzYwKTtjb25zdCBfNjE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XzYxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfNjI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wibmV0d29ya3NcIl1bXCIwXCJdW1wibmFtZVwiXSk7XzYxLmFwcGVuZChfNjIpO181Ny5hcHBlbmQoXzYxKTtjb25zdCBfNjM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO181Ny5hcHBlbmQoXzYzKTtjb25zdCBfNjQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfNjQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtfNjQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImFycm93XCJdKTtfNTcuYXBwZW5kKF82NCk7Y29uc3QgXzY1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO181Ny5hcHBlbmQoXzY1KTtfNTUuYXBwZW5kKF81Nyk7Y29uc3QgXzY2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO181NS5hcHBlbmQoXzY2KTtjb25zdCBfNjc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO182Ny5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO182Ny5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwibGlzdGJveFwiKTtjb25zdCBfNjg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO182Ny5hcHBlbmQoXzY4KTtsZXQgXzY5PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtmb3IobGV0IFtfZm9yZWFjaEtleSxfZm9yZWFjaFZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXSkpe2xldCBuZXR3b3JrID0gX2ZvcmVhY2hWYWx1ZTtjb25zdCBfNzA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfNjkuYXBwZW5kKF83MCk7Y29uc3QgXzcxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtfNzEuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm9wdGlvblwiKTtfNzEuc2V0QXR0cmlidXRlKFwiZGF0YS1uZXR3b3JrXCIsIG5ldHdvcmtbXCJjb2RlXCJdKTtjb25zdCBfNzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzcxLmFwcGVuZChfNzIpO2NvbnN0IF83Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO183My5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbmV0d29ya1tcImltZ1wiXSk7XzczLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfNzEuYXBwZW5kKF83Myk7Y29uc3QgXzc0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO183MS5hcHBlbmQoXzc0KTtjb25zdCBfNzU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Xzc1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfNzY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV0d29ya1tcIm5hbWVcIl0pO183NS5hcHBlbmQoXzc2KTtfNzEuYXBwZW5kKF83NSk7Y29uc3QgXzc3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzcxLmFwcGVuZChfNzcpO182OS5hcHBlbmQoXzcxKTtjb25zdCBfNzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO182OS5hcHBlbmQoXzc4KTt9XzY3LmFwcGVuZChfNjkpO2NvbnN0IF83OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfNjcuYXBwZW5kKF83OSk7XzU1LmFwcGVuZChfNjcpO2NvbnN0IF84MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO181NS5hcHBlbmQoXzgwKTtfNTAuYXBwZW5kKF81NSk7Y29uc3QgXzgxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfNTAuYXBwZW5kKF84MSk7XzEyLmFwcGVuZChfNTApO2NvbnN0IF84Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEyLmFwcGVuZChfODIpO2NvbnN0IF84Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO184My5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC13cmFwcGVyIHRva2VuU2VsZWN0aW9uXCIpO2NvbnN0IF84ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO184My5hcHBlbmQoXzg0KTtjb25zdCBfODU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO184NS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2tlbkJ1dHRvblwiKTtjb25zdCBfODY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb2luOlwiKTtfODUuYXBwZW5kKF84Nik7XzgzLmFwcGVuZChfODUpO2NvbnN0IF84Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO184My5hcHBlbmQoXzg3KTtjb25zdCBfODg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfODguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3QgdG9rZW5TZWxlY3RcIik7Xzg4LnNldEF0dHJpYnV0ZShcImRhdGEtc3ltYm9sXCIsIHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJzeW1ib2xcIl0pO2NvbnN0IF84OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfODguYXBwZW5kKF84OSk7Y29uc3QgXzkwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzkwLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzkwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9rZW5CdXR0b25cIik7Y29uc3QgXzkxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfOTAuYXBwZW5kKF85MSk7Y29uc3QgXzkyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzkyLnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJ0b2tlbnNcIl1bXCIwXCJdW1wibG9nb1VSSVwiXSk7XzkyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfOTAuYXBwZW5kKF85Mik7Y29uc3QgXzkzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfOTAuYXBwZW5kKF85Myk7Y29uc3QgXzk0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO185NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hbWVcIik7Y29uc3QgXzk1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJuYW1lXCJdKTtfOTQuYXBwZW5kKF85NSk7XzkwLmFwcGVuZChfOTQpO2NvbnN0IF85Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzkwLmFwcGVuZChfOTYpO2NvbnN0IF85Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO185Ny5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO185Ny5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiYXJyb3dcIl0pO185MC5hcHBlbmQoXzk3KTtjb25zdCBfOTg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzkwLmFwcGVuZChfOTgpO184OC5hcHBlbmQoXzkwKTtjb25zdCBfOTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7Xzg4LmFwcGVuZChfOTkpO2NvbnN0IF8xMDA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO18xMDAuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtfMTAwLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJsaXN0Ym94XCIpO2NvbnN0IF8xMDE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMDAuYXBwZW5kKF8xMDEpO2xldCBfMTAyPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtmb3IobGV0IFtfZm9yZWFjaEtleSxfZm9yZWFjaFZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YXJpYWJsZXNbXCJ0b2tlbnNcIl0pKXtsZXQgdG9rZW4gPSBfZm9yZWFjaFZhbHVlO2NvbnN0IF8xMDM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfMTAyLmFwcGVuZChfMTAzKTtjb25zdCBfMTA0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtfMTA0LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJvcHRpb25cIik7XzEwNC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgdG9rZW5bXCJuZXR3b3JrXCJdKTtfMTA0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ltYm9sXCIsIHRva2VuW1wic3ltYm9sXCJdKTtjb25zdCBfMTA1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO18xMDQuYXBwZW5kKF8xMDUpO2NvbnN0IF8xMDY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTA2LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0b2tlbltcImxvZ29VUklcIl0pO18xMDYuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xMDQuYXBwZW5kKF8xMDYpO2NvbnN0IF8xMDc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzEwNyk7Y29uc3QgXzEwOD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTA4LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTA5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRva2VuW1wibmFtZVwiXSk7XzEwOC5hcHBlbmQoXzEwOSk7XzEwNC5hcHBlbmQoXzEwOCk7Y29uc3QgXzExMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xMDQuYXBwZW5kKF8xMTApO18xMDIuYXBwZW5kKF8xMDQpO2NvbnN0IF8xMTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMDIuYXBwZW5kKF8xMTEpO31fMTAwLmFwcGVuZChfMTAyKTtjb25zdCBfMTEyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMDAuYXBwZW5kKF8xMTIpO184OC5hcHBlbmQoXzEwMCk7Y29uc3QgXzExMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO184OC5hcHBlbmQoXzExMyk7XzgzLmFwcGVuZChfODgpO2NvbnN0IF8xMTQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO184My5hcHBlbmQoXzExNCk7XzEyLmFwcGVuZChfODMpO2NvbnN0IF8xMTU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgXCIpO18xMi5hcHBlbmQoXzExNSk7Y29uc3QgXzExNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xMTYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2dnbGVNZXNzYWdlQm94XCIpO2NvbnN0IF8xMTc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCLwn5eo77iPIFwiKTtfMTE2LmFwcGVuZChfMTE3KTtjb25zdCBfMTE4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7Y29uc3QgXzExOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFkZCBhIG1lc3NhZ2VcIik7XzExOC5hcHBlbmQoXzExOSk7XzExNi5hcHBlbmQoXzExOCk7XzEyLmFwcGVuZChfMTE2KTtjb25zdCBfMTIwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgIFwiKTtfMTIuYXBwZW5kKF8xMjApO2NvbnN0IF8xMjE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMTIxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVzc2FnZUJveCBpc0hpZGRlblwiKTtjb25zdCBfMTIyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEyMS5hcHBlbmQoXzEyMik7Y29uc3QgXzEyMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XzEyMy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiVGV4dDFcIik7XzEyMy5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMjBcIik7XzEyMy5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiMlwiKTtfMTIzLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjQ1XCIpO18xMjMuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJIZXksIEkgbG92ZSB5b3VyIHdvcmssIGtlZXAgZ29pbmch8J+UpVwiKTtfMTIxLmFwcGVuZChfMTIzKTtjb25zdCBfMTI0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTIxLmFwcGVuZChfMTI0KTtfMTIuYXBwZW5kKF8xMjEpO2NvbnN0IF8xMjU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzEyLmFwcGVuZChfMTI1KTtfMC5hcHBlbmQoXzEyKTtjb25zdCBfMTI2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18wLmFwcGVuZChfMTI2KTtjb25zdCBfMTI3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7Y29uc3QgXzEyOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEyNy5hcHBlbmQoXzEyOCk7Y29uc3QgXzEyOT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18xMjkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMTI5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VuZFwiKTtjb25zdCBfMTMwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEyOS5hcHBlbmQoXzEzMCk7Y29uc3QgXzEzMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfMTMyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcImJ1dHRvblZhbHVlXCJdKTtfMTMxLmFwcGVuZChfMTMyKTtfMTI5LmFwcGVuZChfMTMxKTtjb25zdCBfMTMzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTI5LmFwcGVuZChfMTMzKTtfMTI3LmFwcGVuZChfMTI5KTtjb25zdCBfMTM0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18xMjcuYXBwZW5kKF8xMzQpO18wLmFwcGVuZChfMTI3KTtyZXR1cm4gXzB9XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZG1sbGQwSnZlRDBpTUNBd0lESXdJREl3SWlCbWFXeHNQU0lqT1dOaE0yRm1JaUIzYVdSMGFEMGlNakJ3ZUNJZ2FHVnBaMmgwUFNJeU1IQjRJajROQ2lBZ0lDQThjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaURRb2dJQ0FnSUNBZ0lDQWdaRDBpVFRVdU1qa3pJRGN1TWprellURWdNU0F3SURBeE1TNDBNVFFnTUV3eE1DQXhNQzQxT0Rac015NHlPVE10TXk0eU9UTmhNU0F4SURBZ01URXhMalF4TkNBeExqUXhOR3d0TkNBMFlURWdNU0F3SURBeExURXVOREUwSURCc0xUUXROR0V4SURFZ01DQXdNVEF0TVM0ME1UUjZJZzBLSUNBZ0lDQWdJQ0FnSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJdlBnMEtQQzl6ZG1jK1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSbm9CQUFCWFJVSlFWbEE0VEc0QkFBQXZHQUFHRUwrQ29HM2JlUHZQbjlSNWhZYkN0bTBiZHZ6LzhCSkJ0azFuZEgrNXM0MGt5Y25NUFZwNG1LUkFDdVNmRG9YL0crQ2Z0VUFSUUlGVENLQVF3QUE3UkFrUkJFRTRxTkVKRFVGaGx5QllvQ1RBQXFHaEk1andJM2pLQmlIa29PT1BGd29JZ21BWXhHM28xT29OaFIxQ0NMRmloaWdjMGdMTUVFSVVSTDNkQldmMkdRSUl0bTBkYjA2YlduRlNJN1p0MjYrWS8xUis1ZXNNSXZxdndHM1VCbzVOZDErQkZVYzZVZFQ0Y3lURHBKcU1SV1NrZ29RbWFnaG9vb2FnTHR2SnpvRGpzcSsvbGc3SDhOM1RwZWJEWHRiUi9UYlRaWFpsRUxCWERyTEtYQmpwMllzdHM2ajZlSGkveDk1WXBHM1lYNERBb09Mbkx1N0dscDhYVG5ER2I3RTMra25DUTlsWEg0R2IvRXFXaFd2QVVUbklJTllTa1hVUmVKdUp5UFFEU0cxRXBCM1NsUWY0TmFnckMwVmlVUEZacEU5eDZlbG1Qd2s4ZVRsVEd3Yjg1YXp2YjVrNXg4US94aHYzYTNMc3h2bFNmaU5JS0w4cUpLeit3VDkrRGdvd2lRcU8vVTcxL3d3PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5pQjNMVFlnZEdWNGRDMW5jbUY1TFRVd01DQnRiQzFoZFhSdklpQm1hV3hzUFNKdWIyNWxJZzBLSUNBZ0lDQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSE4wY205clpUMGlJelppTnpJNE1DSWdjM1J5YjJ0bExYZHBaSFJvUFNJeUlpQjNhV1IwYUQwaU1qUndlQ0lnYUdWcFoyaDBQU0l5TkhCNElqNE5DaUFnSUNBOGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDJJREU0VERFNElEWk5OaUEyYkRFeUlERXlJaTgrRFFvOEwzTjJaejQ9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBTUFBQUNkdDRIc0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQU1BVUV4VVJVeHBjV3g3YlAvLy8renY4T3Z1Nyt2dTcvLy8vLy8vLyt2dTcvLy8vK3p2OEwrL3YrdnU3K3J0N3VydDd1enY4T3p2Ny9MMTl1M3Y4T3Z0N3UzdzhlcnU3dXZ1Nyt6dzhlM3c4YUZrLys3eTlPenY4T3p1OE8veTh1enY4UEwxOXNDcXF1bnM3UEQwOWU3dTd1dnY3K2Z0N2ZEeTlPN3k4dXZ1N3V6dTcrcnU3OHpNek92cjcrL3o4K3JzN3U3eDgrenY4ZXZ1OE8zdzhlN3c4dXp1NytqbzYrWG41L0wxOXZIMTl2TDE5dXZ1Ny9EejllN3k5T3Z1NysveTgvSHo5ZS96OVBIMTl2RHo5T3pzN092dzhPdnk4dTN3OG4vLy8vRDA5ZkgwOWU3eDhlM3c4ZTN3OGV2djcrdnY4T3p2OE8zeDhldnY3K3Z3OFBMMTllN3g5T3Z0N3V6dzhldnY4Tzd4OHU3eTgrM3c4dXp2OEM4d01JS0RoQk1URXpRMU5UVTJOdXZ1NytydDdvU0ZoakV5TXUveTgvWDQrUkVSRVMwdUxvT0VoZmI1K2pJek0vRHo5Tzd4OG54OWZlbnM3VEF4TWZQMjkvTDE5djMvLyszdzhmTDE5L3ovL3hVVkZYdDhmWUdDZy9qOC9EYzRPUFQ0K0NRbEpSUVVGUDcvLzRXR2gzeDlmaWNvS1AvLy8vcjkvMytBZ1llSmlmcjkvaTR2THpNME5Dc3NMUGY2KytucjdQVDMrSHA3ZkNrcUtpSWpJMzUvZ0gxK2Z5b3JLelkzTjliWTJkZmEyeGNYRitYbzZmbjgvZnYvLzRtS2k0Q0Jnc2ZKeXVmcDZ2ajcvZlQ0K1F3TkRBUUVCUER6OUxPMXRUMCtQdEhUMUNFaElSOGZINnV0cmlNa0pGMWVYaVluSjBORVJFVkdSdlg1K3JhNHVZK1FrY0hEeE43aDRveVBqNlducUZOVlZRY0hCL0R6OVd4dGJwV1dsOHpPejc3QXdhR2pwRXRNVEJzYkczZDRlWnllbjNSMmR1UG01M2g1ZXVqcTYrSGs1WmlabXNUSHlOdmUzckN5czZtc3JkUFYxb0tFaFdSbFplcnQ3eGdaR1p1Y25majcvTjNnNFZwY1hKS1VsV1pvYUtDaG9zakx6THE5dnF5dXIvSDE5czNRMFRVMU52YjYrMjV3Y0dscmE4ck56a0ZDUWljbko5bmIzT0RpNC9MMjkxRlNVMkJpWWtkSlNidSt2ejlCUVNNakk4SEV4ZXp3OFZkWldlL3k5S2lxcTdDeXNxU21wMHhOVGpvN081YVltYzNQMEU1T1R2VDI5L0gwOVZaWFdIRnpjNTZnb0dKalk3aTZ1NGErM0dFQUFBQmJkRkpPVXdBQkF2ejkrd1FCL2dQNEJQcjgvdjI2OU5iNytoaU9LZTBCanV0ZXFHTG5BMkg4Rm9jVmQ0NlErTmdGS0VFL3JhbHI3NC9xTGl5L3d2M0ViVzNIL29hRzYrb2NlQ2gzQXRQU1hmZlFrTkhPcmFocjlWM1B6dGIrL29hcXZkd3hBQUFIRTBsRVFWUll3NDFYZDF3VFp4ait3QXQzQVZFY1FLbTBiaEZYVzBXNzY5NnIyejh1TWNrbGw1RGtJbG1GcEdrZ0NXVVRDQ05TRkZ3LzkxYmNvdzdjMVZhcHRxNnFIWGJ2M1hSK2R3RzkreTVndno4Z3Y3dDduM3ZYUGUvekFpQTZLVEh3VC9Ua0dmY25kTStJSmV5eEdkMFQwbDVNeHVIRkdCemMrK0JTQUtURFI4MksxYllZTExTZEpPMjB4ZENpbmZseTJ2QTRlT2VlRU5CODRxRHBXcHZCaEdGWVY0S0VoK2dLZjVvTU51MjBRWW5jQXgyY2FCd2tqaDF2ODNlUllKd3RQQ29WOTQvQUpGMjAyUlBHOWdkNGRFZXZqM3F5dDQyV1lPU2RvNkpwVmR0dlRNSms5MzRxQ3NTMUgvMllSN01aQ1VIeTdFUEI0TFU3Q0NRQklSNGIzVTRtY0J3ODJLMUZZRTZTbEhiYkxTM0Z1MEJJNnJzOXlENGJ3UjRmOVRvZFR3cnRyUjhlSzExWG44Vy9GazhYcGFXSUVhTHd1QWZ5TWVIcllRbVhiS3ZRYkZwaVV2RXZFcDN5SDRqRG81RDNwL1I1S0s4ellrNVMvalBlYXRjYWo5QUZrdXljOTVCVTZBTXV4Ui9PaXhmWmh4WTJxTDIxeFptTnl5amhuZmk4aDNGQkptTkFVcjdvL2JDRUY3eWVCVXJ6eGcwaEZYS3JjLzVnRU1PdmY5OUZQVVgybEdXN1E2OWVvTXcwZm4wUURZTHN1YWp2M2Fic0E1SmY2TmRGL1A3bXhRMXlGc0JjdXVwZEJ2R2hTNzl1dzBCMFd3S2tUNzhhTDNiZzA3Y2NhZzVBWmd3Y2JrRmRpSzkvSXJvMURWTHdmTFpFbkFEcjZpcTlQQXdnTTFjZU1DQjVKQ1haajRTRHdQR0J2Ujd2U29yUHZ1bzdBQnJmWjNiME5zSDA2cy9WVWdvR1JIQ0E4bCtwVU12YkFHQVErK3JMa1VkNjJBYXdMdUJnNEgwTUljNWdrOGNwdnd0Z3psUUdyVWdReERNakU4RlVXTTFKdGdnWkNCMTBxSGtBTXVQNnZlSXMyS2F3elRCMGlCOFR0OENIYkFKNEFETE54cFZvSlRyNWh3eUZTUmloRmRtVDl2SnRCU2hBNVJmSFRjaGptSFlFVEdKU25rU2N3WlZjQnZrQXNwTEFZclFmSmJZa1dJU1hESmdvQVovSTI0N2UwUVlBejM2L01BM1lsamt4SURuV2hOWkF4Unp4aGdOd3lnc0xhdHZNamU3UExlOEk2MkJLSHdaU3QyQ2lESjdpS3VCMDZndmxlemV2L2Rpc2FVVll2eE1KQXRPbWdzRkxFUUNWNlkzRkRYcG9yaTRzZUh1VEpqTlhkOTVkckRHenpWRHoxVzFhOEZGaFMyZURCRFFGbE9XcVErMTBlZ29yTHE2U2FXcU5PVHFkcm01TktZUW9OZ1lXQ0V1SkdSSkFkd3VCWlBCc2xWUHU4UnpkNVNvMktwVktUWTV1L255ZExuZHREUnRKelRkQ2pyYk9BeG1pUHQ1WHRWaTk5MDJGckVTcFZDakNBUERvNWgveXlVcDh1d1M5UU5BWklOYU9ESUlERFhJWXVrd0JyUlU4QU5hTjgyNmorOElpZmhEMmRJQitSS2NMTnNEUWxXRnpBUUFMVVJkUVhMZnk4MGdBQXUzQkVyZkMxV2FPQU16UHlkbTkvUDB5UVRlQmRHRUlxdTh2djFkVGZCZUJENUJidDN6Mzc2ZXU4UjJ3eDRJTVd1aUQzVy85OFhlZjBTVUdxTk90ME95MEdtZ0JLMldBZVZZQmdPa0V4UmlPWC9yRnA2d1ZBdVRrcmppa1gzSmpXZFpDWGgwSVMzZTBrZWltSDRJaHVpeDR0TGlVaTZNVmdBMytuN05MUTJXTmZ3VjVETTgyMG14aEsxUCt4dW96emN3MTdmYUxsV1lJd1FIQTRGZDg5RytaMWRCMGJ1TVBSUlMvbFFlRFZJUlBLTzJab3p1Mms3VGY5Tk5tWDRtTEJjalJyZkNkcExVVzh1K1BjczVsWndtKzUxUXdMRjMwT1o5MGVIOWR6ZEJsSndvL3FIU1YxT1h1emoxOHV5WGt2N0xMSGZpVHRLdjRuM05zTW9pWmczelBLdWEwV2w5VnRiTXB4SlJkdjFWYXVuejNyc3N0SWNQWm16NmZwdVEzdjhBQncxekk2MGtvS2JORDFhTjNlTFllWjZ4L2JQMjU5dW95eTdMbUhZcjFaa1hnb0hBNFNQSWdwVVVnVlZWb3AwT3RkMVpzYXpUUlpjM05aYTh3YjIwT1pCcEwxdDlFbUowalZSelNlaWVVVXBic2dLU3NMdkFlQ1lZWXEvYlVCbmVOMGF5cDNOeU0wQW1rZFZaYlRCRU5Gc3E2dW9BbFZMMjNZVjN6NllwU3Q5SE04dEdCRzFrSUtVK0M1bE5CNHNobkNCR3ZiK1Y0WFM5M0ZHNWF3M0dpY2MyT29uSmt1dDQzRUU1R2RyamFlb2hHaSttQ2w1c01ubVBzMjFsSzNyQ0hWQ0h6blJ1dWNMejM3OFdJbWIycDBNbFN1N3E2bGh1dXBTNTB1SFo5dk5mQXNGU1Rna2ZFODUyeU5IS3pvWFV5YWR6cldzcmJFUmhRNGtRL1VTL1dlTloxN0hRSUF4Z0R4OURKR2wvL3RMUk42VVdEeWQzRUlzdWVkUWxxbkxCRzh2MWNMbFNyck1oS2h1cXNJNWxIaFlMT3NBZm00dUpHYlZZSE1vOXRoc0g1RVlUdWw2MDZNWEFTcVNBVW1rbDhvZG1PMUZVeDd6dWdVdFc0My9PclVLbjduRkRxd2xwS3hXS2JsWnBPcjZ0eTFidUkxTzJjOTJ5ZktEeUMzTzlFb0xYY1gxRHQycmhWV0FFQ2l5RDNXUjlTMG9wRUM0ZGw1ZUhLYzBXaWhTTXE4c29DVjU1NlpPVWhtY0x2dmhXUVVMc3JEN2Qwalg0TVdib29hM0MxaGVLWjc4bCtkRXo3NjJjY3UvWkJDUDdheHpEVTNiV1B0blcwOW9VWHovN2pKbVJySXkrZXI5bkdqMHZzY1BFTXI3NkpnNlpGWG4ybkQ1cDRyOVczZGZtT0d6NTc3a3poOGgwN2E5Unc2ZjladmxrSXRrZng1QmxwQ2ZNeTBra2lQV05lUWxycU1OYnhtQlR4MC84QnNQOEQ1T1dkNHM4QUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmh3Q0FBQlhSVUpRVmxBNFRBOENBQUF2R0FBR0VEL2tJSklrUmFvbi8yNTVwdXBKaE1PMmpSeUpIL3J2TjQwbElDanlmelMyalNRcHFqM3JtY245UEQ3L3JQNjJEcURPd3FnWlJTQUVrUkZHS0lvaUl3UmhGR0Z1anZ0dnRqbUsxKzN4bjZPdy9acEEySXBRL0lZZFJNZ2NqdGR0anRmdDhkdnJkdjJzQ0x2OVJjV01vcllqRkxZaU9INUlNTncyaUIyejdTQXl3MUdFMmkrQmhJUWZLaVIwVVlsQWhJd0l4T1hkRFFFdEJEeXd3QXNEZkRCQndBNEJEUVFVQ0VDUWJkdDA5R003YmR1MmJkdkdpZC83c1kyQmYzUjZCaEg5WitTMmpTUEpVMjVsMTY5Z2VIcGpxVXpGN1hCWE1xbVlseEV6a2k2NHdOZFZTRWRFU09TY0VOT1pTd2hJbHZDSEtDWDUreUlBbjU4VlRaSGJSck1BL0s5YlI5OVVMTmtvdzZRZG9KODdiVEw5eEJYeENYR2ttWGdlNUxwZlZUL1hxNjVkZkJOSlBwNXlnVXhLeDIvcDEyNlRZczlQL1lKRFV4a0FRelVQZmlDOHJEdGd6dy9lV1Y0eVpZNjZSd0xRay9Yck9aT2krL2lIQUNoN0FBeGI3L3p3K1orV0dwUWRJeWJEOUQwQlBBNkF6RXE2enZDKzJpeHYzZmpBYWFka2xnQU9EMER1WjR6bTBYWkY0L0t6SHdoZUdZWUJlTW9BeU85eGo5STJmN04yVGdGNlorRW9ad0FBN01maHBYOWJzeElDQWpkR2prektCZjZHK2pkbExmdmY1S0pQTWtYZ1NzWHpFT2g3V2JCckIyZHJWQU0zQlBrNDk0OEVFbkl4cHBlMTdYeFNPTks4dnlvaS9UN2Nldlh6L2lxL0IyS3lmaCt2QjlVM3AvcXUvYk9kMWZlWkFRQT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROU0IzTFRVaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TUNBeU1DSWdabWxzYkQwaUl6QXdNQ0lnZDJsa2RHZzlJakl3SWlCb1pXbG5hSFE5SWpJd0lqNE5DaUFnSUNBOGNHRjBhQ0JrUFNKTk1UTXVOVGcySURNdU5UZzJZVElnTWlBd0lERXhNaTQ0TWpnZ01pNDRNamhzTFM0M09UTXVOemt6TFRJdU9ESTRMVEl1T0RJNExqYzVNeTB1TnpremVrMHhNUzR6TnprZ05TNDNPVE5NTXlBeE5DNHhOekpXTVRkb01pNDRNamhzT0M0ek9DMDRMak0zT1MweUxqZ3pMVEl1T0RJNGVpSXZQZzBLUEM5emRtYytcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBRFEwbEVRVlI0WHRYWk1XNFVRUkNGWVk3QUVaeVpDM0FCVHNBRk9BRUppU1ZIaEtRRUpJU2tYQUdSSTVBUVFyTGtBQW1SbUJDY0VCQVpqWVZYOHJkVjNiVXpzN1BqWC9xVGZhOTd1bnFOMkxYdjNWdUk0NU9QUDQ1UFBsMFZ2WFQ5blNNWWFwTHV2MW84K056NnZGV3c0NC8zWEs3am4wbHdzRVgxUEl2aFFRNnQ1OXNyUG53dGVzN1o4WUZyMVhQUGdnOVp1NTUvRW02K3E2ZHZ2Mis5MXZQeHk3T3JoODgvYjcyK2k4NHhDamV0S3VZOXhieXE4K3lFbTFYTXNOY3p3MTVGNXlyalJpM2ZuLzMyckxldzM3UEYrYzgvVy8yV3psWENUVnIyc0YrMWgvMld6dGZFeFMxYjJCMXJDN3N0blRQRmhaa1o5dVl5dzE2bWM0YTRLRFBEWHFhWVoyYll5M1RlVzFTLzFXWFlheW5tTFRQc1pUcjNCb3VSR2ZaNmlublBESHVSenIzQlltU0VuWXBpWGpIQ1R1VFJzeS8zblgzUjRhTzl6S3RHMklsMC9sRVhZTjZ6aXV0Nmlubms1T0VIN0dTT3dUMWFSdGlKbkhRQjVpM0g0ajR0eFR5eWZBRVJkaklqN0dUZEo2L1B0enFaRVhaMDlBV1l0eFJ6RmZPV1lxNy9oKzkvK0JIenpPRWRGRHNxNWkzRlBMTDc3ajk5ODgxOXR6cVpyOTVkdUhTck02Y3lmRVczbzkwTEVQT2VZajYzWXE2TFg4QU45dVpTelBWZ0Z4RGgyakdLdWU3OUFxSTlLcmhIVlRIWFJTNGcyNnVINnl1S3VTNTZBVGNPdi9PdjR0cWVZcTRIdVlESWkxOS9mZFExOW5xS3VhN21BbTZNc05OU3pIVjFGeEQ5ZmNGT1N6SFg0UUl1ZlZIRlBGUE1NOFU4VTh3ajkvcGxTTXdqSSt4a2lybnUvZHRnaEIwVjg1WmlycU12WU1CT1pvU2RNVjJOc0tQbEN4Z1U4OHhkL3M4WDkyb3A1cEdiQzZoY1FvU2RscnZpK3BZUmR2VFc4SlVMR0JUem5oVmNVMUhNSTUzL0drc2FZYWVxbUZlTnNLTVBUajhjT2ZzMUZpTWo3RlFVODRvUmRpS2RlOE54NFVQUllJU2RubUxlTThKT3BuUGZ3bkpraHIyV1l0NHl3MTZrODRhNEtETEQzdHhtMklzTS95Z2E0Y0xNRm5hbjJzSnVwbk0yY1hGbUQvdTcyc04rcHZPVmNKT1dQZXozN1BIb3hkZXROWm5PVmNhTmVyYXcyN09GM1o3T3RSTnVWakhDVHM4SU94V2RaeFJ1V25YSzRhZXN2ZEU1SnVIbWE5Znp6NElQV2F1ZWUzWjg0RnIwbkh2Rmh4OWF6N2NZSG1ScHl4OXY5NG1IV2tyUGNYQ0dkOE5Eem0zNnk0eTE0Y0duNnY1M0RnZnE2ZnA5OFEvdHdwbWF1NkhVNFFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImV4cG9ydCBjbGFzcyBSZXF1ZXN0TGltaXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihsaW1pdHMgPSBbe3RpbWU6IDEwMDAsIGFtb3VudDogNDB9XSkge1xyXG4gICAgICAgIHRoaXMubGltaXRzID0gbGltaXRzO1xyXG4gICAgICAgIHRoaXMud29ya2luZyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2FpdGluZyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzR29vZChob3dNdWNoID0gMSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgbGltaXQgb2YgdGhpcy5saW1pdHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLndvcmtpbmcuZmlsdGVyKHggPT4gbm93IC0geC5zdGFydCA8PSBsaW1pdC50aW1lKS5tYXAoeCA9PiB4LmNvdW50KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ICsgaG93TXVjaCA+IGxpbWl0LmFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNjaGVkdWxlT25lKGl0ZW0sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVHcm91cChbaXRlbV0sIGNhbGxiYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIHNjaGVkdWxlTWFueShhcnJheSwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgZ3JvdXBzID0gW107XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMubGltaXRzWzBdLmFtb3VudDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XHJcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGFycmF5LnNsaWNlKGksIHNpemUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGdyb3Vwcy5tYXAoeCA9PiB0aGlzLnNjaGVkdWxlR3JvdXAoeCwgY2FsbGJhY2spKSlcclxuICAgIH1cclxuXHJcbiAgICBzY2hlZHVsZUdyb3VwKGFycmF5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR29vZChhcnJheS5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihhcnJheSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmcucHVzaCh7Y2FsbGJhY2ssIHJlc29sdmUsIHJlamVjdH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcnVuKGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge2RhdGEsIGNhbGxiYWNrLCBjb3VudDogZGF0YS5sZW5ndGgsIHN0YXJ0OiBuZXcgRGF0ZX07XHJcbiAgICAgICAgdGhpcy53b3JraW5nLnB1c2gob2JqKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50cnlOZXh0KCksIHRoaXMubGltaXRzWzBdLnRpbWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtpbmcuc3BsaWNlKHRoaXMud29ya2luZy5pbmRleE9mKG9iaiksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnlOZXh0KCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLndhaXRpbmcubGVuZ3RoID4gMCAmJiB0aGlzLmlzR29vZCh0aGlzLndhaXRpbmdbMF0uY291bnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXRpbmcgPSB0aGlzLndhaXRpbmcucG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMucnVuKHdhaXRpbmcuZGF0YSwgd2FpdGluZy5jYWxsYmFjaykudGhlbih3YWl0aW5nLnJlc29sdmUsIHdhaXRpbmcucmVqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMud2FpdGluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50cnlOZXh0KCksIHRoaXMubGltaXRzWzBdLnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBjc3MgZnJvbSBcIi4vcG9wdXAuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UGFnZU1hbmFnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgICAgIHRoaXMucmV2ZXJzZUtub3duQWRkcmVzc2VzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSb3VuZEluZm8oZGl2LCBrZXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGVsZW1lbnQpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnZW1wdHknO1xyXG4gICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJObyByb3VuZCBpbmZvIGZvdW5kIDooXCI7XHJcbiAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgICAgICAgIGEudGV4dENvbnRlbnQgPSAnQWRkIHlvdXIgcHJvamVjdC4nO1xyXG4gICAgICAgICAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2xlbm5hcmRldmVydHovZXRoTGlzYm9uMjAyMyc7XHJcbiAgICAgICAgICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpXHJcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKGEpXHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmZvRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGluZm9FbGVtLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyhlbGVtZW50KVswXVsncm91bmRJbmZvJ107XHJcbiAgICAgICAgZGl2LmFwcGVuZChpbmZvRWxlbSlcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3VuZEluZm8odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7dHlwZTogXCJnZXRSb3VuZEluZm9cIiwgdmFsdWV9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2VuYWJsZWQnXSwgeCA9PiByKHg/LmVuYWJsZWQgPz8gdHJ1ZSkpKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtUd2l0dGVyUGFnZU1hbmFnZXJ9IGZyb20gXCIuL3R3aXR0ZXJQYWdlTWFuYWdlclwiO1xyXG5cclxuLy8gY2FuIGFkZCBvdGhlciB3ZWJzaXRlcyBoZXJlLFxyXG4vLyBzdGF5IHdpdGggVHd0aXR0ZXIgZm9yIHRoZSBzY29wZSBvZiB0aGlzIGhhY2thdGhvblxyXG5jb25zdCBzcGVjaWZpY0RvbWFpbkxpc3QgPSB7XHJcbiAgICBcInR3aXR0ZXIuY29tXCI6IFR3aXR0ZXJQYWdlTWFuYWdlcixcclxufVxyXG5cclxuLy8gcnVucyBvbmx5IGlmIHZpc2l0ZWQgcGFnZSBpcyBpbiBzcGVjaWZpY0RvbWFpbkxpc3RcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhZ2VNYW5hZ2VyRmFjdG9yeShkb2N1bWVudCwgdXJsKSB7XHJcbiAgICBsZXQgc3BlY2lmaWMgPSBPYmplY3QuZW50cmllcyhzcGVjaWZpY0RvbWFpbkxpc3QpLmZpbmQoKFtkb21haW4sIGNvbnN0cnVjdG9yXSkgPT4gdXJsLmhvc3RuYW1lID09PSBkb21haW4gfHwgdXJsLmhvc3RuYW1lLmVuZHNXaXRoKCcuJyArIGRvbWFpbikpXHJcbiAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHNwZWNpZmljWzFdKGRvY3VtZW50KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdFBhZ2VNYW5hZ2VyfSBmcm9tIFwiLi9hYnN0cmFjdFBhZ2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7UmVxdWVzdExpbWl0ZXJ9IGZyb20gXCIuLi9SZXF1ZXN0TGltaXRlclwiO1xyXG5pbXBvcnQge0N1c3RvbVR3aXR0ZXJ9IGZyb20gXCIuLi93aWRnZXRzL2N1c3RvbVR3aXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUd2l0dGVyUGFnZU1hbmFnZXIgZXh0ZW5kcyBBYnN0cmFjdFBhZ2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBuYW1lc1Jlc3VsdHMgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHN1cGVyKGRvY3VtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0TGltaXRlciA9IG5ldyBSZXF1ZXN0TGltaXRlcihbe2Ftb3VudDogMTAsIHRpbWU6IDEwMDB9XSk7XHJcbiAgICAgICAgdGhpcy5pY29uVXJsID0gYXdhaXQgdGhpcy5nZXRJY29uKClcclxuICAgICAgICB0aGlzLmNoZWNrKClcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5jaGVjaygpKVxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrKCksIDI1MCkpXHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB0aGlzLmNoZWNrKCkpXHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2soKSwgMjUwKSlcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuc3JjRWxlbWVudClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhc3REcm9wZG93bilcclxuICAgICAgICAgICAgaWYgKGUuc3JjRWxlbWVudCAhPSB0aGlzLmxhc3REcm9wZG93bikgdGhpcy5sYXN0RHJvcGRvd24/LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuY2hlY2soKSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2hlY2soKSB7XHJcbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuaXNFbmFibGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQbGFjZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uJykpLmZvckVhY2goeCA9PiB4LnJlbW92ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja0dhcmJhZ2VEcm9wZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlYXJjaFBsYWNlcygpIHtcclxuICAgICAgICBjb25zdCBwbGFjZXMgPSBBcnJheS5mcm9tKHRoaXMubGlzdFBsYWNlcygpKTtcclxuICAgICAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQocGxhY2VzLm1hcCh4ID0+IHgubmFtZSkuZmlsdGVyKHggPT4geCkpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0SW5mbyhuYW1lcyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwbGFjZSBvZiBwbGFjZXMpIHtcclxuICAgICAgICAgICAgVHdpdHRlclBhZ2VNYW5hZ2VyLm5hbWVzUmVzdWx0c1twbGFjZS5uYW1lXS50aGVuKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxhY2UuYWRkQ2FsbGJhY2soeD8ucmVzdWx0ID8/IHt9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYXJiYWdlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnLmljb246Zm9jdXMsIC5pY29uOmhvdmVyLCAuaWNvblR3aXR0ZXJEcm9wZG93bjpob3ZlciwgLmljb25Ud2l0dGVyRHJvcGRvd246Zm9jdXMsIC5pY29uVHdpdHRlckRyb3Bkb3duLmlzQ2xpY2tlZCc7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgZ2FyYmFnZSBjb2xsZWN0b3JcIilcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RHJvcGRvd24/LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRJbmZvKG5hbWVzKSB7XHJcbiAgICAgICAgY29uc3QgbGFja2luZyA9IEFycmF5LmZyb20obmFtZXMpLmZpbHRlcih4ID0+ICFUd2l0dGVyUGFnZU1hbmFnZXIubmFtZXNSZXN1bHRzW3hdKTtcclxuICAgICAgICBpZiAobGFja2luZy5sZW5ndGggPT0gMCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCByZXF1ZXN0UHJvbWlzZSA9IHRoaXMuYXBpQ2FsbChsYWNraW5nKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgbGFja2luZykge1xyXG4gICAgICAgICAgICBUd2l0dGVyUGFnZU1hbmFnZXIubmFtZXNSZXN1bHRzW25hbWVdID0gcmVxdWVzdFByb21pc2UudGhlbihkID0+IGRbbmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCByZXF1ZXN0UHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhcGlDYWxsKG5hbWVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlcyA9IGF3YWl0IHRoaXMucmVxdWVzdExpbWl0ZXIuc2NoZWR1bGVNYW55KG5hbWVzLCAoeCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGJ1bGsgcm91bmQgaW5mb1wiKVxyXG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2V0Um91bmRJbmZvQnVsa1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB4XHJcbiAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlcy5yZWR1Y2UoKGEsIGIpID0+ICh7Li4uYSwgLi4uYn0pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZ2V0SWNvblVybFwiXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAqIGxpc3RQbGFjZXMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBkaXYgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnItZG5tcnpzLnItMW55NGwzbCwgLnItZ3RkcWl6IC5jc3MtMWRiamM0bi5yLTFpdXN2cjQuci0xNnkydW94LnItMTc3N2ZjaSwgLmNzcy0xZGJqYzRuLnItMTZ5MnVveC5yLTF3Ymg1YTIuci0xcGkydHN4LnItMTc3N2ZjaScpKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXYubWF0Y2hlcygnLmNzcy0xZGJqYzRuLnIteG9kdXU1LnItMXdiaDVhMi5yLWRubXJ6cy5yLTFueTRsM2wnKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBBcnJheS5mcm9tKGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuci05aWxiODIsIC5yLTE0ajc5cHYsIC5yLXJqaXhxZScpKS5tYXAoeCA9PiB4LnRleHRDb250ZW50KS5maW5kKHggPT4geFswXSA9PSAnQCcpO1xyXG4gICAgICAgICAgICBpZighbmFtZSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ljb24gPSBkaXYucXVlcnlTZWxlY3RvcignLmljb24nKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSWNvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nSWNvbi5kYXRhc2V0LnNvdXJjZU5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0ljb24ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0ljb24gPSBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYWRkQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghZGF0YS5lcnJvciAmJiAhZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZGF0YSkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IG5ldyBDdXN0b21Ud2l0dGVyKGRhdGFbbmFtZV0pLmRpdlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUljb24oZGl2LCBkYXRhLCBkcm9wZG93bkNvbnRlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHtuYW1lLCBhZGRDYWxsYmFja307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSWNvbiA9IChwYXJlbnQsIGRhdGEsIGRyb3Bkb3duQ29udGVudCwgbmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcclxuICAgICAgaWNvbi5kYXRhc2V0LnNvdXJjZU5hbWUgPSBuYW1lO1xyXG4gICAgICBpY29uLnN0eWxlLndpZHRoID0gXCIxLjFlbVwiO1xyXG4gICAgICBpY29uLnN0eWxlLmhlaWdodCA9IFwiMS4xZW1cIjtcclxuICAgICAgaWNvbi5zdHlsZS5tYXJnaW4gPSBcIi0xcHggMCAtMXB4IDBcIjtcclxuICAgICAgaWNvbi5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICBpY29uLnN0eWxlLmJvcmRlcmJvdHRvbSA9IFwiMnB4IHNvbGlkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgIGljb24uc3R5bGUuYm9yZGVyTGVmdCA9IFwiMC4zZW0gc29saWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgaWNvbi5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMC4zZW0gc29saWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3RoaXMuaWNvblVybH0pIG5vLXJlcGVhdGA7XHJcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZFNpemUgPSBgY29udGFpbmA7XHJcbiAgICAgIGljb24ub25tb3VzZW92ZXIgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG4gICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICAgICAgaWNvbi5hcHBlbmQoZHJvcGRvd24pO1xyXG4gICAgICBwYXJlbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiLnItMWZtajdvNTpub3QoaDIpLCAuci0xOGpzdmsyOm5vdChoMiksIC5yLTFuYW8zM2k6bm90KGgyKSwgLnItdmx4amxkOm5vdChoMilcIlxyXG4gICAgICAgIClcclxuICAgICAgICA/LmFwcGVuZChpY29uKTtcclxuICAgICAgaWNvbi5vbm1vdXNlb3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGRyb3Bkb3duID0gZHJvcGRvd25Db250ZW50O1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmQoZHJvcGRvd24pO1xyXG4gICAgICAgIGxldCByZWN0ID0gaWNvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiaWNvblR3aXR0ZXJEcm9wZG93blwiKTtcclxuICAgICAgICBkcm9wZG93bi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBkcm9wZG93bi5zdHlsZS5sZWZ0ID0gc2Nyb2xsWCArIHJlY3QubGVmdCArIFwicHhcIjtcclxuICAgICAgICBkcm9wZG93bi5zdHlsZS50b3AgPSBzY3JvbGxZICsgcmVjdC50b3AgKyByZWN0LmhlaWdodCArIFwicHhcIjtcclxuICAgICAgICBkcm9wZG93bi5zdHlsZS56aW5kZXggPSAxMDAwMDAwO1xyXG4gICAgICAgIGRyb3Bkb3duLm9uY2xpY2sgPSAoKSA9PiB7ZHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImlzQ2xpY2tlZFwiKTt9XHJcblxyXG4gICAgICAgIGlmIChkcm9wZG93biAhPT0gdGhpcy5sYXN0RHJvcGRvd24pIHtcclxuICAgICAgICAgIHRoaXMubGFzdERyb3Bkb3duPy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0RHJvcGRvd24gPSBkcm9wZG93bjtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIWRyb3Bkb3duLm1hdGNoZXMoXCI6aG92ZXIsIDpmb2N1cywgOmZvY3VzLXdpdGhpbiwgLmlzQ2xpY2tlZFwiKSAmJlxyXG4gICAgICAgICAgICAhaWNvbi5tYXRjaGVzKFwiOmhvdmVyLCA6Zm9jdXMsIDpmb2N1cy13aXRoaW5cIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tHYXJiYWdlRHJvcGRvd24oKSwgMjAwKTtcclxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBldmVudENhbGxiYWNrKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkcm9wZG93bi5vbm1vdXNlb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrR2FyYmFnZURyb3Bkb3duKCksIDIwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bi5zaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoKSA9PiBkcm9wZG93bi5yZW1vdmUoKSk7XHJcbiAgICAgICAgaWNvbi5vbmJsdXIgPSBldmVudENhbGxiYWNrO1xyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZXZlbnRDYWxsYmFjayk7XHJcbiAgICAgIH07XHJcbiAgICAgIGljb24ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImlzQ2xpY2tlZFwiKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIHsgaWNvbiB9O1xyXG4gICAgfTtcclxufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9jdXN0b21pemVkRG9uYXRpb25zV2lkZ2V0Lm1wdHNcIjtcclxuaW1wb3J0IGV0aF9sb2dvIGZyb20gXCIhIXVybC1sb2FkZXIhLi4vLi4vaW1nL2V0aC5wbmdcIlxyXG5pbXBvcnQgdXNkY19sb2dvIGZyb20gXCIhIXVybC1sb2FkZXIhLi4vLi4vaW1nL3VzZGMucG5nXCJcclxuaW1wb3J0IGFycm93IGZyb20gXCIhIXVybC1sb2FkZXIhLi4vLi4vaW1nL2Fycm93LnN2Z1wiXHJcbmltcG9ydCBwZW4gZnJvbSBcIiEhdXJsLWxvYWRlciEuLi8uLi9pbWcvcGVuLnN2Z1wiXHJcbmltcG9ydCBjbG9zZSBmcm9tIFwiISF1cmwtbG9hZGVyIS4uLy4uL2ltZy9jbG9zZS5zdmdcIlxyXG5pbXBvcnQgbWF0aWNUb2tlbkljb24gZnJvbSBcIiEhdXJsLWxvYWRlciEuLi8uLi9pbWcvbWF0aWMud2VicFwiXHJcbmltcG9ydCBiaWFubmNlQ29pbkxvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuLi8uLi9pbWcvYm5iLndlYnBcIlxyXG5pbXBvcnQge3Rva2Vuc30gZnJvbSBcIi4uL3RpcHBpbmdVdGlsc1wiO1xyXG5pbXBvcnQge2NyZWF0ZX0gZnJvbSBcImZhc3QtY3JlYXRvclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21pemVkRGFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IHJlY2lwaWVudCA9IGRhdGEucmVjaXBpZW50ID8/IG51bGw7XHJcbiAgICAgICAgbGV0IG5ldHdvcmsgPSBcImxpbmVhXCJcclxuICAgICAgICBsZXQgYW1vdW50ID0gMVxyXG4gICAgICAgIGxldCBuZXR3b3JrcyA9IFtcclxuICAgICAgICAgICAge25hbWU6ICdMaW5lYScsIGltZzogZXRoX2xvZ28sIGNoYWluSWQ6IDU5MTQwLCBjb2RlOiAnTGluZWEnfSxcclxuICAgICAgICAgICAge25hbWU6ICdQb2x5Z29uJywgaW1nOiBtYXRpY1Rva2VuSWNvbiwgY2hhaW5JZDogMTM3LCBjb2RlOiAnUG9seWdvbid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ0V0aGVyZXVtJywgaW1nOiBldGhfbG9nbywgY2hhaW5JZDogMSwgY29kZTogJ0VUSCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ0JTQycsIGltZzogYmlhbm5jZUNvaW5Mb2dvLCBjaGFpbklkOiA1NiwgY29kZTogJ0JTQyd9LFxyXG4gICAgICAgIF1cclxuICAgICAgICBpZiAoZGF0YS50b2tlbkZpbHRlcikge1xyXG4gICAgICAgICAgICBuZXR3b3JrcyA9IG5ldHdvcmtzLmZpbHRlcihuID0+IGRhdGEudG9rZW5GaWx0ZXJbbi5jb2RlLnRvTG93ZXJDYXNlKCldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5uZXR3b3JrRmlsdGVyKXtcclxuICAgICAgICAgICAgbmV0d29ya3MgPSBuZXR3b3Jrcy5maWx0ZXIobiA9PiBkYXRhLm5ldHdvcmtGaWx0ZXJbbi5uYW1lLnRvTG93ZXJDYXNlKCldKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmh0bWwgPSBjcmVhdGUoJ2RpdicsIHt9LCB0ZW1wbGF0ZSh7XHJcbiAgICAgICAgICAgIGN1c3RvbUhlYWRlcjogZGF0YS5jdXN0b21IZWFkZXIsXHJcbiAgICAgICAgICAgIGN1c3RvbVRleHQ6IGRhdGEuY3VzdG9tVGV4dCA/PyBcIlwiLFxyXG4gICAgICAgICAgICBidXR0b25WYWx1ZTogZGF0YS5idXR0b25WYWx1ZSxcclxuICAgICAgICAgICAgbmV0d29ya3MsXHJcbiAgICAgICAgICAgIHRva2VuczogdGhpcy5maWx0ZXJUb2tlbnMoZGF0YS50b2tlbkZpbHRlciksXHJcbiAgICAgICAgICAgIGV0aF9sb2dvLFxyXG4gICAgICAgICAgICB1c2RjX2xvZ28sXHJcbiAgICAgICAgICAgIGFycm93LFxyXG4gICAgICAgICAgICBwZW4sXHJcbiAgICAgICAgICAgIGNsb3NlXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLmNsb3NlQnV0dG9uJykub25jbGljayA9ICgpID0+IHRoaXMuaHRtbC5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24obmV3IEV2ZW50KCdjbG9zZScsIHtidWJibGVzOiB0cnVlfSkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKS5mb3JFYWNoKHNlbGVjdCA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5vbmNsaWNrID0gZSA9PiBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgc2VsZWN0Lm9uYmx1ciA9IGUgPT4gc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzT3BlbicpXHJcbiAgICAgICAgICAgIHNlbGVjdC5vbmNsaWNrID0gZSA9PiBzZWxlY3QuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0IHVsIGxpJykuZm9yRWFjaChsaSA9PiB7XHJcbiAgICAgICAgICAgIGxpLm9uY2xpY2sgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50ID0gbGkucXVlcnlTZWxlY3RvcignLm5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBsaS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGJ1dHRvbi5wYXJlbnROb2RlLmRhdGFzZXQsIGxpLmRhdGFzZXQpO1xyXG4gICAgICAgICAgICAgICAgbGkucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzT3BlbicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignOmZvY3VzJyk/LmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlzaWJsZUNvaW5zKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5zZW5kJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ldHdvcmsgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLm5ldHdvcmtTZWxlY3QnKS5kYXRhc2V0Lm5ldHdvcmsgPz8gbmV0d29yaztcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2tlblNlbGVjdCcpLmRhdGFzZXQuc3ltYm9sO1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUJveCB0ZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgaW5wdXQgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9ICh0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnZhbHVlU2VsZWN0aW9uIC5pc1NlbGVjdGVkIGlucHV0Jyk/LnZhbHVlIHx8IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudmFsdWVTZWxlY3Rpb24gLmlzU2VsZWN0ZWQnKS5kYXRhc2V0LnZhbHVlKSA/PyBhbW91bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24obmV3IEV2ZW50KCdjdXN0b21FdmVudCcsIHtidWJibGVzOiB0cnVlfSksIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgbmV0d29yayxcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlU2VsZWN0aW9uID4gKicpLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgIGIub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWx1ZVNlbGVjdGlvbiAgPiAqJykuZm9yRWFjaCh4ID0+IHguY2xhc3NMaXN0LnJlbW92ZSgnaXNTZWxlY3RlZCcpKVxyXG4gICAgICAgICAgICAgICAgYi5jbGFzc0xpc3QuYWRkKCdpc1NlbGVjdGVkJylcclxuICAgICAgICAgICAgICAgIGIucXVlcnlTZWxlY3RvcignaW5wdXQnKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlTWVzc2FnZUJveCA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlTWVzc2FnZUJveCcpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCb3ggPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VCb3gnKTtcclxuICAgICAgICBpZiAoIWRhdGEuc2hvd01lc3NhZ2VCb3gpXHJcbiAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VCb3gub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlQm94LmNsYXNzTGlzdC5jb250YWlucygnaXNIaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3guY2xhc3NMaXN0LnJlbW92ZSgnaXNIaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VCb3gubGFzdENoaWxkLnRleHRDb250ZW50ID0gJ05vIG1lc3NhZ2UnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3guY2xhc3NMaXN0LmFkZCgnaXNIaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VCb3gubGFzdENoaWxkLnRleHRDb250ZW50ID0gJ0FkZCBhIG1lc3NhZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUJveC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2dnbGVWYWx1ZVNlbGVjdGlvbiA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudmFsdWVTZWxlY3Rpb24nKTtcclxuICAgICAgICBpZiAoIWRhdGEuc2hvd1ZhbHVlU2VsZWN0aW9uKVxyXG4gICAgICAgICAgICB0b2dnbGVWYWx1ZVNlbGVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnZhbHVlU2VsZWN0aW9uIC5pc1NlbGVjdGVkJykuZGF0YXNldC52YWx1ZSA9IFwiXCJcclxuICAgICAgICBjb25zdCB0b2dnbGVOZXR3b3JrU2VsZWN0aW9uID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5uZXR3b3JrU2VsZWN0aW9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnNob3dOZXR3b3JrU2VsZWN0aW9uKVxyXG4gICAgICAgICAgICB0b2dnbGVOZXR3b3JrU2VsZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubmV0d29ya1NlbGVjdCcpLmRhdGFzZXQubmV0d29yayA9IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlVG9rZW5TZWxlY3Rpb24gPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0aW9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnNob3dUb2tlblNlbGVjdGlvbilcclxuICAgICAgICAgICAgdG9nZ2xlVG9rZW5TZWxlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2tlblNlbGVjdCcpLmRhdGFzZXQuc3ltYm9sID0gXCJcIjtcclxuICAgICAgICBjb25zdCB0b2dnbGVJbnB1dCA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlSW5wdXQnKTtcclxuICAgICAgICBpZiAoIWRhdGEuc2hvd0lucHV0KVxyXG4gICAgICAgICAgICB0b2dnbGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZVRleHQgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRvZ2dsZVRleHQnKTtcclxuICAgICAgICBpZiAoIWRhdGEuY3VzdG9tVGV4dClcclxuICAgICAgICAgICAgdG9nZ2xlVGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFZpc2libGVDb2lucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hWaXNpYmxlQ29pbnMoKSB7XHJcbiAgICAgICAgbGV0IG5ldHdvcmsgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLm5ldHdvcmtTZWxlY3QnKS5kYXRhc2V0Lm5ldHdvcms7XHJcbiAgICAgICAgbGV0IHRva2VucyA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcudG9rZW5TZWxlY3QgbGknKVxyXG4gICAgICAgIGZvciAobGV0IHRva2VuIG9mIHRva2Vucykge1xyXG4gICAgICAgICAgICB0b2tlbi5zdHlsZS5kaXNwbGF5ID0gdG9rZW4uZGF0YXNldC5uZXR3b3JrID09IG5ldHdvcmsgPyAnJyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ldHdvcmsgJiYgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2tlblNlbGVjdCcpLmRhdGFzZXQubmV0d29yayAhPSBuZXR3b3JrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKGAudG9rZW5TZWxlY3QgbGlbZGF0YS1uZXR3b3JrPVwiJHtuZXR3b3JrfVwiXWApLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlclRva2Vucyh0b2tlbkZpbHRlcikge1xyXG4gICAgICAgIGlmICghdG9rZW5GaWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLmZpbHRlcih0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbkZpbHRlclt0Lm5ldHdvcmsudG9Mb3dlckNhc2UoKV0/LmluY2x1ZGVzKHQuc3ltYm9sKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9jb250ZW50L3dpZGdldFN0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuaW1wb3J0IHtDdXN0b21pemVkRGFwcH0gZnJvbSBcIi4vY29udGVudC9DdXN0b21pemVkRG9uYXRpb25zV2lkZ2V0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVR3aXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmRpdi5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pXHJcbiAgICAgICAgdGhpcy5kaXYuc2hhZG93Um9vdC5hcHBlbmQoY3JlYXRlKCdzdHlsZScsIHt0ZXh0OiBjc3N9KSk7XHJcblxyXG4gICAgICAgIGxldCBwb3B1cCA9IGNyZWF0ZSgnc2VjdGlvbi50aXBwaW5nLXBvcHVwJylcclxuICAgICAgICB0aGlzLmRpdi5zaGFkb3dSb290LmFwcGVuZChwb3B1cCk7XHJcblxyXG4gICAgICAgIHBvcHVwLmFwcGVuZChuZXcgQ3VzdG9taXplZERhcHAoZGF0YSkuaHRtbCk7XHJcbiAgICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY3VzdG9tRXZlbnQnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7ZSwgZGF0YX0pXHJcbiAgICAgICAgICAgIC8vIHNldCB1cmwgcGFyYW1zIHRoYXQgY2FuIGJlIHByb2Nlc3NlZCBieSB0aGlyZCBwYXJ0eSBhcHBcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZS5hbW91bnQgPz8gbnVsbCxcclxuICAgICAgICAgICAgICAgIG5ldHdvcms6IGUubmV0d29yayA/PyBudWxsLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGUudG9rZW4gPz8gbnVsbCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSA/PyBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGUuaW5wdXQgPz8gbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlY2lwaWVudDogZS5yZWNpcGllbnQgPz8gbnVsbCxcclxuICAgICAgICAgICAgICAgIG90aGVyOiBlLm90aGVyID8/IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0VXJsID0gZGF0YVsnaG9zdFVSTCddICsgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5maWx0ZXIoKFtrLCB2XSkgPT4gdikubWFwKHggPT4gZW5jb2RlVVJJQ29tcG9uZW50KHhbMF0pICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHhbMV0pKS5qb2luKCcmJylcclxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiAnb3BlblBvcHVwV2luZG93JywgdmFsdWU6IHRhcmdldFVybCB9KTtcclxuLy8gICAgICAgICAgICB3aW5kb3cub3BlbigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgdG9rZW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkV0aGVyZXVtXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy8zMngzMi8xMDI3LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1OTE0MCxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJMaW5lYVwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkV0aGVyZXVtXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy8zMngzMi8xMDI3LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIk1BVElDXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJNQVRJQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9hc3NldHMuY29pbmdlY2tvLmNvbS9jb2lucy9pbWFnZXMvNDcxMy9zbWFsbC9tYXRpYy10b2tlbi1pY29uLnBuZz8xNjI0NDQ2OTEyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkJOQlwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQk5CXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvMzJ4MzIvMTgzOS5wbmdcIlxyXG4gICAgfVxyXG5dIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFnZU1hbmFnZXJGYWN0b3J5fSBmcm9tIFwiLi4vLi4vY29tbW9uL3BhZ2VNYW5hZ2Vycy9mYWN0b3J5XCI7XHJcblxyXG5wYWdlTWFuYWdlckZhY3RvcnkoZG9jdW1lbnQsIGRvY3VtZW50LmxvY2F0aW9uKS50aGVuKHg9Png/LmluaXQoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=