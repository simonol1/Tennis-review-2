import test from 'ava'
import nock from 'nock'

import {getVibes, addVibe} from '../../client/actions/vibes'

test.cb('api.getVibes', t => {
  let scope = nock('http://localhost:80')
    .get(`/api/vibes`)
    .reply(200, {message: 'getVibes working'})

  getVibes()((actual) => {
    scope.done()
    t.is(actual.vibes.message, 'getVibes working')
    t.end()
  })
})

test.cb('api.addVibe', t => {
  let scope = nock('http://localhost:80')
  .post('/api/vibes/add')
  .reply(200, {message: 'addVibe working'})

  addVibe()((actual) => {
    scope.done()
    t.is(actual.vibe.message, 'addVibe working')
    t.end()
  })
})
