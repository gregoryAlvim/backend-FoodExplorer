const AppError = require("../../utils/AppError");

class DishIndexService {
   constructor(dishRepository) {
      this.dishRepository = dishRepository;
   }

   async execute({ dishName, ingredients }) {
      const dishesData = await this.dishRepository.index({ dishName, ingredients });

      if (dishesData.length <= 0) {
         throw new AppError("Nenhum prato foi encontrado!");
      }

      return dishesData;
   }
}

module.exports = DishIndexService;