// const products = require("../../data");
// let products = require("../../data");
const Product = require("../../Models/Product");

exports.productList = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

// res.json(products);

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.productDelete = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productDelete = Product.findById(productId);
    if (productDelete) {
      await Product.remove(productDelete);
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Note Found" });
  }
};

// const productId = req.params.productId;
// const product = products.find((product) => product.id === +productId);
// if (product) {
//   products = products.filter((product) => product.id !== +productId);
//   return res.status(204).end();
// } else {
//   return res.status(404).json();
// }
