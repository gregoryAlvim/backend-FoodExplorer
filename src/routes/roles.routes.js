const { Router } = require('express');

const RolesController = require('../controllers/RolesController');
const rolesController = new RolesController();
const ensuredAuthenticated = require('../middlewares/ensuredAuthenticated');

const rolesRoutes = new Router();

rolesRoutes.post('/', ensuredAuthenticated, rolesController.create);

module.exports = rolesRoutes;