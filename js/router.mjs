import * as templates from "../js/templates/index.mjs";
import * as profile from "../js/modules/api/profile/index.mjs";
import * as handlers from "../js/modules/handlers/index.mjs";
import * as actions from "../js/modules/api/actions/index.mjs";

export function router() {
    const path = location.pathname;
    switch(path) {
        case '/login/':
            handlers.setLoginFormListener();
        break;
        case '/login.html':
            handlers.setLoginFormListener();
        break;
        case '/register/':
            handlers.setRegisterFormListener();
        break;
        case '/profile/':
            async function profilePage() {
                const profileInfo = await profile.getProfileInfo();
                templates.profileInfoTemplate(profileInfo);
            }
            profilePage();
            async function profileListings() {
                const listings = await profile.getProfileListings();
                templates.profilePageListings(listings);
            }
            profileListings();
            async function profileBids() {
                const bids = await profile.getProfileBids();
                templates.profilePageBids(bids);
            }
            profileBids();
            handlers.setUpdateAvatarListener();
        break;
        case '/home/':
            async function homePage() {
                const listings = await actions.getListings();
                templates.homePageListings(listings);
            }
            homePage();
        break;
        case '/listing/index.html':
            async function listingPage(){
                const id = actions.extractID();
                const post = await actions.getListing(id);
                templates.listingPageTemplate(post);
                const bids = post.bids;
                console.log(post.bids);
                templates.listingPageBids(bids);
            }
            listingPage();
            handlers.setBidOnListingHandler();
        break;
        case '/logout/':
            handlers.setLogoutFormListener();
        break;
        case '/create/':
            handlers.setCreateListingListener();
        break;
    }
}
