const db = require('../config/mydb');

class ThongKeModel {
    static async GetThongKe()
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM statistical ORDER BY s_id DESC", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetLastThongKe()
    {
        return new Promise(resolve =>{
            db.query("SELECT s_id FROM statistical ORDER BY s_id DESC LIMIT 1", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetThongKeById(s_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM statistical"
            + " WHERE s_id = ?"
            + " ORDER BY s_id DESC", [s_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async UpdateDoanhThu(s_id, o_cost)
    {
        return new Promise( resolve =>{
            db.query("UPDATE statistical"
            + " SET s_export = s_export + ?,"
            + " s_profit = s_export - s_import"
            + " WHERE s_id = ?", [o_cost, s_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async UpdateChiPhiNhap(s_id, o_cost)
    {
        return new Promise( resolve =>{
            db.query("UPDATE statistical"
            + " SET s_import = s_import + ?,"
            + " s_profit = s_export - s_import"
            + " WHERE s_id = ?", [o_cost, s_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async UpdateLuongNV(s_id, luong)
    {
        return new Promise( resolve =>{
            db.query("UPDATE statistical"
            + " SET s_import = s_import + ?,"
            + " s_profit = s_export - s_import"
            + " WHERE s_id = ?", [luong, s_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async UpdatePhiPhatSinh(s_id, luong)
    {
        return new Promise( resolve =>{
            db.query("UPDATE statistical"
            + " SET s_import = s_import + ?,"
            + " s_profit = s_export - s_import"
            + " WHERE s_id = ?", [luong, s_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async CreateThongKe(s_name, s_import, s_export, s_profit, s_date)
    {
        return new Promise( resolve=>{
            db.query("INSERT INTO statistical(s_id, s_name, s_import, s_export, s_profit, s_date, s_br_id)"
            + " VALUES(NULL, ?, ?, ?, ?, ?, 1)", [s_name, s_import, s_export, s_profit, s_date], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }

    static async GetThongKeTheoNgay(date_begin, date_end)
    {
        return new Promise(resolve=>{
            db.query("SELECT * FROM statistical"
            + " WHERE s_date >= ? AND s_date <= ?", [date_begin + ' 00:00:00', date_end+ ' 23:59:59'], (err, result)=>{
                if(!err) 
                    resolve(result);
                else 
                    console.log(err);
            })
        })
    }

    static async GetThongKeTheoNgayDonDat(date_begin, date_end)
    {
        return new Promise(resolve=>{
            db.query("SELECT o.o_id, o.o_t_id, o.o_cost, o.o_time "
            + " FROM statistical stt, orders o"
            + " WHERE stt.s_id = o.o_s_id"
            + " AND stt.s_date >= ? AND stt.s_date <= ?", [date_begin + ' 00:00:00', date_end+ ' 23:59:59'], (err, result)=>{
                if(!err) 
                    resolve(result);
                else 
                    console.log(err);
            })
        })
    }

    static async GetThongKeTheoNgayNhanVien(date_begin, date_end)
    {
        return new Promise(resolve=>{
            db.query("SELECT tk.tk_id, u.u_name, tk.tk_date, tk.tk_note"
            + " FROM statistical stt, timekeeping tk, users u"
            + " WHERE stt.s_id = tk.t_s_id"
            + " AND tk.tk_u_id = u.u_id"
            + " AND stt.s_date >= ? AND stt.s_date <= ?", [date_begin + ' 00:00:00', date_end+ ' 23:59:59'], (err, result)=>{
                if(!err) 
                    resolve(result);
                else 
                    console.log(err);
            })
        })
    }

    static async GetThongKeTheoNgayDonNhap(date_begin, date_end)
    {
        return new Promise(resolve=>{
            db.query("SELECT ib.ib_id, ib.ib_name, ib.ib_date, ib.ib_cost"
            + " FROM statistical stt, import_bill ib"
            + " WHERE stt.s_id = ib.ib_s_id"
            + " AND stt.s_date >= ? AND stt.s_date <= ?", [date_begin + ' 00:00:00', date_end+ ' 23:59:59'], (err, result)=>{
                if(!err) 
                    resolve(result);
                else 
                    console.log(err);
            })
        })
    }

    static async GetThongKeTheoNgayPhiPhatSinh(date_begin, date_end)
    {
        return new Promise(resolve=>{
            db.query("SELECT ci.ci_id, ci.ci_name, ci.ci_cost, u.u_name"
            + " FROM statistical stt, costs_incurred ci, users u"
            + " WHERE stt.s_id = ci.ci_stt_id"
            + " AND ci.ci_u_id = u.u_id"
            + " AND stt.s_date >= ? AND stt.s_date <= ?", [date_begin + ' 00:00:00', date_end+ ' 23:59:59'], (err, result)=>{
                if(!err) 
                    resolve(result);
                else 
                    console.log(err);
            })
        })
    }
}

module.exports = ThongKeModel