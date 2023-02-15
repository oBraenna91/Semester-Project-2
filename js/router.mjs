import * as listeners from "../js/modules/handlers/index.mjs";

export function router() {
    const path = location.pathname;
    switch(path) {
        case '/login/':
            listeners.setLoginFormListener();
        break;
        case '/register/':
            listeners.setRegisterFormListener();
        break;
    }
}
