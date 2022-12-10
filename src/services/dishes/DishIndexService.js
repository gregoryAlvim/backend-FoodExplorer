const AppError = require("../../utils/AppError");

class DishIndexService {
   constructor(dishRepository) {
      this.dishRepository = dishRepository;
   }

   async execute() {
      const dishesData = await this.dishRepository.index();

      if (dishesData.length <= 0) {
         throw new AppError("Não há nenhum prato cadastrado!");
      }

      return dishesData;
   }
}

module.exports = DishIndexService;