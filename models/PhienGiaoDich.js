const db = require('../config/db');

class PhienGiaoDichModel {
    static async GetAllDonRutChuaDuyet()
    {
        return new Promise( resolve=>{
            db.query("SELECT * FROM transaction tran, users u"
            +        " WHERE tran.tran_u_id = u.u_id"
            +        " AND tran_check = 0", [], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }

    static async UpdateDonRut(tran_id)
    {
        return new Promise( resolve=>{
            db.query("UPDATE transaction"
            // +        " SET tran_check = 1, tran_updated = CURDATE()"
            +        " SET tran_check = 1, tran_updated = CURRENT_TIMESTAMP()"
            +        " WHERE tran_id = ?", [tran_id], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }
    
    static async getDonRutByUserId(u_id)
    {
        return new Promise( resolve=>{
            db.query("SELECT * FROM transaction tran, users u"
            +        " WHERE tran.tran_u_id = u.u_id"
            +        " AND tran_u_id = ?"
            +        " AND tran_check = 0", [u_id], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }

    static async GetPGDById(tran_id)
    {
        return new Promise( resolve=>{
            db.query("SELECT * FROM transaction tran, users u"
            +        " WHERE tran.tran_u_id = u.u_id"
            +        " AND tran_id = ?", [tran_id], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }

    static async getPGDByUserId(u_id)
    {
        return new Promise( resolve=>{
            db.query("SELECT * FROM transaction tran, users u"
            +        " WHERE tran.tran_u_id = u.u_id AND tran_u_id = ?"
            +        " AND tran_check = 1", [u_id], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }

    static async CreateDonRut(tran_u_id, tran_money)
    {
        return new Promise( resolve=>{
            db.query("INSERT INTO transaction"
            +        " VALUES(NULL, ?, ?, Now(), NULL, 0)", [tran_u_id, tran_money], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }

    static async CreateDonPhat(tran_u_id, tran_money)
    {
        return new Promise( resolve=>{
            db.query("INSERT INTO transaction"
            +        " VALUES(NULL, ?, ?, NULL, Now(), 1)", [tran_u_id, tran_money], (err, result)=>{
                if(!err){ resolve(true); }
            })
        })
    }

    static async getAllPGD()
    {
        return new Promise( resolve=>{
            db.query("SELECT * FROM transaction", [u_id], (err, result)=>{
                if(!err){ resolve(result); }
            })
        })
    }
}

module.exports = PhienGiaoDichModel