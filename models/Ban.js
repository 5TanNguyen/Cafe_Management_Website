const db = require('../config/db')

class BanModel{

    static async getbans()
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM tn408.tables;", [], (error, result)=>{
                if(!error) resolve(result);
            })
        })
    }

    static async getbanMobile()
    {
        return new Promise(resolve =>{
            db.query("SELECT distinct t.t_id, MAX(o.o_id) orderID, t.t_empty,  t.t_pay"
                   + " FROM tn408.tables t, tn408.orders o"
                   + " WHERE t.t_id = o.o_t_id"
                   + " GROUP BY o.o_t_id"
                   + " HAVING MAX(o.o_id)", [], (error, result)=>{
                if(!error) resolve(result);
            })
        })
    }

    static async set_StatusTable(t_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE tables SET t_empty = 1"
            + " WHERE t_id = ?", [t_id], (error, result)=>{
                if(!error) resolve(true)
            })
        })
    }

    static async set_T_Pay(t_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE tables SET t_pay = 1"
            + " WHERE t_id = ?", [t_id], (error, result)=>{
                if(!error) resolve(true)
            })
        })
    }

    static async set_T_Pay_O(t_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE tables SET t_pay = 0,"
            + " t_num = 0"
            + " WHERE t_id = ?", [t_id], (error, result)=>{
                if(!error) resolve(true)
            })
        })
    }

    static async set_b_num(t_id, t_num)
    {
        return new Promise(resolve=>{
            db.query("UPDATE tables SET t_num = ?" 
            + " WHERE t_id = ?", [t_num, t_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async set_t_empty_0(t_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE tables SET t_empty = 0"
            + " WHERE t_id = ?", [t_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }
}

module.exports = BanModel