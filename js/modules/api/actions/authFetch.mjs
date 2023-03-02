import * as storage from "../../storage/index.mjs";

/**
 * This function contains the necessary headers of the authorized API call.
 * It retrieves the accesstoken from localstorage.
 * @returns the headers object to send with the request headers.
 */

export function headers() {
    const token = storage.getFromLocal('accessToken');
    return {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}`,
    }
};

/**
 * This function sends an authorized API call request
 * @param {string} url is the URL where you want the request to be sent.
 * @param options this is the options of the request, such as what kind of request you will send.
 * (e.g. GET, POST, PUT, DELETE etc)
 */
export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
};