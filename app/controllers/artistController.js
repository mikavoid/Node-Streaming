const Artist = require('../models/artist');

module.exports = {
  index: (req, res, next) => {
    Artist.find({}).then((artists) => {
      res.status(200).json(
        {
          data: {
            artists
          }
        }
      )
    }).catch(next)
  },
  store: (req, res, next) => {
    Artist.create(req.body).then((artist) => {
      res.status(200).json(
        {
          data: {
            artist
          }
        }
      )
    }).catch(next)

  },
  update: (req, res, next) => {
    Artist.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Artist.findOne({ _id: req.params.id }).then((artist) => {
        res.status(200).json(
          {
            data: {
              artist
            }
          }
        )
      })
    }).catch(next)
  },
  delete: (req, res, next) => {
    Artist.findByIdAndRemove({ _id: req.params.id }).then((artist) => {
      res.status(200).json(
        {
          data: {
            artist
          }
        }
      )
    }).catch(next)

  }
}

