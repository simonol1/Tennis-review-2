var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/vibes')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 3)
      t.end()
    })
})

test.cb('POST /', t => {
  const vibe = {
    quote: 'Help me',
    image: 'http://bit.ly/2tf3phC',
    author: 'Simon'
  }
  request(t.context.app)
    .post('/api/vibes/add')
    .send({vibe})
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length[3])
      t.end()
    })
})
