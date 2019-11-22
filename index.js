
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! this node server was started by openshift deploy ... it creates a service and assigned new route');
});

pp.get('/test', function (req, res) {
  res.send('Calling diferent path into same context /  :P'>
});


app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 8080 mi cabrón jajajaj!');
});


