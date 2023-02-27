const resultsContainer = document.querySelector("#listingPageContainer");
const bidContainer = document.querySelector("#bidContainer");
const imageContainer = document.querySelector("#imageContainer");
const timerContainer = document.querySelector("#timerContainer");

export async function listingPageTemplate(listing) {

    if(resultsContainer) {
        return resultsContainer.innerHTML +=
        `
            <h3 class="text-center">Auction title: ${listing.title}</h3>
            <p class="text-center">Auction description: ${listing.description}</p>
            
        `;
    }
}

export function listingTimerTemplate(listing) {
    if (timerContainer){
        const timer = setInterval(function() {
            const date = new Date(listing.endsAt);
            const now = new Date().getTime();
        
            const timeToEnd = date - now;
            
            const days = Math.floor(timeToEnd / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeToEnd % (1000 * 60)) / 1000);

            timerContainer.innerHTML = 
            `
            <p class="text-center">${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</p>
            `;
            if(timeToEnd < 0) {
                clearInterval(timer);
                timerContainer.innerHTML = "This auction is finished";
            }
        },
        1000);
    }
}
        

export async function listingPageBids(bidData) {
    return bidData.forEach(function(bid){
        bidContainer.innerHTML += 
        `
        <div class="card col-8 col-md-2 mx-auto mt-2">
            <div class="card-body">
                <h5 class="card-title text-center">${bid.amount}</h5>
                <br>
                <h6 class="card-subtitle mb-2 text-muted text-center">bid made by ${bid.bidderName}</h6>
            </div>
        </div>
        `;
    })
}

export async function listingPageImages(bidData) {
    return bidData.forEach(function(bid){
        imageContainer.innerHTML += 
        `<div class="col-6 mx-auto mt-3">
            <img src="${bid}" class="img-fluid" style="width:100%"><br>
         </div>
            `;
    })
}