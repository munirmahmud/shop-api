const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("DB connected");
  } catch (error) {
    console.log(`DB connection failed: ${error}`);
  }
};
module.exports = connectDB;

// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(`DB connection failed: ${error}`));
