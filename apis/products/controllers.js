// const products = require("../../data");
// let products = require("../../data");
const Product = require("../../db/Models/Product");

exports.productList = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

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
    const { productId } = req.params;
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

exports.productUpdate = async (req, res) => {
  try {
    const productId = req.params.productId;
    // const product = await Product.findById(productId);
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true }
    );
    if (product) {
      return res.json(product).end();
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
