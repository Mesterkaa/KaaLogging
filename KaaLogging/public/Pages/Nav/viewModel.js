"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NavViewModel {
    constructor($scope, $http, user) {
        $scope.$watch(function () {
            return user;
        }, (newValue, oldValue, scope) => {
            console.log(["NAV$watch", newValue]);
        }, true);
        this.Click = () => {
            console.log(user);
        };
        gapi.signin2.render('my-signin2', {
            scope: 'profile email',
            width: 150,
            height: 50,
            longtitle: false,
            theme: 'dark',
            onsuccess: (GUser) => {
                this.googleUser = GUser;
                $http.get('/SignIn/' + GUser.getAuthResponse().id_token).then((resp) => {
                    user.KaaToken = resp.data;
                    user.setKaaToken(resp.data);
                    user.setName(GUser.getBasicProfile().getName());
                    user.setEmail(GUser.getBasicProfile().getEmail());
                    user.setImageUrl(GUser.getBasicProfile().getImageUrl());
                    this.loggedin = true;
                });
            },
            onfailure: (Error) => {
                console.error(Error);
            }
        });
        this.signOut = () => {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                console.log(this.googleUser.getBasicProfile().getName() + " signed out");
                user.clearUser();
                this.loggedin = false;
                $scope.$apply();
            });
        };
    }
}
exports.NavViewModel = NavViewModel;
//# sourceMappingURL=viewModel.js.map