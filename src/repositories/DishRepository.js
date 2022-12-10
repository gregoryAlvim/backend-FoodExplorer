const knex = require('../database/knex');

class DishRepository {
   async create({ name, description, price, ingredients }) {
      const dishId = await knex("dishes").insert({ name, description, price });

      const ingredientsInsert = ingredients.map( ingredient => {
         return {
            name: ingredient,
            dishId
         }
      });

      await knex("ingredients").insert(ingredientsInsert);
   }

   async update({ dishId, dishName, dishDescription, dishPrice, dishIngredients }) {
      await knex("dishes").update({ name: dishName, description: dishDescription, price: dishPrice }).where({ id: dishId });

      const ingredientsUpdate = dishIngredients.map( ingredient => {
         return {
            name: ingredient,
            dishId
         }
      });

      await knex("ingredients").where({ dishId }).delete();
      await knex("ingredients").insert(ingredientsUpdate);
   }

   async index() {
      const dishesData = await knex("dishes");

      return dishesData;
   }

   async show({ dishId }) {
      const dishData = await knex("dishes").where({ id: dishId }).first();
      const ingredientsData = await knex("ingredients").select('id', 'name').where({ dishId }).orderBy("name");

      return {
         ...dishData,
         ingredientsData
      };
   }
}

module.exports = DishRepository;