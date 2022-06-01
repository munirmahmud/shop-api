const express = require("express");
const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
