const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    caloriesBurned: {
      type: Number,
      default: function () {
        const caloriesPerMinute = {
          walking: 5,
          running: 10,
          swimming: 12,
          dancing: 7,
          yoga: 3,
          cycling: 8,
        };
        const exerciseType = this.name.toLowerCase();
        const caloriesPerMinuteForExercise =
          caloriesPerMinute[exerciseType] || 5;
        return this.duration * caloriesPerMinuteForExercise;
      },
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
