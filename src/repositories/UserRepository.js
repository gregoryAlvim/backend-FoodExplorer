const knex = require('../database/knex');

class UserRepository {
   async checkUserExist(email) {
      const userExist = await knex("users").where({ email }).first();

      return userExist;
   };

   async create({ name, email, password }) {
      const userId = await knex("users").insert({ name, email, password });

      return { userId: userId };
   };

   async linkUserToRole({ userId }) {
      const { id: roleId } = await knex("roles").where({ name: "User" }).first();
      
      await knex("users_roles").insert({ userId, roleId });
   };

   async findUserRole(email) {
      const { id:userId } = await knex("users").where({ email }).first();
      const { name:userRole } = await knex.from("users_roles").innerJoin("roles", "roleId", "id").where({ userId }).first();
      
      return userRole;
   };
};

module.exports = UserRepository;