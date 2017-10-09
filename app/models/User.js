var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  lastname: String,
  firstname: String,
  username:  {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: String,
  bio : String,
  social_links: Array,
  scope: String
})

module.exports = mongoose.model('User', UserSchema)
