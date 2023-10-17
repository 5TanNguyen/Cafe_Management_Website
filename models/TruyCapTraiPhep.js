const db = require('../config/db');

class TruyCapTraiPhepModel {
    static async addTCTP(ua_u_id, ua_access, ua_date)
    {
        return new Promise(resolve=>{
            db.query("INSERT INTO unauthorized_access"
            +        " VALUES(NULL, ?, ?, ?, 0)", [ua_u_id, ua_access, ua_date], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async GetTCTP()
    {
        return new Promise(resolve=>{
            db.query("SELECT * from unauthorized_access ua, users u"
            +        " WHERE ua.ua_u_id = u.u_id"
            +        " AND ua_check = 0", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetThongKeTheoSoLanTCTP(number)
    {
        return new Promise(resolve=>{
            db.query(" SELECT ua.ua_u_id, u.u_name"
            +        " FROM "
            +        "  (SELECT ua_u_id, count(ua_u_id) numberr"
            +        "   FROM unauthorized_access"
            +        "   WHERE ua_check = 0"
            +        "   GROUP BY ua_u_id) ua, "
            +        "   users u"
            +        "  WHERE ua.ua_u_id = u.u_id"
            +        "  AND numberr = ?", [number], (err, result)=>{
                if(!err) resolve(result);
            })
        }) 
    }

    static async GetSoLanTCTPTheoUID(ua_u_id)
    {
        return new Promise(resolve=>{
            db.query("SELECT * FROM unauthorized_access"
            +        " WHERE ua_u_id = ?", [ua_u_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async UpdateUA_Check(ua_u_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE unauthorized_access"
            +        " SET ua_check = 1"
            +        " WHERE ua_u_id = ?", [ua_u_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }
}

module.exports = TruyCapTraiPhepModel