import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../actions/authFetch.mjs";
import * as storage from "../../storage/index.mjs";


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
    }
    else{
        alert("Oops! Something went wrong! Please try again!")
        location.reload();
    }
    return result;
}
