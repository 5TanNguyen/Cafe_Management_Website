const { response } = require("express");
const {validationResult}=require("express-validator");
const db = require('../../src/models');

class OrderController {
    static async createOrder(req, res)
    {
        console.log("CART ID")
        console.log(req.body.cart_id);
        try {
            let info = {
                totalPrice : 0,
                date : Date(Date.now()),
                customer_id: req.body.customer_id,
                address: req.body.address,
                state: req.body.state
            }
    
            var ordern = await db.ordern.create(info);
            
            if(ordern == false){
                res.send("Lỗi");
                return;
            }

            var stateCart = {
                state: true
            }
            await db.cart.update(stateCart, {
                where: {
                    id: req.body.cart_id
                }
            })
    
            let inforr = {
                quantity: req.body.quantity,
                price: req.body.price,
                ordern_id: ordern.id,
                productn_id: req.body.productn_id
            }
    
            var od = await db.orderDetail.create(inforr);
    
            const body = {
                totalPrice : od.price * od.quantity
            }
    
            await db.ordern.update(body, { where: {id : ordern.id}});
    
            var product = await db.productn.findOne({where: {id: req.body.productn_id}});
    
            var stockAfter = product.stock - req.body.quantity;
            const bodyy = {
                stock: stockAfter
            }
    
            await db.productn.update(bodyy, { where: {id: req.body.productn_id}});
    
            res.status(200).json({
                message: "Thêm đơn đặt thành công!",
                ordern
            })
        } catch (error) {
            console.log(error);
        }

        console.log('Tạo đơn thành công!');
    }

    static async getOrders(req, res){
        var orders = await db.ordern.findAll({
            include: [{
                model: db.customer,
                as: 'customer'
            }]
        })

        res.send(orders)
        // res.status(200).json({
        //     message: 'Lấy đơn hàng thành công!',
        //     ordern
        // })
    }
}

module.exports = OrderController;