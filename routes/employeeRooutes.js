const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router()

const employeeController = require('../controllers/employeeController');


// Retrieve all employees
router.get('/employees', employeeController.findAll);

// create a new employee
router.post('/employees', employeeController.create);

// Retrieve a single employee with od
router.get('/employees/:id', employeeController.findById);

// Update a employee with id
router.put('/employees/:id', employeeController.update);

// Delete a employee with id
router.delete('/employees/:id', employeeController.delete);



const ProductController = require('../controllers/productController');

//get all product
router.get('/products', ProductController.findAll);
router.get('/stock', ProductController.getStock);

// create a new Product
router.post('/product', ProductController.create);

// get a single Product
router.get('/product/:id', ProductController.findById);

// Update Product with ID
router.put('/product/:id', ProductController.update);

// Delete a Product by Id
router.delete('/product/:id', ProductController.delete);

module.exports = router