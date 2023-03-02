import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../../api/actions/authFetch.mjs";

const action = "listings";
const method = "POST";

/**
 * This function will allow a user to create a listing, and gives the user feedback if the listing
 * has successfully been created or an error message if not.
 * @param {object} listingData should contain at least a title for the listing and a time for the 
 * auction to end(endsAt). 
 * @returns the result of the response.
 */

export async function createListing(listingData) {
    const createListingURL = `${API_BASE_URL}${action}`;

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(listingData)
    });
    const result = await response.json();
    if (response.ok === true) {
        alert("Listing created!");
        window.location.href="/profile/";
    }if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        location.reload();
    }
    return result;
}