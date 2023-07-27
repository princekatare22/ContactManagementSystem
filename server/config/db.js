const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect("Enter your url")
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
