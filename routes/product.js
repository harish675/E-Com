
const express = require('express');
const router = express.Router();
const productController = require('../controller/product_controller');


router.post('/create',productController.createProduct);
router.delete('/delete/:id',productController.removeProduct);



module.exports = router;