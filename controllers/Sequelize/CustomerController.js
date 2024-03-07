const { response } = require("express");
const {validationResult}=require("express-validator");
const db = require('../../src/models');

class CustomerController {
    static async getAllCustomer(req, res)
    {
        res.locals.session = req.session;

        var customers = await db.customer.findAll({});

        res.status(200).json({
            customers
        })
    }
}

module.exports = CustomerController;