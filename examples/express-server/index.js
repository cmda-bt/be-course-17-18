/* eslint-disable semi */

var express = require('express')
var find = require('array-find')
var slug = require('slug')
var bodyParser = require('body-parser')
var multer = require('multer')

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

var upload = multer({dest: 'static/upload/'})

express()
  .use(express.static('static'))
  .use(bodyParser.urlencoded({extended: true}))
  .set('view engine', 'ejs')
  .set('views', 'view')
  .get('/', movies)
  .post('/', upload.single('cover'), add)
  .get('/add', form)
  .get('/:id', movie)
  .delete('/:id', remove)
  .use(notFound)
  .listen(8000)

function movies(req, res) {
  res.render('list.ejs', {data: data})
}

function movie(req, res, next) {
  var id = req.params.id
  var movie = find(data, function (value) {
    return value.id === id
  })

  if (!movie) {
    next()
    return
  }

  res.render('detail.ejs', {data: movie})
}

function form(req, res) {
  res.render('add.ejs')
}

function add(req, res) {
  var id = slug(req.body.title).toLowerCase()

  data.push({
    id: id,
    title: req.body.title,
    cover: req.file ? req.file.filename : null,
    plot: req.body.plot,
    description: req.body.description
  })

  res.redirect('/' + id)
}

function remove(req, res) {
  var id = req.params.id

  data = data.filter(function (value) {
    return value.id !== id
  })

  res.json({status: 'ok'})
}

function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}
