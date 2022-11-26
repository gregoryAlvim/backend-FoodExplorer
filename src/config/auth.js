class Jwt {
   static Config() {
      return {
         secret: "default",
         expiresIn: "2d",
      }
   };
}

module.exports = Jwt;