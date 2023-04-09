const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const DonDatModel = require("../models/DonDat");
const NguyenLieuModel = require("../models/NguyenLieu");
const ThongKeModel = require("../models/ThongKe");
const DonDatController = require("./DonDatController");

class NguyenLieuController{
    static async getNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap")
        }
        else
        {

            var ingredient = await NguyenLieuModel.GetNguyenLieu();
            
            var unit = await NguyenLieuModel.GetDonVi();
            var price = await NguyenLieuModel.GetGia();

            if(ingredient) res.render("nguyenlieu/ds_nguyenlieu", { test: ingredient, u : unit, pri : price});
        }
    }

    static async addNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {

            var ing_name = req.body.ing_name;
            var ing_amount = req.body.ing_amount;
            var ing_unit_id = req.body.ing_unit_id;
            var datetime = req.body.datetime;
            var ing_price = req.body.ing_price;

            NguyenLieuModel.AddNguyenLieu(ing_name, ing_amount, ing_unit_id, 1);
            NguyenLieuModel.AddGiaNguyenLieu(ing_name, ing_price, datetime)

            res.redirect("/nguyenlieu");
        }
    }

    static async editNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {
        
            var ing_id = req.body.ing_id;
            var ing_name = req.body.ing_name;
            var ing_amount = req.body.ing_amount;
            var ing_unit_id = req.body.ing_unit_id;
            var ing_ip_id = req.body.ing_ip_id;

            //res.send(ing_ip_id);
            NguyenLieuModel.EditNguyenLieu(ing_name, ing_amount, ing_unit_id, ing_ip_id, ing_id);

            res.redirect("/nguyenlieu");
        }
    }


    // Đơn Nhập
    static async updateNguyenLieu(req, res){
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {

            var ing_id = req.body.ing_id;
            var ing_name = req.body.ing_name;
            var ing_amount = req.body.ing_amount;
            var plus_amount = req.body.plus_amount;
            var num = req.body.num;
            var ing_amountt = 0;

            var ib_cost = req.body.ib_cost;
            var s_id = req.body.s_id;
            ThongKeModel.UpdateChiPhiNhap(s_id, ib_cost);

            for( var i = 0; i < num[0]; i++)
            {
                ing_amountt = parseInt(ing_amount[i]) + parseInt(plus_amount[i]);
                NguyenLieuModel.UpdateNguyenLieu(ing_id[i], ing_amountt);
                console.log(ing_amountt);
            }

        
            res.redirect('/donnhap');
        }

    }

    static async MinusNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            res.redirect("/dangnhap");
        }
        else
        {

            var od_o_id = req.body.od_o_id;
            var ing_id = req.body.ing_id;
            var minus_amount = req.body.minus_amount;
            var ing_amount = req.body.ing_amount;
            var num = req.body.num;
            var ing_amountt = 0;
            
            //res.send(ing_amount[0]);
            //ing_amountt = parseFloat(ing_amount[0]) - parseFloat(minus_amount[0]);

            //console.log(ing_amountt);
            for( var i = 0; i < num[0]; i++)
            {
            ing_amountt = parseFloat(ing_amount[i]) - parseFloat(minus_amount[i]);

            NguyenLieuModel.UpdateNguyenLieu(ing_id[i], ing_amountt);
            console.log(ing_amountt);
            }
            res.redirect("/chitietdondat?o_id=" + od_o_id);
        }
    }

}

module.exports = NguyenLieuController