import { register } from "../api/authentication/register.mjs";

/**
 * This function sets an addEventListener to the registerFrom,
 * extracts the form inputs and uses the regiser function to
 * register the user.
 */

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())

        register(profile);
    })
};