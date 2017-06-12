var express = require('express')
var router = express.Router()

var vibesDb = require('../db/vibes')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  vibesDb.getVibes(db)
    .then(vibes => {
      res.json(vibes)
    })
})

router.post('/add', (req,res) => {
  let db = req.app.get('db')
  vibesDB.addVibe(db)
   .then(vibe => {
     res.json(vibe)
   })
})

module.exports = router
