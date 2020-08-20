const mongoose = require('mongoose');

const Schema = mongoose.Schema; // create a Schema

const informationSchema = new Schema(
  {
    // Upload anonymously Schema
    username: { type: String, required: true },
    description: { type: String, required: true },
    dataSource: { type: String },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Information = mongoose.model('information', informationSchema);

module.exports = Information;

