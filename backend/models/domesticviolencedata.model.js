const mongoose = require('mongoose');

const Schema = mongoose.Schema; // create a Schema

const domesticViolenceDataSchema = new Schema(
  {
    // domesticViolenceData Schema
    dateOfAbuse: { type: Date },
    victimName: { type: String },
    abuserName: { type: String, required: true },
    relationshipToVictim: { type: String },
    placeOfAbuse: { type: String },
    factSource: { type: String },
    policeReaction: { type: String },
    abuserPunished: { type: String },
    caseStatus: { type: String },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const domesticViolenceData = mongoose.model(
  'domestic-violence-data',
  domesticViolenceDataSchema
);

module.exports = domesticViolenceData;
