const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const utils = require('../utils/helpers');

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  amount: {
    type: Number,
    trim: true,
    required: 'Please enter an amount!'
  },
  description: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author'
  }
});


expenseSchema.pre('save', async function(next) {
  this.amount = utils.dollarsToCents(this.amount);
  next();
});


expenseSchema.statics.getExpenseSum = function(start=Date.now(), end=Date.new(), userId='') {
  return this.aggregate([
    {
      $match: {
         $and: [
             { created: { '$gte': new Date(start), '$lt': new Date(end) } },
             { author: mongoose.Types.ObjectId(userId)}
         ]
      }
    },
     {
         $group: {
             _id: {$week: '$created'},
             total: {$sum: "$amount"}
         }
     }
  ])
};

module.exports = mongoose.model('Expense', expenseSchema);
