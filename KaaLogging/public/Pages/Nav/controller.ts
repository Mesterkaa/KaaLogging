import { NavViewModel } from './viewModel'
export class NavController {
    private _viewModel: NavViewModel;

    constructor(
        $scope,
        $http: angular.IHttpService,
        $timeout: angular.ITimeoutService,
        user: any
    ) {
        this._viewModel = new NavViewModel($http, user);
        $scope.NavViewModel = this._viewModel;
    }
}