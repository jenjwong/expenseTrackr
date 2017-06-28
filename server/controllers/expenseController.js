const mongoose = require('mongoose');
const { centsToDollars } = require('../utils/helpers');

const Expense = mongoose.model('Expense');

const confirmOwner = (expense, user, isAdmin = false) => {
  if (!isAdmin && expense.author.toString() !== user._id.toString()) {
    throw Error('You must own a expense in order to edit it!');
  }
};

// amount saved in database returns; fn converts cents to dollars
exports.createExpense = async (req, res) => {
  req.body.author = req.user._id;
  const expense = await (new Expense(req.body)).save();
  expense.amount = centsToDollars(expense.amount);
  res.send(expense);
};

exports.getExpensesAdmin = async (req, res) => {
  const page = req.params.page || 1;
  const id = req.user.isAdmin ? undefined : { author: `${req.user._id}` };
  const expensesPromise = Expense
    .find(id)
    .sort({ created: 'desc' });

  const countPromise = Expense.find(id).count();

  const [expenses, count] = await Promise.all([expensesPromise, countPromise]);
  confirmOwner(expenses[0], req.user, req.user.isAdmin);
  res.send({ expenses });
};

exports.getExpenses = async (req, res) => {
  const id = { author: `${req.user._id}` };

  const expensesPromise = Expense
    .find(id)
    .sort({ date: 'desc' });

  const countPromise = Expense.find(id).count();

  const [expenses, count] = await Promise.all([expensesPromise, countPromise]);
  if (expenses.length > 0) {
    confirmOwner(expenses[0], req.user);
  }
  res.send({ expenses });
};

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOne({ _id: req.params.id });
  confirmOwner(expense, req.user);
  expense.remove();
  res.send(expense);
};

// checks user is expense owner
exports.isOwner = async (req, res, next) => {
  const expense = await Expense.findOne({ _id: req.params.id });
  confirmOwner(expense, req.user);
  next();
};

// mongoose doesn't have update hooks; fn converts dollars to cents
exports.editExpense = async (req, res) => {
  req.body.amount = dollarsToCents(req.body.amount);
  const expense = await Expense.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new expense instead of the old one
    runValidators: true,
  }).exec();
  res.send(expense);
};
