var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // make express app
var server = require('http').createServer(app);

// set up the view engine
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');
// manage our entries
// set up the logger
// GETS
app.get('/', function (req, res) {
  res.render('index');
});

// POSTS
// 404

// Listen for an application request on port 8081
server.listen(8081, function () {
  console.log('Guestbook app listening on http://127.0.0.1:8081/');
});