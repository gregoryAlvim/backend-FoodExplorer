const knex = require('../database/knex');

class IngredientsRepository {
   async index({ dishId }) {
      const dishIngredientsData = await knex("ingredients").select('id', 'name').where({ dishId });

      return dishIngredientsData;
   }
}

module.exports = IngredientsRepository;