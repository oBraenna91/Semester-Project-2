import { updateAvatar } from "../api/profile/update.mjs";

export async function setUpdateAvatarListener() {
    const form = document.querySelector("#updateAvatarForm");

    if(form) {
        const button = document.querySelector("#updateAvatarButton");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            const avatarURL = form.url.value;
            const body = {
                "avatar" : `${avatarURL}`
            }
            updateAvatar(body);
        })
    }
}