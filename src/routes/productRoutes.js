const express = require("express");
const { createProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", createProduct);

module.exports = router;
