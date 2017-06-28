const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const utils = require('../utils/helpers');

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!',
  },
  amount: {
    type: Number,
    trim: true,
    required: 'Please enter an amount!',
  },
  description: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author',
  },
});


// hooks to convert dollars/cents

expenseSchema.pre('save', async function (next) {
  this.amount = utils.dollarsToCents(this.amount);
  next();
});

expenseSchema.post('init', function () {
  this.amount = utils.centsToDollars(this.amount);
});


// Gets expenses by week
// https://docs.mongodb.com/manual/reference/operator/aggregation/week/

expenseSchema.statics.getExpenseSum = function (start = Date.now(), end = Date.new(), userId = '') {
  return this.aggregate( [
    {
         $match: {
           $and: [
             { date: { $gte: new Date(start), $lt: new Date(end) } },
             { author: mongoose.Types.ObjectId(userId) },
           ],
         },
       },
        { $sort : { date : 1} },
     {
       $group:
         {
           _id: { week: { $week: "$date"}, year: { $year: "$date" } },
            total: { $sum: { $divide: ['$amount', 100] } },
           entries: { $addToSet: "$_id" }
         }
     }
   ]);
};

module.exports = mongoose.model('Expense', expenseSchema);
