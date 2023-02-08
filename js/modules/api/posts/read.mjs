import { authFetch } from "./authFetch.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";

const action = "listings";

export async function getListings() {
    const getListningsURL = `${API_BASE_URL}${action}`;
    const response = await authFetch(getListningsURL);
    const results = await response.json();
    console.log(results);
    //return await response.json();
}

getListings();

export async function getListing(id) {
    if(!id) {
        throw new Error("Requires Listing id")
    }
    const getListingURL = `${API_BASE_URL}${action}/${id}`;
    const response = await authFetch(getListingURL);
    return await response.json();
}