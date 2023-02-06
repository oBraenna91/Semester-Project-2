import * as listeners from "../js/modules/handlers/index.mjs";

export function router() {
    const path = location.pathname;
    switch(path) {
        case '/html/login/':
            listeners.setLoginFormListener();
        break;
        case '/html/register/':
            listeners.setRegisterFormListener();
        break;
    }
}