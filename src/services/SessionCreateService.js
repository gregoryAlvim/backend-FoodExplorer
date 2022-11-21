const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const authConfig = require('../config/auth');
const AppError = require('../utils/AppError');

class SessionCreateService {
   constructor(userRepository) {
      this.userRepository = userRepository;
   }

   async execute({ email, password }) {
      const user = await this.userRepository.checkUserExist(email);

      if (!user) {
         throw new AppError(" E-mail e/ou senha incorretos! ", 401);
      }

      const matchedPassword = await compare(password, user.password);
      
      if (!matchedPassword) {
         throw new AppError(" E-mail e/ou senha incorretos! ", 401);
      }

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({}, secret, {
         subject: String(user.id),
         expiresIn
      });

      return { user, token };
   }
}

module.exports = SessionCreateService;