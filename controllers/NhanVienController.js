const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const DonDatModel = require("../models/DonDat");
const DonDatController = require("./DonDatController");
const NhanVienModel = require("../models/NhanVien");
const ChamCongModel = require('../models/ChamCong');

const { redirect } = require("express/lib/response");
const ThongKeModel = require("../models/ThongKe");
const ViModel = require('../models/Vi');
const LichModel = require("../models/Lich");

class NhanVienController{
    static async postChamCong(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {

            var tk_u_id = req.body.tk_u_id;
            var tk_s_id = req.body.tk_s_id;
            var tk_date = req.body.tk_date;
            var tk_note = req.body.tk_note;
            var tk_br_id = req.body.br_id;

            var s_id = req.body.s_id;

            // Calendar Detail
            var cd_id = req.body.cd_id;
            var cd_shift_id = req.body.cd_shift_id;
            var hours = req.body.hours;

            var cd = await LichModel.GetChiTietLichById(cd_id);
            if(cd[0].cd_check == 1)
            {
                req.flash('message', 'Bạn đã chấm công rồi !');
                res.render("dangnhap/dangnhap", { message : req.flash('message')});
            }

            var result = await ChamCongModel.ChamCong(tk_u_id, tk_s_id, tk_date, tk_note, s_id, tk_br_id, cd_id, hours*15000);
            ThongKeModel.UpdateLuongNV(s_id, hours*15000);
            ViModel.UpdateLuong(tk_u_id, hours*15000);
            LichModel.Check(cd_id);
            
            if(result == true)
            {
                // var success = 'Chấm Công Xong !!!!!';    
                // alert(success);
                res.redirect('/lich');
            }
        }
    }

  
}

module.exports = NhanVienController