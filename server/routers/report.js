const reportRouter = require('express').Router();
const { catchErrors } = require('../utils/errorHandlers');
const expenseController = require('../controllers/reportController.js');

reportRouter.get('/weekly/:start/:end', catchErrors(expenseController.getExpenseReport));
module.exports = reportRouter;
