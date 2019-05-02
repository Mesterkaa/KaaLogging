"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewModel_1 = require("./viewModel");
class NavController {
    constructor($scope, $http, $timeout, user, routes) {
        this._viewModel = new viewModel_1.NavViewModel($scope, $http, user);
        $scope.NavViewModel = this._viewModel;
        $scope.routes = routes;
    }
}
exports.NavController = NavController;
//# sourceMappingURL=controller.js.map