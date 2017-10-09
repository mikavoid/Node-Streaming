


/**
 * @api {get} /profiles Request All User Profiles
 * @apiName GetProfiles
 * @apiGroup Profiles
 *
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} username  Username of the User.
 * @apiSuccess {String} email  Email of the User.
 * @apiSuccess {String} bio  Biography of the User.
 * @apiSuccess {Arrays} social_links  Social network links of the user.
 * @apiSuccess {String} photo Photo of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data": {
          "users": [
            {
              "_id": "59b13adb35f7db40c0001bbb",
              "email": "mikavoid@gmail.com",
              "username": "mikavoid",
              "lastname": "BOULAT",
              "firstname": "Mickael",
              "photo": "http://www.labulle51.fr/files/5ryl-yfiv2ok2n1z-qrabe.png",
              "bio": "une super biographie de la mort qui tue ou pas car si la mort tue alors il faut qu'elle soit en vie ce qui est assez paradoxal",
              "social_links": [
                {
                    "twitter": "http://twitter.com/mikavoid"
                },
                {
                    "facebook": "http://twitter.com/mikavoid"
                }
              ]
            },
            {
              "_id": "59b13adb35f7db40c0001bbb",
              "email": "toto@gmail.com",
              "username": "bloup",
              "lastname": "TOTO",
              "firstname": "Mickael",
              "bio": "Toto et tata",
              "photo": "http://www.labulle51.fr/files/5ryl-yfiv2ok2n1z-qrabe.png",
              "social_links": [
                {
                    "twitter": "http://twitter.com/toto"
                }
              ]
            },
          ]
        }
 *     }
 *
 */


/**
 * @api {get} /profiles/:id Request User Profile information
 * @apiName GetProfile
 * @apiGroup Profiles
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} username  Username of the User.
 * @apiSuccess {String} email  Email of the User.
 * @apiSuccess {String} bio  Biography of the User.
 * @apiSuccess {Arrays} social_links  Social network links of the user.
 * @apiSuccess {String} photo Photo of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data": {
          "user": {
              "_id": "59b13adb35f7db40c0001bbb",
              "email": "mikavoid@gmail.com",
              "username": "mikavoid",
              "lastname": "BOULAT",
              "firstname": "Mickael",
              "bio": "une super biographie de la mort qui tue ou pas car si la mort tue alors il faut qu'elle soit en vie ce qui est assez paradoxal",
              "photo": "http://www.labulle51.fr/files/5ryl-yfiv2ok2n1z-qrabe.png",
              "social_links": [
                {
                    "twitter": "http://twitter.com/mikavoid"
                },
                {
                    "facebook": "http://twitter.com/mikavoid"
                }
              ]
          }
        }
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "xxx"
 *     }
 */

