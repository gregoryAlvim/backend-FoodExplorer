const IngredientsRepository = require('../repositories/IngredientsRepository');
const IngredientsIndexService = require('../services/IngredientsIndexService');

class IngredientsController {
   async index(request, response) {
      const { dishId } = request.params;

      const ingredientsRepository = new IngredientsRepository();
      const ingredientsIndexService = new IngredientsIndexService(ingredientsRepository);

      const dishIngredientsData = await ingredientsIndexService.execute({ dishId });

      return response.json(dishIngredientsData);
   }
}

module.exports = IngredientsController;