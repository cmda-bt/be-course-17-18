/* eslint-disable semi */

var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var mongo = require('mongodb')

require('dotenv').config()

var db = null
var url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT

mongo.MongoClient.connect(url, function (err, client) {
  if (err) {
    throw err
  }

  db = client.db(process.env.DB_NAME)
})

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

function movies(req, res, next) {
  db.collection('movies').find().toArray(done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.render('list.ejs', {data: data})
    }
  }
}

function movie(req, res, next) {
  var id = req.params.id

  db.collection('movies').findOne({
    _id: new mongo.ObjectID(id)
  }, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.render('detail.ejs', {data: data})
    }
  }
}

function form(req, res) {
  res.render('add.ejs')
}

function add(req, res, next) {
  db.collection('movies').insertOne({
    title: req.body.title,
    cover: req.file ? req.file.filename : null,
    plot: req.body.plot,
    description: req.body.description
  }, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.redirect('/' + data.insertedId)
    }
  }
}

function remove(req, res, next) {
  var id = req.params.id

  db.collection('movies').deleteOne({
    _id: new mongo.ObjectID(id)
  }, done)

  function done(err) {
    if (err) {
      next(err)
    } else {
      res.json({status: 'ok'})
    }
  }
}

function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}
