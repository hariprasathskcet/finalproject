const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  topic: { type: String},
  description: { type: String },
  imageUrl: { type: String }
});

module.exports = mongoose.model('users', viewSchema);