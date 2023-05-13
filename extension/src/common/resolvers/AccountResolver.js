import {regT, customTwitterAccounts} from "../utils";
import {TwitterIdResolver} from "./TwitterIdResolver";

if (globalThis.window != globalThis) {
    globalThis.window = globalThis;
}

class AccountResolverClass {

    async get(identifier) {
        console.log("Calling ", identifier)
        if (identifier.match(regT)) {
            let twitterId = await TwitterIdResolver.get(identifier);
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
        let twitterNames = identifiers.filter(x => x.match(regT));
        let twitterIds = [];
        console.log("getting ids for ", twitterNames)
        if (twitterNames.length > 0) {
            twitterIds = await TwitterIdResolver.getMany(twitterNames);
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
        if (customTwitterAccounts[twitterId]) {
            foundMatches[identifier] = customTwitterAccounts[twitterId]
            console.log({identifier, twitterId, foundMatches})
        }
        return {"input": identifier, "result": foundMatches, "twitterID": twitterId}
    }
}

export const AccountResolver = new AccountResolverClass();