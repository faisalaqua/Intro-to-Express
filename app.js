const express = require("express");
const productRoutes = require("./apis/products/routes");
const app = express();
const connectDB = require("./database");

app.use(express.json());
app.use("/api/products", productRoutes);

connectDB();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
