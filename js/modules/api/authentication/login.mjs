import { API_BASE_AUTH } from "../../constants/constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "login";
const method = "POST";

export async function login(profile) {
    const url = API_BASE_AUTH + action;
    const body = JSON.stringify(profile);

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body,
    })

    const { accessToken, ...user } = await response.json();

    storage.saveToLocal("accessToken", accessToken);
    storage.saveToLocal("profile", user);
    if (response.status === 200) {
        alert("You are now logged in!")
    }else if(response.ok != true) {
        alert("Something went wrong, please try again!")
    }
}

const profileLoginTrial = {
    "email" : "OleBra17268@stud.noroff.no",
    "password" : "1234abcd",
};

login(profileLoginTrial);