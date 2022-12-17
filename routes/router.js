const express = require('express');
const controller = require('../controller/controller');
const router = express.Router();

const Product = require('../model/model');

router.get('/', controller.getAllProducts);

router.post('/', controller.createProduct)

router.get('/:id', controller.getProduct)

router.put('/:id', controller.updateProduct)

router.delete('/:id', controller.deleteProduct)


module.exports = router;