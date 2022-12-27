const { Router } = require('express');

const IngredientsController = require('../controllers/IngredientsController');
const ingredientsController = new IngredientsController();
const ensuredAuthenticated = require('../middlewares/ensuredAuthenticated');

const ingredientsRoutes = new Router();

ingredientsRoutes.get("/index-ingredients/:dishId", ensuredAuthenticated, ingredientsController.index);

module.exports = ingredientsRoutes;