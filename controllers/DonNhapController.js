const { response } = require("express");
const {validationResult}=require("express-validator");
const { send } = require("express/lib/response");
const DonDatModel = require('../models/DonDat');
const SanPhamController = require("./SanPhamController");
const SanPhamModel = require("../models/SanPham");
const BanController = require("./BanController");
const BanModel = require("../models/Ban");
const DonNhapModel = require('../models/DonNhap');
const { INT24 } = require("mysql/lib/protocol/constants/types");
const NguyenLieuModel = require("../models/NguyenLieu");
const ThongKeModel = require("../models/ThongKe");
const ChiNhanhModel = require("../models/ChiNhanh");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");

class DonNhapController{
    static async getDonNhap(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách đơn nhập', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var result = await DonNhapModel.GetDonNhap();

            var stt = await ThongKeModel.GetThongKe();

            var br = await ChiNhanhModel.GetChiNhanh();
            //res.send(result);
            if(result)
            {
                res.render("donnhap/ds_donnhap", {test : result, stt, br});
            }
        }
    }
    
    static async getDonNhapById(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Chi tiết đơn nhập Id', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var ib_id = req.query.ib_id;

            var result = await DonNhapModel.GetDonNhapById(ib_id);

            //res.send(result);
            if(result)
            {
                res.render('donnhap/ds_donnhap', { test: result});
            }
            else
            {
                console.log('Lỗi rồi :((');
            }
        }
    }

    static async createDonNhap(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Tạo đơn nhập', datetime);
            
            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var ib_name = req.body.ib_name;
            var ib_date = req.body.ib_date;
            var ib_s_id = req.body.ib_s_id;
            var ib_br_id = req.body.ib_br_id;

            var result = await DonNhapModel.CreateDonNhap(ib_name, ib_date, ib_s_id, ib_br_id);

            if(result == true)
            {
                res.redirect("/donnhap");
            }
        }
    }

    static async getChiTietDonNhap(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Lấy chi tiết đơn nhập', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var ib_id = req.query.ib_id;

            // Chi tiết đơn nhập
            var result = await DonNhapModel.GetChiTietDonNhap(ib_id);

            // var stt = await ThongKeModel.GetThongKe();

            var gia = await DonNhapModel.GetGiaDonNhap(ib_id);

            // Nguyên liệu thêm
            var ingredient = await NguyenLieuModel.GetNguyenLieu();

            if(result) res.render("donnhap/chitietdonnhap", { test : result, ing: ingredient, ib_id, gia});
        }
    }

    static async createChiTietDonNhap(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Tạo chi tiết đơn nhập', datetime);
            
            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var ibd_ib_id = req.body.ibd_ib_id;
            var ibd_ing_id = req.body.ing_id;
            var cost = req.body.ibd_cost;
            var ibd_amount = req.body.ibd_amount;
            var ib_costpu = req.body.ib_costpu;

            //console.log(ib_costpu);
            var ibd_cost = cost * ibd_amount;
            
            var x = await DonNhapModel.CreateChiTietDonNhap(ibd_ib_id, ibd_ing_id, ibd_amount, ibd_cost);
            
            var ib_cost = parseInt(ibd_cost) + parseInt(ib_costpu);
            
            //console.log(ib_cost);
            DonNhapModel.UpdateGiaDonNhap(ibd_ib_id, ib_cost);

            if(x == true) res.redirect('/chitietdonnhap?ib_id='+ibd_ib_id);
        }
    }
}

module.exports = DonNhapController