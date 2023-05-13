import {AccountResolver} from "../common/resolvers/AccountResolver";


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type === 'getRoundInfo') {
            AccountResolver.get(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
            return true;
        } else if (request.type === 'getRoundInfoBulk') {
            AccountResolver.getMany(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
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
