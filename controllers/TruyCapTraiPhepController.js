const NhanVienModel = require("../models/NhanVien");
const PhienGiaoDichModel = require("../models/PhienGiaoDich");
const ViModel = require("../models/Vi");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");

class TruyCapTraiPhepController {
  static async getTCTP(req, res) {
    res.locals.session = req.session;

    if (!req.session.u_id) {
      req.flash("message", "Bạn phải đăng nhập trước !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    }

    {
      var ua = await TruyCapTraiPhepModel.GetTCTP();
      if (ua) {
        res.render("truycaptraiphep/truycaptraiphep", { ua });
      }
    }
  }

  static async getThongKeTheoSoLanTCTP(req, res) {
    res.locals.session = req.session;

    var number = req.body.numberTCTP;

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
        "Liệt kê cá nhân truy cập trái phép",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      var ua = await TruyCapTraiPhepModel.GetThongKeTheoSoLanTCTP(number);
      if (ua == "") {
        res.render("truycaptraiphep/thongkesolantruycap", { ua, test: ua });
      } else {
        var ua_by_u_id = await TruyCapTraiPhepModel.GetSoLanTCTPTheoUID(
          ua[0].ua_u_id
        );
        res.render("truycaptraiphep/thongkesolantruycap", {
          ua,
          test: ua_by_u_id,
        });
      }
    }
  }

  static async postHinhThucPhat(req, res) {
    res.locals.session = req.session;

    var phat_id = req.body.phat_id;

    var ua_u_id = req.body.ua_u_id;

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
        "Liệt kê cá nhân truy cập trái phép",
        datetime
      );

      req.flash("message", "Bạn không có quyền truy cập !");
      res.render("dangnhap/dangnhap", { message: req.flash("message") });
    } else {
      if (phat_id == 1) {
        var ua = await TruyCapTraiPhepModel.UpdateUA_Check(ua_u_id);
        if (ua == true) {
          res.redirect("/truycaptraiphep");
        }
      } else if (phat_id == 2) {
        console.log("Phạt tiền");
        var ua = await TruyCapTraiPhepModel.UpdateUA_Check(ua_u_id);

        var pgd = await PhienGiaoDichModel.CreateDonPhat(ua_u_id, 50000);

        var vi = await ViModel.DuyetDonRut(ua_u_id, 50000);

        if (ua == true && pgd == true && vi == true) {
          res.redirect("/truycaptraiphep");
        }
      } else if (phat_id == 3) {
        // ĐUỔI VIỆC
        var rs = await NhanVienModel.DeleteNhanVien(ua_u_id);

        if (rs == true) res.redirect("/truycaptraiphep");
        else res.redirect("/dangnhap");
      }
    }
  }
}

module.exports = TruyCapTraiPhepController;
