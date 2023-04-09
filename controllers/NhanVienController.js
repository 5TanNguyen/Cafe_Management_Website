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

            var s_id = req.body.s_id;

            var result = await ChamCongModel.ChamCong(tk_u_id, tk_s_id, tk_date, tk_note, s_id);
            ThongKeModel.UpdateLuongNV(s_id, 60000);
            
            if(result == true)
            {
                // var success = 'Chấm Công Xong !!!!!';    
                // alert(success);
                res.redirect('/ban');
            }
        }
    }

  
}

module.exports = NhanVienController