import { API_BASE_AUTH } from "../../constants/constants.mjs";

const action = "register";
const method = "POST";

/**
 * This function registers a user and alerts the user if the profile has been registered
 * successfully or what the error message is, and redirects the user.
 * @param {object} profileInfo consists of the name of the user, the email and the chosen
 * password. 
 * @returns the result.
 */

export async function register(profileInfo) {
    const url = API_BASE_AUTH+action;
    const body = JSON.stringify(profileInfo);

    const response = await fetch(url, {
        headers: {
            "Content-Type" : "application/json"
        },
        method,
        body,
    })

    const result = await response.json();
    
    if (response.status === 201) {
        alert("Profile registered successfully!");
        window.location.href="/login/";
    }if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        location.reload();
    return result;
    }
}
