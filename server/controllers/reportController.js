const mongoose = require('mongoose');
const { centsToDollars } = require('../utils/helpers');

const Expense = mongoose.model('Expense');

// default by week, but allow for any period of time
exports.getExpenseReport = async (req, res) => {
  const userId = req.user;
  const report = await Expense.getExpenseSum(req.params.start, req.params.end, req.user.id);
  const response = report.length > 0 ? report : [];
  res.send(response);
};
