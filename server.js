const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port) {
  console.log('Server running at ' + port);
});
