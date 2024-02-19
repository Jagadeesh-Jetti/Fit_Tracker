const express = require("express");

const FoodRouter = express.Router();
const { Food } = require("../models/Food.model");

FoodRouter.get("/", async (req, res) => {
  try {
    const allFood = await Food.find();
    res
      .status(200)
      .json({ message: "Fetching all food data is successful", allFood });
  } catch (error) {
    res.status(500).json({ error: "Error while fetching food data" });
  }
});

FoodRouter.post("/", async (req, res) => {
  const { name, calories, protein, carbs, fat } = req.body;

  try {
    const foodAdded = new Food({ name, calories, protein, carbs, fat });
    await foodAdded.save();
    res
      .status(201)
      .json({ message: "Successfully added the food item", foodAdded });
  } catch (error) {
    res.status(500).json({ error: "Error while adding the food item" });
  }
});

FoodRouter.delete("/:id", async (req, res) => {
  const foodId = req.params.id;

  try {
    const foodDeleted = await Food.findByIdAndDelete(foodId);

    if (!foodDeleted) {
      res.status(404).json({ message: "Could not find the food item" });
    } else {
      res.status(200).json({ message: "Deleted food item successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error while deleting the food item" });
  }
});

module.exports = FoodRouter;
