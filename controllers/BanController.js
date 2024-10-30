const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const { validationResult } = require("express-validator");
const BanModel = require("../models/Ban");
const ChiNhanhModel = require("../models/ChiNhanh");
const DonDatModel = require("../models/DonDat");
const ThongKeModel = require("../models/ThongKe");
const DonDatController = require("./DonDatController");
const NhanVienController = require("./NhanVienController");

class BanController {
  static async getAllBan(req, res) {
    res.locals.session = req.session;

    {
      var results = await BanModel.getbans();

      var stt = await ThongKeModel.GetThongKe();

      var br = await ChiNhanhModel.GetChiNhanh();

      var dd = await DonDatModel.getAllDonDat();
      if (results) {
        res.render("z_layout/layout", {
          test: results,
          stt: stt,
          br: br,
          dd: dd,
          body: "../ban/ds_ban", // truyền đường dẫn của partial vào layout
        });
      } else {
        res.status(404).send("No results found");
      }
    }
  }

  static async setEmptyTable(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var t_id = req.query.t_id;

      var o_t_id = t_id;

      BanModel.set_StatusTable(t_id);

      BanModel.set_T_Pay_O(t_id);

      var result = await DonDatModel.getdondat(t_id);

      if (result)
        // res.render("dondat/ds_dondat", {test : result, o_t_id});
        res.redirect("/chitietban?t_id=" + o_t_id);
      else res.send("Error !");
    }
  }

  // Test Socket.io

  static async testSocket(req, res) {
    res.render("socket/socket");
  }
}

module.exports = BanController;
