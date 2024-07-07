const db = require('../config/mydb');

class PhaCheModel{
    static async GetPhaChe(){
        return new Promise(resolve =>{
            db.query("SELECT * "
            + " FROM bartending", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
    
    static async GetPhaCheById(b_id){
        return new Promise(resolve =>{
            db.query("SELECT pro.pro_name, pro.pro_b_id, b.b_id, b.b_name, b.b_description, bd.bd_id, bd.bd_b_id, bd.bd_ing_id, bd.bd_amount, ing.ing_id, ing.ing_name, ing.ing_amount, u.unit_name"
            + " FROM products pro, bartending b, bartending_detail bd, ingredient ing, unit u"
            + " WHERE pro.pro_b_id = b.b_id"
            + " AND bd.bd_b_id = b.b_id"
            + " AND bd.bd_ing_id = ing.ing_id"
            + " AND ing.ing_unit_id = u.unit_id"
            + " AND bd.bd_b_id = ?", [b_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    } 

    static async GetPhaCheByB_Id(b_id){
        return new Promise(resolve =>{
            db.query("SELECT pro.pro_name, pro.pro_b_id, b.b_id, b.b_name, b.b_description"
            + " FROM products pro, bartending b"
            + " WHERE pro.pro_b_id = b.b_id"
            + " AND pro.pro_b_id = ?", [b_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    } 

    static async GetChiTietPhaCheByB_Id(b_id){
        return new Promise(resolve =>{
            db.query("SELECT b.b_id, b.b_name, b.b_description, bd.bd_id, bd.bd_b_id, bd.bd_ing_id, bd.bd_amount, ing.ing_id, ing.ing_name, ing.ing_amount, u.unit_name"
            + " FROM bartending b, bartending_detail bd, ingredient ing, unit u"
            + " WHERE bd.bd_b_id = b.b_id"
            + " AND bd.bd_ing_id = ing.ing_id"
            + " AND ing.ing_unit_id = u.unit_id"
            + " AND b.b_id = ?", [b_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    } 
    
    static async GetPhaCheByProId(pro_id){
        return new Promise(resolve =>{
            db.query("SELECT pro.pro_name, pro.pro_b_id, b.b_id, b.b_name, b.b_description, bd.bd_id, bd.bd_b_id, bd.bd_ing_id, bd.bd_amount, ing.ing_id, ing.ing_name, ing.ing_amount, u.unit_name"
            + " FROM products pro, bartending b, bartending_detail bd, ingredient ing, unit u"
            + " WHERE pro.pro_b_id = b.b_id"
            + " AND bd.bd_b_id = b.b_id"
            + " AND bd.bd_ing_id = ing.ing_id"
            + " AND ing.ing_unit_id = u.unit_id"
            + " AND pro.pro_id = ?", [pro_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async AddChiTietPhaChe(bd_b_id, bd_ing_id, bd_amount)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO bartending_detail(bd_id, bd_b_id, bd_ing_id, bd_amount)"
            + " VALUES(NULL, ?, ?, ?)", [bd_b_id, bd_ing_id, bd_amount], (err, result)=>{
                if(!err) resolve(true);
            }
            )
        })
    }

    static async DeleteChiTietPhaChe(bd_id)
    {
        return new Promise(resolve =>{
            db.query("DELETE FROM bartending_detail"
            + " WHERE bd_id = ?", [bd_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async UpdatePhaChe(b_id, b_description){
        return new Promise(resolve =>{
            db.query("UPDATE bartending SET b_description = ?"
            + " WHERE b_id = ?", [b_description, b_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async AddCachPhaChe(b_name, b_description){
        return new Promise(resolve =>{
            db.query("INSERT INTO bartending"
            + " VALUES(NULL, ?, ?)", [b_name, b_description], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }
}

module.exports = PhaCheModel