const express = require("express");
const GoalRouter = express.Router();
const Goal = require("../models/Goal.model");

GoalRouter.get("/", async (req, res) => {
  try {
    const allGoals = await Goal.find();
    res.status(200).json({ message: "All goals fetched", data: allGoals });
  } catch (error) {
    console.error("Error while fetching all goals:", error);
    res.status(500).json({ message: "Error while fetching all goals", error });
  }
});

GoalRouter.post("/", async (req, res) => {
  const { name, description, calories, status } = req.body;

  try {
    if (name && description && calories) {
      const goalAdded = new Goal({
        name,
        description,
        calories,
        status,
      });
      await goalAdded.save();
      res.status(201).json({ message: "New goal added", data: goalAdded });
    } else {
      res.status(400).json({ message: "Missing required fields" });
    }
  } catch (error) {
    console.error("Error while adding new goal:", error);
    res.status(500).json({ message: "Error while adding new goal", error });
  }
});

GoalRouter.delete("/:id", async (req, res) => {
  const goalId = req.params.id;

  try {
    const goalDeleted = await Goal.findByIdAndDelete(goalId);
    if (!goalDeleted) {
      res.status(404).json({ message: "Could not find the goal to delete" });
    } else {
      res
        .status(200)
        .json({ message: "Deleted the goal successfully", data: goalDeleted });
    }
  } catch (error) {
    console.error("Error while deleting the goal:", error);
    res.status(500).json({ message: "Error while deleting the goal", error });
  }
});

module.exports = GoalRouter;
