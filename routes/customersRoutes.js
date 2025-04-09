const express = require('express');
const router = express.Router();
const customersControllers = require('../controllers/customersControllers');

router.get('/', customersControllers.getAllCustomers);

router.get('/:id', customersControllers.getCustomerById);

router.post('/', customersControllers.addCustomer);

router.put('/:id', customersControllers.updateCustomer);

router.delete('/:id', customersControllers.deleteCustomer);

module.exports = router;