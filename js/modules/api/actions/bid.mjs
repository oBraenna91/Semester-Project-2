import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const method = "POST";

/**
 * This function creates a bid on a listing, using the "POST" method and the authFetch funtion.
 * @param {string} id should be the unique ID of the listing the user wants to bid on. 
 * @param {number} amount is the amount of credits the user wants to bid on the listing. 
 * @returns the result body of the request.
 */

export async function bidOnListing(id, amount) {
    const listingURL = `${API_BASE_URL}listings/${id}/bids`;

    const response = await authFetch(listingURL, {
        method,
        body: JSON.stringify(amount)
    });
    const result = await response.json();
    if (response.ok === true) {
        alert("You bid on this item!")
    }if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        location.reload();
    }
    return result;
}