import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../../api/actions/authFetch.mjs";

const action = "listings";
const method = "POST";

export async function createListing(listingData) {
    const createListingURL = `${API_BASE_URL}${action}`;

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(listingData)
    });
    const result = await response.json();
    console.log(response);
    console.log(result);
    if (response.ok === true) {
        alert("Listing created!");
        window.location.href="/profile/";
    }if(response.ok != true) {
        alert(`${result['errors'][0].message}`)
        location.reload();
    }
    return result;
}