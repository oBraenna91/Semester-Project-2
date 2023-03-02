import * as storage from "../../storage/index.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../actions/authFetch.mjs";

/**
 * This function retrieves all bids made by a user from the API, using the logged in users name
 * retrieved from local storage.
 * @returns an array with the bids.
 */
export async function getProfileBids() {
    const profile = storage.getFromLocal("profile");
    const name = profile.name;
    const URL = `${API_BASE_URL}profiles/${name}/bids?_listings=true`
    const response = await authFetch(URL);
    return await response.json();
}

/**
 * This function retrieves all active listings from the API for the profile of the logged in user.
 * @returns the active listings in an array.
 */
export async function getProfileListings() {
    const profile = storage.getFromLocal("profile");
    const name = profile.name;
    const URL = `${API_BASE_URL}profiles/${name}/listings?_active=true`
    const response = await authFetch(URL);
    return await response.json();
}