const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    targetDate: Date,
    calories: Number,
    status: {
      type: String,
      enum: ["In Progress", "Achieved", "Abandoned"],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
