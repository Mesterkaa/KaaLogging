"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./Pages/GetLogs/controller");
const controller_2 = require("./Pages/PostLogs/controller");
const controller_3 = require("./Pages/Home/controller");
const controller_4 = require("./Pages/User/controller");
exports.routes = [
    { name: 'HOME', config: { URL: "", templateURL: "./Pages/Home/Home.htm", Rcontroller: "HomeController", Acontroller: controller_3.HomeController } },
    { name: 'GETLOGS', config: { URL: "GetLogs", templateURL: "./Pages/GetLogs/GetLogs.htm", Rcontroller: "GetLogsController", Acontroller: controller_1.GetLogsController } },
    { name: 'POSTLOGS', config: { URL: "PostLogs", templateURL: "./Pages/PostLogs/PostLogs.htm", Rcontroller: "PostLogsController", Acontroller: controller_2.PostLogsController } },
    { name: 'USER', config: { URL: "User", templateURL: "./Pages/User/User.htm", Rcontroller: "UserController", Acontroller: controller_4.UserController } }
];
//# sourceMappingURL=routes.js.map