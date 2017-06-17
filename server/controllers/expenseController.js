const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');
const User = mongoose.model('User');

const confirmOwner = (expense, user, admin=false) => {
  if (!admin && expense.author.toString() !== user._id.toString()) {
    throw Error('You must own a expense in order to edit it!');
  }
};

exports.createExpense = async (req, res) => {
    console.log(req.body, 'CEATE EXPENSE')
  req.body.author = req.user._id;
  const expense = await (new Expense(req.body)).save();
  res.send(expense)
};

exports.getExpensesAdmin = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 300;
  const skip = (page * limit) - limit;
  const id = req.user.admin ?  undefined : {'author': `${req.user._id}`};
  const expensesPromise = Expense
    .find(id)
    .skip(skip)
    .limit(limit)
    .sort({ created: 'desc' });

  const countPromise = Expense.find(id).count();

  const [expenses, count] = await Promise.all([expensesPromise, countPromise]);
  confirmOwner(expenses[0], req.user, req.user.admin);
  const pages = Math.ceil(count / limit);
  if (!expenses.length && skip) {
    res.redirect(`/expenses/page/${pages}`);
    return;
  }
  res.send({expenses, page, pages, count});
};

exports.getExpenses = async (req, res) => {
  console.log(req.body, 'GET EXPENSE')
  const page = req.params.page || 1;
  const limit = 300;
  const skip = (page * limit) - limit;
  const id = {'author': `${req.user._id}`}

  const expensesPromise = Expense
    .find(id)
    .skip(skip)
    .limit(limit)
    .sort({ created: 'desc' });

  const countPromise = Expense.find(id).count();

  const [expenses, count] = await Promise.all([expensesPromise, countPromise]);
  confirmOwner(expenses[0], req.user);
  const pages = Math.ceil(count / limit);
  if (!expenses.length && skip) {
    res.redirect(`/expenses/page/${pages}`);
    return;
  }
  res.send({expenses, page, pages, count});
};

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOne({ _id: req.params.id });
  confirmOwner(expense, req.user);
  expense.remove()
  res.send(expense);
};

// checks user is expense owner
exports.isOwner = async (req, res, next) => {
  const expense = await Expense.findOne({ _id: req.params.id });
  confirmOwner(expense, req.user);
  next();
};

exports.editExpense = async (req, res) => {
  const expense = await Expense.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new expense instead of the old one
    runValidators: true
  }).exec();
  res.send(expense)
};

// default by week, but allow for any period of time
exports.getExpenseReport = async (req, res) => {
  let userId = req.user;
  const sumPromise = Expense.getExpenseSum(req.params.start, req.params.end, req.user.id);
  const [sumForRange, expenses] = await Promise.all([sumPromise]);
  res.send(sumForRange);
};
