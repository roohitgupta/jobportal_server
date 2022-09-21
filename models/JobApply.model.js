const mongoose = require("mongoose");

const JobApply = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      expectedCTC: { type: String, required: true },
      experience: { type: String, required: true },

    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  module.exports = mongoose.model("JobApplyUser", JobApply);