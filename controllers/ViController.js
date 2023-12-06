const e = require("connect-flash");
const PhienGiaoDichModel = require("../models/PhienGiaoDich");
const ViModel = require("../models/Vi");


class ViController {
    static async getViByUserId(req, res)
    {
        res.locals.session = req.session;

        if(!req.session.u_id)
        {
            req.flash('message', 'Bạn phải đăng nhập trước !');
            res.render("dangnhap/dangnhap", { message : req.flash('message')});
        }
        else{
            var w_u_id = req.query.w_u_id;

            var w = await ViModel.getViByUserId(w_u_id);

            var tran = await PhienGiaoDichModel.getDonRutByUserId(w_u_id);

            var pgd = await PhienGiaoDichModel.getPGDByUserId(w_u_id);

            if(w)
            {
                res.render("vi/vi", { w, tran, pgd });
            }
        }
    }

    static async getPGDByUserIdd(req, res)
    {
        res.locals.session = req.session;   
    }
}

module.exports = ViController