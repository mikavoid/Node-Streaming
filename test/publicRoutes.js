process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')

const should = chai.should()
const server = require('../app/app')

chai.use(chaiHttp)

describe('GET /', () => {
  it('Should get a specific welcome message from / route', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) return
        res.should.have.status(200)
        res.body.should.have.property('message').eql('Welcome to the API')
        done()
      })
  })
})
/*
describe('GET /home', () => {
  it('Should get a specific welcome message from /home route', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) return;
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('message').eql('Hello the Api');
        done()
      })
  })
});
*/
