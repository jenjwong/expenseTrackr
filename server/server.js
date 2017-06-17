const express = require('express');
const app = express();
require('dotenv').config({ path: 'variables.env' });
require('./db');
require('./middleware')(app, express);
require('./routes')(app);

app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
