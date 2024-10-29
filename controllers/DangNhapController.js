const { response } = require("express");
const { validationResult } = require("express-validator");
const BanModel = require("../models/Ban");
const NhanVienModel = require("../models/NhanVien");
const ChiNhanhModel = require("../models/ChiNhanh");
const ThongKeModel = require("../models/ThongKe");
const jwt = require("jsonwebtoken");

const { checkPermission } = require("../middlewares/checkPermission");

class DangNhapController {
  static async GetDangNhapForm(req, res) {
    req.flash("message", "");

    if (req.session.role_id == 1) {
      res.locals.session = req.session;

      var stt = await ThongKeModel.GetThongKe();

      if (stt) {
        req.flash("message", "Đăng nhập thành công !");
        res.render("thongke/ds_thongke", {
          test: stt,
          message: req.flash("message"),
        });
      } else res.send("Data Not Found");
    } else if (req.session.role_id == 2) {
      res.locals.session = req.session;
      if (!req.session.u_id) {
        res.redirect("/dangnhap");
      } else {
        var dsc = await DonDatModel.GetDSChoPhaChe();

        res.render("phache/ds_chophache", { dsc });
      }
    } else if (req.session.role_id == 3) {
      var results = await BanModel.getbans();
      var stt = await ThongKeModel.GetThongKe();
      var br = await ChiNhanhModel.GetChiNhanh();
      if (results)
        res.render("ban/ds_ban", {
          test: results,
          usrn: req.session.u_email,
          stt,
          br,
        });
    } else
      res.render("../views/dangnhap/dangnhap", {
        message: req.flash("message"),
      });
  }

  static async DangNhap(req, res) {
    var u_email = req.body.u_email;
    var u_password = req.body.u_password;

    var x = await NhanVienModel.getNhanVienByUsername(u_email, u_password);

    if (x == false) {
      req.session.firstName = null;
      req.session.u_id = null;
      req.session.u_email = null;
      req.session.rolename = null;

      res.render("dangnhap/error.ejs");
      console.log("Sai tt đăng nhập");
    } else {
      if (x[0].status == 0) {
        req.flash("message", "Tài khoản của bạn bị vô hiệu hóa !");
        res.render("dangnhap/dangnhap", { message: req.flash("message") });
        console.log("Tài khoản bị vô hiệu hóa");
      }

      req.session.firstName = x[0].firstName;
      req.session.u_id = x[0].id;
      req.session.u_email = x[0].email;
      req.session.rolename = x[0].rolename;

      req.session.u_email = req.body.u_email;

      var stt = await ThongKeModel.GetThongKe();

      req.session.s_id = stt[0].s_id;
      req.session.s_name = stt[0].s_name;

      var branch = [];
      branch = await ChiNhanhModel.GetChiNhanh();
      req.session.br_id = [];
      req.session.br_id = branch.br_id;
      req.session.br_name = [];
      req.session.br_name = branch.br_name;

      if (x[0] != null) {
        const data = req.body;
        const accessToken = jwt.sign(
          data,
          process.env.ACCESS_TOKEN_SECRET
          // ,
          // {
          // expiresIn: '30s',
          // }
        );
      } else {
        res.render("dangnhap/error.ejs");
      }

      return res
        .status(200)
        .json({ success: true, message: "Đăng nhập thành công!" });
    }
  }

  static async dangXuat(req, res) {
    req.session.destroy();

    var message = "";
    res.render("dangnhap/dangnhap", { message });
  }
}

module.exports = DangNhapController;
