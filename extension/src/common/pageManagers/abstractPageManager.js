import css from "./popup.scss";

export class AbstractPageManager {

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