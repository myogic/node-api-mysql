const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router()

const employeeController = require('../controllers/employeeController');


// Retrieve all employees
router.get('/', employeeController.findAll);

// create a new employee
router.post('/', employeeController.create);

// Retrieve a single employee with od
router.get('/:id', employeeController.findById);

// Update a employee with id
router.put('/:id', employeeController.update);

// Delete a employee with id
router.delete('/:id', employeeController.delete);

module.exports = router