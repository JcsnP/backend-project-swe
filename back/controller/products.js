const Product = require('../models/products');

exports.getAllProducts = (req, res, next) => {
    Product.findAll().then(products => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.addProduct = (req, res, next) => {
    const p_name = req.body.p_name;
    const p_descrip = req.body.p_descrip;
    const p_qty = req.body.p_qty;
    const p_price = req.body.p_price;
    const p_img = req.body.p_img;
    const p_color = req.body.p_color;
    const p_brand_id = req.body.p_brand_id;
    
    const product = new Product(null, p_name, p_descrip , p_qty, p_price , p_img, p_color, p_brand_id);
    product.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.getEditProduct = (req, res, next) => {
    const p_id = req.params.p_id;
    Product.findById(p_id).then((products) => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.getProductBrand = (req, res, next) => {
    const p_brand_id = req.params.p_brand_id;
    Product.findByIdBrand(p_brand_id).then((products) => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}


exports.editProduct = (req, res, next) => {
    const p_id = req.body.p_id;
    const p_name = req.body.p_name;
    const p_descrip = req.body.p_descrip;
    const p_qty = req.body.p_qty;
    const p_price = req.body.p_price;
    const p_img = req.body.p_img;
    const p_color = req.body.p_color;
    const p_brand_id = req.body.p_brand_id;

    const product = new Product(p_id, p_name, p_descrip , p_qty, p_price , p_img, p_color, p_brand_id );
    product.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.deleteProduct = (req, res, next) => {
    const p_id = req.query.p_id;
    Product.delById(p_id).then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error,
            "result": false
        });
    });
}
