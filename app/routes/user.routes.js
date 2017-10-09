/**
 * File : routes/artist.js
 * Author : Mickael BOULAT
 */
var express = require('express')
var router = express.Router()

const userController = require('../controllers/user.controller')

router.get('/profiles', userController.index)
router.get('/profiles/:id', userController.show)
//router.post('/profiles', userController.store)
//router.put('/profiles/:id', userController.update)
//router.delete('/profiles/:id', userController.delete)

module.exports = router
