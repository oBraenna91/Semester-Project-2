import { createListing } from "../api/actions/create.mjs";

export async function setCreateListingListener() {
    const form = document.querySelector("#createListingForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const listingForm = event.target;
            const formData = new FormData(listingForm);
            const listingData = Object.fromEntries(formData.entries());
            const month = document.querySelector("#createMonth");
            const day = document.querySelector("#createDay");
            const hour = document.querySelector("#createHour");
            const minute = document.querySelector("#createMinute");
            const endsAt = `2023-${month.value}-${day.value}T${hour.value}:${minute.value}:00.000Z`
            console.log(endsAt);
            const media = [];
            if(listingData.media1.length >= 1) {
                media.push(listingData.media1);
            }
            if(listingData.media2.length >= 1) {
                media.push(listingData.media2);
            }
            if(listingData.media3.length >= 1) {
                media.push(listingData.media3);
            }
            if(listingData.media4.length >= 1) {
                media.push(listingData.media4);
            }
            if(listingData.media5.length >= 1) {
                media.push(listingData.media5);
            }
            const objectToList = {
                "media" : media,
                "endsAt" : endsAt,
                ...listingData
            }
            createListing(objectToList);
        })
    }
}