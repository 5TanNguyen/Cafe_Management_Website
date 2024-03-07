const { response } = require("express");
const {validationResult}=require("express-validator");
const db = require('../../src/models');

class ProductnController {
    static async getProducts(req, res)
    {
        res.locals.session = req.session;

        var products = await db.productn.findAll({});

        res.status(200).json({
            products
        })
    }
}

module.exports = ProductnController;