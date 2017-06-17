const assert = require('assert');
const User = require('../../../server/models/User');
const Expenses = require('../../../server/models/Expense');

describe('Creating records', () => {
  it('saves a user to database', (done) => {
    let testUser1 = new User({ name: 'testUser1', email: 'test1@gmail.com'});

    testUser1.save()
      .then(() => {
        assert(!testUser1.isNew);
        done();
      });
  });
});
