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
const res = require("express/lib/response");

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

    static async getAllNhanVien(req, res)
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
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách nhân viên', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var users = await NhanVienModel.GetAllNhanVien();

            var duties = await NhanVienModel.GetAllChucVu();

            res.render("nhanvien/ds_nhanvien", { u : users, d : duties});
        } 
    }

    static async addNhanVien(req, res)
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
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Thêm nhân viên', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var u_username = req.body.u_username;
            var u_password = req.body.u_password;
            var u_name = req.body.u_name;
            var u_address = req.body.u_address;
            var u_phone = req.body.u_phone;
            var u_d_id = req.body.u_d_id;

            var rs = await NhanVienModel.AddNhanVien(u_username, u_password, u_name, u_address, u_phone, u_d_id);

            if(rs == true)
            {
                res.redirect("/nhanvien");
            }
            else
            {
                res.redirect("/dangnhap");
            }
        }
    }

    static async editNhanVien(req, res)
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
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Sửa nhân viên', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var u_id = req.body.u_id;
            var u_name = req.body.u_name;
            var u_address = req.body.u_address;
            var u_phone = req.body.u_phone;
            var u_d_id = req.body.u_d_id;

            console.log(u_id);
            console.log(u_name);
            console.log(u_address);
            console.log(u_phone);
            console.log(u_d_id);

            var rs = await NhanVienModel.EditNhanVien(u_id, u_name, u_address, u_phone, u_d_id);

            if(rs == true)
            {
                res.redirect("/nhanvien");
            }
            else
            {
                res.redirect("/dangnhap");
            }
        }
    }

  
}

module.exports = NhanVienController