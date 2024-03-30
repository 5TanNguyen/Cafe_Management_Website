const db = require('../../src/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const sendMail = require('./sendMail');

class AuthController {
    static async register(req, res){
        try {
            var { firstName, lastName, address, email, password, phone} = req.body;

            if(!(firstName && lastName && address && email && password && phone)){
                res.status(400).send('All field are compulsory');
            }            

            var c = await db.customer.findOne({where: { phone: phone}});
            if(c){
                res.status(401).json({
                    message: 'Customer already exists with this phone'
                })

                return;
            }

            const pwd = await bcrypt.hash(password, 10);

            const customer = await db.customer.create({
                firstName,
                lastName,
                address,
                email,
                password: pwd,
                phone,
                role_id: 1
            })

            const token = jwt.sign(
                {
                    id: customer.id,
                    phone,
                    firstName
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: "2h"
                }
            );

            customer.token = token
            customer.password = undefined

            // MAIL
            const mailOptions = {
                from: {
                    name: '5Tan',
                    address: process.env.USER
                }, // sender address
                to: [email], // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            }

            sendMail.sendMail(mailOptions);

            res.status(201).json({
                message: 'Register successfully!',
                customer
            })

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