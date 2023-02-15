import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../listings/authFetch.mjs";
import * as storage from "../../storage/index.mjs";
const profile = storage.getFromLocal("profile");
const profileName = profile.name;
const method = "PUT";

export async function updateAvatar(data) {
    const URL = `${API_BASE_URL}profiles/${profileName}/media`;
    console.log(URL);
    const response = await authFetch(URL, {
        method,
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

const avatar = {
    "avatar" : "https://cdn4.vectorstock.com/i/1000x1000/93/48/male-paramedic-avatar-character-icon-vector-30899348.jpg"
}

//updateAvatar(avatar);