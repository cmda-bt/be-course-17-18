/* eslint-disable semi */

var express = require('express')
var find = require('array-find')

var data = [
  {
    id: 'evil-dead',
    title: 'Evil Dead',
    plot: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
    description: 'Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods. The evil presence possesses them until only one is left to fight for survival.'
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    description: 'Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940’s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.'
  }
]

express()
  .get('/', movies)
  .get('/:id', movie)
  .listen(8000)

function movies(req, res) {
  var doc = '<!doctype html>'
  var length = data.length
  var index = -1
  var movie

  doc += '<title>My movie website</title>'
  doc += '<h1>Movies</h1>'

  while (++index < length) {
    movie = data[index]
    doc += '<h2><a href="/' + movie.id + '">' + movie.title + '</a></h2>'
    doc += '<p>' + movie.plot + '</p>'
  }

  res.send(doc)
}

function movie(req, res) {
  var id = req.params.id
  var doc = '<!doctype html>'
  var movie = find(data, function (value) {
    return value.id === id
  })

  doc += '<title>' + movie.title + ' - My movie website</title>'
  doc += '<h1>' + movie.title + '</h1>'
  doc += '<p>' + movie.description + '</p>'

  res.send(doc)
}
