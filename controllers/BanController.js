const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const ChiNhanhModel = require("../models/ChiNhanh");
const DonDatModel = require("../models/DonDat");
const ThongKeModel = require("../models/ThongKe");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");
const DonDatController = require("./DonDatController");
const NhanVienController = require("./NhanVienController");

class BanController {
    static async getAllBan(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 3) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách bàn', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            console.log(req.session.u_d_id);

            var results  = await BanModel.getbans();

            var stt = await ThongKeModel.GetThongKe();

            var br = await ChiNhanhModel.GetChiNhanh();
            if(results)
                res.render('ban/ds_ban', {test : results, stt, br}); 
        }
    }

    static async setEmptyTable(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 3) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Cài bàn trống', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var t_id = req.query.t_id;

            var o_t_id = t_id;

            BanModel.set_StatusTable(t_id);

            BanModel.set_T_Pay_O(t_id);

            var result = await DonDatModel.getdondat(t_id);

            if(result)
                // res.render("dondat/ds_dondat", {test : result, o_t_id});
                res.redirect("/chitietban?t_id=" + o_t_id);
            else
                res.send("Error !")
        }
    }



    // Test Socket.io

    static async testSocket(req, res)
    {
        res.render('socket/socket');
    }
}

module.exports = BanController