export class UserViewModel {
    user: any;
    constructor(
        $scope: ng.IScope,
        $http: angular.IHttpService,
        user: any
    ) {
        this.user = user;
    }
}