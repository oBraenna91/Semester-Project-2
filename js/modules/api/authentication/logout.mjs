import * as storage from "../../storage/index.mjs";

/**
 * This function removes the profile information and accessToken from localStorage.
 */
export function logOut(){
    storage.removeFromLocal("profile");
    storage.removeFromLocal("accessToken");
};
