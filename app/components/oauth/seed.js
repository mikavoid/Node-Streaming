var mongodb = require('./mongodb')
var OAuthClient = mongodb.OAuthClient
var OAuthScope = mongodb.OAuthScope
var User = mongodb.User

OAuthScope.find({}).remove()
  .then(function() {
    OAuthScope.create({
      scope: 'profile',
      is_default: false
    },{
      scope: 'defaultscope',
      is_default: true
    })
      .then(function() {
        console.log('finished populating OAuthScope')
      })
  })
User.find({}).remove()
  .then(function() {
    User.create({
      lastname: 'ZELASTNAME',
      firstname: 'Robert',
      email: 'zezette@supermail.com',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMp75QvW-r6lQ7LS466QhcpYRjjeIMawIjFmWMv0T089CAW7xf',
      bio : 'une petite bio',
      social_links: [{
        twitter: 'http://twitter.com/zezette'
      }],
      username: 'admin',
      password: 'admin'
    })
      .then(function(user) {
        console.log('finished populating users', user)
        return OAuthClient.find({}).remove()
          .then(function() {
            OAuthClient.create({
              client_id:'democlient2',
              client_secret:'democlientsecret2',
              grants: ['client_credentials'],
              redirect_uris: []
            }).then(function(client) {
                console.log('finished populating oauth_client', client)
              }).catch(console.log)
          })
      })
  })
