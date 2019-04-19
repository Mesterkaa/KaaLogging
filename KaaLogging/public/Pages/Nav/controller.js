"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewModel_1 = require("./viewModel");
class NavController {
    constructor($scope, $http, $timeout, user) {
        this._viewModel = new viewModel_1.NavViewModel($http, user);
        $scope.NavViewModel = this._viewModel;
    }
}
exports.NavController = NavController;
//# sourceMappingURL=controller.js.map