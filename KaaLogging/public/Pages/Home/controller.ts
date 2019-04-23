import { HomeViewModel } from './viewModel'
export class HomeController {
    private _viewModel: HomeViewModel;

    constructor(
        $scope,
        $http: angular.IHttpService,
        $timeout: angular.ITimeoutService,
        user: any
    ) {
        this._viewModel = new HomeViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}