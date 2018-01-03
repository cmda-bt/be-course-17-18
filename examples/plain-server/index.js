/* eslint-disable semi */

var http = require('http')

var routes = {
  '/about': 'This is my website\n',
  '/': 'Hello World\n'
}

http.createServer(onrequest).listen(8000)

function onrequest(req, res) {
  res.setHeader('Content-Type', 'text/html')
  if (req.url in routes) {
    res.statusCode = 200
    res.end(routes[req.url])
  } else {
    res.statusCode = 404
    res.end('Not found\n')
  }
}
