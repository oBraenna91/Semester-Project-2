import * as templates from "../js/templates/index.mjs";
import * as profile from "../js/modules/api/profile/index.mjs";
import * as handlers from "../js/modules/handlers/index.mjs";
import * as actions from "../js/modules/api/actions/index.mjs";
import * as storage from "../js/modules/storage/index.mjs";

/**
 * This function will select which of the listeners that will be
 * active by watching the location.pathname.
 */

export function router() {
    const path = location.pathname;
        if (path === '/login/'|| path === '/login/index.html') {
            handlers.setLoginFormListener();
        } else if(path === '/register/' || path === '/register/index.html') {
            handlers.setRegisterFormListener();
        }
        else if(path === '/profile/' || path === '/profile/index.html'){
            if(storage.getFromLocal("accessToken")) {
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
                handlers.setUpdateAvatarListener();
            }else{
                alert("You are not logged in! Redirecting")
                window.location.href="/home/"
            }
        }else if(path === '/home/' || path === '/home/index.html') {
            async function homePage() {
                const listings = await actions.getListings();
                templates.homePageListings(listings);
            }
            homePage();
        }else if(path === '/listing/index.html') {
            async function listingPage(){
                const id = actions.extractID();
                const post = await actions.getListing(id);
                templates.listingPageTemplate(post);
                const bids = post.bids;
                const media = post.media;
                templates.listingPageBids(bids);
                templates.listingPageImages(media);
                templates.listingTimerTemplate(post);
            }
            listingPage();
            handlers.setBidOnListingHandler();
        }else if(path === '/logout/' || path === '/logout/index.html') {
            handlers.setLogoutFormListener();
        }else if(path === '/create/' || path === '/create/index.html') {
            if(storage.getFromLocal("accessToken")) {
                handlers.setCreateListingListener();
            }else{
                alert("You are not logged in! Redirecting")
                window.location.href="/home/"
            }
        }
    }
