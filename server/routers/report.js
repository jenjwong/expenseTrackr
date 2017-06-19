const reportRouter = require('express').Router();
const { catchErrors } = require('../utils/errorHandlers');
const expenseController = require('../controllers/expenseController.js');

reportRouter.get('/:start/:end', catchErrors(expenseController.getExpenseReport));
module.exports = reportRouter;
