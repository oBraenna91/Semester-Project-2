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

//getListings();

export async function getListing(id) {
    if(!id) {
        throw new Error("Requires Listing id")
    }
    const getListingURL = `${API_BASE_URL}${action}/${id}?_bids=true`;
    const response = await authFetch(getListingURL);
    const result = await response.json();
    const bids = result.bids;
    console.log(bids[0].amount);
    //return await response.json();
}

getListing("7973b23f-88cd-4d43-b723-d470d1819af1");

export async function getProfileListings(name) {
    const URL = `${API_BASE_URL}profiles/${name}`
    const response = await authFetch(URL);
    return await response.json();
}
//getProfileListings(userName);