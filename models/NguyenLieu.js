const db = require('../config/db');

class NguyenLieuModel{
    static async GetNguyenLieu()
    {
        return new Promise(resolve =>{
            db.query("SELECT ing.ing_id, ing.ing_name, ing.ing_amount, ing.ing_unit_id, ing.ing_ip_id, u.unit_name,ip.ip_ing_name, ip.ip_price"
            + " FROM ingredient ing, unit u, ingredient_price ip"
            + " WHERE ing.ing_unit_id = u.unit_id"
            + " AND ing.ing_ip_id = ip.ip_id"
            + " ORDER BY ing.ing_id"
            , [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetNguyenLieuByUnit(unit_id, ing_amount)
    {
        return new Promise(resolve =>{
            db.query("SELECT ing.ing_id, ing.ing_name, ing.ing_amount, ing.ing_unit_id, ing.ing_ip_id, u.unit_name,ip.ip_ing_name, ip.ip_price"
            + " FROM ingredient ing, unit u, ingredient_price ip"
            + " WHERE ing.ing_unit_id = u.unit_id"
            + " AND ing.ing_ip_id = ip.ip_id"
            + " AND ing.ing_unit_id = ? AND ing.ing_amount <= ?"
            + " ORDER BY ing.ing_id"
            , [unit_id, ing_amount], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetDonVi(){
        return new Promise(resolve =>{
            db.query("SELECT * FROM unit", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetGia(){
        return new Promise(resolve =>{
            db.query("SELECT * FROM ingredient_price", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async AddNguyenLieu(ing_name, ing_amount, ing_unit_id, ing_ip_id)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO ingredient()"
            + " VALUES(NULL, ?, ?, ?, ?)", [ing_name, ing_amount, ing_unit_id, ing_ip_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async AddGiaNguyenLieu(ip_ing_name, ip_price, ip_date){
        return new Promise(resolve =>{
            db.query("INSERT INTO ingredient_price( ip_id, ip_ing_name, ip_price, ip_date)"
            + " VALUES(NULL, ?, ?, ?)", [ip_ing_name, ip_price, ip_date], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async ChinhGiaNguyenLieu(ip_id, ip_price, ip_date)
    {
        return new Promise(resolve =>{
            db.query("UPDATE ingredient_price"
            + " SET ip_price = ?,"
            + " ip_date = ?"
            + " WHERE ip_id = ?", [ip_price, ip_date, ip_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async EditNguyenLieu(ing_name, ing_amount, ing_unit_id, ing_ip_id, ing_id)
    {
        return new Promise(resolve =>{
            db.query("UPDATE ingredient"
            + " SET ing_name = ?, ing_amount = ?, ing_unit_id = ?, ing_ip_id = ?"
            + " WHERE ing_id = ?", [ing_name, ing_amount, ing_unit_id, ing_ip_id, ing_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    // Đơn nhập
    static async UpdateNguyenLieu(ing_id, ing_amount)
    {
        return new Promise(resolve =>{
            db.query("UPDATE ingredient"
            + " SET ing_amount = ?"
            + " WHERE ing_id = ?", [ing_amount, ing_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }
}

module.exports = NguyenLieuModel