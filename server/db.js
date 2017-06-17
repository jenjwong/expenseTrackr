require('dotenv').config({ path: 'variables.env' });
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`Error in server.js--mongoose connection → ${err.message}`);
});

require('./models/User');
require('./models/Expense');

module.exports = mongoose;
