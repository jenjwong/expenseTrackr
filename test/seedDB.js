// // /**
// //  * Seed the database
// //  */
// // // function seedEvents(req, res) {
// // //   // create some events
// //
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise; // Mongoose to use ES6 promises
// const Expense = require('../../server/models/Expense');
// const User = require('../../server/models/User');
// const {createExpense} = require('../../server/controllers/expenseController');
//
//
//   const names = ['Hockey', 'Extra Curriculars', 'Sushi', 'Donuts', 'Fitness', 'Climbing', 'Fancy Coffee', 'Dinner with Friends', 'Hipster Pastries', 'Yoga', 'Ribs', 'Skiing', 'Concerts', 'Asperagus Water Futures'];
//
//   const descriptionText = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Et quod est munus, quod opus sapientiae? Avaritiamne minuis?
//
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quod est munus, quod opus sapientiae? Avaritiamne minuis? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//
//   Et quod est munus, quod opus sapientiae? Avaritiamne minuis?`;
//
//   const genRandom = (val) => Math.floor(Math.random() * val);
//
//     const expenses =  Array(10).fill({}).map((item) => {
//       name = names[genRandom(names.length)];
//       description = descriptionText.slice(0, genRandom(descriptionText.length));
//       amount = genRandom(100);
//       created = Date.now() - genRandom(31540000000 * 2);
//       // tags = [names[genRandom(names.length)]];
//       author = '593e4412d1022a6aaab61c8c';
//       expense = {name, amount, created, description,  author}
//       return expense;
//     });
//
//
//   // for (expense of expenses) {
//   //   createExpense({body: expense})
//   //
//   // }
//   const e = {};
//   e.body = expenses[0];
//   e.user = {_id: '593e4412d1022a6aaab61c8c'};
//   console.log(e)
//   createExpense(e)
// // //
// // //   seeded!
// // //   res.send('Database seeded!');
// // // }
