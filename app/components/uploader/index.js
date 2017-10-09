var multer = require('multer')
var path = require('path')

const tmpUploadsPath = process.env.TMP_UPLOADS_PATH || './uploads/tmp'

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tmpUploadsPath)
  },
  filename: function (req, file, cb) {
    var ext = path.extname(file.originalname)
    cb(null, 'ok' + ext)
  }
})

module.exports = multer({
  storage,

  fileFilter: (req, file, cb) => {
    var authorized_extensions = ['.mp3', '.wav', '.ogg']
    var ext = path.extname(file.originalname)
    console.log(ext)

    if (authorized_extensions.indexOf(ext) === -1) {
      req.fileValidationError = 'only audio is allowed'
      return cb(null, false, new Error('only audio is allowed'))
    }
    cb(null, true)
  }
})
