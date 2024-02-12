
exports.up = function(knex) {
  return knex.schema.createTable("movie_theaters", (table) => {
    table.integer("movie_id").unsigned().notNullable();
    table.foreign("movie_id").references("movie_id").inTable("movies");

    table.integer("theater_id").unsigned().notNullable();
    table.foreign("theater_id").references("theater_id").inTable("theaters");

    table.boolean("is_showing").deafultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("movie_theaters");
};
