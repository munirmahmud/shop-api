const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Product name must be provided"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

module.exports = mongoose.model("Product", productSchema);
