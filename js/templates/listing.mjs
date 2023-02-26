const resultsContainer = document.querySelector("#listingPageContainer");
const bidContainer = document.querySelector("#bidContainer");
const imageContainer = document.querySelector("#imageContainer");

export async function listingPageTemplate(listing) {
    if(resultsContainer) {
        return resultsContainer.innerHTML +=
        `
            <h3>Title: ${listing.title}</h3>
            <p>Description: ${listing.description}</p>
            <p>Listing ends at: ${listing.endsAt}</p>
            
        `;
    }
}

export async function listingPageBids(bidData) {
    return bidData.forEach(function(bid){
        bidContainer.innerHTML += 
        `<div class="m-auto">
        - ${bid.amount}<br>
        <p>bid made by ${bid.bidderName}</p>
        </div>
        `;
    })
}

export async function listingPageImages(bidData) {
    return bidData.forEach(function(bid){
        imageContainer.innerHTML += 
        `<div class="col-6">
            <img src="${bid}" class="img-fluid" style="width:100%"><br>
         </div>
            `;
    })
}