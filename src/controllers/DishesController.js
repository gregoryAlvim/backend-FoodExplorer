const DishRepository = require('../repositories/DishRepository');
const DishCreateService = require('../services/dishes/DishCreateService');
const DishShowService = require('../services/dishes/DishShowService');

class DishesController {
   async create(request, response) {
      const {name, description, price} = request.body;

      const dishRepository = new DishRepository();
      const dishCreateService = new DishCreateService(dishRepository);

      await dishCreateService.execute({name, description, price});

      return response.status(201).json("Novo prato cadastrado com sucesso!");
   }

   async update(request, response) {
      
   }

   async index (request, response) {
      
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