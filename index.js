const express = require('express');
const bodyParser = require('body-parser');
const cont_user = require('./src/controllers/user.controller');
const cont_api = require('./src/controllers/api.controller');
const cont_task = require('./src/controllers/task.controller');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/', bodyParser.json());
app.use('/user', cont_user);
app.use('/api', cont_api);
app.use('/task', cont_task);

app.use('/', (err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log('ready');
});
