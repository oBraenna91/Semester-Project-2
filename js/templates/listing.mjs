const resultsContainer = document.querySelector("#listingPageContainer");
const bidContainer = document.querySelector("#bidContainer");
const imageContainer = document.querySelector("#imageContainer");

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
        `<div class="m-auto">
        - ${bid.amount}<br>
        </div>
        `;
    })
}

export async function listingPageImages(bidData) {
    return bidData.forEach(function(bid){
        imageContainer.innerHTML += 
        `<div class="col-6 m-auto">
            <img src="${bid}" class="img-fluid" style="width:100%"><br>
         </div>
            `;
    })
}