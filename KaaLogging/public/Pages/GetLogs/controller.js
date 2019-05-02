"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewModel_1 = require("./viewModel");
class GetLogsController {
    constructor($scope, $http, $timeout, user) {
        this._viewModel = new viewModel_1.GetLogsViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}
exports.GetLogsController = GetLogsController;
//# sourceMappingURL=controller.js.map