/* eslint-disable semi */

var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var mysql = require('mysql')
var argon2 = require('argon2')

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
  .get('/sign-up', signupForm)
  .post('/sign-up', signup)
  .get('/log-in', loginForm)
  .post('/log-in', login)
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

function signupForm(req, res) {
  res.render('sign-up.ejs')
}

function signup(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  var min = 8
  var max = 160

  if (!username || !password) {
    return res.status(400).send('Username or password are missing')
  }

  if (password.length < min || password.length > max) {
    return res.status(400).send(
      'Password must be between ' + min +
      ' and ' + max + ' characters'
    )
  }

  connection.query('SELECT * FROM users WHERE username = ?', username, done)

  function done(err, data) {
    if (err) {
      next(err)
    } else if (data.length !== 0) {
      res.status(409).send('Username already in use')
    } else {
      argon2.hash(password).then(onhash, next)
    }
  }

  function onhash(hash) {
    connection.query('INSERT INTO users SET ?', {username: username, hash: hash}, oninsert)

    function oninsert(err) {
      if (err) {
        next(err)
      } else {
        // Signed up!
        res.redirect('/')
      }
    }
  }
}

function loginForm(req, res) {
  res.render('log-in.ejs')
}

function login(req, res, next) {
  var username = req.body.username
  var password = req.body.password

  if (!username || !password) {
    return res.status(400).send('Username or password are missing')
  }

  connection.query('SELECT * FROM users WHERE username = ?', username, done)

  function done(err, data) {
    var user = data && data[0]

    if (err) {
      next(err)
    } else if (user) {
      argon2.verify(user.hash, password).then(onverify, next)
    } else {
      res.status(401).send('Username does not exist')
    }

    function onverify(match) {
      if (match) {
        // Logged in!
        res.redirect('/')
      } else {
        res.status(401).send('Password incorrect')
      }
    }
  }
}

function notFound(req, res) {
  res.status(404).render('not-found.ejs')
}
