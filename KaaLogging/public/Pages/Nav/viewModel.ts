export class NavViewModel {
    checkuser: () => void;
    signOut: () => void;
    onSignIn: (googleUser) => void;
    constructor(
        $http: angular.IHttpService,
        user: any
    ) {
        this.signOut = () => {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        }
        this.onSignIn = (googleUser) => {
            console.log(googleUser.getBasicProfile().getId())

        }
        
        window["onSignIn"] = this.onSignIn;
        this.checkuser = () => {
            console.log(user);
        }
    }
}