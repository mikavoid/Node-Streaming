var mongoose = require('mongoose')
var Schema = mongoose.Schema

var OAuthClientSchema = new Schema({
  client_id:  String,
  client_secret: String,
  redirect_uris: Array,
  grants: Array,
  scope: String
})

module.exports = mongoose.model('oauth_client', OAuthClientSchema)
