const UserRepository = require('../repositories/UserRepository');
const UserCreateService = require('../services/UserCreateService');

class UsersController {
   async create(request, response) {
      const { name, email, password, repeatPassword } = request.body;

      const userRepository = new UserRepository();
      const userCreateService = new UserCreateService(userRepository);

      await userCreateService.execute({ name, email, password, repeatPassword });
      
      return response.status(201).json("Usuário cadastrado com sucesso!");
   }
}

module.exports = UsersController;