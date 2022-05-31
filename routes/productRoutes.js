const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  insertProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");
//des : get all products from db
//@route GET /api/products
router.get("/", getAllProducts);

//des : get a product by id
//@route GET /api/products:id
router.get("/:id", getProductById);
router.post("/", insertProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
module.exports = router;
