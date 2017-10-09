/**
 * File : routes/routes.js
 * Author : Mickael BOULAT
 */
var base64 = require('base-64')
var path = require('path')

const userRoutes = require('./user.routes')
const songRoutes = require('./song.routes')
const songCommentRoutes = require('./songComment.routes')
const oauthClient = require('../components/oauth/mongodb').OAuthClient

var authenticate = require('../components/oauth/authenticate')

module.exports = function (app) {
  app.get('/', function(req,res){
    res.json({message: 'Welcome to the API'})
  })

  app.get('/audio', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
  })

  app.get('/encode/:client_id', function(req, res) {
    oauthClient.findOne({ client_id: req.params.client_id }).then((client) => {
      if (! client) {
        res.status(500).json({error: 'no client found for the id ' + req.params.client_id })
      }
      var encoded = base64.encode(client.client_id + ':' + client.client_secret)
      return res.status(200).json({encoded : 'Basic ' + encoded, client})
    }).catch((err) => {
      res.status(500).json({error : err})
    })
  })

  //app.use(authenticate())

  app.use(userRoutes)
  app.use(songRoutes)
  app.use(songCommentRoutes)

  app.use((req, res) => {
    res.sendStatus(404)
  })
}
