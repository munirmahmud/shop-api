exports.getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "create Product" });
};

exports.getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "Product testing route" });
};
