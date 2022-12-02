const { Router } = require('express');

const RolesController = require('../controllers/RolesController');
const rolesController = new RolesController();
const ensuredAuthenticated = require('../middlewares/ensuredAuthenticated');
const { can } = require('../middlewares/ensuredPermissions');

const rolesRoutes = new Router();

rolesRoutes.post('/', ensuredAuthenticated, can, rolesController.create);

module.exports = rolesRoutes;