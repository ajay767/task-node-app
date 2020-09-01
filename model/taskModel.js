const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, 'Please give the item to add to task app']
  },
  published: {
    type: Date
  }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
