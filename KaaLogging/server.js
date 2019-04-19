"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var routes = require('./routes');
var favicon = require('serve-favicon');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//app.use(favicon(__dirname + '/public/Logo/logo.ico'));
app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + "/node_modules/"));
app.use("/styles", express.static(__dirname + "/css/"));
const mongojs = require("mongojs");
var dbrw = mongojs('readWrite:myPassword@Mesterkaa.hopto.org:27017/KaaLogging', ['Users', 'Logs']);
routes(app, dbrw);
var server = app.listen(1337, () => {
    console.log("KaaLogging is listening on port 1337");
});
class log {
}
class User {
}
//# sourceMappingURL=server.js.map