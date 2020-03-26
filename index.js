
// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;

var express = require('express')
var app = express()

// respond with "Hello, this route should be excluded from Stackdriver logging." when a GET request is made to the homepage
app.get('/stealth-Hello', function (req, res) {
  res.send("Hello, this route should be excluded from Stackdriver logging.")
})
