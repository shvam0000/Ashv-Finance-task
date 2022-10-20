const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const taskRoutes = require('./routes/task');

mongoose.connect(
  'mongodb+srv://admin:admin@node-rest-shop.5kcqy.mongodb.net/?retryWrites=true&w=majority'
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/tasks', taskRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
