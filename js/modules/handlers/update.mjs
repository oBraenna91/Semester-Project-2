import { updateAvatar } from "../api/profile/update.mjs";

/**
 * This function sets an addEventListener to the updateAvatarForm,
 * extracts the user input and uses the updateAvatar function to allow
 * the user to update their avatar.
 */
export async function setUpdateAvatarListener() {
    const form = document.querySelector("#updateAvatarForm");

    if(form) {
        const button = document.querySelector("#updateAvatarButton");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            if(form.url.value === 0) {
                alert("Please provide a valid URL")
            }
            const avatarURL = form.url.value;
            const body = {
                "avatar" : `${avatarURL}`
            }
            updateAvatar(body);
        })
    }
}