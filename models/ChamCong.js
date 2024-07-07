const db = require('../config/mydb');

class ChamCongModel {
    static  async ChamCong(tk_u_id, tk_s_id, tk_date, tk_note, t_s_id, tk_br_id, cd_id, hours)
    {
        return new Promise(resolve =>{
           db.query("INSERT INTO timekeeping" //(tk_id, tk_u_id, tk_s_id, tk_date, tk_note, t_s_id, tk_br_id, cd_id)"
           + " VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?)", [tk_u_id, tk_s_id, tk_date, tk_note, t_s_id, tk_br_id, cd_id, hours], (error, result)=>{
               if(!error)   resolve(true);
           }) 
        })
    }

    static async GetChamCongByS_Id(s_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT tk.tk_id, u.u_name, s.s_name, tk.tk_date, tk.tk_note, tk.tk_cost"
            + " FROM timekeeping tk, shifts s, users u"
            + " WHERE tk.tk_s_id = s.s_id"
            + " AND tk.tk_u_id = u.u_id"
            + " AND tk.t_s_id = ?", [s_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetChamCongByU_Id(u_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT tk.tk_id, u.u_name, s.s_name, tk.tk_date, tk.tk_note"
            + " FROM timekeeping tk, shifts s, users u"
            + " WHERE tk.tk_s_id = s.s_id"
            + " AND tk.tk_u_id = u.u_id"
            + " AND u.u_id = ?", [u_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetChamCongByS_Id_And_br_id(s_id, br_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT tk.tk_id, u.u_name, s.s_name, tk.tk_date, tk.tk_note"
            + " FROM timekeeping tk, shifts s, users u"
            + " WHERE tk.tk_s_id = s.s_id"
            + " AND tk.tk_u_id = u.u_id"
            + " AND tk.t_s_id = ?"
            + " AND tk.tk_br_id = ?", [s_id, br_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
}

module.exports = ChamCongModel