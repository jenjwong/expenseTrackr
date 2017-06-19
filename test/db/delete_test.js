const assert = require('assert');
const User = require('../../server/models/User');

describe('Deleting a user', () => {
  let testUser1;

  beforeEach((done) => {
    testUser1 = new User({ name: 'testUser1', email: 'test1@gmail.com' });
    testUser1.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    testUser1.remove()
      .then(() => User.findOne({ name: 'testUser1' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});
