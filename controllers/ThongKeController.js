const res = require("express/lib/response");
const ThongKeModel = require("../models/ThongKe");
const { response } = require("express");
const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const ChamCongModel = require("../models/ChamCong");
const DonDatModel = require("../models/DonDat");
const DonNhapModel = require("../models/DonNhap");
const { off } = require("../config/db");
const PhiPhatSinhModel = require("../models/PhiPhatSinh");

class ThongKeController {

    static async getThongKe(req, res){

        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap")
        }
        else
        {

            var stt = await ThongKeModel.GetThongKe();

            if(stt)
            {
                res.render("thongke/ds_thongke", { test : stt})
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
            res.redirect("/dangnhap")
        }
        else
        {

            var s_id = req.query.s_id;

            var tk = await ChamCongModel.GetChamCongByS_Id(s_id);

            var o = await DonDatModel.GetDonDatByS_ID(s_id);

            var ib = await DonNhapModel.GetDonNhapByS_Id(s_id);

            var stt = await ThongKeModel.GetThongKeById(s_id);
            var pps = await PhiPhatSinhModel.GetPhiPhatSinhById(s_id);

            res.send(pps);
            // res.render("thongke/chitietthongke", { tk, o, ib, stt, pps});
        }
    }

    static async  createThongKe(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
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
            res.redirect("/dangnhap")
        }
        else
        {

            var date_begin = req.body.date_begin;

            var date_end = req.body.date_end;

            // res.send(date_begin);

            // console.log(date_end)

            var result = await ThongKeModel.GetThongKeTheoNgay(date_begin, date_end);

            var dd = await ThongKeModel.GetThongKeTheoNgayDonDat(date_begin, date_end);

            var dn = await ThongKeModel.GetThongKeTheoNgayDonNhap(date_begin, date_end);

            var cc = await ThongKeModel.GetThongKeTheoNgayNhanVien(date_begin, date_end);

            var pps = await ThongKeModel.GetThongKeTheoNgayPhiPhatSinh(date_begin, date_end);
            if(result != null)
            {
                res.render("thongke/thongketheongay", {test : result, dn, dd, cc, date_begin,date_end, pps});
            }
        }
    }

}

module.exports = ThongKeController