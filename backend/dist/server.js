"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// Use default router
// middlewares para login :D
server.post('/login', auth_1.handleAuthentication);
server.use(router);
var options = {
    cert: fs.readFileSync('../keys/cert.pem'),
    key: fs.readFileSync('../keys/key.pem')
};
var port = 3001;
https.createServer(options, server).listen(port, function () {
    console.log('JSON Server is running on  https://localhost:' + port);
});
