import { API_BASE_AUTH } from "../../constants/constants.mjs";

const action = "register";
const method = "POST";

export async function register(profile) {
    const url = API_BASE_AUTH+action;
    const body = JSON.stringify(profile);

    console.log(url);

    const response = await fetch(url, {
        headers: {
            "Content-Type" : "application/json"
        },
        method,
        body,
    })
    
    console.log(response);

    const result = await response.json();
    console.log(result);
    if (response.status === 201) {
        alert("Profile registered successfully!");
    }else if (response.status === 400) {
        alert("Profile already exists");
    }else if(response.ok != true) {
        alert("Something went wrong, please try again!")
    }
    return result;
}
