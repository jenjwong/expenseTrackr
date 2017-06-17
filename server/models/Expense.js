const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');
var ObjectId = mongoose.Types.ObjectId;

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
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author'
  }
});

expenseSchema.statics.getExpenseSum = function(start, end) {
  return this.aggregate([
    { $match: {
      author: ObjectId('594476964024304ac4c97a65'),
      $and: [
          { created: { '$gte': start, '$lt': end } }
      ]
    } },
    {
      $group: {
          _id: null,
          total: {
              $sum: "$amount"
          }
      }
    }
  ])
};


module.exports = mongoose.model('Expense', expenseSchema);