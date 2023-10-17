const db = require('../config/db');

class ViModel {
    static async getViByUserId(u_id)
    {
        return new Promise( resolve=>{
            db.query("SELECT * FROM wallet"
            +        " WHERE w_u_id = ?", [u_id], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }

    static async UpdateLuong(w_u_id, money)
    {
        return new Promise(resolve=>{
            db.query("UPDATE wallet"
            +        " SET w_money_earned = w_money_earned + ?,"
            +        " w_surplus = w_surplus + ?"
            +        " WHERE w_u_id = ?", [money, money, w_u_id], (err, result)=>{
                if(!err){ resolve(true); }
            })
        })
    }

    static async DuyetDonRut(w_u_id, money)
    {
        return new Promise(resolve=>{
            db.query("UPDATE wallet"
            +        " SET w_money_withdraw = w_money_withdraw + ?, "
            +        " w_surplus = w_surplus - ?"
            +        " WHERE w_u_id = ?", [money, money, w_u_id], (err, result)=>{
                if(!err){ resolve(true); }
            })
        })
    }
}

module.exports = ViModel