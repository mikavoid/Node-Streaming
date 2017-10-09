


/**
 * @api {get} /songs Request All Songs
 * @apiName GetSongs
 * @apiGroup Songs
 *
 *
 *
 * @apiSuccess {String} title - Title of the song.
 * @apiSuccess {String} file - Audio file path.
 * @apiSuccess {String} artist - Id of the artist (user).
 * @apiSuccess {String} grade -  Grade of the song.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data": [
            {
              "_id": "59b5cae6b0498345549b3917",
              "title": "Yanis et les biquettes",
              "file": "http://zoophilia.com/music.mp3",
              "artist": "59b5cae6b0498345549b3915",
              "grade": 5
            }
          ]
 *     }
 *
 */


/**
 * @api {get} /songs/:id Single Song informations
 * @apiName GetSong
 * @apiGroup Songs
 *
 * @apiParam {Number} id Song unique ID.
 *
 * @apiSuccess {String} title - Title of the song.
 * @apiSuccess {String} file - Audio file path.
 * @apiSuccess {String} artist - Id of the artist (user).
 * @apiSuccess {String} grade -  Grade of the song.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data": {
            "song": {
              "_id": "59b69100754be1d09c12813b",
              "title": "Yanis et les biquettes",
              "file": "http://zoophilia.com/music.mp3",
              "artist": "59b5cae6b0498345549b3915",
              "grade": 5
            }
          }
 *     }
 * /

 /*
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "xxx"
 *     }
 */

