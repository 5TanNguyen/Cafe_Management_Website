const { response } = require("express");
//const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const DonDatModel = require("../models/DonDat");
const NguyenLieuModel = require("../models/NguyenLieu");
const PhaCheModel = require("../models/PhaChe");
const DonDatController = require("./DonDatController");
const TruyCapTraiPhepModel = require("../models/TruyCapTraiPhep");

class PhaCheController{

    static async getDSChoPhaChe(req, res)
    {
        res.locals.session = req.session;
        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Danh sách chờ pha chế', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var dsc = await DonDatModel.GetDSChoPhaChe();

            res.render("phache/ds_chophache", { dsc });
        }
    }

    static async getPhaCheXong(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Pha chế xong', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
            var o_id = req.query.o_id;

            // res.send(o_id);
            DonDatModel.SetPhaCheXong(o_id);

            res.redirect("/danh-sach-cho-pha-che");
        }
        
    }
    
    static async getCachPhaCheById(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Cách pha chế', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var bd_b_id = req.query.pro_b_id;

            var result = await PhaCheModel.GetPhaCheById(bd_b_id);

            var ingredient = await NguyenLieuModel.GetNguyenLieu();

            // console.log(result)
            // console.log(bd_b_id)
            if(result)
                res.render("phache/cachphache", { test : result, ing : ingredient});
        }
    }

    static async getEditPhaCheForm(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Form chỉnh sửa cách pha chế', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var b_id = req.query.pro_b_id;

            var bd = await PhaCheModel.GetPhaCheById(b_id);

            var ingredient = await NguyenLieuModel.GetNguyenLieu();

            res.render("phache/sua_cachphache", { test: bd, ing : ingredient})
        }
    }

    static async addChiTietPhaChe(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Thêm chi tiết pha chế', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var bd_b_id = req.body.bd_b_id;
            var bd_ing_id = req.body.bd_ing_id;
            var bd_amount = req.body.bd_amount;

            PhaCheModel.AddChiTietPhaChe(bd_b_id, bd_ing_id, bd_amount);

            res.redirect("/chichsuacachphache?pro_b_id=" + bd_b_id);
        }
    }

    static async deleteChiTietPhaChe(req, res){
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Xóa chi tiết pha chế', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {

            var bd_id = req.query.bd_id;

            var pro_b_id = req.query.pro_b_id;

            //res.send(pro_b_id);
            PhaCheModel.DeleteChiTietPhaChe(bd_id);

            var bd = await PhaCheModel.GetPhaCheById(pro_b_id);

            var ingredient = await NguyenLieuModel.GetNguyenLieu();

            res.render("phache/sua_cachphache", { test: bd, ing : ingredient})
        }
    }

    static async PostEditPhaChe(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id || ((req.session.u_d_id != 2) && (req.session.u_d_id != 1)))
        {
            var currentdate = new Date();
            var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()  + "  "  + currentdate.getHours() + ":"   + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
            var tctp = await TruyCapTraiPhepModel.addTCTP(req.session.u_id, 'Post chi tiết pha chế', datetime);

            req.flash('message', 'Bạn không có quyền truy cập !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else
        {
        
            var b_id = req.body.b_id;
            var b_description = req.body.b_description;

            PhaCheModel.UpdatePhaChe(b_id, b_description);

            res.redirect("/cachphache?pro_b_id=" + b_id);

            // res.send(b_description)
            // console.log(b_id)
        }
    }
}

module.exports = PhaCheController