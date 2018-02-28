/* eslint-disable semi */

var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var mysql = require('mysql')

require('dotenv').config()

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect()

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
  connection.query('SELECT * FROM movies', done)

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

  connection.query('SELECT * FROM movies WHERE id = ?', id, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else if (data.length === 0) {
      next()
    } else {
      res.render('detail.ejs', {data: data[0]})
    }
  }
}

function form(req, res) {
  res.render('add.ejs')
}

function add(req, res, next) {
  connection.query('INSERT INTO movies SET ?', {
    cover: req.file ? req.file.filename : null,
    title: req.body.title,
    plot: req.body.plot,
    description: req.body.description
  }, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else {
      res.redirect('/' + data.insertId)
    }
  }
}

function remove(req, res, next) {
  var id = req.params.id

  connection.query('DELETE FROM movies WHERE id = ?', id, done)

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
