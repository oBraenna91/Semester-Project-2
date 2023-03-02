const homePageListingContainer = document.querySelector("#homePageContainer");

/**
 * This function is a template for how the listings on the home page will be displayed.
 * @param {Array} listings is the array of listings that will be displayed on the home page.
 * @returns the listings as individual cards in the homePageListingContainer.
 */

export async function homePageListings(listings) {
    if(homePageListingContainer) {
        return listings.forEach(function(listing){
            homePageListingContainer.innerHTML +=
        `
        <div class="card my-4 m-auto" style="width: 50%">
            <img src="${listing.media[0]}" class="card-img-top img-fluid" alt="No image provided">
            <div class="card-body justify-content-center">
                <h5 class="card-title text-center">${listing.title}</h5>
                <div class="text-center">
                    <a href="/listing/index.html?id=${listing.id}" class="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
        `;
        })
    }
}