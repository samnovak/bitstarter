var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var teststring = "Hello World";
var buffer = new Buffer(256);
buffer.write("hello!","utf-8");
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8',0,6));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
