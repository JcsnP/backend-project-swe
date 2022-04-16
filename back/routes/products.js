const express = require('express');
const router = express.Router();
const productController = require('../controller/products');

// path
router.get('/products', productController.getAllProducts);

router.post('/add-products', productController.addProduct);

router.get('/edit-products/:p_id', productController.getEditProduct);

// ดึงข้อสินค้าที่มีแบรนด์นี้ออกมา
router.get('/brand/:p_brand_id', productController.getProductBrand);

router.post('/edit-products', productController.editProduct);

router.get('/delete-products', productController.deleteProduct)

// ไม่อยากใช้แล้ว
router.get('/get-brands', productController.getAllBrands);

module.exports = router;