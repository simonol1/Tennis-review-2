var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')


var vibes = require('./routes/vibes')


const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/vibes', vibes)

module.exports = function(db) {
  server.set('db', db)
  return server
}
