const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// this changes the URL to /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// this changes the URL to /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title, price: req.body.price, description: req.body.description});
    res.redirect('/');
});
  
exports.routes = router;
exports.products = products;
