const db = require('../config/db');

class LichModel {
    static async GetLich()
    {
        return new Promise(resolve=> {
            db.query("SELECT * FROM calendar", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetLichCURDATE()
    {
        return new Promise(resolve=> {
            db.query("SELECT * FROM calendar"
            +        " WHERE cld_begin <= CURDATE()"
            +        " AND cld_end >= CURDATE()", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }


    static async CreateLich(cld_begin, cld_end)
    {
        return new Promise(resolve=> {
            db.query("INSERT INTO calendar"
                   + " VALUES(NULL, ?, ?)", [cld_begin, cld_end], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetChiTietLich(cld_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM calendar_detail, users, shifts"
            +      " WHERE calendar_detail.cd_user_id = users.u_id"
            +      " AND calendar_detail.cd_shift_id = s_id"
            +      " AND cd_cld_id = ?"
            +      " ORDER BY cd_date, cd_shift_id", [cld_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async CreateChiTietLich(cd_cld_id, cd_date, cd_shift_id, hours)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO calendar_detail"
            +        " VALUES(NULL, ?, ?, 4, ?, ?, 0)", [cd_cld_id, cd_date, cd_shift_id, hours], (err, result)=>{
                if(!err)
                {
                    resolve(true);
                }
            })
        })
    }

    static async DeleteChiTietLich(cd_id)
    {
        return new Promise(resolve =>{
            db.query("DELETE FROM calendar_detail"
            +        " WHERE cd_id = ?", [cd_id], (err, result)=>{
                if(!err)
                {
                    resolve(true);
                }
            })
        })
    }

    static async DangKiLich(user_id, cd_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE calendar_detail"
            +        " SET cd_user_id = ?"
            +        " WHERE cd_id = ?", [user_id, cd_id], (err, result)=>{
                if(!err)
                {
                    resolve(true);
                }
            })
        })
    }

    static async GetChiTietLichByCURDATE_u_id(u_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM calendar_detail"
            +        " WHERE cd_date = CURDATE()"
            +        " AND cd_user_id = ?", [u_id], (err, result)=>{
                if(!err)
                {
                    resolve(result);
                }
                else
                { 
                    resolve(false);
                }
            })
        })
    }

    static async GetChiTietLichById(cd_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM calendar_detail"
            +        " WHERE cd_id = ?", [cd_id], (err, result)=>{
                if(!err)
                {
                    resolve(result);
                }
                else
                { 
                    resolve(false);
                }
            })
        })
    }

    static async Check(cd_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE calendar_detail"
            +        " SET cd_check = 1"
            +        " WHERE cd_id = ?", [cd_id], (err, result)=>{
                if(!err) { resolve(true); }
            })
        })
    }
}

module.exports = LichModel