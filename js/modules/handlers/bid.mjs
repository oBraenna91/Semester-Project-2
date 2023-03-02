import { bidOnListing } from "../api/actions/bid.mjs";
import { extractID } from "../api/actions/extract.mjs";
import * as storage from "../storage/index.mjs";


/**
 * This function sets an addEventListener to the makeABidForm
 * for the user to be able to bid on a item using the bidOnListing function,
 * and alerts the user if they are not logged in and redirects to the login page.
 */
export async function setBidOnListingHandler() {
        const form = document.querySelector("#makeABidForm");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const id = extractID();
            const listingForm = event.target;
            const formData = new FormData(listingForm);
            const amount = Object.fromEntries(formData.entries());
            const newAmount = parseInt(amount.amount);
            const amountToSend = {
                "amount" : newAmount
            }
            if(storage.getFromLocal("accessToken")) {
            bidOnListing(id, amountToSend);
            }else{
                alert("You are not logged in! Please log in to bid on this auction")
                window.location.href="/login/"
            }
        })
    }
}