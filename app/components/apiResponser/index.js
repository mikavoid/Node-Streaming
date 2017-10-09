module.exports = {
  sendSuccess: (res, data) => {
    res.status(200).json({ data })
  },

  sendNCSuccess: (res) => {
    res.status(204).json({})
  },

  sendError: (res, data, error_code) => {
    if (!error_code) {
      error_code = 400
    }
    res.status(error_code).json({ data })
  }
}
