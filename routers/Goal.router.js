const express = require("express");

const GoalRouter = express.Router();
const Goal = require("../models/Goal.model");

GoalRouter.get("/", async (req, res) => {
  try {
    const allGoals = await Goal.find();
    res.status(200).json({ message: "All goals fetched:", allGoals });
  } catch (error) {
    res.status(500).json({ message: "Error while fetching all goals:", error });
  }
});

GoalRouter.post("/", async (req, res) => {
  const { name, description, calories, status } = req.body;
  try {
    if (name && description && calories && status) {
      const goalAdded = new Goal({
        name,
        description,
        calories,
        status,
      });
      await goalAdded.save();
      res.status(201).json({ message: "New goal added", goalAdded });
    } else {
      res.status(400).json({ message: "Missing required fields" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while adding new goal", error });
  }
});

GoalRouter.delete("/:id", async (req, res) => {
  const goalId = req.params.id;
  try {
    const goalDeleted = await Goal.findByIdAndDelete(goalId);
    if (!goalDeleted) {
      res.status(404).json({ error: "Could not find the goal to delete" });
    }
    res.status(200).json({ message: "Deleted the goal successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error while deleting the goal", error });
  }
});

module.exports = GoalRouter;
