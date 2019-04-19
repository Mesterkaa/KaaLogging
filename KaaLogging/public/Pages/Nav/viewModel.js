"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NavViewModel {
    constructor($http, user) {
        this.signOut = () => {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        };
        this.onSignIn = (googleUser) => {
            console.log(googleUser.getBasicProfile().getId());
        };
        window["onSignIn"] = this.onSignIn;
        this.checkuser = () => {
            console.log(user);
        };
    }
}
exports.NavViewModel = NavViewModel;
//# sourceMappingURL=viewModel.js.map