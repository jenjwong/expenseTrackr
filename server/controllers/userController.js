const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const { catchErrors } = require('../utils/errorHandlers');

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That Email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  }
  next(); // there were no errors!
};

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name});
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next(); // pass to authController.login
};
