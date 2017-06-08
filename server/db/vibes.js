const getVibes = (db) => {
  return db('vibes')
    .select('*')
}

const addVibe = (vibe, db) => {
  return db('vibes')
    .insert(vibe)
}


module.exports = {
  getVibes,
  addVibe
}
