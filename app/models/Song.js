const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title field is required']
  },
  artist: {
    type: Schema.ObjectId,
    ref: 'User',
    required: [true, 'artist field is required']
  },
  file: {
    type: String
  },
  grade: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
})

module.exports = mongoose.model('Song', songSchema)
