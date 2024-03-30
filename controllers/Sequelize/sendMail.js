const nodemailer = require('nodemailer');
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
        name: '5Tan',
        address: process.env.USER
    }, // sender address
    to: ["jarkal.510@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }

  const sendMail = async (mailOptions) =>{
      try {
          await transporter.sendMail(mailOptions);
          console.log('Email has been sent!');
      } catch (error) {
          console.log(error);
      }
  }

  // sendMail(transporter, mailOptions);
  module.exports = { sendMail };