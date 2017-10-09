/**
 * File : routes/artist.js
 * Author : Mickael BOULAT
 */
var express = require('express')
var router = express.Router()
var upload = require('../components/uploader')

const songController = require('../controllers/song.controller')

router.get('/songs', songController.index)
router.get('/songs/:id', songController.show)
router.get('/songs/:id/play', songController.play)
router.post('/songs', upload.single(process.env.UPLOAD_SONG_FILE_FIELDNAME ||'file'), songController.store)

module.exports = router
