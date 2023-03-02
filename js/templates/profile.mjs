const infoContainer = document.querySelector("#profile-info");
const listingContainer = document.querySelector("#profile-listings");
const bidsContainer = document.querySelector("#profile-bids");

/**
 * This function is a template for how the profile information will be diplayed
 * on the profile page.
 * @param {object} user is the logged in users profile object. 
 * @returns the information on the profile page.
 */

export async function profileInfoTemplate(user) {
    if(infoContainer) {
        return infoContainer.innerHTML +=
        `   <div class="col-3 col-md-2 m-auto">
                <img src="${user.avatar} class="img-fluid" style="width:100%" alt="No avatar image provided">
            </div>
            <div class="d-flex-column justify-content-center align-self-center col-8 text-center mt-md-3">
                <h2> Name: ${user.name} </h2>
                <h2> Credits: ${user.credits} </h2>
            </div>
        `
    }
}

/**
 * This function is a template for how the logged in users listings will be displayed
 * on the profile page.
 * @param {array} listings is the array of listings. 
 * @returns the listings on the profile page.
 */
export async function profilePageListings(listings) {
    if(listingContainer) {
        return listings.forEach(function(listing){
            listingContainer.innerHTML +=
        `
        <div class="card bg-primary border-secondary my-4 m-auto" style="width: 50%">
            <a href="/listing/index.html?id=${listing.id}">
                <img src="${listing.media[0]}" class="card-img-top img-fluid" alt="No image provided">
            </a>
            <div class="card-body justify-content-center">
                <h5 class="card-title text-center">${listing.title}</h5>
                <div class="text-center">
                    <a href="/listing/index.html?id=${listing.id}" class="btn btn-secondary">See more</a>
                </div>
            </div>
        </div>
        `;
        })
    }
}