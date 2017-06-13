import test from 'ava'

import './setup-db'
import db from '../../server/db/db'


test.skip('addVibe adds a vibe', (t) => {
  const addedVibe = {
      quote: 'Help me',
      image: 'http://bit.ly/2tf3phC',
      author: 'Simon'
  }
  return db.addVibe(addedVibe, t.context.db)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res[0], 4)
        resolve()
      })
    })
})
