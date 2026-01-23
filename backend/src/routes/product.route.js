const express = require('express');
const productController = require('../controller/product.controller');
const {protected}= require('../middleware/protected');
const {isAdmin} = require('../middleware/isAdmin');
const upload = require('../middleware/multer');

const router = express.Router();

router.post(
  "/createProduct",
  protected,
  isAdmin,
  upload.array("images", 10),
  productController.createProductController,
);

router.get("/getAllProducts" , productController.getAllProducts );

module.exports = router;