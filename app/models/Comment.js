const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  title: {
    type: String,
    required: 'your comment must have a title'
  },
  body: {
    type: String,
    required: 'your comment must have a body'
  },
  author: {
    type: String,
    required: true
  },
  song: {
    type: Schema.ObjectId,
    ref: 'Song'
  }
})

module.exports = mongoose.model('Comment', commentSchema)
