var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var teststring = "Hello World";
buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);


app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
