import { API_BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const method = "POST";

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