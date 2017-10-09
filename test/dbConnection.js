const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

var dbInfos = {
  host: 'localhost',
  port: '27017',
  db: 'dbtest'
}
/*
describe('MongoDB connection test', function () {
  it('Should connect to MongoDB database', function (done) {
    var promiseMongoConnect = mongoose.connect('mongodb://' + dbInfos.host + ':' + dbInfos.port + '/' + dbInfos.db, {
      useMongoClient: true
    })
    promiseMongoConnect.then(() => {
      done()
    }).catch((error) => {
      console.error('Connection error : ', error)
    })
  })
});
*/
