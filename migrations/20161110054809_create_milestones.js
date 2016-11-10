
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('milestones', function (table) {

      table.increments('id');
      table.string('description', 50).notNullable();
      table.date('year').notNullable();

    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
   ])
};
