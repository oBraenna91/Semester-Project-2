const homePageListingContainer = document.querySelector("#homePageContainer");

export async function homePageListings(listings) {
    if(homePageListingContainer) {
        return listings.forEach(function(listing){
            homePageListingContainer.innerHTML +=
        `
        <div class="card my-4 m-auto" style="width: 50%">
            <img src="${listing.media[0]}" class="card-img-top img-fluid" alt="alt">
            <div class="card-body justify-content-center">
                <h5 class="card-title text-center">${listing.title}</h5>
                <p class="card-text text-center">${listing.description}</p>
                <div class="text-center">
                    <a href="/listing/index.html?id=${listing.id}" class="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
        `;
        })
    }
}