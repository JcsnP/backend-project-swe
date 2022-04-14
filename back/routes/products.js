const express = require('express');
const router = express.Router();
const productController = require('../controller/products');

// path
router.get('/products', productController.getAllProducts);

router.post('/add-products', productController.addProduct);

router.get('/edit-products/:p_id', productController.getEditProduct);

router.get('/brand/:p_brand_id', productController.getProductBrand);

router.post('/edit-products', productController.editProduct);

router.get('/delete-products', productController.deleteProduct)

module.exports = router;