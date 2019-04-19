
import express = require('express');
var routes = require('./routes');
var favicon = require('serve-favicon');
var app = express();
import bodyParser = require('body-parser');

app.use(bodyParser.json());
//app.use(favicon(__dirname + '/public/Logo/logo.ico'));

app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + "/node_modules/"));
app.use("/styles", express.static(__dirname + "/css/"));


import mongojs = require("mongojs");
var dbrw = mongojs('readWrite:myPassword@Mesterkaa.hopto.org:27017/KaaLogging', ['Users', 'Logs']);
routes(app, dbrw);


var server = app.listen(1337, () => {
    console.log("KaaLogging is listening on port 1337");
    
})


class log {
    _id: string
    UserToken: string
    category: string
    title: string
    content: string
}

class User {
    _id: string
    KaaToken
    GoogleToken: string
    name: string
    profileURL: string
}