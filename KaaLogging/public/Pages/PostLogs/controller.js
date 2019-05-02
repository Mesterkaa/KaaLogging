"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewModel_1 = require("./viewModel");
class PostLogsController {
    constructor($scope, $http, $timeout, user) {
        this._viewModel = new viewModel_1.PostLogsViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}
exports.PostLogsController = PostLogsController;
//# sourceMappingURL=controller.js.map