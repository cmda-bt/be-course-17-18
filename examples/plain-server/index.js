/* eslint-disable semi */

var http = require('http')

http.createServer(onrequest).listen(8000)

function onrequest(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  if (req.url === '/about') {
    res.end('This is my website\n')
  } else {
    res.end('Hello World\n')
  }
}
