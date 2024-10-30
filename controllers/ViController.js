const e = require("connect-flash");
const PhienGiaoDichModel = require("../models/PhienGiaoDich");
const ViModel = require("../models/Vi");

class ViController {
  static async getViByUserId(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var w_u_id = req.query.w_u_id;

      var w = await ViModel.getViByUserId(w_u_id);

      var tran = await PhienGiaoDichModel.getDonRutByUserId(w_u_id);

      var pgd = await PhienGiaoDichModel.getPGDByUserId(w_u_id);

      if (w == false) {
        res.redirect("/lich");
      } else {
        res.render("vi/vi", { w, tran, pgd });
      }
    }
  }

  static async getPGDByUserIdd(req, res) {
    res.locals.session = req.session;
  }

  static async addVi(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var w_u_id = req.body.u_id;

      var vi = await ViModel.AddVi(w_u_id, 0);

      if (vi == true) {
        res.redirect("/nhanvien");
      }
    }
  }
}

module.exports = ViController;
