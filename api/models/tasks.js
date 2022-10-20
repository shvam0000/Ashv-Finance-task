const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
