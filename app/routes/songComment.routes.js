/**
 * File : routes/artist.js
 * Author : Mickael BOULAT
 */
var express = require('express')
var router = express.Router()

const songCommentController = require('../controllers/songComment.controller')

router.get('/songs/:id/comments', songCommentController.index)
router.get('/songs/:id/comments/:comment_id', songCommentController.show)
router.post('/songs/:id/comments', songCommentController.store)
router.put('/songs/:id/comments/:comment_id', songCommentController.update)
router.delete('/songs/:id/comments/:comment_id', songCommentController.destroy)

module.exports = router
