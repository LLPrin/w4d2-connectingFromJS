const knexConfig  = require("./knexfile");
const knex = require('knex')(knexConfig);

debugger;


// -------------------------------------------------------QUERY
knex.select().from('people').then(function (result) {
  // User Input
  // input format: node knex_lookup.js <Name>
  let input = process.argv[2];
  console.log('Searching...')
  return knex
    .select('id', 'name', 'born')
    .from('people')
    .where('name', 'like', `%${input}%`)

}).then(function (result) {
    console.log(result);
    knex.destroy();
}).catch(function (err) {
  throw err;
  knex.destroy();
});