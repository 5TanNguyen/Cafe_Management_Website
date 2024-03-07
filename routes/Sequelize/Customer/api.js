const express = require('express');
const router = require('express').Router();
const customerController = require('../../../controllers/Sequelize/CustomerController');

router.get('/customer-list', customerController.getAllCustomer);

module.exports = router;