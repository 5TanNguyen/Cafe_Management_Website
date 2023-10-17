const { response } = require('express');
const {validationResult}=require("express-validator");
const { send } = require("express/lib/response");

const LichModel = require("../models/Lich");
const ThongKeModel = require("../models/ThongKe");
const ChiNhanhModel = require("../models/ChiNhanh");



class LichController
{
    static async getLich(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', '');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }

        var cld = await LichModel.GetLich();

        var stt = await ThongKeModel.GetThongKe();

        var br = await ChiNhanhModel.GetChiNhanh();

        if(cld){
            res.render('lich/lich', { cld, stt, br });
        }
    }

    static async createLich(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', '');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }

        var cld_begin = req.body.cld_begin;

        var cld_end = req.body.cld_end;

       var cldd = await LichModel.CreateLich(cld_begin, cld_end);

        //console.log(cld_begin);

        //console.log(cld_end);

        if(cldd)
        {
            res.redirect("/lich")
        }
    }

    static async getChiTietLich(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', '');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }

        var cld_id = req.query.cld_id;

        var cd = await LichModel.GetChiTietLich(cld_id);
        
        if(cd)
        {
            res.render("lich/chitietlich", { cd, cld_id });
        }
    }

    static async createChiTietLich(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', '');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }

        var cd_cld_id = req.body.cd_cld_id;

        var cd_date = req.body.cd_date;

        var cd_shift_id = req.body.cd_shift_id;

        var hours = req.body.hours;

        // console.log(cd_cld_id)
        // console.log(cd_date)
        // console.log(cd_shift_id)
        // console.log(hours)

        var cd = await LichModel.CreateChiTietLich(cd_cld_id, cd_date, cd_shift_id, hours);

        if(cd)
        {
            res.redirect('/chitietlich?cld_id=' + cd_cld_id);
        }
    }

    static async deleteChiTietLich(req, res)
    {
        res.locals.session = req.session;
        
        if(!req.session.u_id)
        {
            req.flash('message', '');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }

        var cd_cld_id = req.body.cd_cld_id;
        var cd_id = req.body.cd_id;

        var del = await LichModel.DeleteChiTietLich(cd_id);

        if(del == true)
        {
            res.redirect('/chitietlich?cld_id=' + cd_cld_id);
        }
    }

    static async dangkiLich(req, res)
    {
        //console.log('Err');
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', '');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        
        var cd_user_id = req.query.cd_user_id;

        var cd_id = req.query.cd_id;

        var cld_id = req.query.cd_cld_id;

        // console.log(cd_user_id);
        // console.log(cd_id);
        // console.log(cld_id);
        
        var dk = await LichModel.DangKiLich(cd_user_id, cd_id);

        if(dk == true)
        {
            res.redirect('/chitietlich?cld_id=' + cld_id);
            //res.redirect('/ban');
        }
    }
}

module.exports = LichController