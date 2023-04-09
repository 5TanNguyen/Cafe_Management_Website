const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const DonDatModel = require("../models/DonDat");
const ThongKeModel = require("../models/ThongKe");
const DonDatController = require("./DonDatController");
const NhanVienController = require("./NhanVienController");

class BanController {
    static async getAllBan(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {
            var results  = await BanModel.getbans();

            var stt = await ThongKeModel.GetThongKe();
            if(results)
                res.render('ban/ds_ban', {test : results, stt}); 
        }

      
    }

    static async setEmptyTable(req, res)
    {
        res.locals.session = req.session;
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

module.exports = BanController