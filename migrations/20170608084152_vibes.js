
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('vibes', (table) => {
    table.increments('id')
    table.string('image')
    table.string('quote')
    table.string('author')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vibes')
};
