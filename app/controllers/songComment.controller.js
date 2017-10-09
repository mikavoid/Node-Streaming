const sendSuccess = require('../components/apiResponser').sendSuccess
const sendNCSuccess = require('../components/apiResponser').sendNCSuccess
const Song = require('../models/Song')
const Comment = require('../models/Comment')

module.exports = {
  index: (req, res, next) => {
    Song.findOne({ _id: req.params.id }).then((song) => {
      Comment.find({ song: song._id}).then((comments) => {
        sendSuccess(res, { comments })
      })
    }).catch(next)
  },

  store: (req, res, next) => {
    Song.findOne({ _id: req.params.id }).then((song) => {
      var comment = Object.assign({ song: song._id }, req.body)
      Comment.create(comment).then(() => {
        sendNCSuccess(res)
      })
    }).catch(next)
  },

  update: (req, res, next) => {
    Song.findOne({ _id: req.params.id }).then(() => {
      Comment.findByIdAndUpdate({ _id: req.params.comment_id }, req.body).then(() => {
        sendNCSuccess(res)
      })
    }).catch(next)
  },

  show: (req, res, next) => {
    Song.findOne({ _id: req.params.id }).then((song) => {
      return Comment.findOne({ song: song._id, _id: req.params.comment_id}).then((comment) => {
        sendSuccess(res, { comment })
      })
    }).catch(next)
  },

  destroy: (req, res, next) => {
    Song.findOne({ _id: req.params.id }).then(() => {
      var commentId = req.params.comment_id
      Comment.findByIdAndRemove(commentId).then(() => {
        sendNCSuccess(res)
      })
    }).catch(next)
  },
}

