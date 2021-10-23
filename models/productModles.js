'use strict';

const dbConn = require('../config/config');

var Product = function(product) {
    this.id = product.id;
    this.name = product.name;
    this.category = product.category;
    this.description = product.description;
    this.price = product.price;
    this.quantity = product.quantity;
    this.created_at = new Date();
};

Product.create = function(newProduct, result) {
    dbConn.query("INSERT INTO products set ?", newProduct, function(err, res) {
        if (err) {
            console.log("error", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Product.findById = function(id, result) {
    dbConn.query("SELECT * FROM products WHERE id=?", id, function(err, res) {
        if (err) {
            console.log("Error : ", err);
            result(err, null);
        } else {
            result(null, res)
        }
    });
};

Product.findAll = function(result) {
    dbConn.query("SELECT * FROM products", function(err, res) {
        if (err) {
            console.log("error", err);
            result(null, err);
        } else {
            console.log('products : ', res);
            result(null, res);
        }
    });
};

Product.update = function(id, product, result) {
    dbConn.query("UPDATE products SET name=?, category=?, description=?, price=?, quantity=? WHERE id=? ", [product.name, product.category, product.description, product.price, product.quantity, id], function(err, res) {
        if (err) {
            console.log("error ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Product.delete = function(id, result) {
    dbConn.query("DELETE FROM products WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error", err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Product;