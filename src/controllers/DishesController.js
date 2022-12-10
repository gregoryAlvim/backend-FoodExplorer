const DishRepository = require('../repositories/DishRepository');
const DishCreateService = require('../services/dishes/DishCreateService');
const DishUpdateService = require('../services/dishes/DishUpdateService');
const DishIndexService = require('../services/dishes/DishIndexService');
const DishShowService = require('../services/dishes/DishShowService');

class DishesController {
   async create(request, response) {
      const { name, description, price, ingredients } = request.body;

      const dishRepository = new DishRepository();
      const dishCreateService = new DishCreateService(dishRepository);

      await dishCreateService.execute({ name, description, price, ingredients });

      return response.status(201).json("Novo prato cadastrado com sucesso!");
   }

   async update(request, response) {
      const { id } = request.params;
      const { name, description, price, ingredients } = request.body;

      const dishRepository = new DishRepository();
      const dishUpdateService = new DishUpdateService(dishRepository);

      await dishUpdateService.execute({ id, name, description, price, ingredients });

      return response.status(201).json("Prato atualizado com sucesso!");
   }

   async index (request, response) {
      const dishRepository = new DishRepository();
      const dishIndexService = new DishIndexService(dishRepository);

      const dishesData = await dishIndexService.execute();

      return response.json(dishesData);
   }

   async show(request, response) {
      const { id } = request.params;

      const dishRepository = new DishRepository();
      const dishShowService = new DishShowService(dishRepository);

      const dishData = await dishShowService.execute({ id });

      return response.json(dishData);
   }
}

module.exports = DishesController;