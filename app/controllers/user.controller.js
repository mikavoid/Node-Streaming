const sendSuccess = require('../components/apiResponser').sendSuccess
const sendNCSuccess = require('../components/apiResponser').sendNCSuccess
const User = require('../models/User')

module.exports = {
  index: (req, res, next) => {
    User.find({}).then((users) => {
      sendSuccess(res, { users })
    }).catch(next)
  },
  show: (req, res, next) => {
    User.findOne({ _id: req.params.id }).then((user) => {
      sendSuccess(res, { user })
    })
   .catch(next)
  },
  store: (req, res, next) => {
    User.create(req.body).then(() => {
      sendNCSuccess(res)
    }).catch(next)

  },
  update: (req, res, next) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      User.findOne({ _id: req.params.id }).then(() => {
        sendNCSuccess(res)
      })
    }).catch(next)
  },
  delete: (req, res, next) => {
    User.findByIdAndRemove({ _id: req.params.id }).then(() => {
      sendNCSuccess(res)
    }).catch(next)

  }
}

