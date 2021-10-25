const express = require("express");
const router = express.Router();
const { productList, productCreate, productDelete } = require("./controllers");

router.get("/", productList);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

module.exports = router;
