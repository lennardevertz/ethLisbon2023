import {AbstractPageManager} from "./abstractPageManager";

export class StandalonePageManager extends AbstractPageManager {
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