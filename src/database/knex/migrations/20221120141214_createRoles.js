exports.up = knex => knex.schema.createTable("roles", table => {
   table.increments("id");
   table.text("name").notNullable();

   table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("roles");