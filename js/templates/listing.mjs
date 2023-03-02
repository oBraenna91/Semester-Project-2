const resultsContainer = document.querySelector("#listingPageContainer");
const bidContainer = document.querySelector("#bidContainer");
const imageContainer = document.querySelector("#imageContainer");
const timerContainer = document.querySelector("#timerContainer");

/**
 * This function is a template for how the listing title and description will be
 * displayed on the individual listings page.
 * @param {object} listing is the specific listing that will be diplayed. 
 * @returns the listing title and description on the page.
 */
export async function listingPageTemplate(listing) {

    if(resultsContainer) {
        return resultsContainer.innerHTML +=
        `
            <h2 class="text-center text-secondary">${listing.title}</h2>
            <p class="text-center text-white">${listing.description}</p>
            
        `;
    }
}

/**
 * This function is a template for how the listing countdown timer will be
 * displayed on the individual listings page.
 * @param {object} listing is the specific listing whos countdown will be 
 * calculated and displayed.
 */
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
            <p class="text-center text-white">${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</p>
            `;
            if(timeToEnd < 0) {
                clearInterval(timer);
                timerContainer.innerHTML = "This auction is finished";
            }
        },
        1000);
    }
}
        
/**
 * This function is a template for how the bids for the individual listing will be 
 * displayed.
 * @param {object} bidData is the bid objects containing the relevant information.
 * @returns the bid and bidder information on the page.
 */
export async function listingPageBids(bidData) {
    return bidData.forEach(function(bid){
        bidContainer.innerHTML += 
        `
        <div class="card bg-primary border-secondary text-white col-8 col-md-2 mx-auto mt-2">
            <div class="card-body">
                <h5 class="card-title text-center">${bid.amount}</h5>
                <br>
                <p class="card-subtitle mb-2 text-info text-center">bid made by ${bid.bidderName}</p>
            </div>
        </div>
        `;
    })
}

/**
 * This function is a template for how the listing images will be displayed on the
 * individual listing page.
 * @param {Array} listing is the array of images from the specific listing. 
 * @returns the images on the page. 
 */
export async function listingPageImages(listing) {
    return listing.forEach(function(image){
        imageContainer.innerHTML += 
        `<div class="col-6 mx-auto mt-3">
            <img src="${image}" class="img-fluid" style="width:100%"><br>
         </div>
            `;
    })
}