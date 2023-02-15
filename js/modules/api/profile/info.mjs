import * as storage from "../../storage/index.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../listings/authFetch.mjs";

export function profileName() {
    const profile = storage.getFromLocal("profile");
    const userName = profile.name;
    return userName;
}



export async function getProfileInfo() {
    const profile = storage.getFromLocal("profile");
    const name = profile.name;
    
    const profileURL = `${API_BASE_URL}profiles/${name}?_listings=true`;
    const response = await authFetch(profileURL);
    const profileInfo = await response.json();
    //console.log(profileInfo);
}

//getProfile();