"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NavViewModel {
    constructor($scope, $http, user) {
        this.signOut = () => {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                console.log(this.googleUser.getBasicProfile().getName() + " signed out");
            });
            user.KaaToken = "";
        };
        this.onSucces = (User) => {
            this.googleUser = User;
            $http.get('/SignIn/' + User.getAuthResponse().id_token).then((resp) => {
                user.KaaToken = resp.data;
                user.Name = User.getBasicProfile().getName();
                user.Email = User.getBasicProfile().getEmail();
                user.ImageUrl = User.getBasicProfile().getImageUrl();
            });
            $scope.$apply();
        };
        window["onSucces"] = this.onSucces;
        this.checkuser = () => {
            console.log(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile());
        };
    }
}
exports.NavViewModel = NavViewModel;
//# sourceMappingURL=viewModel.js.map