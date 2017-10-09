
/**
 * @api {get} /songs/:id/comments Request All Songs Comments
 * @apiName GetSongs
 * @apiGroup Song Comments
 *
 * @apiParam {Number} id Song unique ID.
 *
 * @apiSuccess {String} title - Comment title.
 * @apiSuccess {String} body - Comment body.
 * @apiSuccess {String} author - Comment Author.
 * @apiSuccess {String} song -  Id of the commented song.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data": {
              "comments": [
                {
                   "_id": "59b5cae6b0498345549b3918",
                  "title": "The super comment",
                  "body": "ze comment !!!",
                  "author": "ZELASTNAME Robert",
                  "song": "59b5cae6b0498345549b3917"
                },
                {
                  "_id": "59b5cae6b0498345549b3919",
                  "title": "Babelouabebaleboulebou super song",
                  "body": "ca swing chez Martine!!!",
                  "author": "ZELASTNAME Robert",
                  "song": "59b5cae6b0498345549b3917"
                }
            ]
          }
 *     }
 *
 */


/**
 * @api {get} /songs/:id/comments/:comment_id Song Single Comment
 * @apiName GetSongComments
 * @apiGroup Song Comments
 *
 * @apiParam {Number} id Song unique ID.
 * @apiParam {Number} comment_id Comment unique ID.
 *
 * @apiSuccess {String} title - Comment title.
 * @apiSuccess {String} body - Comment body.
 * @apiSuccess {String} author - Comment Author.
 * @apiSuccess {String} song -  Id of the commented song.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "data": {
              "comment": {
                "_id": "59b5cae6b0498345549b3919",
                "title": "Babelouabebaleboulebou super song",
                "body": "ca swing chez Martine!!!",
                "author": "ZELASTNAME Robert",
                "song": "59b5cae6b0498345549b3917"
              }
            }
 *     }
 *
 */

/**
 * @api {put} /songs/:id/comments/:comment_id Update a single song comment
 * @apiName PutSongComment
 * @apiGroup Song Comments
 *
 *
 * @apiParam {Number} id Song unique ID.
 * @apiParam {Number} comment_id Comment unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 NO CONTENT OK
 *     {
 *     }
 *
 */

/**
 * @api {delete} /songs/:id/comments/:comment_id Delete a single song comment
 * @apiName DeleteSongComment
 * @apiGroup Song Comments
 *
 *
 * @apiParam {Number} id Song unique ID.
 * @apiParam {Number} comment_id Comment unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 NO CONTENT OK
 *     {
 *     }
 *
 */



/*
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "xxx"
 *     }
 */

