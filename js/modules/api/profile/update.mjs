import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../actions/authFetch.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * This function allows the user to update the avatar on their profile and provides an alert
 * if the request was successfull or not.
 * @param {object} data contains the URL of the image the user wants as an avatar. 
 * @returns the result of the request.
 */
export async function updateAvatar(data) {
    const profile = storage.getFromLocal("profile");
    const profileName = profile.name;
    const method = "PUT";
    
    const URL = `${API_BASE_URL}profiles/${profileName}/media`;
    const response = await authFetch(URL, {
        method,
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if(response.status === 200){
        alert("Avatar updated successfully!")
        location.reload();
    }else if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        location.reload();
    return result;
    }
}
