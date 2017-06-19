const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/',
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login');
};

exports.confirmedPasswords = (req, res, next) => {
  if (req.body.password === req.body['password-confirm']) {
    next();
    return;
  }
  res.redirect('/login');
};

exports.isAdmin = async (req, res) => {
  res.send(req.user.isAdmin);
};
