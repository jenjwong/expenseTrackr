const assert = require('assert');
const User = require('../../server/models/User');

describe('Reading users out of the database', () => {
  let joe,
    dan,
    jeff,
    zach;

  beforeEach((done) => {
    dan = new User({ name: 'Dan', email: 'dan@here.com' });
    jeff = new User({ name: 'Jeff', email: 'jeff@here.com' });
    joe = new User({ name: 'Joe', email: 'joe@here.com' });
    zach = new User({ name: 'Zach', email: 'zach@here.com' });

    Promise.all([joe.save(), dan.save(), jeff.save(), zach.save()])
      .then(() => done());
  });

  it('finds all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });

  it('find a user with a particular id', (done) => {
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });

  it('can skip and limit the result set ', (done) => {
    User.find({})
      .sort({
        name: 1,
      })
      .skip(1)
      .limit(2)
      .then((users) => {
        assert(users.length === 2);
        assert(users[0].name === 'Jeff');
        assert(users[1].name === 'Joe');
        done();
      });
  });
});
