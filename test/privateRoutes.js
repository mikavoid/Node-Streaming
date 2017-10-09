process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')

const should = chai.should()
const server = require('../app/app')

chai.use(chaiHttp)

describe('GET /artists (private route) without token', () => {
  it('Should return an authentication error unauthorized_request', (done) => {
    chai.request(server)
      .get('/artists')
      .end((err, res) => {
        //console.log('###', err)
        //if (err) return
        res.should.have.status(401)
        done()
      })
  })
})

var token = null

describe('GET /oauth/token ', () => {
  it('Should return an access token', (done) => {
    chai.request(server)
      .post('/oauth/token')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0')
      .send({grant_type: 'client_credentials'})
      .end((err, res) => {
        //console.log('###', err)
        if (err) return
        res.should.have.status(200)
        res.body.should.have.property('access_token')
        res.body.should.have.property('accessToken')
        token = res.body.accessToken
        //console.log(token)
        done()
      })
  })

  it('Should return profiles list', (done) => {
    chai.request(server)
      .get('/profiles')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .end((err, res) => {
        //console.log('###', err)
        if (err) return
        res.should.have.status(200)
        done()
      })
  })

  it('Should return a wrong token error', (done) => {
    chai.request(server)
      .get('/artists')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer falsetoken')
      .end((err, res) => {
        //console.log('###', err)
        //if (err) return
        res.should.have.status(401)
        done()
      })
  })
})
