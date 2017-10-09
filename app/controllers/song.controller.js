const path = require('path')
const fs = require('fs')
const sendSuccess = require('../components/apiResponser').sendSuccess
const sendError = require('../components/apiResponser').sendError
const Song = require('../models/Song')
var streamer = require('../components/streamer')

const songStoragePath = process.env.SONG_STORAGE_PATH ? '../..' + process.env.SONG_STORAGE_PATH : '../../storage/songs'

module.exports = {
  index: (req, res, next) => {
    Song.find({}).then((songs) => {
      sendSuccess(res, { songs })
    }).catch(next)
  },

  show: (req, res, next) => {
    Song.findOne({ _id: req.params.id }).then((song) => {
      sendSuccess(res, { song })
    })
      .catch(next)
  },

  play: (req, res, next) => {
    // var key = req.params.key
    Song.findOne({ _id: req.params.id }).then((song) => {
      console.log('##############')
      console.log(song)
      console.log('##############')
      var music = path.join(__dirname, songStoragePath + song.file)
      if (!fs.lstatSync(music).isFile()) {
        return sendError(res, {error: 'music were not found : ' + music}, 500)
      }
      streamer.stream(req, res, music)
    }).catch(next)
  },

  store: (req, res) => {
    if(req.fileValidationError) {
      return sendError(res, { error: req.fileValidationError }, 500)
    }

    var file = req.file

      if (!file) {
        console.log('No file received')
        return res.send({
          error: 'file were not found in request'
        })
      }

      return Song.create(req.body).then((song) => {
        console.log(file)
        var tmpPath = file.path
        var newFileName =  song._id + path.extname(file.originalname)
        var dest = path.join(__dirname, songStoragePath + newFileName)

        return fs.rename(tmpPath, dest, (err) => {
          if (!err) {
            song.file = newFileName
            song.save()
            return sendSuccess(res, { song })
          }
          console.log(err)
          sendError(res, { errors: err}, 500)
        })
      }).catch((err) => {
        console.log(err.errors.messages)
        sendError(res, { errors: err.errors }, 500)
      })
  }
}

