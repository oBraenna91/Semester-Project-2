const infoContainer = document.querySelector("#profile-info");
const listingContainer = document.querySelector("#profile-listings");
const bidsContainer = document.querySelector("#profile-bids");

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

export async function profilePageListings(listings) {
    if(listingContainer) {
        return listings.forEach(function(listing){
            listingContainer.innerHTML +=
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

export async function profilePageBids(listings) {
    if(bidsContainer) {
        return listings.forEach(function(listing){
            bidsContainer.innerHTML +=
        `
        <div class="card my-4 m-auto" style="width: 50%">
            <img src="${listing['listing'].media[0]}" class="card-img-top img-fluid" alt="No image provided">
            <div class="card-body justify-content-center">
                <h5 class="card-title text-center">${listing['listing'].title}</h5>
                <div class="text-center">
                    <a href="/listing/index.html?id=${listing.id}" class="btn btn-primary">See more</a>
                </div>
            </div>
        </div>
        `;
        })
    }
}