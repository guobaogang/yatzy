function set(key: string, val: any) {
    if (isObject(val)) {
        val = JSON.stringify(val);
    }
    localStorage.setItem(key, val);
}

function get(key: string) {
    return localStorage.getItem(key);
}

function remove(key: string) {
    localStorage.removeItem(key);
}

function isObject(data: any) {
    return Object.prototype.toString.call(data) === "[object Object]"
}

export default {
    set,
    get,
    remove
}

