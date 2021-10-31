const express = require("express");
const router = express.Router();
const {
  productList,
  productCreate,
  productDelete,
  productUpdate,
  fetchProduct,
} = require("./controllers");

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    next({ status: 404, message: "Product Not Found!" });
  }
});

router.get("/", productList);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

router.put("/:productId", productUpdate);

module.exports = router;
