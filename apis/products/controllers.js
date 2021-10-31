// const products = require("../../data");
// let products = require("../../data");
const Product = require("../../db/Models/Product");

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.productList = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productCreate = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.productDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    return res.status(204).end();
  } catch (err) {
    next(error);
  }
};

// exports.productUpdate = async (req, res, next) => {
//   try {
//     // const productId = req.params.productId;
//     // const product = await Product.findById(productId);
//     const product = await Product.findByIdAndUpdate(
//       { _id: productId },
//       req.body,
//       { new: true }
//     );
//     // if (product) {
//       return res.status(200).json(product)
//     // } else {
//     //   return res.status(404).json({ message: "Product not found" });
//     // }
//   // } catch (error) {
//   //   next(error);
//   // }
//     }
//   }

exports.productUpdate = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true } // returns the updated product
    );
    res.json(product);
  } catch (err) {
    next(error);
  }
};
