const logoutRouter = require('express').Router();
const authController = require('../controllers/authController.js');

logoutRouter.get('/', authController.logout);

module.exports = logoutRouter;
