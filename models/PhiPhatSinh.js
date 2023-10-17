const db = require('../config/db')

class PhiPhatSinhModel
{
    static async GetPhiPhatSinh()
    {
        return new Promise(resolve =>{
            db.query("SELECT ci.ci_id, ci.ci_name, ci.ci_cost, ci.ci_u_id, u.u_name"
            + " FROM costs_incurred ci, users u"
            + " WHERE ci.ci_u_id = u.u_id"
            + " ORDER BY ci.ci_id DESC", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async GetPhiPhatSinhById(ci_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT ci.ci_id, ci.ci_name, ci.ci_cost, ci.ci_u_id, u.u_name"
            + " FROM costs_incurred ci, users u"
            + " WHERE ci.ci_u_id = u.u_id"
            + " AND ci.ci_stt_id = ?"
            + " ORDER BY ci.ci_id DESC", [ci_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }
    
    static async GetPhiPhatSinhById_and_br_id(ci_id, br_id)
    {
        return new Promise(resolve =>{
            db.query("SELECT ci.ci_id, ci.ci_name, ci.ci_cost, ci.ci_u_id, u.u_name"
            + " FROM costs_incurred ci, users u"
            + " WHERE ci.ci_u_id = u.u_id"
            + " AND ci.ci_stt_id = ?"
            + " AND ci.ci_br_id = ?"
            + " ORDER BY ci.ci_id DESC", [ci_id, br_id], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

    static async AddPhiPhatSinh(ci_name, ci_cost, ci_u_id, ci_stt_id, ci_br_id)
    {
        return new Promise(resolve =>{
            db.query("INSERT INTO costs_incurred values(NULL, ?, ?, ?, ?, ?)", [ci_name, ci_cost, ci_u_id, ci_stt_id, ci_br_id], (err, result)=>{
                if(!err) resolve(true);
            })
        })
    }
}

module.exports = PhiPhatSinhModel