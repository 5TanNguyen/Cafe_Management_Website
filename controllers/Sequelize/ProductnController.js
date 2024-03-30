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

    static async getProductDetail(req, res){
        var product = await db.productn.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!product){
            res.status(404).json({
                message: 'Không tìm thấy sản phẩm',
                success: false
            })
        }

        res.status(200).json({
            message: 'Lấy chi tiết sản phẩm thành công',
            success: true,
            product
        })
    }
}

module.exports = ProductnController;