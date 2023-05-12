import css from "./popup.scss";

export class AbstractPageManager {

    constructor(document) {
        this.document = document;
        this.reverseKnownAddresses = {};
    }

    generateRoundInfo(div, key, element, callback) {
        div.attachShadow({mode: 'open'})
        let style = document.createElement('style')
        div.shadowRoot.append(style);
        if (Object.values(elements).length == 0) {
            let item = document.createElement('div')
            item.className = 'empty';
            item.append("No round info found :(");
            let a = document.createElement('a')
            a.textContent = 'Add your project.';
            a.href = 'https://github.com/lennardevertz/ethLisbon2023';
            a.target = '_blank';
            item.append(a)
            div.shadowRoot.append(item)
            return
        }
        let infoElem = document.createElement('div');
        infoElem.textContent = element[roundInfo];
        div.append(infoElem)
        return
    }

    getRoundInfo(value) {
        return new Promise((resolve, reject) => {
            console.log("Getting round info somehow")
        });
    }

    isEnabled() {
        return new Promise(r => chrome.storage.local.get(['enabled'], x => r(x?.enabled ?? true)))
    }
}