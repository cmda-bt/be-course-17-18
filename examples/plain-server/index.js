/* eslint-disable semi */

var http = require('http')

http.createServer(onrequest).listen(8000)

function onrequest(req, res) {
  res.setHeader('Content-Type', 'text/html')
  if (req.url === '/about') {
    res.statusCode = 200
    res.end('This is my website\n')
  } else if (req.url === '/') {
    res.statusCode = 200
    res.end('Hello World\n')
  } else {
    res.statusCode = 404
    res.end('Not found\n')
  }
}
