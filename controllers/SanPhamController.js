const { response } = require("express");
const sanphamModel = require("../models/SanPham");
const { validationResult } = require("express-validator");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");
const PhaCheModel = require("../models/PhaChe");

class SanPhamController {
  static async getAllSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Danh sách sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var results = await sanphamModel.getsanphams();

      var pp = await sanphamModel.GetPro_Price();

      var pt = await sanphamModel.GetPro_Type();

      var b = await PhaCheModel.GetPhaChe();

      if (results)
        //res.send(results)
        res.render("z_layout/layout", {
          test: results,
          pp,
          pt,
          b,
          body: "../sanpham/ds_sanpham",
        });
    }
  }

  static async showAddSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Form thêm sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      res.render("sanpham/them_sanpham.ejs");
    }
  }

  static async addSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Thêm sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var sp_ten = req.body.pro_name;
      var sp_gia = req.body.pro_pp_id;
      var sp_loai = req.body.pro_pt_id;
      var sp_mota = req.body.pro_description;
      var sp_phache = req.body.pro_b_id;

      // console.log(sp_ten)
      // console.log(sp_gia)
      // console.log(sp_loai)
      // console.log(sp_mota)

      var x = await sanphamModel.add_SanPham(
        sp_ten,
        0,
        sp_mota,
        sp_loai,
        sp_gia,
        sp_phache
      );

      if (x == true) {
        var results = await sanphamModel.getsanphams();

        if (results) res.redirect("/sanpham");
      } else res.send("Add failed");
    }
  }

  static async deleteSanPhamForm(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Form xóa sản phẩm",
        datetime
      );
      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var pro_id = req.query.pro_id;

      var results = await sanphamModel.delete_SanPhamForm(pro_id);

      if (results)
        //res.send(results)

        //res.send(sp_id);
        res.render("sanpham/xoa_sanpham", { test: results });
    }
  }

  static async deleteSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Xóa sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      const sp_id = req.body.pro_id;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.json(errors.array());
      } else {
        if (sp_id) {
          var result = await sanphamModel.delete_SanPham(sp_id);

          if (result) {
            // var list_product = await sanphamModel.getsanphams();
            // res.render("sanpham/ds_sanpham", {test: list_product});
            res.redirect("/sanpham");
          } else res.send("Failed to delete sanpham");
        }
      }
    }
  }

  static async editSanPhamForm(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Form thêm sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var pro_id = req.query.pro_id;

      var results = await sanphamModel.edit_SanPhamForm(pro_id);

      if (results) res.render("sanpham/sua_sanpham", { test: results });
    }
  }

  static async editSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Chỉnh sửa sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      const sp_id = req.body.pro_id;

      const new_sp_ten = req.body.pro_name;
      const new_sp_mota = req.body.pro_description;

      var x = await sanphamModel.edit_SanPham(sp_id, new_sp_ten, new_sp_mota);

      if (x == true) {
        var results = await sanphamModel.getsanphams();

        if (results)
          //res.se nd(results)
          res.redirect("/sanpham");
      } else res.send("Edit Fail");
    }
  }

  static async chinhgiaSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Chỉnh sửa giá sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      const pp_id = req.body.pp_id;
      const pp_pro_name = req.body.pp_pro_name;
      const pp_date = req.body.pp_date;
      const pp_price = req.body.pp_price;

      // console.log(pp_id)
      // console.log(pp_pro_name)
      // console.log(pp_date)
      // console.log(pp_price)
      var x = await sanphamModel.ChinhGiaSanPham(
        pp_id,
        pp_pro_name,
        pp_date,
        pp_price
      );

      if (x == true) {
        var results = await sanphamModel.getsanphams();

        if (results) res.redirect("/sanpham#quanlygia");
        // res.render("sanpham/ds_sanpham.ejs", {test: results});
      } else res.send("Edit Fail");
    }
  }

  static async themgiaSanPham(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    if (req.session.u_d_id != 1) {
      var currentdate = new Date();
      var datetime =
        currentdate.getFullYear() +
        "-" +
        (currentdate.getMonth() + 1) +
        "-" +
        currentdate.getDate() +
        "  " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      var tctp = await TruyCapTraiPhepModel.addTCTP(
        req.session.u_id,
        "Thêm giá sản phẩm",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      const pp_pro_name = req.body.pp_pro_name;
      const pp_date = req.body.pp_date;
      const pp_price = req.body.pp_price;

      // console.log(pp_pro_name)
      // console.log(pp_date)
      // console.log(pp_price)
      var x = await sanphamModel.ThemGiaSanPham(pp_pro_name, pp_date, pp_price);

      if (x == true) {
        var results = await sanphamModel.getsanphams();

        if (results) res.redirect("/sanpham#quanlygia");
      } else res.send("Add Fail");
    }
  }
}

module.exports = SanPhamController;
// export default SanPhamController;
