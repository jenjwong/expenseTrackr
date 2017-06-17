const loginRouter = require('../routers/login.js');
const logoutRouter = require('../routers/logout.js');
const registerRouter = require('../routers/register.js');
const expenseRouter = require('../routers/expense.js');
const reportRouter = require('../routers/report.js');
const errorHandlers = require('../utils/errorHandlers');

module.exports = function(app) {
  app.use('/api/v1/login', loginRouter);
  app.use('/api/v1/logout', logoutRouter);
  app.use('/api/v1/register', registerRouter);
  app.use('/api/v1/expenses', expenseRouter);
  app.use('/api/v1/report', reportRouter);
  app.use(errorHandlers.notFound);

  // dev error handler
  if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
  }

  // production error handler
  app.use(errorHandlers.productionErrors);
}
