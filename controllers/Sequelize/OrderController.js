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
    
            // console.log(order.id);
    
            // let inforr = {
            //     quantity: req.body.quantity,
            //     price: req.body.price,
            //     order_id: order.id,
            //     customer_id: req.body.customer_id,
            //     product_id: req.body.product_id
            // }
    
            // var od = await db.orderDetail.create(inforr);
    
            // const body = {
            //     totalPrice : od.price * od.quantity
            // }
    
            // var updateOrder = await db.order.update(body, { where: {id : order.id}});
           
            
            // if(req.body.user_id){
            //     var rev = await db.revenue.findOne({where: {user_id: req.body.user_id}})
    
            //     const addRevenue = {
            //         total: rev.total + (req.body.price * req.body.quantity)
            //     }
    
            //     console.log("Total: " +addRevenue.total);
            //     await db.revenue.update(addRevenue, {where: {user_id: req.body.user_id}})
            // }
    
            // var product = await db.product.findOne({where: {id: req.body.product_id}});
    
            // var stockAfter = product.stock - 1;
            // const bodyy = {
            //     stock: stockAfter
            // }
    
            // await db.product.update(bodyy, { where: {id: req.body.product_id}});
    
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