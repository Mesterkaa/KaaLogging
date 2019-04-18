"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewModel_1 = require("./viewModel");
class HomeController {
    constructor($scope) {
        this._viewModel = new viewModel_1.HomeViewModel();
        $scope.ViewModel = this._viewModel;
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=controller.js.map