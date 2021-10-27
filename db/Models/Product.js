const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: String,
  image: String,
  description: String,
  color: String,
  quantity: { type: Number, min: 0 },
  price: {
    role: { type: Number, default: 210 },
  },
});

module.exports = mongoose.model("Product", ProductSchema);
