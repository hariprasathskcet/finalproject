const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure uniqueness
    },
    password: {
      type: String,
      required: true,
    }
  });
  
module.exports = mongoose.model('logins', userSchema);