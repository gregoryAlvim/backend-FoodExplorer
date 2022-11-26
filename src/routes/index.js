const { Router } = require('express');

const usersRouter = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const rolesRouter = require('./roles.routes');

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/roles", rolesRouter);

module.exports = routes;