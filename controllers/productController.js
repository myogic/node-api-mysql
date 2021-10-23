'use strict'
const Product = require('../models/productModles');

exports.findAll = function(req, res) {
    Product.findAll(function(err, product) {
        console.log('controller');
        if (err)
            res.send(err)
        console.log('res', product);
        res.send(product);
    });
};

exports.create = function(req, res) {
    const newProduct = new Product(req.body);
    if (req.body.constructor == Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Please Provide all required field'
        });
    } else {
        Product.create(newProduct, function(err, product) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Product added successfully" });
        });
    }
};

exports.findById = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Pleae Provide all Required field'
        });
    } else {
        Product.update(req.params.id, new Product(req.body), function(err, product) {
            if (err)
                res.send(err);
            res.json({
                error: false,
                message: 'Product Succesfully updated'
            });
        });
    }
};

exports.delete = function(req, res) {
    Product.delete(req.params.id, function(err, product) {
        if (err)
            res.send(err)
        res.json({
            error: false,
            message: 'Product Succesfully deleted'
        });
    });
};

exports.getStock = function(req, res) {
    Product.stock(function(err, product) {
        console.log('Controller');
        if (err)
            res.send(err)
        console.log('res', product);
        res.send(product);
    });
};