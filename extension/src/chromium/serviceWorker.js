import {AccountResolver} from "../common/resolvers/AccountResolver";


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type === 'getRoundInfo') {
        console.log(request)
            AccountResolver.get(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
            return true;
        } else if (request.type === 'getRoundInfoBulk') {
        console.log(request)
            AccountResolver.getMany(request.value).then(x => sendResponse(x)).catch(e => sendResponse({}));
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
