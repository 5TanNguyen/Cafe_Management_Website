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

    static async getCustomerById(req, res)
    {
        var customer = await db.customer.findOne({where : {id : req.params.id}});

        if(!customer){
            res.status(404).json({
                message: 'Failed'
            })
        }

        res.status(200).json({
            customer,
            success: true,
            message: 'Lấy thông tin người dùng thành công'
        })
    }

    static async updateCustomer(req, res)
    {
        let customer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }

        var ud_customer = await db.customer.update(customer, {where: {id : req.params.id}});

        if(!ud_customer){
            res.status(404).json({
                message: 'Failed'
            })
        }

        res.status(200).json({
            ud_customer,
            success: true,
            message: 'Cập nhật thông tin người dùng thành công'
        })
    }

    static async deleteCustomer(req, res){
        let customer = {status: false}

        // var dl_customer = await db.customer.destroy({where: {id: req.params.id}})
        var dl_customer = await db.customer.update(customer, {where: {id: req.params.id}})
        
        if(!dl_customer){
            res.status(404).json({
                message: 'Failed'
            })
        }

        res.status(200).json({
            dl_customer,
            success: true,
            message: 'Xóa người dùng thành công'
        })
    }
}

module.exports = CustomerController;