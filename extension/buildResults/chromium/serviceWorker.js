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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3Jlc29sdmVycy9BY2NvdW50UmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yZXNvbHZlcnMvVHdpdHRlcklkUmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hyb21pdW0vc2VydmljZVdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXN5bmNDYWNoZSB7XHJcbiAgICBzdGF0aWMgVHdpdHRlcklEID0gbmV3IEFzeW5jQ2FjaGUoJ1R3aXR0ZXJJRCcpO1xyXG4gICAgcHJvbWlzZXMgPSB7fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGV4cGlyYXRpb25UaW1lID0gMzYwMDAwMCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5leHBpcmF0aW9uVGltZSA9IGV4cGlyYXRpb25UaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldE9uZShhcmdzKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KFt0aGlzLm5hbWUsIGFyZ3NdKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gKChhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ2NhY2hlJyArIHN0cikpPz97fSlbJ2NhY2hlJyArIHN0cl07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIG5ldyBEYXRlKCkgLSByZXNwb25zZS5kYXRlIDwgdGhpcy5leHBpcmF0aW9uVGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiByZXNwb25zZS52YWx1ZX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldE9uZShhcmdzLCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShbdGhpcy5uYW1lLCBhcmdzXSk7XHJcblxyXG4gICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICBvYmpbJ2NhY2hlJyArIHN0cl0gPSB7ZGF0ZTogK25ldyBEYXRlKCksIHZhbHVlfVxyXG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChvYmopXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtyZWdULCBjdXN0b21Ud2l0dGVyQWNjb3VudHN9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQge1R3aXR0ZXJJZFJlc29sdmVyfSBmcm9tIFwiLi9Ud2l0dGVySWRSZXNvbHZlclwiO1xyXG5cclxuaWYgKGdsb2JhbFRoaXMud2luZG93ICE9IGdsb2JhbFRoaXMpIHtcclxuICAgIGdsb2JhbFRoaXMud2luZG93ID0gZ2xvYmFsVGhpcztcclxufVxyXG5cclxuY2xhc3MgQWNjb3VudFJlc29sdmVyQ2xhc3Mge1xyXG5cclxuICAgIGFzeW5jIGdldChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsaW5nIFwiLCBpZGVudGlmaWVyKVxyXG4gICAgICAgIGlmIChpZGVudGlmaWVyLm1hdGNoKHJlZ1QpKSB7XHJcbiAgICAgICAgICAgIGxldCB0d2l0dGVySWQgPSBhd2FpdCBUd2l0dGVySWRSZXNvbHZlci5nZXQoaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIGlmICghaWRlbnRpZmllciB8fCBpZGVudGlmaWVyID09IFwiTm90IGZvdW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlR3aXR0ZXIgaGFuZGxlIG5vdCBmb3VuZC5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRBY2NvdW50SW5mbyhpZGVudGlmaWVyLCB0d2l0dGVySWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIG5vdCBtYXRjaGluZyB0d2l0dGVyIHJlZ2V4XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRNYW55KGlkZW50aWZpZXJzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGxpbmcgYnVsayBcIiwgaWRlbnRpZmllcnMpXHJcbiAgICAgICAgbGV0IHR3aXR0ZXJOYW1lcyA9IGlkZW50aWZpZXJzLmZpbHRlcih4ID0+IHgubWF0Y2gocmVnVCkpO1xyXG4gICAgICAgIGxldCB0d2l0dGVySWRzID0gW107XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGlkcyBmb3IgXCIsIHR3aXR0ZXJOYW1lcylcclxuICAgICAgICBpZiAodHdpdHRlck5hbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdHdpdHRlcklkcyA9IGF3YWl0IFR3aXR0ZXJJZFJlc29sdmVyLmdldE1hbnkodHdpdHRlck5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaWRlbnRpZmllciBvZiBpZGVudGlmaWVycykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZ2V0QWNjb3VudEluZm8oaWRlbnRpZmllciwgdHdpdHRlcklkc1tpZGVudGlmaWVyXSA/PyBudWxsKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJldCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldFsoYXdhaXQgcHJvbWlzZSkuaW5wdXRdID0gYXdhaXQgcHJvbWlzZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbWFueSBpcyBcIixyZXQpXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZ2V0QWNjb3VudEluZm8oaWRlbnRpZmllciwgdHdpdHRlcklkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc29sdmVTdGFydCcsIGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGxldCBmb3VuZE1hdGNoZXMgPSB7fVxyXG5cclxuICAgICAgICBpZiAoIXR3aXR0ZXJJZCB8fCB0d2l0dGVySWQgPT0gXCJOb3QgZm91bmRcIikge1xyXG4gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHdpdHRlciBoYW5kbGUgbm90IGZvdW5kLlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjdXN0b20gZHJvcGRvd25zXHJcbiAgICAgICAgaWYgKGN1c3RvbVR3aXR0ZXJBY2NvdW50c1t0d2l0dGVySWRdKSB7XHJcbiAgICAgICAgICAgIGZvdW5kTWF0Y2hlc1tpZGVudGlmaWVyXSA9IGN1c3RvbVR3aXR0ZXJBY2NvdW50c1t0d2l0dGVySWRdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpZGVudGlmaWVyLCB0d2l0dGVySWQsIGZvdW5kTWF0Y2hlc30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XCJpbnB1dFwiOiBpZGVudGlmaWVyLCBcInJlc3VsdFwiOiBmb3VuZE1hdGNoZXMsIFwidHdpdHRlcklEXCI6IHR3aXR0ZXJJZH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRSZXNvbHZlciA9IG5ldyBBY2NvdW50UmVzb2x2ZXJDbGFzcygpOyIsImltcG9ydCB7QXN5bmNDYWNoZX0gZnJvbSBcIi4uL0FzeW5jQ2FjaGVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVHdpdHRlcklkUmVzb2x2ZXIgPSB7XHJcbiAgICBjYWNoZTogQXN5bmNDYWNoZS5Ud2l0dGVySUQsXHJcbiAgICBhc3luYyBnZXQobmFtZSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15ALywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IGNhY2hlUmVzcG9uc2VcclxuICAgICAgICB0cnkge2NhY2hlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNhY2hlLmdldE9uZShuYW1lKTt9XHJcbiAgICAgICAgY2F0Y2gge2NhY2hlUmVzcG9uc2U9XCJcIn1cclxuICAgICAgICBpZiAoY2FjaGVSZXNwb25zZSkgcmV0dXJuIGNhY2hlUmVzcG9uc2UudmFsdWVcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gKGF3YWl0IHRoaXMuYXBpQ2FsbChbbmFtZV0pKVtuYW1lXTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXRPbmUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldE1hbnkob3JpZ2luYWxOYW1lcykge1xyXG4gICAgICAgIGxldCBuYW1lcyA9IG9yaWdpbmFsTmFtZXMubWFwKHggPT4geC5yZXBsYWNlKC9eQC8sICcnKS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgbGV0IHRvUmVhZCA9IFtdO1xyXG4gICAgICAgIGxldCByZXQgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICBsZXQgY2FjaGVSZXNwb25zZSA9IGF3YWl0IHRoaXMuY2FjaGUuZ2V0T25lKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0LnB1c2goW25hbWUsIGNhY2hlUmVzcG9uc2UudmFsdWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvUmVhZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b1JlYWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IHRoaXMuYXBpQ2FsbCh0b1JlYWQpXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiB0b1JlYWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJlc3VsdHNbbmFtZS5yZXBsYWNlKC9eQC8sICcnKS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICAgICAgICAgIHJldC5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXRPbmUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHJldC5tYXAoKFtrLCB2XSkgPT4gW29yaWdpbmFsTmFtZXMuZmlsdGVyKHggPT4geC5yZXBsYWNlKC9eQC8sICcnKS50b0xvd2VyQ2FzZSgpID09IGspWzBdLCB2XSkpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGFwaUNhbGwobmFtZXMpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5pZHJpc3MueHl6L3YxL2dldFR3aXR0ZXJJRFBsdWdpbj91c2VybmFtZXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZXMuam9pbignLCcpKSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlLnR3aXR0ZXJJRHMpLm1hcCh4ID0+IFt4WzBdLnRvTG93ZXJDYXNlKCksIHhbMV1dKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgcmVnVCA9IC9eQFthLXpBLVowLTlfXXsxLDE1fSQvO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjdXN0b21Ud2l0dGVyQWNjb3VudHMgPSB7XHJcbiAgICAvLyBHaXRjb2luJ3MgcHJvZmlsZSBJRFxyXG4gICAgJzg1NjQ0NjQ1MzE1NzM3NjAwMyc6IHtcclxuICAgICAgICBjdXN0b21IZWFkZXI6IFwiRG9uYXRlIG9uIEdpdGNvaW5cIixcclxuICAgICAgICBjdXN0b21UZXh0OiBcIkRvbmF0ZSBmb3IgYW55IHByb2plY3QgYnkgdmlzaXRpbmcgdGhlaXIgVHdpdHRlciBwYWdlIG9yIHRoZSBHaXRjb2luIEdyYW50J3MgcGFnZSDwn5KaXCIsXHJcbiAgICAgICAgYnV0dG9uVmFsdWU6IFwiRG9uYXRlXCIsXHJcbiAgICAgICAgaG9zdFVSTDogXCJodHRwczovL2V4cGxvcmVyLmdpdGNvaW4uY28vIy9yb3VuZC8xLzB4MTJiYjViYmJmZTU5NmRiYzQ4OWQyMDkyOTliODMwMmMzMzAwZmE0MFwiLFxyXG4gICAgICAgIHJvdW5kSW5mbzogXCJTb21lIHN1cGVyIGNvb2wgcm91bmQgaW5mbyBoZXJlISFcIixcclxuICAgICAgICBzaG93TmV0d29ya1NlbGVjdGlvbjogdHJ1ZSxcclxuICAgICAgICBzaG93VmFsdWVTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgc2hvd1Rva2VuU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBzaG93SW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgIHNob3dNZXNzYWdlQm94OiBmYWxzZSxcclxuICAgICAgICB0b2tlbkZpbHRlcjogbnVsbCxcclxuICAgICAgICBuZXR3b3JrRmlsdGVyOiBudWxsLFxyXG4gICAgfSxcclxuICAgICcxNDE2MTk5MjIwOTc4MDg5OTg3Jzoge1xyXG4gICAgICAgIGN1c3RvbUhlYWRlcjogXCJEb25hdGUgb24gR2l0Y29pblwiLFxyXG4gICAgICAgIGN1c3RvbVRleHQ6IFwiSGVscCBtYWtpbmcgd2ViMyBtb3JlIHVzYWJsZSB3aXRoIGV2ZW4gdGhlIHNtYWxsZXN0IGRvbmF0aW9uIPCfkppcIixcclxuICAgICAgICBidXR0b25WYWx1ZTogXCJEb25hdGVcIixcclxuICAgICAgICBob3N0VVJMOiBcImh0dHBzOi8vbGVubmFyZGV2ZXJ0ei5naXRodWIuaW8vZXRoTGlzYm9uMjAyMy93ZWJzaXRlP1wiLFxyXG4gICAgICAgIHJvdW5kSW5mbzogXCJFdmVyeSBodW1hbiBvbiBFYXJ0aCBkZXNlcnZlcyBmcmljdGlvbmxlc3MgYWNjZXNzIHRvIGNyeXB0byBhbmQgdGhlIGJlbmVmaXRzIGNvbWluZyBmcm9tIHVzaW5nIGl0OiBjaGVhcCBhbmQgaW5zdGFudCB0cmFuc2FjdGlvbnMsIGltcHJvdmVkIHNlY3VyaXR5ICYgcHJpdmFjeSwgYW5kIGludmVzdG1lbnQgb3Bwb3J0dW5pdGllcy4gSURyaXNzIGlzIG9uIGEgbWlzc2lvbiB0byBoZWxwIHByb3ZpZGUgdGhhdCBieSBidWlsZGluZyBhIHN1aXRlIG9mIHRvb2xzIG1ha2luZyB3ZWIzIG1vcmUgdXNhYmxlIGZvciBldmVyeW9uZS5cIixcclxuICAgICAgICByZWNpcGllbnQ6IFwiMHg0YTM3NTVlQjk5YWU4YjIyQWFGQjhmMTZGMEM1MUNGNjhFYjYwYjg1XCIsXHJcbiAgICAgICAgc2hvd05ldHdvcmtTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgc2hvd1ZhbHVlU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2tlblNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd0lucHV0OiBmYWxzZSxcclxuICAgICAgICBzaG93TWVzc2FnZUJveDogZmFsc2UsXHJcbiAgICAgICAgdG9rZW5GaWx0ZXI6IG51bGwsXHJcbiAgICAgICAgbmV0d29ya0ZpbHRlcjogbnVsbCxcclxuICAgIH0sXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0FjY291bnRSZXNvbHZlcn0gZnJvbSBcIi4uL2NvbW1vbi9yZXNvbHZlcnMvQWNjb3VudFJlc29sdmVyXCI7XHJcblxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxyXG4gICAgZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ2dldFJvdW5kSW5mbycpIHtcclxuICAgICAgICAgICAgQWNjb3VudFJlc29sdmVyLmdldChyZXF1ZXN0LnZhbHVlKS50aGVuKHggPT4gc2VuZFJlc3BvbnNlKHgpKS5jYXRjaChlID0+IHNlbmRSZXNwb25zZSh7fSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ2dldFJvdW5kSW5mb0J1bGsnKSB7XHJcbiAgICAgICAgICAgIEFjY291bnRSZXNvbHZlci5nZXRNYW55KHJlcXVlc3QudmFsdWUpLnRoZW4oeCA9PiBzZW5kUmVzcG9uc2UoeCkpLmNhdGNoKGUgPT4gc2VuZFJlc3BvbnNlKHt9KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC50eXBlID09PSAnY2xvc2VQb3B1cFdpbmRvdycpIHtcclxuICAgICAgICAgICAgY2hyb21lLndpbmRvd3MucmVtb3ZlKHNlbmRlci50YWIud2luZG93SWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ29wZW5Qb3B1cFdpbmRvdycpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3Qgc2lsZW50IG9wZW4gcmVxdWVzdFwiKVxyXG4gICAgICAgICAgICBjaHJvbWUud2luZG93cy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgIHVybDogcmVxdWVzdC52YWx1ZSxcclxuICAgICAgICAgICAgICB0eXBlOiAncG9wdXAnLFxyXG4gICAgICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICAgICAgICBsZWZ0OiAtOTk5OSxcclxuICAgICAgICAgICAgICB0b3A6IC05OTk5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ2dldEljb25VcmwnKSB7XHJcbiAgICAgICAgICAgIGZldGNoKGNocm9tZS5ydW50aW1lLmdldFVSTCgnaW1nL2ljb24xNDgucG5nJykpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmZXRjaFJlcXVlc3QgPT4gZmV0Y2hSZXF1ZXN0LmJsb2IoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4gcmVhZEJsb2IoYmxvYikpXHJcbiAgICAgICAgICAgICAgICAudGhlbih4ID0+IHNlbmRSZXNwb25zZSh4KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmZ1bmN0aW9uIHJlYWRCbG9iKGIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYik7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=