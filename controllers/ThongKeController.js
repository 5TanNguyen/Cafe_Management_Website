const res = require("express/lib/response");
const ThongKeModel = require("../models/ThongKe");
const { response } = require("express");
const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const ChamCongModel = require("../models/ChamCong");
const DonDatModel = require("../models/DonDat");
const DonNhapModel = require("../models/DonNhap");
const { off } = require("../config/mydb");
const PhiPhatSinhModel = require("../models/PhiPhatSinh");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");

class ThongKeController {

    static async getThongKe(req, res){

        res.locals.session = req.session;


        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if(req.session.u_d_id != 1)
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách thống kê', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            // console.log(req.session.u_d_id);
            var stt = await ThongKeModel.GetThongKe();

            if(stt)
            {
                req.flash('message', 'Đăng nhập thành công !!');
                res.render("z_layout/layout", { test : stt, message : req.flash('messsage'), body: '../thongke/ds_thongke'})
                //res.send(stt);
            }
            else
                res.send("Data Not Found");
        }
    }

    static async getChiTietThongKe(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if(req.session.u_d_id != 1)
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Chi tiết thống kê', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var s_id = req.query.s_id;

            res.send(s_id);

            var tk = await ChamCongModel.GetChamCongByS_Id(s_id);

            var o = await DonDatModel.GetDonDatByS_ID(s_id);

            var ib = await DonNhapModel.GetDonNhapByS_Id(s_id);

            var stt = await ThongKeModel.GetThongKeById(s_id);
            var pps = await PhiPhatSinhModel.GetPhiPhatSinhById(s_id);

           
            // res.render("thongke/chitietthongke", { tk, o, ib, stt, pps});
        }
    }

    static async  createThongKe(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if(req.session.u_d_id != 1)
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Tạo thống kê', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var s_name = req.body.s_name;
            var s_date = req.body.s_date;

            // res.send(s_name);
            // console.log(s_date);

            var stt = await ThongKeModel.CreateThongKe(s_name, 0, 0, 0, s_date);

            if( stt == true)
            {
                res.redirect("/thongke");
            }
        }
    }

    static async getThongKeTheoNgay(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if(req.session.u_d_id != 1)
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Thống kê theo ngày', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var date_begin = req.body.date_begin;

            var date_end = req.body.date_end;

            var result = await ThongKeModel.GetThongKeTheoNgay(date_begin, date_end);

            var dd = await ThongKeModel.GetThongKeTheoNgayDonDat(date_begin, date_end);

            var dn = await ThongKeModel.GetThongKeTheoNgayDonNhap(date_begin, date_end);

            var cc = await ThongKeModel.GetThongKeTheoNgayNhanVien(date_begin, date_end);

            var pps = await ThongKeModel.GetThongKeTheoNgayPhiPhatSinh(date_begin, date_end);
            if(result != null)
            {
                res.render("thongke/thongketheongay", {test : result,
                     dn, dd, cc, date_begin,date_end, pps});
            }
        }
    }

}

module.exports = ThongKeController