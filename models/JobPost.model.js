const mongoose = require("mongoose");

const JobPost = new mongoose.Schema(
    {
      jobtitle: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String, required: true },
      description: { type: String, required: true },
      jobcreatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobCreator",
        required: true
    },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  module.exports = mongoose.model("JobPost", JobPost);