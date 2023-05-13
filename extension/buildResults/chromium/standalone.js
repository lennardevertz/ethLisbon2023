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

/***/ "./src/common/pageManagers/standalonePageManager.js":
/*!**********************************************************!*\
  !*** ./src/common/pageManagers/standalonePageManager.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandalonePageManager": () => (/* binding */ StandalonePageManager)
/* harmony export */ });
/* harmony import */ var _abstractPageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractPageManager */ "./src/common/pageManagers/abstractPageManager.js");


class StandalonePageManager extends _abstractPageManager__WEBPACK_IMPORTED_MODULE_0__.AbstractPageManager {
    init() {
        // listen for inputs in the extension window
        this.document.addEventListener('input', async e => {
            this.lastEvent = {event: e, date: new Date(), input: e.target, value: e.target.value}
            setTimeout(() => this.checkInputChanged(), 500)
        })
    }

    async checkInputChanged() {
        if (new Date() - this.lastEvent?.date >= 500 && this.lastEvent?.input.value == this.lastEvent?.value && this.lastEvent?.value.length >= 3) {
            let event = this.lastEvent;
            const roundInfo = this.document.createElement('div')
            roundInfo.className = 'roundInfo';
            this.document.querySelector('.roundInfo').replaceWith(roundInfo)
            let data = await this.getRoundInfo(event.value);
            if (data?.result && event == this.lastEvent) {
                this.generateRoundInfo(roundInfo, data.input, data.result, value => {
                    console.log("Added round info") ;
                })
            }
        } else {
            const roundInfo = this.document.createElement('div')
            roundInfo.className = 'roundInfo';
            this.document.querySelector('.roundInfo').replaceWith(roundInfo)
        }
    }
}

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
/*!**********************************!*\
  !*** ./src/common/standalone.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageManagers_standalonePageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageManagers/standalonePageManager */ "./src/common/pageManagers/standalonePageManager.js");


(new _pageManagers_standalonePageManager__WEBPACK_IMPORTED_MODULE_0__.StandalonePageManager(document, document.url)).init()
document.querySelector('[type="checkbox"]').onchange =async e => {
    chrome.storage.local.set({'enabled': e.target.checked})
}
chrome.storage.local.get(['enabled'], r => {
    document.querySelector('[type="checkbox"]').checked = r?.enabled ?? true;
    setTimeout(() => {
        delete document.querySelector('[type="checkbox"]').classList.remove('noTransition');
    }, 50);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7QUFDakI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yRTtBQUMzRTtBQUNBLEtBQUssc0ZBQXFCO0FBQzFCO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vcGFnZU1hbmFnZXJzL3BvcHVwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BhZ2VNYW5hZ2Vycy9hYnN0cmFjdFBhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcGFnZU1hbmFnZXJzL3N0YW5kYWxvbmVQYWdlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdGFuZGFsb25lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTMgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNyAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogMTAwMDAwMCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xcbn1cXG46aG9zdCA+IGRpdiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHg7XFxuICBib3JkZXItY29sb3I6ICNFNkU2RTM7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuOmhvc3QgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0UzRTNFNjtcXG59XFxuXFxuLnR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ua2V5IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxMWRkNzQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ua2V5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG5cXG4udmFsdWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgbWF4LXdpZHRoOiA1JTtcXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG59XFxuXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbW1vbi9wYWdlTWFuYWdlcnMvcG9wdXAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7QUFDTjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUtBO0VBQ0UsbUNBQUE7RUFDQyxlQUFBO0FBRkg7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFIRjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQUhKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQUZKOztBQUlBO0VBQ0csOEJBQUE7QUFESDs7QUFHQTtFQUNHLDhCQUFBO0FBQUhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOmhvc3Qge1xcclxcbiAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4IWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkU2RTMhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4IWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q3ZDchaW1wb3J0YW50O1xcclxcbiAgei1pbmRleDogMTAwMDAwMCFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcXHJcXG5cXHJcXG4gID4gZGl2IHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI0U2RTZFMztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjRTNFM0U2O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50eXBlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmtleSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMTFkZDc0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnZhbHVlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIG1heC13aWR0aDogNSU7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcblxcclxcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5lbXB0eSB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogNnB4O1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG59XFxyXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcclxcbn1cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG59XFxyXFxuOmhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xcclxcbiAgXFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xcclxcbiAgXFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9wb3B1cC5zY3NzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RQYWdlTWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICAgICAgdGhpcy5yZXZlcnNlS25vd25BZGRyZXNzZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvdW5kSW5mbyhkaXYsIGtleSwgZWxlbWVudCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoZWxlbWVudCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdlbXB0eSc7XHJcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIk5vIHJvdW5kIGluZm8gZm91bmQgOihcIjtcclxuICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgYS50ZXh0Q29udGVudCA9ICdBZGQgeW91ciBwcm9qZWN0Lic7XHJcbiAgICAgICAgICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbGVubmFyZGV2ZXJ0ei9ldGhMaXNib24yMDIzJztcclxuICAgICAgICAgICAgYS50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSlcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmQoYSlcclxuICAgICAgICAgICAgZGl2LmFwcGVuZChpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZm9FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5mb0VsZW0udGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKGVsZW1lbnQpWzBdWydyb3VuZEluZm8nXTtcclxuICAgICAgICBkaXYuYXBwZW5kKGluZm9FbGVtKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdW5kSW5mbyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHt0eXBlOiBcImdldFJvdW5kSW5mb1wiLCB2YWx1ZX0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnZW5hYmxlZCddLCB4ID0+IHIoeD8uZW5hYmxlZCA/PyB0cnVlKSkpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0UGFnZU1hbmFnZXJ9IGZyb20gXCIuL2Fic3RyYWN0UGFnZU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFuZGFsb25lUGFnZU1hbmFnZXIgZXh0ZW5kcyBBYnN0cmFjdFBhZ2VNYW5hZ2VyIHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gbGlzdGVuIGZvciBpbnB1dHMgaW4gdGhlIGV4dGVuc2lvbiB3aW5kb3dcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEV2ZW50ID0ge2V2ZW50OiBlLCBkYXRlOiBuZXcgRGF0ZSgpLCBpbnB1dDogZS50YXJnZXQsIHZhbHVlOiBlLnRhcmdldC52YWx1ZX1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrSW5wdXRDaGFuZ2VkKCksIDUwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrSW5wdXRDaGFuZ2VkKCkge1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSgpIC0gdGhpcy5sYXN0RXZlbnQ/LmRhdGUgPj0gNTAwICYmIHRoaXMubGFzdEV2ZW50Py5pbnB1dC52YWx1ZSA9PSB0aGlzLmxhc3RFdmVudD8udmFsdWUgJiYgdGhpcy5sYXN0RXZlbnQ/LnZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IHRoaXMubGFzdEV2ZW50O1xyXG4gICAgICAgICAgICBjb25zdCByb3VuZEluZm8gPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHJvdW5kSW5mby5jbGFzc05hbWUgPSAncm91bmRJbmZvJztcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRJbmZvJykucmVwbGFjZVdpdGgocm91bmRJbmZvKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0Um91bmRJbmZvKGV2ZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnJlc3VsdCAmJiBldmVudCA9PSB0aGlzLmxhc3RFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJvdW5kSW5mbyhyb3VuZEluZm8sIGRhdGEuaW5wdXQsIGRhdGEucmVzdWx0LCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRlZCByb3VuZCBpbmZvXCIpIDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByb3VuZEluZm8gPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHJvdW5kSW5mby5jbGFzc05hbWUgPSAncm91bmRJbmZvJztcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmRJbmZvJykucmVwbGFjZVdpdGgocm91bmRJbmZvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1N0YW5kYWxvbmVQYWdlTWFuYWdlcn0gZnJvbSBcIi4vcGFnZU1hbmFnZXJzL3N0YW5kYWxvbmVQYWdlTWFuYWdlclwiO1xyXG5cclxuKG5ldyBTdGFuZGFsb25lUGFnZU1hbmFnZXIoZG9jdW1lbnQsIGRvY3VtZW50LnVybCkpLmluaXQoKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJykub25jaGFuZ2UgPWFzeW5jIGUgPT4ge1xyXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsnZW5hYmxlZCc6IGUudGFyZ2V0LmNoZWNrZWR9KVxyXG59XHJcbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2VuYWJsZWQnXSwgciA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJykuY2hlY2tlZCA9IHI/LmVuYWJsZWQgPz8gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJykuY2xhc3NMaXN0LnJlbW92ZSgnbm9UcmFuc2l0aW9uJyk7XHJcbiAgICB9LCA1MCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9