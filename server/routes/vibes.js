var express = require('express')
var router = express.Router()

var vibesDb = require('../db/db')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  vibesDb.getVibes(db)
    .then(vibes => {
      res.json(vibes)
    })
})

router.post('/add', (req,res) => {
  let db = req.app.get('db')
  vibesDb.addVibe(db,req.body.vibe)
   .then(id => {
     vibesDb.getVibeById(db, id[0])
      .then(vibe => {
        res.json(vibe)
      })
   })
   .catch(err => {
     console.log(err);
     res.sendStatus(500)
   })
})

module.exports = router
