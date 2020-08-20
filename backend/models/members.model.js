const mongoose = require('mongoose');

const Schema = mongoose.Schema; // create a Schema

const membersSchema = new Schema(
  {
    // admin Schema
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String },
    description: { type: String },
    email: { type: String },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const members = mongoose.model('members', membersSchema);

module.exports = members;
