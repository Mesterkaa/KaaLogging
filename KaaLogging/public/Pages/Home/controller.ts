import { HomeViewModel } from './viewModel'
export class HomeController {
    private _viewModel: HomeViewModel;

    constructor(
        $scope
    ) {
        this._viewModel = new HomeViewModel();
        $scope.ViewModel = this._viewModel;
    }
}