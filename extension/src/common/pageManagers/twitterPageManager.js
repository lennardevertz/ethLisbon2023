import {AbstractPageManager} from "./abstractPageManager";
import {RequestLimiter} from "../RequestLimiter";
import {CustomTwitter} from "../widgets/customTwitter";

export class TwitterPageManager extends AbstractPageManager {
    static namesResults = {};

    constructor(document) {
        super(document)
    }

    async init() {
        this.requestLimiter = new RequestLimiter([{amount: 10, time: 1000}]);
        this.iconUrl = await this.getIcon()
        this.check()
        addEventListener('load', () => this.check())
        addEventListener('focus', () => setTimeout(() => this.check(), 250))
        addEventListener('popstate', () => this.check())
        addEventListener('click', () => setTimeout(() => this.check(), 250))
        addEventListener('click', e => {
        console.log(e.srcElement)
        console.log(this.lastDropdown)
            if (e.srcElement != this.lastDropdown) this.lastDropdown?.remove();
        });
        setInterval(() => this.check(), 2000);
    }

    async check() {
        if (await this.isEnabled()) {
            this.searchPlaces();
        } else {
            Array.from(document.querySelectorAll('.icon')).forEach(x => x.remove());
        }
        this.checkGarbageDropdown();
    }

    async searchPlaces() {
        const places = Array.from(this.listPlaces());
        const names = new Set(places.map(x => x.name).filter(x => x));
        await this.getInfo(names);
        for (const place of places) {
            TwitterPageManager.namesResults[place.name].then(x => {
                place.addCallback(x?.result ?? {});
            })
        }
    }

    checkGarbageDropdown() {
        const selector = '.icon:focus, .icon:hover, .iconTwitterDropdown:hover, .iconTwitterDropdown:focus, .iconTwitterDropdown.isClicked';
        if (!document.querySelector(selector)) {
            console.log("Running garbage collector")
            setTimeout(() => {
                if (!document.querySelector(selector)) {
                    this.lastDropdown?.remove();
                }
            }, 500);
        }
    }

    async getInfo(names) {
        const lacking = Array.from(names).filter(x => !TwitterPageManager.namesResults[x]);
        if (lacking.length == 0) return

        let requestPromise = this.apiCall(lacking);
        for (const name of lacking) {
            TwitterPageManager.namesResults[name] = requestPromise.then(d => d[name]);
        }
        await requestPromise;
    }

    async apiCall(names) {
        let responses = await this.requestLimiter.scheduleMany(names, (x) => {
            return new Promise((resolve, reject) => {
                console.log("getting bulk round info")
                chrome.runtime.sendMessage({
                    type: "getRoundInfoBulk",
                    value: x
                }, response => {
                    resolve(response);
                });
            });
        });
        return responses.reduce((a, b) => ({...a, ...b}));
    }

    getIcon() {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({
                type: "getIconUrl"
            }, response => {
                resolve(response);
            });
        });
    }

    * listPlaces() {
        for (const div of document.querySelectorAll('div.r-dnmrzs.r-1ny4l3l, .r-gtdqiz .css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci, .css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci')) {
            if (div.matches('.css-1dbjc4n.r-xoduu5.r-1wbh5a2.r-dnmrzs.r-1ny4l3l')) continue;
            const name = Array.from(div.querySelectorAll('.r-9ilb82, .r-14j79pv, .r-rjixqe')).map(x => x.textContent).find(x => x[0] == '@');
            if(!name) continue;
            let existingIcon = div.querySelector('.icon');
            if (existingIcon) {
                if (existingIcon.dataset.sourceName == name) {
                    continue;
                } else {
                    existingIcon.remove()
                    existingIcon = null
                }
            }
            const addCallback = (data) => {
              if (!data.error && !div.querySelector(".icon")) {
                if (Object.values(data).length !== 0) {
                  const dropdownContent = new CustomTwitter(data[name]).div
                  this.createIcon(div, data, dropdownContent, name);
                }
              }
            };
            if (name) {
                yield {name, addCallback};
            }
        }
    }

    createIcon = (parent, data, dropdownContent, name) => {
      const icon = document.createElement("div");
      icon.className = "icon";
      icon.dataset.sourceName = name;
      icon.style.width = "1.1em";
      icon.style.height = "1.1em";
      icon.style.margin = "-1px 0 -1px 0";
      icon.style.borderTop = "2px solid transparent";
      icon.style.borderbottom = "2px solid transparent";
      icon.style.borderLeft = "0.3em solid transparent";
      icon.style.borderRight = "0.3em solid transparent";
      icon.style.background = `url(${this.iconUrl}) no-repeat`;
      icon.style.backgroundSize = `contain`;
      icon.onmouseover = (e) => e.stopPropagation();
      icon.setAttribute("tabindex", "-1");
      const dropdown = document.createElement("div");
//      dropdown.addEventListener("click", (e) => e.stopPropagation());
      icon.append(dropdown);
      parent
        .querySelector(
          ".r-1fmj7o5:not(h2), .r-18jsvk2:not(h2), .r-1nao33i:not(h2), .r-vlxjld:not(h2)"
        )
        ?.append(icon);
      icon.onmouseover = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let dropdown = dropdownContent;
        this.document.body.append(dropdown);
        let rect = icon.getBoundingClientRect();
        dropdown.classList.add("iconTwitterDropdown");
        dropdown.style.position = "absolute";
        dropdown.style.left = scrollX + rect.left + "px";
        dropdown.style.top = scrollY + rect.top + rect.height + "px";
        dropdown.style.zindex = 1000000;
        dropdown.onclick = () => {dropdown.classList.add("isClicked");}

        if (dropdown !== this.lastDropdown) {
          this.lastDropdown?.remove();
        }
        this.lastDropdown = dropdown;

        const eventCallback = () => {
          if (
            !dropdown.matches(":hover, :focus, :focus-within, .isClicked") &&
            !icon.matches(":hover, :focus, :focus-within")
          ) {
            setTimeout(() => this.checkGarbageDropdown(), 200);
            removeEventListener("scroll", eventCallback);
          }
        };

        dropdown.onmouseout = () => {
          setTimeout(() => this.checkGarbageDropdown(), 200);
        };
        dropdown.shadowRoot.addEventListener("close", () => dropdown.remove());
        icon.onblur = eventCallback;
        addEventListener("scroll", eventCallback);
      };
      icon.onclick = (e) => {
        dropdown.classList.add("isClicked");
        e.stopPropagation();
      };

      return { icon };
    };
}