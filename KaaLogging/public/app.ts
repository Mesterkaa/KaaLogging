﻿import * as angular from 'angular';
import { routes, KaaIroute, KaaIrouteConfig } from "./routes";
var app = angular.module("KaaApp", ['ngRoute']);

app.factory("user", function () {
    var factory = {
        KaaToken: "",
        Name: "",
        Email: "",
        ImageUrl: "",
        setKaaToken: function (value) {
            factory.KaaToken = value;
        },
        setName: function (value) {
            factory.Name = value;
        },
        setEmail: function (value) {
            factory.Email = value;
        },
        setImageUrl: function (value) {
            factory.ImageUrl = value;
        },
        clearUser: function () {
            factory.KaaToken = "";
            factory.Name = "";
            factory.Email = "";
            factory.ImageUrl = "";
        }

    };
    return factory;
})
app.factory("routes", function () {
    return routes;
})

var appControllerSelfCall: (x: KaaIroute[]) => void = (x: KaaIroute[]) => {
    for (var route of x) {
        if (Array.isArray(route.config)) {
            appControllerSelfCall(route.config);
        } else {
            app.controller(route.config.Rcontroller, ['$scope', '$http', '$timeout', "user", route.config.Acontroller])
        }
    }
}
appControllerSelfCall(routes)

app.config(routeConfig);
routeConfig.$inject = ["$routeProvider"];
function routeConfig($routeProvider: ng.route.IRouteProvider): void {
    var routeConfigSelfCall: (x: KaaIroute[]) => void = (x: KaaIroute[]) => {
        for (var route of x) {
            if (Array.isArray(route.config)) {
                routeConfigSelfCall(route.config);
            } else {
                $routeProvider.when("/" + route.config.URL, {
                    templateUrl: route.config.templateURL,
                    controller: route.config.Rcontroller
                })
            }

        }
    }
    routeConfigSelfCall(routes)
}

import { NavController } from './Pages/Nav/controller';
app.controller("NavController", ['$scope', '$http', '$timeout',"user", "routes", NavController])