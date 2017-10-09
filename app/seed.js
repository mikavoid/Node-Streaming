var db = require('./models')
var Song = db.Song
var User = db.User
var Comment = db.Comment


require('./components/oauth/seed')

User.find({}).remove()
  .then(function() {
    User.create({
      lastname: 'ZELASTNAME',
      firstname: 'Robert',
      username:  'admini',
      email: 'zezette@supermail.com',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMp75QvW-r6lQ7LS466QhcpYRjjeIMawIjFmWMv0T089CAW7xf',
      bio : 'une petite bio',
      social_links: [{
        twitter: 'http://twitter.com/zezette'
      }],
      password:  'admini'
    }).then(function(user) {
        console.log('finished populating users',user)
        return Song.find({}).remove()
          .then(function() {
            Song.create({
              title: 'The super song',
              file:'http://someting.com/music.mp3',
              grade:5,
              artist:user._id
            })
              .then(function(song) {
                return Comment.find({}).remove()
                  .then(() => {
                    Comment.create({
                      title: 'The super comment',
                      body:'ze comment !!!',
                      author: user.lastname + ' ' + user.firstname,
                      song : song._id
                    })
                    Comment.create({
                      title: 'Babelouabebaleboulebou super song',
                      body:'ca swing chez Martine!!!',
                      author: user.lastname + ' ' + user.firstname,
                      song : song._id
                    })
                  })
              }).catch(console.log)
          })
      })
  })
