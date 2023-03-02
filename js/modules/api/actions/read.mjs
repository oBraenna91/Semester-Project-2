import { authFetch } from "./authFetch.mjs";
import { API_BASE_URL } from "../../constants/constants.mjs";

const action = "listings";

/**
 * This function retrieves all active listings in an array.
 * @returns the listings in an array.
 */

export async function getListings() {
    const getListningsURL = `${API_BASE_URL}${action}?_active=true`;
    const response = await authFetch(getListningsURL);
    const result = await response.json();
    return result;
}

/**
 * This function retrieves a single listing with additional bidding information.
 * @param {string} id is the ID of the listing. 
 * @returns the listing with the additional bidding information.
 */
export async function getListing(id) {
    if(!id) {
        throw new Error("Requires Listing id")
    }
    const getListingURL = `${API_BASE_URL}${action}/${id}?_bids=true`;
    const response = await authFetch(getListingURL);
    const result = await response.json();
    if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        window.location.replace("/home/");
    }
    return result;
}