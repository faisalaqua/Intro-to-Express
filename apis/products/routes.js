const express = require("express");
const router = express.Router();
const {
  productList,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");

router.get("/", productList);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

router.put("/:productId", productUpdate);

module.exports = router;
