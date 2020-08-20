const mongoose = require('mongoose');

const Schema = mongoose.Schema; // create a Schema

const userSchema = new Schema(
  {
    // User Schema
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 6
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
