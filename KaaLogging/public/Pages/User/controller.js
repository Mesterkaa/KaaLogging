"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewModel_1 = require("./viewModel");
class UserController {
    constructor($scope, $http, $timeout, user) {
        this._viewModel = new viewModel_1.UserViewModel($scope, $http, user);
        $scope.ViewModel = this._viewModel;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map