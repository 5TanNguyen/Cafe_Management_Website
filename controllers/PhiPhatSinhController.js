const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const PhiPhatSinhModel = require("../models/PhiPhatSinh");
const ThongKeModel = require("../models/ThongKe");

class PhiPhatSinhController
{
    static async getPhiPhatSinh(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {
        
            var pps = await PhiPhatSinhModel.GetPhiPhatSinh();

            if(pps) res.render("phiphatsinh/ds_phiphatsinh", { pps });
        }
    }

    static async addPhiPhatSinh(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {
            var ci_name = req.body.ci_name;
            var ci_cost = req.body.ci_cost;
            var ci_u_id = req.body.ci_u_id;
            var ci_s_id = req.body.ci_s_id;

            // console.log(ci_name)
            // console.log(ci_cost)
            // console.log(ci_u_id)
            // console.log(ci_s_id)
            var pps = await PhiPhatSinhModel.AddPhiPhatSinh(ci_name, ci_cost, ci_u_id, ci_s_id)
            
            ThongKeModel.UpdatePhiPhatSinh(ci_s_id, ci_cost);
            
            if(pps == true)
                res.redirect("/phiphatsinh");
            else
                console.log("Lỗi thêm phí phát sinh");
        }
    }
}

module.exports = PhiPhatSinhController