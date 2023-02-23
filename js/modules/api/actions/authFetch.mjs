import * as storage from "../../storage/index.mjs";

export function headers() {
    const token = storage.getFromLocal('accessToken');
    return {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}`,
    }
};

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
};