const db = require('../config/db')

class NhanVienModel{
    static async getNhanVienByUsername(usrn, pwd)
    {
        return new Promise(resolve => {
            db.query("SELECT * FROM `users`"
            + " WHERE u_username = ?"
            + " AND u_password = ?", [usrn, pwd], (error, result)=>{
                if(!error)
                    resolve(result)
                else
                    resolve(false)
            })
        })
    }

    static async getNhanVienById(u_id)
    {
        return new Promise(resolve => {
            db.query("SELECT * FROM `users`"
            + " WHERE u_id = ?", [u_id], (error, result)=>{
                if(!error)
                    resolve(result)
                else
                    resolve(false)
            })
        })
    }

    static async GetAllNhanVien()
    {
        return new Promise(resolve=>{
            db.query("SELECT *"
            +        " FROM users u, duties d"
            +        " WHERE u.u_d_id = d.d_id", [], (error, result)=>{
                if(!error)
                    resolve(result);
                else
                    resolve(false);
            })
        })
    }

    static async GetAllChucVu()
    {
        return new Promise(resolve=>{
            db.query("SELECT *"
            +        " FROM duties", [], (error, result)=>{
                if(!error)
                    resolve(result);
                else
                    resolve(false);
            })
        })
    }

    static async AddNhanVien(u_username, u_password, u_name, u_address, u_phone, u_d_id)
    {
        return new Promise(resolve=>{
            db.query("INSERT INTO users"
            +        " VALUES(NULL, ?, ?, ?, ?, ?, ?, 1)", [u_username, u_password, u_name, u_address, u_phone, u_d_id], (error, result)=>{
                if(!error)
                    resolve(true);
                else
                    resolve(false);
            })
        })
    }

    static async EditNhanVien(u_id, u_name, u_address, u_phone, u_d_id)
    {
        return new Promise(resolve=>{
            db.query("UPDATE users"
            +        " SET u_name = ?,"
            +        " u_address = ?,"
            +        " u_phone = ?,"
            +        " u_d_id = ?"
            +        " WHERE u_id = ?", [u_name, u_address, u_phone, u_d_id, u_id], (error, result)=>{
                if(!error)
                    resolve(true);
                else
                    resolve(false);
            })
        })
    }


}

module.exports = NhanVienModel