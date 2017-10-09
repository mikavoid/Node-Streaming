const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const axios = require('axios')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

// require('./seed')


// AXIOS CONF
axios.defaults.baseURL = process.env.API_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

// DB CONNECTION
mongoose.Promise = require('bluebird')
var dbOptions = {
  useMongoClient: true
}
var mgHost = process.env.MONGODB_HOST
var mgPort = process.env.MONGODB_PORT
var mgDbName = process.env.MONGODB_DATABASE
var promiseMongoConnect = mongoose.connect('mongodb://' + mgHost + ':' + mgPort + '/' + mgDbName, dbOptions)

promiseMongoConnect.catch(function () {
  var errorMessage = 'Unable to connect to MongoDB on ' + mgHost + ':' + mgPort
  console.error(errorMessage)
  throw new Error(errorMessage)
})

// --- MIDDLEWARE TREAT REQUEST AS JSON
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// ---  LOGGER ONLY OUT OF TEST
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'))
}

// --- CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-Type,Accept,Origin,Pragma,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since')
  next()
})

// --- PUBLIC AREA
require('./components/oauth')(app)

// --- PRIVATE ROUTING
require('./routes')(app)

// --- ERROR HANDLING
app.use((err, req, res, next) => {
  res.status(400).send({error: err.message})
  next()
})

// --- LISTEN AND SERVE
const port = process.env.SERVER_PORT || 80
app.listen(port, function () {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Server is listening on port ' + port)
  }
})

module.exports = app
