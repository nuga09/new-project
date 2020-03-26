var express = require('express')
var app = express()

// respond with "Hello, this route should be excluded from Stackdriver logging." when a GET request is made to the homepage
app.get('/stealth-Hello', function (req, res) {
  res.send("Hello, this route should be excluded from Stackdriver logging.")
})
