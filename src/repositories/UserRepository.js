const knex = require('../database/knex');

class UserRepository {
   async checkUserExist(email) {
      const userExist = await knex("users").where({ email }).first();

      return userExist;
   }

   async create({name, email, password}) {
      const userId = await knex("users").insert({ name, email, password });

      return { id: userId };
   }
};

module.exports = UserRepository;