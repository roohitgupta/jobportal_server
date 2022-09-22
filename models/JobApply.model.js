const mongoose = require("mongoose");

const JobApply = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      expectedCTC: { type: String, required: true },
      experience: { type: String, required: true },
      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobCreator",
        required: true
    },
      applierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobApplier",
        required: true
    }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  module.exports = mongoose.model("JobApplyUser", JobApply);