const mongoose = require("mongoose");

const dotEnv = require("dotenv");

dotEnv.config({
  path: ".env",
});

const mongoURL = process.env.MONGODB;

const dataBase = () => {
  if (!mongoURL) {
    console.error("ENvironment variables not defined");
  } else {
    mongoose
      .connect(mongoURL)
      .then(() => {
        console.log("Databse connected");
      })
      .catch((error) => {
        console.error("Error while connecting databse,", error);
      });
  }
};

module.exports = dataBase;
