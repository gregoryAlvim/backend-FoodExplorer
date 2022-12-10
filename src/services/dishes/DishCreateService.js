const AppError = require('../../utils/AppError');

class DishCreateService {
   constructor(dishRepository) {
      this.dishRepository = dishRepository;
   }

   async execute({ name, description, price, ingredients }) {

      if (!name || !description || !price) {
         throw new AppError("Todos os campos são obrigatórios!");
      } else if (price <= 0) {
         throw new AppError("O valor do prato deve ser maior que 0.00 R$");
      }

      this.dishRepository.create({ name, description, price, ingredients });

   }

}

module.exports = DishCreateService;