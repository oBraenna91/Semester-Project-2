import { bidOnListing } from "../api/actions/bid.mjs";
import { extractID } from "../api/actions/extract.mjs";

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
            bidOnListing(id, amountToSend);
        })
    }
}