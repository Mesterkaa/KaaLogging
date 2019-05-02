import { UserViewModel } from './viewModel'
export class UserController {
    private _viewModel: UserViewModel;

    constructor(
        $scope,
        $http: angular.IHttpService,
        $timeout: angular.ITimeoutService,
        user: any
    ) {
        this._viewModel = new UserViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}