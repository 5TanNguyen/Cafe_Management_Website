const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const { validationResult } = require("express-validator");
const BanModel = require("../models/Ban");
const DonDatModel = require("../models/DonDat");
const NguyenLieuModel = require("../models/NguyenLieu");
const PhaCheModel = require("../models/PhaChe");
const DonDatController = require("./DonDatController");

class PhaCheController {
  static async getDSChoPhaChe(req, res) {
    res.locals.session = req.session;
    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var dsc = await DonDatModel.GetDSChoPhaChe();

      res.render("z_layout/layout", { dsc, body: "../phache/ds_chophache" });
    }
  }

  static async getPhaCheXong(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var o_id = req.query.o_id;

      // res.send(o_id);
      DonDatModel.SetPhaCheXong(o_id);

      res.redirect("/danh-sach-cho-pha-che");
    }
  }

  static async getCachPhaCheById(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var bd_b_id = req.query.pro_b_id;

      //var result = await PhaCheModel.GetPhaCheById(bd_b_id);

      var result1 = await PhaCheModel.GetPhaCheByB_Id(bd_b_id);
      var result2 = await PhaCheModel.GetChiTietPhaCheByB_Id(bd_b_id);

      var ingredient = await NguyenLieuModel.GetNguyenLieu();

      // console.log(result)
      // console.log(bd_b_id)
      if (result1)
        res.render("phache/cachphache", {
          test1: result1,
          test2: result2,
          ing: ingredient,
        });
    }
  }

  static async getEditPhaCheForm(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var b_id = req.query.pro_b_id;

      var bd1 = await PhaCheModel.GetPhaCheByB_Id(b_id);

      var bd2 = await PhaCheModel.GetChiTietPhaCheByB_Id(b_id);

      var ingredient = await NguyenLieuModel.GetNguyenLieu();

      res.render("phache/sua_cachphache", {
        test1: bd1,
        test2: bd2,
        ing: ingredient,
      });
    }
  }

  static async addChiTietPhaChe(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var bd_b_id = req.body.bd_b_id;
      var bd_ing_id = req.body.bd_ing_id;
      var bd_amount = req.body.bd_amount;

      PhaCheModel.AddChiTietPhaChe(bd_b_id, bd_ing_id, bd_amount);

      res.redirect("/chichsuacachphache?pro_b_id=" + bd_b_id);
    }
  }

  static async deleteChiTietPhaChe(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var bd_id = req.query.bd_id;

      // var pro_b_id = req.query.pro_b_id;

      PhaCheModel.DeleteChiTietPhaChe(bd_id);

      // var bd = await PhaCheModel.GetPhaCheById(pro_b_id);

      // var ingredient = await NguyenLieuModel.GetNguyenLieu();

      // res.render("phache/sua_cachphache", { test: bd, ing : ingredient})

      // hehe

      var b_id = req.query.pro_b_id;

      var bd1 = await PhaCheModel.GetPhaCheByB_Id(b_id);

      var bd2 = await PhaCheModel.GetChiTietPhaCheByB_Id(b_id);

      var ingredient = await NguyenLieuModel.GetNguyenLieu();

      res.render("phache/sua_cachphache", {
        test1: bd1,
        test2: bd2,
        ing: ingredient,
      });
    }
  }

  static async PostEditPhaChe(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var b_id = req.body.b_id;
      var b_description = req.body.b_description;

      PhaCheModel.UpdatePhaChe(b_id, b_description);

      res.redirect("/cachphache?pro_b_id=" + b_id);

      // res.send(b_description)
      // console.log(b_id)
    }
  }

  static async addCachPhaChe(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var b_name = req.body.b_name;

      var b_description = req.body.b_description;

      //res.send(pro_b_id);
      PhaCheModel.AddCachPhaChe(b_name, b_description);

      res.redirect("/sanpham#quanlyphache");
    }
  }
}

module.exports = PhaCheController;
