const { response } = require("express");
const {validationResult}=require("express-validator");
const db = require('../../src/models');
const { Op } = require('sequelize');

class ProductnController {
    static async getProducts(req, res)
    {
        res.locals.session = req.session;

        var products = await db.productn.findAll({
            where: {
                state : true
            }
        });

        res.status(200).json({
            products
        })
    }

    static async getProductDetail(req, res){
        var product = await db.productn.findOne({
            include: [{
                model: db.productPrice,
                as: 'productPrice'
            }],
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

    static async getProductsByName(req, res){
        var product = await db.productn.findAll({
            where: {
                name: {
                    [Op.like]: '%' + req.body.key + '%'
                }
            }
        })

        if(!product){
            res.status(404).json({
                success: false,
                message: 'Không tìm thấy sản phẩm !'
            })
        }

        res.status(200).json({
            success: true,
            product
        })
    }

    static async addProdcut(req, res)
    {
        let product = {
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            state: true,
            category_id: req.body.category_id
        }

        var new_product = await db.productn.create(product);

        res.status(200).json({
            message: `Thêm thành công sản phẩm ${req.body.name}`,
            success: true,
            new_product
        })
    }

    static async updateProdcut(req, res)
    {
        let product = {
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            category_id: req.body.category_id
        }

        var updated_product = await db.productn.update(product, {where: {id : req.params.id }});

        if(!updated_product)
        {
            res.status(500).json({
                message: `Không cập nhật được sản phẩm`,
                success: false
            })
        }

        res.status(200).json({
            message: `Cập nhật thành công sản phẩm`,
            success: true,
            updated_product
        })
    }

    static async hideProduct(req, res)
    {
        let state_product = {
            state : false
        }

        var product = await db.productn.update(
            state_product, 
            {where: { id: req.params.id}}
        );

        if(!product)
        {
            res.status(500).json({
                message: "Không ẩn được sản phẩm",
                success: false
            });
        }

        res.status(200).json({
            message: "Ẩn thành công sản phẩm",
            success: true,
            product
        })
    }
}

module.exports = ProductnController;