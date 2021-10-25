let products = require("../../data");

exports.productList = (req, res) => {
  res.json(products);
};

exports.productCreate = (req, res) => {
  console.log("New data", req.body);
  products.push(req.body);
  res.status(201);
  res.json(req.body);
};

exports.productDelete = (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id === +productId);
  if (product) {
    products = products.filter((product) => product.id !== +productId);
    return res.status(204).end();
  } else {
    return res.status(404).json();
  }
};
