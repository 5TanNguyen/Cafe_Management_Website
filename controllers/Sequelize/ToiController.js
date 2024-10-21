const db = require('../../src/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const sendMail = require('./sendMail');
const htmlContent = require('../../views/sendMail/template');

class AuthController {
    static async getTrangCaNhan(req, res){
        try {
            let test = '';
            res.render('z_layout/layout', {
                test,
                body: '../toi/toi' // truyền đường dẫn của partial vào layout
            });

        } catch (error) {
            console.log(error);            
        }

    }

    static async login(req, res){
        try {
            const {phone, password} = req.body;

            if(!(phone && password)){
                res.status(400).send('Send all data');
            }

            const customer = await db.customer.findOne({where: {phone: phone}});

            if(customer && (await bcrypt.compare(password, customer.password))){
                const token = jwt.sign(
                    {
                        id: customer.id,
                        phone: customer.phone,
                        firstName: customer.firstName
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: "2h"
                    }
                );

                customer.token = token
                customer.password = undefined

                const options = {
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                };

                res.status(200).cookie("token", token, options).json({
                    success: true,
                    token,
                    customer
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AuthController;