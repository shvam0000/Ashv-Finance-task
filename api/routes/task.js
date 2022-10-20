const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Task = require('../models/tasks');
router.get('/', (req, res, next) => {
  Task.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    priority: req.body.priority,
    category: req.body.category,
  });
  task
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Handling POST requests to /tasks',
        createdTask: task,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
