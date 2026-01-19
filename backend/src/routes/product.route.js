const express = require('express');
const productController = require('../controller/product.controller');

const router = express.Router();

router.post("/createProduct",productController.createProductController);

module.exports = router;