var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var teststring = "Hello World";
var buffer = new Buffer(256);

app.get('/', function(request, response) {
  response.send(buffer.write("Hello", "utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
