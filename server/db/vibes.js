const getVibes = (db) => {
  return db('vibes')
    .select('*')
}
const addVibe = (db, vibe) => {
  return db('vibes').insert(vibe)
}

module.exports = {
  getVibes,
  addVibe
}
