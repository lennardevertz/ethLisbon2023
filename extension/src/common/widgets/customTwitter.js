import css from "./content/widgetStyle.scss";
import {create} from "fast-creator";
import {CustomizedDapp} from "./content/CustomizedDonationsWidget";


export class CustomTwitter {
    constructor(data) {
        this.div = document.createElement('div')
        this.div.attachShadow({mode: 'open'})
        this.div.shadowRoot.append(create('style', {text: css}));

        let popup = create('section.tipping-popup')
        this.div.shadowRoot.append(popup);

        popup.append(new CustomizedDapp(data).html);
        popup.addEventListener('customEvent', async (e) => {
            console.log({e, data})
            // set url params that can be processed by third party app
            let params = {
                amount: e.amount ?? null,
                network: e.network ?? null,
                token: e.token ?? null,
                message: e.message ?? null,
                input: e.input ?? null,
                other: e.other ?? null
            }
            window.open(data['hostURL'] + Object.entries(params).filter(([k, v]) => v).map(x => encodeURIComponent(x[0]) + '=' + encodeURIComponent(x[1])).join('&'))
        })
    }
}
