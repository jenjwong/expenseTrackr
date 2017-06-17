const loginRouter = require('express').Router();
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');

loginRouter.route('/')
  .post(authController.login);

module.exports = loginRouter;
