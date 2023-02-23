const homePageListingContainer = document.querySelector("#homePageContainer");

export async function homePageListings(listings) {
    if(homePageListingContainer) {
        return listings.forEach(function(listing){
            homePageListingContainer.innerHTML +=
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