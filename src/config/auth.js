class JwtConfig {
   static jwtConfig() {
      return {jwt: {
         secret: "default",
         expiresIn: "2d"
      }};
   }
}

// module.exports = {
//    jwt: {
//       secret: "default",
//       expiresIn: "2d"
//    }
// }