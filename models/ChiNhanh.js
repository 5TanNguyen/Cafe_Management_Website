const db = require('../config/db');

class ChiNhanhModel {
    static async GetChiNhanh()
    {
        return new Promise(resolve =>{
            db.query("SELECT * FROM branch ORDER BY br_id", [], (err, result)=>{
                if(!err) resolve(result);
            })
        })
    }

}

module.exports = ChiNhanhModel