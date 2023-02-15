import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "listings";
const method = "POST";

const trialListing = {
    "title" : "testuser911-listing",
    "endsAt" : "2023-02-17T00:00:00.000Z"
};

export async function createListing(listingData) {
    const createListingURL = `${API_BASE_URL}${action}`;

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(listingData)
    });
    const result = await response.json();
    if (response.ok === true) {
        alert("Listing created!")
    }
    console.log(response);
    console.log(result);
    return result;
}

//createListing(trialListing);

