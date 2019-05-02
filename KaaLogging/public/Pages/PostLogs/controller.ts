import { PostLogsViewModel } from './viewModel'
export class PostLogsController {
    private _viewModel: PostLogsViewModel;

    constructor(
        $scope,
        $http: angular.IHttpService,
        $timeout: angular.ITimeoutService,
        user: any
    ) {
        this._viewModel = new PostLogsViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}