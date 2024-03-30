const { response } = require("express");
const {validationResult}=require("express-validator");
const db = require('../../src/models');

class OrderController {
    static async createOrder(req, res)
    {
        try {
            let info = {
                totalPrice : 0,
                date : Date(Date.now()),
                customer_id: req.body.customer_id,
                user_id: req.body.user_id,
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
            var cartUD = await db.cart.update(stateCart, {
                where: {
                    id: req.body.cart_id
                }
            })
    
            console.log(ordern.id);
    
            let inforr = {
                quantity: req.body.quantity,
                price: req.body.price,
                ordern_id: ordern.id,
                customer_id: req.body.customer_id,
                productn_id: req.body.productn_id
            }

            console.log(inforr);
    
            var od = await db.orderDetail.create(inforr);
    
            const body = {
                totalPrice : od.price * od.quantity
            }
    
            var updateOrder = await db.ordern.update(body, { where: {id : ordern.id}});
           
            
            // if(req.body.user_id){
            //     var rev = await db.revenue.findOne({where: {user_id: req.body.user_id}})
    
            //     const addRevenue = {
            //         total: rev.total + (req.body.price * req.body.quantity)
            //     }
    
            //     console.log("Total: " +addRevenue.total);
            //     await db.revenue.update(addRevenue, {where: {user_id: req.body.user_id}})
            // }
    
            var product = await db.productn.findOne({where: {id: req.body.product_id}});
    
            var stockAfter = product.stock - 1;
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