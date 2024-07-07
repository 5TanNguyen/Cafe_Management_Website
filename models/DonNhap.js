const db = require('../config/mydb');

class DonNhapModel{
    static async GetDonNhap()
    {
        return new Promise(resolve =>{
            db.query("SELECT ib.ib_id, ib.ib_name, ib.ib_date, ib.ib_cost, s.s_id, s.s_name"
            + " FROM import_bill ib, statistical s"
            + " WHERE ib.ib_s_id = s.s_id"
            + " ORDER BY ib.ib_id DESC", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
    
    static async GetDonNhapById(ib_id)
    {
        return new Promise(resolve=>{
            db.query("SELECT * FROM import_bill"
            + " WHERE ib_id = ?", [ib_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async CreateDonNhap(ib_name, ib_date, ib_s_id, ib_br_id)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO import_bill(ib_id, ib_name, ib_date, ib_cost, ib_s_id, ib_br_id)"
            + " VALUES(null, ?, ?, 0, ?, ?)", [ib_name, ib_date, ib_s_id, ib_br_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async GetChiTietDonNhap(ib_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT ibd.ibd_id, ing.ing_id, ing.ing_name, ing.ing_amount, ib.ib_id, ib.ib_name, ib.ib_cost, s.s_id, s.s_name, ibd.ibd_amount, ibd.ibd_cost, u.unit_name"
            + " FROM import_bill_detail ibd, import_bill ib, statistical s, ingredient ing, unit u"
            + " WHERE ibd.ibd_ib_id = ib.ib_id"
            + " AND ib.ib_s_id = s.s_id"
            + " AND ibd.ibd_ing_id = ing.ing_id"
            + " AND ing.ing_unit_id = u.unit_id"
            + " AND ibd.ibd_ib_id = ?", [ib_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async CreateChiTietDonNhap(ibd_ib_id, ibd_ing_id, ibd_amount, ibd_cost)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO import_bill_detail(ibd_id, ibd_ib_id, ibd_ing_id, ibd_amount, ibd_cost )"
            + " VALUES(NULL, ?, ?, ?, ?)", [ibd_ib_id, ibd_ing_id, ibd_amount, ibd_cost], (err, result)=>{
                if(!err) resolve(true);
            })
        })
       
    }

    static async GetGiaDonNhap(ib_id)
    {
        return new Promise(resolve=>{
            db.query("SELECT ib_cost FROM import_bill"
            + " WHERE ib_id = ? ", [ib_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async UpdateGiaDonNhap(ib_id, ib_cost)
    {
        return new Promise(resolve=>{
            db.query("UPDATE import_bill SET ib_cost = ?"
            + " WHERE ib_id = ?", [ib_cost, ib_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async GetDonNhapByS_Id(s_id)
    {
        return new Promise(resolve => {
            db.query("SELECT * FROM import_bill"
            + " WHERE ib_s_id = ?", [s_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetDonNhapByS_Id_and_br_id(s_id, br_id)
    {
        return new Promise(resolve => {
            db.query("SELECT * FROM import_bill"
            + " WHERE ib_s_id = ?"
            + " AND ib_br_id = ?", [s_id, br_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
}

module.exports = DonNhapModel