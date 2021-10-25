const express = require("express");
let products = require("./data");
const app = express();
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  console.log("New data", req.body);
  products.push(req.body);
  res.status(201);
  res.json(req.body);
});

app.delete("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id === +productId);
  if (product) {
    products = products.filter((product) => product.id !== +productId);
    return res.status(204).end();
  } else {
    return res.status(404).json();
  }
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
