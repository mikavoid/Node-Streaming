/**
 * File : routes/artist.js
 * Author : Mickael BOULAT
 */
var express = require('express')
var router = express.Router()

const artistController = require('../controllers/artistController')

router.get('/artists', artistController.index)
router.post('/artists', artistController.store)
router.put('/artists/:id', artistController.update)
router.delete('/artists/:id', artistController.delete)

module.exports = router
