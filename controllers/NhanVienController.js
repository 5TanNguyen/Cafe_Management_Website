//const sanphamModel=require("../models/SanPham")
const NhanVienModel = require("../models/NhanVien");
const ChamCongModel = require('../models/ChamCong');

const { redirect } = require("express/lib/response");
// const ThongKeModel = require("../models/ThongKe");
const ViModel = require('../models/Vi');
const LichModel = require("../models/Lich");
const res = require("express/lib/response");
const models = require("../src/models");

class NhanVienController {
    static async postChamCong(req, res) { // edit
        res.locals.session = req.session;

        if (!req.session.u_id) {
            res.redirect("/dangnhap");
        }
        else {

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
            if (cd[0].cd_check == 1) {
                req.flash('message', 'Bạn đã chấm công rồi !');
                res.render("dangnhap/dangnhap", { message: req.flash('message') });
            }

            var result = await ChamCongModel.ChamCong(tk_u_id, tk_s_id, tk_date, tk_note, s_id, tk_br_id, cd_id, hours * 15000);
            // ThongKeModel.UpdateLuongNV(s_id, hours * 15000);
            ViModel.UpdateLuong(tk_u_id, hours * 15000);
            LichModel.Check(cd_id);

            if (result == true) {
                // var success = 'Chấm Công Xong !!!!!';    
                // alert(success);
                res.redirect('/lich');
            }
        }
    }

    static async getAllNhanVien(req, res) {
        res.locals.session = req.session;

        // console.log('session: ', req.session);
        // return;

        if (!req.session.passport.user.user_id) {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message: req.flash('message') });
            return;
        }

        var userList = await models.user.findAll();

        res.render("z_layout/layout", {
            u: userList,
            body: "../nhanvien/ds_nhanvien",
        });
    }

    static async addNhanVien(req, res) { // edit
        res.locals.session = req.session;

        if (!req.session.u_id) {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message: req.flash('message') });
        }

        if (req.session.u_d_id != 1) {
            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message: req.flash('message') });
        }
        else {
            var u_username = req.body.u_username;
            var u_password = req.body.u_password;
            var u_name = req.body.u_name;
            var u_address = req.body.u_address;
            var u_phone = req.body.u_phone;
            var u_d_id = req.body.u_d_id;

            var rs = await NhanVienModel.AddNhanVien(u_username, u_password, u_name, u_address, u_phone, u_d_id);

            if (rs == true) {
                res.redirect("/nhanvien");
            }
            else {
                res.redirect("/dangnhap");
            }
        }
    }

    static async getNhanVienById(req, res) {
        let id = req.query.id;
        var user = await models.user.findOne({
            where: { user_id: id }
        })

        res.status(200).json({
            data: user,
            message: "Lấy thông tin nhân viên thành công !",
        })
    }

    static async editNhanVien(req, res) { // edit
        res.locals.session = req.session;

        let id = req.query.id;
        let body = req.body;

        if (!id) {
            res.json({
                data: false,
                message: "Thiếu ID nhân viên !",
                status: 400
            })
            return;
        }

        await models.user.update(body, {
            where: { user_id: id }
        })

        res.json({
            data: true,
            message: "Cập nhật thành công !",
            status: 200
        })
    }

    static async deleteNhanVien(req, res) { // edit
        res.locals.session = req.session;

        if (!req.session.u_id) {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message: req.flash('message') });
        }

        if (req.session.u_d_id != 1) {
            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message: req.flash('message') });
        }
        else {
            var u_id = req.body.u_id;
            var u_name = req.body.u_name;

            var rs = await NhanVienModel.DeleteNhanVien(u_id);

            if (rs == true) {
                res.redirect("/nhanvien");
            }
            else {
                res.redirect("/dangnhap");
            }
        }
    }


}

module.exports = NhanVienController