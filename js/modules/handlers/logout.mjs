import { logOut } from "../api/authentication/logout.mjs"; 

/**
 * This function sets an addEventListener to the logout-button and
 * logs the user out using the logOut function and alers the user that
 * they are successfully logged out.
 */
export function setLogoutFormListener() {
    const button = document.querySelector("#logout-button");

    button.addEventListener("click", (event) => {
        logOut();
        alert("Successfully logged out!");
    })
};