import { GetLogsViewModel } from './viewModel'
export class GetLogsController {
    private _viewModel: GetLogsViewModel;

    constructor(
        $scope,
        $http: angular.IHttpService,
        $timeout: angular.ITimeoutService,
        user: any
    ) {
        this._viewModel = new GetLogsViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}