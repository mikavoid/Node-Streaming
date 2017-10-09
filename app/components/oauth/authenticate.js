var oauthServer = require('oauth2-server')
var Request = oauthServer.Request
var Response = oauthServer.Response

var oauth = require('./oauth')

module.exports = function(options){
  var opts = options || {}
  return function(req, res, next) {
    var request = new Request({
      headers: {authorization: req.headers.authorization},
      method: req.method,
      query: req.query,
      body: req.body
    })
    var response = new Response(res)

    oauth.authenticate(request, response, opts)
      .then(function (token) {
        // Request is authorized.
        // console.log('athentication success')
        req.user = token
        next()
      })
      .catch(function (err) {
        // Request is not authorized.
        // console.log('athentication error')
        res.status(err.code || 500).json(err)
      })
  }
}
