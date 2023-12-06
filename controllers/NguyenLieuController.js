const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const DonDatModel = require("../models/DonDat");
const NguyenLieuModel = require("../models/NguyenLieu");
const ThongKeModel = require("../models/ThongKe");
const DonDatController = require("./DonDatController");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");

class NguyenLieuController{
    static async getNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if((req.session.u_d_id != 2) && (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách nguyên liệu', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            
            var ingredient = await NguyenLieuModel.GetNguyenLieu();
            
            var unit = await NguyenLieuModel.GetDonVi();
            var price = await NguyenLieuModel.GetGia();

            var ingI = await NguyenLieuModel.GetNguyenLieuByUnit(1, 5);

            var ingII = await NguyenLieuModel.GetNguyenLieuByUnit(2, 1000);

            var ingIV = await NguyenLieuModel.GetNguyenLieuByUnit(4, 50);

            var ingV = await NguyenLieuModel.GetNguyenLieuByUnit(5, 100);
            
            var ingVII = await NguyenLieuModel.GetNguyenLieuByUnit(7, 1000);
            

            if(ingredient) res.render("nguyenlieu/ds_nguyenlieu", { test: ingredient, u : unit, pri : price, ingI, ingII, ingIV, ingV, ingVII});
        }
    }

    static async addNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if((req.session.u_d_id != 2) && (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Thêm nguyên liệu', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var ing_name = req.body.ing_name;
            var ing_amount = req.body.ing_amount;
            var ing_unit_id = req.body.ing_unit_id;
            var ing_ip_id = req.body.ing_ip_id;

            //console.log(ing_ip_id);

            NguyenLieuModel.AddNguyenLieu(ing_name, ing_amount, ing_unit_id, ing_ip_id);

            res.redirect("/nguyenlieu");
        }
    }

    static async editNguyenLieu(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if((req.session.u_d_id != 2) && (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Chi chỉnh sửa nguyên liệu', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
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
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }

        if((req.session.u_d_id != 2) && (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'C.Nhật nguyên liệu Đơn nhập', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
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
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        
        if((req.session.u_d_id != 2) && (req.session.u_d_id != 1))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Trừ nguyên liệu', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
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

    static async themgiaNguyenLieu(req, res){
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if(req.session.u_d_id != 1)
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Thêm giá nguyên liệu', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            const ip_ing_name = req.body.ip_ing_name;
            const ip_date = req.body.ip_date;
            const ip_price = req.body.ip_price;

            // console.log(ip_ing_name)
            // console.log(ip_price)
            // console.log(ip_date)
            var x = await NguyenLieuModel.AddGiaNguyenLieu(ip_ing_name, ip_price, ip_date)

            if( x == true)
            {
                res.redirect("/nguyenlieu#quanlygia");
            }
            else
                res.send("Add Fail")
        }  
    }

    static async chinhgiaNguyenLieu(req, res){
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        } 
        
        if(req.session.u_d_id != 1)
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Chỉnh sửa giá nguyên liệu', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            const ip_id = req.body.ip_id;
            const ip_price = req.body.ip_price;
            const ip_date = req.body.ip_date;

            // console.log(pp_pro_name)
            // console.log(pp_date)
            // console.log(pp_price)
            var x = await NguyenLieuModel.ChinhGiaNguyenLieu(ip_id, ip_price, ip_date)

            if( x == true)
            {
                res.redirect("/nguyenlieu#quanlygia");
            }
            else
                res.send("Add Fail")
        }  
    }

}

module.exports = NguyenLieuController