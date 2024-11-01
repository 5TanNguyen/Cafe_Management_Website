const { response } = require("express");
const { validationResult } = require("express-validator");
const { send } = require("express/lib/response");
const DonDatModel = require("../models/DonDat");
const SanPhamController = require("./SanPhamController");
const SanPhamModel = require("../models/SanPham");
const BanController = require("./BanController");
const BanModel = require("../models/Ban");
const { INT24 } = require("mysql/lib/protocol/constants/types");
const PhaCheModel = require("../models/PhaChe");
const NguyenLieuModel = require("../models/NguyenLieu");
const ThongKeModel = require("../models/ThongKe");

class DonDatController {
  static async getDonDat(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var dd_maban = req.query.t_id;
      var o_t_id = dd_maban;
      var result = await DonDatModel.getdondat(dd_maban);

      if (result) res.render("dondat/ds_dondat", { test: result, o_t_id });
    }
  }

  static async getChiTietDonDat(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var dd_id = req.query.o_id;

      var result = await DonDatModel.chitietdondat(dd_id);

      var gia = await DonDatModel.GetDonDatById(dd_id);

      var product = await SanPhamModel.getsanphams();
      if (result)
        res.render("dondat/cchitietdondat", {
          test: result,
          pro: product,
          dd_id,
          gia,
        });
    }
  }

  static async getChiTietDonDatPC(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var dd_id = req.query.o_id;

      var result = await DonDatModel.chitietdondat(dd_id);

      var gia = await DonDatModel.GetDonDatById(dd_id);

      var product = await SanPhamModel.getsanphams();
      if (result)
        res.render("phache/chitietdondatpc", {
          test: result,
          pro: product,
          dd_id,
          gia,
        });
    }
  }

  static async addChiTietDonDat(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var od_o_id = req.body.o_id;
      var od_pro_id = req.body.od_pro_id;
      var od_quantity = req.body.od_quantity;
      var od_price = req.body.od_price;
      var o_cost = req.body.o_cost;

      DonDatModel.AddChiTietDonDat(od_o_id, od_pro_id, od_quantity, od_price);

      var o_cost_new = parseInt(o_cost) + parseInt(od_price) * od_quantity;
      DonDatModel.setCost(o_cost_new, od_o_id);

      var bd = await PhaCheModel.GetPhaCheByProId(od_pro_id);
      var ingredient = await NguyenLieuModel.GetNguyenLieu();
      if (bd)
        res.render("dondat/phache", { test: bd, ing: ingredient, od_o_id });
    }
  }

  static async confirmDon(req, res) {
    res.locals.session = req.session;
    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var o_id = req.query.o_id;
      DonDatModel.Set_o_post(o_id);
      res.redirect("/chitietdondat?o_id=" + o_id);
    }
  }

  static async createDonDat(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var ctdd_madd = req.body.o_id;

      var ctdd_masp = [];

      ctdd_masp = req.body.masp;

      var length = req.body.num;

      var ctdd_soluong = req.body.soluong;

      var t_id = req.query.t_id;

      var ctdd_gia = [];

      var ctdd_gia = req.body.gia;

      var o_cost = 0;

      for (var j = 0; j < length; j++) {
        var gia = ctdd_gia[j] * ctdd_soluong[j];

        o_cost = o_cost + gia;

        DonDatModel.createchitietdondat(
          ctdd_madd,
          ctdd_masp[j],
          ctdd_soluong[j],
          gia
        );
      }

      // Đặt trạng thái bàn đỏ
      DonDatModel.setStatusDonDat(t_id);

      // Đặt trạng thái chưa thanh toán
      DonDatModel.setStatusDonDat(t_id);

      // Đặt lại giá đơn
      DonDatModel.setCost(o_cost, ctdd_madd);

      console.log(o_cost);

      // Redirect
      var result = await DonDatModel.chitietdondat(ctdd_madd);

      if (result) res.render("dondat/chitietdondat", { test: result });
    }
  }

  static async getSoNguoi(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var t_id = req.query.t_id;
      res.render("dondat/xacnhandondat", { t_id });
    }
  }

  static async confirmDonDat(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var t_id = req.body.t_id;
      var num = req.body.num;
      var o_time = req.body.o_time;
      var s_id = req.body.s_id;
      var br_id = req.body.br_id;

      console.log(t_id);

      BanModel.set_b_num(t_id, num);
      DonDatModel.setStatusDonDat(t_id);

      DonDatModel.createdondat(
        1,
        1,
        t_id,
        num,
        0,
        0,
        0,
        0,
        o_time,
        s_id,
        br_id
      );

      var order = await DonDatModel.getdondat(t_id);
      res.redirect("/chitietban?t_id=" + t_id);
    }
  }

  static async setStatusOrder(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var o_id = req.body.o_id;
      var o_t_id = req.body.o_t_id;

      var s_id = req.body.s_id;
      var o_cost = req.body.o_cost;

      //res.send(s_id);
      DonDatModel.set_StatusOrder(o_id);

      BanModel.set_T_Pay(o_t_id);

      ThongKeModel.UpdateDoanhThu(s_id, o_cost);

      var result = await DonDatModel.getdondat(o_t_id);

      if (result)
        // res.render("dondat/ds_dondat", {test : result, o_t_id});
        res.redirect("/chitietban?t_id=" + o_t_id);
      else res.send("Failed");
    }
  }
}

module.exports = DonDatController;
