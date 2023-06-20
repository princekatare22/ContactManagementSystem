const mongoose = require("mongoose");
// mongoose.set('strictQuery',true);
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://princekatare22:prince2207@cluster0.1sirrir.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
