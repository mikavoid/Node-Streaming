var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RefreshTokenSchema = new Schema({
  refresh_token: String,
  expires: Date,
  scope:  String,
  User:  { type : Schema.Types.ObjectId, ref: 'User' },
  OAuthClient: { type : Schema.Types.ObjectId, ref: 'OAuthClient' },
})

module.exports = mongoose.model('refresh_token', RefreshTokenSchema)
