const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


before((done) => {
  mongoose.connect('mongodb://localhost/testeroo');
  mongoose.connection
  .once('open', () => { done(); })
  .on('error', (error) => {
    console.warn('Error', error);
  });
});

beforeEach((done) => {
  const { users, expenses } = mongoose.connection.collections;
  users.drop(() => {
    expenses.drop(() => {
      done();
    });
  });
});
