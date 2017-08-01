var express = require('express');
var request = require('request');

var app = express();
app.use('/', function(req, res) {
  var url = apiServerHost + req.url;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
