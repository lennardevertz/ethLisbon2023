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
        roundInfo: "Beta Round is over :(",
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
        customText: "Make web3 more usable with even the smallest donation 💚",
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
            _common_resolvers_AccountResolver__WEBPACK_IMPORTED_MODULE_0__.AccountResolver.get(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
            return true;
        } else if (request.type === 'getRoundInfoBulk') {
            _common_resolvers_AccountResolver__WEBPACK_IMPORTED_MODULE_0__.AccountResolver.getMany(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
            return true;
        } else if (request.type === 'closePopupWindow') {
            chrome.windows.remove(sender.tab.windowId);
            return true;
        } else if (request.type === 'openPopupWindow') {
            console.log("got silent open request")
            chrome.windows.create({
              url: request.value,
              type: 'popup',
              focused: false,
              width: 1,
              height: 1,
              left: -9999,
              top: -9999
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yZXNvbHZlcnMvQWNjb3VudFJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcmVzb2x2ZXJzL1R3aXR0ZXJJZFJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nocm9taXVtL3NlcnZpY2VXb3JrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFzeW5jQ2FjaGUge1xyXG4gICAgc3RhdGljIFR3aXR0ZXJJRCA9IG5ldyBBc3luY0NhY2hlKCdUd2l0dGVySUQnKTtcclxuICAgIHByb21pc2VzID0ge31cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBleHBpcmF0aW9uVGltZSA9IDM2MDAwMDApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblRpbWUgPSBleHBpcmF0aW9uVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRPbmUoYXJncykge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShbdGhpcy5uYW1lLCBhcmdzXSk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9ICgoYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdjYWNoZScgKyBzdHIpKT8/e30pWydjYWNoZScgKyBzdHJdO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiBuZXcgRGF0ZSgpIC0gcmVzcG9uc2UuZGF0ZSA8IHRoaXMuZXhwaXJhdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTogcmVzcG9uc2UudmFsdWV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRPbmUoYXJncywgdmFsdWUpIHtcclxuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoW3RoaXMubmFtZSwgYXJnc10pO1xyXG5cclxuICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgb2JqWydjYWNoZScgKyBzdHJdID0ge2RhdGU6ICtuZXcgRGF0ZSgpLCB2YWx1ZX1cclxuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQob2JqKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7cmVnVCwgY3VzdG9tVHdpdHRlckFjY291bnRzfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtUd2l0dGVySWRSZXNvbHZlcn0gZnJvbSBcIi4vVHdpdHRlcklkUmVzb2x2ZXJcIjtcclxuXHJcbmlmIChnbG9iYWxUaGlzLndpbmRvdyAhPSBnbG9iYWxUaGlzKSB7XHJcbiAgICBnbG9iYWxUaGlzLndpbmRvdyA9IGdsb2JhbFRoaXM7XHJcbn1cclxuXHJcbmNsYXNzIEFjY291bnRSZXNvbHZlckNsYXNzIHtcclxuXHJcbiAgICBhc3luYyBnZXQoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBcIiwgaWRlbnRpZmllcilcclxuICAgICAgICBpZiAoaWRlbnRpZmllci5tYXRjaChyZWdUKSkge1xyXG4gICAgICAgICAgICBsZXQgdHdpdHRlcklkID0gYXdhaXQgVHdpdHRlcklkUmVzb2x2ZXIuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBpZiAoIWlkZW50aWZpZXIgfHwgaWRlbnRpZmllciA9PSBcIk5vdCBmb3VuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUd2l0dGVyIGhhbmRsZSBub3QgZm91bmQuXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0QWNjb3VudEluZm8oaWRlbnRpZmllciwgdHdpdHRlcklkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBub3QgbWF0Y2hpbmcgdHdpdHRlciByZWdleFxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0TWFueShpZGVudGlmaWVycykge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGJ1bGsgXCIsIGlkZW50aWZpZXJzKVxyXG4gICAgICAgIGxldCB0d2l0dGVyTmFtZXMgPSBpZGVudGlmaWVycy5maWx0ZXIoeCA9PiB4Lm1hdGNoKHJlZ1QpKTtcclxuICAgICAgICBsZXQgdHdpdHRlcklkcyA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBpZHMgZm9yIFwiLCB0d2l0dGVyTmFtZXMpXHJcbiAgICAgICAgaWYgKHR3aXR0ZXJOYW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHR3aXR0ZXJJZHMgPSBhd2FpdCBUd2l0dGVySWRSZXNvbHZlci5nZXRNYW55KHR3aXR0ZXJOYW1lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGlkZW50aWZpZXIgb2YgaWRlbnRpZmllcnMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmdldEFjY291bnRJbmZvKGlkZW50aWZpZXIsIHR3aXR0ZXJJZHNbaWRlbnRpZmllcl0gPz8gbnVsbCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXQgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBwcm9taXNlIG9mIHByb21pc2VzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXRbKGF3YWl0IHByb21pc2UpLmlucHV0XSA9IGF3YWl0IHByb21pc2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG1hbnkgaXMgXCIscmV0KVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGdldEFjY291bnRJbmZvKGlkZW50aWZpZXIsIHR3aXR0ZXJJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZlU3RhcnQnLCBpZGVudGlmaWVyKTtcclxuICAgICAgICBsZXQgZm91bmRNYXRjaGVzID0ge31cclxuXHJcbiAgICAgICAgaWYgKCF0d2l0dGVySWQgfHwgdHdpdHRlcklkID09IFwiTm90IGZvdW5kXCIpIHtcclxuICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlR3aXR0ZXIgaGFuZGxlIG5vdCBmb3VuZC5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGRyb3Bkb3duc1xyXG4gICAgICAgIGlmIChjdXN0b21Ud2l0dGVyQWNjb3VudHNbdHdpdHRlcklkXSkge1xyXG4gICAgICAgICAgICBmb3VuZE1hdGNoZXNbaWRlbnRpZmllcl0gPSBjdXN0b21Ud2l0dGVyQWNjb3VudHNbdHdpdHRlcklkXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7aWRlbnRpZmllciwgdHdpdHRlcklkLCBmb3VuZE1hdGNoZXN9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wiaW5wdXRcIjogaWRlbnRpZmllciwgXCJyZXN1bHRcIjogZm91bmRNYXRjaGVzLCBcInR3aXR0ZXJJRFwiOiB0d2l0dGVySWR9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50UmVzb2x2ZXIgPSBuZXcgQWNjb3VudFJlc29sdmVyQ2xhc3MoKTsiLCJpbXBvcnQge0FzeW5jQ2FjaGV9IGZyb20gXCIuLi9Bc3luY0NhY2hlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJJZFJlc29sdmVyID0ge1xyXG4gICAgY2FjaGU6IEFzeW5jQ2FjaGUuVHdpdHRlcklELFxyXG4gICAgYXN5bmMgZ2V0KG5hbWUpIHtcclxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eQC8sICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBjYWNoZVJlc3BvbnNlXHJcbiAgICAgICAgdHJ5IHtjYWNoZVJlc3BvbnNlID0gYXdhaXQgdGhpcy5jYWNoZS5nZXRPbmUobmFtZSk7fVxyXG4gICAgICAgIGNhdGNoIHtjYWNoZVJlc3BvbnNlPVwiXCJ9XHJcbiAgICAgICAgaWYgKGNhY2hlUmVzcG9uc2UpIHJldHVybiBjYWNoZVJlc3BvbnNlLnZhbHVlXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IChhd2FpdCB0aGlzLmFwaUNhbGwoW25hbWVdKSlbbmFtZV07XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0T25lKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRNYW55KG9yaWdpbmFsTmFtZXMpIHtcclxuICAgICAgICBsZXQgbmFtZXMgPSBvcmlnaW5hbE5hbWVzLm1hcCh4ID0+IHgucmVwbGFjZSgvXkAvLCAnJykudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b1JlYWQgPSBbXTtcclxuICAgICAgICBsZXQgcmV0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgbmFtZXMpIHtcclxuICAgICAgICAgICAgbGV0IGNhY2hlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNhY2hlLmdldE9uZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGNhY2hlUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFtuYW1lLCBjYWNoZVJlc3BvbnNlLnZhbHVlXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b1JlYWQucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9SZWFkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLmFwaUNhbGwodG9SZWFkKVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdG9SZWFkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSByZXN1bHRzW25hbWUucmVwbGFjZSgvXkAvLCAnJykudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgICAgICAgICByZXQucHVzaChbbmFtZSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0T25lKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhyZXQubWFwKChbaywgdl0pID0+IFtvcmlnaW5hbE5hbWVzLmZpbHRlcih4ID0+IHgucmVwbGFjZSgvXkAvLCAnJykudG9Mb3dlckNhc2UoKSA9PSBrKVswXSwgdl0pKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBhcGlDYWxsKG5hbWVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93d3cuaWRyaXNzLnh5ei92MS9nZXRUd2l0dGVySURQbHVnaW4/dXNlcm5hbWVzPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWVzLmpvaW4oJywnKSkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhyZXNwb25zZS50d2l0dGVySURzKS5tYXAoeCA9PiBbeFswXS50b0xvd2VyQ2FzZSgpLCB4WzFdXSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IHJlZ1QgPSAvXkBbYS16QS1aMC05X117MSwxNX0kLztcclxuXHJcbmV4cG9ydCBjb25zdCBjdXN0b21Ud2l0dGVyQWNjb3VudHMgPSB7XHJcbiAgICAvLyBHaXRjb2luJ3MgcHJvZmlsZSBJRFxyXG4gICAgJzg1NjQ0NjQ1MzE1NzM3NjAwMyc6IHtcclxuICAgICAgICBjdXN0b21IZWFkZXI6IFwiRG9uYXRlIG9uIEdpdGNvaW5cIixcclxuICAgICAgICBjdXN0b21UZXh0OiBcIkRvbmF0ZSBmb3IgYW55IHByb2plY3QgYnkgdmlzaXRpbmcgdGhlaXIgVHdpdHRlciBwYWdlIG9yIHRoZSBHaXRjb2luIEdyYW50J3MgcGFnZSDwn5KaXCIsXHJcbiAgICAgICAgYnV0dG9uVmFsdWU6IFwiRG9uYXRlXCIsXHJcbiAgICAgICAgaG9zdFVSTDogXCJodHRwczovL2V4cGxvcmVyLmdpdGNvaW4uY28vIy9yb3VuZC8xLzB4MTJiYjViYmJmZTU5NmRiYzQ4OWQyMDkyOTliODMwMmMzMzAwZmE0MFwiLFxyXG4gICAgICAgIHJvdW5kSW5mbzogXCJCZXRhIFJvdW5kIGlzIG92ZXIgOihcIixcclxuICAgICAgICBzaG93TmV0d29ya1NlbGVjdGlvbjogdHJ1ZSxcclxuICAgICAgICBzaG93VmFsdWVTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgc2hvd1Rva2VuU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBzaG93SW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgIHNob3dNZXNzYWdlQm94OiBmYWxzZSxcclxuICAgICAgICB0b2tlbkZpbHRlcjogbnVsbCxcclxuICAgICAgICBuZXR3b3JrRmlsdGVyOiBudWxsLFxyXG4gICAgfSxcclxuICAgICcxNDE2MTk5MjIwOTc4MDg5OTg3Jzoge1xyXG4gICAgICAgIGN1c3RvbUhlYWRlcjogXCJEb25hdGUgb24gR2l0Y29pblwiLFxyXG4gICAgICAgIGN1c3RvbVRleHQ6IFwiTWFrZSB3ZWIzIG1vcmUgdXNhYmxlIHdpdGggZXZlbiB0aGUgc21hbGxlc3QgZG9uYXRpb24g8J+SmlwiLFxyXG4gICAgICAgIGJ1dHRvblZhbHVlOiBcIkRvbmF0ZVwiLFxyXG4gICAgICAgIGhvc3RVUkw6IFwiaHR0cHM6Ly9sZW5uYXJkZXZlcnR6LmdpdGh1Yi5pby9ldGhMaXNib24yMDIzL3dlYnNpdGU/XCIsXHJcbiAgICAgICAgcm91bmRJbmZvOiBcIkV2ZXJ5IGh1bWFuIG9uIEVhcnRoIGRlc2VydmVzIGZyaWN0aW9ubGVzcyBhY2Nlc3MgdG8gY3J5cHRvIGFuZCB0aGUgYmVuZWZpdHMgY29taW5nIGZyb20gdXNpbmcgaXQ6IGNoZWFwIGFuZCBpbnN0YW50IHRyYW5zYWN0aW9ucywgaW1wcm92ZWQgc2VjdXJpdHkgJiBwcml2YWN5LCBhbmQgaW52ZXN0bWVudCBvcHBvcnR1bml0aWVzLiBJRHJpc3MgaXMgb24gYSBtaXNzaW9uIHRvIGhlbHAgcHJvdmlkZSB0aGF0IGJ5IGJ1aWxkaW5nIGEgc3VpdGUgb2YgdG9vbHMgbWFraW5nIHdlYjMgbW9yZSB1c2FibGUgZm9yIGV2ZXJ5b25lLlwiLFxyXG4gICAgICAgIHJlY2lwaWVudDogXCIweDRhMzc1NWVCOTlhZThiMjJBYUZCOGYxNkYwQzUxQ0Y2OEViNjBiODVcIixcclxuICAgICAgICBzaG93TmV0d29ya1NlbGVjdGlvbjogdHJ1ZSxcclxuICAgICAgICBzaG93VmFsdWVTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgc2hvd1Rva2VuU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBzaG93SW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgIHNob3dNZXNzYWdlQm94OiBmYWxzZSxcclxuICAgICAgICB0b2tlbkZpbHRlcjogbnVsbCxcclxuICAgICAgICBuZXR3b3JrRmlsdGVyOiBudWxsLFxyXG4gICAgfSxcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7QWNjb3VudFJlc29sdmVyfSBmcm9tIFwiLi4vY29tbW9uL3Jlc29sdmVycy9BY2NvdW50UmVzb2x2ZXJcIjtcclxuXHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXHJcbiAgICBmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVxdWVzdC50eXBlID09PSAnZ2V0Um91bmRJbmZvJykge1xyXG4gICAgICAgICAgICBBY2NvdW50UmVzb2x2ZXIuZ2V0KHJlcXVlc3QudmFsdWUpLnRoZW4oeCA9PiBzZW5kUmVzcG9uc2UoeCkpLmNhdGNoKGUgPT4gc2VuZFJlc3BvbnNlKHt9KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC50eXBlID09PSAnZ2V0Um91bmRJbmZvQnVsaycpIHtcclxuICAgICAgICAgICAgQWNjb3VudFJlc29sdmVyLmdldE1hbnkocmVxdWVzdC52YWx1ZSkudGhlbih4ID0+IHNlbmRSZXNwb25zZSh4KSkuY2F0Y2goZSA9PiBzZW5kUmVzcG9uc2Uoe30pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdjbG9zZVBvcHVwV2luZG93Jykge1xyXG4gICAgICAgICAgICBjaHJvbWUud2luZG93cy5yZW1vdmUoc2VuZGVyLnRhYi53aW5kb3dJZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC50eXBlID09PSAnb3BlblBvcHVwV2luZG93Jykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvdCBzaWxlbnQgb3BlbiByZXF1ZXN0XCIpXHJcbiAgICAgICAgICAgIGNocm9tZS53aW5kb3dzLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdwb3B1cCcsXHJcbiAgICAgICAgICAgICAgZm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IC05OTk5LFxyXG4gICAgICAgICAgICAgIHRvcDogLTk5OTlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC50eXBlID09PSAnZ2V0SWNvblVybCcpIHtcclxuICAgICAgICAgICAgZmV0Y2goY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdpbWcvaWNvbjE0OC5wbmcnKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZldGNoUmVxdWVzdCA9PiBmZXRjaFJlcXVlc3QuYmxvYigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYmxvYiA9PiByZWFkQmxvYihibG9iKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHggPT4gc2VuZFJlc3BvbnNlKHgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gcmVhZEJsb2IoYikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChiKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==