var mongoose = require('mongoose')
var Schema = mongoose.Schema

var OAuthAccessTokenSchema = new Schema({
  access_token: String,
  expires: Date,
  scope:  String,
  User:  { type : Schema.Types.ObjectId, ref: 'User' },
  OAuthClient: { type : Schema.Types.ObjectId, ref: 'OAuthClient' },
})

module.exports = mongoose.model('oauth_access_token', OAuthAccessTokenSchema)
