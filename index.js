// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files
app.use(express.static('public'));

// routing for the main page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint that responds with a simple greeting
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Your new API endpoint: /api/whoami
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
