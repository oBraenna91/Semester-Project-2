import { login } from "../api/authentication/login.mjs";

/**
 * This function sets an addEventListener to the loginForm,
 * extracts the user inputs and uses the login function to log the user in.
 */

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());

        login(profile);
    })
};