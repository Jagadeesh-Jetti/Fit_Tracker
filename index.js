const express = require("express");
const cors = require(cors);

const app = express();

const dataBase = require("./db");
const ExerciseRouter = require("./routers/Exercise.router");
const FoodRouter = require("./routers/Food.router");
const GoalRouter = require("./routers/Goal.router");

dataBase();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/exercises", ExerciseRouter);
app.use("/foods", FoodRouter);
app.use("/goals", GoalRouter);

app.get("/", (req, res) => {
  res.send("Fitness Tracker Backend");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Fitness Tracker backend server started");
});
