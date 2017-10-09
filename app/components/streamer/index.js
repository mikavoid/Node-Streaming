var fs = require('fs')
var apiError = require('../apiResponser').sendError

module.exports = {
  stream : (req, res, music) => {
    var stat = fs.statSync(music)

    var range = req.headers.range
    var readStream

    if (range !== undefined) {
      console.log('RANGE : range')
      var parts = range.replace(/bytes=/, '').split('-')

      var partial_start = parts[0]
      var partial_end = parts[1]

      if ((isNaN(partial_start) && partial_start.length > 1) || (isNaN(partial_end) && partial_end.length > 1)) {
        return apiError(res, {error: 'error range'}, 500)
      }

      var start = parseInt(partial_start, 10)
      var end = partial_end ? parseInt(partial_end, 10) : stat.size - 1
      var content_length = (end - start) + 1

      res.status(206).header({
        'Content-Type': 'audio/mpeg',
        'Content-Length': content_length,
        'Content-Range': 'bytes ' + start + '-' + end + '/' + stat.size
      })

      readStream = fs.createReadStream(music, {start, end})

    } else {
      res.header({
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
      })
      readStream = fs.createReadStream(music)
    }
    readStream.pipe(res)
  }
}
