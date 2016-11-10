const knexConfig  = require("./knexfile");
const knex = require('knex')(knexConfig);

// -------------------------------------------------------DEFINING USER INPUT
// input format: node add_person.js <id#> <FirstName> <LastName> <YYYY-MM-DD>

let id = process.argv[2];;
let firstName = process.argv[3];
let lastName = process.argv[4];
let born = process.argv[5];

// -------------------------------------------------------INSERT OBJECT

const newPerson = {
  id: id,
  name: (firstName + ' ' + lastName),
  born: born
}


// -------------------------------------------------------QUERY

knex.insert(newPerson).into('people').then(function (result) {
  console.log(result);
})
.finally(function() {
  knex.destroy();
});