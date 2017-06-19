// async await error handling

exports.catchErrors = fn => function (req, res, next) {
  return fn(req, res, next).catch(next);
};


//  not Found Error Handler
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};


//  development Error Hanlder

exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
  };
  res.status(err.status || 500);
  res.send(errorDetails);
};


//  production Error handler no stacktraces are leaked to user

exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
};
