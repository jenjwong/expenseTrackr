const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../../server/models/User');
const Expense = require('../../server/models/Expense');


describe('Associations', () => {
  let user1, expense;
  beforeEach( (done) => {
    user1 = new User({ name: 'user1', email: 'user1@gmail.com' });


    Promise.all([ user1.save()])
      .then(() => {
        return User.find({name: 'user1'})
      })
      .then((user) => {
        return new Expense({ name: 'Great thing I bought', amount: 5, description: 'Delicious!', author: user[0]._id });
      })
      .then((expense) => {
        expense.save()
      })
      .then(() => {
        done();
      })
    });

    it('saves a relation between a user and a blogpost', (done)=> {
      User.findOne({ name: 'user1' })
      .populate('expenses')
        .then((user) => {
          console.log(user.expenses)
          // assert(user.expenses[0].name === 'Great thing I bought');
          done();
        });
  });
    //
    // it('saves a full relation graph', (done) => {
    //   User.findOne({ name: 'Joe' })
    //   .populate({
    //     path: 'blogPosts',
    //     populate: {
    //       path: 'comments',
    //       model: 'comment',
    //       populate: {
    //         path: 'user',
    //         model: 'user'
    //       }
    //     }
    //   })
    //   .then((user) => {
    //     assert(user.name === 'Joe');
    //     assert(user.blogPosts[0].title === 'JS is Great');
    //     assert(user.blogPosts[0].comments[0].content === 'Congrats!');
    //     assert(user.blogPosts[0].comments[0].user.name === 'Joe');
    //     done();
    //   });
    // });
});
