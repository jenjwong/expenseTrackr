const assert = require('assert');
const User = require('../../../server/models/User');

describe('Deleting a user', () => {
  let testUser1;

  beforeEach((done) => {
    testUser1 = new User({ name: 'testUser1', email: 'test1@gmail.com'});
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

  // it('class method remove', (done) => {
  //   // Remove a bunch of records with some given criteria
  //   User.remove({ name: 'Joe' })
  //     .then(() => User.findOne({ name: 'testUser1' }))
  //       .then((user) => {
  //         assert(user === null);
  //         done();
  //       });
  // });
  //
  // it('class method findAndRemove', (done) => {
  //   User.findOneAndRemove({ name: 'Joe' })
  //     .then(() => User.findOne({ name: 'Joe' }))
  //       .then((user) => {
  //         assert(user === null);
  //         done();
  //       });
  // });
  //
  // it('class method findIdAndRemove', (done) => {
  //   User.findByIdAndRemove( testUser1._id )
  //     .then(() => User.findOne({ name: 'Joe' }))
  //       .then((user) => {
  //         assert(user === null);
  //         done();
  //       });
  // });

});
