const express = require("express");
const productRoutes = require("./apis/products/routes");
const app = express();
const connectDB = require("./db/Models/database");

const PATH = 8000;
app.use(express.json());
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}:${PATH}${req.originalUrl}`
  );
  next();
});

app.use("/api/products", productRoutes);

connectDB();

app.use((req, res, next) => {
  res.status(404).json("Path not found");
  next();
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
