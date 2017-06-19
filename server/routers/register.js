const registerRouter = require('express').Router();
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');
const { catchErrors } = require('../utils/errorHandlers');

registerRouter.post('/',
    userController.validateRegister,
    catchErrors(userController.register),
    authController.login,
  );

registerRouter.post('/admin',
    userController.validateRegister,
    catchErrors(userController.registerAdmin),
  );

module.exports = registerRouter;
