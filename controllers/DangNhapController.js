const { response } = require("express");
const sanphamModel=require("../models/SanPham")
const {validationResult}=require("express-validator");
const BanModel = require("../models/Ban");
const NhanVienModel = require("../models/NhanVien");

class DangNhapController {
    static async GetDangNhapForm(req, res)
    {
        res.render('dangnhap/dangnhap');
    }

    static async DangNhap(req, res)
    {
        var u_username = req.body.u_username;
        var u_password = req.body.u_password;

        var x = await NhanVienModel.getNhanVienByUsername(u_username, u_password);
        
        if( x[0] != null) 
        {
            if(x[0].u_d_id == 1)
                {
                    var results  = await BanModel.getbans();
                    if(results)
                        res.render('ban/ds_ban', {test : results});
                }
                else
                {
                    res.send('Quản lí')
                }
            
        }      
        else
        {
            res.render('dangnhap/error.ejs');
        }
    }
}

module.exports = DangNhapController