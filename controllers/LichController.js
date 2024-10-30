const { response } = require("express");
const { validationResult } = require("express-validator");
const { send } = require("express/lib/response");

const LichModel = require("../models/Lich");
const ThongKeModel = require("../models/ThongKe");
const ChiNhanhModel = require("../models/ChiNhanh");
const NhanVienModel = require("../models/NhanVien");

class LichController {
  static async getLich(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    var cld = await LichModel.GetLich();

    var stt = await ThongKeModel.GetThongKe();

    var br = await ChiNhanhModel.GetChiNhanh();

    if (cld) {
      res.render("lich/lich", { cld, stt, br });
    }
  }

  static async createLich(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var cld_begin = req.body.cld_begin;

      var cld_end = req.body.cld_end;

      var cldd = await LichModel.CreateLich(cld_begin, cld_end);

      //console.log(cld_begin);

      //console.log(cld_end);

      if (cldd) {
        res.redirect("/lich");
      }
    }
  }

  static async getChiTietLich(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    var cld_id = req.query.cld_id;

    var cld = await LichModel.GetLichById(cld_id);

    var cd = await LichModel.GetChiTietLich(cld_id);

    var d = await NhanVienModel.GetAllChucVu();

    var user = await NhanVienModel.GetAllNhanVien();

    var user_id = req.session.u_id;

    console.log(cld_id);
    console.log(user_id);

    var cu = await LichModel.GetLichTheoUserId(cld_id, user_id);

    console.log(cu);

    if (cd) {
      res.render("lich/chitietlich", { cd, cld_id, user, d, cld, cu });
    }
  }

  static async createChiTietLich(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var cd_cld_id = req.body.cd_cld_id;

      var cd_date = req.body.cd_date;

      var cd_d_id = req.body.cd_d_id;

      var cd_shift_id = req.body.cd_shift_id;

      var hours = req.body.hours;

      // console.log(cd_cld_id)
      // console.log(cd_date)
      // console.log(cd_shift_id)
      // console.log(hours)

      var cd = await LichModel.CreateChiTietLich(
        cd_cld_id,
        cd_date,
        cd_d_id,
        cd_shift_id,
        hours
      );

      if (cd) {
        res.redirect("/chitietlich?cld_id=" + cd_cld_id);
      }
    }
  }

  static async createChiTietLichTuDong(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var cd_cld_id = req.body.cd_cld_id;
      console.log(cd_cld_id);

      var cld_begin = req.body.cld_begin;
      console.log("Ngày bắt đầu: " + cld_begin);

      var cld_end = req.body.cld_end;
      console.log("Ngày kết thúc: " + cld_end);

      var month = req.body.month;

      var year = req.body.year;

      var cd_d_id = req.body.cd_d_id;

      var cd_user_id = req.body.cd_user_id;

      var cd_shift_id = req.body.cd_shift_id;

      var hours = req.body.hours;

      for (var t = cld_begin; t <= cld_end; t++) {
        var cd_date = year + "-" + month + "-" + t;
        console.log(cd_date);
        var cd = await LichModel.CreateChiTietLichTuDong(
          cd_cld_id,
          cd_date,
          cd_d_id,
          cd_user_id,
          cd_shift_id,
          hours
        );
      }

      if (cd) {
        res.redirect("/chitietlich?cld_id=" + cd_cld_id);
      }
    }
  }

  static async deleteChiTietLich(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var cd_cld_id = req.body.cd_cld_id;
      var cd_id = req.body.cd_id;

      var del = await LichModel.DeleteChiTietLich(cd_id);

      if (del == true) {
        res.redirect("/chitietlich?cld_id=" + cd_cld_id);
      }
    }
  }

  static async dangkiLich(req, res) {
    //console.log('Err');
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    var cd_user_id = req.query.cd_user_id;

    var cd_id = req.query.cd_id;

    var cld_id = req.query.cd_cld_id;

    // console.log(cd_user_id);
    // console.log(cd_id);
    // console.log(cld_id);

    var dk = await LichModel.DangKiLich(cd_user_id, cd_id);

    if (dk == true) {
      res.redirect("/chitietlich?cld_id=" + cld_id);
      //res.redirect('/ban');
    }
  }
}

module.exports = LichController;
