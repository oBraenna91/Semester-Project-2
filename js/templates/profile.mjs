const infoContainer = document.querySelector("#profile-info");
const listingContainer = document.querySelector("#profile-listings");
const bidsContainer = document.querySelector("#profile-bids");

export async function profileInfoTemplate(user) {
    if(infoContainer) {
        return infoContainer.innerHTML +=
        `   <div class="col-8 m-auto">
                <img src="${user.avatar} class="img-fluid" style="width:100%">
            </div>
            <div class="text-center">
                <h2> Name - ${user.name} </h2>
                <h2> Credits - ${user.credits} </h2>
            </div>
        `
    }
}

export async function profilePageListings(listings) {
    if(listingContainer) {
        return listings.forEach(function(listing){
            listingContainer.innerHTML +=
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

export async function profilePageBids(listings) {
    if(bidsContainer) {
        return listings.forEach(function(listing){
            bidsContainer.innerHTML +=
        `
        <div class="card my-4 m-auto" style="width: 50%">
            <img src="${listing['listing'].media[0]}" class="card-img-top img-fluid" alt="alt">
            <div class="card-body justify-content-center">
                <h5 class="card-title text-center">${listing['listing'].title}</h5>
                <p class="card-text text-center">${listing['listing'].description}</p>
                <div class="text-center">
                    <a href="/listing/index.html?id=${listing.id}" class="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
        `;
        })
    }
}