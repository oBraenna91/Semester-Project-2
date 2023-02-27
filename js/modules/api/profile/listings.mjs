import * as storage from "../../storage/index.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../actions/authFetch.mjs";

export async function getProfileBids() {
    const profile = storage.getFromLocal("profile");
    const name = profile.name;
    const URL = `${API_BASE_URL}profiles/${name}/bids?_listings=true`
    const response = await authFetch(URL);
    return await response.json();
}

export async function getProfileListings() {
    const profile = storage.getFromLocal("profile");
    const name = profile.name;
    const URL = `${API_BASE_URL}profiles/${name}/listings?_active=true`
    const response = await authFetch(URL);
    return await response.json();
}