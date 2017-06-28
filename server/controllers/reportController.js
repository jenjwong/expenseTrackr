const mongoose = require('mongoose');
const { centsToDollars } = require('../utils/helpers');

const Expense = mongoose.model('Expense');

// default by week, but allow for any period of time
exports.getExpenseReport = async (req, res) => {
  const userId = req.user;
  const reportPromise = Expense.getExpenseSum(req.params.start, req.params.end, req.user.id);
  const [report] = await Promise.all([reportPromise]);
  // delete this
  console.log(report)
  const response = report.length > 0 ? report : [];
  res.send(response);
};
