const express = require("express");
const ExerciseRouter = express.Router();
const Exercise = require("../models/Exercise.model");

ExerciseRouter.get("/", async (req, res) => {
  try {
    const allExercises = await Exercise.find();
    res.status(200).json({ data: allExercises });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while fetching the exercises data", error });
  }
});

ExerciseRouter.post("/", async (req, res) => {
  try {
    const { name, duration } = req.body;

    if (!name || !duration || duration <= 0) {
      return res
        .status(400)
        .json({ error: "Invalid or missing fields in the request" });
    }

    const exerciseAdded = new Exercise(req.body);
    await exerciseAdded.save();
    res
      .status(201)
      .json({ message: "New exercise added", data: exerciseAdded });
  } catch (error) {
    res.status(500).json({ error: "Error while adding a new exercise", error });
  }
});

ExerciseRouter.delete("/:id", async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const exerciseDeleted = await Exercise.findByIdAndDelete(exerciseId);

    if (!exerciseDeleted) {
      res.status(404).json({ error: "Couldn't find the exercise in the db" });
    } else {
      res
        .status(200)
        .json({
          message: "Deleting the exercise is successful",
          data: exerciseDeleted,
        });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deleting the exercise", error });
  }
});

module.exports = ExerciseRouter;
