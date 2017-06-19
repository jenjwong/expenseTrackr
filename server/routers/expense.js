const expenseRouter = require('express').Router();
const expenseController = require('../controllers/expenseController.js');
const { catchErrors } = require('../utils/errorHandlers');

expenseRouter.get('/', catchErrors(expenseController.getExpenses));

expenseRouter.post('/',
catchErrors(expenseController.createExpense),
);

expenseRouter.put('/:id/edit',
catchErrors(expenseController.isOwner),
catchErrors(expenseController.editExpense),
);

expenseRouter.delete('/:id',
  catchErrors(expenseController.deleteExpense),
);

expenseRouter.get('/admin', catchErrors(expenseController.getExpensesAdmin));
expenseRouter.get('/page/:page', catchErrors(expenseController.getExpenses));

expenseRouter.post('/seed',
  catchErrors(expenseController.createExpenseDummyData),
);

module.exports = expenseRouter;
