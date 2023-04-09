const db = require('../config/db')

class BanModel{

    static async getbans()
    {
        return new Promise(resolve =>{
            db.query("Select * From tables", [], (error, result)=>{
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
}

module.exports = BanModel