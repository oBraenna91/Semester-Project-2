import { API_BASE_AUTH } from "../../constants/constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "login";
const method = "POST";

/**
 * This function logs a user in and stores the accessToken and profile information in the
 * localStorage. It also gives the user feedback if the login was successfull or not and redirects
 * the user.
 * @param {object} profile contains the username and password. 
 */

export async function login(profile) {
    const url = API_BASE_AUTH + action;
    const body = JSON.stringify(profile);

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body,
    })


    const result = await response.json();
    const { accessToken, ...user } = result;

    storage.saveToLocal("accessToken", accessToken);
    storage.saveToLocal("profile", user);
    
    if (response.status === 200) {
        alert("You are now logged in!");
        window.location.href="/profile";
    }else if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        location.reload();
    }
}