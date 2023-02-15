import * as storage from "../../storage/index.mjs";

export function logOut(){
    storage.removeFromLocal("profile");
    storage.removeFromLocal("accessToken");
};
logOut();