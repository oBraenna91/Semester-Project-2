const resultsContainer = document.querySelector("#listingPageContainer");
const bidContainer = document.querySelector("#bidContainer");
const imageContainer = document.querySelector("#imageContainer");
const timerContainer = document.querySelector("#timerContainer");

export async function listingPageTemplate(listing) {

    if(resultsContainer) {
        return resultsContainer.innerHTML +=
        `
            <h3>Title: ${listing.title}</h3>
            <p>Description: ${listing.description}</p>
            
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
            <p>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</p>
            `
        //console.log(days, "days", hours, "hours", minutes, "minutes", seconds, "seconds");
        },
        1000);
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