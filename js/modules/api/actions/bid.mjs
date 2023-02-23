import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const method = "POST";
const amount = {
    "amount": 100
};

export async function bidOnListing(id, amount) {
    const listingURL = `${API_BASE_URL}listings/${id}/bids`;

    const response = await authFetch(listingURL, {
        method,
        body: JSON.stringify(amount)
    });
    const result = await response.json();
    if (response.ok === true) {
        alert("You bid on this item!")
    }
    console.log(response);
    console.log(result);
    return result;
}