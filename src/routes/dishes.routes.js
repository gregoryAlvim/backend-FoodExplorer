const { Router } = require('express');

const DishesController = require('../controllers/DishesController');
const dishesController = new DishesController();
const ensuredAuthenticated = require('../middlewares/ensuredAuthenticated');
const whoCanAccess = require('../middlewares/ensuredPermissions');

const dishesRoutes = new Router();

dishesRoutes.post("/create-dish", ensuredAuthenticated, whoCanAccess(["Admin"]), dishesController.create);
dishesRoutes.get("/show-dish/:id", ensuredAuthenticated, dishesController.show);

module.exports = dishesRoutes;