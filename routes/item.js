const express = require ('express');
const Item = require('../models/product.model')
const router = express.Router();
const {getProducts,getProduct,addItems,updateItem,deleteItem} = require('../controllers/item.controller');


router.post('/', addItems);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);



module.exports = router;
