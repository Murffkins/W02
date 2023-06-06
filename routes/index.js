const routes = require('express').Router();
const lesson2Controller = require('../controllers/lesson2');

routes.get('/', lesson2Controller.danRoute);


module.exports = routes;