/* eslint-disable semi */

var express = require('express')

var data = []

express()
  .get('/', movies)
  .listen(8000)

function movies(req, res) {
  var doc = '<!doctype html>'

  doc += '<title>My movie website</title>'
  doc += '<h1>Movies</h1>'

  res.send(doc)
}
