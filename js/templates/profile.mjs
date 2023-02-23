const infoContainer = document.querySelector("#profile-info");
const listingContainer = document.querySelector("#profile-listings");
const bidsContainer = document.querySelector("#profile-bids");

export async function profileInfoTemplate(user) {
    if(infoContainer) {
        return infoContainer.innerHTML +=
        `   <div class="col-8">
                <img src="${user.avatar} class="img-fluid" style="width:100%">
            </div>
            <div class="">
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
        <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading${[listing.id]}">
                    <button class="accordion-button bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${[listing.id]}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${[listing.id]}">
                        <strong>${listing.title}</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse${[listing.id]}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${[listing.id]}">
                    <div class="accordion-body bg-secondary text-white">
                        <p>${listing.description}</p>
                        <a href="/listing/index.html?id=${listing.id}"> Click to view more </a>
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
        <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading${[listing.id]}">
                    <button class="accordion-button bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${[listing.id]}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${[listing.id]}">
                        <strong>${listing['listing'].title}</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse${[listing.id]}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${[listing.id]}">
                    <div class="accordion-body bg-secondary text-white">
                        <p>${listing['listing'].description}</p>
                        <a href="/listing/index.html?id=${listing.id}"> Click to view more </a>
                    </div>
                </div>
        </div>
        `;
        })
    }
}