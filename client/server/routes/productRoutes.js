const express = require('express');
const router = express.Router();
const products = require('../Data/products');

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// GET product by ID
router.get('/:id', (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

module.exports = router;