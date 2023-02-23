import { logOut } from "../api/authentication/logout.mjs"; 

export function setLogoutFormListener() {
    const button = document.querySelector("#logout-button");

    button.addEventListener("click", (event) => {
        logOut();
        alert("Successfully logged out!");
    })
};