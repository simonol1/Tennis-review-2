
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vibes').del()
    .then(function () {
      // Inserts seed entries
      return knex('vibes').insert([
        {id: 1, image:'http://bit.ly/2sRdiBL', quote: 'I want to be the best', author: 'Harrison'},
        {id: 2, image:'http://bit.ly/2sR7t7f', quote: 'You can be the best', author: 'Simon'},
        {id: 3, image:'https://s-media-cache-ak0.pinimg.com/736x/af/b7/39/afb739e01cea4eff83b5b6c1028f7df1.jpg', quote: 'You can be the best', author: 'Simon'},
      ]);
    });
};
