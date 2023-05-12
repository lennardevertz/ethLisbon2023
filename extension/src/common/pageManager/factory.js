import {TwitterPageManager} from "./twitterPageManager";

// can add other websites here,
// stay with Twtitter for the scope of this hackathon
const specificDomainList = {
    "twitter.com": TwitterPageManager,
}

// runs only if visited page is in specificDomainList
export async function pageManagerFactory(document, url) {
    let specific = Object.entries(specificDomainList).find(([domain, constructor]) => url.hostname === domain || url.hostname.endsWith('.' + domain))
    if (specific) {
        return new specific[1](document)
    }
}