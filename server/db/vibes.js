const getVibes = (db) => {
  return db('vibes')
    .select('*')
}

module.exports = {
  getVibes
}
