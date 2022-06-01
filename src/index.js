require("dotenv").config();
require("express-async-errors");
const connectDB = require("./config/db");

const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./middlewares/errorHandlers");
const notFound = require("./middlewares/notFound");
const productRoutes = require("./routes/productRoutes");

// Middleware
app.use(express.json());

// Roots
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`);
});

app.use("/api/v1/products", productRoutes);

// Product route
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server starts on port http://localhost:${PORT}`)
    );
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};
start();
