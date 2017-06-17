const reportRouter = require('express').Router();
const authController = require('../controllers/authController.js');
const { catchErrors } = require('../utils/errorHandlers');
const expenseController = require('../controllers/expenseController.js');


reportRouter.get('/', catchErrors(expenseController.getExpenses));

// TODO: implement pagination
// reportRouter.get('/page/:page', catchErrors(reportController.getExpenses));

reportRouter.get('/getExpenseSum',
  catchErrors(expenseController.getExpenseSum)
);

module.exports = reportRouter;
