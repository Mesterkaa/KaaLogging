"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angular = require("angular");
const routes_1 = require("./routes");
var app = angular.module("KaaApp", ['ngRoute']);
app.factory("user", function () {
    return {};
});
var appControllerSelfCall = (x) => {
    for (var route of x) {
        if (Array.isArray(route.config)) {
            appControllerSelfCall(route.config);
        }
        else {
            app.controller(route.config.Rcontroller, ['$scope', '$http', '$timeout', "user", route.config.Acontroller]);
        }
    }
};
appControllerSelfCall(routes_1.routes);
app.config(routeConfig);
routeConfig.$inject = ["$routeProvider"];
function routeConfig($routeProvider) {
    var routeConfigSelfCall = (x) => {
        for (var route of x) {
            if (Array.isArray(route.config)) {
                routeConfigSelfCall(route.config);
            }
            else {
                $routeProvider.when("/" + route.config.URL, {
                    templateUrl: route.config.templateURL,
                    controller: route.config.Rcontroller
                });
            }
        }
    };
    routeConfigSelfCall(routes_1.routes);
}
const controller_1 = require("./Pages/Nav/controller");
app.controller("NavController", ['$scope', '$http', '$timeout', "user", controller_1.NavController]);
//# sourceMappingURL=app.js.map