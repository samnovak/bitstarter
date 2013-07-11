var express = require('express');
var app = express.createServer(express.logger());

// way to do it without a buffer since fs.readFileSync
// says if you include encoding option ('utf-8') in 
// this case then this function returns a string
app.get('/', function(request, response) {
  var fs = require('fs');
  var content = fs.readFileSync('index.html', 'utf-8');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
