var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  // fs.readFileSync('index.html', 'utf-8'); 
  var buf = new Buffer(fs.readFileSync('index.html'));
  response.send(buf.toString('utf-8'));
  
  // response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
