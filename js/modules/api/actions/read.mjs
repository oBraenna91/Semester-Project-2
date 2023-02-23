import { authFetch } from "./authFetch.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";

const action = "listings";

export async function getListings() {
    const getListningsURL = `${API_BASE_URL}${action}?_active=true`;
    const response = await authFetch(getListningsURL);
    return await response.json();
}


export async function getListing(id) {
    if(!id) {
        throw new Error("Requires Listing id")
    }
    const getListingURL = `${API_BASE_URL}${action}/${id}?_bids=true`;
    const response = await authFetch(getListingURL);
    const result = await response.json();
    const bids = result.bids;
    return result;
    //console.log(bids[0].amount);
    //return await response.json();
}