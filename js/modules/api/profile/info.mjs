import * as storage from "../../storage/index.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../actions/authFetch.mjs";

/**
 * This function retrieves the profile name from localStorage.
 * @returns the name of the logged in user.
 */

export function profileName() {
    const profile = storage.getFromLocal("profile");
    const userName = profile.name;
    return userName;
}


/**
 * This function retrieves profile information from the API using the name of the logged in user
 * retrieved from local storage.
 * @returns the profile information.
 */
export async function getProfileInfo() {
    const profile = storage.getFromLocal("profile");
    const name = profile.name;
    
    const profileURL = `${API_BASE_URL}profiles/${name}?_listings=true`;
    const response = await authFetch(profileURL);
    const profileInfo = await response.json();
    return profileInfo;
}