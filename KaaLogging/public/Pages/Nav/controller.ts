import { NavViewModel } from './viewModel'
import { KaaIroute, KaaIrouteConfig } from '../../routes'
export class NavController {
    private _viewModel: NavViewModel;
    
    constructor(
        $scope,
        $http: angular.IHttpService,
        $timeout: angular.ITimeoutService,
        user: any,
        routes: KaaIroute
    ) {
        this._viewModel = new NavViewModel($scope, $http, user);
        $scope.NavViewModel = this._viewModel;
        $scope.routes = routes;
    }
}