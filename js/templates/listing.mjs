const resultsContainer = document.querySelector("#listingPageContainer");
const bidContainer = document.querySelector("#bidContainer");

export async function listingPageTemplate(listing) {
    if(resultsContainer) {
        return resultsContainer.innerHTML +=
        `
            <h3 class="card-title">Title: ${listing.title}</h3>
            <p class="card-text">Description: ${listing.description}</p>
            <p class="card-text">Listing ends at: ${listing.endsAt}</p>
            
        `;
    }
}

export async function listingPageBids(bidData) {
    return bidData.forEach(function(bid){
        bidContainer.innerHTML += 
        `
        - ${bid.amount}<br>
        `;
    })
}