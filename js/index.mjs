import { router } from "../js/router.mjs";
import * as templates from "../js/templates/index.mjs";
import * as profile from "../js/modules/api/profile/index.mjs";
import * as handlers from "../js/modules/handlers/index.mjs";

router();

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