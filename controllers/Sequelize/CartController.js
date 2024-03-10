const { response } = require("express");
const {validationResult}=require("express-validator");
const db = require('../../src/models');

class CartController {
    static async createCart(req, res)
    {
        res.locals.session = req.session;

        let cart = {
            quantity: req.body.quantity,
            productn_id: req.body.productn_id,
            customer_id: req.body.customer_id
        }

        var new_cart = await db.cart.create(cart);

        res.status(200).json({
            message: 'Thêm vào giỏ hàng thành công!',
            new_cart
        })
    }

    static async getCarts(req, res){
        var cart = await db.cart.findAll({
            include: [{
                model: db.productn,
                as: 'productn'
            }],
            where: {
                customer_id: req.params.id
            }
        })

        var customer = await db.customer.findOne({
            where: { id : req.params.id}
        })

        // res.send(cart)
        res.status(200).json({
            message: 'Lấy giỏ hàng thành công!',
            customer,
            cart
        })
    }
}

module.exports = CartController;