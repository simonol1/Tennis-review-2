const getVibes = (db) => {
  return db('vibes')
    .select('*')
}
const addVibe = (db, vibe) => {
  return db('vibes').insert(vibe)
}

const getVibeById = (db, id) => {
  return db('vibes')
    .where('id', id)
    .first()
}

module.exports = {
  getVibes,
  addVibe,
  getVibeById
}
