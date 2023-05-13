/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/AsyncCache.js":
/*!**********************************!*\
  !*** ./src/common/AsyncCache.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncCache": () => (/* binding */ AsyncCache)
/* harmony export */ });
class AsyncCache {
    static TwitterID = new AsyncCache('TwitterID');
    promises = {}

    constructor(name, expirationTime = 3600000) {
        this.name = name;
        this.expirationTime = expirationTime;
    }

    async getOne(args) {
        let str = JSON.stringify([this.name, args]);

        let response = ((await chrome.storage.local.get('cache' + str))??{})['cache' + str];
        if (response && new Date() - response.date < this.expirationTime) {
            return {value: response.value};
        }
        return null;
    }

    async setOne(args, value) {
        let str = JSON.stringify([this.name, args]);

        let obj = {};
        obj['cache' + str] = {date: +new Date(), value}
        await chrome.storage.local.set(obj)
    }
}


/***/ }),

/***/ "./src/common/resolvers/AccountResolver.js":
/*!*************************************************!*\
  !*** ./src/common/resolvers/AccountResolver.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountResolver": () => (/* binding */ AccountResolver)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/common/utils.js");
/* harmony import */ var _TwitterIdResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwitterIdResolver */ "./src/common/resolvers/TwitterIdResolver.js");



if (globalThis.window != globalThis) {
    globalThis.window = globalThis;
}

class AccountResolverClass {

    async get(identifier) {
        console.log("Calling ", identifier)
        if (identifier.match(_utils__WEBPACK_IMPORTED_MODULE_0__.regT)) {
            let twitterId = await _TwitterIdResolver__WEBPACK_IMPORTED_MODULE_1__.TwitterIdResolver.get(identifier);
            if (!identifier || identifier == "Not found") {
                throw new Error("Twitter handle not found.")
            }
            return await this.getAccountInfo(identifier, twitterId);
        } else {
            // not matching twitter regex
            return
        }
    }

    async getMany(identifiers) {
    console.log("calling bulk ", identifiers)
        let twitterNames = identifiers.filter(x => x.match(_utils__WEBPACK_IMPORTED_MODULE_0__.regT));
        let twitterIds = [];
        console.log("getting ids for ", twitterNames)
        if (twitterNames.length > 0) {
            twitterIds = await _TwitterIdResolver__WEBPACK_IMPORTED_MODULE_1__.TwitterIdResolver.getMany(twitterNames);
        }
        let promises = [];
        for (let identifier of identifiers) {
            promises.push(this.getAccountInfo(identifier, twitterIds[identifier] ?? null))
        }
        let ret = {};
        for (let promise of promises) {
            try {
                ret[(await promise).input] = await promise;
            } catch (ex) {

            }
        }
        console.log("return many is ",ret)
        return ret;
    }


    async getAccountInfo(identifier, twitterId) {
        console.log('resolveStart', identifier);
        let foundMatches = {}

        if (!twitterId || twitterId == "Not found") {
             throw new Error("Twitter handle not found.")
        }
        // custom dropdowns
        if (_utils__WEBPACK_IMPORTED_MODULE_0__.customTwitterAccounts[twitterId]) {
            foundMatches[identifier] = _utils__WEBPACK_IMPORTED_MODULE_0__.customTwitterAccounts[twitterId]
            console.log({identifier, twitterId, foundMatches})
        }
        return {"input": identifier, "result": foundMatches, "twitterID": twitterId}
    }
}

const AccountResolver = new AccountResolverClass();

/***/ }),

/***/ "./src/common/resolvers/TwitterIdResolver.js":
/*!***************************************************!*\
  !*** ./src/common/resolvers/TwitterIdResolver.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterIdResolver": () => (/* binding */ TwitterIdResolver)
/* harmony export */ });
/* harmony import */ var _AsyncCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AsyncCache */ "./src/common/AsyncCache.js");



const TwitterIdResolver = {
    cache: _AsyncCache__WEBPACK_IMPORTED_MODULE_0__.AsyncCache.TwitterID,
    async get(name) {
        name = name.replace(/^@/, '').toLowerCase();
        let cacheResponse
        try {cacheResponse = await this.cache.getOne(name);}
        catch {cacheResponse=""}
        if (cacheResponse) return cacheResponse.value
        else {
            let value = (await this.apiCall([name]))[name];
            this.cache.setOne(name, value);
            return value;
        }
    },
    async getMany(originalNames) {
        let names = originalNames.map(x => x.replace(/^@/, '').toLowerCase());

        let toRead = [];
        let ret = [];

        for (let name of names) {
            let cacheResponse = await this.cache.getOne(name);
            if (cacheResponse) {
                ret.push([name, cacheResponse.value]);
            } else {
                toRead.push(name);
            }
        }
        if (toRead.length > 0) {
            let results = await this.apiCall(toRead)
            for (const name of toRead) {
                let value = results[name.replace(/^@/, '').toLowerCase()];
                ret.push([name, value]);
                this.cache.setOne(name, value);
            }
        }

        return Object.fromEntries(ret.map(([k, v]) => [originalNames.filter(x => x.replace(/^@/, '').toLowerCase() == k)[0], v]));
    },
    async apiCall(names) {
        const request = await fetch("https://www.idriss.xyz/v1/getTwitterIDPlugin?usernames=" + encodeURIComponent(names.join(',')));
        const response = await request.json();
        return Object.fromEntries(Object.entries(response.twitterIDs).map(x => [x[0].toLowerCase(), x[1]]));
    }
}

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customTwitterAccounts": () => (/* binding */ customTwitterAccounts),
/* harmony export */   "regT": () => (/* binding */ regT)
/* harmony export */ });
const regT = /^@[a-zA-Z0-9_]{1,15}$/;


const customTwitterAccounts = {
    // Gitcoin's profile ID
    '856446453157376003': {
        customHeader: "Donate on Gitcoin",
        customText: "Donate for any project by visiting their Twitter page or the Gitcoin Grant's page 💚",
        buttonValue: "Donate",
        hostURL: "https://explorer.gitcoin.co/#/round/1/0x12bb5bbbfe596dbc489d209299b8302c3300fa40",
        roundInfo: "Some super cool round info here!!",
        showNetworkSelection: true,
        showValueSelection: true,
        showTokenSelection: false,
        showInput: false,
        showMessageBox: false,
        tokenFilter: null,
        networkFilter: null,
    },
    '1416199220978089987': {
        customHeader: "Donate on Gitcoin",
        customText: "Help making web3 more usable with even the smallest donation 💚",
        buttonValue: "Donate",
        hostURL: "https://lennardevertz.github.io/ethLisbon2023/website?",
        roundInfo: "Every human on Earth deserves frictionless access to crypto and the benefits coming from using it: cheap and instant transactions, improved security & privacy, and investment opportunities. IDriss is on a mission to help provide that by building a suite of tools making web3 more usable for everyone.",
        recipient: "0x4a3755eB99ae8b22AaFB8f16F0C51CF68Eb60b85",
        showNetworkSelection: true,
        showValueSelection: true,
        showTokenSelection: false,
        showInput: false,
        showMessageBox: false,
        tokenFilter: null,
        networkFilter: null,
    },
};

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
/******/ 			// no module.id needed
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
/*!***************************************!*\
  !*** ./src/chromium/serviceWorker.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_resolvers_AccountResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/resolvers/AccountResolver */ "./src/common/resolvers/AccountResolver.js");



chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type === 'getRoundInfo') {
        console.log(request)
            _common_resolvers_AccountResolver__WEBPACK_IMPORTED_MODULE_0__.AccountResolver.get(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
            return true;
        } else if (request.type === 'getRoundInfoBulk') {
        console.log(request)
            _common_resolvers_AccountResolver__WEBPACK_IMPORTED_MODULE_0__.AccountResolver.getMany(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
            return true;
        } else if (request.type === 'getIconUrl') {
            fetch(chrome.runtime.getURL('img/icon148.png'))
                .then(fetchRequest => fetchRequest.blob())
                .then(blob => readBlob(blob))
                .then(x => sendResponse(x));
            return true;
        }
    }
);

function readBlob(b) {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.readAsDataURL(b);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21pdW0vc2VydmljZVdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnFEO0FBQ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdDQUFJO0FBQ2pDLGtDQUFrQyxxRUFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsd0NBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlFQUF5QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFxQjtBQUNqQyx1Q0FBdUMseURBQXFCO0FBQzVELHlCQUF5QixvQ0FBb0M7QUFDN0Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7OztBQ2hFa0M7QUFDekM7QUFDQTtBQUNPO0FBQ1AsV0FBVyw2REFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQ08sNkJBQTZCLEtBQUs7QUFDekM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtGQUFtQixxRUFBcUU7QUFDcEc7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLHNGQUF1QixxRUFBcUU7QUFDeEc7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0FzeW5jQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yZXNvbHZlcnMvQWNjb3VudFJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcmVzb2x2ZXJzL1R3aXR0ZXJJZFJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nocm9taXVtL3NlcnZpY2VXb3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFzeW5jQ2FjaGUge1xyXG4gICAgc3RhdGljIFR3aXR0ZXJJRCA9IG5ldyBBc3luY0NhY2hlKCdUd2l0dGVySUQnKTtcclxuICAgIHByb21pc2VzID0ge31cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBleHBpcmF0aW9uVGltZSA9IDM2MDAwMDApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBleHBpcmF0aW9uVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRPbmUoYXJncykge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShbdGhpcy5uYW1lLCBhcmdzXSk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9ICgoYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjYWNoZScgKyBzdHIpKT8/e30pWydjYWNoZScgKyBzdHJdO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiBuZXcgRGF0ZSgpIC0gcmVzcG9uc2UuZGF0ZSA8IHRoaXMuZXhwaXJhdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogcmVzcG9uc2UudmFsdWV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRPbmUoYXJncywgdmFsdWUpIHtcclxuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoW3RoaXMubmFtZSwgYXJnc10pO1xyXG5cclxuICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgb2JqWydjYWNoZScgKyBzdHJdID0ge2RhdGU6ICtuZXcgRGF0ZSgpLCB2YWx1ZX1cclxuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQob2JqKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7cmVnVCwgY3VzdG9tVHdpdHRlckFjY291bnRzfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtUd2l0dGVySWRSZXNvbHZlcn0gZnJvbSBcIi4vVHdpdHRlcklkUmVzb2x2ZXJcIjtcclxuXHJcbmlmIChnbG9iYWxUaGlzLndpbmRvdyAhPSBnbG9iYWxUaGlzKSB7XHJcbiAgICBnbG9iYWxUaGlzLndpbmRvdyA9IGdsb2JhbFRoaXM7XHJcbn1cclxuXHJcbmNsYXNzIEFjY291bnRSZXNvbHZlckNsYXNzIHtcclxuXHJcbiAgICBhc3luYyBnZXQoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBcIiwgaWRlbnRpZmllcilcclxuICAgICAgICBpZiAoaWRlbnRpZmllci5tYXRjaChyZWdUKSkge1xyXG4gICAgICAgICAgICBsZXQgdHdpdHRlcklkID0gYXdhaXQgVHdpdHRlcklkUmVzb2x2ZXIuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIgfHwgaWRlbnRpZmllciA9PSBcIk5vdCBmb3VuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUd2l0dGVyIGhhbmRsZSBub3QgZm91bmQuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0QWNjb3VudEluZm8oaWRlbnRpZmllciwgdHdpdHRlcklkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub3QgbWF0Y2hpbmcgdHdpdHRlciByZWdleFxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0TWFueShpZGVudGlmaWVycykge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGJ1bGsgXCIsIGlkZW50aWZpZXJzKVxyXG4gICAgICAgIGxldCB0d2l0dGVyTmFtZXMgPSBpZGVudGlmaWVycy5maWx0ZXIoeCA9PiB4Lm1hdGNoKHJlZ1QpKTtcclxuICAgICAgICBsZXQgdHdpdHRlcklkcyA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBpZHMgZm9yIFwiLCB0d2l0dGVyTmFtZXMpXHJcbiAgICAgICAgaWYgKHR3aXR0ZXJOYW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHR3aXR0ZXJJZHMgPSBhd2FpdCBUd2l0dGVySWRSZXNvbHZlci5nZXRNYW55KHR3aXR0ZXJOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlkZW50aWZpZXIgb2YgaWRlbnRpZmllcnMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmdldEFjY291bnRJbmZvKGlkZW50aWZpZXIsIHR3aXR0ZXJJZHNbaWRlbnRpZmllcl0gPz8gbnVsbCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXQgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBwcm9taXNlIG9mIHByb21pc2VzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXRbKGF3YWl0IHByb21pc2UpLmlucHV0XSA9IGF3YWl0IHByb21pc2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG1hbnkgaXMgXCIscmV0KVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGdldEFjY291bnRJbmZvKGlkZW50aWZpZXIsIHR3aXR0ZXJJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZlU3RhcnQnLCBpZGVudGlmaWVyKTtcclxuICAgICAgICBsZXQgZm91bmRNYXRjaGVzID0ge31cclxuXHJcbiAgICAgICAgaWYgKCF0d2l0dGVySWQgfHwgdHdpdHRlcklkID09IFwiTm90IGZvdW5kXCIpIHtcclxuICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlR3aXR0ZXIgaGFuZGxlIG5vdCBmb3VuZC5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGRyb3Bkb3duc1xyXG4gICAgICAgIGlmIChjdXN0b21Ud2l0dGVyQWNjb3VudHNbdHdpdHRlcklkXSkge1xyXG4gICAgICAgICAgICBmb3VuZE1hdGNoZXNbaWRlbnRpZmllcl0gPSBjdXN0b21Ud2l0dGVyQWNjb3VudHNbdHdpdHRlcklkXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7aWRlbnRpZmllciwgdHdpdHRlcklkLCBmb3VuZE1hdGNoZXN9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wiaW5wdXRcIjogaWRlbnRpZmllciwgXCJyZXN1bHRcIjogZm91bmRNYXRjaGVzLCBcInR3aXR0ZXJJRFwiOiB0d2l0dGVySWR9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50UmVzb2x2ZXIgPSBuZXcgQWNjb3VudFJlc29sdmVyQ2xhc3MoKTsiLCJpbXBvcnQge0FzeW5jQ2FjaGV9IGZyb20gXCIuLi9Bc3luY0NhY2hlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJJZFJlc29sdmVyID0ge1xyXG4gICAgY2FjaGU6IEFzeW5jQ2FjaGUuVHdpdHRlcklELFxyXG4gICAgYXN5bmMgZ2V0KG5hbWUpIHtcclxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eQC8sICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBjYWNoZVJlc3BvbnNlXHJcbiAgICAgICAgdHJ5IHtjYWNoZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5jYWNoZS5nZXRPbmUobmFtZSk7fVxyXG4gICAgICAgIGNhdGNoIHtjYWNoZVJlc3BvbnNlPVwiXCJ9XHJcbiAgICAgICAgaWYgKGNhY2hlUmVzcG9uc2UpIHJldHVybiBjYWNoZVJlc3BvbnNlLnZhbHVlXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IChhd2FpdCB0aGlzLmFwaUNhbGwoW25hbWVdKSlbbmFtZV07XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0T25lKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRNYW55KG9yaWdpbmFsTmFtZXMpIHtcclxuICAgICAgICBsZXQgbmFtZXMgPSBvcmlnaW5hbE5hbWVzLm1hcCh4ID0+IHgucmVwbGFjZSgvXkAvLCAnJykudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b1JlYWQgPSBbXTtcclxuICAgICAgICBsZXQgcmV0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgbmFtZXMpIHtcclxuICAgICAgICAgICAgbGV0IGNhY2hlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNhY2hlLmdldE9uZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNhY2hlUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFtuYW1lLCBjYWNoZVJlc3BvbnNlLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b1JlYWQucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9SZWFkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLmFwaUNhbGwodG9SZWFkKVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdG9SZWFkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSByZXN1bHRzW25hbWUucmVwbGFjZSgvXkAvLCAnJykudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICByZXQucHVzaChbbmFtZSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0T25lKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhyZXQubWFwKChbaywgdl0pID0+IFtvcmlnaW5hbE5hbWVzLmZpbHRlcih4ID0+IHgucmVwbGFjZSgvXkAvLCAnJykudG9Mb3dlckNhc2UoKSA9PSBrKVswXSwgdl0pKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBhcGlDYWxsKG5hbWVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93d3cuaWRyaXNzLnh5ei92MS9nZXRUd2l0dGVySURQbHVnaW4/dXNlcm5hbWVzPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWVzLmpvaW4oJywnKSkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhyZXNwb25zZS50d2l0dGVySURzKS5tYXAoeCA9PiBbeFswXS50b0xvd2VyQ2FzZSgpLCB4WzFdXSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IHJlZ1QgPSAvXkBbYS16QS1aMC05X117MSwxNX0kLztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY3VzdG9tVHdpdHRlckFjY291bnRzID0ge1xyXG4gICAgLy8gR2l0Y29pbidzIHByb2ZpbGUgSURcclxuICAgICc4NTY0NDY0NTMxNTczNzYwMDMnOiB7XHJcbiAgICAgICAgY3VzdG9tSGVhZGVyOiBcIkRvbmF0ZSBvbiBHaXRjb2luXCIsXHJcbiAgICAgICAgY3VzdG9tVGV4dDogXCJEb25hdGUgZm9yIGFueSBwcm9qZWN0IGJ5IHZpc2l0aW5nIHRoZWlyIFR3aXR0ZXIgcGFnZSBvciB0aGUgR2l0Y29pbiBHcmFudCdzIHBhZ2Ug8J+SmlwiLFxyXG4gICAgICAgIGJ1dHRvblZhbHVlOiBcIkRvbmF0ZVwiLFxyXG4gICAgICAgIGhvc3RVUkw6IFwiaHR0cHM6Ly9leHBsb3Jlci5naXRjb2luLmNvLyMvcm91bmQvMS8weDEyYmI1YmJiZmU1OTZkYmM0ODlkMjA5Mjk5YjgzMDJjMzMwMGZhNDBcIixcclxuICAgICAgICByb3VuZEluZm86IFwiU29tZSBzdXBlciBjb29sIHJvdW5kIGluZm8gaGVyZSEhXCIsXHJcbiAgICAgICAgc2hvd05ldHdvcmtTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgc2hvd1ZhbHVlU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2tlblNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd0lucHV0OiBmYWxzZSxcclxuICAgICAgICBzaG93TWVzc2FnZUJveDogZmFsc2UsXHJcbiAgICAgICAgdG9rZW5GaWx0ZXI6IG51bGwsXHJcbiAgICAgICAgbmV0d29ya0ZpbHRlcjogbnVsbCxcclxuICAgIH0sXHJcbiAgICAnMTQxNjE5OTIyMDk3ODA4OTk4Nyc6IHtcclxuICAgICAgICBjdXN0b21IZWFkZXI6IFwiRG9uYXRlIG9uIEdpdGNvaW5cIixcclxuICAgICAgICBjdXN0b21UZXh0OiBcIkhlbHAgbWFraW5nIHdlYjMgbW9yZSB1c2FibGUgd2l0aCBldmVuIHRoZSBzbWFsbGVzdCBkb25hdGlvbiDwn5KaXCIsXHJcbiAgICAgICAgYnV0dG9uVmFsdWU6IFwiRG9uYXRlXCIsXHJcbiAgICAgICAgaG9zdFVSTDogXCJodHRwczovL2xlbm5hcmRldmVydHouZ2l0aHViLmlvL2V0aExpc2JvbjIwMjMvd2Vic2l0ZT9cIixcclxuICAgICAgICByb3VuZEluZm86IFwiRXZlcnkgaHVtYW4gb24gRWFydGggZGVzZXJ2ZXMgZnJpY3Rpb25sZXNzIGFjY2VzcyB0byBjcnlwdG8gYW5kIHRoZSBiZW5lZml0cyBjb21pbmcgZnJvbSB1c2luZyBpdDogY2hlYXAgYW5kIGluc3RhbnQgdHJhbnNhY3Rpb25zLCBpbXByb3ZlZCBzZWN1cml0eSAmIHByaXZhY3ksIGFuZCBpbnZlc3RtZW50IG9wcG9ydHVuaXRpZXMuIElEcmlzcyBpcyBvbiBhIG1pc3Npb24gdG8gaGVscCBwcm92aWRlIHRoYXQgYnkgYnVpbGRpbmcgYSBzdWl0ZSBvZiB0b29scyBtYWtpbmcgd2ViMyBtb3JlIHVzYWJsZSBmb3IgZXZlcnlvbmUuXCIsXHJcbiAgICAgICAgcmVjaXBpZW50OiBcIjB4NGEzNzU1ZUI5OWFlOGIyMkFhRkI4ZjE2RjBDNTFDRjY4RWI2MGI4NVwiLFxyXG4gICAgICAgIHNob3dOZXR3b3JrU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dWYWx1ZVNlbGVjdGlvbjogdHJ1ZSxcclxuICAgICAgICBzaG93VG9rZW5TZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIHNob3dJbnB1dDogZmFsc2UsXHJcbiAgICAgICAgc2hvd01lc3NhZ2VCb3g6IGZhbHNlLFxyXG4gICAgICAgIHRva2VuRmlsdGVyOiBudWxsLFxyXG4gICAgICAgIG5ldHdvcmtGaWx0ZXI6IG51bGwsXHJcbiAgICB9LFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtBY2NvdW50UmVzb2x2ZXJ9IGZyb20gXCIuLi9jb21tb24vcmVzb2x2ZXJzL0FjY291bnRSZXNvbHZlclwiO1xyXG5cclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcclxuICAgIGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdnZXRSb3VuZEluZm8nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdClcclxuICAgICAgICAgICAgQWNjb3VudFJlc29sdmVyLmdldChyZXF1ZXN0LnZhbHVlKS50aGVuKHggPT4gc2VuZFJlc3BvbnNlKHgpKS5jYXRjaChlID0+IHNlbmRSZXNwb25zZSh7fSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ2dldFJvdW5kSW5mb0J1bGsnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdClcclxuICAgICAgICAgICAgQWNjb3VudFJlc29sdmVyLmdldE1hbnkocmVxdWVzdC52YWx1ZSkudGhlbih4ID0+IHNlbmRSZXNwb25zZSh4KSkuY2F0Y2goZSA9PiBzZW5kUmVzcG9uc2Uoe30pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdnZXRJY29uVXJsJykge1xyXG4gICAgICAgICAgICBmZXRjaChjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ltZy9pY29uMTQ4LnBuZycpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZmV0Y2hSZXF1ZXN0ID0+IGZldGNoUmVxdWVzdC5ibG9iKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IHJlYWRCbG9iKGJsb2IpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oeCA9PiBzZW5kUmVzcG9uc2UoeCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5mdW5jdGlvbiByZWFkQmxvYihiKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGIpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9