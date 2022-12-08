const AppError = require('../../utils/AppError');

class DishShowService {
   constructor(dishRepository) {
      this.dishRepository = dishRepository;
   }

   async execute({ id:dishId }) {
      const dishData = await this.dishRepository.show({ dishId });

      if (!dishData) {
         throw new AppError("O prato não foi encontrado!");
      }

      return dishData;
   }
}

module.exports = DishShowService;