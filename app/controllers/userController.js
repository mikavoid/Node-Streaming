const User = require('../models/User')

module.exports = {
  index: (req, res, next) => {
    User.find({}).then((users) => {
      res.status(200).json(
        {
          data: {
            users
          }
        }
      )
    }).catch(next)
  },
  show: (req, res, next) => {
    User.findOne({ _id: req.params.id }).then((user) => {
      res.status(200).json(
        {
          data: {
            user
          }
        }
      )
    })
   .catch(next)
  },
  store: (req, res, next) => {
    User.create(req.body).then((user) => {
      res.status(200).json(
        {
          data: {
            user
          }
        }
      )
    }).catch(next)

  },
  update: (req, res, next) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      User.findOne({ _id: req.params.id }).then((user) => {
        res.status(200).json(
          {
            data: {
              user
            }
          }
        )
      })
    }).catch(next)
  },
  delete: (req, res, next) => {
    User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
      res.status(200).json(
        {
          data: {
            user
          }
        }
      )
    }).catch(next)

  }
}

