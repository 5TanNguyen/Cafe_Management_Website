const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const ChiNhanhModel = require("../models/ChiNhanh");
const DonDatModel = require("../models/DonDat");
const PhienGiaoDichModel = require("../models/PhienGiaoDich");
const ThongKeModel = require("../models/ThongKe");
const ViModel = require("../models/Vi");
const DonDatController = require("./DonDatController");
const NhanVienController = require("./NhanVienController");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");

class PhienGiaoDichController {
    static async getAllDonRutChuaDuyet(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", {message: req.flash('message')});
        }
        
        if(req.session.u_d_id != 1)
        { 
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách đơn rút chưa duyệt', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", {message: req.flash('message')});
        }
        else
        {
            var results  = await PhienGiaoDichModel.GetAllDonRutChuaDuyet();

            if(results)
                res.render('donrut/ds_donrut', {test : results}); 
        } 
    }

    static async createDonRut(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {   
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", {message: req.flash('message')});
        }
        else {
            var tran_u_id = req.body.tran_u_id;
            var tran_money = req.body.tran_money;

            var result = await PhienGiaoDichModel.CreateDonRut(tran_u_id, tran_money);

            if(result)
                // res.render("dondat/ds_dondat", {test : result, o_t_id});
                res.redirect("/vi?w_u_id=" + tran_u_id);
            else
                res.send("Error !")
        }
    }

    static async duyetDonRut(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", {message: req.flash('message')});
        } 

        if(req.session.u_d_id != 1)
        {   
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Duyệt đơn rút', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", {message: req.flash('message')});
        }
        else
        {
            var tran_id = req.query.tran_id;

            var w_u_id = req.query.w_u_id;

            var money = req.query.money;

            var wallet = await ViModel.DuyetDonRut(w_u_id, money);

            await PhienGiaoDichModel.UpdateDonRut(tran_id);

            if(wallet){ res.redirect('/ds_donrut'); }
        }
    }
}

module.exports = PhienGiaoDichController