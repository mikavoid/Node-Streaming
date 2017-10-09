const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  active: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('artist', artistSchema)
