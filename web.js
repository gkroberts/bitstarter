var express = require('express');
var fs = require('fs');
var buf = new Buffer(256);
var str = "";

var app = express.createServer(express.logger());

buf = fs.readFileSync('index.html');
str = buf.toString();
console.log(str);


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

