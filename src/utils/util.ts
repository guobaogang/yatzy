import storage from "./storage";
import {TOKEN_KEY} from "../cosntant";

export function setToken(token: string) {
    storage.set(TOKEN_KEY, token)
}

export function getToken() {
    return storage.get(TOKEN_KEY);
}

export function removeToken(){
    storage.remove(TOKEN_KEY);
}
