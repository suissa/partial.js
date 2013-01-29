// run in terminal: $ sudo node index

var framework = require('partial.js');
var http = require('http');

var port = 80;
var debug = true;
var server = framework.init(http, debug).listen(port);

// Initialize controllers
framework.controller('global');

console.log("http://127.0.0.1:{0}/".format(port));